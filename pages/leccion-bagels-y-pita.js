import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyThreePage() {
  const { locale = 'es' } = useRouter();
  const isEn = locale === 'en';
  return (
    <CourseShell
      eyebrow={isEn ? "Lesson 33" : "Lección 33"}
      title={isEn ? "Bagels and pita: format changes the process" : "Bagels y pita: el formato cambia el proceso"}
      backHref={isEn ? "/en/modulo-4" : "/modulo-4"}
      backLabel="Back to module"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Two products documented in Class 27</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Bagels and Pita have formulas and procedures in the source.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Class 27 documents both products. Esta lección los compara a partir de sus ingredientes y secuencias,
            conservando los detalles que la fuente proporciona y sin completar con técnicas externas aquello que el texto remite a demostración.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">The central idea</p>
          <h2 className="mt-2 text-2xl font-semibold">La forma modifica la secuencia documentada: el bagel incorpora un pochado antes del horneado, mientras el Pita Bread se extiende y se hornea sobre charolas calientes.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La Clase 27 asigna procedimientos concretos a ambos productos. El bagel se porciona en bollos de 80 g, se forma,
            se pochea en agua hirviendo durante 15 segundos, se barniza, se termina y se hornea a 200 °C por 20 minutos.
            El Pita Bread se porciona en 50 g, se extiende a ½ cm, fermenta y se hornea a 220 °C sobre charolas calientes,
            sin dejar que tome color.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Data for the two preparations</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><p className="font-semibold text-amber-900">Bagels</p><p className="mt-2 leading-7 text-amber-950">1 kg flour, 25 g salt, 30 g yeast, 500 g water, 14 g sugar, 80 g butter, and 80 ml egg whites. The topping contains sesame, onion, garlic, Parmesan, and molasses for the poaching water.</p></article>
            <article className="rounded-2xl border border-stone-200 bg-white p-6"><p className="font-semibold text-stone-900">Pita Bread</p><p className="mt-2 leading-7 text-stone-700">500 g flour, 300 g water, 20 g olive oil, 8 g salt, 15 g yeast, and 100 g semolina for rolling out.</p></article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">What we can retain from the general process</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Before shaping</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Fermentation and punching down</h3>
              <p className="mt-3 leading-7 text-amber-950">
                El proceso general del curso indica una primera fermentación y después el desgasificado o ponchado
                antes del porcionado y formado.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">During shaping</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">The piece becomes more than just dough</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La fuente coloca el formado antes de la segunda fermentación. Esa secuencia permite estudiar el
                formato como parte del proceso, pero no especifica cómo formar un bagel o una pita.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">After shaping</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Second fermentation and baking</h3>
              <p className="mt-3 leading-7 text-amber-950">
                El proceso general continúa con una segunda fermentación, terminado y acabados, horneado y enfriado.
                La fuente no indica si bagels o pita siguen exactamente esta secuencia ni qué modificaciones tendrían.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">What should you observe?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. The bagel has an operation that the pita does not present</p>
              <p className="mt-2 leading-7 text-amber-950">
                The Bagels recipe specifies poaching them in boiling water for 15 seconds before baking.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. The format changes</p>
              <p className="mt-2 leading-7 text-stone-700">
                The bagel is shaped before poaching; the pita is rolled into a ½ cm round after portioning and resting the dough balls.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Baking also changes</p>
              <p className="mt-2 leading-7 text-stone-700">
                The bagel is poached and then baked; the pita is placed on hot trays and baked without allowing it to take on color.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Source-reading practice</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Distinguish data, question, and absence</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Haz una tabla con dos columnas, Bagels y Pita Bread. Para cada uno registra fórmula, porcionado, formado, fermentación,
            cocción y acabado. Después señala la operación que distingue más claramente cada secuencia.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Source boundary</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">Class 27 documents both products.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La fuente proporciona las fórmulas y procedimientos de ambos productos. El texto remite el formado de los Bagels
            al procedimiento de clase y no desarrolla una explicación teórica adicional sobre por qué el pochado produce
            el resultado final; esta lección conserva esos límites sin añadirlos.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Guided activity</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Do, observe, and record</h2>
          <p className="mt-2 leading-7 text-stone-600">Compare the two sequences and reconstruct their stages in parallel. Mark what they share and where they diverge.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Check your learning</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explain the sequence</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. What fermentation stages appear in each preparation?</p>
            <p>2. How does shaping differ between the two pieces?</p>
            <p>3. What specific information about the bagel or pita process is documented, and what is not?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">At the end</p>
          <h2 className="mt-2 text-2xl font-semibold">What you should take away from this lesson</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El proceso general sí está disponible:</strong> la fuente describe fermentación, ponchado,
              porcionado, formado, segunda fermentación, horneado y enfriado.
            </p>
            <p className="leading-7">
              <strong>Los productos específicos sí están documentados:</strong> la Clase 27 contiene recetas de Bagels y Pita Bread.
            </p>
            <p className="leading-7">
              <strong>La comparación puede hacerse con la fuente:</strong> both products have documented formulas and sequences, and differ in operations such as bagel poaching and baking pita on hot trays.
            </p>
            <p className="leading-7">
              <strong>La ausencia también es información:</strong> saber qué no está en la fuente evita convertir
              conocimiento externo en contenido atribuido al curso.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Source note</p>
          <p className="mt-2 leading-7 text-stone-700">
            Las recetas de Bagels y Pita Bread proceden de la Clase 27 del PDF. La secuencia general de panificación y la organización comparativa de esta lección sirven como estructura pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Next lesson</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Fougasse and flavored breads</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección deberá comprobar primero qué productos, ingredientes y técnicas aparecen realmente
            en la fuente antes de desarrollar el tema.
          </p>
          <a
            href="/modulo-4"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Back to Module 4 →
          </a>
        </section>
      </div>
    </CourseShell>
  );
}
