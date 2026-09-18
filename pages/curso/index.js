import Link from 'next/link';
import { modulos } from '../../data/curso';

export default function CursoPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Curso de Panadería</h1>
      <div className="space-y-6">
        {modulos.map((modulo) => (
          <div key={modulo.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{modulo.titulo}</h2>
            <p className="mt-2 text-gray-600">{modulo.descripcion}</p>
            {modulo.lecciones.length > 0 && (
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-700">Lecciones:</h3>
                <ul className="mt-2 space-y-2">
                  {modulo.lecciones.map((leccion) => (
                    <li key={leccion.slug}>
                      <Link
                        href={`/curso/${leccion.slug}`}
                        className="text-blue-500 hover:underline"
                      >
                        {leccion.titulo}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const { createServerClient } = await import('@supabase/ssr');
  const { parse, serialize } = await import('cookie');

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return Object.entries(parse(req.headers.cookie || '')).map(([name, value]) => ({
            name,
            value,
          }));
        },
        setAll(cookiesToSet, headers) {
          const serialized = cookiesToSet.map(({ name, value, options }) =>
            serialize(name, value, options)
          );
          res.setHeader('Set-Cookie', serialized);
          Object.entries(headers).forEach(([key, value]) => res.setHeader(key, value));
        },
      },
    }
  );

  const { data, error } = await supabase.auth.getClaims();

  if (error || !data?.claims?.sub) {
    return {
      redirect: {
        destination: '/acceso',
        permanent: false,
      },
    };
  }

  return { props: {} };
}
