import CourseShell from '../components/course/CourseShell';

export default function LessonSevenPage() {
  return (
    <CourseShell eyebrow="Lección 7" title="Una masa que quiere lo contrario" backHref="/modulo-2" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Antes de empezar</p>
          <p className="mt-4 max-w-3xl text-xl leading-9 text-stone-800">
            Hasta ahora has trabajado masas en las que la mezcla de harina, líquido y trabajo mecánico podía desarrollar gluten.
            En una masa friable buscamos mantener las moléculas de gluten lo más aisladas posible.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">En una masa de pan</p>
            <p className="mt-3 leading-7 text-stone-700">
              El gluten se desarrolla para formar una estructura capaz de atrapar y contener las burbujas de CO₂.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">En una masa friable</p>
            <p className="mt-3 leading-7 text-stone-700">
              La fuente plantea el objetivo contrario: mantener las moléculas de gluten lo más aisladas posible para obtener una textura frágil y desmenuzable.
            </p>
          </article>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">¿Cómo se consigue?</p>
          <p className="mt-3 text-xl leading-8 text-stone-100">
            La grasa envuelve pequeñas partículas de harina y dificulta que entren en contacto con el agua.
            La fuente presenta dos métodos básicos: <strong>sablage o arenado</strong> y <strong>acremado</strong>.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">El método de arenado</h2>
          <div className="mt-5 space-y-5 text-stone-700">
            <p className="leading-7">
              La harina, la sal y la mantequilla se mezclan en seco hasta obtener una especie de arenilla.
              La ausencia de agua durante esta etapa evita que se forme y desarrolle gluten.
            </p>
            <p className="leading-7">
              Después se incorporan los ingredientes restantes y se mezclan solamente hasta integrar, sin amasar la pasta.
              Finalmente la masa reposa en refrigeración.
            </p>
            <p className="leading-7">
              El reposo permite que la grasa se solidifique y que el gluten desarrollado durante la mezcla pierda fuerza.
              Esto ayuda a extender la pasta y conservar la forma deseada antes de cocerla.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Qué debes empezar a reconocer</p>
          <p className="mt-3 leading-7 text-stone-700">
            En el módulo anterior aprendiste a detener el trabajo cuando una masa batida ya está integrada.
            Aquí el principio se vuelve más específico: <strong>la forma en que trabajas la harina determina qué tipo de textura puedes obtener.</strong>
          </p>
        </section>

        <div className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Al pasar a la siguiente preparación</p>
          <p className="mt-2 leading-7 text-amber-950">
            Ahora que sabes qué queremos evitar, podemos ver cómo el método de arenado produce una pasta concreta: la pasta sablée.
          </p>
        </div>
      </div>
    </CourseShell>
  );
}
