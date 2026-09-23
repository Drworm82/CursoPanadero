import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 4,
  title: 'Fermentación y panadería',
  guiding_question: '¿Cómo pasa una masa de ingredientes mezclados a una pieza de pan con volumen, estructura y características propias?',
  expected_result: 'Ejecutar y comparar las etapas documentadas de masas fermentadas, reconocer señales de fermentación, amasado, formado y horneado, y explicar cómo cambian los procesos según la receta.'
};

const lessons = [
  ['25', 'El proceso completo de una masa', 'Reconoce la secuencia desde el pesado y mezclado hasta el enfriado.', '/leccion-el-proceso-completo-de-una-masa'],
  ['26', 'Fermentar es transformar', 'Observa qué cambia en una masa durante la fermentación y qué señales indican su avance.', '/leccion-fermentar-es-transformar'],
  ['27', 'Amasado, estructura y tensión', 'Relaciona el trabajo de la masa con la condición que debe alcanzar antes de la fermentación.', '/leccion-amasado-estructura-y-tension'],
  ['28', 'Baguette: estructura, formado y greñado', 'Trabaja la Baguette Tradicional documentada y distingue qué detalles del greñado sí aparecen y cuáles no se desarrollan.', '/leccion-baguette-estructura-formado-greñado'],
  ['29', 'Focaccia: otra forma de entender la hidratación', 'Trabaja la Focaccia documentada y compara sus cantidades con otras masas sin atribuir a la fuente una teoría general de hidratación que no desarrolla.', '/leccion-focaccia-otra-forma-hidratacion'],
  ['30', 'Ciabatta y biga', 'Trabaja la Ciabatta documentada como demostración y reconoce qué partes del procedimiento están descritas y cuáles se remiten a la demostración.', '/leccion-ciabatta-y-biga'],
  ['31', 'Panes con grasa, azúcar y huevo', 'Compara, dentro de las recetas documentadas, cómo aparecen grasa, azúcar y huevo y cómo cambia el manejo de esas masas.', '/leccion-panes-enriquecidos'],
  ['32', 'Brioche: grasa, azúcar y fermentación', 'Analiza la receta de Brioche y compárala con otras masas enriquecidas documentadas.', '/leccion-brioche-grasa-azucar-fermentacion'],
  ['33', 'Bagels y pita: el formato cambia el proceso', 'Compara las recetas documentadas de Bagels y Pan Pita y observa cómo cambian formado y cocción.', '/leccion-bagels-y-pita'],
  ['34', 'Fougasse y panes saborizados', 'Integra formado, acabado y adición de ingredientes a partir de panes saborizados que sí están documentados.', '/leccion-fougasse-y-panes-saborizados'],
];

export default function ModuleFourPage() {
  return (
    <CourseShell eyebrow="Módulo 4" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
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
          <p className="text-sm font-medium text-amber-900">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Comprende → Haz → Observa → Explica</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            En cada pan identifica primero la etapa que estás estudiando. Después ejecuta la secuencia documentada,
            observa señales como volumen, elasticidad, tensión, fermentación o coloración y finalmente explica qué
            relación existe entre esa señal y la operación que acabas de realizar.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <div className="grid gap-3 md:grid-cols-4">
            <div><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Identifica la etapa y el objetivo de la preparación.</p></div>
            <div><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Sigue la secuencia de la fuente sin adelantar operaciones.</p></div>
            <div><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Registra cambios de volumen, textura, tensión y color.</p></div>
            <div><p className="font-semibold text-stone-900">4. Explica</p><p className="mt-1 text-sm leading-6 text-stone-600">Relaciona cada señal con la etapa correspondiente.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Integración del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye el proceso sin mirar la receta</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Elige tres preparaciones del módulo y escribe su secuencia desde el mezclado hasta el horneado.
            Después marca dónde aparece la fermentación, qué señal indica avanzar y qué operación cambia entre
            las tres recetas. Si una técnica específica no está desarrollada en la fuente, déjala identificada
            como información pendiente en lugar de completarla por inferencia.
          </p>
        </section>

        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">El siguiente cambio</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            En el módulo anterior aprendiste a construir estructuras mediante aire y vapor. Ahora cambia el proceso:
            vamos a trabajar con masas fermentadas y a observar cómo avanzan las distintas etapas de elaboración.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">10 lecciones</span>
          </div>

          <div className="grid gap-3">
            {lessons.map(([number, title, description, href]) =>
              href !== '#' ? (
                <a key={number} href={href} className="flex items-center gap-4 rounded-2xl border border-amber-200 bg-white p-5 shadow-sm hover:border-amber-300 hover:shadow-md">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">{number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-stone-900">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                  </span>
                  <span className="shrink-0 text-sm font-medium text-amber-700">Abrir →</span>
                </a>
              ) : (
                <div key={number} className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm opacity-70">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">{number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-stone-900">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                  </span>
                  <span className="shrink-0 text-sm text-stone-400">En preparación</span>
                </div>
              )
            )}
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
