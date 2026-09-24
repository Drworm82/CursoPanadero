import Link from 'next/link';
import { useRouter } from 'next/router';
import CourseShell from '../../components/course/CourseShell';
import { createCourseServerClient, requireCourseAccess, requireCourseAuth } from '../../lib/course';
import { getPublicRecipe } from '../../lib/publicCourse';
import RecipeProgress from '../../components/course/RecipeProgress';

function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value || '');
}

function CommunityRecipeView({ recipe }) {
  const { locale = 'es' } = useRouter();
  const isEnglish = locale === 'en';

  return (
    <CourseShell
      eyebrow={isEnglish ? 'Community' : 'Comunidad'}
      title={recipe.title}
      description={recipe.description || (isEnglish ? 'Recipe shared by the community.' : 'Receta compartida por la comunidad.')}
    >
      <div className="mx-auto max-w-4xl space-y-8">
        {recipe.image_url && (
          <img
            src={recipe.image_url}
            alt={recipe.title}
            className="w-full rounded-2xl border border-stone-200 object-cover"
          />
        )}

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-stone-900">{isEnglish ? 'Ingredients' : 'Ingredientes'}</h2>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            {recipe.ingredients.length > 0 ? (
              <ul className="list-disc space-y-2 pl-5 text-stone-700">
                {recipe.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
              </ul>
            ) : (
              <p className="text-stone-500">
                {isEnglish ? 'No ingredients were specified.' : 'No se especificaron ingredientes.'}
              </p>
            )}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-stone-900">{isEnglish ? 'Preparation' : 'Preparación'}</h2>
          <ol className="space-y-4">
            {recipe.steps.map((step, index) => (
              <li key={index} className="rounded-2xl border border-stone-200 bg-white p-6">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">{index + 1}</span>
                  <p className="leading-7 text-stone-700">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Link href="/recetas" className="inline-flex rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700">
          ← {isEnglish ? 'Back to recipes' : 'Volver a recetas'}
        </Link>
      </div>
    </CourseShell>
  );
}

function CourseRecipeView({ recipe, ingredients, steps, progress }) {
  const { locale = 'es' } = useRouter();
  const isEnglish = locale === 'en';

  return (
    <CourseShell
      eyebrow={isEnglish ? 'Recipe' : 'Receta'}
      title={recipe.title}
      description={recipe.source_objective}
    >
      <div className="grid gap-6 lg:grid-cols-[.65fr_1.35fr]">
        <aside className="space-y-5">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">{isEnglish ? 'Recipe details' : 'Ficha'}</p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-stone-500">{isEnglish ? 'Difficulty' : 'Dificultad'}</dt><dd>{recipe.difficulty || '—'}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-stone-500">{isEnglish ? 'Time' : 'Tiempo'}</dt><dd>{recipe.source_time || '—'}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-stone-500">{isEnglish ? 'Yield' : 'Rendimiento'}</dt><dd className="text-right">{recipe.source_yield || '—'}</dd></div>
            </dl>
          </div>
          <div className="rounded-2xl bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-900">{isEnglish ? 'Observation' : 'Observación'}</p>
            <p className="mt-2 text-sm leading-6 text-amber-950">
              {isEnglish
                ? 'Before moving to the next step, look at the dough and compare it with the instruction.'
                : 'Antes de pasar al siguiente paso, mira la masa y compárala con lo que indica la instrucción.'}
            </p>
          </div>
        </aside>

        <section className="space-y-8">
          <RecipeProgress recipeId={recipe.id} stepCount={steps.length} initialProgress={progress} />

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-stone-900">{isEnglish ? 'Ingredients' : 'Ingredientes'}</h2>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              {ingredients.map((item) => (
                <div key={item.id} className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-stone-100 px-5 py-3 text-sm last:border-0">
                  <span>{item.name}</span><span>{item.quantity ?? ''}</span><span className="text-stone-500">{item.unit || ''}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-stone-900">{isEnglish ? 'Process' : 'Proceso'}</h2>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={step.id} className="rounded-2xl border border-stone-200 bg-white p-6">
                  <div className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">{index + 1}</span>
                    <div>
                      <h3 className="font-semibold text-stone-900">{step.title || (isEnglish ? `Step ${index + 1}` : `Paso ${index + 1}`)}</h3>
                      <p className="mt-2 leading-7 text-stone-700">{step.instruction}</p>
                      {(step.observation || step.time_text || step.temperature_text) && (
                        <div className="mt-4 rounded-xl bg-stone-50 p-4 text-sm text-stone-600">
                          {step.observation && <p>{step.observation}</p>}
                          {step.time_text && <p className="mt-1">{isEnglish ? 'Time' : 'Tiempo'}: {step.time_text}</p>}
                          {step.temperature_text && <p className="mt-1">{isEnglish ? 'Temperature' : 'Temperatura'}: {step.temperature_text}</p>}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <Link href="/progreso" className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white">
            {isEnglish ? 'Go to my progress' : 'Ir a mi progreso'}
          </Link>
        </section>
      </div>
    </CourseShell>
  );
}

export default function RecipePage({ communityRecipe, recipe, ingredients, steps, progress }) {
  if (communityRecipe) return <CommunityRecipeView recipe={communityRecipe} />;
  return <CourseRecipeView recipe={recipe} ingredients={ingredients} steps={steps} progress={progress} />;
}

export async function getServerSideProps({ req, res, params, locale }) {
  if (isUuid(params.slug)) {
    const supabase = createCourseServerClient(req, res);
    const { data: authData } = await supabase.auth.getClaims();
    const userId = authData?.claims?.sub || null;

    const { data: communityRecipe, error } = await supabase
      .from('community_recipes')
      .select('id, author_id, title, description, ingredients, steps, image_url, is_public, created_at')
      .eq('id', params.slug)
      .maybeSingle();

    if (error || !communityRecipe) return { notFound: true };
    if (!communityRecipe.is_public && communityRecipe.author_id !== userId) return { notFound: true };

    return { props: { communityRecipe, recipe: null, ingredients: [], steps: [], progress: null } };
  }

  const { supabase, claims } = await requireCourseAuth(req, res);
  if (!claims) return { redirect: { destination: locale === 'en' ? '/en/acceso' : '/acceso', permanent: false } };

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  const localized = await getPublicRecipe(params.slug, supabase, locale || 'es');
  if (!localized) return { notFound: true };

  const { data: progress } = await supabase
    .from('recipe_progress')
    .select('status, current_step, completed_at')
    .eq('recipe_id', localized.recipe.id)
    .eq('user_id', claims.sub)
    .maybeSingle();

  return {
    props: {
      communityRecipe: null,
      recipe: localized.recipe,
      ingredients: localized.ingredients,
      steps: localized.steps,
      progress: progress || null,
    },
  };
}
