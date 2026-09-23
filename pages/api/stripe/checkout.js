import { stripe } from '../../../lib/stripe';
import { requireCourseAuth, requireCourseAccess } from '../../../lib/course';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { supabase, claims } = await requireCourseAuth(req, res);

  if (!claims?.sub) {
    return res.status(401).json({ error: 'Debes iniciar sesión antes de comprar.' });
  }

  const hasAccess = await requireCourseAccess(supabase);

  if (hasAccess) {
    return res.status(409).json({ error: 'Esta cuenta ya tiene acceso al curso.' });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const priceId = process.env.STRIPE_PRICE_ID;

  if (!priceId) {
    return res.status(500).json({ error: 'Stripe no está configurado todavía.' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      client_reference_id: claims.sub,
      metadata: {
        supabase_user_id: claims.sub,
        course_slug: 'curso-panaderia',
      },
      success_url: `${siteUrl}/pago-exitoso?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/comprar?cancelled=1`,
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe Checkout Session:', error);
    return res.status(500).json({ error: 'No fue posible iniciar el pago.' });
  }
}
