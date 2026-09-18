-- CursoPanadero — RLS and access policies
-- Public course content is readable but not writable by client roles.
-- User progress/profile data is restricted to the authenticated user.

alter table public.courses enable row level security;
alter table public.modules enable row level security;
alter table public.lessons enable row level security;
alter table public.recipes enable row level security;
alter table public.lesson_recipes enable row level security;
alter table public.recipe_ingredients enable row level security;
alter table public.recipe_steps enable row level security;
alter table public.techniques enable row level security;
alter table public.recipe_techniques enable row level security;
alter table public.equipment enable row level security;
alter table public.recipe_equipment enable row level security;
alter table public.chibis enable row level security;
alter table public.chibi_interventions enable row level security;
alter table public.recipe_variants enable row level security;
alter table public.evaluations enable row level security;
alter table public.evaluation_items enable row level security;
alter table public.profiles enable row level security;
alter table public.lesson_progress enable row level security;
alter table public.recipe_progress enable row level security;
alter table public.evidence enable row level security;
alter table public.competency_progress enable row level security;

create policy "public can read courses" on public.courses for select using (true);
create policy "public can read modules" on public.modules for select using (true);
create policy "public can read lessons" on public.lessons for select using (true);
create policy "public can read recipes" on public.recipes for select using (true);
create policy "public can read lesson_recipes" on public.lesson_recipes for select using (true);
create policy "public can read recipe_ingredients" on public.recipe_ingredients for select using (true);
create policy "public can read recipe_steps" on public.recipe_steps for select using (true);
create policy "public can read techniques" on public.techniques for select using (true);
create policy "public can read recipe_techniques" on public.recipe_techniques for select using (true);
create policy "public can read equipment" on public.equipment for select using (true);
create policy "public can read recipe_equipment" on public.recipe_equipment for select using (true);
create policy "public can read chibis" on public.chibis for select using (true);
create policy "public can read chibi_interventions" on public.chibi_interventions for select using (true);
create policy "public can read recipe_variants" on public.recipe_variants for select using (true);
create policy "public can read evaluations" on public.evaluations for select using (true);
create policy "public can read evaluation_items" on public.evaluation_items for select using (true);

create policy "users can read own profile" on public.profiles for select to authenticated using (id = (select auth.uid()));
create policy "users can update own profile" on public.profiles for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));
create policy "users can insert own profile" on public.profiles for insert to authenticated with check (id = (select auth.uid()));

create policy "users can read own lesson progress" on public.lesson_progress for select to authenticated using (user_id = (select auth.uid()));
create policy "users can insert own lesson progress" on public.lesson_progress for insert to authenticated with check (user_id = (select auth.uid()));
create policy "users can update own lesson progress" on public.lesson_progress for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "users can delete own lesson progress" on public.lesson_progress for delete to authenticated using (user_id = (select auth.uid()));

create policy "users can read own recipe progress" on public.recipe_progress for select to authenticated using (user_id = (select auth.uid()));
create policy "users can insert own recipe progress" on public.recipe_progress for insert to authenticated with check (user_id = (select auth.uid()));
create policy "users can update own recipe progress" on public.recipe_progress for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "users can delete own recipe progress" on public.recipe_progress for delete to authenticated using (user_id = (select auth.uid()));

create policy "users can read own evidence" on public.evidence for select to authenticated using (user_id = (select auth.uid()));
create policy "users can insert own evidence" on public.evidence for insert to authenticated with check (user_id = (select auth.uid()));
create policy "users can update own evidence" on public.evidence for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "users can delete own evidence" on public.evidence for delete to authenticated using (user_id = (select auth.uid()));

create policy "users can read own competency progress" on public.competency_progress for select to authenticated using (user_id = (select auth.uid()));
create policy "users can insert own competency progress" on public.competency_progress for insert to authenticated with check (user_id = (select auth.uid()));
create policy "users can update own competency progress" on public.competency_progress for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "users can delete own competency progress" on public.competency_progress for delete to authenticated using (user_id = (select auth.uid()));