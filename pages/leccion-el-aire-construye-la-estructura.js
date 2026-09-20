import CourseShell from '../components/course/CourseShell';

export default function LessonTwelvePage() {
  return (
    <CourseShell eyebrow="Lección 12" title="El aire también construye la estructura" backHref="/modulo-3" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Antes de empezar</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">Ahora queremos que la mezcla gane volumen</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En los módulos anteriores viste cómo la grasa, la harina, el gluten y el método de mezcla cambian una preparación.
            En las <strong>masas batidas ligeras</strong> aparece otro principio: el volumen se obtiene mediante la incorporación de aire al batir el huevo.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">El huevo funciona como agente aireante</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente define estas masas como preparaciones elaboradas a partir de huevo que, mediante un proceso técnico de incorporación de aire —el batido—,
            incrementan su volumen debido principalmente a las proteínas de la clara.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · Batir</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Crear volumen</h3>
            <p className="mt-3 leading-7 text-stone-700">
              El batido incorpora aire y la preparación aumenta de volumen.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">2 · Incorporar</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">No destruir el aire</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La harina se incorpora suavemente y de forma envolvente, fuera de la batidora.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · Cocer</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Fijar la estructura</h3>
            <p className="mt-3 leading-7 text-stone-700">
              El horno transforma esa estructura aireada en un bizcocho que puede sostenerse.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>
          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">Durante el batido</p>
              <p className="mt-2 leading-7 text-amber-950">
                Mira cómo aumenta el volumen y cómo cambia la consistencia de la mezcla. En el pastel de tres leches de la fuente,
                los huevos y el azúcar se baten hasta alcanzar <strong>punto listón</strong>.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">Cuando entra la harina</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente indica incorporarla suavemente y en forma envolvente, fuera de la batidora. Aquí la observación importante es el cambio de mezcla:
                la harina debe integrarse sin convertir la operación en un batido agresivo.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">Durante el horneado</p>
              <p className="mt-2 leading-7 text-stone-700">
                El horno debe estar previamente calentado. La fuente advierte que los hornos pueden comportarse de manera diferente aunque indiquen la misma temperatura
                y recomienda tener un termómetro para conocer mejor la temperatura real de cada horno.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">La proporción también forma parte de la técnica</h2>
          <p className="mt-4 leading-7 text-stone-700">
            La fuente propone como referencia para una <strong>genoise</strong>: <strong>1 huevo, 30 g de harina y 30 g de azúcar</strong>.
            No la vamos a tratar como una fórmula aislada; sirve para empezar a reconocer la relación entre los componentes de este tipo de bizcocho.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-stone-100 p-5 text-center"><p className="text-sm text-stone-500">Huevo</p><p className="mt-1 text-2xl font-semibold">1</p></div>
            <div className="rounded-2xl bg-stone-100 p-5 text-center"><p className="text-sm text-stone-500">Harina</p><p className="mt-1 text-2xl font-semibold">30 g</p></div>
            <div className="rounded-2xl bg-stone-100 p-5 text-center"><p className="text-sm text-stone-500">Azúcar</p><p className="mt-1 text-2xl font-semibold">30 g</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Una diferencia importante respecto al Módulo 1</p>
          <p className="mt-3 text-lg leading-8 text-amber-950">
            En una masa batida pesada, el método de mezcla de la grasa puede ser parte importante de cómo construimos la preparación.
            Aquí el batido del huevo es el mecanismo principal de incorporación de aire. Por eso la forma de mezclar después del batido importa tanto.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>El volumen:</strong> en estas masas se obtiene principalmente mediante el aire incorporado al batir el huevo.</p>
            <p className="leading-7"><strong>El huevo:</strong> sus proteínas, principalmente las de la clara, participan en la formación de la estructura aireada.</p>
            <p className="leading-7"><strong>La harina:</strong> se incorpora suavemente y de forma envolvente para no tratar la mezcla como una masa que necesita amasado.</p>
            <p className="leading-7"><strong>El horno:</strong> su temperatura real importa; la fuente recomienda conocer el comportamiento del horno mediante un termómetro.</p>
            <p className="leading-7"><strong>La proporción:</strong> la referencia de genoise es 1 huevo + 30 g de harina + 30 g de azúcar.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
