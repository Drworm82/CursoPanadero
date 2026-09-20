import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 6,
  title: 'Laminados',
  guiding_question: '¿Cómo se construyen capas de masa y grasa y qué hace que se separen durante el horneado?',
  expected_result: 'Reconocer el empaste, la refrigeración y las vueltas documentadas en croissant y pan danés, y comparar cómo esas operaciones se integran en cada receta.',
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

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Límite de la fuente</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Trabajaremos con los laminados que sí están documentados.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La fuente contiene recetas de Croissant Casero y Pan Danés Varios Sabores. La ruta también menciona
            hojaldre como una aplicación de los laminados, pero no hay una receta de hojaldre documentada en
            <code>data/recetas.js</code>. Por eso el módulo no añadirá una fórmula ni un procedimiento de hojaldre.
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
