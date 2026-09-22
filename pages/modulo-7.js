import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 7,
  title: 'Chocolatería',
  guiding_question: '¿Qué cambia cuando controlamos la cristalización del chocolate?',
  expected_result: 'Reconstruir la secuencia documentada del temperado y aplicarla al análisis de piezas moldeadas, rellenas y decorativas, comparando las operaciones de cada preparación.',
};

const lessons = [
  ['51', 'El chocolate como materia prima', 'Reconoce los tipos de chocolate que aparecen en la fuente y qué cambia al trabajar con esta materia prima.', '/leccion-chocolate-como-materia-prima', true],
  ['52', 'Temperado: controlar la cristalización', 'Comprende la secuencia del temperado y su relación con el trabajo del chocolate.', '/leccion-temperado-cristalizacion', true],
  ['53', 'Chocolate moldeado', 'Relaciona el chocolate temperado con moldes y piezas moldeadas documentadas.', '/leccion-chocolate-moldeado', true],
  ['54', 'Rellenos y ganaches', 'Observa cómo el chocolate pasa de cobertura o pieza a preparación para relleno.', '/leccion-rellenos-y-ganaches', true],
  ['55', 'Bombonería, trufas, rochers y cortes', 'Distingue diferentes formas de trabajar, porcionar y terminar preparaciones de chocolate documentadas.', '/leccion-bomboneria-trufas-rochers-cortes', true],
  ['56', 'Transfer y acabado', 'Reconoce el uso del transfer y otras operaciones de acabado documentadas en la fuente.', '/leccion-transfer-y-acabado', true],
  ['57', 'Ganaches avanzadas: trimolina, sorbitol y emulsión', 'Integra los ingredientes y operaciones específicos de las ganaches avanzadas que aparecen en la fuente.', '/leccion-ganaches-avanzadas', true],
  ['58', 'Petit fours frescos: café y mango', 'Clase 23 · Reconstruye Delicias de café y Bocadito de Mango a partir de sus componentes, temperaturas y secuencias documentadas.', '/leccion-petit-fours-frescos', true],
];

export default function ModuleSevenPage() {
  return (
    <CourseShell eyebrow="Módulo 7" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
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
            Hasta ahora el curso ha trabajado masas, fermentación y laminados. En este módulo el foco cambia a una
            materia prima que exige controlar su estado antes de convertirla en piezas, rellenos o acabados.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La autonomía aumenta durante el módulo</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Empieza por reconocer la cobertura. Después reconstruye el temperado, sigue una preparación documentada, observa cómo cambian las operaciones cuando aparece un molde, un relleno o un acabado y explica la secuencia con evidencia de la receta.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div><p className="font-semibold text-stone-900">51 · Reconoce</p><p className="mt-1 text-sm leading-6 text-stone-600">Identifica la materia prima y sus variantes documentadas.</p></div>
            <div><p className="font-semibold text-stone-900">52–54 · Recupera y aplica</p><p className="mt-1 text-sm leading-6 text-stone-600">Recupera el temperado y úsalo para leer piezas, moldes, rellenos y ganaches.</p></div>
            <div><p className="font-semibold text-stone-900">55–57 · Compara y reconstruye</p><p className="mt-1 text-sm leading-6 text-stone-600">Distingue formatos, ordena operaciones y compara formulaciones documentadas.</p></div>
            <div><p className="font-semibold text-stone-900">58 · Integra</p><p className="mt-1 text-sm leading-6 text-stone-600">Reconstruye dos petit fours y distingue lo que la fuente sí documenta de lo que deja abierto.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Integración del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Del chocolate a la pieza terminada</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">Elige una preparación de chocolate documentada y reconstruye su recorrido: tipo de cobertura, temperado, operación principal, enfriado y acabado. Después compárala con otra preparación y señala qué operaciones permanecen y cuáles cambian.</p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">8 lecciones</span>
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
