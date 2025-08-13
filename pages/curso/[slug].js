import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import { modulos } from '../../data/curso';

export default function LeccionPage() {
  const [session, setSession] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [leccion, setLeccion] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

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

  useEffect(() => {
    // Buscar la lección correspondiente cuando el slug o el acceso cambien
    if (slug && hasAccess) {
      let foundLeccion = null;
      for (const modulo of modulos) {
        foundLeccion = modulo.lecciones.find(leccion => leccion.slug === slug);
        if (foundLeccion) {
          break; // Salir del bucle si se encuentra la lección
        }
      }
      setLeccion(foundLeccion);
    } else if (hasAccess === false && !loading) {
        setLeccion(null); // Borrar la lección si el acceso es denegado
    }
  }, [slug, hasAccess, loading]);

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

  if (!leccion) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold">Lección no encontrada.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{leccion.titulo}</h1>
      <div className="prose max-w-none">
        {leccion.contenido.map((parrafo, index) => (
          <p key={index} className="text-lg leading-relaxed mb-4">{parrafo}</p>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        {/* Aquí puedes añadir botones para navegar a la lección anterior y siguiente */}
        <button 
          className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
          onClick={() => router.push('/curso')}
        >
          Volver a Cursos
        </button>
      </div>
    </div>
  );
}
