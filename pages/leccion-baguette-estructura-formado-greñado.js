import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyEightPage() {
  return (
    <CourseShell
      eyebrow="Lección 28"
      title="Baguette: estructura, formado y greñado"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Una lección con una fuente limitada</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La ruta de panificación sí está documentada; la baguette y el greñado todavía no.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            El material disponible para este curso establece el formado como una etapa del proceso y después
            indica una segunda fermentación de las piezas formadas. Sin embargo, no contiene una receta de
            baguette ni desarrolla el procedimiento de greñado. Por eso esta lección distingue lo que sí podemos
            estudiar de lo que todavía requiere una fuente específica.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Una pieza formada sigue siendo parte de una secuencia.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            En la secuencia general de la fuente, después de la primera fermentación vienen el desgasificado
            o ponchado, el porcionado y el formado. Las piezas formadas pasan después a una segunda fermentación,
            seguida por terminado, horneado y enfriado. Esa estructura permite estudiar dónde encajaría una pieza
            como una baguette, aunque la fuente no describa todavía su técnica particular.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Lo que sí está documentado</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Después de fermentar</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Ponchar y porcionar</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La fuente coloca el desgasificado o ponchado después de la primera fermentación y luego divide
                la masa en piezas.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">La pieza toma forma</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Formado</h3>
              <p className="mt-3 leading-7 text-stone-700">
                El formado aparece como una etapa propia. Después de él, las piezas formadas pasan a la segunda fermentación.
              </p>
            </article>
          </div>

          <div className="mt-4 rounded-2xl bg-stone-100 p-6">
            <p className="font-semibold text-stone-900">Después del formado</p>
            <p className="mt-2 leading-7 text-stone-700">
              La fuente indica dejar las piezas formadas hasta que doblen su volumen. Después aparecen el terminado
              y los acabados, el horneado y el enfriado.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. La transformación de masa a pieza</p>
              <p className="mt-2 leading-7 text-amber-950">
                La fuente separa el porcionado del formado. Observa que primero se divide la masa y después se trabaja cada pieza.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. La segunda fermentación ocurre después del formado</p>
              <p className="mt-2 leading-7 text-stone-700">
                No confundas la primera fermentación de la masa completa con la segunda fermentación de las piezas ya formadas.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El volumen vuelve a ser una señal</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente utiliza nuevamente el doble de volumen como referencia para decidir cuándo avanzar después del formado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. No atribuyas al material una técnica que no contiene</p>
              <p className="mt-2 leading-7 text-stone-700">
                En el material consultado no aparecen instrucciones sobre cortes, profundidad, ángulo, número de cortes
                o herramienta de greñado para baguette.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de secuencia</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Ubica la pieza dentro del proceso</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Sin añadir una técnica externa, escribe la secuencia que la fuente sí permite establecer:
            primera fermentación → ponchado → porcionado → formado → segunda fermentación → terminado →
            horneado → enfriado. Después señala en qué punto necesitarías una fuente específica para estudiar
            el greñado de una baguette.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">La baguette no está desarrollada en el material disponible.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La búsqueda del material del repositorio no encontró una receta, procedimiento o explicación específica
            para “baguette” ni para “greñado”. La lección conserva esos términos porque forman parte de la ruta
            pedagógica del Módulo 4, pero no presenta como hechos de la fuente instrucciones que no están allí.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Reconstruye el proceso del baguette antes de volver a mirar la receta: poolish, mezcla, reposo, porcionado, formado, corte y horneado. Marca qué operaciones están documentadas y cuáles solo se mencionan como demostración.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué función cumple el poolish dentro de la secuencia documentada?</p>
            <p>2. ¿En qué momento aparece el formado y el corte?</p>
            <p>3. ¿Qué detalle específico sobre el greñado no desarrolla la fuente y, por tanto, no debes inventar?</p>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Reconstruye el proceso del baguette antes de volver a mirar la receta: poolish, mezcla, reposo, porcionado, formado, corte y horneado. Marca qué operaciones están documentadas y cuáles solo se mencionan como demostración.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué función cumple el poolish dentro de la secuencia documentada?</p>
            <p>2. ¿En qué momento aparece el formado y el corte?</p>
            <p>3. ¿Qué detalle específico sobre el greñado no desarrolla la fuente y, por tanto, no debes inventar?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El formado es una etapa propia:</strong> ocurre después del ponchado y del porcionado.
            </p>
            <p className="leading-7">
              <strong>La segunda fermentación pertenece a las piezas:</strong> la fuente indica dejar las piezas formadas hasta que doblen su volumen.
            </p>
            <p className="leading-7">
              <strong>El proceso continúa:</strong> después de la segunda fermentación aparecen terminado, horneado y enfriado.
            </p>
            <p className="leading-7">
              <strong>El greñado queda pendiente:</strong> el material disponible no explica todavía cómo realizarlo en una baguette.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            El contenido documentado procede de «Proceso para elaborar una masa» en data/curso.js, especialmente
            las etapas de desgasificado, porcionado, formado, segunda fermentación, terminado, horneado y enfriado.
            La búsqueda del repositorio no encontró contenido específico sobre baguette o greñado. La organización
            de esta lección y su práctica son organización pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Focaccia: otra forma de entender la hidratación</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección cambia el foco hacia otra familia de pan y hacia la comparación de masas con diferentes características.
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
