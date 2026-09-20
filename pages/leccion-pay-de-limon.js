import CourseShell from '../components/course/CourseShell';

export default function LessonTenPage() {
  return (
    <CourseShell eyebrow="Lección 10" title="Pay de limón" backHref="/modulo-2" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ahora cambia el relleno</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">La misma familia de pasta, otra función</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En la tarta de frutas la pasta sablée terminó con crema pastelera y fruta.
            Aquí la fuente utiliza una <strong>pasta sucrée</strong> y la combina con una crema de limón y merengue suizo.
            El objetivo ya no es solo montar una tarta: ahora vamos a observar cómo cambian las preparaciones que rodean a la pasta.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · La base</p>
            <p className="mt-3 leading-7 text-stone-700">La pasta sucrée se lleva al molde y se cuece a ciegas hasta quedar bien dorada.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">2 · El relleno</p>
            <p className="mt-3 leading-7 text-stone-700">La crema de limón se cocina a baño María y después se incorpora la mantequilla.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · El acabado</p>
            <p className="mt-3 leading-7 text-stone-700">El merengue suizo se prepara aparte, se coloca sobre el pay y se dora con soplete.</p>
          </article>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">¿Qué debes observar?</p>
          <h2 className="mt-2 text-2xl font-semibold">Tres preparaciones, tres cambios de textura</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La pasta:</strong> después de la cocción debe quedar bien dorada y suficientemente firme para sostener el relleno.</p>
            <p className="leading-7"><strong>La crema:</strong> el baño María permite cocinar la mezcla de limón, huevo y azúcar mientras se controla el calentamiento.</p>
            <p className="leading-7"><strong>El merengue:</strong> las claras y el azúcar se calientan primero hasta 45 °C y después se baten hasta obtener una mezcla espesa y fría.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">La crema de limón</h2>
          <p className="mt-4 leading-7 text-stone-700">
            La fuente indica cocinar jugo de limón, azúcar y huevo a baño María. Una vez fría la preparación, se agrega la mantequilla y se mezcla.
            En otras palabras, el relleno se construye por cocción y después se termina con la incorporación de la grasa.
          </p>
          <div className="mt-5 rounded-2xl bg-amber-50 p-5">
            <p className="font-medium text-amber-900">Pon atención a esto</p>
            <p className="mt-2 leading-7 text-amber-950">
              No retires la crema del proceso simplemente porque “ya está caliente”. La fuente define la cocción a baño María como parte de la preparación y después indica enfriar antes de incorporar la mantequilla.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">El merengue suizo</h2>
          <p className="mt-4 leading-7 text-stone-700">
            La fuente lo presenta como DEMO. Las claras y el azúcar se colocan sobre un baño María y se llevan a <strong>45 °C</strong>.
            Después pasan a la batidora hasta que el merengue esté espeso y frío. La indicación final es utilizarlo inmediatamente.
          </p>
          <p className="mt-4 leading-7 text-stone-700">
            Aquí aparece una herramienta nueva respecto a las preparaciones anteriores: el <strong>soplete</strong>, que se utiliza para dorar el merengue una vez colocado sobre el pay.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">La secuencia completa</p>
          <p className="mt-3 text-lg leading-8 text-amber-950">
            Pasta sucrée → cocción a ciegas → crema de limón → refrigeración → merengue suizo → decoración → soplete.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Preparación</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Pay de limón</h2>
          <p className="mt-2 leading-7 text-stone-600">
            La preparación utiliza pasta sucrée, crema de limón y merengue suizo.
          </p>
          <a href="/receta-pay-de-limon" className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">
            Abrir preparación →
          </a>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La pasta:</strong> una pasta friable puede ser la misma familia técnica aunque cambie la preparación concreta.</p>
            <p className="leading-7"><strong>La crema de limón:</strong> huevo, azúcar y limón se transforman mediante cocción a baño María y después se termina con mantequilla.</p>
            <p className="leading-7"><strong>El merengue suizo:</strong> primero se calienta la mezcla a 45 °C y después se bate hasta que esté espesa y fría.</p>
            <p className="leading-7"><strong>La herramienta nueva:</strong> el soplete entra porque ahora el acabado forma parte de la técnica que queremos practicar.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
