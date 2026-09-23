create table if not exists public.lesson_translations (
  lesson_id uuid not null references public.lessons(id) on delete cascade,
  locale text not null check (locale in ('es', 'en')),
  title text not null,
  objective text,
  primary key (lesson_id, locale)
);

create table if not exists public.recipe_translations (
  recipe_id uuid not null references public.recipes(id) on delete cascade,
  locale text not null check (locale in ('es', 'en')),
  title text not null,
  source_objective text,
  pedagogical_role text,
  primary key (recipe_id, locale)
);

alter table public.lesson_translations enable row level security;
alter table public.recipe_translations enable row level security;

drop policy if exists "course members can read lesson translations" on public.lesson_translations;
create policy "course members can read lesson translations"
  on public.lesson_translations
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

drop policy if exists "course members can read recipe translations" on public.recipe_translations;
create policy "course members can read recipe translations"
  on public.recipe_translations
  for select
  to authenticated
  using (public.has_active_course_access('curso-panaderia'));

insert into public.lesson_translations (lesson_id, locale, title, objective)
select id, 'es', title, objective
from public.lessons
where not exists (
  select 1 from public.lesson_translations t
  where t.lesson_id = public.lessons.id and t.locale = 'es'
);

insert into public.recipe_translations (recipe_id, locale, title, source_objective, pedagogical_role)
select id, 'es', title, source_objective, pedagogical_role
from public.recipes
where not exists (
  select 1 from public.recipe_translations t
  where t.recipe_id = public.recipes.id and t.locale = 'es'
);

insert into public.lesson_translations (lesson_id, locale, title, objective)
select id, 'en',
  case slug
    when 'entrar-a-la-panaderia' then 'Entering baking'
    when 'primer-panque-acremado' then 'First pound cake: creaming method'
    when 'segunda-ruta-aceite' then 'Second route: oil'
    when 'repeticion-con-criterio' then 'Repeat with intention'
    when 'el-horno-tambien-es-parte' then 'The oven is part of the process'
    when 'mini-reto-que-cambio' then 'Mini challenge: what changed?'
  end,
  case slug
    when 'entrar-a-la-panaderia' then 'Recognize the learning path for the module and establish what to observe during the preparation, mixing, and baking of heavy batters.'
    when 'primer-panque-acremado' then 'Execute the creaming method in a heavy batter and identify texture changes during mixing.'
    when 'segunda-ruta-aceite' then 'Execute a heavy batter made with oil and compare its method with the creaming method.'
    when 'repeticion-con-criterio' then 'Repeat the creaming method while observing its stages and avoid overmixing when incorporating the dry ingredients.'
    when 'el-horno-tambien-es-parte' then 'Recognize how the baking conditions indicated for a heavy batter relate to the observed result.'
    when 'mini-reto-que-cambio' then 'Compare the preparations worked on in the module and explain what changed between methods, mixing, and baking.'
  end
from public.lessons
where slug in (
  'entrar-a-la-panaderia',
  'primer-panque-acremado',
  'segunda-ruta-aceite',
  'repeticion-con-criterio',
  'el-horno-tambien-es-parte',
  'mini-reto-que-cambio'
)
and not exists (
  select 1 from public.lesson_translations t
  where t.lesson_id = public.lessons.id and t.locale = 'en'
);

insert into public.recipe_translations (recipe_id, locale, title, source_objective, pedagogical_role)
select id, 'en',
  case slug
    when 'rosca-pina-colada' then 'Piña Colada Ring Cake'
    when 'panque-platano-streusel-canela' then 'Banana Pound Cake with Cinnamon Streusel'
    when 'marmoleado-intenso-cafe' then 'Intense Coffee Marble Cake'
    when 'panque-citricos' then 'Citrus Pound Cake'
    when 'brownie-chocolate-amargo-nueces' then 'Dark Chocolate and Walnut Brownie'
    when 'financier' then 'Financier'
    when 'madeleine' then 'Madeleine'
    when 'muffins-chocolate' then 'Chocolate Muffins'
    when 'muffins-vainilla' then 'Vanilla Muffins'
    when 'red-velvet' then 'Red Velvet'
  end,
  source_objective,
  pedagogical_role
from public.recipes
where slug in (
  'rosca-pina-colada',
  'panque-platano-streusel-canela',
  'marmoleado-intenso-cafe',
  'panque-citricos',
  'brownie-chocolate-amargo-nueces',
  'financier',
  'madeleine',
  'muffins-chocolate',
  'muffins-vainilla',
  'red-velvet'
)
and not exists (
  select 1 from public.recipe_translations t
  where t.recipe_id = public.recipes.id and t.locale = 'en'
);
