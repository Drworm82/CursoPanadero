export default function CourseShell({ eyebrow, title, description, backHref = '/ruta', backLabel = 'Volver a la ruta', children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <header className="mb-10">
        <a
          href={backHref}
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-stone-900"
        >
          <span aria-hidden="true">←</span>
          {backLabel}
        </a>
        {eyebrow && <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">{description}</p>}
      </header>
      {children}
    </div>
  );
}
