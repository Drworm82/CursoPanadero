// pages/index.js

import { useEffect, useState } from 'react';
// La ruta corregida: solo un '..' para subir un nivel desde el directorio 'pages'.
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

export default function IndexPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (session) {
        router.push('/recetas');
      } else {
        router.push('/login');
      }
      
      setLoading(false);
    };

    handleAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        router.push('/recetas');
      } else if (event === 'SIGNED_OUT') {
        router.push('/login');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };

  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Verificando sesión...</p>
      </div>
    );
  }

  return null;
}
