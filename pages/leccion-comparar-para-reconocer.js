import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '39',
  title: 'Comparar para reconocer',
  subtitle: 'Tres productos documentados, tres formas de construir una pieza terminada.',
};

const products = [
  {
    name: 'Conchas',
    formula: '550 g de harina, 130 g de azúcar, 5 g de sal, 15 g de levadura fresca, 200 g de huevo, 80 g de mantequilla y 80–130 ml de agua. Además, una tapa blanca u oscura.',
    process: 'La masa se fermenta 1 hora, se poncha, se porciona en piezas de 60 g y fermenta de nuevo 1 hora. La tapa se prepara por separado.',
    finish: 'Se cubre la pieza con la tapa de pasta, se marca y se hornea a 180 °C durante 15 minutos.',
    unknown: 'La fuente no explica técnicamente la función de la tapa ni del marcado.',
  },
  {
    name: 'Pan de pulque',
    formula: '7 huevos, 150 ml de pulque natural, 250 g de azúcar moscabado, 500 g de harina, 300 g de mantequilla fundida fría y 15 g de levadura fresca.',
    process: 'Se baten las claras y se agrega el pulque en forma de hilo durante 5–8 minutos. Después se incorporan las yemas, el azúcar, la harina, la mantequilla y la levadura disuelta. La mezcla fermenta hasta duplicar su tamaño.',
    finish: 'La mezcla se vierte en un molde engrasado y enharinado y se hornea a 200 °C durante 25–30 minutos.',
    unknown: 'La fuente no documenta porcionado ni una segunda fermentación para este producto.',
  },
  {
    name: 'Garibaldis',
    formula: '150 g de mantequilla, 100 g de azúcar, 4 yemas, 50 g de mermelada de chabacano, 150 g de harina, 10 g de polvo de hornear, 50 ml de leche y 4 claras. Para el acabado: gragea blanca y mermelada de chabacano.',
    process: 'Se acrema la mantequilla con el azúcar, se agregan las yemas y la mermelada, después la harina con polvo de hornear y la leche. Las claras se baten a punto de turrón y se incorporan con movimientos envolventes. La mezcla se vierte en capacillos y se hornea.',
    finish: 'Una vez fríos, se barnizan con mermelada de chabacano y se cubren con gragea blanca.',
    unknown: 'La fuente no especifica temperatura ni tiempo de horneado.',
  },
];

export default function LessonCompararParaReconocerPage() {
  return (
    <CourseShell
      eyebrow="Módulo 5 · Lección 39"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-5"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de cierre</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            ¿Qué podemos reconocer cuando comparamos productos en lugar de estudiarlos por separado?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">
            Las tres recetas documentadas permiten comparar fórmula, secuencia, forma de presentación y acabado.
            La comparación sirve para identificar diferencias concretas sin añadir información que la fuente no
            proporciona.
          </p>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Comparación documentada</p>
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">Tres productos, distintas secuencias</h2>
          </div>

          {products.map((product) => (
            <article key={product.name} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-stone-900">{product.name}</h3>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="text-sm font-semibold text-stone-500">Fórmula</p>
                  <p className="mt-2 leading-7 text-stone-700">{product.formula}</p>
                </div>
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="text-sm font-semibold text-stone-500">Proceso</p>
                  <p className="mt-2 leading-7 text-stone-700">{product.process}</p>
                </div>
                <div className="rounded-xl bg-stone-50 p-4">
                  <p className="text-sm font-semibold text-stone-500">Acabado y límites</p>
                  <p className="mt-2 leading-7 text-stone-700">{product.finish}</p>
                  <p className="mt-3 border-t border-stone-200 pt-3 text-sm leading-6 text-stone-500">
                    <strong>La fuente no especifica:</strong> {product.unknown}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Qué cambia al comparar</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Cuatro preguntas para reconocer una pieza</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-stone-50 p-4">
              <p className="font-semibold text-stone-900">1. ¿Qué contiene?</p>
              <p className="mt-2 leading-7 text-stone-700">Observa qué ingredientes aparecen en la fórmula documentada.</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-4">
              <p className="font-semibold text-stone-900">2. ¿Qué sucede antes del horno?</p>
              <p className="mt-2 leading-7 text-stone-700">Registra fermentación, mezclado, formado o cualquier otra etapa que la receta sí describa.</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-4">
              <p className="font-semibold text-stone-900">3. ¿Cómo se presenta?</p>
              <p className="mt-2 leading-7 text-stone-700">Identifica cobertura, marcado, molde, capacillo o cualquier acabado documentado.</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-4">
              <p className="font-semibold text-stone-900">4. ¿Qué queda sin explicar?</p>
              <p className="mt-2 leading-7 text-stone-700">Separa los datos ausentes de las conclusiones que podrías hacer por tu cuenta.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Ejercicio de integración</p>
          <h2 className="mt-2 text-2xl font-semibold">Reconstruye la diferencia</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-200">
            Haz una matriz con tres filas: Conchas, Pan de pulque y Garibaldis. Usa cinco columnas:
            ingredientes que distinguen la fórmula, fermentación o desarrollo de la preparación, formado o
            presentación antes del horno, acabado después del horno e información no especificada. Completa la
            matriz solamente con datos de las recetas.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-stone-200">
            Después, intenta identificar cada producto leyendo únicamente una de las columnas. Si una columna no
            permite distinguirlo, anota qué otra evidencia necesitas.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cierre del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La comparación convierte recetas en criterios de observación.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            En este módulo no necesitamos completar una historia externa de cada producto. Basta con reconocer,
            a partir de lo documentado, cómo cambian la fórmula, la secuencia de preparación, la presentación y
            el acabado entre las tres piezas estudiadas.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Límite de la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La fuente no aporta información histórica o cultural amplia sobre estos productos. Tampoco especifica
            temperatura ni tiempo de horneado para los Garibaldis, ni explica técnicamente la función de cada
            ingrediente, fermentación o acabado. Esos puntos permanecen fuera de lo que esta lección puede afirmar.
          </p>
        </section>

        <section className="border-t border-stone-200 pt-6">
          <p className="text-xs leading-6 text-stone-500">
            Fuente de esta lección: <code>data/recetas.js</code>, recetas «Conchas Tradicionales Mexicanas»,
            «Pan de Pulque con Sabor Tradicional» y «Garibaldis (Pastelitos con Gragea)».
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
