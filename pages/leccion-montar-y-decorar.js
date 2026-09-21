import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyTwoPage() {
  return (
    <CourseShell
      eyebrow="Lección 22"
      title="La consistencia también construye el acabado"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Ya tienes la pieza y el relleno
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Ahora importa cómo se comporta lo que vas a poner encima.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En las clases anteriores viste que una preparación puede adquirir estructura durante la cocción y
            que una pieza de choux puede recibir distintos rellenos. La siguiente decisión es el acabado:
            cubrir, rellenar o decorar requiere que la preparación tenga una consistencia adecuada para el uso
            que le vas a dar.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">
            La herramienta no decide por sí sola el resultado.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La Clase 6 trabaja la decoración con manga y duya, pero antes de aplicar la crema indica montar
            hasta el punto deseado y, cuando sea necesario, diluirla o acondicionarla. La herramienta permite
            aplicar la preparación; la consistencia de esa preparación determina cómo puede trabajarse.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · Montar</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Llegar al punto adecuado</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La Clase 6 indica montar la crema hasta el punto deseado antes de colorearla y aplicarla.
              El punto de la preparación forma parte del proceso de decoración.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">2 · Acondicionar</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Modificar cuando hace falta</h3>
            <p className="mt-3 leading-7 text-amber-950">
              La misma fuente indica diluir y acondicionar la crema cuando sea necesario. No se trata de
              conseguir una consistencia única para todo: se ajusta según la aplicación.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · Aplicar</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">La manga transmite esa consistencia</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La manga y la duya permiten aplicar la crema, pero lo que sale de ellas depende de la preparación
              que contienen. Por eso la técnica empieza antes de apretar la manga.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">No todas las preparaciones se comportan igual</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La Clase 11 presenta varias preparaciones para rellenar o cubrir choux: crema pastelera, crema
            batida, ganache y un glaseado de café. Cada una tiene un procedimiento distinto y llega a una
            consistencia distinta antes de utilizarse.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">Crema batida</p>
              <p className="mt-2 leading-7 text-amber-950">
                La fuente indica batir la crema natural junto con la vegetal hasta obtener picos firmes.
                Esa es la consistencia que la preparación tiene antes de utilizarse como relleno.
              </p>
            </article>

            <article className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">Ganache</p>
              <p className="mt-2 leading-7 text-stone-700">
                La crema, la leche y la glucosa se llevan al hervor y se incorporan al chocolate.
                La fuente indica mezclar hasta obtener una preparación homogénea y utilizarla para cubrir los choux.
              </p>
            </article>

            <article className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">Glaseado</p>
              <p className="mt-2 leading-7 text-stone-700">
                En el glaseado de café, el fondant se ajusta con almíbar hasta quedar pastoso y con la
                consistencia deseada, y después se incorpora el café.
              </p>
            </article>

            <article className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">Crema pastelera</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente la cocina hasta que rompe el hervor durante dos minutos, después la enfría y la
                utiliza como preparación de relleno. También la divide para obtener variantes de vainilla,
                chocolate y café.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. Antes de usar la manga</p>
              <p className="mt-2 leading-7 text-amber-950">
                Mira la crema que vas a colocar dentro de la manga. Observa si mantiene su forma, si fluye
                con facilidad o si necesita acondicionarse. La razón para observarla es relacionar su estado
                con la forma en que podrá aplicarse.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Lo que ocurre al salir de la duya</p>
              <p className="mt-2 leading-7 text-stone-700">
                Haz una pequeña aplicación sobre una superficie de práctica y observa si la preparación
                conserva la forma que acabas de producir. La Clase 6 plantea precisamente la aplicación
                repetida sobre una base de práctica y el acondicionamiento de la crema cuando sea necesario.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El acabado de la pieza</p>
              <p className="mt-2 leading-7 text-stone-700">
                Compara una pieza que solo está rellena con otra que además tiene cobertura o decoración.
                La fuente muestra esta progresión en los choux: después del relleno puede añadirse azúcar
                glass o un glaseado; también presenta ganache como cobertura.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Un acabado puede ser parte del montaje</p>
              <p className="mt-2 leading-7 text-stone-700">
                En la Selva Negra, la fuente utiliza manga para aplicar el relleno, cubre el pastel con crema,
                forma nueve copos con una duya y termina con cerezas y chocolate. Observa que el acabado no
                aparece separado del montaje: se construye sobre las capas que ya forman el pastel.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Una herramienta, varias funciones</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">
            La manga no sirve solamente para decorar
          </h2>
          <p className="mt-3 leading-7 text-amber-950">
            En las recetas de la fuente aparece aplicando rellenos y también formando elementos visibles del
            acabado. La diferencia está en qué preparación contiene, qué consistencia tiene y qué resultado
            se busca obtener.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ['Rellenar', 'Introducir o colocar una preparación dentro de una pieza.'],
              ['Cubrir', 'Aplicar una preparación sobre una superficie para formar una cobertura.'],
              ['Decorar', 'Aplicar una preparación para construir una forma visible en el acabado.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-white p-4">
                <h3 className="font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Acondicionar y aplicar una crema</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Trabaja con la crema de la práctica que estés preparando. Antes de llenar la manga, observa su
            consistencia. Haz una primera aplicación, comprueba cómo se comporta y acondiciónala si es necesario.
            Después repite la aplicación y compara el resultado.
          </p>
          <a
            href="/receta-pasta-choux"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Volver a la práctica de choux →
          </a>
        </section>

        
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica y reconstruye</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. 1. ¿Por qué la consistencia de una preparación importa para decidir cómo utilizarla?</p>
            <p>2. 2. ¿Qué diferencias debes observar entre una preparación destinada a rellenar, cubrir o decorar?</p>
            <p>3. 3. Da un ejemplo documentado en la lección y explica qué uso corresponde a su consistencia.</p>
          </div>
        </section>
<section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>La consistencia es parte de la técnica:</strong> la Clase 6 indica montar la crema hasta
              el punto deseado y acondicionarla cuando sea necesario.
            </p>
            <p className="leading-7">
              <strong>La manga no corrige una preparación inadecuada:</strong> la herramienta aplica la
              preparación que colocas dentro de ella.
            </p>
            <p className="leading-7">
              <strong>Relleno, cobertura y decoración son aplicaciones diferentes:</strong> la fuente utiliza
              preparaciones distintas para cumplir esas funciones.
            </p>
            <p className="leading-7">
              <strong>El acabado forma parte del montaje:</strong> en productos como la Selva Negra, las capas,
              el relleno, la cobertura y la decoración se construyen como una misma secuencia.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La Clase 6 aporta el procedimiento de montaje, coloración, aplicación y acondicionamiento de la crema.
            La Clase 11 aporta las preparaciones de rellenos y coberturas de choux. La Selva Negra de la Clase 10
            aporta un ejemplo de montaje con manga y duya. La organización de esta información como una lección
            sobre consistencia y aplicación es desarrollo pedagógico del curso.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
