import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@supabase/auth-helpers-react';
import Layout from '../components/Layout';

const supabase = createPagesBrowserClient();

export default function AccesoPage() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/curso');
    }
  }, [user, router]);

  if (user) {
    return null;
  }

  return (
    <Layout>
      <div className="flex justify-center items-center p-8">
        <div className="w-full max-w-md">
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google']}
          />
        </div>
      </div>
    </Layout>
  );
}
