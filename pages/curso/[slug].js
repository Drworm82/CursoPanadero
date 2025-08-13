// pages/curso/[slug].js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import Image from 'next/image';
import Link from 'next/link';

export default function CursoDetallePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [curso, setCurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no hay slug en la URL, no se hace nada
    if (!slug) {
      setLoading(false);
      return;
    }

    const fetchCurso = async () => {
      setLoading(true);
      setError(null);

      // CORRECCIÓN: La tabla se llama 'recetas_usuario' (en singular)
      const { data, error } = await supabase
        .from('recetas_usuario') // <-- El nombre de la tabla ahora es singular
        .select(`
          *,
          autor_id(*)
        `)
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error al obtener los detalles del curso:', error);
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
  }, [slug]);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-gray-500">Cargando curso...</div>;
  }

  if (error) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/curso" className="text-orange-600 hover:underline mb-4 inline-block">
        &larr; Volver a Cursos
      </Link>
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
