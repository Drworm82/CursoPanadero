import CourseShell from '../components/course/CourseShell';

export default function LessonElevenPage() {
  return (
    <CourseShell eyebrow="Lección 11" title="Lo que cambia cuando cambia el objetivo" backHref="/modulo-2" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cierre del módulo</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">La misma harina puede terminar en masas con objetivos opuestos</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En el módulo anterior trabajaste masas batidas pesadas. Ahora trabajaste masas friables.
            La diferencia importante no es memorizar dos recetas: es reconocer <strong>qué estructura busca cada preparación</strong> y qué decisiones ayudan a conseguirla.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <div className="border-b border-stone-200 px-6 py-4">
            <h2 className="text-2xl font-semibold text-stone-900">Dos objetivos distintos</h2>
          </div>
          <div className="grid md:grid-cols-2">
            <article className="border-b border-stone-200 p-6 md:border-b-0 md:border-r">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-amber-700">Masas batidas pesadas</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Construir una masa con aire y estructura</h3>
              <p className="mt-3 leading-7 text-stone-700">
                En las preparaciones del primer módulo aparecieron métodos como el acremado y el uso de aceite.
                La mezcla incorpora aire o humedad según el método y después la harina se integra sin trabajarla de más.
              </p>
            </article>
            <article className="p-6">
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-amber-700">Masas friables</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Mantener el gluten lo más aislado posible</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La fuente explica que, en una masa friable, el objetivo es mantener aisladas las moléculas de gluten.
                Para ello se emplean métodos como el <strong>sablage</strong> y el <strong>cremage</strong>, y el reposo en frío ayuda a solidificar la grasa y relajar el gluten.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">¿Qué debes observar?</p>
          <h2 className="mt-2 text-2xl font-semibold">La señal que te dice qué objetivo tiene la masa</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>Si estás haciendo una masa batida:</strong> identifica qué método estás usando para incorporar aire o humedad y reconoce el momento en que la harina deja de necesitar trabajo.
            </p>
            <p className="leading-7">
              <strong>Si estás haciendo una masa friable:</strong> busca una manipulación controlada y evita desarrollar una red de gluten innecesaria.
            </p>
            <p className="leading-7">
              <strong>Si la masa necesita frío:</strong> entiende que no es una pausa arbitraria; en la explicación de la fuente, el frío solidifica la grasa y relaja el gluten.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Sablage y cremage no son nombres para memorizar</h2>
          <p className="mt-4 leading-7 text-stone-700">
            Son dos maneras de trabajar una masa friable. La idea que debes conservar es qué problema resuelven:
            limitar el contacto efectivo de la harina con el agua y evitar que el gluten se desarrolle como lo haría en una masa de pan.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">Sablage</p>
              <p className="mt-2 leading-7 text-amber-950">
                La grasa se trabaja con los ingredientes secos para recubrir la harina antes de hidratar la masa.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">Cremage</p>
              <p className="mt-2 leading-7 text-stone-700">
                La grasa se trabaja primero mediante un método de acremado y después se incorporan los demás ingredientes.
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-stone-500">
            La fuente identifica ambos métodos como métodos para masas friables; la explicación de cómo cada uno reduce el desarrollo del gluten es una explicación culinaria del mecanismo.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">El recorrido que acabas de hacer</p>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-amber-950">
            {['Masa friable', 'Sablée / sucrée', 'Base de tarta', 'Impermeabilización', 'Crema pastelera', 'Crema de limón', 'Merengue suizo'].map((item, index, items) => (
              <span key={item} className="contents">
                <span className="rounded-full bg-white px-3 py-2 text-sm font-medium">{item}</span>
                {index < items.length - 1 && <span aria-hidden="true">→</span>}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>Primero decides el objetivo:</strong> no todas las masas buscan la misma estructura.</p>
            <p className="leading-7"><strong>Después eliges el método:</strong> la forma de mezclar, hidratar, manipular y enfriar la masa responde a ese objetivo.</p>
            <p className="leading-7"><strong>En una masa friable:</strong> la grasa y el método de trabajo ayudan a mantener el gluten aislado; el frío solidifica la grasa y relaja el gluten.</p>
            <p className="leading-7"><strong>La receta deja de ser una lista:</strong> si puedes identificar qué está intentando conseguir la masa, puedes interpretar mejor lo que estás viendo durante el proceso.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
