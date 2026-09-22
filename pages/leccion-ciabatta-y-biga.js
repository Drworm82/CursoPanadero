import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyPage() {
  return (
    <CourseShell
      eyebrow="Lección 30"
      title="Ciabatta y biga"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Un concepto que sí está en la fuente</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La Clase 25 documenta una Ciabatta (únicamente demo) y su biga.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La Clase 25 presenta una Ciabatta marcada como “UNICAMENTE DEMO”, con una fórmula de biga, fórmula de masa,
            cubierta y procedimiento. Además, la fuente define la biga como un pre-fermento denso y poco hidratado.
            Esta lección puede distinguir lo que está documentado en la demostración de aquello que el texto deja
            remitido al procedimiento mostrado en clase.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ciabatta: fórmula y procedimiento de la demostración</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-semibold text-amber-900">Biga</p><p className="mt-2 leading-7 text-amber-950">2 kg de harina, 1.3 L de agua y 20 g de levadura fresca. La fuente indica prepararla 8 horas antes.</p></div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="font-semibold text-stone-900">Masa y cubierta</p><p className="mt-2 leading-7 text-stone-700">440 g de harina, 200 ml de agua, 45 g de sal, 20 g de malta y 50 ml de aceite de oliva. La cubierta lleva 100 g de harina y 100 g de sémola.</p></div>
          </div>
          <p className="mt-5 leading-7 text-stone-700">Para la biga, la fuente indica mezclar y dejar reposar 8 horas. Para la masa: mezclar la biga con los demás ingredientes hasta obtener una masa suave, fermentar, desgasificar, moldear según demostración, pasar por aceite de oliva, espolvorear la cubierta, fermentar y hornear a 220 °C. Al final se espolvorean harina y sémola.</p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Un prefermento es una parte del proceso, no una receta completa.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente distingue cuatro términos: masa madre, poolish, biga y masa vieja. Cada uno recibe una
            descripción breve. La biga no se presenta como una receta detallada, sino como un pre-fermento denso
            y poco hidratado. Por eso podemos reconocer su lugar conceptual sin inventar cantidades, tiempos o pasos.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Los cuatro términos de la fuente</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Masa madre</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Fermento natural</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La fuente la define como un fermento natural de harina y agua.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Poolish</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Pre-fermento líquido</h3>
              <p className="mt-3 leading-7 text-stone-700">
                Se describe como un pre-fermento líquido hecho con partes iguales de harina y agua, más levadura.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Biga</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Pre-fermento denso y poco hidratado</h3>
              <p className="mt-3 leading-7 text-amber-950">
                Esta es la definición concreta que proporciona el material y el centro de esta lección.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Masa vieja</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Trozo de masa del día anterior</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La fuente indica que se utiliza como fermento.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué significa “denso y poco hidratado” dentro de esta fuente?</h2>
          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">La fuente sí establece una característica</p>
              <p className="mt-2 leading-7 text-amber-950">
                La biga se diferencia del poolish por la descripción que recibe: uno es presentado como pre-fermento
                líquido y la otra como pre-fermento denso y poco hidratado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">La fuente sí proporciona una fórmula para la biga de esta demostración</p>
              <p className="mt-2 leading-7 text-stone-700">
                Para esta demostración sí aparecen cantidades: 2 kg de harina, 1.3 L de agua y 20 g de levadura fresca, con 8 horas de reposo.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">El procedimiento está documentado como demostración</p>
              <p className="mt-2 leading-7 text-stone-700">
                La Clase 25 sí indica mezclar la biga con los demás ingredientes, fermentar, desgasificar, moldear según demostración, pasar por aceite de oliva, espolvorear la cubierta, fermentar y hornear a 220 °C.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de clasificación</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Distingue los prefermentos por lo que realmente dice la fuente</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Completa una tabla con cuatro filas: masa madre, poolish, biga y masa vieja. En una columna escribe
            exactamente qué característica aporta la fuente; en otra, anota qué información todavía falta para
            convertir esa definición en una receta reproducible.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">La fuente documenta una Ciabatta como demostración.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La lección no añade cantidades, temperaturas, tiempos ni técnica de elaboración que no aparezcan en la
            fuente. El texto remite el moldeado de la ciabatta a la demostración; no debemos reconstruir ese moldeado a partir de conocimiento externo. Para
            una fuente específica adicional.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Separa en tu hoja las dos partes de la preparación: biga y masa final. Reconstruye qué debe ocurrir con la biga antes de incorporarla a los demás ingredientes.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Cuánto tiempo indica la fuente para el reposo de la biga?</p>
            <p>2. ¿Qué operaciones siguen después de mezclar la biga con la masa?</p>
            <p>3. ¿Qué información sobre la técnica de ciabatta queda indicada como demostración?</p>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Separa en tu hoja las dos partes de la preparación: biga y masa final. Reconstruye qué debe ocurrir con la biga antes de incorporarla a los demás ingredientes.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Cuánto tiempo indica la fuente para el reposo de la biga?</p>
            <p>2. ¿Qué operaciones siguen después de mezclar la biga con la masa?</p>
            <p>3. ¿Qué información sobre la técnica de ciabatta queda indicada como demostración?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>La biga está documentada:</strong> la fuente la define como un pre-fermento denso y poco hidratado.
            </p>
            <p className="leading-7">
              <strong>Se puede comparar con otros prefermentos:</strong> la fuente también define masa madre, poolish y masa vieja.
            </p>
            <p className="leading-7">
              <strong>La demostración sí proporciona una fórmula:</strong> la biga lleva 2 kg de harina, 1.3 L de agua y 20 g de levadura fresca, con 8 horas de reposo.
            </p>
            <p className="leading-7">
              <strong>La ciabatta está documentada como demostración:</strong> la fórmula y la secuencia general aparecen en la Clase 25.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Las definiciones de masa madre, poolish, biga y masa vieja proceden de la lección “Masa madre, poolish,
            biga, masa vieja” en data/curso.js. El proceso general de panificación procede de “Proceso para elaborar
            una masa”. La receta de Ciabatta y su biga proceden de la Clase 25 del PDF; el moldeado se remite a la demostración.
            detallada de biga. La organización comparativa de esta lección es organización pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Panes enriquecidos</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección puede apoyarse en las recetas existentes para observar masas que incorporan
            ingredientes como grasa, azúcar y huevo.
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
