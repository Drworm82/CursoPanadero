import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 9,
  title: 'Pasteles a gran escala',
  guiding_question: '¿Cómo se organizan pasteles a gran escala mediante sistemas de producción en serie?',
  expected_result: 'Reconstruir y comparar la organización de las preparaciones, la secuencia de producción y el montaje de los pasteles a gran escala documentados en la Clase 38.',
};

const lessons = [
  ['70', 'Framboisier', 'Clase 38 · Pasteles a Gran Escala · Modelo guiado', '/leccion-framboisier', true],
  ['71', 'Gimont', 'Clase 38 · Pasteles a Gran Escala · Transferencia y comparación', '/leccion-gimont', true],
];

export default function ModuleNinePage() {
  return (
    <CourseShell eyebrow="Módulo 9" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-stone-500">Pregunta guía</p>
            <p className="mt-3 text-lg leading-8 text-stone-800">{moduleInfo.guiding_question}</p>
          </section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-stone-500">Al terminar</p>
            <p className="mt-3 leading-7 text-stone-700">{moduleInfo.expected_result}</p>
          </section>
        </div>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Primero modela; después transfiere</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La Lección 70 funciona como caso modelo: descompón Framboisier y reconstruye su secuencia documentada. En la Lección 71 cambia la tarea: usa lo aprendido para comparar Gimont con Framboisier y reconstruir un segundo sistema sin depender de la misma guía.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div><p className="font-semibold text-stone-900">70 · Modela</p><p className="mt-1 text-sm leading-6 text-stone-600">Descompón componentes, dependencias, frío y acabado de un caso completo.</p></div>
            <div><p className="font-semibold text-stone-900">71 · Transfiere</p><p className="mt-1 text-sm leading-6 text-stone-600">Compara dos sistemas y reconstruye Gimont a partir de sus relaciones.</p></div>
          </div>
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

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Integración del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Compara dos sistemas de producción</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Construye una tabla con Framboisier y Gimont. Para cada pastel, separa preparaciones base, derivados, componentes de relleno, etapas de frío y acabados. Después reconstruye la secuencia de producción de cada uno y señala qué tienen en común y qué cambia. Usa únicamente las operaciones documentadas en las lecciones.</p>
        </section>

        <section className="rounded-2xl border border-amber-300 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Cierre del curso</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Recupera, descompón, reconstruye y transfiere</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">Sin volver a estudiar las recetas completas, elige una preparación de cualquier módulo anterior y otra de este módulo. Para cada una identifica la estructura o componente principal, reconstruye las operaciones documentadas y señala una condición observable que indique el avance. Después compáralas: qué técnica recuperan, qué cambia y qué información deja la fuente sin especificar. El objetivo es demostrar que puedes leer una preparación nueva como un sistema de operaciones, no repetir una fórmula de memoria.</p>
          <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-amber-950">
            <li>Recupera una técnica de un módulo anterior sin consultar la receta.</li>
            <li>Descompón una preparación compleja en componentes y operaciones.</li>
            <li>Reconstruye el orden documentado y separa lo explícito de lo que la fuente no especifica.</li>
            <li>Compara dos preparaciones y explica qué cambia entre ellas.</li>
          </ol>
        </section>
      </div>
    </CourseShell>
  );
}
