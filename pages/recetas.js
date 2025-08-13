import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getSession } from '../lib/supabaseAuth';
import Link from 'next/link';

export default function Recetas() {
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchRecetas = async () => {
      setLoading(true);
      const currentSession = await getSession();
      setSession(currentSession);
      
      let allRecetas = [];
      let error = null;

      // 1. Obtener recetas públicas de la comunidad
      const { data: publicData, error: publicError } = await supabase
        .from('recetas_usuarios')
        .select('*')
        .eq('is_public', true)
        .order('created_at', { ascending: false });

      if (publicError) {
        console.error('Error fetching public recipes:', publicError);
        error = publicError;
      } else {
        allRecetas = publicData;
      }

      // 2. Si el usuario está autenticado (y en la whitelist), obtener las recetas del curso
      // Nota: Aquí se asume que todo usuario logueado tiene acceso al curso. 
      // Puedes modificar esta lógica si tienes una tabla de "whitelist" en tu base de datos.
      if (currentSession) {
        const { data: courseData, error: courseError } = await supabase
          .from('recetas_curso')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (courseError) {
          console.error('Error fetching course recipes:', courseError);
          error = courseError;
        } else {
          // Combinar las recetas del curso con las públicas
          allRecetas = [...allRecetas, ...courseData];
        }
      }

      // Evitar duplicados si una receta pública también está en el curso
      const uniqueRecetas = Array.from(new Map(allRecetas.map(receta => [receta.id, receta])).values());
      
      setRecetas(uniqueRecetas);
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
      <h1 className="text-4xl font-bold mb-8 text-center">Recetas de la Comunidad</h1>
      
      {session && (
        <div className="text-center mb-6">
          <Link href="/compartir-receta" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
            Compartir nueva receta
          </Link>
        </div>
      )}

      {recetas.length === 0 ? (
        <p className="text-center text-gray-500">Aún no hay recetas disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recetas.map((receta) => (
            <Link key={receta.id} href={`/recetas/${receta.id}`} className="block bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition-colors duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{receta.titulo}</h2>
              <p className="mt-2 text-gray-600">{receta.descripcion}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
