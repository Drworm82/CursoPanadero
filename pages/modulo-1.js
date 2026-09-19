import CourseShell from '../components/course/CourseShell';

const module = {
  sort_order: 1,
  title: 'Entrar a la panadería: masas batidas pesadas',
  guiding_question: '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?',
  expected_result: 'Ejecutar tres masas batidas pesadas con distintos métodos y describir lo observado.',
};

const lessons = [
  ['1', 'Entrar a la panadería', 'Conoce cómo funciona la ruta y qué vas a observar.', '/leccion-entrar-a-la-panaderia'],
  ['2', 'Primer panqué: acremado', 'Identifica los ingredientes básicos y aprende el acremado.', '/leccion-primer-panque-acremado'],
  ['3', 'Segunda ruta: aceite', 'Compara una masa batida pesada elaborada con otro método.', '/leccion-segunda-ruta-aceite'],
  ['4', 'Repetición con criterio', 'Repite el acremado prestando atención a cada etapa.', '/leccion-repeticion-con-criterio'],
  ['5', 'El horno también es parte', 'Observa cómo las condiciones de cocción afectan el resultado.', '/leccion-el-horno-tambien-es-parte'],
  ['6', 'Mini reto: ¿qué cambió?', 'Compara lo que hiciste y explica lo que observaste.', '/leccion-mini-reto-que-cambio'],
];

export default function ModuleOnePage() {
  return (
    <CourseShell eyebrow="Módulo 1" title={module.title}>
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Pregunta guía</p>
            <p className="mt-3 text-lg leading-8 text-stone-800">{module.guiding_question}</p>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Al terminar</p>
            <p className="mt-3 leading-7 text-stone-700">{module.expected_result}</p>
          </section>
        </div>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">6 lecciones</span>
          </div>

          <div className="grid gap-3">
            {lessons.map(([number, title, description, href]) => (
              <a
                key={number}
                href={href}
                className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700 group-hover:bg-amber-100 group-hover:text-amber-900">
                  {number}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-stone-900">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                </span>

                <span className="shrink-0 text-xl text-stone-300 transition group-hover:translate-x-0.5 group-hover:text-stone-600" aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
