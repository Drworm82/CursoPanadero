import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import { parse, serialize } from 'cookie';

export default function RecetaPage({ receta }) {
  if (!receta) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Receta no encontrada
        </h1>
        <p className="mt-2 text-gray-600">
          No se encontró la receta solicitada.
        </p>
        <Link
          href="/curso"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          ← Volver al curso
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link
        href={`/curso/${receta.lessonSlug}`}
        className="text-blue-600 hover:underline"
      >
        ← Volver a la lección
      </Link>

      <header className="mt-6">
        <p className="text-sm font-medium text-gray-500">
          Receta
        </p>

        <h1 className="text-4xl font-bold mt-2 text-gray-800">
          {receta.title}
        </h1>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
          {receta.difficulty && (
            <span className="bg-white shadow rounded px-3 py-2">
              Dificultad: {receta.difficulty}
            </span>
          )}

          {receta.source_time && (
            <span className="bg-white shadow rounded px-3 py-2">
              Tiempo: {receta.source_time}
            </span>
          )}

          {receta.source_yield && (
            <span className="bg-white shadow rounded px-3 py-2">
              Rendimiento: {receta.source_yield}
            </span>
          )}
        </div>
      </header>

      <section className="mt-8 bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Ingredientes
        </h2>

        <div className="divide-y">
          {receta.ingredients.map((ingredient) => (
            <div
              key={ingredient.id}
              className="py-3 flex flex-wrap gap-x-4 gap-y-1"
            >
              <span className="font-medium text-gray-800">
                {ingredient.name}
              </span>

              <span className="text-gray-600">
                {ingredient.quantity !== null
                  ? `${ingredient.quantity} ${ingredient.unit || ''}`.trim()
                  : ingredient.unit || ''}
              </span>

              {ingredient.notes && (
                <span className="text-sm text-gray-500">
                  {ingredient.notes}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Elaboración
        </h2>

        <ol className="space-y-4">
          {receta.steps.map((step) => (
            <li
              key={step.id}
              className="bg-white shadow rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold text-gray-700">
                  {step.sort_order}
                </span>

                <div className="flex-1">
                  {step.title && (
                    <h3 className="font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  )}

                  <p className="mt-1 text-gray-700">
                    {step.instruction}
                  </p>

                  {(step.time_text || step.temperature_text) && (
                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-gray-500">
                      {step.time_text && (
                        <span>
                          Tiempo: {step.time_text}
                        </span>
                      )}

                      {step.temperature_text && (
                        <span>
                          Temperatura: {step.temperature_text}
                        </span>
                      )}
                    </div>
                  )}

                  {step.observation && (
                    <p className="mt-3 text-sm text-gray-600">
                      Observación: {step.observation}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-8">
        <Link
          href={`/curso/${receta.lessonSlug}`}
          className="text-blue-600 hover:underline"
        >
          ← Volver a la lección
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res, params }) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return Object.entries(parse(req.headers.cookie || '')).map(
            ([name, value]) => ({
              name,
              value,
            })
          );
        },
        setAll(cookiesToSet, headers) {
          const serialized = cookiesToSet.map(
            ({ name, value, options }) =>
              serialize(name, value, options)
          );

          res.setHeader('Set-Cookie', serialized);

          Object.entries(headers).forEach(([key, value]) => {
            res.setHeader(key, value);
          });
        },
      },
    }
  );

  const { data: authData, error: authError } =
    await supabase.auth.getClaims();

  if (authError || !authData?.claims?.sub) {
    return {
      redirect: {
        destination: '/acceso',
        permanent: false,
      },
    };
  }

  const { data: receta, error } = await supabase
    .from('recipes')
    .select(`
      id,
      slug,
      title,
      source_class,
      source_objective,
      difficulty,
      source_time,
      source_yield,
      pedagogical_role,
      recipe_ingredients (
        id,
        sort_order,
        name,
        quantity,
        unit,
        notes
      ),
      recipe_steps (
        id,
        sort_order,
        title,
        instruction,
        observation,
        time_text,
        temperature_text
      ),
      lesson_recipes (
        sort_order,
        lessons (
          slug,
          title
        )
      )
    `)
    .eq('slug', params.slug)
    .single();

  if (error) {
    console.error('Error cargando la receta:', error);

    return {
      props: {
        receta: null,
      },
    };
  }

  const ingredients = (receta.recipe_ingredients || []).sort(
    (a, b) => a.sort_order - b.sort_order
  );

  const steps = (receta.recipe_steps || []).sort(
    (a, b) => a.sort_order - b.sort_order
  );

  const lessonLink = (receta.lesson_recipes || [])
    .sort((a, b) => a.sort_order - b.sort_order)[0];

  return {
    props: {
      receta: {
        ...receta,
        ingredients,
        steps,
        lessonSlug: lessonLink?.lessons?.slug || 'modulo-1-masas-batidas-pesadas',
      },
    },
  };
}
