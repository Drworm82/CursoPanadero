import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyOnePage() {
  return (
    <CourseShell
      eyebrow="Lección 31"
      title="Panes enriquecidos"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cuando la masa incorpora más ingredientes</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Las recetas del curso muestran masas de pan con azúcar, huevo y grasa.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            El material disponible no ofrece una definición formal de “pan enriquecido”. Sin embargo, varias
            recetas de pan incorporan ingredientes que no aparecen en una masa básica: azúcar, huevo, mantequilla,
            aceite o leche. Podemos estudiar esa diferencia directamente a partir de las recetas, sin atribuirles
            una teoría que la fuente no desarrolla.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Enriquecer una masa cambia su lista de ingredientes y su manejo.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            Las recetas permiten observar diferentes combinaciones. Las conchas llevan azúcar, huevo y mantequilla;
            el pan de ajo lleva azúcar, mantequilla y aceite; el pan danés incorpora azúcar, huevo, mantequilla y un
            empaste con margarina; y el pan de pulque contiene huevo, azúcar y una cantidad importante de mantequilla.
            La comparación parte de esos datos concretos.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Cuatro recetas para comparar</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Conchas</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Azúcar + huevo + mantequilla</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La receta utiliza 550 g de harina, 130 g de azúcar, 200 g de huevo y 80 g de mantequilla.
                Añade agua poco a poco hasta obtener una masa suave y lisa; después fermenta, poncha, porciona y
                vuelve a fermentar.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Pan de ajo</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Azúcar + mantequilla + aceite</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Con 500 g de harina, la receta contiene 70 g de azúcar, 50 g de mantequilla y 20 ml de aceite de
                oliva. La masa se amasa hasta quedar suave y homogénea, fermenta hasta duplicar su volumen, se
                poncha, se forma y vuelve a fermentar.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Pan danés</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Huevo + mantequilla + empaste</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La masa contiene leche, azúcar, huevo y mantequilla. Además, la receta incorpora 225 g de margarina
                para el empaste. Después de fermentar y ponchar, la masa se extiende, se refrigera y se trabaja con
                vueltas antes del formado.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Pan de pulque</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Huevo + azúcar + mantequilla</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La receta utiliza 7 huevos, 250 g de azúcar moscabado, 500 g de harina y 300 g de mantequilla,
                además de 150 ml de pulque y 15 g de levadura fresca. La mezcla fermenta hasta duplicar su tamaño
                antes del horneado.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. La composición cambia de una receta a otra</p>
              <p className="mt-2 leading-7 text-amber-950">
                No todas las masas incorporan los mismos ingredientes. La comparación permite identificar qué añade cada receta.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El manejo también cambia</p>
              <p className="mt-2 leading-7 text-stone-700">
                El pan de ajo se amasa y fermenta; las conchas se porcionan y fermentan nuevamente; el pan danés
                incorpora refrigeración, empaste y vueltas; el pan de pulque se trabaja como una mezcla que después
                fermenta hasta duplicar su tamaño.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. La fuente describe estados concretos de la masa</p>
              <p className="mt-2 leading-7 text-stone-700">
                En las recetas aparecen expresiones como “suave y lisa”, “suave y homogénea” y “hasta que duplique
                su volumen”. Esas observaciones forman parte del procedimiento documentado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. No confundas la receta con una teoría general</p>
              <p className="mt-2 leading-7 text-stone-700">
                El material permite comparar ingredientes y procesos, pero no explica de manera general cómo cada
                ingrediente modifica la fermentación, la estructura o la conservación del pan.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de comparación</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Construye el perfil de cada masa</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Haz cuatro filas: conchas, pan de ajo, pan danés y pan de pulque. En columnas separadas registra
            harina, azúcar, huevo, mantequilla u otra grasa, líquido adicional y los pasos de fermentación.
            Después señala qué ingredientes aparecen en más de una receta y cuáles son exclusivos de una.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">“Pan enriquecido” no está definido como categoría técnica.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La lección usa el término del programa como una organización pedagógica y observa las recetas que
            contienen grasa, azúcar y huevo. La fuente no proporciona una definición formal de enriquecimiento,
            ni explica cuáles ingredientes son necesarios para clasificar una masa de esa manera.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Compara dos masas enriquecidas del módulo y subraya los ingredientes que modifican respecto de una masa básica. Después identifica qué cambia en el manejo documentado.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué ingredientes enriquecen las recetas comparadas?</p>
            <p>2. ¿Qué diferencias de manejo aparecen en las secuencias?</p>
            <p>3. ¿Qué puedes afirmar a partir de las recetas y qué requeriría información adicional de la fuente?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>Las recetas muestran enriquecimiento en la práctica:</strong> aparecen azúcar, huevo,
              mantequilla, aceite, leche y otros ingredientes además de harina, sal y levadura.
            </p>
            <p className="leading-7">
              <strong>La composición y el proceso están relacionados en la receta:</strong> cada preparación tiene
              su propia secuencia de amasado, fermentación, formado o laminado.
            </p>
            <p className="leading-7">
              <strong>La fuente permite comparar:</strong> conchas, pan de ajo, pan danés y pan de pulque muestran
              combinaciones diferentes.
            </p>
            <p className="leading-7">
              <strong>La teoría general queda pendiente:</strong> el material no explica todavía el efecto técnico
              de cada ingrediente sobre la masa.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Los datos proceden de las recetas de conchas, pan de ajo, pan danés y pan de pulque en data/recetas.js.
            El proceso general de panificación procede de data/curso.js. La categoría y la organización comparativa
            de esta lección siguen la ruta del Módulo 4 y son organización pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Brioche: grasa, azúcar y fermentación</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección puede profundizar en la comparación de masas enriquecidas, aunque será necesario
            verificar primero si existe contenido específico de brioche en el material.
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
