import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyThreePage() {
  return (
    <CourseShell
      eyebrow="Lección 33"
      title="Bagels y pita: el formato cambia el proceso"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cuando el producto previsto no está documentado</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La ruta propone bagels y pita, pero la fuente disponible no contiene esas recetas.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La búsqueda del repositorio no encuentra contenido específico sobre bagels, pita ni pan árabe.
            Tampoco aparece un procedimiento que permita comparar sus formas o sus métodos de cocción.
            Por eso esta lección no atribuye técnicas concretas a ninguno de los dos productos.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">La forma puede ser una pregunta de proceso, pero aquí falta la evidencia para desarrollarla.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            El programa plantea comparar dos panes cuya forma y cocción producen resultados distintos. Sin embargo,
            el material disponible solo documenta de manera general las etapas de una masa fermentada: fermentación,
            ponchado, porcionado, formado, segunda fermentación, terminado, horneado y enfriado. No asigna esas etapas
            a bagels o pita de manera específica.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Lo que sí podemos conservar del proceso general</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Antes del formado</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Fermentación y ponchado</h3>
              <p className="mt-3 leading-7 text-amber-950">
                El proceso general del curso indica una primera fermentación y después el desgasificado o ponchado
                antes del porcionado y formado.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Durante el formado</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">La pieza deja de ser solo una masa</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La fuente coloca el formado antes de la segunda fermentación. Esa secuencia permite estudiar el
                formato como parte del proceso, pero no especifica cómo formar un bagel o una pita.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Después del formado</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Segunda fermentación y horneado</h3>
              <p className="mt-3 leading-7 text-amber-950">
                El proceso general continúa con una segunda fermentación, terminado y acabados, horneado y enfriado.
                La fuente no indica si bagels o pita siguen exactamente esta secuencia ni qué modificaciones tendrían.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. No conviertas el título en una receta</p>
              <p className="mt-2 leading-7 text-amber-950">
                La Clase 27 sí documenta Bagels y Pan Pita con ingredientes, cantidades y procedimiento.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Separa proceso general de producto específico</p>
              <p className="mt-2 leading-7 text-stone-700">
                Podemos estudiar la secuencia general de panificación, pero no debemos atribuir cada etapa a un bagel
                o una pita sin una fuente que lo documente.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. La comparación propuesta necesita datos que todavía no tenemos</p>
              <p className="mt-2 leading-7 text-stone-700">
                Para comparar los dos productos harían falta, como mínimo, sus fórmulas, forma de formado,
                fermentaciones y método de cocción documentados en el material del curso.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de lectura de fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Distingue dato, pregunta y ausencia</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Escribe tres columnas: “documentado”, “pregunta que queremos responder” y “no documentado”. En
            “documentado”, coloca las etapas generales de una masa fermentada. En “pregunta”, coloca las diferencias
            de formado y cocción que la ruta pretende estudiar. En “no documentado”, registra todo lo que necesitarías
            para explicar específicamente bagels y pita sin recurrir a una fuente externa.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">Bagels y pita no están documentados en el material disponible.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La fuente proporciona recetas para ambos productos. En Bagels documenta fermentación, porcionado, formado,
            pochado en agua hirviendo durante 15 segundos, barnizado, acabado y horneado a 200 °C durante 20 minutos.
            En Pan Pita documenta reposo de 1:30 h, porcionado de 50 g, formado, extensión a ½ cm, fermentación,
            horno a 220 °C con charolas calientes y horneado sin dejar que tomen color.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Compara las dos secuencias y reconstruye sus etapas en paralelo. Marca qué comparten y en qué momento divergen.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué etapas de fermentación aparecen en cada preparación?</p>
            <p>2. ¿Cómo cambia el formado entre las dos piezas?</p>
            <p>3. ¿Qué información específica sobre el proceso de bagel o pita sí está documentada y cuál no?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El proceso general sí está disponible:</strong> la fuente describe fermentación, ponchado,
              porcionado, formado, segunda fermentación, horneado y enfriado.
            </p>
            <p className="leading-7">
              <strong>Los productos específicos sí están documentados:</strong> la Clase 27 contiene recetas de Bagels y Pan Pita.
            </p>
            <p className="leading-7">
              <strong>La comparación puede hacerse con la fuente:</strong> ambos productos tienen fórmulas y secuencias documentadas, y difieren en operaciones como el pochado del bagel y la cocción del pita sobre charolas calientes.
            </p>
            <p className="leading-7">
              <strong>La ausencia también es información:</strong> saber qué no está en la fuente evita convertir
              conocimiento externo en contenido atribuido al curso.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Las recetas de Bagels y Pan Pita proceden de la Clase 27 del PDF. La secuencia general de panificación y la organización comparativa de esta lección sirven como estructura pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Fougasse y panes saborizados</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección deberá comprobar primero qué productos, ingredientes y técnicas aparecen realmente
            en la fuente antes de desarrollar el tema.
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
