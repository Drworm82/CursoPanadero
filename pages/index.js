// pages/index.js

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

// Este componente ahora se basa únicamente en el escuchador de estado de autenticación de Supabase.
// Esto evita la condición de carrera y el error de navegación.
export default function IndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Escuchamos los cambios en el estado de autenticación de Supabase.
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      // El estado ya ha sido verificado, por lo que podemos dejar de mostrar el estado de carga.
      setLoading(false);

      if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
        // Redirige a la página de recetas si el usuario ha iniciado sesión.
        // `INITIAL_SESSION` se usa para la primera carga de la página.
        router.push('/recetas');
      } else if (event === 'SIGNED_OUT') {
        // Redirige a la página de login si el usuario ha cerrado sesión.
        router.push('/login');
      }
    });

    // Limpiamos el escuchador cuando el componente se desmonte para evitar fugas de memoria.
    return () => {
      authListener.subscription.unsubscribe();
    };

  // Se añade `router` como dependencia para que el efecto se ejecute si el objeto router cambia,
  // aunque en este caso es poco probable que lo haga.
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Verificando sesión...</p>
      </div>
    );
  }

  // No renderizamos nada si el estado de carga es falso y el usuario aún no ha sido redirigido.
  // Esto previene que se muestre una página en blanco por un instante.
  return null;
}
