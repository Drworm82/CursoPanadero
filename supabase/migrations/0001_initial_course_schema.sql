-- CursoPanadero — initial content/progress schema
-- Draft prepared in v19.
-- Apply only to the intended active Supabase project after review.

create extension if not exists pgcrypto;

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text,
  created_at timestamptz not null default now()
);

create table public.modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses(id) on delete cascade,
  slug text not null,
  title text not null,
  sort_order integer not null,
  guiding_question text,
  expected_result text,
  unique(course_id, slug)
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.modules(id) on delete cascade,
  slug text not null,
  title text not null,
  sort_order integer not null,
  lesson_type text not null default 'lesson',
  objective text,
  unique(module_id, slug)
);

create table public.recipes (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  source_id integer,
  source_class integer,
  source_objective text,
  source_demo boolean not null default false,
  difficulty text,
  source_time text,
  source_yield text,
  pedagogical_role text,
  production_enabled boolean not null default false,
  validation_status text not null default 'draft',
  created_at timestamptz not null default now()
);

create table public.lesson_recipes (
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  sort_order integer not null default 0,
  primary key (lesson_id, recipe_id)
);

create table public.recipe_ingredients (
  id uuid primary key default gen_random_uuid(),
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  sort_order integer not null default 0,
  name text not null,
  quantity numeric,
  unit text,
  notes text
);

create table public.recipe_steps (
  id uuid primary key default gen_random_uuid(),
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  sort_order integer not null,
  title text,
  instruction text not null,
  observation text,
  time_text text,
  temperature_text text,
  unique(recipe_id, sort_order)
);

create table public.techniques (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  explanation text,
  validation_status text not null default 'draft'
);

create table public.recipe_techniques (
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  technique_id uuid not null references public.techniques(id) on delete cascade,
  primary_technique boolean not null default false,
  primary key (recipe_id, technique_id)
);

create table public.equipment (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  function text,
  equipment_level integer,
  validation_status text not null default 'draft'
);

create table public.recipe_equipment (
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  equipment_id uuid not null references public.equipment(id) on delete cascade,
  requirement_type text not null default 'minimum',
  substitution text,
  primary key (recipe_id, equipment_id)
);

create table public.chibis (
  id uuid primary key default gen_random_uuid(),
  level integer not null check (level between 1 and 5),
  name text not null,
  description text
);

create table public.chibi_interventions (
  id uuid primary key default gen_random_uuid(),
  chibi_id uuid not null references public.chibis(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete cascade,
  recipe_id uuid references public.recipes(id) on delete cascade,
  trigger_context text,
  intervention text not null
);

create table public.recipe_variants (
  id uuid primary key default gen_random_uuid(),
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  variant_type text not null,
  description text not null,
  adjustment text,
  validation_status text not null default 'pending'
);

create table public.evaluations (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references public.lessons(id) on delete cascade,
  title text not null,
  instructions text
);

create table public.evaluation_items (
  id uuid primary key default gen_random_uuid(),
  evaluation_id uuid not null references public.evaluations(id) on delete cascade,
  sort_order integer not null,
  prompt text not null,
  competency_slug text
);

-- User identity/progress is intentionally separated from course content.
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz not null default now()
);

create table public.lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  status text not null default 'not_started',
  started_at timestamptz,
  completed_at timestamptz,
  primary key (user_id, lesson_id)
);

create table public.recipe_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  status text not null default 'not_started',
  current_step integer not null default 0,
  completed_at timestamptz,
  primary key (user_id, recipe_id)
);

create table public.evidence (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  lesson_id uuid references public.lessons(id) on delete cascade,
  evaluation_id uuid references public.evaluations(id) on delete cascade,
  response jsonb,
  result text,
  created_at timestamptz not null default now()
);

create table public.competency_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  competency_slug text not null,
  status text not null default 'introduced',
  evidence_count integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, competency_slug)
);

create index modules_course_sort_idx on public.modules(course_id, sort_order);
create index lessons_module_sort_idx on public.lessons(module_id, sort_order);
create index lesson_recipes_recipe_idx on public.lesson_recipes(recipe_id);
create index recipe_steps_recipe_idx on public.recipe_steps(recipe_id, sort_order);
create index lesson_progress_user_idx on public.lesson_progress(user_id);
create index recipe_progress_user_idx on public.recipe_progress(user_id);
