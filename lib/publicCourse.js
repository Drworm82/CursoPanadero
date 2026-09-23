import { createClient } from '@supabase/supabase-js';

export function publicCourseClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
}

async function getLessonTranslation(supabase, lessonId, locale) {
  if (locale === 'es') return null;
  const { data, error } = await supabase
    .from('lesson_translations')
    .select('title, objective')
    .eq('lesson_id', lessonId)
    .eq('locale', locale)
    .maybeSingle();
  if (error) return null;
  return data;
}

async function getRecipeTranslations(supabase, recipeIds, locale) {
  if (locale === 'es' || !recipeIds.length) return {};
  const { data, error } = await supabase
    .from('recipe_translations')
    .select('recipe_id, title, source_objective, pedagogical_role')
    .in('recipe_id', recipeIds)
    .eq('locale', locale);
  if (error) return {};
  return Object.fromEntries((data || []).map((item) => [item.recipe_id, item]));
}

export async function getPublicLesson(slug, client, locale = 'es') {
  const supabase = client || publicCourseClient();
  const { data: lesson, error } = await supabase.from('lessons').select('id, slug, title, sort_order, objective').eq('slug', slug).single();
  if (error || !lesson) return null;

  const translation = await getLessonTranslation(supabase, lesson.id, locale);
  const localizedLesson = translation
    ? { ...lesson, title: translation.title, objective: translation.objective }
    : lesson;

  const { data: links, error: linksError } = await supabase
    .from('lesson_recipes')
    .select('sort_order, recipes (id, slug, title, pedagogical_role)')
    .eq('lesson_id', lesson.id)
    .order('sort_order');
  if (linksError) return null;

  const recipes = (links || []).map((x) => x.recipes).filter(Boolean);
  const translations = await getRecipeTranslations(supabase, recipes.map((recipe) => recipe.id), locale);
  const localizedRecipes = recipes.map((recipe) => {
    const recipeTranslation = translations[recipe.id];
    return recipeTranslation
      ? { ...recipe, title: recipeTranslation.title, pedagogical_role: recipeTranslation.pedagogical_role || recipe.pedagogical_role }
      : recipe;
  });

  return { lesson: localizedLesson, recipes: localizedRecipes };
}

export async function getPublicRecipe(slug, client, locale = 'es') {
  const supabase = client || publicCourseClient();
  const { data: recipe, error } = await supabase.from('recipes').select('id, slug, title, source_objective, difficulty, source_time, source_yield, pedagogical_role').eq('slug', slug).single();
  if (error || !recipe) return null;

  let localizedRecipe = recipe;
  if (locale !== 'es') {
    const { data: translation } = await supabase
      .from('recipe_translations')
      .select('title, source_objective, pedagogical_role')
      .eq('recipe_id', recipe.id)
      .eq('locale', locale)
      .maybeSingle();
    if (translation) localizedRecipe = { ...recipe, ...translation };
  }

  const [{ data: ingredients, error: ie }, { data: steps, error: se }] = await Promise.all([
    supabase.from('recipe_ingredients').select('id, sort_order, name, quantity, unit, notes').eq('recipe_id', recipe.id).order('sort_order'),
    supabase.from('recipe_steps').select('id, sort_order, title, instruction, observation, time_text, temperature_text').eq('recipe_id', recipe.id).order('sort_order')
  ]);
  if (ie || se) return null;
  return { recipe: localizedRecipe, ingredients: ingredients || [], steps: steps || [] };
}
