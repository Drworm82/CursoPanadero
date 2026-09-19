import { createClient } from '@supabase/supabase-js';

export function publicCourseClient() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
}

export async function getPublicLesson(slug) {
  const supabase = publicCourseClient();
  const { data: lesson, error } = await supabase.from('lessons').select('id, slug, title, sort_order, objective').eq('slug', slug).single();
  if (error || !lesson) return null;
  const { data: links, error: linksError } = await supabase.from('lesson_recipes').select('sort_order, recipes (id, slug, title, pedagogical_role)').eq('lesson_id', lesson.id).order('sort_order');
  if (linksError) return null;
  return { lesson, recipes: (links || []).map(x => x.recipes).filter(Boolean) };
}

export async function getPublicRecipe(slug) {
  const supabase = publicCourseClient();
  const { data: recipe, error } = await supabase.from('recipes').select('id, slug, title, source_objective, difficulty, source_time, source_yield, pedagogical_role').eq('slug', slug).single();
  if (error || !recipe) return null;
  const [{ data: ingredients, error: ie }, { data: steps, error: se }] = await Promise.all([
    supabase.from('recipe_ingredients').select('id, sort_order, name, quantity, unit, notes').eq('recipe_id', recipe.id).order('sort_order'),
    supabase.from('recipe_steps').select('id, sort_order, title, instruction, observation, time_text, temperature_text').eq('recipe_id', recipe.id).order('sort_order')
  ]);
  if (ie || se) return null;
  return { recipe, ingredients: ingredients || [], steps: steps || [] };
}
