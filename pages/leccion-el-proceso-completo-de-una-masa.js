import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyFivePage() {
  return (
    <CourseShell
      eyebrow="Lección 25"
      title="El proceso completo de una masa"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Entrada al módulo
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Una masa fermentada no se entiende mirando solamente el horno.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En esta lección vamos a leer el proceso completo como una secuencia. La fuente organiza la
            elaboración desde identificar y pesar los ingredientes hasta enfriar y terminar la pieza.
            El objetivo aquí es reconocer qué sucede en cada etapa y qué señal permite pasar a la siguiente.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">
            El pan se construye por etapas.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La secuencia de la fuente incluye pesado, premezclado, autolisis, amasado, primera fermentación,
            desgasificado, porcionado, formado, segunda fermentación, terminado, horneado y enfriado.
            Antes de estudiar panes concretos, conviene aprender a reconocer esta secuencia.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">La secuencia completa</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            No todas las etapas tienen la misma función ni ocurren de la misma manera en todos los panes.
            Por ahora, usa esta lista como mapa del proceso que presenta la fuente.
          </p>

          <div className="mt-6 space-y-3">
            {[
              ['1', 'Identificar y pesar ingredientes', 'El proceso comienza antes de mezclar: primero se identifican y pesan los ingredientes.'],
              ['2', 'Premezclado con los secos', 'La fuente indica mezclar los secos con huevo, grasas en baja proporción sin la levadura y la mitad del líquido.'],
              ['3', 'Autolisis', 'La secuencia incluye una etapa de autolisis antes del amasado.'],
              ['4', 'Amasado', 'Se agrega la levadura y comienza el amasado; se incorpora más líquido hasta obtener una masa suave, lisa y elástica.'],
              ['5', 'Primera fermentación', 'La masa se deja tapada en un lugar tibio hasta que doble su volumen.'],
              ['6', 'Desgasificado o ponchado', 'Después de la primera fermentación, la fuente indica desgasificar la masa.'],
              ['7', 'Porcionado de piezas', 'La masa se divide en las piezas que se van a trabajar.'],
              ['8', 'Formado', 'Las piezas porcionadas pasan al formado.'],
              ['9', 'Segunda fermentación', 'Las piezas formadas se dejan hasta que doblen su volumen.'],
              ['10', 'Terminado y acabados', 'La secuencia contempla una etapa de terminado antes del horneado.'],
              ['11', 'Horneado', 'La fuente identifica el horneado como «Tercera fermentación» y señala que el producto final sube en el horno.'],
              ['12', 'Enfriado y acabado', 'El proceso termina con el enfriado y el acabado.'],
            ].map(([number, title, description]) => (
              <article key={number} className="rounded-2xl bg-stone-100 p-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-stone-700">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-stone-900">{title}</h3>
                    <p className="mt-2 leading-7 text-stone-700">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
            <p className="text-sm font-medium text-amber-800">Durante la masa</p>
            <h3 className="mt-2 text-2xl font-semibold text-amber-950">Busca cambios observables</h3>
            <p className="mt-4 leading-7 text-amber-950">
              La fuente da señales concretas en distintos puntos: una masa suave, lisa y elástica después del
              amasado, y el doble de volumen como referencia para la primera y segunda fermentación.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-medium text-stone-500">Durante el proceso</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">No saltes etapas</h3>
            <p className="mt-4 leading-7 text-stone-700">
              El mapa permite ubicar dónde estás antes de modificar la masa. Primero se prepara, después se
              desarrolla mediante el proceso indicado, luego fermenta, se divide, se forma y vuelve a fermentar.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El orden de las etapas</p>
              <p className="mt-2 leading-7 text-amber-950">
                Identifica en qué momento aparecen el amasado, la primera fermentación, el ponchado, el formado
                y la segunda fermentación. La secuencia es parte de lo que estás aprendiendo.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. La señal de una masa lista para avanzar</p>
              <p className="mt-2 leading-7 text-stone-700">
                En el amasado, la fuente describe una masa suave, lisa y elástica. En las dos fermentaciones,
                utiliza el doble de volumen como señal. Observa esas referencias en lugar de avanzar solamente por tiempo.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Qué cambia después de cada intervención</p>
              <p className="mt-2 leading-7 text-stone-700">
                Compara la masa antes y después del amasado, de la primera fermentación, del ponchado y del formado.
                Por ahora no necesitas añadir explicaciones que la fuente no desarrolla: necesitas aprender a leer la secuencia.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. El proceso continúa después del horno</p>
              <p className="mt-2 leading-7 text-stone-700">
                El mapa termina con enfriado y acabado. No tomes la salida del horno como el final automático del proceso.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de lectura</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Convierte una receta en una línea de proceso</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Antes de preparar una masa fermentada, escribe la secuencia en una sola línea:
            pesado → premezclado → autolisis → amasado → primera fermentación → ponchado →
            porcionado → formado → segunda fermentación → terminado → horneado → enfriado.
            Después compara esa línea con la receta que estés trabajando y marca cualquier etapa que cambie.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Una precisión importante</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">
            Conservamos la terminología de la fuente.
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            En el paso 11, la fuente llama al horneado «Tercera fermentación» y explica que el producto final
            sube en el horno. Esta lección conserva esa formulación como parte del material de origen; no la
            sustituye por una explicación externa.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>Una masa fermentada se trabaja por etapas:</strong> la fuente presenta una secuencia que va
              desde el pesado hasta el enfriado y acabado.
            </p>
            <p className="leading-7">
              <strong>El amasado tiene una señal concreta:</strong> la masa debe llegar a una condición suave, lisa y elástica
              según la secuencia presentada.
            </p>
            <p className="leading-7">
              <strong>La fermentación también tiene una referencia observable:</strong> la fuente utiliza el doble de volumen
              para la primera y la segunda fermentación.
            </p>
            <p className="leading-7">
              <strong>El formado ocurre después del porcionado:</strong> las piezas se forman antes de la segunda fermentación.
            </p>
            <p className="leading-7">
              <strong>El proceso no termina al sacar la pieza del horno:</strong> todavía quedan el enfriado y el acabado.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La secuencia de esta lección procede de la sección «Proceso para elaborar una masa» de la fuente del curso.
            La organización en bloques, las preguntas de observación y la práctica de convertir el procedimiento en una
            línea de proceso son organización pedagógica del curso. No se añaden aquí mecanismos técnicos que la fuente
            no desarrolla.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Fermentar es transformar</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            En la siguiente lección vamos a detenernos en las señales de la fermentación y en cómo leer su avance dentro del proceso.
          </p>
          <a
            href="/leccion-fermentar-es-transformar"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Ir a la siguiente lección →
          </a>
        </section>
      </div>
    </CourseShell>
  );
}
