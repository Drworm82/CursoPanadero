import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 6,
  title: 'Laminados',
  guiding_question: '¿Cómo se construyen capas de masa y grasa y qué hace que se separen durante el horneado?',
  expected_result: 'Reconstruir y comparar las secuencias documentadas de croissant y pan danés, identificando empaste, refrigeración, vueltas y formado en cada receta.'
};

const lessons = [
  ['40', 'El principio del laminado', 'Reconoce qué elementos aparecen de forma documentada en el trabajo con masa y empaste.', '/leccion-principio-del-laminado', true],
  ['41', 'Croissant: empaste y vueltas', 'Sigue la secuencia documentada de fermentación, refrigeración, empaste, vueltas, formado y horneado.', '/leccion-croissant-empaste-y-vueltas', true],
  ['42', 'Pan danés: tres vueltas y varios formatos', 'Compara la secuencia del pan danés y observa cómo cambia el formado según la pieza.', '/leccion-pan-danes-tres-vueltas', true],
  ['43', 'Croissant y pan danés: comparar para reconocer', 'Distingue qué comparten y qué cambia entre dos recetas laminadas documentadas.', '/leccion-croissant-y-pan-danes-comparar', true],
  ['44', 'Cerrar el laminado', 'Integra empaste, refrigeración, vueltas y formado sin añadir procedimientos que la fuente no documenta.', '/leccion-cerrar-el-laminado', true],
];

export default function ModuleSixPage() {
  return (
    <CourseShell eyebrow="Módulo 6" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
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
          <p className="text-sm font-medium text-amber-900">El siguiente cambio</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            En los módulos anteriores observaste masas fermentadas, enriquecidas y productos mexicanos. Ahora la
            atención pasa al manejo de una masa que incorpora un empaste y atraviesa etapas de refrigeración y
            vueltas antes del formado.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Sigue la transformación paso a paso</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Las recetas de este módulo permiten observar una secuencia de masa, empaste, refrigeración, vueltas y
            formado. Durante cada preparación, identifica qué operación estás realizando y compárala con la otra
            receta. El módulo se mantiene dentro de los procedimientos que la fuente documenta; no se añade una
            fórmula de hojaldre porque no existe una receta documentada para estudiarla aquí.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Comprende → Haz → Observa → Explica</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Lee primero la secuencia de la receta. Después ejecuta o reconstruye cada operación, observa dónde
            intervienen el frío, el empaste y las vueltas, y finalmente explica qué cambia cuando la receta llega
            al formado. La comparación debe conservar las diferencias documentadas entre croissant y pan danés.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Ubica masa, fermentación, frío y empaste.</p></div>
            <div><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Sigue la secuencia documentada.</p></div>
            <div><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Registra vueltas, refrigeraciones y formado.</p></div>
            <div><p className="font-semibold text-stone-900">4. Explica</p><p className="mt-1 text-sm leading-6 text-stone-600">Compara las dos recetas sin mezclarlas.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Integración del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Reconstruye dos secuencias</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Haz dos diagramas, uno para croissant y otro para pan danés. Coloca en orden masa, fermentación,
            refrigeración, empaste, cada vuelta y formado. Después marca tres coincidencias y tres diferencias
            que puedas comprobar directamente en las recetas.
          </p>
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
            {lessons.map(([number, title, description, href, active]) => (
              active ? (
                <a
                  key={number}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-amber-300 bg-white p-5 shadow-sm transition hover:border-amber-500 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">
                    {number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-stone-900">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                  </span>
                  <span className="shrink-0 text-sm font-medium text-amber-800">Abrir lección →</span>
                </a>
              ) : (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm opacity-70"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                    {number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-stone-900">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                  </span>
                  <span className="shrink-0 text-sm text-stone-400">En preparación</span>
                </div>
              )
            ))}
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
