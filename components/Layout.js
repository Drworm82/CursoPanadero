import Head from 'next/head';
import AuthStatus from './AuthStatus';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#fbf8f2] text-stone-900">
      <Head>
        <title>Curso de Panadería y Repostería</title>
        <meta name="description" content="Ruta progresiva de aprendizaje basada en técnicas, recetas, observación y diagnóstico." />
      </Head>

      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#fbf8f2]/90 backdrop-blur-md">
        <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-5 px-5 sm:px-8">
          <a href="/" className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-900 text-sm text-white transition-transform group-hover:-rotate-3">
              CP
            </span>
            <span className="font-semibold tracking-tight text-stone-900">Curso Panadero</span>
          </a>

          <div className="flex items-center gap-1 text-sm">
            <a href="/ruta" className="rounded-full px-3 py-2 text-stone-600 transition hover:bg-white hover:text-stone-950">Ruta</a>
            <a href="/progreso" className="rounded-full px-3 py-2 text-stone-600 transition hover:bg-white hover:text-stone-950">Progreso</a>
            <span className="ml-1 border-l border-stone-200 pl-2">
              <AuthStatus />
            </span>
          </div>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-9rem)]">{children}</main>

      <footer className="mt-8 border-t border-stone-200/80 px-5 py-8 text-center text-sm text-stone-500">
        <p>Curso de Panadería y Repostería · 2026</p>
      </footer>
    </div>
  );
}
