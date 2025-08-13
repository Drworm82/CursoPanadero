import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Función para validar si una cadena es un UUID válido.
const isUUID = (uuid) => {
  if (typeof uuid !== 'string') return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export default function CursosPage() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchCursos = async () => {
      setLoading(true);
      setError(null);
      
      // Asegúrate de que el nombre de la tabla sea 'cursos' o el que uses.
      const { data, error } = await supabase
        .from('cursos') 
        .select('*');

      if (error) {
        console.error('Error fetching courses:', error);
        setError('No se pudieron cargar los cursos.');
        setCursos([]);
      } else {
        // Filtramos los cursos para asegurarnos de que solo mostramos aquellos con un ID válido (UUID)
        // This is the key change to prevent the 'ID inválido' error.
        const validCursos = data.filter(curso => isUUID(curso.id));
        setCursos(validCursos);
      }
      setLoading(false);
    };

    fetchCursos();
  }, []);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-center">Cargando cursos...</div>;
  }

  if (error) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cursos de la comunidad</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cursos.length === 0 ? (
          <p>No hay cursos disponibles.</p>
        ) : (
          cursos.map((curso) => (
            <div 
              key={curso.id} 
              className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => router.push(`/curso/${curso.id}`)}
            >
              {curso.imagen_url && (
                <div className="w-full h-40 relative mb-4">
                  <Image 
                    src={curso.imagen_url} 
                    alt={curso.titulo} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold">{curso.titulo}</h2>
              <p className="text-gray-600 mt-2">{curso.descripcion}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
