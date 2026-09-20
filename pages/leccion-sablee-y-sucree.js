import CourseShell from '../components/course/CourseShell';

const preparations = [
  {
    title: 'Pasta sablée',
    role: 'DEMO',
    description: 'Primera aplicación del método de arenado. La fuente la presenta como demostración.',
    href: '/receta-pasta-sablee',
  },
  {
    title: 'Pasta sucrée',
    role: 'Práctica',
    description: 'Misma familia de masas, con una formulación diferente para que puedas comparar.',
    href: '/receta-pasta-sucree',
  },
];

export default function LessonEightPage() {
  return (
    <CourseShell eyebrow="Lección 8" title="Sablée y sucrée" backHref="/modulo-2" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Antes de empezar</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">La arenilla no es un paso cualquiera</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En la lección anterior vimos que una masa friable busca mantener el gluten lo más aislado posible.
            Ahora vas a ver cómo se consigue desde el primer contacto entre la harina y la grasa.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Qué debes ver</p>
          <h2 className="mt-2 text-2xl font-semibold">De harina y mantequilla a arenilla</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La harina y la mantequilla se trabajan juntas en seco hasta que ya no parecen una mezcla de harina con trozos de mantequilla,
            sino una textura semejante a arena. La fuente explica que en ese momento la harina queda atrapada entre pequeños grumos o láminas de grasa.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-amber-700">1 · Al principio</p>
            <p className="mt-3 leading-7 text-stone-700">
              Busca harina seca y fragmentos visibles de mantequilla.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-amber-700">2 · Durante el arenado</p>
            <p className="mt-3 leading-7 text-stone-700">
              Busca que la mantequilla se distribuya y que la mezcla adopte una textura de arenilla.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-amber-700">3 · Antes de enfriar</p>
            <p className="mt-3 leading-7 text-stone-700">
              La mezcla ya debe poder continuar con los ingredientes restantes sin convertirse en una masa amasada.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Por qué queremos esa arenilla?</h2>
          <div className="mt-5 space-y-5 text-stone-700">
            <p className="leading-7">
              La fuente explica que la mantequilla forma una película alrededor de pequeñas partículas de harina.
              Así se limita el contacto de la harina con el agua durante la elaboración.
            </p>
            <p className="leading-7">
              Por eso aquí no buscamos desarrollar una red de gluten como en una masa de pan.
              Buscamos que la harina permanezca lo más aislada posible para conseguir una textura friable.
            </p>
            <p className="leading-7">
              Después del arenado se incorporan los demás ingredientes y se mezcla solamente hasta integrar.
              No se amasa la pasta.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">El frío también trabaja</p>
          <p className="mt-3 text-lg leading-8 text-amber-950">
            Una vez obtenida la pasta, el reposo en refrigeración permite que la grasa se solidifique y que el gluten que pudiera haberse desarrollado durante la mezcla pierda fuerza.
            Esto ayuda a extender la pasta y conservar la forma antes de hornearla.
          </p>
        </section>

        <section>
          <div className="mb-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Práctica</p>
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">Dos pastas para comparar</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {preparations.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-stone-900">{item.title}</h3>
                  <span className="text-sm text-stone-400">{item.role}</span>
                </div>
                <p className="mt-3 leading-7 text-stone-600">{item.description}</p>
                <span className="mt-5 inline-block text-sm font-medium text-stone-700 group-hover:text-amber-800">Abrir preparación →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La arenilla:</strong> es la señal visual de que la grasa se ha distribuido entre la harina.</p>
            <p className="leading-7"><strong>El objetivo:</strong> limitar el desarrollo del gluten para conseguir una masa friable.</p>
            <p className="leading-7"><strong>El límite:</strong> después de incorporar los ingredientes restantes, se mezcla solo hasta integrar; no se amasa.</p>
            <p className="leading-7"><strong>El frío:</strong> ayuda a estabilizar la grasa y a que la pasta conserve mejor la forma.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
