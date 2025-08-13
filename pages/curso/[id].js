import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../../lib/supabase'; // ¡Ruta corregida!
import Image from 'next/image';

export default function CursoDetallePage() {
  const router = useRouter();
  const { id } = router.query;
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no hay ID en la URL, no se hace nada
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchCurso = async () => {
      setLoading(true);
      setError(null);

      const { data, error } = await supabase
        .from('recetas_usuarios') // Asumimos que los cursos están aquí
        .select(`
          *,
          autor_id(*)
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching course details:', error);
        setError('No se pudo cargar el curso. Por favor, inténtalo de nuevo.');
        setCurso(null);
      } else if (!data) {
        setError('Curso no encontrado.');
        setCurso(null);
      } else {
        setCurso(data);
      }
      setLoading(false);
    };

    fetchCurso();
  }, [id]);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-gray-500">Cargando curso...</div>;
  }

  if (error) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {curso && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {curso.imagen_url && (
            <div className="w-full h-80 relative">
              <Image 
                src={curso.imagen_url} 
                alt={curso.titulo} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
          )}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{curso.titulo}</h1>
            <p className="text-sm text-gray-500 mb-4">
              Por: {curso.autor_id?.email || 'Desconocido'}
            </p>
            <p className="text-xl text-gray-700 mb-6">{curso.descripcion}</p>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-2xl font-semibold border-b-2 border-orange-500 pb-1 mb-2">Contenido del curso</h2>
                {curso.contenido && (
                  <ul className="list-disc list-inside space-y-1">
                    {curso.contenido.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
