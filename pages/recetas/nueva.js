import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../../lib/supabase';
import { getSession } from '../../lib/supabaseAuth';
import Link from 'next/link';

export default function RecetasPage() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchRecetas = async () => {
      setLoading(true);
      const currentSession = await getSession();
      setSession(currentSession);

      const { data, error } = await supabase
        .from('recetas_usuarios')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching recipes:', error);
        setRecetas([]);
      } else {
        setRecetas(data);
      }
      setLoading(false);
    };
    fetchRecetas();
  }, []);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="col-span-full text-center">Cargando recetas...</p>
        ) : filteredRecetas.length === 0 ? (
          <p className="col-span-3 text-center text-gray-500">No hay recetas disponibles.</p>
        ) : (
          filteredRecetas.map((receta) => (
            <Link key={receta.id} href={`/recetas/${receta.id}`} className="block border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xl font-semibold">{receta.titulo}</h2>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
