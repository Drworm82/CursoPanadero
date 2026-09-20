import CourseShell from '../components/course/CourseShell';

const module = {
  sort_order: 4,
  title: 'Fermentación y panadería',
  guiding_question: '¿Cómo pasa una masa de ingredientes mezclados a una pieza de pan con volumen, estructura y características propias?',
  expected_result: 'Interpretar el proceso de una masa fermentada, reconocer fermentación, formado, greñado y horneado, y comenzar a comparar masas de pan con diferentes niveles de hidratación y enriquecimiento.',
};

const lessons = [
  ['25', 'El proceso completo de una masa', 'Reconoce la secuencia desde el pesado y mezclado hasta el enfriado.', '/leccion-el-proceso-completo-de-una-masa'],
  ['26', 'Fermentar es transformar', 'Observa qué cambia en una masa durante la fermentación y qué señales indican su avance.', '/leccion-fermentar-es-transformar'],
  ['27', 'Amasado, estructura y tensión', 'Relaciona el trabajo de la masa con la condición que debe alcanzar antes de la fermentación.', '/leccion-amasado-estructura-y-tension'],
  ['28', 'Baguette: estructura, formado y greñado', 'Ubica el formado y la segunda fermentación dentro del proceso, y distingue qué información sobre greñado todavía falta en la fuente.', '/leccion-baguette-estructura-formado-greñado'],
  ['29', 'Focaccia: otra forma de entender la hidratación', 'Compara cantidades de harina y agua en distintas recetas y distingue qué información sobre focaccia e hidratación todavía falta en la fuente.', '/leccion-focaccia-otra-forma-hidratacion'],
  ['30', 'Ciabatta y biga', 'Reconoce la definición de biga y distingue qué información sobre biga y ciabatta todavía falta en la fuente.', '/leccion-ciabatta-y-biga'],
  ['31', 'Panes enriquecidos', 'Compara cómo distintas recetas incorporan grasa, azúcar y huevo y cómo cambia su manejo.', '/leccion-panes-enriquecidos'],
  ['32', 'Brioche: grasa, azúcar y fermentación', 'Compara masas enriquecidas documentadas y distingue qué información específica de brioche todavía falta en la fuente.', '/leccion-brioche-grasa-azucar-fermentacion'],
  ['33', 'Bagels y pita: el formato cambia el proceso', 'Compara dos panes cuya forma y cocción producen resultados muy distintos.', '#'],
  ['34', 'Fougasse y panes saborizados', 'Integra formado, acabado y adición de ingredientes en panes con identidad propia.', '#'],
];

export default function ModuleFourPage() {
  return (
    <CourseShell eyebrow="Módulo 4" title={module.title} backHref="/ruta" backLabel="Volver a la ruta">
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
