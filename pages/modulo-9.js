import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 9,
  title: 'Pasteles a gran escala',
  guiding_question: '¿Cómo se organizan pasteles a gran escala mediante sistemas de producción en serie?',
  expected_result: 'Reconocer la organización de las preparaciones y del montaje en los pasteles a gran escala documentados en la Clase 38.',
};

const lessons = [
  ['66', 'Framboisier', 'Clase 38 · Pasteles a Gran Escala', '/leccion-framboisier', true],
  ['67', 'Gimont', 'Clase 38 · Pasteles a Gran Escala', '/leccion-gimont', true],
];

export default function ModuleNinePage() {
  return (
    <CourseShell eyebrow="Módulo 9" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Pregunta guía</p>
            <p className="mt-3 text-lg leading-8 text-stone-800">{moduleInfo.guiding_question}</p>
          </section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Al terminar</p>
            <p className="mt-3 leading-7 text-stone-700">{moduleInfo.expected_result}</p>
          </section>
        </div>

        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Clase 38</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            La fuente presenta pasteles a gran escala y plantea como objetivo aprender a elaborarlos mediante sistemas de producción en serie.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Límite de la fuente</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Dos elaboraciones documentadas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La Clase 38 contiene las recetas Framboisier y Gimont. Las lecciones reproducirán sus ingredientes, procedimientos y montajes según el material disponible, sin completar por cuenta propia los pasos que la fuente no desarrolla.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">2 lecciones</span>
          </div>
          <div className="grid gap-3">
            {lessons.map(([number, title, description, href, active]) => active ? (
              <a key={number} href={href} className="flex items-center gap-4 rounded-2xl border border-amber-300 bg-white p-5 shadow-sm transition hover:border-amber-500 hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">{number}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-stone-900">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                </span>
                <span className="shrink-0 text-sm font-medium text-amber-800">Abrir lección →</span>
              </a>
            ) : (
              <div key={number} className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-stone-100 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-200 text-sm font-semibold text-stone-500">{number}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-stone-700">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-stone-500">{description}</span>
                </span>
                <span className="shrink-0 text-sm text-stone-500">Próximamente</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
