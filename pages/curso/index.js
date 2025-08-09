import { useState, useEffect } from 'react';
import Link from 'next/link';
import { modulos } from '../../data/curso';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';

export default function CursoPage() {
  const [session, setSession] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getSessionAndAccess = async () => {
      // 1. Obtener la sesión del usuario
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (!session) {
        // Si no hay sesión, redirigir a la página de acceso
        router.push('/acceso');
        return;
      }

      // 2. Si hay sesión, verificar si el usuario está en la lista de acceso
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

    // Suscribirse a los cambios de autenticación
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
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold">Cargando...</h1>
        <p className="mt-4">Verificando tu acceso al curso.</p>
      </div>
    );
  }

  // Mostrar el contenido si el usuario tiene acceso
  if (hasAccess) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Módulos del Curso</h1>
        <div className="space-y-6">
          {modulos.map((modulo) => (
            <div key={modulo.id} className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold">{modulo.titulo}</h2>
              <p className="text-gray-600 mt-1">{modulo.descripcion}</p>
              <div className="mt-4 space-y-2">
                {modulo.lecciones.length > 0 ? (
                  modulo.lecciones.map((leccion) => (
                    <Link key={leccion.slug} href={`/curso/${leccion.slug}`}>
                      <a className="block p-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors duration-300">
                        {leccion.titulo}
                      </a>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Próximamente...</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Mostrar mensaje si el usuario no tiene acceso
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-red-500">Acceso Denegado</h1>
      <p className="mt-4 text-gray-700">Parece que no tienes acceso a este curso.</p>
      <p className="mt-2 text-gray-700">Si ya has pagado, por favor contacta con soporte para que te incluyan en la lista de acceso.</p>
    </div>
  );
}
