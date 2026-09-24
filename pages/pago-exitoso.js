import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function PagoExitosoPage() {
  const router = useRouter();
  const [status, setStatus] = useState('checking');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!router.isReady) return;

    const sessionId = typeof router.query.session_id === 'string'
      ? router.query.session_id
      : '';

    if (!sessionId) {
      setStatus('error');
      setMessage('No se encontró la sesión de pago.');
      return;
    }

    let cancelled = false;
    let attempts = 0;

    async function checkPayment() {
      attempts += 1;

      try {
        const response = await fetch(
          `/api/stripe/payment-status?session_id=${encodeURIComponent(sessionId)}`,
          { cache: 'no-store' }
        );
        const data = await response.json();

        if (cancelled) return;

        if (response.ok && data.status === 'ready') {
          window.location.replace('/ruta');
          return;
        }

        if (!response.ok) {
          throw new Error(data.error || 'No fue posible comprobar el pago.');
        }

        if (attempts < 15) {
          window.setTimeout(checkPayment, 2000);
          return;
        }

        setStatus('pending');
        setMessage(
          'El pago fue recibido, pero el registro del acceso todavía está terminando. Puedes actualizar esta página en unos segundos.'
        );
      } catch (error) {
        if (cancelled) return;

        if (attempts < 15) {
          window.setTimeout(checkPayment, 2000);
          return;
        }

        setStatus('error');
        setMessage(error.message || 'No fue posible comprobar el estado del pago.');
      }
    }

    checkPayment();

    return () => {
      cancelled = true;
    };
  }, [router.isReady, router.query.session_id]);

  return (
    <main className="mx-auto max-w-2xl p-8 text-center">
      <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Pago recibido</p>
        <h1 className="mt-3 text-3xl font-bold text-stone-900">
          {status === 'checking' ? 'Estamos confirmando tu acceso' : 'Tu pago fue recibido'}
        </h1>
        <p className="mt-4 leading-7 text-stone-600">
          {status === 'checking'
            ? 'Estamos comprobando en el servidor que el pago haya quedado registrado y que tu acceso ya esté disponible.'
            : message || 'Tu acceso ya está listo.'}
        </p>

        {status === 'checking' && (
          <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-stone-100 px-5 py-3 text-sm text-stone-700">
            <span className="h-2 w-2 animate-pulse rounded-full bg-stone-700" />
            Esperando confirmación...
          </div>
        )}

        {status === 'pending' && (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white"
          >
            Comprobar de nuevo
          </button>
        )}

        {status === 'error' && (
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white"
          >
            Intentar de nuevo
          </button>
        )}
      </div>
    </main>
  );
}
