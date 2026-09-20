export default function CourseShell({ eyebrow, title, description, backHref = '/ruta', backLabel = 'Volver a la ruta', children }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-7 sm:px-8 sm:py-10">
      <header className="mb-10">
        <a
          href={backHref}
          className="group inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-3.5 py-2 text-sm font-medium text-stone-600 shadow-sm backdrop-blur transition hover:border-stone-300 hover:bg-white hover:text-stone-900"
        >
          <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true">←</span>
          {backLabel}
        </a>

        <div className="mt-8 max-w-4xl">
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.025em] text-stone-950 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-3xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              {description}
            </p>
          )}
        </div>
      </header>

      <div className="course-surface">
        {children}
      </div>
    </div>
  );
}
