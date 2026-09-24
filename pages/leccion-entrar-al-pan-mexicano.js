import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

function LessonThirtyFiveES() {
  return (
    <CourseShell eyebrow={lesson.eyebrow} title={lesson.title} backHref={lesson.backHref} backLabel="Volver al Módulo 5">
      <div className="space-y-8">
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y compara</h2>
          <p className="mt-2 leading-7 text-stone-600">Haz una primera tabla con tres filas: Conchas, Pan de pulque y Garibaldis. Sin consultar explicaciones externas, registra qué ocurre antes del horno, durante el horneado y después.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica con evidencia de la receta</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué tienen en común las tres preparaciones según sus recetas?</p>
            <p>2. ¿En qué momento aparece el elemento que distingue visualmente a cada producto?</p>
            <p>3. ¿Qué información cultural no debe darse por sentada si no aparece en la fuente?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La pregunta de esta lección</p>
          <h2 className="mt-2 text-2xl font-semibold">¿Qué podemos aprender de un producto tradicional cuando observamos su fórmula y su proceso?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            Antes de estudiar piezas concretas, conviene reconocer qué información tenemos realmente.
            La fuente documenta tres productos que nos permiten entrar al tema desde la práctica:
            <strong> Conchas Tradicionales Mexicanas</strong>, <strong>Pan de Pulque con Sabor Tradicional</strong>
            y <strong>Garibaldis</strong>.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">01 · Conchas</p>
            <h2 className="mt-2 text-xl font-semibold text-amber-950">Masa + cobertura</h2>
            <p className="mt-3 leading-7 text-amber-950">
              La receta separa la masa fermentada de la pasta para la tapa. La pieza se porciona, vuelve a fermentar,
              se cubre, se marca y se hornea.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">02 · Pan de pulque</p>
            <h2 className="mt-2 text-xl font-semibold text-stone-900">Una fórmula particular</h2>
            <p className="mt-3 leading-7 text-stone-700">
              La receta combina huevo, pulque, azúcar moscabado, harina, mantequilla y levadura.
              Después de la mezcla, la preparación fermenta hasta duplicar su tamaño.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">03 · Garibaldis</p>
            <h2 className="mt-2 text-xl font-semibold text-stone-900">Acabado después del horno</h2>
            <p className="mt-3 leading-7 text-stone-700">
              La preparación se hornea en capacillos y, una vez fría, recibe mermelada de chabacano y gragea blanca.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Una primera comparación</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">No todos los productos construyen su identidad de la misma manera.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Conchas</p>
              <p className="mt-2 leading-7 text-stone-700">
                La diferencia visible está en la pasta que cubre la pieza y en el marcado de esa cobertura.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Pan de pulque</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fórmula incorpora pulque y una cantidad importante de mantequilla, y la preparación fermenta antes del horneado.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Garibaldis</p>
              <p className="mt-2 leading-7 text-stone-700">
                El acabado aparece después del enfriado: mermelada y gragea completan la pieza.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">¿Qué debes observar?</p>
          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold text-amber-950">La secuencia</h3>
              <p className="mt-2 leading-7 text-amber-950">
                Pregunta siempre qué ocurre antes y después: mezcla, fermentación, formado, horneado y acabado no aparecen necesariamente
                en el mismo orden ni con la misma importancia en cada producto.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-950">Dónde aparece la diferencia</h3>
              <p className="mt-2 leading-7 text-amber-950">
                En las conchas está en la cobertura y el marcado; en el pan de pulque, en la composición y su secuencia de fermentación;
                en los garibaldis, en el acabado posterior al horneado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-950">Qué no debemos asumir</h3>
              <p className="mt-2 leading-7 text-amber-950">
                El nombre tradicional de una pieza no aporta por sí mismo una explicación histórica. En esta ruta trabajaremos primero
                con lo que la fuente permite observar directamente.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Construye una ficha de observación</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Para cada una de las tres piezas, anota cuatro cosas: qué ingredientes destacan, qué etapas de proceso están documentadas,
            cómo se forma o termina la pieza y qué información todavía no conocemos.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Ingredientes que destacan', 'Etapas documentadas', 'Formado o acabado', 'Información que falta'].map((item, index) => (
              <div key={item} className="rounded-xl bg-stone-50 p-4">
                <span className="text-sm font-medium text-stone-500">{index + 1}</span>
                <p className="mt-1 font-semibold text-stone-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Aquí no estamos estudiando todavía la historia del pan mexicano.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            El material disponible identifica estas recetas y proporciona sus ingredientes y pasos, pero no desarrolla una explicación
            histórica o cultural amplia sobre su origen, región, evolución o significado. Esos aspectos quedan fuera de esta lección.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Ya puedes entrar al módulo con una regla clara.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            Primero observamos el producto que la fuente realmente documenta. Después identificamos qué decisión de masa, fermentación,
            formado o acabado lo distingue. Las siguientes lecciones tomarán cada pieza por separado.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">
            Datos de las recetas <strong>Conchas Tradicionales Mexicanas</strong>, <strong>Pan de Pulque con Sabor Tradicional</strong>
            y <strong>Garibaldis (Pastelitos con Gragea)</strong> contenidos en <code>data/recetas.js</code>.
            La organización pedagógica de la lección es propia de esta ruta.
          </p>
          <a
            href="/modulo-5"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Volver al Módulo 5 →
          </a>
        </section>
      </div>
    </CourseShell>
}

function LessonThirtyFiveEN() {
  return (
    <CourseShell eyebrow={lesson.eyebrow} title={lesson.title} backHref={lesson.backHref} backLabel="Back to Module 5">
      <div className="space-y-8">
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Guided activity</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Do, observe, and compare</h2>
          <p className="mt-2 leading-7 text-stone-600">Make a first table with three rows: Conchas, Pan de pulque, and Garibaldis. Without consulting outside explanations, record what happens before the oven, during baking, and afterward.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Check your learning</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explain with evidence from the recipe</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. 1. What do the three preparations have in common according to their recipes?</p>
            <p>2. 2. At what point does the element that visually distinguishes each product appear?</p>
            <p>3. 3. What cultural information should not be assumed if it does not appear in the source?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">The question of this lesson</p>
          <h2 className="mt-2 text-2xl font-semibold">What can we learn from a traditional product when we observe its formula and process?</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            Before studying specific products, it is useful to recognize what information we actually have.
            The source documents three products that let us approach the topic through practice:
            <strong> Traditional Mexican Conchas</strong>, <strong>Traditional-flavored Pulque Bread</strong>
            y <strong>Garibaldis</strong>.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">01 · Conchas</p>
            <h2 className="mt-2 text-xl font-semibold text-amber-950">Dough + topping</h2>
            <p className="mt-3 leading-7 text-amber-950">
              La receta separa la masa fermentada de la pasta para la tapa. La pieza se porciona, vuelve a fermentar,
              se cubre, se marca y se hornea.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">02 · Pulque bread</p>
            <h2 className="mt-2 text-xl font-semibold text-stone-900">A particular formula</h2>
            <p className="mt-3 leading-7 text-stone-700">
              La receta combina huevo, pulque, azúcar moscabado, harina, mantequilla y levadura.
              Después de la mezcla, la preparación fermenta hasta duplicar su tamaño.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">03 · Garibaldis</p>
            <h2 className="mt-2 text-xl font-semibold text-stone-900">Finish after baking</h2>
            <p className="mt-3 leading-7 text-stone-700">
              The preparation is baked in paper liners and, once cool, receives apricot jam and white sprinkles.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">A first comparison</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Not all products build their identity in the same way.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Conchas</p>
              <p className="mt-2 leading-7 text-stone-700">
                The visible difference lies in the paste covering the piece and in the marking of that topping.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Pan de pulque</p>
              <p className="mt-2 leading-7 text-stone-700">
                The formula incorporates pulque and a significant amount of butter, and the preparation ferments before baking.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Garibaldis</p>
              <p className="mt-2 leading-7 text-stone-700">
                The finish appears after cooling: jam and sprinkles complete the piece.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">What should you observe?</p>
          <div className="mt-5 space-y-5">
            <div>
              <h3 className="font-semibold text-amber-950">The sequence</h3>
              <p className="mt-2 leading-7 text-amber-950">
                Pregunta siempre qué ocurre antes y después: mezcla, fermentación, formado, horneado y acabado no aparecen necesariamente
                en el mismo orden ni con la misma importancia en cada producto.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-950">Where the difference appears</h3>
              <p className="mt-2 leading-7 text-amber-950">
                En las conchas está en la cobertura y el marcado; en el pan de pulque, en la composición y su secuencia de fermentación;
                en los garibaldis, en el acabado posterior al horneado.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-amber-950">What we should not assume</h3>
              <p className="mt-2 leading-7 text-amber-950">
                El nombre tradicional de una pieza no aporta por sí mismo una explicación histórica. En esta ruta trabajaremos primero
                con lo que la fuente permite observar directamente.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Practice</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Build an observation sheet</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Para cada una de las tres piezas, anota cuatro cosas: qué ingredientes destacan, qué etapas de proceso están documentadas,
            cómo se forma o termina la pieza y qué información todavía no conocemos.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {['Notable ingredients', 'Documented stages', 'Shaping or finish', 'Missing information'].map((item, index) => (
              <div key={item} className="rounded-xl bg-stone-50 p-4">
                <span className="text-sm font-medium text-stone-500">{index + 1}</span>
                <p className="mt-1 font-semibold text-stone-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Source limitation</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">We are not yet studying the history of Mexican bread here.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            El material disponible identifica estas recetas y proporciona sus ingredientes y pasos, pero no desarrolla una explicación
            histórica o cultural amplia sobre su origen, región, evolución o significado. Esos aspectos quedan fuera de esta lección.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">At the end</p>
          <h2 className="mt-2 text-2xl font-semibold">You can now enter the module with a clear rule.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            Primero observamos el producto que la fuente realmente documenta. Después identificamos qué decisión de masa, fermentación,
            formado o acabado lo distingue. Las siguientes lecciones tomarán cada pieza por separado.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Source for this lesson</p>
          <p className="mt-2 leading-7 text-stone-700">
            Data from the recipes <strong>Traditional Mexican Conchas</strong>, <strong>Traditional-flavored Pulque Bread</strong>
            y <strong>Garibaldis (Sprinkle-topped pastries)</strong> contained in <code>data/recetas.js</code>.
            The pedagogical organization of the lesson is part of this course route.
          </p>
          <a
            href="/modulo-5"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Back to Module 5 →
          </a>
        </section>
      </div>
    </CourseShell>
}

export default function LessonThirtyFivePage() {
  const { locale = 'es' } = useRouter();
  return locale === 'en' ? <LessonThirtyFiveEN /> : <LessonThirtyFiveES />;
}
