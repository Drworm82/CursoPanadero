-- Stripe payment records and webhook idempotency for the permanent course purchase.

create table public.stripe_payments (
  id uuid primary key default gen_random_uuid(),
  stripe_checkout_session_id text not null unique,
  stripe_payment_intent_id text unique,
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  status text not null check (status in ('pending', 'paid', 'failed')),
  amount_total integer,
  currency text,
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create index stripe_payments_user_idx on public.stripe_payments(user_id);
create index stripe_payments_course_idx on public.stripe_payments(course_id);

alter table public.stripe_payments enable row level security;

create policy "users can read own stripe payments"
  on public.stripe_payments
  for select
  to authenticated
  using (user_id = (select auth.uid()));

create table public.stripe_webhook_events (
  id uuid primary key default gen_random_uuid(),
  stripe_event_id text not null unique,
  event_type text not null,
  processed_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.stripe_webhook_events enable row level security;

-- Webhook event records are server-side implementation details.
revoke all on table public.stripe_webhook_events from anon, authenticated;
