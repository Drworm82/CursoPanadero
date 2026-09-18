import Link from 'next/link';

export default function ModuleCard({ module }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="text-sm font-medium text-stone-500">Módulo {module.sort_order}</span>
        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">Disponible</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-stone-900">{module.title}</h2>
      {module.guiding_question && (
        <p className="mt-3 text-stone-600">{module.guiding_question}</p>
      )}
      <Link
        href={module.slug === 'modulo-1-masas-batidas-pesadas' ? '/modulos/modulo-1-masas-batidas-pesadas' : '#'}
        className="mt-6 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-700"
      >
        Ver módulo
      </Link>
    </article>
  );
}
