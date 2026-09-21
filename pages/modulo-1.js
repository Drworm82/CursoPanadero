import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 1,
  title: 'Entrar a la panadería: masas batidas pesadas',
  guiding_question: '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?',
  expected_result: 'Ejecutar las preparaciones del módulo aplicando y comparando métodos de masas batidas pesadas, y explicar qué se observa durante la mezcla y la cocción.',
};

const lessons = [
  ['1', 'Entrar a la panadería', 'Conoce la ruta y establece qué vas a observar durante la preparación, mezcla y cocción.', '/leccion-entrar-a-la-panaderia'],
  ['2', 'Primer panqué: acremado', 'Ejecuta el método de acremado y reconoce los cambios de textura durante la mezcla.', '/leccion-primer-panque-acremado'],
  ['3', 'Segunda ruta: aceite', 'Trabaja una masa batida pesada con aceite y compárala con el acremado.', '/leccion-segunda-ruta-aceite'],
  ['4', 'Repetición con criterio', 'Repite el acremado observando sus etapas y evitando sobrebatir los secos.', '/leccion-repeticion-con-criterio'],
  ['5', 'El horno también es parte', 'Relaciona las condiciones de cocción indicadas con el resultado que observas.', '/leccion-el-horno-tambien-es-parte'],
  ['6', 'Mini reto: ¿qué cambió?', 'Compara métodos, mezclas y cocción y explica qué cambió entre las preparaciones.', '/leccion-mini-reto-que-cambio'],
];

export default function ModuleOnePage() {
  return (
    <CourseShell eyebrow="Módulo 1" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
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

        <section className="rounded-2xl bg-amber-50 p-6 sm:p-7">
          <p className="text-sm font-medium text-amber-900">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Aprende haciendo, observando y comparando</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            En este módulo no basta con terminar una preparación. En cada práctica identifica qué método estás usando,
            observa los cambios de textura y compara el resultado con lo que ocurrió en las preparaciones anteriores.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Identifica el método que vas a practicar.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Sigue la preparación y atiende las señales indicadas.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Registra cambios de textura, volumen, color y estructura.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">4. Compara</p><p className="mt-1 text-sm leading-6 text-stone-600">Relaciona lo observado con las otras preparaciones.</p></div>
          </div>
        </section>

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

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cierre del módulo</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Qué deberías poder explicar</h2>
          <ul className="mt-4 space-y-3 text-stone-700">
            <li>• Qué método de elaboración estás utilizando en cada preparación.</li>
            <li>• Qué cambios de textura observas durante la mezcla.</li>
            <li>• Por qué el momento de detener el batido importa en estas preparaciones.</li>
            <li>• Qué diferencias observas entre una masa trabajada con mantequilla y una elaborada con aceite.</li>
            <li>• Qué relación encuentras entre las condiciones de cocción y el resultado final.</li>
          </ul>
        </section>
      </div>
    </CourseShell>
  );
}
