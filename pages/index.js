import { useState, useEffect } from 'react';
import { getSession } from '../lib/supabaseAuth';
import Link from 'next/link';

export default function HomePage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const currentSession = await getSession();
      setSession(currentSession);
      setLoading(false);
    };

    checkSession();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Bienvenido a la panadería</h1>
      <p className="text-xl text-gray-600 mb-8">
        El lugar perfecto para aprender el arte de hornear y compartir tus recetas.
      </p>

      {session ? (
        <div className="space-y-4">
          <Link href="/recetas" className="block w-full py-3 px-6 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Ver Recetas
          </Link>
          <Link href="/curso" className="block w-full py-3 px-6 bg-orange-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
            Ir al Curso
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <Link href="/acceso" className="block w-full py-3 px-6 bg-green-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            Iniciar Sesión o Registrarse
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Inicia sesión para acceder a las recetas y el curso.
          </p>
        </div>
      )}
    </div>
  );
}
