import { stripe } from '../../../lib/stripe';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';
import { requireCourseAuth } from '../../../lib/course';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sessionId = typeof req.query.session_id === 'string' ? req.query.session_id : '';

  if (!sessionId) {
    return res.status(400).json({ error: 'Falta el identificador de la sesión de pago.' });
  }

  const { claims } = await requireCourseAuth(req, res);

  if (!claims?.sub) {
    return res.status(401).json({ error: 'Debes iniciar sesión.' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const userId = session.metadata?.supabase_user_id || session.client_reference_id;
    const courseSlug = session.metadata?.course_slug;

    if (userId !== claims.sub || courseSlug !== 'curso-panaderia') {
      return res.status(403).json({ error: 'La sesión de pago no pertenece a esta cuenta.' });
    }

    if (session.status !== 'complete') {
      return res.status(200).json({ status: 'pending' });
    }

    if (session.payment_status !== 'paid') {
      return res.status(200).json({ status: 'pending' });
    }

    const { data: course, error: courseError } = await supabaseAdmin
      .from('courses')
      .select('id')
      .eq('slug', 'curso-panaderia')
      .single();

    if (courseError) throw courseError;

    const { data: access, error: accessError } = await supabaseAdmin
      .from('course_access')
      .select('id')
      .eq('user_id', claims.sub)
      .eq('course_id', course.id)
      .is('revoked_at', null)
      .maybeSingle();

    if (accessError) throw accessError;

    if (!access) {
      return res.status(200).json({ status: 'pending' });
    }

    return res.status(200).json({ status: 'ready' });
  } catch (error) {
    console.error('Error checking Stripe payment status:', error);
    return res.status(500).json({ error: 'No fue posible comprobar el estado del pago.' });
  }
}
