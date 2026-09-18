import Link from 'next/link';
import CourseShell from '../../components/course/CourseShell';
import { requireCourseAuth } from '../../lib/course';
import RecipeProgress from '../../components/course/RecipeProgress';

export default function RecipePage({ recipe, ingredients, steps }) {
  return (
    <CourseShell eyebrow="Receta" title={recipe.title} description={recipe.source_objective}>
      <div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr]">
        <aside className="space-y-5">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Ficha</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-stone-500">Dificultad</dt><dd>{recipe.difficulty || '—'}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-stone-500">Tiempo</dt><dd>{recipe.source_time || '—'}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-stone-500">Rendimiento</dt><dd className="text-right">{recipe.source_yield || '—'}</dd></div>
            </dl>
          </div>
          <div className="rounded-2xl bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-900">Observación</p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              Antes de pasar al siguiente paso, mira la masa y compárala con lo que indica la instrucción.
            </p>
          </div>
        </aside>

        <section className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-stone-900">Ingredientes</h2>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              {ingredients.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-stone-100 px-5 py-3 text-sm last:border-0">
                  <span>{item.name}</span><span>{item.quantity ?? ''}</span><span className="text-stone-500">{item.unit || ''}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-stone-900">Proceso</h2>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={step.id} className="rounded-2xl border border-stone-200 bg-white p-6">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">{index + 1}</span>
                    <div>
                      <h3 className="font-semibold text-stone-900">{step.title || `Paso ${index + 1}`}</h3>
                      <p className="mt-2 leading-7 text-stone-700">{step.instruction}</p>
                      {(step.observation || step.time_text || step.temperature_text) && (
                        <div className="mt-4 rounded-xl bg-stone-50 p-4 text-sm text-stone-600">
                          {step.observation && <p>{step.observation}</p>}
                          {step.time_text && <p className="mt-1">Tiempo: {step.time_text}</p>}
                          {step.temperature_text && <p className="mt-1">Temperatura: {step.temperature_text}</p>}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <RecipeProgress recipeId={recipe.id} stepCount={steps.length} initialProgress={progress} />
          <Link href="/progreso" className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white">Ir a mi progreso</Link>
        </section>
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps({ req, res, params }) {
  const { supabase, user } = await requireCourseAuth(req, res);
  if (!user) return { redirect: { destination: '/acceso', permanent: false } };

  const { data: recipe, error } = await supabase
    .from('recipes')
    .select('id, slug, title, source_objective, difficulty, source_time, source_yield, pedagogical_role')
    .eq('slug', params.slug)
    .single();

  if (error || !recipe) return { notFound: true };

  const [{ data: ingredients, error: ingredientsError }, { data: steps, error: stepsError }, { data: progress }] = await Promise.all([
    supabase.from('recipe_ingredients').select('id, sort_order, name, quantity, unit, notes').eq('recipe_id', recipe.id).order('sort_order'),
    supabase.from('recipe_steps').select('id, sort_order, title, instruction, observation, time_text, temperature_text').eq('recipe_id', recipe.id).order('sort_order'),
    supabase.from('recipe_progress').select('status, current_step, completed_at').eq('recipe_id', recipe.id).eq('user_id', user.sub).maybeSingle(),
  ]);

  if (ingredientsError || stepsError) return { notFound: true };

  return { props: { recipe, ingredients: ingredients || [], steps: steps || [], progress: progress || null } };
}
