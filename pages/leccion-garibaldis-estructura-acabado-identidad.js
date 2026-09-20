import LessonShell from '../components/course/LessonShell';

const lesson = {
  number: '38',
  title: 'Garibaldis: estructura, acabado e identidad',
  subtitle: 'Una preparación horneada que se completa después con mermelada y gragea blanca.',
};

const ingredients = [
  ['150 g', 'mantequilla'],
  ['100 g', 'azúcar'],
  ['4', 'yemas'],
  ['50 g', 'mermelada de chabacano'],
  ['150 g', 'harina'],
  ['10 g', 'polvo de hornear'],
  ['50 ml', 'leche'],
  ['4', 'claras'],
  ['200 g', 'gragea blanca'],
  ['150 g', 'mermelada de chabacano para el acabado'],
];

export default function LessonGaribaldisPage() {
  return (
    <LessonShell
      eyebrow="Módulo 5 · Lección 38"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-5"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            ¿En qué momento se construye el acabado que identifica a los Garibaldis?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">
            En esta receta, la preparación se hornea primero y, una vez fría, recibe mermelada de chabacano y
            gragea blanca. La secuencia permite observar que el acabado no forma parte únicamente del horneado:
            la receta documenta una etapa posterior para completar el producto.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Fórmula documentada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {ingredients.map(([amount, name]) => (
              <div key={amount + name} className="flex items-center justify-between gap-4 rounded-xl bg-stone-50 px-4 py-3">
                <span className="font-medium text-stone-900">{name}</span>
                <span className="text-sm text-stone-600">{amount}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Secuencia de preparación</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">De la mezcla al acabado</h2>
          <ol className="mt-5 space-y-4">
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">1</span>
              <p className="leading-7 text-stone-700">Acremar la mantequilla con el azúcar.</p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">2</span>
              <p className="leading-7 text-stone-700">Agregar las yemas una por una e incorporar la mermelada de chabacano.</p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">3</span>
              <p className="leading-7 text-stone-700">Cernir la harina con el polvo de hornear y agregarla a la preparación; después incorporar la leche.</p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">4</span>
              <p className="leading-7 text-stone-700">Batir las claras a punto de turrón y mezclarlas con la preparación.</p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">5</span>
              <p className="leading-7 text-stone-700">Llenar los capacillos y hornear.</p>
            </li>
            <li className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">6</span>
              <p className="leading-7 text-stone-700">Una vez fríos, barnizar con mermelada de chabacano y cubrir con gragea blanca.</p>
            </li>
          </ol>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-semibold text-stone-500">Conchas</p>
            <p className="mt-2 leading-7 text-stone-700">
              La cobertura se coloca sobre la pieza antes de marcarla y hornearla.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-semibold text-stone-500">Pan de pulque</p>
            <p className="mt-2 leading-7 text-stone-700">
              La receta centra su secuencia en la fórmula, la fermentación y el horneado en molde.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-semibold text-stone-500">Garibaldis</p>
            <p className="mt-2 leading-7 text-stone-700">
              El producto se completa después de enfriarse, con mermelada y gragea blanca.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Para observar</p>
          <h2 className="mt-2 text-2xl font-semibold">El acabado tiene su propio momento.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-200">
            Al comparar las tres recetas del módulo, registra en qué momento aparece el elemento que termina de
            construir cada pieza: cobertura y marcado en las conchas, la secuencia de fermentación y horneado en
            el pan de pulque, y acabado posterior al enfriado en los Garibaldis.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Mapa del acabado</h2>
          <p className="mt-3 leading-7 text-stone-700">
            Haz una tabla con tres filas: conchas, pan de pulque y Garibaldis. Para cada una, anota únicamente lo
            que la fuente documenta en cuatro columnas: ingredientes principales, etapas antes del horno, qué se
            hace con la pieza antes de hornear y qué se hace después de hornear. Marca también qué información no
            está especificada.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Límite de la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La receta no especifica temperatura ni tiempo de horneado para los Garibaldis. Tampoco explica
            técnicamente por qué el acabado se aplica después del enfriado ni aporta información histórica sobre
            el producto. Esos puntos se mantienen como información no documentada.
          </p>
        </section>

        <section className="border-t border-stone-200 pt-6">
          <p className="text-xs leading-6 text-stone-500">
            Fuente de esta lección: <code>data/recetas.js</code>, receta «Garibaldis (Pastelitos con Gragea)».
          </p>
        </section>
      </div>
    </LessonShell>
  );
}
