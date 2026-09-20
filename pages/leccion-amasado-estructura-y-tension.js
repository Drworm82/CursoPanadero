import CourseShell from '../components/course/CourseShell';

export default function LessonTwentySevenPage() {
  return (
    <CourseShell
      eyebrow="Lección 27"
      title="Amasado, estructura y tensión"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">El punto que pide la masa</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Amasar no es solamente mover la masa: hay una condición que debes reconocer.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La fuente describe el amasado como una etapa en la que se agrega la levadura y se incorpora más
            líquido hasta obtener una masa <strong>suave, lisa y elástica</strong>. Esta lección se concentra
            en reconocer esa condición y en ubicarla dentro del proceso completo.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">El resultado del amasado se lee en la masa.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La secuencia general coloca el amasado después del premezclado y la autolisis. En ese momento se
            agrega la levadura y se continúa incorporando líquido hasta llegar a la condición que la fuente
            describe: una masa suave, lisa y elástica. Después vienen la primera fermentación, el ponchado,
            el porcionado y el formado.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Dónde ocurre el amasado</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
            <div className="grid grid-cols-3 bg-stone-100 text-sm font-semibold text-stone-700">
              <div className="p-4">Antes</div>
              <div className="p-4">Durante</div>
              <div className="p-4">Después</div>
            </div>
            <div className="grid grid-cols-3 border-t border-stone-200 text-sm text-stone-700">
              <div className="p-4">Premezclado con los secos y autolisis.</div>
              <div className="p-4">Se agrega la levadura y se adiciona más líquido durante el amasado.</div>
              <div className="p-4">La masa pasa a primera fermentación, cubierta y en un lugar tibio.</div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-stone-500">
            La tabla organiza la secuencia descrita por la fuente. No añade una explicación externa sobre el
            mecanismo físico de la estructura de la masa.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">1. Suave</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Una condición de textura</h3>
            <p className="mt-3 leading-7 text-amber-950">
              La fuente utiliza “suave” como una de las tres características que debe alcanzar la masa durante el amasado.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">2. Lisa</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Una condición de superficie</h3>
            <p className="mt-3 leading-7 text-stone-700">
              “Lisa” forma parte de la misma descripción del punto buscado. No se presenta en la fuente como un concepto separado.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3. Elástica</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Una condición de comportamiento</h3>
            <p className="mt-3 leading-7 text-stone-700">
              “Elástica” completa la descripción. Las tres palabras deben leerse juntas: suave, lisa y elástica.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. La secuencia de incorporación</p>
              <p className="mt-2 leading-7 text-amber-950">
                La fuente coloca la levadura en el momento del amasado y señala que se adiciona más líquido
                hasta alcanzar la condición buscada.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Las tres palabras del punto</p>
              <p className="mt-2 leading-7 text-stone-700">
                Antes de avanzar, comprueba que puedes identificar qué describe la fuente cuando dice
                “suave, lisa y elástica”. No sustituyas esas palabras por un tiempo fijo de amasado que la fuente no proporciona.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Lo que ocurre después</p>
              <p className="mt-2 leading-7 text-stone-700">
                El amasado no termina el proceso. Una vez alcanzada la condición indicada, la masa pasa a la
                primera fermentación y continúa por el resto de la secuencia.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de observación</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Describe la masa sin inventar un tiempo</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Al trabajar una masa de pan de las recetas del curso, anota qué observas durante el amasado.
            Tu registro debe responder a tres preguntas: ¿la masa se siente suave?, ¿su superficie se ve lisa?,
            ¿presenta la elasticidad que describe la fuente? Después escribe qué etapa sigue en el proceso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">El mismo principio aparece en las recetas</h2>
          <p className="mt-4 leading-7 text-stone-700">
            Las recetas del archivo de datos muestran distintas formas de llegar al trabajo de la masa.
            En el <strong>Pan de Ajo Esponjoso</strong>, por ejemplo, se mezclan los ingredientes secos con el
            agua y se amasa hasta obtener una masa suave y homogénea; después se incorpora la mantequilla y
            el ajo y se continúa amasando hasta integrar. En los <strong>Grissini</strong>, la indicación es
            amasar hasta obtener una masa lisa y homogénea. En las <strong>Conchas</strong>, se añade el agua
            poco a poco hasta obtener una masa suave y lisa.
          </p>
          <p className="mt-4 text-sm leading-6 text-stone-500">
            Estos ejemplos proceden de recetas concretas. Sus ingredientes, cantidades y pasos no sustituyen
            la secuencia general de la fuente.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Lo que todavía no estamos explicando</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">No añadimos una teoría que la fuente no desarrolla.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            El material disponible indica qué se incorpora durante el amasado y qué condición debe alcanzar la masa,
            pero no desarrolla aquí una explicación detallada de cómo se forma la estructura, cómo se organiza el gluten
            ni cómo medir el desarrollo de la masa mediante pruebas específicas. Esos conceptos no se presentan como
            contenido de esta lección.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El amasado tiene un lugar preciso:</strong> ocurre después del premezclado y la autolisis, y antes de la primera fermentación.
            </p>
            <p className="leading-7">
              <strong>La levadura entra en esta etapa:</strong> la secuencia general indica agregarla al comenzar el amasado.
            </p>
            <p className="leading-7">
              <strong>El punto se describe con tres palabras:</strong> la masa debe quedar suave, lisa y elástica.
            </p>
            <p className="leading-7">
              <strong>No hay un tiempo general de amasado en la secuencia:</strong> la fuente describe una condición de la masa, mientras que algunas recetas concretas añaden sus propios tiempos o procedimientos.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            El núcleo de esta lección procede de «Proceso para elaborar una masa» en data/curso.js:
            después de la autolisis se agrega la levadura y se comienza el amasado, adicionando más líquido
            hasta obtener una masa suave, lisa y elástica. Los ejemplos de Pan de Ajo, Grissini y Conchas
            proceden de data/recetas.js. La organización en observaciones, práctica y límites de contenido
            es organización pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Baguette: estructura, formado y greñado</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            El siguiente paso será observar cómo el trabajo de la masa continúa en el formado de una pieza
            y cómo aparece el greñado en el proceso.
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
