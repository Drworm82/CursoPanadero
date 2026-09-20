import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyFourPage() {
  return (
    <CourseShell
      eyebrow="Lección 24"
      title="Cerrar un pastel: estructura, humedad y acabado"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Cierre del módulo
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Un pastel terminado es una secuencia de decisiones, no solamente una masa horneada.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            A lo largo de este módulo viste distintas maneras de construir una preparación y llevarla hasta
            un producto terminado. En unas recetas el aire construye volumen; en otras, la cocción, el jarabe,
            el relleno, la cobertura o el frío cambian lo que ocurre después del horneado. Esta lección reúne
            esas decisiones para que puedas interpretar el producto completo.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">
            Antes de terminar un pastel, identifica qué necesita cada capa.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente muestra varias secuencias. El tres leches recibe un jarabe después de hornearse.
            La Selva Negra recibe almíbar, relleno, cobertura y decoración. La Sacher incorpora mermelada,
            ganache y glaseado. El cheesecake de Baileys se construye con streusel, mousse, frío y glaseado.
            No son el mismo producto, pero todos muestran que el resultado depende de cómo se relacionan sus componentes.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-medium text-stone-500">Estructura</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">Lo que sostiene el producto</h3>
            <p className="mt-4 leading-7 text-stone-700">
              Puede ser un genoise, un biscuit, una base de masa friable, una mezcla de queso o la estructura
              hueca de un choux. La primera pregunta es qué componente está formando la base del producto.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
            <p className="text-sm font-medium text-amber-800">Transformación</p>
            <h3 className="mt-2 text-2xl font-semibold text-amber-950">Lo que recibe después</h3>
            <p className="mt-4 leading-7 text-amber-950">
              Puede recibir humedad, relleno, cobertura, frío o una combinación de ellos. El producto cambia
              porque esos elementos se incorporan en una secuencia determinada.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Cuatro productos para aprender a leer la secuencia</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            No necesitas aprender cuatro recetas aisladas. Compara qué ocurre después de que cada estructura está lista.
          </p>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl bg-amber-50 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-800">Tres leches</p>
                  <h3 className="text-xl font-semibold text-amber-950">La estructura recibe humedad</h3>
                </div>
                <span className="text-sm text-amber-800">Clase 9</span>
              </div>
              <p className="mt-3 leading-7 text-amber-950">
                El genoise se corta en tres partes. Cada capa recibe el jarabe de tres leches, se espera a que
                absorba y después se añade crema y fruta. La secuencia se repite.
              </p>
              <p className="mt-3 text-sm font-medium text-amber-900">
                Lectura: estructura → humedad → absorción → relleno → repetición.
              </p>
            </article>

            <article className="rounded-2xl bg-stone-100 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-stone-500">Selva Negra</p>
                  <h3 className="text-xl font-semibold text-stone-900">La estructura recibe varias capas de montaje</h3>
                </div>
                <span className="text-sm text-stone-500">Clase 10</span>
              </div>
              <p className="mt-3 leading-7 text-stone-700">
                El genoise de chocolate se corta en tres discos. Se aplica almíbar y relleno en espiral, se añaden
                cerezas, se cubre el pastel con crema y finalmente se forman nueve copos con duya, además de cerezas
                y chocolate. La fuente indica refrigerar 4–5 horas antes de cortar.
              </p>
              <p className="mt-3 text-sm font-medium text-stone-800">
                Lectura: estructura → humedad → relleno → cobertura → decoración → reposo.
              </p>
            </article>

            <article className="rounded-2xl bg-stone-100 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-stone-500">Sacher</p>
                  <h3 className="text-xl font-semibold text-stone-900">La humedad y el acabado protegen y terminan las capas</h3>
                </div>
                <span className="text-sm text-stone-500">Clase 10</span>
              </div>
              <p className="mt-3 leading-7 text-stone-700">
                El biscuit se corta en tres o cuatro capas. La fuente indica pincelar mermelada de chabacano,
                apilar las capas y cubrir todo el pastel con mermelada para evitar que se reseque. Después se
                cubre con ganache, se enfría y se termina con glaseado de chocolate.
              </p>
              <p className="mt-3 text-sm font-medium text-stone-800">
                Lectura: estructura → mermelada → protección de las capas → ganache → frío → glaseado.
              </p>
            </article>

            <article className="rounded-2xl bg-amber-50 p-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-amber-800">Cheesecake frío de Baileys</p>
                  <h3 className="text-xl font-semibold text-amber-950">El montaje y el frío forman parte de la estructura</h3>
                </div>
                <span className="text-sm text-amber-800">Clase 15</span>
              </div>
              <p className="mt-3 leading-7 text-amber-950">
                La preparación se monta en pequeños aros con acetato y película. Se coloca el streusel y después
                la mousse de queso con gelatina y crema semibatida. Se refrigera y, una vez fría, recibe glaseado
                neutro antes de desmoldarse y decorarse.
              </p>
              <p className="mt-3 text-sm font-medium text-amber-900">
                Lectura: base → mousse → contención → frío → glaseado → desmolde.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">La misma pregunta sirve para productos diferentes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm font-medium text-stone-500">Antes</p>
              <h3 className="mt-2 font-semibold text-stone-900">¿Qué estructura tengo?</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Identifica el bizcocho, base, mousse o masa que sostiene lo que viene después.
              </p>
            </article>
            <article className="rounded-2xl bg-amber-50 p-5">
              <p className="text-sm font-medium text-amber-800">Durante</p>
              <h3 className="mt-2 font-semibold text-amber-950">¿Qué necesita recibir?</h3>
              <p className="mt-2 text-sm leading-6 text-amber-950">
                Observa si la receta incorpora humedad, relleno, cobertura, frío u otra preparación antes de terminar.
              </p>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <p className="text-sm font-medium text-stone-500">Después</p>
              <h3 className="mt-2 font-semibold text-stone-900">¿Qué comprueba que está terminado?</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Busca en la fuente la señal concreta: absorción, consistencia, enfriado, desmolde, cobertura o reposo.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. Identifica la estructura antes de modificarla</p>
              <p className="mt-2 leading-7 text-amber-950">
                Antes de añadir cualquier componente, señala qué parte del producto ya está construida.
                En un pastel de capas será el bizcocho; en el cheesecake frío, la base y la mousse se construyen
                durante el propio montaje.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Observa cuándo entra la humedad</p>
              <p className="mt-2 leading-7 text-stone-700">
                Compara el tres leches, la Selva Negra y la Sacher. Los tres reciben un líquido o preparación
                húmeda después de la cocción, pero no lo hacen de la misma manera ni con la misma función.
                Observa la secuencia específica que indica cada receta.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Observa qué mantiene cada componente en su sitio</p>
              <p className="mt-2 leading-7 text-stone-700">
                Mira cómo las capas, el relleno, la cobertura, el aro o el frío intervienen en el montaje.
                La fuente muestra que el producto terminado depende de que cada parte llegue en el momento indicado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Busca la señal de finalización</p>
              <p className="mt-2 leading-7 text-stone-700">
                No todas las recetas terminan cuando salen del horno. En unas hay que esperar absorción,
                en otras enfriar, refrigerar, glasear, desmoldar o dejar reposar. Lee cuál es la señal que
                la propia receta utiliza para pasar al siguiente paso.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">La habilidad que cierra el módulo</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">
            Dejar de ver recetas aisladas y empezar a leer procesos.
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Si una receta cambia, la pregunta sigue siendo útil: ¿qué estructura tengo?, ¿qué voy a incorporar?,
            ¿cuándo debo incorporarlo? y ¿qué señal me indica que puedo continuar? Las lecciones del módulo han
            utilizado productos distintos para construir esa forma de observar.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de integración</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Lee una receta antes de ejecutarla</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Elige uno de los pasteles trabajados en este módulo y, antes de comenzar, escribe su secuencia
            en una sola línea: estructura → qué recibe → montaje → señal de finalización. Después ejecuta la receta
            y comprueba si lo que observas coincide con la secuencia que identificaste.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte del Módulo 3</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El aire puede construir estructura:</strong> el batido del huevo y de las claras aparece
              como una herramienta fundamental en las masas y preparaciones estudiadas.
            </p>
            <p className="leading-7">
              <strong>La estructura puede transformarse después de la cocción:</strong> las recetas muestran
              absorción de jarabes, rellenos, coberturas y montajes posteriores.
            </p>
            <p className="leading-7">
              <strong>La consistencia determina cómo se puede trabajar una preparación:</strong> esto apareció
              en cremas, rellenos, coberturas y decoraciones.
            </p>
            <p className="leading-7">
              <strong>El frío también puede formar parte de la construcción:</strong> el cheesecake frío utiliza
              gelatina, montaje y refrigeración antes del desmolde.
            </p>
            <p className="leading-7">
              <strong>La receta puede leerse como una secuencia:</strong> estructura, transformación, montaje y
              señal de finalización.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Las secuencias utilizadas aquí proceden de las preparaciones de las Clases 9, 10 y 15: tres leches,
            Selva Negra, Sacher y cheesecake de Baileys. La comparación entre ellas y la idea de leer una receta
            como una secuencia son organización pedagógica del curso. No se añaden aquí mecanismos técnicos que
            la fuente no desarrolla.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Fermentación y panadería</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Hasta aquí hemos trabajado principalmente con masas batidas, aireación, cocción, cremas y montaje.
            El siguiente módulo cambia el problema: vamos a entrar en las masas de pan y en el papel de la
            fermentación, el tiempo, el desarrollo y el formado.
          </p>
          <a
            href="/modulo-4"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Ir al Módulo 4 →
          </a>
        </section>
      </div>
    </CourseShell>
  );
}
