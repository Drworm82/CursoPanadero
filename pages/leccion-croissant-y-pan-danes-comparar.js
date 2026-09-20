import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '43',
  title: 'Croissant y pan danés: comparar para reconocer',
  subtitle: 'Usar dos recetas laminadas para distinguir operaciones compartidas y diferencias documentadas.',
};

const comparison = [
  ['Masa', '500 g harina, 8 g sal, 70 g azúcar, 30 g levadura fresca, 240 ml agua, 100 g mantequilla.', '180 ml leche, 22 g levadura fresca, 495 g harina, 30 g azúcar, 11 g sal, 90 g huevo, 45 g mantequilla.'],
  ['Empaste', '250 g Margarina Flex Azul.', '225 g Margarina Flex azul.'],
  ['Fermentación inicial', '45 minutos.', '30 minutos.'],
  ['Antes del empaste', 'Ponchar y refrigerar 20 minutos; después extender.', 'Ponchar, extender en forma rectangular y refrigerar.'],
  ['Vueltas', 'Una vuelta doble y después una vuelta sencilla, con refrigeraciones intermedias.', 'Tres vueltas sencillas.'],
  ['Continuación', 'Cortar triángulos de 50 g y enrollar.', 'Pasar a los formatos documentados: molinos de viento, garras de oso y torcidas de coco.'],
];

const commonSequence = [
  ['1', 'Masa base', 'Ambas recetas parten de una masa preparada con ingredientes propios.'],
  ['2', 'Fermentación', 'Ambas documentan una fermentación antes del trabajo de laminado.'],
  ['3', 'Ponchado', 'Las dos recetas indican ponchar la masa antes de continuar.'],
  ['4', 'Refrigeración', 'La refrigeración aparece antes o durante el trabajo del empaste y las vueltas.'],
  ['5', 'Empaste', 'Las dos incorporan margarina específicamente destinada al empaste.'],
  ['6', 'Vueltas', 'Ambas continúan con vueltas antes del formado.'],
];

export default function LessonCroissantYPanDanesCompararPage() {
  return (
    <CourseShell
      eyebrow="Módulo 6 · Lección 43"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-6"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            ¿Qué permite reconocer una comparación directa entre croissant y pan danés?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">
            Las dos recetas comparten una estructura de trabajo: masa, fermentación, ponchado, refrigeración,
            empaste y vueltas. La comparación también permite ver que no utilizan las mismas cantidades ni la misma
            combinación de vueltas y que después del laminado cada receta sigue su propia ruta.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Primero, lo que comparten</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una estructura reconocible</h2>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {commonSequence.map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-stone-50 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">
                  {number}
                </span>
                <h3 className="mt-3 font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Después, las diferencias</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">No son la misma receta</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="p-3 text-sm font-semibold text-stone-500">Aspecto</th>
                  <th className="p-3 text-sm font-semibold text-stone-900">Croissant</th>
                  <th className="p-3 text-sm font-semibold text-stone-900">Pan danés</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([aspect, croissant, danes]) => (
                  <tr key={aspect} className="border-b border-stone-100 last:border-b-0">
                    <th className="p-3 align-top text-sm font-semibold text-stone-800">{aspect}</th>
                    <td className="p-3 align-top text-sm leading-6 text-stone-700">{croissant}</td>
                    <td className="p-3 align-top text-sm leading-6 text-stone-700">{danes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
            <p className="text-sm font-medium text-stone-300">Croissant</p>
            <h2 className="mt-2 text-2xl font-semibold">Una secuencia de dos tipos de vuelta</h2>
            <p className="mt-4 leading-7 text-stone-200">
              La receta indica una vuelta doble y después una vuelta sencilla, con refrigeraciones entre las
              operaciones. Después corta triángulos de 50 g, los enrolla y los lleva a una fermentación de 1.5 horas
              a 28 °C.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-stone-500">Pan danés</p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-900">Tres vueltas sencillas y varios formatos</h2>
            <p className="mt-4 leading-7 text-stone-700">
              La receta indica tres vueltas sencillas y después continúa con diferentes formatos: molinos de viento,
              garras de oso y torcidas de coco.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">La comparación como herramienta</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Reconocer antes de memorizar</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Si encuentras una receta con masa, fermentación, refrigeración, empaste y vueltas, puedes identificar el
            tipo de proceso que se está documentando. Después, la comparación obliga a mirar los detalles: cantidades,
            número y tipo de vueltas y el formato al que llega la pasta.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Completa la comparación de memoria</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Sin consultar las recetas, escribe tres cosas que permanecen iguales y tres que cambian entre croissant
            y pan danés. Después comprueba tus respuestas con la tabla. El objetivo es reconocer la estructura sin
            convertir las dos recetas en una sola.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <p className="mt-2 max-w-3xl leading-7 text-stone-700">
            La comparación se limita a las operaciones y cantidades que aparecen en las dos recetas. La fuente no
            explica por qué una receta utiliza una vuelta doble y una sencilla mientras la otra utiliza tres vueltas
            sencillas, ni desarrolla una teoría general que permita atribuirles una función técnica específica.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">
            Datos de <strong>Croissant Casero</strong> y <strong>Pan Danés Varios Sabores</strong> contenidos en
            <code>data/recetas.js</code>. La organización comparativa es propia de esta ruta.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
