import Head from 'next/head';
import { useRouter } from 'next/router';
import AuthStatus from './AuthStatus';
import { getUi } from '../lib/i18n';

export default function Layout({ children }) {
  const router = useRouter();
  const locale = router.locale || 'es';
  const t = getUi(locale);
  const alternateLocale = locale === 'es' ? 'en' : 'es';

  function switchLocale() {
    router.push(router.asPath, router.asPath, { locale: alternateLocale });
  }

  const homeHref = locale === 'es' ? '/' : '/en';
  const routeHref = locale === 'es' ? '/ruta' : '/en/ruta';
  const progressHref = locale === 'es' ? '/progreso' : '/en/progreso';

  return (
    <div className="min-h-screen bg-[#fbf8f2] text-stone-900">
      <Head>
        <title>{locale === 'en' ? 'Baking and Pastry Course' : 'Curso de Panadería y Repostería'}</title>
        <meta name="description" content={locale === 'en' ? 'A progressive learning path based on techniques, recipes, observation, and diagnosis.' : 'Ruta progresiva de aprendizaje basada en técnicas, recetas, observación y diagnóstico.'} />
      </Head>

      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-[#fbf8f2]/90 backdrop-blur-md">
        <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-5 px-5 sm:px-8">
          <a href={homeHref} className="group flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-900 text-sm text-white transition-transform group-hover:-rotate-3">
              CP
            </span>
            <span className="font-semibold tracking-tight text-stone-900">{locale === 'en' ? 'Baking Course' : 'Curso Panadero'}</span>
          </a>

          <div className="flex items-center gap-1 text-sm">
            <a href={routeHref} className="rounded-full px-3 py-2 text-stone-600 transition hover:bg-white hover:text-stone-950">{t.route}</a>
            <a href={progressHref} className="rounded-full px-3 py-2 text-stone-600 transition hover:bg-white hover:text-stone-950">{t.progress}</a>
            <button
              type="button"
              onClick={switchLocale}
              className="rounded-full border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-600 transition hover:bg-white hover:text-stone-950"
              aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
            >
              {locale === 'es' ? 'EN' : 'ES'}
            </button>
            <span className="ml-1 border-l border-stone-200 pl-2">
              <AuthStatus />
            </span>
          </div>
        </nav>
      </header>

      <main className="min-h-[calc(100vh-9rem)]">{children}</main>

      <footer className="mt-8 border-t border-stone-200/80 px-5 py-8 text-center text-sm text-stone-500">
        <p>{locale === 'en' ? 'Baking and Pastry Course · 2026' : 'Curso de Panadería y Repostería · 2026'}</p>
      </footer>
    </div>
  );
}
