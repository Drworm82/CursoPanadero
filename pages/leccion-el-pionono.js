import CourseShell from '../components/course/CourseShell';

export default function LessonFourteenPage() {
  return (
    <CourseShell
      eyebrow="Lección 14"
      title="El pionono: construir y conservar volumen"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Un cambio de objetivo</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            El mismo principio de aire, pero ahora necesitamos una plancha flexible
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En la lección anterior aprendiste a reconocer el punto listón y a incorporar la harina sin destruir el volumen.
            Ahora la fuente lleva ese principio a otro formato: una <strong>masa batida ligera, flexible y en plancha</strong>.
            Ya no buscamos solamente un bizcocho que conserve su volumen en un molde; necesitamos que la plancha pueda doblarse.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Volumen + flexibilidad</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente establece tres señales muy concretas para esta preparación:
            el batido debe triplicar su tamaño, la harina se incorpora de forma envolvente y el resultado debe quedar
            <strong> muy flexible para poderse doblar</strong>.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · Batido</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Triplicar el tamaño</h3>
            <p className="mt-3 leading-7 text-stone-700">
              Huevos, azúcar, miel y sal se baten a baño María hasta alcanzar aproximadamente tres veces su volumen inicial.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">2 · Incorporación</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Harina sin perder aire</h3>
            <p className="mt-3 leading-7 text-amber-950">
              La harina cernida entra de forma envolvente. La fuente indica no trabajar de más el batido al extenderlo.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · Resultado</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Una plancha que pueda doblarse</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La fuente indica que debe quedar muy flexible para poderse doblar y recomienda cubrirla al salir del horno o conservarla en un lugar húmedo.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>
          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El volumen antes de añadir la harina</p>
              <p className="mt-2 leading-7 text-amber-950">
                Mira el tamaño de la mezcla al comenzar y compáralo con el momento en que termina el batido a baño María.
                La referencia de la fuente es clara: debe haber triplicado su tamaño. No sustituyas esta señal por un tiempo memorizado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Cómo cambia al entrar la harina</p>
              <p className="mt-2 leading-7 text-stone-700">
                Observa si la mezcla conserva parte del volumen que construiste durante el batido.
                La fuente indica cernir la harina e incorporarla de forma envolvente.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Cómo se extiende en la charola</p>
              <p className="mt-2 leading-7 text-stone-700">
                La preparación se coloca sobre una charola con silpat o papel siliconado, engrasada y enharinada,
                y se extiende hasta adaptarla a la forma de la charola. Observa que la fuente indica hacerlo sin dar mucho trabajo al batido para evitar que se baje.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Qué ocurre después del horno</p>
              <p className="mt-2 leading-7 text-stone-700">
                La señal final no es solamente que esté cocido: debe conservar la flexibilidad necesaria para doblarse.
                La fuente recomienda cubrirlo al salir del horno o conservarlo en un lugar húmedo.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Una precisión importante</p>
          <p className="mt-3 leading-7 text-amber-950">
            La preparación aparece dentro del <strong>Buche de Noël</strong> de la Clase 9 y forma parte de una preparación más grande.
            Aquí separamos el Pionono como práctica porque permite estudiar por sí mismo el cambio de formato:
            de un bizcocho en molde a una plancha que debe conservar flexibilidad.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Práctica guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Pionono: volumen en plancha</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Realiza únicamente el Pionono de la preparación de Buche de Noël. La práctica se centra en tres señales:
            triplicar el volumen, conservarlo al incorporar la harina y obtener una plancha suficientemente flexible para doblarse.
          </p>
          <a
            href="/receta-pionono"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Abrir práctica →
          </a>
        </section>

        
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica y reconstruye</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. 1. ¿Qué señal de volumen establece la fuente para el batido del Pionono?</p>
            <p>2. 2. ¿Cómo debe incorporarse la harina?</p>
            <p>3. 3. ¿Qué característica debe conservar la plancha después del horno para cumplir el objetivo de la preparación?</p>
          </div>
        </section>
<section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>El batido tiene una referencia visible:</strong> en esta preparación debe triplicar su tamaño.</p>
            <p className="leading-7"><strong>La harina entra con cuidado:</strong> se incorpora cernida y de forma envolvente para conservar el volumen.</p>
            <p className="leading-7"><strong>El formato cambia el objetivo:</strong> una plancha necesita suficiente flexibilidad para poder doblarse.</p>
            <p className="leading-7"><strong>El manejo después del horno importa:</strong> la fuente recomienda cubrir el Pionono o mantenerlo en un lugar húmedo para conservar su flexibilidad.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
