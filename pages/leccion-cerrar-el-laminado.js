import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '44',
  title: 'Cerrar el laminado',
  subtitle: 'Integrar masa, empaste, refrigeración, vueltas y formado para leer dos recetas como procesos completos.',
};

const croissant = [
  'Masa: 500 g harina, 8 g sal, 70 g azúcar, 30 g levadura fresca, 240 ml agua y 100 g mantequilla.',
  'Fermentación de 45 minutos, ponchado y refrigeración de 20 minutos.',
  'Empaste con 250 g de Margarina Flex Azul.',
  'Una vuelta doble, refrigeración y una vuelta sencilla, con refrigeración según la secuencia documentada.',
  'Corte en triángulos de 50 g, enrollado y fermentación de 1.5 horas a 28 °C.',
  'Barniz con huevo, crema para batir y sal; horneado a 190 °C durante 12 minutos.',
];

const danes = [
  'Masa: 180 ml leche, 22 g levadura fresca, 495 g harina, 30 g azúcar, 11 g sal, 90 g huevo y 45 g mantequilla.',
  'Fermentación de 30 minutos, ponchado, extensión rectangular y refrigeración.',
  'Empaste con 225 g de Margarina Flex azul.',
  'Tres vueltas sencillas.',
  'Después del laminado, la pasta se utiliza para molinos de viento, garras de oso y torcidas de coco.',
  'Los formatos continúan con los acabados y horneados documentados para cada pieza.',
];

const checklist = [
  ['Masa', '¿Puedo identificar los ingredientes de la masa antes del empaste?'],
  ['Fermentación', '¿Sé en qué momento aparece la fermentación antes del laminado?'],
  ['Frío', '¿Puedo localizar las refrigeraciones dentro de la secuencia?'],
  ['Empaste', '¿Sé qué grasa se utiliza para el empaste y en qué cantidad?'],
  ['Vueltas', '¿Puedo decir cuántas vueltas y de qué tipo documenta cada receta?'],
  ['Formado', '¿Puedo explicar qué ocurre después de terminar las vueltas?'],
];

export default function LessonCerrarElLaminadoPage() {
  return (
    <CourseShell
      eyebrow="Módulo 6 · Lección 44"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-6"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Cierre del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold">
            ¿Puedes reconstruir el proceso sin mezclar las dos recetas?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-200">
            El objetivo del módulo no es memorizar una explicación general de los laminados. Es reconocer las
            operaciones que aparecen en las recetas documentadas y seguirlas en orden: masa, fermentación,
            refrigeración, empaste, vueltas y formado.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Croissant</p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una secuencia específica</h2>
            <ul className="mt-5 space-y-3">
              {croissant.map((item) => (
                <li key={item} className="rounded-xl bg-stone-50 p-4 text-sm leading-6 text-stone-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pan danés</p>
            <h2 className="mt-2 text-2xl font-semibold text-stone-900">Otra secuencia documentada</h2>
            <ul className="mt-5 space-y-3">
              {danes.map((item) => (
                <li key={item} className="rounded-xl bg-stone-50 p-4 text-sm leading-6 text-stone-700">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Lo que debes poder reconocer</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">La columna vertebral del proceso</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {checklist.map(([title, question], index) => (
              <div key={title} className="rounded-xl bg-white p-4">
                <span className="text-sm font-semibold text-amber-700">0{index + 1}</span>
                <h3 className="mt-1 font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{question}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Síntesis</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Dos recetas, una estructura de lectura</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-6">
            {[
              ['1', 'Masa'],
              ['2', 'Fermentación'],
              ['3', 'Refrigeración'],
              ['4', 'Empaste'],
              ['5', 'Vueltas'],
              ['6', 'Formado'],
            ].map(([number, title]) => (
              <div key={number} className="rounded-xl bg-stone-50 p-4 text-center">
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">
                  {number}
                </span>
                <p className="mt-3 text-sm font-semibold text-stone-900">{title}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-3xl leading-7 text-stone-700">
            Esta estructura permite comparar las dos recetas sin borrar sus diferencias. El croissant continúa con
            triángulos de 50 g y enrollado; el pan danés continúa con varios formatos documentados.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y compara</h2>
          <p className="mt-2 leading-7 text-stone-600">Cierra el módulo con una reconstrucción de memoria: explica las dos recetas usando seis palabras —masa, fermentación, refrigeración, empaste, vueltas y formado— y añade una diferencia concreta entre ellas.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica con evidencia de la receta</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Puedes ordenar las seis operaciones sin consultar las recetas?</p>
            <p>2. ¿Qué diferencia concreta puedes demostrar entre croissant y pan danés?</p>
            <p>3. ¿Qué aspecto de la laminación no queda explicado por estas recetas?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Reto de cierre</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Explica el proceso en seis pasos</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Sin consultar las recetas, intenta explicar el proceso utilizando únicamente estas seis palabras:
            <strong> masa, fermentación, refrigeración, empaste, vueltas y formado</strong>. Después añade las
            diferencias específicas que recuerdes entre croissant y pan danés.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Cerrar el módulo también significa saber qué no está documentado.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Las recetas permiten describir operaciones, cantidades y secuencias concretas. No proporcionan una
            explicación teórica completa de la laminación, la geometría de las vueltas ni el mecanismo físico que
            produce la separación de capas durante el horneado. El módulo no convierte esas ausencias en afirmaciones.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente del cierre</p>
          <p className="mt-2 leading-7 text-stone-700">
            Datos de <strong>Croissant Casero</strong> y <strong>Pan Danés Varios Sabores</strong> contenidos en
            <code>data/recetas.js</code>. La síntesis y las actividades son organización pedagógica propia de esta ruta.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
