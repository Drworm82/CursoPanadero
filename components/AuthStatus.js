import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function AuthStatus() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const isEnglish = router.locale === 'en';

  useEffect(() => {
    let mounted = true;

    supabase.auth.getClaims().then(({ data }) => {
      if (mounted) {
        setUser(data?.claims || null);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ? { sub: session.user.id, email: session.user.email } : null);
    });

    return () => {
      mounted = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.assign(isEnglish ? '/en/acceso' : '/acceso');
  }

  if (!user) {
    return (
      <Link href={isEnglish ? '/en/acceso' : '/acceso'} className="hover:underline">
        {isEnglish ? 'Sign in' : 'Acceso'}
      </Link>
    );
  }

  return (
    <button type="button" onClick={handleSignOut} className="hover:underline">
      {isEnglish ? 'Sign out' : 'Cerrar sesión'}
    </button>
  );
}
