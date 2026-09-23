import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function ComprarPage() {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let mounted = true;

    async function loadAccess() {
      const { data: authData } = await supabase.auth.getClaims();

      if (!mounted) return;

      if (!authData?.claims?.sub) {
        setAuthenticated(false);
        setChecking(false);
        return;
      }

      const { data: hasAccess, error } = await supabase.rpc('has_active_course_access', {
        target_course_slug: 'curso-panaderia',
      });

      if (!mounted) return;

      if (!error && hasAccess === true) {
        window.location.replace('/ruta');
        return;
      }

      setAuthenticated(true);
      setChecking(false);
    }

    loadAccess();

    return () => {
      mounted = false;
    };
  }, []);

  async function handleCheckout() {
    if (!authenticated) {
      router.push('/acceso?next=/comprar');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'No fue posible iniciar el pago.');
      }

      window.location.assign(data.url);
    } catch (error) {
      setMessage(error.message || 'No fue posible iniciar el pago.');
      setLoading(false);
    }
  }

  if (checking) {
    return <div className="mx-auto max-w-3xl p-8 text-center text-stone-600">Comprobando acceso...</div>;
  }

  return (
    <main className="mx-auto max-w-4xl p-6 md:p-10">
      <section className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Acceso al curso</p>
        <h1 className="mt-3 text-4xl font-bold text-stone-900">Curso de Panadería y Repostería</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">
          Una ruta progresiva para aprender mediante técnica, práctica, observación y diagnóstico,
          con las recetas y lecciones del curso disponibles después de la compra.
        </p>

        <div className="mt-8 rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Pago único</p>
          <p className="mt-1 text-4xl font-bold text-stone-900">$499 MXN</p>
          <p className="mt-2 text-sm text-stone-600">Acceso permanente al curso. No es una suscripción.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 p-5">
            <h2 className="font-semibold text-stone-900">Ruta completa</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Módulos organizados de forma progresiva.</p>
          </div>
          <div className="rounded-2xl border border-stone-200 p-5">
            <h2 className="font-semibold text-stone-900">Práctica</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Recetas como evidencia para aplicar las técnicas.</p>
          </div>
          <div className="rounded-2xl border border-stone-200 p-5">
            <h2 className="font-semibold text-stone-900">Acceso permanente</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">Un solo pago, sin renovaciones.</p>
          </div>
        </div>

        {message && (
          <p className="mt-6 rounded-xl bg-red-50 p-4 text-sm text-red-800">{message}</p>
        )}

        <button
          type="button"
          onClick={handleCheckout}
          disabled={loading}
          className="mt-8 w-full rounded-full bg-stone-900 px-6 py-4 font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto"
        >
          {loading ? 'Preparando pago...' : authenticated ? 'Comprar el curso por $499 MXN' : 'Iniciar sesión para comprar'}
        </button>

        {!authenticated && (
          <p className="mt-4 text-sm text-stone-500">
            Necesitas una cuenta para que el acceso permanente quede asociado a ti.
          </p>
        )}
      </section>
    </main>
  );
}
