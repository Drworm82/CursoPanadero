// pages/recetas/index.js

import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function RecetasPage() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [session, setSession] = useState(null);
  const [userIsWhitelisted, setUserIsWhitelisted] = useState(false);

  useEffect(() => {
    // Escuchar los cambios en el estado de autenticación
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        if (currentSession) {
          checkUserWhitelist(currentSession.user.id);
        } else {
          setUserIsWhitelisted(false);
          fetchRecetas(null, false);
        }
      }
    );

    // Obtener la sesión inicial
    const fetchSession = async () => {
      const { data: { session: initialSession } } = await supabase.auth.getSession();
      setSession(initialSession);
      if (initialSession) {
        await checkUserWhitelist(initialSession.user.id);
      }
      fetchRecetas(initialSession, userIsWhitelisted);
    };

    fetchSession();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const checkUserWhitelist = async (userId) => {
    try {
      const { data, error } = await supabase
        .from('users_with_access')
        .select('user_id')
        .eq('user_id', userId)
        .single();
      
      if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
        console.error('Error checking whitelist:', error);
      }
      setUserIsWhitelisted(!!data);
    } catch (err) {
      console.error('Error checking whitelist:', err);
    }
  };

  const fetchRecetas = async (currentSession, isWhitelisted) => {
    setLoading(true);
    setError(null);
    let allRecetas = [];
    
    // Consulta para recetas públicas
    let publicQuery = supabase
      .from('recetas_usuario')
      .select('*, autor_id(*)') 
      .eq('is_public', true)
      .order('created_at', { ascending: false });

    const { data: publicData, error: publicError } = await publicQuery;

    if (publicError) {
      console.error('Error fetching public recipes:', publicError);
      setError('Error al cargar las recetas públicas.');
    } else {
      allRecetas = publicData;
    }

    // Si el usuario ha iniciado sesión y está en la lista blanca,
    // también busca recetas privadas
    if (currentSession && isWhitelisted) {
      const { data: privateData, error: privateError } = await supabase
        .from('recetas_usuario')
        .select('*, autor_id(*)')
        .eq('is_public', false)
        .order('created_at', { ascending: false });

      if (privateError) {
        console.error('Error fetching private recipes:', privateError);
        setError('Error al cargar las recetas privadas.');
      } else {
        allRecetas = [...allRecetas, ...privateData];
      }
    }
    
    // Elimina duplicados si una receta es pública y privada
    const uniqueRecetas = allRecetas.filter(
      (receta, index, self) => index === self.findIndex((r) => r.id === receta.id)
    );

    setRecetas(uniqueRecetas);
    setLoading(false);
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
