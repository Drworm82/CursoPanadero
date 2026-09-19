import Head from 'next/head';
import AuthStatus from './AuthStatus';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#fbf8f2] text-stone-900">
      <Head>
        <title>Curso de Panadería y Repostería</title>
        <meta name="description" content="Ruta progresiva de aprendizaje basada en técnicas, recetas, observación y diagnóstico." />
      </Head>
      <header className="border-b border-stone-200 bg-[#fbf8f2]/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="/" className="font-semibold tracking-tight">Curso Panadero</a>
          <div className="flex items-center gap-5 text-sm">
            <a href="/ruta" className="hover:text-amber-700">Ruta</a>
            <a href="/progreso" className="hover:text-amber-700">Progreso</a>
            <AuthStatus />
          </div>
        </nav>
      </header>
      <main className="min-h-[calc(100vh-9rem)]">{children}</main>
      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500">
        <p>Curso de Panadería y Repostería · 2026</p>
      </footer>
    </div>
  );
}