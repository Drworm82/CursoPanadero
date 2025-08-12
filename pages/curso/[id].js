import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function ModuloIndividual() {
  const router = useRouter();
  const { id } = router.query;
  const [modulo, setModulo] = useState(null);
  const [clases, setClases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchModulo = async () => {
      // Verificar si el usuario tiene acceso
      const { data: { session } } = await supabase.auth.getSession();
      let userHasAccess = false;
      if (session) {
        const { data: userAccess } = await supabase
          .from('users_with_access')
          .select('user_id')
          .eq('user_id', session.user.id)
          .single();
        if (userAccess) {
          userHasAccess = true;
        }
      }
      setHasAccess(userHasAccess);

      // Obtener el módulo y sus clases solo si el usuario tiene acceso
      const { data: moduloData, error: moduloError } = await supabase
        .from('modulos_curso')
        .select('*')
        .eq('id', id)
        .single();
      
      if (moduloError) {
        console.error('Error fetching module:', moduloError);
      } else {
        setModulo(moduloData);
      }

      if (userHasAccess) {
        const { data: clasesData, error: clasesError } = await supabase
          .from('clases_curso')
          .select('*')
          .eq('modulo_id', id)
          .order('orden');
        
        if (clasesError) {
          console.error('Error fetching classes:', clasesError);
        } else {
          setClases(clasesData);
        }
      }

      setLoading(false);
    };

    fetchModulo();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando módulo...</p>
      </div>
    );
  }
  
  if (!modulo) {
      return (
          <div className="flex justify-center items-center h-screen text-center">
              <p className="text-2xl font-bold">Módulo no encontrado</p>
          </div>
      );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">{modulo.titulo}</h1>
      <p className="text-gray-600 mb-6">{modulo.descripcion}</p>

      {!hasAccess && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p className="font-bold">Acceso Denegado</p>
          <p>Solo los usuarios en la lista blanca pueden ver el contenido de las clases. Contáctanos para más información.</p>
        </div>
      )}

      {hasAccess && clases.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Clases</h2>
          {clases.map((clase) => (
            <Link key={clase.id} href={`/clases/${clase.id}`} className="block bg-white shadow-lg rounded-lg p-4 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="text-xl font-medium">{clase.titulo}</h3>
            </Link>
          ))}
        </div>
      )}
      {hasAccess && clases.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No hay clases disponibles en este módulo.</p>
      )}
    </div>
  );
}
