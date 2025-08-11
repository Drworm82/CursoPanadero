import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold text-gray-800 mb-4 animate-fade-in">
          La Masa en Casa
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-100">
          Aprende panadería y pastelería desde cero, paso a paso, y guarda tus recetas favoritas para siempre.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/curso" className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-colors duration-300">
            Ir al curso
          </Link>
          <Link href="/recetas" className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
            Ver recetas
          </Link>
        </div>
      </div>
    </div>
  );
}
