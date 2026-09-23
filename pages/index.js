import { useRouter } from 'next/router';

export default function Home() {
  const { locale = 'es' } = useRouter();
  const isEnglish = locale === 'en';
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-6xl font-extrabold text-gray-800">{isEnglish ? 'Baking at Home' : 'La Masa en Casa'}</h1>
        <p className="mb-8 text-xl text-gray-600">
          {isEnglish ? 'Learn baking and pastry from the ground up, step by step, and keep your favorite recipes.' : 'Aprende panadería y pastelería desde cero, paso a paso, y guarda tus recetas favoritas para siempre.'}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href={isEnglish ? '/en/ruta' : '/ruta'} className="rounded-full bg-yellow-500 px-8 py-3 font-bold text-white shadow-lg transition-colors duration-300 hover:bg-yellow-600">
            {isEnglish ? 'Go to course' : 'Ir al curso'}
          </a>
          <a href={isEnglish ? '/en/recetas' : '/recetas'} className="rounded-full bg-green-500 px-8 py-3 font-bold text-white shadow-lg transition-colors duration-300 hover:bg-green-600">
            {isEnglish ? 'View recipes' : 'Ver recetas'}
          </a>
        </div>
      </div>
    </div>
  );
}
