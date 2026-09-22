import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyNinePage() {
  return (
    <CourseShell
      eyebrow="Lección 29"
      title="Focaccia: otra forma de entender la hidratación"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Una comparación antes de avanzar</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La focaccia sí está documentada en la Clase 25 del material.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La Clase 25 documenta una Focaccia de 1 pieza de 20 × 30 cm. La receta proporciona fórmula, guarnición y
            procedimiento. Esta lección puede estudiar directamente esa preparación y después compararla con otras
            masas del curso.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Una receta también puede leerse como una relación entre cantidades.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            En las recetas de pan del material aparecen cantidades concretas de harina y agua. Compararlas permite
            observar que no todas las masas parten de la misma proporción. La fuente no desarrolla todavía una teoría
            de hidratación; aquí la usamos como una forma de leer y comparar los datos de las recetas.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Focaccia: fórmula y procedimiento documentados</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-semibold text-amber-900">Masa</p><p className="mt-2 leading-7 text-amber-950">1 kg de harina, 700 ml de agua, 30 g de levadura fresca, 10 g de malta, 30 ml de aceite de oliva y 20 g de sal.</p></div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="font-semibold text-stone-900">Guarnición</p><p className="mt-2 leading-7 text-stone-700">80 g de aceite de oliva extra virgen, 20 g de sal de humo o flor de sal, 8 dientes de ajo y romero c/s.</p></div>
          </div>
          <p className="mt-5 leading-7 text-stone-700">La fuente indica pesar los ingredientes, formar una fuente con la harina, incorporar levadura, malta, sal y 30 ml de aceite, agregar el agua poco a poco y trabajar hasta obtener una masa homogénea. Después se deja reposar en aceite de oliva, se da forma según la demostración y se añade la guarnición elegida.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Mira primero los números</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Pan de ajo</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">500 g de harina + 300 g de agua</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La receta declara 500 g de harina y 300 g de agua tibia. Después indica amasar hasta obtener una masa
                suave y homogénea, fermentar hasta duplicar su volumen, ponchar, formar y fermentar de nuevo.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Grissini</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">500 g de harina + 300 g de agua</h3>
              <p className="mt-3 leading-7 text-stone-700">
                También declara 500 g de harina y 300 g de agua, pero añade 50 g de aceite de oliva y leche en polvo.
                Su proceso incluye una fermentación de 20 minutos, refrigeración, extendido, corte y otra fermentación.
              </p>
            </article>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Conchas</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">550 g de harina + 80 a 130 ml de agua</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Aquí la cantidad de agua aparece como un intervalo y la masa también contiene 200 g de huevo y 80 g
                de mantequilla. La receta indica añadir el agua poco a poco hasta obtener una masa suave y lisa.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Croissant</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">500 g de harina + 240 ml de agua</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La receta declara 240 ml de agua, además de mantequilla, azúcar, sal y levadura. Después de la primera
                fermentación, la masa se poncha, se refrigera y pasa al empaste y al formado.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. No todas las recetas usan la misma cantidad de agua</p>
              <p className="mt-2 leading-7 text-amber-950">
                Incluso antes de hablar de técnicas particulares, las listas de ingredientes ya muestran diferencias
                entre masas.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El agua no es el único líquido o fuente de humedad</p>
              <p className="mt-2 leading-7 text-stone-700">
                En las conchas aparecen huevo y agua; en el pan de ajo aparecen agua, mantequilla y aceite; en el
                croissant aparecen agua y mantequilla. Por eso no conviene reducir la lectura de una receta a un solo número.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. La cantidad declarada no sustituye la observación de la masa</p>
              <p className="mt-2 leading-7 text-stone-700">
                Las propias recetas describen estados de la masa: “suave y homogénea”, “lisa y homogénea” o “suave y lisa”.
                Esas descripciones forman parte del proceso documentado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. La guarnición forma parte de la preparación</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente separa los ingredientes de la masa de la guarnición: aceite de oliva extra virgen, sal de humo o flor de sal, ajo y romero. El formado se realiza según la demostración de clase.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de lectura</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Compara antes de interpretar</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Toma pan de ajo, grissini, conchas y croissant. Para cada uno registra harina, agua y otros ingredientes
            que también forman parte de la masa. Después escribe qué cantidades son iguales y cuáles cambian. Como
            segundo paso, anota qué descripción de textura utiliza cada receta antes de fermentar.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">La receta permite observar directamente una masa con 1 kg de harina y 700 ml de agua, pero la fuente no desarrolla aquí una teoría general de hidratación.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La comparación de harina y agua es una herramienta pedagógica de esta lección. La fuente proporciona las cantidades
            de la Focaccia, pero no desarrolla una clasificación general de porcentajes de hidratación.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Compara las cantidades de harina y agua de las preparaciones que aparecen en la lección. Después observa cómo se maneja la masa y qué información concreta proporciona la fuente sobre su formado.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué relación de cantidades puedes observar en la receta?</p>
            <p>2. ¿Qué operaciones aparecen después de formar una masa homogénea?</p>
            <p>3. ¿Qué explicación general sobre hidratación no está desarrollada explícitamente por la fuente?</p>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Compara las cantidades de harina y agua de las preparaciones que aparecen en la lección. Después observa cómo se maneja la masa y qué información concreta proporciona la fuente sobre su formado.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué relación de cantidades puedes observar en la receta?</p>
            <p>2. ¿Qué operaciones aparecen después de formar una masa homogénea?</p>
            <p>3. ¿Qué explicación general sobre hidratación no está desarrollada explícitamente por la fuente?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>Las recetas pueden compararse por cantidades:</strong> harina, agua y otros ingredientes aparecen
              de forma explícita en el material.
            </p>
            <p className="leading-7">
              <strong>La masa también se describe por su estado:</strong> las recetas indican condiciones como suave,
              lisa y homogénea.
            </p>
            <p className="leading-7">
              <strong>La Focaccia sí está documentada:</strong> la Clase 25 proporciona fórmula, guarnición y procedimiento.
            </p>
            <p className="leading-7">
              <strong>La hidratación queda como herramienta de comparación:</strong> la receta proporciona cantidades concretas, pero no desarrolla una teoría general del concepto.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Los datos de comparación proceden de las recetas de pan de ajo, grissini, conchas y croissant en
            data/recetas.js. La ruta general de panificación y sus etapas proceden de data/curso.js. La búsqueda
            del repositorio no encontró contenido específico sobre focaccia ni una definición técnica desarrollada
            de hidratación. La organización comparativa de esta lección es organización pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Ciabatta y biga</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección sí puede apoyarse en un concepto que aparece explícitamente en la fuente:
            la biga como prefermento denso y poco hidratado.
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
