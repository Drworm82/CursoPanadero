import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyThreePage() {
  return (
    <CourseShell
      eyebrow="Lección 23"
      title="Cuando una estructura necesita frío"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            No todas las estructuras se construyen de la misma manera
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Un cheesecake puede adquirir consistencia con calor o con frío.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La Clase 15 presenta dos preparaciones que parten de una mezcla de queso, pero siguen rutas
            diferentes para llegar a un producto que pueda montarse, enfriarse y desmoldarse. En el cheesecake
            de frutos rojos, la mezcla se cocina en baño María. En el cheesecake frío de Baileys, la mousse
            incorpora gelatina y crema semibatida y después se refrigera.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">
            Antes de preguntar cuánto tiempo necesita el frío, identifica qué está construyendo la estructura.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            En una preparación horneada, la Clase 15 indica una cocción en baño María y un tiempo adicional
            descubierto hasta alcanzar la consistencia. En la preparación fría, la fuente indica incorporar
            gelatina, añadir la crema semibatida y refrigerar antes de desmoldar. La comparación entre ambas
            rutas permite leer el proceso desde la estructura que se busca obtener.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-medium text-stone-500">Ruta 1 · Cheesecake horneado</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">El calor lleva la mezcla hasta su consistencia</h3>
            <p className="mt-4 leading-7 text-stone-700">
              La mezcla de queso crema, azúcar, ralladura de limón, huevo, yemas, crema y harina se coloca
              sobre la base y se cocina en baño María.
            </p>
            <div className="mt-5 space-y-3 rounded-2xl bg-stone-100 p-5">
              <p className="leading-7 text-stone-700">
                <strong>Primera etapa:</strong> 40 minutos a 180 °C, cubierta con aluminio.
              </p>
              <p className="leading-7 text-stone-700">
                <strong>Segunda etapa:</strong> se descubre y continúa 15 minutos o hasta alcanzar la consistencia.
              </p>
            </div>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
            <p className="text-sm font-medium text-amber-800">Ruta 2 · Cheesecake frío</p>
            <h3 className="mt-2 text-2xl font-semibold text-amber-950">El montaje y la refrigeración terminan de construir la pieza</h3>
            <p className="mt-4 leading-7 text-amber-950">
              La mousse de queso crema se prepara con azúcar, Baileys y gelatina hidratada y disuelta.
              Después se incorpora la crema semibatida y la preparación se coloca en pequeños aros con acetato y película.
            </p>
            <div className="mt-5 space-y-3 rounded-2xl bg-white p-5">
              <p className="leading-7 text-stone-700">
                <strong>Montaje:</strong> una capa de streusel y después la mousse de queso.
              </p>
              <p className="leading-7 text-stone-700">
                <strong>Frío:</strong> se refrigera y, una vez frío, se aplica una capa delgada de glaseado neutro y se desmolda.
              </p>
            </div>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Dos rutas, una misma pregunta</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La comparación es una herramienta para interpretar una preparación. No necesitas memorizar solamente
            los tiempos: observa qué ocurre entre la mezcla inicial y el momento en que la pieza puede sostenerse,
            enfriarse y desmoldarse.
          </p>

          <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
            <div className="grid md:grid-cols-2">
              <div className="border-b border-stone-200 p-5 md:border-b-0 md:border-r">
                <p className="font-semibold text-stone-900">Horneado</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Mezcla de queso → baño María → cocción cubierta → cocción descubierta → consistencia → enfriado.
                </p>
              </div>
              <div className="p-5">
                <p className="font-semibold text-stone-900">Frío</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Mousse de queso → gelatina + crema semibatida → montaje con aros y acetato → refrigeración → glaseado → desmolde.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">El montaje también forma parte de la estructura</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La Clase 15 no presenta el frío como un paso aislado. En el cheesecake frío, el producto se arma
            dentro de pequeños aros con acetato y película, se coloca el streusel, se añade la mousse y se
            refrigera antes de desmoldar. El molde y el frío trabajan dentro de la misma secuencia de construcción.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm font-medium text-stone-500">Base</p>
              <h3 className="mt-2 font-semibold text-stone-900">Streusel</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                La fuente indica procesar el streusel horneado y utilizarlo como parte del montaje.
              </p>
            </article>
            <article className="rounded-2xl bg-amber-50 p-5">
              <p className="text-sm font-medium text-amber-800">Forma</p>
              <h3 className="mt-2 font-semibold text-amber-950">Aro + acetato</h3>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                El aro contiene la preparación mientras se construyen las capas y el acetato facilita el desmolde indicado por la fuente.
              </p>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm font-medium text-stone-500">Final</p>
              <h3 className="mt-2 font-semibold text-stone-900">Frío + glaseado</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Una vez frío, se aplica una capa delgada de glaseado neutro antes de desmoldar y decorar.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. Antes de cocinar o enfriar</p>
              <p className="mt-2 leading-7 text-amber-950">
                Mira la mezcla antes de aplicar la etapa que le dará consistencia. En el horneado, identifica
                una mezcla fluida que todavía necesita cocción. En el cheesecake frío, identifica una mousse
                que todavía necesita el montaje y la refrigeración indicados por la fuente.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Observa la transición hacia la consistencia</p>
              <p className="mt-2 leading-7 text-stone-700">
                En el cheesecake horneado, observa el cambio durante la cocción y el momento en que la fuente
                indica continuar hasta obtener la consistencia. En el cheesecake frío, observa que el desmolde
                se realiza solamente una vez que la pieza está fría.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Mira qué función cumple el molde</p>
              <p className="mt-2 leading-7 text-stone-700">
                En la preparación fría, observa cómo el aro, el acetato y la película forman parte del montaje.
                No son solamente accesorios: permiten construir la pieza antes del desmolde que indica la fuente.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Observa el producto después del desmolde</p>
              <p className="mt-2 leading-7 text-stone-700">
                Comprueba si la pieza conserva las capas y la forma construidas durante el montaje. Después
                observa cómo el glaseado neutro y la decoración completan el acabado descrito en la receta.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Una lectura que conviene conservar</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">
            Cuando veas una preparación que necesita frío, busca primero qué se está construyendo.
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            En esta clase, la refrigeración aparece después de una secuencia concreta: gelatina, crema semibatida,
            montaje y contención dentro del aro. El frío no sustituye esos pasos; forma parte de la secuencia que
            lleva la preparación hasta el desmolde.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Compara las dos rutas</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Sin mirar la receta, reconstruye las dos secuencias: cheesecake horneado y cheesecake frío.
            En cada una identifica qué ocurre antes de obtener la consistencia final y qué papel cumple el montaje.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica qué cambia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué diferencia de proceso presenta la fuente entre el cheesecake horneado y el cheesecake frío?</p>
            <p>2. ¿Qué componentes del montaje del cheesecake frío deben estar presentes antes del desmolde?</p>
            <p>3. ¿Qué terminología de la fuente se conserva sin intentar reconciliarla?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>Hay más de una ruta para obtener una estructura:</strong> la Clase 15 presenta un cheesecake horneado y uno frío.
            </p>
            <p className="leading-7">
              <strong>En el horneado, la consistencia se busca durante la cocción:</strong> la receta especifica baño María,
              una primera etapa cubierta y una segunda etapa descubierta hasta alcanzar la consistencia.
            </p>
            <p className="leading-7">
              <strong>En el cheesecake frío, la refrigeración forma parte del montaje:</strong> la fuente incorpora gelatina,
              crema semibatida, aro, acetato y refrigeración antes del desmolde.
            </p>
            <p className="leading-7">
              <strong>El molde también puede formar parte de la técnica:</strong> en la preparación fría, la forma de la pieza
              se construye dentro del aro antes de retirarlo.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La Clase 15 presenta el cheesecake de frutos rojos como una mezcla de queso que se cocina en baño María
            y el cheesecake frío de Baileys como una mousse que incorpora gelatina y crema semibatida antes de
            refrigerarse. La explicación de ambas como dos rutas para construir consistencia es una organización
            pedagógica del curso. La fuente no desarrolla aquí una explicación general del mecanismo físico de la
            gelatina o de la coagulación durante la cocción.
          </p>
          <p className="mt-3 leading-7 text-stone-700">
            También se conserva una particularidad de la fuente: el objetivo menciona una base para pastel de
            “Masa Friable procesada”, mientras que el encabezado de la primera base la denomina “Pasta Sablée” y
            el procedimiento utiliza la expresión “pasta sucre cocida”. No se corrige ni se reconcilia esa
            terminología en esta lección.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
