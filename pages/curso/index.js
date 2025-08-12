import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';

export default function CursoPage() {
  const [temario, setTemario] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const fetchTemario = async () => {
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

      let query = supabase.from('temario_curso').select('*').order('orden');
      
      if (!userHasAccess) {
        query = query.eq('is_public', true);
      }

      const { data, error } = await query;
      if (error) {
        console.error('Error fetching course topics:', error);
      } else {
        setTemario(data);
      }
      setLoading(false);
    };

    fetchTemario();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando temario...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Temario del Curso</h1>
      {!hasAccess && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
          <p className="font-bold">Acceso restringido</p>
          <p>Solo puedes ver los temas públicos. Para acceder al contenido completo, por favor, inicia sesión con un usuario con acceso.</p>
        </div>
      )}
      <div className="space-y-6">
        {temario.length === 0 ? (
          <p className="text-center text-gray-500">No hay temas disponibles.</p>
        ) : (
          temario.map((tema) => (
            <Link key={tema.id} href={`/curso/${tema.id}`} className="block bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition-colors duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{tema.titulo}</h2>
              <p className="mt-2 text-gray-600">{tema.descripcion}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
