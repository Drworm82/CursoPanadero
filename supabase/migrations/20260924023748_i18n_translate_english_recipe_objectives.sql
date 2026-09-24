-- Complete the English metadata for the first translated recipes.
-- The i18n foundation initially copied source_objective into English rows.
-- Replace that copied Spanish text with the English course objective.

update public.recipe_translations rt
set source_objective = case r.slug
  when 'rosca-pina-colada' then 'The student will learn to identify basic pastry ingredients and will also learn the creaming method for heavy batters.'
  when 'panque-platano-streusel-canela' then 'The student will learn to prepare and bake heavy batters using a method different from the creaming method.'
  when 'marmoleado-intenso-cafe' then 'The student will learn to identify basic pastry ingredients and will reinforce the creaming method through a coffee marble cake.'
  when 'panque-citricos' then 'The student will reinforce the creaming method and observe how citrus juice changes the mixing and finishing process.'
  when 'brownie-chocolate-amargo-nueces' then 'The student will apply the heavy-batter approach to a brownie and observe how the formula and mixing process affect the final structure.'
  when 'financier' then 'The student will compare a small-format cake with previous heavy-batter preparations and observe how its formula affects texture and shape.'
  when 'madeleine' then 'The student will observe how a small-format batter is mixed, rested, baked, and finished, relating the process to the structure obtained.'
  when 'muffins-chocolate' then 'The student will prepare chocolate muffins and observe how the mixing method and baking conditions affect their structure.'
  when 'muffins-vainilla' then 'The student will prepare vanilla muffins and compare their process and result with other small-format preparations.'
  when 'red-velvet' then 'The student will prepare a red velvet cake and observe how its ingredients, mixing process, and finishing contribute to the final result.'
end
from public.recipes r
where rt.recipe_id = r.id
  and rt.locale = 'en'
  and r.slug in (
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
  );
