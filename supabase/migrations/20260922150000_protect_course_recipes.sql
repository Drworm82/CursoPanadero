-- Restrict course recipes to users with active course access.
-- Community recipes remain independent and public.

create table public.course_access (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  granted_at timestamptz not null default now(),
  revoked_at timestamptz,
  primary key (user_id, course_id)
);

create index course_access_user_idx on public.course_access(user_id);
create index course_access_course_idx on public.course_access(course_id);

alter table public.course_access enable row level security;

create policy "users can read own course access"
  on public.course_access
  for select
  to authenticated
  using (user_id = (select auth.uid()));

create or replace function public.has_active_course_access(target_course_slug text)
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists (
    select 1
    from public.course_access ca
    join public.courses c on c.id = ca.course_id
    where ca.user_id = (select auth.uid())
      and c.slug = target_course_slug
      and ca.revoked_at is null
  );
$$;

revoke all on function public.has_active_course_access(text) from public;
grant execute on function public.has_active_course_access(text) to anon, authenticated;

drop policy if exists "public can read recipes" on public.recipes;
drop policy if exists "public can read lesson_recipes" on public.lesson_recipes;
drop policy if exists "public can read recipe_ingredients" on public.recipe_ingredients;
drop policy if exists "public can read recipe_steps" on public.recipe_steps;
drop policy if exists "public can read recipe_techniques" on public.recipe_techniques;
drop policy if exists "public can read recipe_equipment" on public.recipe_equipment;
drop policy if exists "public can read recipe_variants" on public.recipe_variants;

create policy "course members can read recipes"
  on public.recipes
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

create policy "course members can read lesson_recipes"
  on public.lesson_recipes
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

create policy "course members can read recipe_ingredients"
  on public.recipe_ingredients
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

create policy "course members can read recipe_steps"
  on public.recipe_steps
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

create policy "course members can read recipe_techniques"
  on public.recipe_techniques
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

create policy "course members can read recipe_equipment"
  on public.recipe_equipment
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

create policy "course members can read recipe_variants"
  on public.recipe_variants
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));
