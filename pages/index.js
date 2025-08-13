import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

// Componente para la página de inicio, con lógica de redirección segura.
export default function IndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Definimos una función asíncrona para manejar la sesión inicial.
    const handleSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        
        // Si el usuario está autenticado, lo redirigimos a la página de recetas.
        if (session) {
          if (router.pathname !== '/recetas') {
            router.push('/recetas');
          }
        } else {
          // Si no hay sesión, redirigimos a la página de inicio de sesión.
          if (router.pathname !== '/login') {
            router.push('/login');
          }
        }
      } catch (error) {
        console.error('Error al obtener la sesión:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    handleSession();

    // Escuchamos cambios en el estado de autenticación para manejar los casos de
    // inicio o cierre de sesión posteriores a la carga.
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' && router.pathname !== '/login') {
        router.push('/login');
      } else if (event === 'SIGNED_IN' && router.pathname !== '/recetas') {
        router.push('/recetas');
      }
    });

    // Limpiamos el escuchador cuando el componente se desmonte.
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Verificando sesión...</p>
      </div>
    );
  }

  return null;
}
