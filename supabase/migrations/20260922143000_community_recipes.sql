-- Community recipes shared by users.
-- Public recipes are readable by everyone; only authenticated users can create,
-- and authors can update/delete their own recipes.

create table public.community_recipes (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  ingredients text[] not null default '{}',
  steps text[] not null default '{}',
  image_url text,
  is_public boolean not null default true,
  created_at timestamptz not null default now()
);

create index community_recipes_created_at_idx
  on public.community_recipes(created_at desc);

alter table public.community_recipes enable row level security;

create policy "public can read public community recipes"
  on public.community_recipes
  for select
  using (is_public = true or author_id = (select auth.uid()));

create policy "users can create own community recipes"
  on public.community_recipes
  for insert
  to authenticated
  with check (author_id = (select auth.uid()));

create policy "users can update own community recipes"
  on public.community_recipes
  for update
  to authenticated
  using (author_id = (select auth.uid()))
  with check (author_id = (select auth.uid()));

create policy "users can delete own community recipes"
  on public.community_recipes
  for delete
  to authenticated
  using (author_id = (select auth.uid()));
