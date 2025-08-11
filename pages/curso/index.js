import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import { modulos } from '../../data/curso';

export default function CursoPage() {
  const [session, setSession] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getSessionAndAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (!session) {
        router.push('/acceso');
        return;
      }

      const { data: userAccess, error } = await supabase
        .from('users_with_access')
        .select('user_id')
        .eq('user_id', session.user.id)
        .single();
      
      if (userAccess) {
        setHasAccess(true);
      }
      setLoading(false);
    };

    getSessionAndAccess();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        if (newSession) {
          setSession(newSession);
        } else {
          router.push('/acceso');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando...</p>
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Acceso Denegado</p>
      </div>
    );
  }

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
                      <a href={`/curso/${leccion.slug}`} className="text-blue-500 hover:underline">
                        {leccion.titulo}
                      </a>
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
