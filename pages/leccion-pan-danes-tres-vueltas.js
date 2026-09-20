import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '42',
  title: 'Pan danés: tres vueltas y varios formatos',
  subtitle: 'Seguir el laminado del pan danés y observar cómo una misma pasta continúa hacia distintos formatos.',
};

const doughIngredients = [
  '180 ml Leche',
  '22 g Levadura fresca',
  '495 g Harina',
  '30 g Azúcar',
  '11 g Sal',
  '90 g Huevo',
  '45 g Mantequilla',
];

const lamination = [
  ['01', 'Fermentar', 'Fermenta durante 30 minutos.'],
  ['02', 'Ponchar', 'Poncha la masa después de la fermentación.'],
  ['03', 'Extender y enfriar', 'Extiende en forma rectangular y refrigera.'],
  ['04', 'Empastar', 'Empasta con 225 g de Margarina Flex azul.'],
  ['05', 'Dar vueltas', 'Da tres vueltas sencillas.'],
];

const formats = [
  {
    name: 'Molinos de viento',
    steps: 'Extiende, barniza y espolvorea nuez. Corta cuadros grandes y forma. Leva y hornea a 180 °C por 10–12 minutos.',
  },
  {
    name: 'Garras de oso',
    steps: 'Extiende en rectángulo, haz cortes al centro y rellena con mermelada. Enrolla, corta, da forma, barniza y lleva al horno.',
  },
  {
    name: 'Torcidas de coco',
    steps: 'Extiende la pasta, corta rectángulos y haz un corte al centro. Tuércela. Rellena con crema pastelera, espolvorea coco y añade piña. Barniza, leva y hornea.',
  },
];

export default function LessonPanDanesTresVueltasPage() {
  return (
    <CourseShell
      eyebrow="Módulo 6 · Lección 42"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-6"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            ¿Qué permanece igual cuando una pasta laminada termina en formatos diferentes?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">
            La receta de Pan Danés Varios Sabores documenta una masa, una fermentación inicial, refrigeración,
            empaste y tres vueltas sencillas. Después de ese trabajo, la misma pasta se utiliza para distintos
            formatos, cada uno con su propio formado y acabado.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">La masa</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La base antes del empaste</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La receta documenta los siguientes ingredientes para la masa:
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
            <p className="text-sm font-medium text-amber-800">Empaste</p>
            <p className="mt-2 text-lg font-semibold text-stone-900">225 g Margarina Flex azul</p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">El laminado</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Tres vueltas sencillas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La secuencia documentada es distinta a la del croissant: aquí la receta indica tres vueltas sencillas
            después del empaste.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-5">
            {lamination.map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-white p-4">
                <span className="text-sm font-semibold text-amber-700">{number}</span>
                <h3 className="mt-1 font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Después de las vueltas</p>
          <h2 className="mt-2 text-2xl font-semibold">Una pasta, tres formatos documentados</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-200">
            La receta continúa con tres ejemplos. El laminado ya realizado no cambia, pero sí cambian los cortes,
            rellenos, formas y acabados descritos para cada pieza.
          </p>

          <div className="mt-6 grid gap-4">
            {formats.map((format, index) => (
              <article key={format.name} className="rounded-2xl bg-white/10 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{format.name}</h3>
                    <p className="mt-2 leading-7 text-stone-200">{format.steps}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Comparación</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">El laminado termina antes de que empiecen las diferencias de formato</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Parte compartida</p>
              <p className="mt-2 leading-7 text-stone-700">
                Masa → fermentación de 30 minutos → ponchado → rectángulo → refrigeración → empaste → tres vueltas sencillas.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Parte variable</p>
              <p className="mt-2 leading-7 text-stone-700">
                A partir de ahí aparecen distintos cortes, formas, rellenos y acabados para los molinos de viento,
                las garras de oso y las torcidas de coco.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Separa proceso y formato</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Haz dos listas. En la primera escribe únicamente las operaciones que llevan hasta las tres vueltas.
            En la segunda coloca los tres formatos y anota qué cambia en cada uno: corte, forma, relleno o acabado.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <p className="mt-2 max-w-3xl leading-7 text-stone-700">
            La receta documenta tres vueltas sencillas y describe los tres formatos. No explica la geometría de las
            vueltas, el mecanismo físico de las capas ni tiempos o temperaturas específicos de levado y horneado para
            todos los formatos. Esos detalles no se completan con información externa.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">
            Datos de <strong>Pan Danés Varios Sabores</strong> contenidos en <code>data/recetas.js</code>. La
            organización pedagógica de la lección es propia de esta ruta.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
