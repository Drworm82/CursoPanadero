import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import { parse, serialize } from 'cookie';
import { requireCourseAccess } from '../../lib/course';

export default function LeccionPage({ leccion }) {
  if (!leccion) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Lección no encontrada
        </h1>
        <p className="mt-2 text-gray-600">
          No se encontró la lección solicitada.
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
      <Link href="/curso" className="text-blue-600 hover:underline">
        ← Volver al curso
      </Link>

      <header className="mt-6">
        <p className="text-sm font-medium text-gray-500">
          Lección {leccion.sort_order}
        </p>

        <h1 className="text-4xl font-bold mt-2 text-gray-800">
          {leccion.title}
        </h1>

        {leccion.lesson_type && (
          <p className="mt-2 text-sm text-gray-500">
            Tipo: {leccion.lesson_type}
          </p>
        )}

        {leccion.objective && (
          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Objetivo
            </h2>
            <p className="mt-2 text-gray-600">
              {leccion.objective}
            </p>
          </div>
        )}
      </header>

      {leccion.recipes?.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Recetas de esta lección
          </h2>

          <div className="space-y-4">
            {leccion.recipes.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/curso/recetas/${recipe.slug}`}
                className="block bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {recipe.title}
                </h3>

                {recipe.pedagogical_role && (
                  <p className="mt-2 text-gray-600">
                    {recipe.pedagogical_role}
                  </p>
                )}

                {recipe.source_yield && (
                  <p className="mt-2 text-sm text-gray-500">
                    Rendimiento: {recipe.source_yield}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="mt-8">
        <Link href="/curso" className="text-blue-600 hover:underline">
          ← Volver al curso
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

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  const { data: leccion, error } = await supabase
    .from('lessons')
    .select(`
      id,
      slug,
      title,
      sort_order,
      lesson_type,
      objective,
      module_id,
      recipes:lesson_recipes (
        sort_order,
        recipe:recipes (
          id,
          slug,
          title,
          source_class,
          source_yield,
          pedagogical_role
        )
      )
    `)
    .eq('slug', params.slug)
    .single();

  if (error) {
    console.error('Error cargando la lección:', error);

    return { notFound: true };
  }

  const recipes = (leccion.recipes || [])
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((item) => item.recipe)
    .filter(Boolean);

  return {
    props: {
      leccion: {
        ...leccion,
        recipes,
      },
    },
  };
}
