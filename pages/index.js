// pages/recetas/index.js

import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function RecetasPage() {
  const router = useRouter();
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [session, setSession] = useState(null);

  // useEffect para manejar la autenticación y la carga inicial
  useEffect(() => {
    const fetchAuthAndData = async () => {
      const { data: { session: initialSession } } = await supabase.auth.getSession();
      setSession(initialSession);

      if (!initialSession) {
        // Si no hay sesión, redirigir al login
        router.push('/login');
        return;
      }

      await fetchRecetas(initialSession.user);
    };

    fetchAuthAndData();
  }, [router]);

  const fetchRecetas = async (user) => {
    setLoading(true);
    setError(null);

    try {
      // 1. Obtener recetas públicas
      const { data: publicRecetas, error: publicError } = await supabase
        .from('recetas_usuario')
        .select('*, autor_id(*)')
        .eq('is_public', true)
        .order('created_at', { ascending: false });

      if (publicError) throw publicError;
      
      let allRecetas = publicRecetas;
      
      // 2. Verificar si el usuario está en la lista blanca para mostrar recetas privadas
      const { data: whitelistData } = await supabase
        .from('users_with_access')
        .select('user_id')
        .eq('user_id', user.id)
        .single();
      
      const userIsWhitelisted = !!whitelistData;
      
      if (userIsWhitelisted) {
        // Obtener recetas privadas si el usuario está en la lista blanca
        const { data: privateRecetas, error: privateError } = await supabase
          .from('recetas_usuario')
          .select('*, autor_id(*)')
          .eq('is_public', false)
          .order('created_at', { ascending: false });

        if (privateError) throw privateError;
        allRecetas = [...allRecetas, ...privateRecetas];
      }

      // Eliminar duplicados en caso de que una receta se cargue como pública y privada
      const uniqueRecetas = allRecetas.filter(
        (receta, index, self) => index === self.findIndex((r) => r.id === receta.id)
      );

      setRecetas(uniqueRecetas);
    } catch (err) {
      console.error('Error al cargar las recetas:', err);
      setError('Hubo un error al cargar las recetas.');
    } finally {
      setLoading(false);
    }
  };

  const filteredRecetas = useMemo(() => {
    if (!searchTerm) {
      return recetas;
    }
    return recetas.filter(receta =>
      receta.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [recetas, searchTerm]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Recetas</h1>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Buscar recetas por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
          {session && (
            <Link href="/recetas/nueva" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300">
              Añadir Receta
            </Link>
          )}
        </div>
      </div>
      {loading ? (
        <p className="text-center text-gray-500">Cargando recetas...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : filteredRecetas.length === 0 ? (
        <p className="text-center text-gray-500">No hay recetas disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecetas.map((receta) => (
            <Link key={receta.id} href={`/recetas/${receta.id}`} className="block border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold">{receta.titulo}</h2>
              <p className="mt-2 text-gray-600">{receta.descripcion}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
