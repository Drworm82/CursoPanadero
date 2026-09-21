import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 2,
  title: 'Cuando una masa no quiere gluten: masas friables',
  guiding_question: '¿Por qué algunas masas necesitan desarrollar estructura y otras necesitan evitarla?',
  expected_result: 'Aplicar los métodos documentados para masas friables, comparar sus efectos sobre la pasta y explicar cómo el trabajo, la grasa y el reposo se relacionan con el resultado.',
};

const lessons = [
  ['7', 'Una masa que quiere lo contrario', 'Descubre por qué en una masa friable buscamos mantener el gluten lo más aislado posible.', '/leccion-masa-friable'],
  ['8', 'Sablée y sucrée', 'Conoce el método de arenado y compara dos pastas friables de la fuente.', '/leccion-sablee-y-sucree'],
  ['9', 'De la pasta a la tarta', 'Aplica la pasta, cocínala, impermeabilízala y entiende cómo se construye una tarta de frutas.', '/leccion-de-la-pasta-a-la-tarta'],
  ['10', 'Pay de limón', 'Integra una pasta sucrée con crema de limón y merengue suizo.', '/leccion-pay-de-limon'],
  ['11', 'Lo que cambia cuando cambia el objetivo', 'Cierra el módulo relacionando gluten, grasa, reposo y método.', '/leccion-lo-que-cambia-el-objetivo'],
];



export default function ModuleTwoPage() {
  return (
    <CourseShell eyebrow="Módulo 2" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
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
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            En el módulo anterior observaste que el momento de detener el trabajo importa. Ahora usa esa idea como punto de partida:
            en las masas friables, cada decisión de mezcla, reposo y manipulación está relacionada con la textura que buscamos.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Identifica qué estructura busca la masa.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Aplica el método indicado en la preparación.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Busca señales de textura, frío y forma.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">4. Explica</p><p className="mt-1 text-sm leading-6 text-stone-600">Relaciona el método con el resultado.</p></div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">5 lecciones</span>
          </div>

          <div className="grid gap-3">
            {lessons.map(([number, title, description, href]) => (
              <a
                key={number}
                href={href}
                className={`group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition ${href === '#' ? 'cursor-default opacity-65' : 'hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md'}`}
                onClick={(event) => href === '#' && event.preventDefault()}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                  {number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-stone-900">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                </span>
                <span className="shrink-0 text-sm text-stone-400">{href === '#' ? 'Próximamente' : 'Abrir →'}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cierre del módulo</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Qué deberías poder explicar</h2>
          <ul className="mt-4 space-y-3 text-stone-700">
            <li>• Qué busca una masa friable y en qué se diferencia de una masa de pan.</li>
            <li>• Qué observas cuando la grasa y la harina forman la arenilla del sablage.</li>
            <li>• Por qué la fuente indica mezclar sin amasar y dejar reposar en refrigeración.</li>
            <li>• Qué diferencia hay entre trabajar una pasta por sablage y por acremado.</li>
            <li>• Cómo se relacionan la base, la impermeabilización y el montaje en las tartas trabajadas.</li>
          </ul>
        </section>
      </div>
    </CourseShell>
  );
}
