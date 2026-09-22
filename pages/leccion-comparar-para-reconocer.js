import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '39',
  title: 'Comparar para reconocer',
  subtitle: 'Tres productos documentados, tres formas de construir una pieza terminada.',
};

const products = [
  {
    name: 'Conchas',
    classLabel: 'Clase 26',
    formula: '550 g de harina, 130 g de azúcar, 5 g de sal, 15 g de levadura fresca, 200 g de huevo, 80 g de mantequilla y 80–130 ml de agua. Tapa blanca: 100 g de manteca vegetal, 100 g de azúcar, 100 g de harina y 20 g de huevo. Tapa oscura: 100 g de manteca vegetal, 100 g de azúcar, 90 g de harina, 10 g de cocoa y 20 g de huevo.',
    process: 'Trabajar con gancho harina, azúcar y sal; agregar levadura, huevos, mantequilla pomada y agua poco a poco hasta obtener una masa suave y lisa. Fermentar 1 hora, ponchar, porcionar 60 g y fermentar otra hora. Preparar la tapa por separado.',
    finish: 'Cubrir con la tapa de concha, marcar y hornear a 180 °C durante 15 minutos.',
    unknown: 'La fuente no explica técnicamente la función de la tapa ni del marcado.',
  },
  {
    name: 'Mantecadas',
    classLabel: 'Clase 26',
    formula: '100 g de huevo, 200 ml de aceite, 140 g de azúcar, 10 g de saborizante, 200 g de harina, 6 g de polvo de hornear, 200 ml de leche y 60 g de nuez picada.',
    process: 'Montar el huevo e incorporar el aceite en forma de hilo. Agregar el azúcar poco a poco con el saborizante. Integrar los secos alternando con la leche.',
    finish: 'Verter en moldes de muffin con capacillo No. 14 rojos, espolvorear nuez picada y hornear a 190 °C durante 20 minutos.',
    unknown: 'La fuente no especifica el saborizante utilizado.',
  },
  {
    name: 'Bisquets',
    classLabel: 'Clase 26',
    formula: '400 g de harina, 7 g de sal, 15 g de polvo de hornear, 6 g de azúcar, 100 g de mantequilla, 100 g de margarina, 150 g de huevo y 50 ml de leche. Barniz: 1 huevo, 1 pizca de azúcar y 1 pizca de sal.',
    process: 'Hacer una fuente con los secos. Agregar la materia grasa en trozos y hacer polvo. Incorporar huevo y leche hasta obtener una masa suave y pegajosa. Dar tres vueltas.',
    finish: 'Cortar redondo y marcar el centro con un aro más pequeño. Fermentar, barnizar dos veces y hornear a 180 °C aproximadamente 25 minutos.',
    unknown: 'La fuente no desarrolla técnicamente qué significa cada una de las tres vueltas.',
  },
  {
    name: 'Donas',
    classLabel: 'Clase 26',
    formula: '500 g de harina, 80 g de azúcar, 10 g de sal, 20 g de levadura fresca, 2 huevos, 2 g de canela, 70 g de mantequilla, 150 ml de leche, 8 g de mejorante y 1 L de aceite especial para freír. Glaseado: 50 g de cobertura para pastel semi amarga, 200 g de fondant líquido y 20 g de agua.',
    process: 'Mezclar hasta obtener una masa firme y muy elástica. Fermentar hasta duplicar tamaño, extender a 2 cm y cortar con cortador de dona. Dejar fermentar nuevamente.',
    finish: 'Freír hasta dorar de un lado y voltear. Retirar y quitar exceso de aceite; revolcar en canela y azúcar o, ya frías, cubrir con el glaseado de chocolate. Para el glaseado, calentar ligeramente fondant y cobertura a baño María, aplicar sobre la pieza fría y dejar secar.',
    unknown: 'La fuente no especifica la cantidad de canela y azúcar del acabado para las donas que no llevan glaseado.',
  },
  {
    name: 'Garibaldis',
    classLabel: 'Clase 29',
    formula: '150 g de mantequilla, 100 g de azúcar, 4 yemas, 50 g de mermelada de chabacano, 150 g de harina, 10 g de polvo de hornear, 50 ml de leche y 4 claras. Acabado: 200 g de gragea blanca, 150 g de mermelada de chabacano y capacillos rojos c/s.',
    process: 'Acremar mantequilla con azúcar; agregar yemas y 50 g de mermelada; integrar secos alternando con leche. Aparte montar las claras a punto de turrón e incorporarlas de forma envolvente. Vaciar en moldes de mantecada previamente engrasados y enharinados hasta ¾ de su capacidad.',
    finish: 'Hornear 15 minutos a 190 °C. Batir la mermelada hasta suavizarla; si es necesario agregar un poco de jarabe. Desmoldar, barnizar con mermelada y cubrir inmediatamente con gragea blanca.',
    unknown: 'La fuente no especifica la cantidad de piezas por peso individual más allá del rendimiento de 12 piezas.',
  },
  {
    name: 'Pan de pulque',
    classLabel: 'Clase 29',
    formula: '7 huevos, 150 ml de pulque natural, 250 g de azúcar moscabado, 500 g de harina cernida 3 veces, 300 g de mantequilla fundida fría y 15 g de levadura fresca.',
    process: 'Batir las claras y agregar el pulque en forma de hilo por 5–8 minutos. Incorporar poco a poco yemas, azúcar, harina, mantequilla y levadura disuelta en agua. Fermentar hasta duplicar tamaño.',
    finish: 'Verter en molde engrasado y enharinado y hornear a 200 °C durante 25–30 minutos.',
    unknown: 'La fuente no documenta porcionado ni una segunda fermentación.',
  },
  {
    name: 'Polvorones de manteca',
    classLabel: 'Clase 29',
    formula: '200 g de manteca vegetal, 200 g de azúcar, 1 yema, 250 g de harina, 4 g de bicarbonato de sodio y 2 g de sal. Acabado: 100 g de azúcar y 30 g de canela molida.',
    process: 'Batir la manteca con el azúcar hasta que quede cremosa. Agregar la yema y, al último, harina, bicarbonato y sal cernidos. Debe quedar una pasta seca pero suave. Hacer bolitas.',
    finish: 'Hornear a 170 °C en la primera sección del horno durante 10 minutos y después pasarlas a la parte alta para que doren. Enfriar y espolvorear con azúcar granulada mezclada con canela.',
    unknown: 'La fuente no especifica una cantidad de piezas por peso individual más allá del rendimiento de 12 piezas.',
  },
  {
    name: 'Rosca de Reyes tradicional',
    classLabel: 'Clase 29',
    formula: '500 g de harina, 12 g de levadura fresca, 4 g de sal, 100 g de azúcar, 120 ml de leche, 5 g de ralladura de limón, 165 g de huevo y 200 g de mantequilla. Tapa de azúcar: 50 g de manteca vegetal, 50 g de azúcar, 50 g de harina y 10 g de huevo. Acabado: 50 g de acitrón rojo, 50 g de acitrón verde, 50 g de higo, tapa de azúcar c/s, 50 g de azúcar y 50 ml de barniz de huevo.',
    process: 'Mezclar los secos, agregar huevo y leche poco a poco. Incorporar mantequilla pomada y trabajar hasta obtener una masa lisa y suave. Fermentar, formar según demostración y fermentar nuevamente.',
    finish: 'Decorar y hornear a 180 °C durante aproximadamente 20 minutos. El formado se remite a la demostración.',
    unknown: 'La fuente no desarrolla por escrito el formado ni la secuencia detallada de decoración.',
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

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y compara</h2>
          <p className="mt-2 leading-7 text-stone-600">Sin mirar las recetas, intenta reconstruir para cada producto cuatro elementos: fórmula distintiva, fermentación o mezcla, formado y acabado. Después comprueba tus respuestas con la fuente.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica con evidencia de la receta</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué diferencia de proceso puedes demostrar entre Conchas y Pan de pulque?</p>
            <p>2. ¿Qué diferencia de acabado puedes demostrar entre Conchas y Garibaldis?</p>
            <p>3. ¿Qué afirmación sobre los tres productos necesitaría una fuente histórica adicional?</p>
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
