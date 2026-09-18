import Link from 'next/link';
import { createServerClient } from '@supabase/ssr';
import { parse, serialize } from 'cookie';

export default function CursoPage({ modulo }) {
  if (!modulo) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">
          Curso no disponible
        </h1>
        <p className="mt-2 text-gray-600">
          No se encontró el módulo solicitado.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-8">
        <p className="text-sm font-medium text-gray-500">
          Módulo {modulo.sort_order}
        </p>

        <h1 className="text-4xl font-bold mt-2 text-gray-800">
          {modulo.title}
        </h1>

        {modulo.guiding_question && (
          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Pregunta guía
            </h2>
            <p className="mt-2 text-gray-600">
              {modulo.guiding_question}
            </p>
          </div>
        )}

        {modulo.expected_result && (
          <div className="mt-4 bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800">
              Al terminar este módulo
            </h2>
            <p className="mt-2 text-gray-600">
              {modulo.expected_result}
            </p>
          </div>
        )}
      </header>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Lecciones
        </h2>

        <div className="space-y-3">
          {modulo.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/curso/${lesson.slug}`}
              className="block bg-white shadow rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-gray-500">
                  {lesson.sort_order}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {lesson.title}
                  </h3>

                  {lesson.objective && (
                    <p className="mt-1 text-gray-600">
                      {lesson.objective}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
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
          const serialized = cookiesToSet.map(({ name, value, options }) =>
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

  const { data: modulo, error } = await supabase
    .from('modules')
    .select(`
      id,
      slug,
      title,
      sort_order,
      guiding_question,
      expected_result,
      lessons (
        id,
        slug,
        title,
        sort_order,
        lesson_type,
        objective
      )
    `)
    .eq('slug', 'modulo-1-masas-batidas-pesadas')
    .single();

  if (error) {
    console.error('Error cargando el módulo:', error);

    return {
      props: {
        modulo: null,
      },
    };
  }

  modulo.lessons.sort((a, b) => a.sort_order - b.sort_order);

  return {
    props: {
      modulo,
    },
  };
}
