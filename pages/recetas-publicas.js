import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getSession } from '../lib/supabaseAuth';
import Link from 'next/link';

export default function RecetasPublicas() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchRecetas = async () => {
      // Obtenemos las recetas públicas (is_public = true)
      const { data, error } = await supabase
        .from('recetas_usuarios')
        .select('*')
        .eq('is_public', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching public recipes:', error);
      } else {
        setRecetas(data);
      }

      const currentSession = await getSession();
      setSession(currentSession);
      setLoading(false);
    };

    fetchRecetas();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando recetas...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Recetas Públicas de la Comunidad</h1>
      
      {session && (
        <div className="text-center mb-6">
          <Link href="/compartir-receta" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
            Compartir nueva receta
          </Link>
        </div>
      )}

      {recetas.length === 0 ? (
        <p className="text-center text-gray-500">Aún no hay recetas públicas disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recetas.map((receta) => (
            <Link key={receta.id} href={`/recetas-publicas/${receta.id}`} className="block bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition-colors duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{receta.titulo}</h2>
              <p className="mt-2 text-gray-600">{receta.descripcion}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
