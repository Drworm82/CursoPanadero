import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../lib/supabase';
import Layout from '../../components/Layout';
import { modulos } from '../../data/curso';

export default function LeccionPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [session, setSession] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  // Busca la lección y su módulo correspondiente
  const leccion = modulos.flatMap(m => m.lecciones).find(l => l.slug === slug);
  const modulo = leccion ? modulos.find(m => m.lecciones.some(l => l.slug === slug)) : null;

  useEffect(() => {
    const getSessionAndAccess = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (!session) {
        router.push('/acceso');
        return;
      }

      const { data: userAccess, error } = await supabase
        .from('users_with_access')
        .select('user_id')
        .eq('user_id', session.user.id)
        .single();
      
      if (userAccess) {
        setHasAccess(true);
      }
      setLoading(false);
    };

    getSessionAndAccess();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        if (newSession) {
          setSession(newSession);
        } else {
          router.push('/acceso');
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <p>Cargando...</p>
        </div>
      </Layout>
    );
  }

  if (!hasAccess) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-2xl font-bold">Acceso Denegado</p>
        </div>
      </Layout>
    );
  }

  if (!leccion) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-4xl font-bold mb-4">Lección no encontrada</h1>
          <a href="/curso" className="text-blue-500 hover:underline">
            Volver a los módulos
          </a>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-4">
        <a href="/curso" className="text-blue-500 hover:underline">
          &larr; Volver a los módulos
        </a>
        <h1 className="text-4xl font-bold mt-4 text-gray-800">{leccion.titulo}</h1>
        {modulo && (
          <p className="text-lg text-gray-600 mt-2">
            **Módulo:** {modulo.titulo}
          </p>
        )}
        <div className="prose prose-lg mt-6">
          {leccion.contenido && leccion.contenido.map((parrafo, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: parrafo }}></p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
