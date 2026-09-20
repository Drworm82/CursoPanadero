import CourseShell from '../components/course/CourseShell';

export default function LessonThirteenPage() {
  return (
    <CourseShell eyebrow="Lección 13" title="Cuando el huevo sostiene una masa" backHref="/modulo-3" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Primera práctica</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">Ahora vamos a reconocer el momento que construye el volumen</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Ya sabes que el batido incorpora aire. Ahora necesitamos aprender a <strong>reconocer qué aspecto tiene una mezcla cuando el batido ha cumplido su función</strong>.
            La fuente llama a ese punto <strong>punto listón</strong> en el genoise del pastel de tres leches.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La señal que buscamos</p>
          <h2 className="mt-2 text-2xl font-semibold">Punto listón</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente indica batir los huevos junto con el azúcar hasta llegar a punto listón y después incorporar la harina suavemente, de forma envolvente y fuera de la batidora.
            La idea práctica es reconocer el estado de la mezcla <strong>antes</strong> de añadir la harina.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Antes</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Huevos + azúcar</h3>
            <p className="mt-3 leading-7 text-stone-700">La mezcla todavía no tiene el volumen que buscamos.</p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">Punto de decisión</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Punto listón</h3>
            <p className="mt-3 leading-7 text-amber-950">Aquí termina el batido y empieza una etapa en la que debemos conservar el aire incorporado.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Después</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Harina envolvente</h3>
            <p className="mt-3 leading-7 text-stone-700">La harina entra suavemente y ya no trabajamos la mezcla con la batidora.</p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>
          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El cambio de volumen</p>
              <p className="mt-2 leading-7 text-amber-950">
                Compara la mezcla al inicio con la mezcla después del batido. Lo que buscamos no es solamente que esté “más clara”:
                debe haber aumentado claramente de volumen por el aire incorporado.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El momento de dejar de batir</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente establece el punto listón como el momento en que termina esta etapa. La lección importante es que seguir batiendo por inercia no sustituye el criterio:
                primero conseguimos el estado que necesitamos y después cambiamos de técnica.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. La entrada de la harina</p>
              <p className="mt-2 leading-7 text-stone-700">
                Mira cómo cambia la mezcla cuando incorporas harina. La fuente indica hacerlo suavemente y en forma envolvente, fuera de la batidora.
                El objetivo es integrar la harina sin tratar la preparación como una masa que necesita amasado.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Una precisión sobre la fuente</p>
          <p className="mt-3 leading-7 text-amber-950">
            El material presenta el <strong>pastel de tres leches completo como DEMO</strong>. Para esta lección aislamos únicamente el genoise como práctica pedagógica,
            conservando las cantidades y el procedimiento de esa parte de la preparación. No estamos presentando esta adaptación como una receta independiente de la fuente.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Práctica guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Genoise: reconocer el punto listón</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Haz únicamente la parte del genoise de la DEMO de tres leches. La finalidad de esta práctica es observar el batido, reconocer el punto listón y comprobar qué ocurre al incorporar la harina.
          </p>
          <a href="/receta-genoise-punto-liston" className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">
            Abrir práctica →
          </a>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>El batido tiene una función:</strong> incorporar aire y aumentar el volumen.</p>
            <p className="leading-7"><strong>El punto listón marca una transición:</strong> termina el batido y comienza la incorporación cuidadosa de la harina.</p>
            <p className="leading-7"><strong>La harina no se amasa:</strong> se integra suavemente y de forma envolvente.</p>
            <p className="leading-7"><strong>La práctica no consiste en memorizar un tiempo:</strong> consiste en reconocer el estado de la mezcla y actuar en consecuencia.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
