import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

export default function RecetaIndividual() {
  const router = useRouter();
  const { id } = router.query;
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchReceta = async () => {
      const { data, error } = await supabase
        .from('recetas_usuarios')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching recipe:', error);
      } else {
        setReceta(data);
      }
      setLoading(false);
    };

    fetchReceta();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando receta...</p>
      </div>
    );
  }

  if (!receta) {
    return (
      <div className="flex justify-center items-center h-screen text-center">
        <p className="text-2xl font-bold">Receta no encontrada</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{receta.titulo}</h1>
      <p className="text-gray-600 mb-8">Por: {receta.user_id}</p>

      {/* Muestra la imagen si existe una URL */}
      {receta.imagen_url && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image 
            src={receta.imagen_url} 
            alt={receta.titulo} 
            width={800} 
            height={600} 
            layout="responsive"
            objectFit="cover"
          />
        </div>
      )}

      <div className="prose lg:prose-xl">
        <p className="font-semibold text-xl">{receta.descripcion}</p>
        <p>{receta.contenido}</p>
      </div>
      
      <div className="mt-8">
        <Link href="/recetas-publicas" className="text-blue-500 hover:underline">
          &larr; Volver a las recetas públicas
        </Link>
      </div>
    </div>
  );
}
