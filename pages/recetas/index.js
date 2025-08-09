import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function RecetasPage() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecetas = async () => {
      // 1. Obtener la sesión del usuario
      const { data: { session } } = await supabase.auth.getSession();
      
      // 2. Verificar si el usuario está en la lista de acceso
      let hasAccess = false;
      if (session) {
        const { data: userAccess } = await supabase
          .from('users_with_access')
          .select('user_id')
          .eq('user_id', session.user.id)
          .single();
        if (userAccess) {
          hasAccess = true;
        }
      }

      // 3. Traer las recetas según el acceso
      let query = supabase.from('recetas_usuario').select('*');
      
      if (!hasAccess) {
        // Si no tiene acceso, solo mostrar las recetas públicas
        query = query.eq('is_public', true);
      }

      const { data, error } = await query;
      if (error) {
        console.error('Error fetching recipes:', error);
      } else {
        setRecetas(data);
      }
      setLoading(false);
    };

    fetchRecetas();
  }, []); // El array de dependencias está vacío, se ejecuta una sola vez al cargar.

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl">Cargando recetas...</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recetas</h1>
        <Link href="/recetas/nueva">
          <a className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors duration-300">
            Añadir Receta
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recetas.length === 0 ? (
          <p className="col-span-3 text-center text-gray-500">No hay recetas disponibles.</p>
        ) : (
          recetas.map((receta) => (
            <Link key={receta.id} href={`/recetas/${receta.id}`}>
              <a className="block border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-xl font-semibold">{receta.titulo}</h2>
              </a>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
