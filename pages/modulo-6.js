import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 6,
  title: 'Laminados y pastelería clásica',
  guiding_question: '¿Cómo se construyen capas, masas y preparaciones clásicas hasta convertirse en piezas terminadas?',
  expected_result: 'Reconstruir y comparar las secuencias documentadas de laminado, pastelería internacional, pasteles de fiesta y postres mexicanos, identificando las operaciones y señales que aparecen en cada receta.'
};

const lessons = [
  ['40', 'El principio del laminado', 'Reconoce qué elementos aparecen de forma documentada en el trabajo con masa y empaste.', '/leccion-principio-del-laminado'],
  ['41', 'Croissant: empaste y vueltas', 'Sigue la secuencia documentada de fermentación, refrigeración, empaste, vueltas, formado y horneado.', '/leccion-croissant-empaste-y-vueltas'],
  ['42', 'Pan danés: tres vueltas y varios formatos', 'Compara la secuencia del pan danés y observa cómo cambia el formado según la pieza.', '/leccion-pan-danes-tres-vueltas'],
  ['43', 'Croissant y pan danés: comparar para reconocer', 'Distingue qué comparten y qué cambia entre dos recetas laminadas documentadas.', '/leccion-croissant-y-pan-danes-comparar'],
  ['44', 'Cerrar el laminado', 'Integra empaste, refrigeración, vueltas y formado sin añadir procedimientos que la fuente no documenta.', '/leccion-cerrar-el-laminado'],
  ['45', 'Masas Laminadas I', 'Clase 12 · Hojaldre clásico, mil hojas, orejas y rehiletes.', '/leccion-masas-laminadas-I'],
  ['46', 'Masas Laminadas II', 'Clase 13 · Hojaldre, Tarta Tatin y Pithiviers.', '/leccion-masas-laminadas-II'],
  ['47', 'Pastelería Internacional', 'Clase 14 · Pâte à Bombe, biscuit, tiramisú y pastel de zanahoria.', '/leccion-pasteleria-internacional'],
  ['48', 'Pastelería Internacional II', 'Clase 15 · Cheesecake de frutos rojos y cheesecake frío de Baileys.', '/leccion-pasteleria-internacional-II'],
  ['49', 'Pasteles de fiesta', 'Clase 17 · Panqué de aceite, fondant, betún de manteca y royal icing.', '/leccion-pasteles-de-fiesta'],
  ['50', 'Postres Mexicanos', 'Clase 18 · Buñuelos de viento, Torta de Cielo, Gaznates y Rompope de Santa Clara.', '/leccion-postres-mexicanos'],
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
          <p className="text-sm font-medium text-amber-900">El recorrido de esta etapa</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            La primera parte del módulo trabaja croissant y pan danés. A continuación, las Clases 12 y 13 del
            documento incorporan hojaldre clásico y sus aplicaciones. Después aparecen preparaciones de pastelería
            internacional, pasteles de fiesta y postres mexicanos. La Clase 16 no se incluye porque no forma parte
            del material disponible.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-amber-950">1. Construye</p><p className="mt-1 text-sm leading-6 text-amber-950">Relaciona masa, empaste, vueltas, reposos y formado en las preparaciones laminadas.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-amber-950">2. Reconoce</p><p className="mt-1 text-sm leading-6 text-amber-950">Distingue batidos, cremas, estabilización, coberturas, fritura y cocción según la preparación.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-amber-950">3. Transfiere</p><p className="mt-1 text-sm leading-6 text-amber-950">Compara preparaciones y reconstruye sus operaciones sin depender de memorizar listas aisladas.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Comprende → Haz → Observa → Explica</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Lee primero la secuencia de cada receta. Después ejecuta o reconstruye las operaciones, observa
            temperaturas, reposos, montajes y señales de finalización y finalmente explica el proceso con las
            palabras y cantidades de la fuente. Las lecciones 45–50 incorporan el contenido de las Clases 12–15
            y 17–18 del PDF sin crear una Clase 16 inexistente.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Ubica masa, empaste, batidos, rellenos y acabados.</p></div>
            <div><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Sigue la secuencia documentada sin mezclar recetas.</p></div>
            <div><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Registra tiempos, temperaturas, consistencias y señales.</p></div>
            <div><p className="font-semibold text-stone-900">4. Explica</p><p className="mt-1 text-sm leading-6 text-stone-600">Reconstruye el procedimiento con evidencia de la receta.</p></div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">11 lecciones</span>
          </div>
          <div className="grid gap-3">
            {lessons.map(([number, title, description, href]) => (
              <a key={number} href={href} className="flex items-center gap-4 rounded-2xl border border-amber-300 bg-white p-5 shadow-sm transition hover:border-amber-500 hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">{number}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-stone-900">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                </span>
                <span className="shrink-0 text-sm font-medium text-amber-800">Abrir lección →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Integración del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Clasifica → reconstruye → explica</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-amber-950">1. Clasifica</p><p className="mt-1 text-sm leading-6 text-amber-950">Construye una tabla con cuatro grupos: laminados, pastelería internacional, pasteles de fiesta y postres mexicanos. Para cada preparación registra la técnica principal.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-amber-950">2. Reconstruye</p><p className="mt-1 text-sm leading-6 text-amber-950">Sin mirar la receta, ordena las operaciones principales y recupera las cantidades, temperaturas, tiempos o señales que la fuente documenta.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-amber-950">3. Explica</p><p className="mt-1 text-sm leading-6 text-amber-950">Elige dos preparaciones y explica qué operación o condición cambia entre ellas. No completes la explicación con reglas externas a la fuente.</p></div>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
