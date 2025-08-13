import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase'; // Ruta corregida
import { useRouter } from 'next/router';
import { modulos } from '../../data/curso';
import Link from 'next/link';

export default function CursoPage() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const getSessionAndAccess = async () => {
      // Obtener la sesión de Supabase
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      // Si no hay sesión, redirigir
      if (!session) {
        router.push('/acceso');
        setLoading(false);
        return;
      }

      // Verificar si el usuario tiene acceso
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
      <h1 className="text-4xl font-bold mb-6">Curso de Panadería</h1>
      <p className="mb-8 text-lg text-gray-700">
        Bienvenido al curso. Aquí encontrarás los módulos y lecciones para dominar el arte de la panadería.
      </p>

      {modulos.map((modulo, moduloIndex) => (
        <div key={moduloIndex} className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">{modulo.titulo}</h2>
          <div className="space-y-4">
            {modulo.lecciones.map((leccion, leccionIndex) => (
              <div
                key={leccionIndex}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Link href={`/curso/${leccion.slug}`}>
                  <h3 className="text-xl font-medium text-orange-600 hover:text-orange-700">{leccion.titulo}</h3>
                  <p className="text-gray-600 mt-1">{leccion.descripcion}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
