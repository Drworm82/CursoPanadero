import Link from 'next/link';

export default function PagoExitosoPage() {
  return (
    <main className="mx-auto max-w-2xl p-8 text-center">
      <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-700">Pago recibido</p>
        <h1 className="mt-3 text-3xl font-bold text-stone-900">Estamos confirmando tu acceso</h1>
        <p className="mt-4 leading-7 text-stone-600">
          Stripe ha regresado a la aplicación. La confirmación definitiva del pago se procesa en nuestro servidor.
          Cuando el acceso esté registrado, podrás entrar a tu ruta.
        </p>
        <Link href="/ruta" className="mt-8 inline-flex rounded-full bg-stone-900 px-6 py-3 font-semibold text-white">
          Entrar a mi ruta
        </Link>
      </div>
    </main>
  );
}
