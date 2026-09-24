import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function AccesoPage() {
  const router = useRouter();
  const [mode, setMode] = useState('login');
  const locale = router.locale || 'es';
  const isEnglish = locale === 'en';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function redirectAfterAuth() {
    const requestedNext = typeof router.query.next === 'string' ? router.query.next : '';
    let next = null;

    try {
      const parsedNext = new URL(requestedNext, window.location.origin);
      if (parsedNext.origin === window.location.origin && parsedNext.pathname.startsWith('/')) {
        next = parsedNext.pathname + parsedNext.search + parsedNext.hash;
      }
    } catch {
      next = null;
    }

    if (next) {
      window.location.replace(next);
      return;
    }

    const { data: accessData, error } = await supabase.rpc('has_active_course_access', {
      target_course_slug: 'curso-panaderia',
    });

    if (!error && accessData === true) {
      window.location.replace(locale === 'en' ? '/en/ruta' : '/ruta');
      return;
    }

    window.location.replace(locale === 'en' ? '/en/comprar' : '/comprar');
  }

  useEffect(() => {
    let mounted = true;

    async function checkSession() {
      const { data } = await supabase.auth.getClaims();
      if (mounted && data?.claims) {
        await redirectAfterAuth();
      }
    }

    checkSession();

    return () => {
      mounted = false;
    };
  }, [router.query.next]);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const result =
      mode === 'login'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    if (result.error) {
      setMessage(result.error.message);
      setLoading(false);
      return;
    }

    if (mode === 'signup') {
      setMessage(isEnglish ? 'Account created. If Supabase asks for email confirmation, check your inbox before signing in.' : 'Cuenta creada. Si Supabase solicita confirmación por correo, revisa tu bandeja antes de iniciar sesión.');
      setLoading(false);
      return;
    }

    // Do a full navigation only after the browser client has persisted
    // the session cookies. This avoids Next.js route-prefetch races.
    await redirectAfterAuth();
  }

  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-2">
          {mode === 'login' ? (isEnglish ? 'Sign in' : 'Iniciar sesión') : (isEnglish ? 'Create account' : 'Crear cuenta')}
        </h1>
        <p className="text-gray-600 mb-6">
          {isEnglish ? 'Access your baking learning path.' : 'Accede a tu ruta de aprendizaje de panadería.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">{isEnglish ? 'Email' : 'Correo'}</span>
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-1 w-full rounded border p-3"
              autoComplete="email"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">{isEnglish ? 'Password' : 'Contraseña'}</span>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1 w-full rounded border p-3"
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-yellow-500 px-4 py-3 font-bold text-white disabled:opacity-50"
          >
            {loading ? (isEnglish ? 'Processing...' : 'Procesando...') : mode === 'login' ? (isEnglish ? 'Sign in' : 'Entrar') : (isEnglish ? 'Create account' : 'Crear cuenta')}
          </button>
        </form>

        {message && (
          <p className="mt-4 rounded bg-gray-100 p-3 text-sm text-gray-700">
            {message}
          </p>
        )}

        <button
          type="button"
          onClick={() => {
            setMode(mode === 'login' ? 'signup' : 'login');
            setMessage('');
          }}
          className="mt-6 text-sm text-blue-600 hover:underline"
        >
          {mode === 'login'
            ? (isEnglish ? 'Do not have an account yet? Create one' : '¿Todavía no tienes cuenta? Crear una')
            : (isEnglish ? 'I already have an account. Sign in' : 'Ya tengo una cuenta. Iniciar sesión')}
        </button>
      </div>
    </div>
  );
}
