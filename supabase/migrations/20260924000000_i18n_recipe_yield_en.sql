alter table public.recipe_translations add column if not exists source_yield text;

update public.recipe_translations rt
set source_yield = case r.slug
  when 'rosca-pina-colada' then '1 large ring cake or 2 small rings'
  when 'panque-platano-streusel-canela' then '1 rectangular cake'
  when 'marmoleado-intenso-cafe' then '1 rectangular cake'
  when 'panque-citricos' then '1 cake, 11×25 cm'
  when 'brownie-chocolate-amargo-nueces' then '1 piece, 30×20 cm'
  when 'financier' then '20–24 pieces'
  when 'madeleine' then '18–20 pieces'
  when 'muffins-chocolate' then 'cupcakes'
  when 'muffins-vainilla' then 'cupcakes'
  when 'red-velvet' then 'cupcakes'
  else rt.source_yield
end
from public.recipes r
where rt.recipe_id = r.id
  and rt.locale = 'en'
  and r.slug in (
    'rosca-pina-colada','panque-platano-streusel-canela','marmoleado-intenso-cafe',
    'panque-citricos','brownie-chocolate-amargo-nueces','financier','madeleine',
    'muffins-chocolate','muffins-vainilla','red-velvet'
  );
