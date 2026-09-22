import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyThreePage() {
  return (
    <CourseShell
      eyebrow="Lección 33"
      title="Bagels y pita: el formato cambia el proceso"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Dos productos sí documentados en la Clase 27</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Bagels y Pan Pita tienen fórmulas y procedimientos en la fuente.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La Clase 27 documenta ambos productos. Esta lección los compara a partir de sus ingredientes y secuencias,
            conservando los detalles que la fuente proporciona y sin completar con técnicas externas aquello que el texto remite a demostración.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">La forma modifica la secuencia documentada: el bagel incorpora un pochado antes del horneado, mientras el Pan Pita se extiende y se hornea sobre charolas calientes.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La Clase 27 asigna procedimientos concretos a ambos productos. El bagel se porciona en bollos de 80 g, se forma,
            se pochea en agua hirviendo durante 15 segundos, se barniza, se termina y se hornea a 200 °C por 20 minutos.
            El Pan Pita se porciona en 50 g, se extiende a ½ cm, fermenta y se hornea a 220 °C sobre charolas calientes,
            sin dejar que tome color.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Datos de las dos preparaciones</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><p className="font-semibold text-amber-900">Bagels</p><p className="mt-2 leading-7 text-amber-950">1 kg de harina, 25 g de sal, 30 g de levadura, 500 g de agua, 14 g de azúcar, 80 g de mantequilla y 80 ml de claras. La cobertura lleva ajonjolí, cebolla, ajo, parmesano y melasa para el agua de pochado.</p></article>
            <article className="rounded-2xl border border-stone-200 bg-white p-6"><p className="font-semibold text-stone-900">Pan Pita</p><p className="mt-2 leading-7 text-stone-700">500 g de harina, 300 g de agua, 20 g de aceite de oliva, 8 g de sal, 15 g de levadura y 100 g de sémola para extender.</p></article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Lo que sí podemos conservar del proceso general</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Antes del formado</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Fermentación y ponchado</h3>
              <p className="mt-3 leading-7 text-amber-950">
                El proceso general del curso indica una primera fermentación y después el desgasificado o ponchado
                antes del porcionado y formado.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Durante el formado</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">La pieza deja de ser solo una masa</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La fuente coloca el formado antes de la segunda fermentación. Esa secuencia permite estudiar el
                formato como parte del proceso, pero no especifica cómo formar un bagel o una pita.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Después del formado</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Segunda fermentación y horneado</h3>
              <p className="mt-3 leading-7 text-amber-950">
                El proceso general continúa con una segunda fermentación, terminado y acabados, horneado y enfriado.
                La fuente no indica si bagels o pita siguen exactamente esta secuencia ni qué modificaciones tendrían.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El bagel tiene una operación que el pita no presenta</p>
              <p className="mt-2 leading-7 text-amber-950">
                La receta de Bagels indica pochearlos en agua hirviendo durante 15 segundos antes del horneado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El formato cambia</p>
              <p className="mt-2 leading-7 text-stone-700">
                El bagel se forma antes del pochado; el pita se extiende redondo a ½ cm después de porcionar y reposar los bollos.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. La cocción también cambia</p>
              <p className="mt-2 leading-7 text-stone-700">
                El bagel se pochea y después se hornea; el pita se coloca sobre charolas calientes y se hornea sin dejar que tome color.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de lectura de fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Distingue dato, pregunta y ausencia</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Haz una tabla con dos columnas, Bagels y Pan Pita. Para cada uno registra fórmula, porcionado, formado, fermentación,
            cocción y acabado. Después señala la operación que distingue más claramente cada secuencia.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">La Clase 27 documenta ambos productos.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La fuente proporciona las fórmulas y procedimientos de ambos productos. El texto remite el formado de los Bagels
            al procedimiento de clase y no desarrolla una explicación teórica adicional sobre por qué el pochado produce
            el resultado final; esta lección conserva esos límites sin añadirlos.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Compara las dos secuencias y reconstruye sus etapas en paralelo. Marca qué comparten y en qué momento divergen.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué etapas de fermentación aparecen en cada preparación?</p>
            <p>2. ¿Cómo cambia el formado entre las dos piezas?</p>
            <p>3. ¿Qué información específica sobre el proceso de bagel o pita sí está documentada y cuál no?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El proceso general sí está disponible:</strong> la fuente describe fermentación, ponchado,
              porcionado, formado, segunda fermentación, horneado y enfriado.
            </p>
            <p className="leading-7">
              <strong>Los productos específicos sí están documentados:</strong> la Clase 27 contiene recetas de Bagels y Pan Pita.
            </p>
            <p className="leading-7">
              <strong>La comparación puede hacerse con la fuente:</strong> ambos productos tienen fórmulas y secuencias documentadas, y difieren en operaciones como el pochado del bagel y la cocción del pita sobre charolas calientes.
            </p>
            <p className="leading-7">
              <strong>La ausencia también es información:</strong> saber qué no está en la fuente evita convertir
              conocimiento externo en contenido atribuido al curso.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Las recetas de Bagels y Pan Pita proceden de la Clase 27 del PDF. La secuencia general de panificación y la organización comparativa de esta lección sirven como estructura pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Fougasse y panes saborizados</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección deberá comprobar primero qué productos, ingredientes y técnicas aparecen realmente
            en la fuente antes de desarrollar el tema.
          </p>
          <a
            href="/modulo-4"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Volver al Módulo 4 →
          </a>
        </section>
      </div>
    </CourseShell>
  );
}
