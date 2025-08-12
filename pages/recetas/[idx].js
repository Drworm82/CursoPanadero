import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import { getSession } from '../../lib/supabase';

export default function RecetaDetallePage() {
  const router = useRouter();
  const { id } = router.query;
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReceta = async () => {
      if (!id) return;

      // Obtener la receta
      const { data: recetaData, error } = await supabase
        .from('recetas_usuario')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching recipe:', error);
        setLoading(false);
        return;
      }
      
      // Si la receta no es pública, verificar el acceso del usuario
      if (!recetaData.is_public) {
        const { data: { session } } = await supabase.auth.getSession();
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

        if (!hasAccess) {
          // Si no tiene acceso, redirigir a la página de recetas
          router.push('/recetas');
          return;
        }
      }
      
      setReceta(recetaData);
      setLoading(false);
    };

    fetchReceta();
  }, [id, router]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl">Cargando receta...</h1>
      </div>
    );
  }

  if (!receta) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold">Receta no encontrada</h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{receta.titulo}</h1>
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredientes</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {receta.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Pasos</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {receta.pasos.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
