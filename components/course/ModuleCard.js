import { useRouter } from 'next/router';

export default function ModuleCard({ module }) {
  const { locale = 'es' } = useRouter();
  const href = module.href || '#';
  const localizedHref = locale === 'en' && href.startsWith('/') ? `/en${href}` : href;
  const isEnglish = locale === 'en';

  return (
    <article className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <span className="text-sm font-medium text-stone-500">{isEnglish ? 'Module' : 'Módulo'} {module.sort_order}</span>
        <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">{isEnglish ? 'Available' : 'Disponible'}</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-stone-900">{module.title}</h2>
      {module.guiding_question && <p className="mt-3 text-stone-600">{module.guiding_question}</p>}
      <a href={localizedHref} className="mt-6 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-700">
        {isEnglish ? 'View module' : 'Ver módulo'}
      </a>
    </article>
  );
}
