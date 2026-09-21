import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyFourPage() {
  return (
    <CourseShell
      eyebrow="Lección 34"
      title="Fougasse y panes saborizados"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cerrar el módulo sin rellenar los huecos</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La ruta propone fougasse y panes saborizados, pero la fuente no contiene una receta de fougasse.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La búsqueda del repositorio no encuentra contenido específico de fougasse. Sí aparecen preparaciones
            donde se incorporan ingredientes que aportan sabor o identidad: pan de ajo, pan danés de varios sabores
            y diferentes acabados. Esta lección usa esos ejemplos documentados para cerrar el recorrido sobre formado,
            acabado y adición de ingredientes, sin presentar una técnica de fougasse que la fuente no proporciona.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Un ingrediente añadido puede formar parte de la masa, del formado o del acabado.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            Las recetas disponibles muestran distintas posiciones para los ingredientes adicionales. En el pan de
            ajo, el ajo sofrito se incorpora a la masa después de la mantequilla. En los grissini, ajonjolí, sal
            gruesa y romero aparecen en el acabado. En el pan danés, los rellenos y elementos de acabado aparecen
            después del laminado y durante el formado. La diferencia está documentada en el procedimiento de cada receta.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Tres maneras documentadas de incorporar sabor</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Dentro de la masa</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Pan de ajo</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La receta indica sofreír el ajo picado en aceite de oliva y reservarlo. Después de amasar la masa
                con el agua, incorpora la mantequilla y luego el ajo sofrito. La adición ocurre antes de la fermentación.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Como acabado</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Grissini</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Después de fermentar, refrigerar, extender y cortar la masa, la receta indica pincelar con yema y
                espolvorear ajonjolí, sal gruesa y romero. Aquí los ingredientes de sabor aparecen sobre la pieza ya formada.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Como parte del formado y relleno</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Pan danés</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La receta documenta varias formas: molinos de viento con nuez, garras de oso con mermelada y
                torcidas de coco con crema pastelera, coco y piña. Los ingredientes adicionales aparecen después
                de extender la pasta y forman parte del armado de cada pieza.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El momento de la adición importa dentro de la receta</p>
              <p className="mt-2 leading-7 text-amber-950">
                El ajo se incorpora a la masa; el romero, ajonjolí y sal gruesa se colocan sobre los grissini;
                los rellenos del pan danés aparecen durante el formado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El formado puede convertirse en parte de la identidad del producto</p>
              <p className="mt-2 leading-7 text-stone-700">
                El pan danés no tiene una sola presentación en la fuente: la receta describe molinos de viento,
                garras de oso y torcidas de coco, cada una con una secuencia de formado y relleno.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El acabado puede aportar ingredientes sin cambiar la fórmula base</p>
              <p className="mt-2 leading-7 text-stone-700">
                En los grissini, el ajonjolí, la sal gruesa y el romero se añaden después del corte y antes de la
                última fermentación y el horneado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Fougasse queda como tema pendiente</p>
              <p className="mt-2 leading-7 text-stone-700">
                El nombre aparece en la ruta, pero no hay receta ni procedimiento específico en los archivos consultados.
                No debemos completar ese vacío con una técnica externa y atribuirla al material del curso.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de integración</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Mapa de una adición</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Elige pan de ajo, grissini o una de las variantes del pan danés. Escribe la secuencia completa y marca
            con una etiqueta cada ingrediente que no pertenece a la base de harina, líquido, sal y levadura.
            Después clasifícalo según el lugar donde aparece: dentro de la masa, durante el formado o como acabado.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">Fougasse no está documentada.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La fuente permite estudiar panes con ingredientes y acabados diferenciados, pero no proporciona una
            fórmula, un formado, un greñado ni un horneado específico de fougasse. El título de la lección pertenece
            a la ruta pedagógica del módulo; los ejemplos desarrollados proceden de recetas que sí están documentadas.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Reconstruye la secuencia de una pieza saborizada desde el mezclado hasta el horneado. Identifica dónde intervienen fermentación, ponchado y formado.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué secuencia documenta la receta de fougasse?</p>
            <p>2. ¿Qué ocurre entre fermentación y horneado?</p>
            <p>3. ¿Qué ingredientes o acabados convierten las piezas estudiadas en panes saborizados según la fuente?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Cierre del Módulo 4</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El proceso de panificación tiene una secuencia:</strong> pesar, mezclar, amasar, fermentar,
              ponchar, porcionar, formar, fermentar, terminar, hornear y enfriar.
            </p>
            <p className="leading-7">
              <strong>Las recetas muestran variaciones:</strong> cambian las cantidades, los ingredientes, el manejo,
              el formado, la refrigeración y los acabados.
            </p>
            <p className="leading-7">
              <strong>Los ingredientes adicionales pueden ocupar lugares distintos:</strong> pueden incorporarse a
              la masa, utilizarse en el formado o aparecer como acabado.
            </p>
            <p className="leading-7">
              <strong>La fuente también tiene límites:</strong> baguette, focaccia, ciabatta, brioche, bagels, pita
              y fougasse aparecen como temas de la ruta, pero no todos cuentan con recetas o explicaciones específicas
              en el material disponible.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Los ejemplos de pan de ajo, grissini y pan danés proceden de data/recetas.js. La secuencia general de
            panificación procede de data/curso.js. La organización integradora de esta lección sigue la ruta del
            Módulo 4 y es organización pedagógica del curso. La búsqueda del repositorio no encontró contenido
            específico de fougasse.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Módulo completado</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Fermentación y panadería</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Has recorrido el proceso de una masa fermentada, sus etapas, diferentes formas de enriquecimiento y
            varias maneras de incorporar ingredientes y acabados. Cuando la fuente no documenta un producto concreto,
            la ruta lo deja identificado como pendiente en lugar de rellenarlo con información no respaldada.
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
