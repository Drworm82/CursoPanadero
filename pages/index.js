import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">La Masa en Casa</h1>
      <p className="mb-4">
        Aprende panadería y pastelería desde cero, paso a paso, y guarda tus recetas favoritas para siempre.
      </p>
      <div className="flex gap-4">
        <Link href="/curso">
          <a className="bg-yellow-500 px-4 py-2 rounded text-white">Ir al curso</a>
        </Link>
        <Link href="/recetas">
          <a className="bg-green-500 px-4 py-2 rounded text-white">Ver recetas</a>
        </Link>
      </div>
    </div>
  );
}
