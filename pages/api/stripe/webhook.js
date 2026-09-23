import { buffer } from 'micro';
import { stripe } from '../../../lib/stripe';
import { supabaseAdmin } from '../../../lib/supabaseAdmin';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method not allowed');
  }

  const signature = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return res.status(400).send('Missing Stripe webhook configuration');
  }

  let event;

  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
  } catch (error) {
    console.error('Stripe webhook signature verification failed:', error);
    return res.status(400).send('Invalid webhook signature');
  }

  try {
    const { data: existingEvent, error: eventLookupError } = await supabaseAdmin
      .from('stripe_webhook_events')
      .select('id, processed_at')
      .eq('stripe_event_id', event.id)
      .maybeSingle();

    if (eventLookupError) throw eventLookupError;

    if (existingEvent?.processed_at) {
      return res.status(200).json({ received: true, duplicate: true });
    }

    if (!existingEvent) {
      const { error: insertEventError } = await supabaseAdmin
        .from('stripe_webhook_events')
        .insert({
          stripe_event_id: event.id,
          event_type: event.type,
        });

      if (insertEventError && insertEventError.code !== '23505') {
        throw insertEventError;
      }
    }

    if (
      event.type === 'checkout.session.completed' ||
      event.type === 'checkout.session.async_payment_succeeded'
    ) {
      await processSuccessfulCheckout(event.data.object);
    } else if (event.type === 'checkout.session.async_payment_failed') {
      await updatePayment(event.data.object, 'failed');
    }

    const { error: processedError } = await supabaseAdmin
      .from('stripe_webhook_events')
      .update({ processed_at: new Date().toISOString() })
      .eq('stripe_event_id', event.id);

    if (processedError) throw processedError;

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Stripe webhook processing failed:', error);
    return res.status(500).send('Webhook processing failed');
  }
}

async function processSuccessfulCheckout(session) {
  const userId = session.metadata?.supabase_user_id || session.client_reference_id;
  const courseSlug = session.metadata?.course_slug;

  if (!userId || courseSlug !== 'curso-panaderia') {
    throw new Error('Checkout session is missing valid course metadata');
  }

  if (session.payment_status !== 'paid') {
    await updatePayment(session, 'pending');
    return;
  }

  if (session.currency !== 'mxn' || session.amount_total !== 49900) {
    throw new Error('Checkout session amount or currency does not match the course price');
  }

  const { data: course, error: courseError } = await supabaseAdmin
    .from('courses')
    .select('id')
    .eq('slug', courseSlug)
    .single();

  if (courseError) throw courseError;

  const { error: paymentError } = await supabaseAdmin
    .from('stripe_payments')
    .upsert(
      {
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent || null,
        user_id: userId,
        course_id: course.id,
        status: 'paid',
        amount_total: session.amount_total,
        currency: session.currency,
        paid_at: new Date().toISOString(),
      },
      { onConflict: 'stripe_checkout_session_id' }
    );

  if (paymentError) throw paymentError;

  const { error: accessError } = await supabaseAdmin
    .from('course_access')
    .upsert(
      {
        user_id: userId,
        course_id: course.id,
        granted_at: new Date().toISOString(),
        revoked_at: null,
      },
      { onConflict: 'user_id,course_id' }
    );

  if (accessError) throw accessError;
}

async function updatePayment(session, status) {
  const userId = session.metadata?.supabase_user_id || session.client_reference_id;
  const courseSlug = session.metadata?.course_slug;

  if (!userId || courseSlug !== 'curso-panaderia') return;

  const { data: course } = await supabaseAdmin
    .from('courses')
    .select('id')
    .eq('slug', courseSlug)
    .maybeSingle();

  if (!course) return;

  const { error } = await supabaseAdmin
    .from('stripe_payments')
    .upsert(
      {
        stripe_checkout_session_id: session.id,
        stripe_payment_intent_id: session.payment_intent || null,
        user_id: userId,
        course_id: course.id,
        status,
        amount_total: session.amount_total || null,
        currency: session.currency || null,
      },
      { onConflict: 'stripe_checkout_session_id' }
    );

  if (error) throw error;
}
