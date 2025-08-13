import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';

export default function RecetasPage() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchRecetas = async () => {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('recetas_usuario') // ¡Nombre de la tabla corregido a 'recetas_usuario'!
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching recipes:', error);
        setError('No se pudieron cargar las recetas.');
        setRecetas([]);
      } else {
        setRecetas(data);
      }
      setLoading(false);
    };

    fetchRecetas();
  }, []);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-center">Cargando recetas...</div>;
  }

  if (error) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recetas de la comunidad</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recetas.length === 0 ? (
          <p>No hay recetas disponibles.</p>
        ) : (
          recetas.map((receta) => (
            <div 
              key={receta.id} 
              className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => router.push(`/recetas/${receta.id}`)}
            >
              <h2 className="text-xl font-semibold">{receta.titulo}</h2>
              <p className="text-gray-600 mt-2">{receta.descripcion}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
