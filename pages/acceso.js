import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@supabase/auth-helpers-react';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

export default function AccesoPage() {
  const user = useUser();
  const router = useRouter();
  const supabase = useSupabaseClient(); // Obtiene el cliente desde el contexto

  useEffect(() => {
    if (user) {
      router.push('/curso');
    }
  }, [user, router]);

  if (user) {
    return null;
  }

  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-full max-w-md">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
        />
      </div>
    </div>
  );
}
