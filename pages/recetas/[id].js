import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import Image from 'next/image';

// Función para validar si una cadena es un UUID válido
// This function validates if a string is a valid UUID to prevent database errors.
const isUUID = (uuid) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export default function RecetaDetallePage() {
  const router = useRouter();
  const { id } = router.query;
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If there is no ID in the URL, do nothing.
    if (!id) {
      setLoading(false);
      return;
    }

    // Check if the ID is a valid UUID before making the database query.
    if (!isUUID(id)) {
      console.error('ID inválido:', id);
      setError('El ID de la receta no es válido. Por favor, revisa la URL.');
      setLoading(false);
      return;
    }

    const fetchReceta = async () => {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('recetas_usuario') // ¡Nombre de la tabla corregido!
        .select(`
          *,
          autor_id(*) // Try to get the author's information (this requires a foreign key relationship).
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching recipe details:', error);
        setError('No se pudo cargar la receta. Por favor, inténtalo de nuevo.');
        setReceta(null);
      } else if (!data) {
        setError('Receta no encontrada.');
        setReceta(null);
      } else {
        setReceta(data);
      }
      setLoading(false);
    };

    fetchReceta();
  }, [id]);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-gray-500">Cargando receta...</div>;
  }

  if (error) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {receta && (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {receta.imagen_url && (
            <div className="w-full h-80 relative">
              <Image 
                src={receta.imagen_url} 
                alt={receta.titulo} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
          )}
          <div className="p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{receta.titulo}</h1>
            <p className="text-sm text-gray-500 mb-4">
              Por: {receta.autor_id?.email || 'Desconocido'}
            </p>
            <p className="text-xl text-gray-700 mb-6">{receta.descripcion}</p>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h2 className="text-2xl font-semibold border-b-2 border-orange-500 pb-1 mb-2">Ingredientes</h2>
                {receta.ingredientes && (
                  <ul className="list-disc list-inside space-y-1">
                    {receta.ingredientes.map((item, index) => (
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
