import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '41',
  title: 'Croissant: empaste y vueltas',
  subtitle: 'Seguir una receta laminada completa sin perder la secuencia entre masa, empaste, vueltas y formado.',
};

const doughIngredients = [
  '500 g Harina',
  '8 g Sal',
  '70 g Azúcar',
  '30 g Levadura fresca',
  '240 ml Agua',
  '100 g Mantequilla',
];

const détrempeSteps = [
  ['01', 'Mezclar', 'Mezcla en 1ª velocidad todos los ingredientes de la masa, excepto la margarina para empastar.'],
  ['02', 'Fermentar', 'Fermenta durante 45 minutos.'],
  ['03', 'Ponchar', 'Después de la primera fermentación, poncha la masa.'],
  ['04', 'Refrigerar', 'Refrigera durante 20 minutos.'],
];

const laminationSteps = [
  ['01', 'Extender', 'Extiende la masa preparada después de la refrigeración.'],
  ['02', 'Empastar', 'Envuelve la margarina destinada al empaste.'],
  ['03', 'Refrigerar', 'Refrigera antes de continuar con las vueltas.'],
  ['04', 'Vuelta doble', 'Da una vuelta doble y refrigera de nuevo.'],
  ['05', 'Vuelta sencilla', 'Después da una vuelta sencilla y vuelve a refrigerar.'],
];

const finishSteps = [
  ['01', 'Extender', 'Extiende la pasta después del trabajo de vueltas.'],
  ['02', 'Cortar', 'Corta triángulos de 50 g.'],
  ['03', 'Enrollar', 'Enrolla los triángulos para formar los croissants.'],
  ['04', 'Fermentar', 'Fermenta durante 1.5 horas a 28 °C.'],
  ['05', 'Barnizar', 'Barniza con la mezcla de huevo, crema y sal.'],
  ['06', 'Hornear', 'Hornea a 190 °C durante 12 minutos.'],
];

export default function LessonCroissantEmpasteYVueltasPage() {
  return (
    <CourseShell
      eyebrow="Módulo 6 · Lección 41"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-6"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            ¿Cómo se recorre la receta de croissant desde la masa hasta el horneado?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">
            La receta de Croissant Casero permite seguir una secuencia completa: primero se prepara y fermenta la
            masa, después se incorpora la margarina mediante el empaste y se realizan dos tipos de vuelta con
            refrigeraciones intermedias. Finalmente, la pasta se corta, se enrolla, vuelve a fermentar, se barniza y
            se hornea.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">La fórmula de la masa</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes del empaste</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La receta distingue los ingredientes de la masa de los destinados al empaste y al barniz. Para la masa,
            documenta las siguientes cantidades:
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {doughIngredients.map((item) => (
              <div key={item} className="rounded-xl bg-stone-50 p-4">
                <span className="text-sm font-medium text-stone-500">Masa</span>
                <p className="mt-1 font-semibold text-stone-900">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-medium text-amber-800">Para el empaste</p>
            <p className="mt-2 text-lg font-semibold text-stone-900">250 g Margarina Flex Azul</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Primera etapa</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Preparar, fermentar y enfriar</h2>

          <div className="mt-6 grid gap-3 md:grid-cols-4">
            {détrempeSteps.map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-stone-50 p-4">
                <span className="text-sm font-semibold text-amber-700">{number}</span>
                <h3 className="mt-1 font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-stone-900 p-5 text-white">
            <p className="text-sm font-medium text-stone-300">Punto de lectura</p>
            <p className="mt-2 leading-7 text-stone-100">
              La refrigeración de 20 minutos aparece después de la primera fermentación y del ponchado, antes de
              extender la masa y realizar el empaste.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Segunda etapa</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Empaste y vueltas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Aquí aparece la parte específica del laminado documentada para el croissant. La receta no presenta las
            vueltas como una sola operación: indica una vuelta doble y después una vuelta sencilla, con refrigeración
            entre ellas.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {laminationSteps.map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-white p-4">
                <span className="text-sm font-semibold text-amber-700">{number}</span>
                <h3 className="mt-1 font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <p className="text-sm font-medium text-stone-500">Primera vuelta</p>
              <h3 className="mt-1 text-xl font-semibold text-stone-900">Vuelta doble</h3>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente indica que, después de envolver la margarina y refrigerar, se da una vuelta doble y se
                refrigera de nuevo.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <p className="text-sm font-medium text-stone-500">Segunda vuelta</p>
              <h3 className="mt-1 text-xl font-semibold text-stone-900">Vuelta sencilla</h3>
              <p className="mt-2 leading-7 text-stone-700">
                Después de la segunda refrigeración, la receta indica dar una vuelta sencilla y volver a refrigerar.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Tercera etapa</p>
          <h2 className="mt-2 text-2xl font-semibold">Del laminado al croissant</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            Una vez terminadas las vueltas y la última refrigeración, la receta deja el trabajo de laminado y pasa
            al formado de la pieza.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {finishSteps.map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-white/10 p-4">
                <span className="text-sm font-semibold text-stone-300">{number}</span>
                <h3 className="mt-1 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-200">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">El barniz</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una preparación aparte</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La receta también separa los ingredientes del barniz. Antes del horneado se utiliza una mezcla de:
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {['2 pzas Huevo', '15 g Crema para batir', '1 pizca Sal'].map((item) => (
              <div key={item} className="rounded-xl bg-stone-50 p-4">
                <p className="font-semibold text-stone-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">La receta completa</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una sola secuencia para reconstruir</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
            {[
              ['1', 'Masa', 'Mezcla en 1ª velocidad los ingredientes de la masa, excepto la margarina para empastar.'],
              ['2', 'Primera fermentación', 'Fermenta 45 minutos.'],
              ['3', 'Ponchado y frío', 'Poncha y refrigera 20 minutos.'],
              ['4', 'Empaste', 'Extiende la masa y envuelve la margarina.'],
              ['5', 'Vueltas', 'Refrigera, da una vuelta doble, refrigera de nuevo, da una vuelta sencilla y refrigera.'],
              ['6', 'Formado', 'Extiende la pasta, corta triángulos de 50 g y enrolla.'],
              ['7', 'Fermentación final', 'Fermenta 1.5 horas a 28 °C.'],
              ['8', 'Barniz y horno', 'Barniza con huevo, crema y sal. Hornea a 190 °C durante 12 minutos.'],
            ].map(([number, title, text]) => (
              <div key={number} className="grid gap-2 border-b border-stone-200 p-4 last:border-b-0 sm:grid-cols-[3rem_11rem_1fr] sm:items-start">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">
                  {number}
                </span>
                <p className="font-semibold text-stone-900">{title}</p>
                <p className="leading-7 text-stone-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye las vueltas sin mirar la receta</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Escribe la secuencia desde el final de la primera fermentación hasta la última refrigeración. Debes
            incluir, en orden, el ponchado, la primera refrigeración, el empaste, la vuelta doble, la refrigeración,
            la vuelta sencilla y la refrigeración final. Después añade el formado y la fermentación de 1.5 horas a
            28 °C.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Seguimos la operación, no inventamos su explicación.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La receta documenta el empaste, la refrigeración, una vuelta doble, una vuelta sencilla y el formado
            posterior. No explica la geometría de cada vuelta, el mecanismo físico de separación de capas ni una
            teoría general de la laminación. Esos aspectos no se presentan como información derivada de esta fuente.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">
            Datos de <strong>Croissant Casero</strong> contenidos en <code>data/recetas.js</code>. La organización
            pedagógica de la secuencia es propia de esta ruta.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
