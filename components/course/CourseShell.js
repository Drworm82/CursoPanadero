import Link from 'next/link';

export default function CourseShell({ eyebrow, title, description, children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <header className="mb-10">
        <Link href="/ruta" className="text-sm font-medium text-stone-500 hover:text-stone-900">
          Curso de Panadería y Repostería
        </Link>
        {eyebrow && <p className="mt-5 text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">{description}</p>}
      </header>
      {children}
    </div>
  );
}
