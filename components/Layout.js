import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Curso Panadero</title>
        <meta name="description" content="Curso de Panadería Artesanal" />
      </Head>

      <header className="bg-gray-800 text-white p-4">
        <nav className="max-w-4xl mx-auto flex justify-between">
          <Link href="/">
            <p className="font-bold text-xl">Mi Panadería</p>
          </Link>
          <div>
            <Link href="/curso" className="mr-4 hover:underline">
              Curso
            </Link>
            <Link href="/recetas" className="hover:underline">
              Recetas
            </Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-100 py-8">
        {children}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Mi Panadería. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
