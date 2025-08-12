import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function CursoIndividual() {
  const router = useRouter();
  const { id } = router.query;
  const [tema, setTema] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchTema = async () => {
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

      // Obtener el tema
      const { data, error } = await supabase
        .from('temario_curso')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching topic:', error);
      } else {
        setTema(data);
      }
      setLoading(false);
    };

    fetchTema();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando tema...</p>
      </div>
    );
  }

  // Si no tiene acceso, mostrar un mensaje de denegación
  if (!hasAccess) {
    return (
      <div className="flex justify-center items-center h-screen text-center">
        <p className="text-2xl font-bold">Acceso Denegado</p>
      </div>
    );
  }

  // Si tiene acceso, mostrar el contenido del tema
  if (!tema) {
    return (
      <div className="flex justify-center items-center h-screen text-center">
        <p className="text-2xl font-bold">Tema no encontrado</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{tema.titulo}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p>{tema.contenido}</p>
      </div>
    </div>
  );
}
