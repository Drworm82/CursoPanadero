import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyTwoPage() {
  const { locale = 'es' } = useRouter();
  const isEn = locale === 'en';
  return (
    <CourseShell
      eyebrow={isEn ? "Lesson 32" : "Lección 32"}
      title={isEn ? "Brioche: fat, sugar, and fermentation" : "Brioche: grasa, azúcar y fermentación"}
      backHref={isEn ? "/en/modulo-4" : "/modulo-4"}
      backLabel="Back to module"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">A lesson that requires distinguishing the material's route</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Class 27 of the material documents a Brioche recipe.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Class 27 explicitly identifies the preparation as BRIOCHE and states its objective as understanding a dough rich in fat and sugar and carrying out prolonged fermentation under refrigeration.
            This lesson can therefore study the Brioche formula and procedure directly and compare them with other documented enriched doughs.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Brioche: documented formula and procedure</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-semibold text-amber-900">Formula</p><p className="mt-2 leading-7 text-amber-950">500 g flour, 25 g milk, 20 g fresh yeast, 10 g salt, 50 g sugar, 250 g butter, and 250 g egg.</p></div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="font-semibold text-stone-900">Process</p><p className="mt-2 leading-7 text-stone-700">The dough rests for 12 hours in the refrigerator; it is then punched down, divided into 65 g portions, shaped as shown in the demonstration, fermented, brushed, and baked at 180 °C for approximately 25 minutes.</p></div>
          </div>
          <p className="mt-5 leading-7 text-stone-700">The source says to mix the dry ingredients, add egg and milk, work until a smooth dough forms, incorporate softened butter, and knead until the dough releases from the table and no longer sticks to the fingers.</p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">The central idea</p>
          <h2 className="mt-2 text-2xl font-semibold">The source does allow us to study fat, sugar, and fermentation in other doughs.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            The Brioche recipe contains 250 g butter and 250 g egg per 500 g flour, in addition to sugar and milk.
            Conchas, garlic bread, and pulque bread provide comparisons with other enriched doughs.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">What is actually documented</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Pulque bread</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Egg + sugar + butter + yeast</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La receta contiene 7 huevos, 250 g de azúcar moscabado, 500 g de harina, 300 g de mantequilla
                fundida y 15 g de levadura fresca, además de 150 ml de pulque. Después de mezclar, la preparación
                fermenta hasta duplicar su tamaño antes de pasar al molde y al horno.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Conchas</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">An enriched dough with two fermentations</h3>
              <p className="mt-3 leading-7 text-stone-700">
                The recipe uses 550 g flour, 130 g sugar, 200 g egg, and 80 g butter.
                Después de incorporar el agua hasta obtener una masa suave y lisa, fermenta por 1 hora, se poncha,
                se porciona y fermenta de nuevo por 1 hora.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Garlic bread</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Sugar + butter + oil</h3>
              <p className="mt-3 leading-7 text-amber-950">
                The recipe contains 70 g sugar, 50 g butter, and 20 ml olive oil per 500 g flour.
                La masa se amasa hasta quedar suave y homogénea, fermenta hasta duplicar su volumen, se poncha,
                se forma y vuelve a fermentar.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Where does refrigeration appear?</h2>
          <p className="mt-4 leading-7 text-stone-700">
            La fuente sí documenta refrigeración en otras masas, pero no la presenta como una fermentación prolongada
            de brioche. En el croissant, la masa fermenta 45 minutos, se poncha y se refrigera 20 minutos antes del
            empaste. En el pan danés, la masa fermenta 30 minutos, se poncha, se extiende y se refrigera antes del
            empaste y las vueltas.
          </p>
          <div className="mt-5 rounded-2xl bg-stone-100 p-5">
            <p className="font-semibold text-stone-900">Important distinction</p>
            <p className="mt-2 leading-7 text-stone-700">
              La presencia de refrigeración en estas recetas no permite afirmar, a partir de esta fuente, que exista
              una técnica general de “fermentación prolongada en refrigeración” para masas enriquecidas.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">What should you observe?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. The quantity is not the same in every recipe</p>
              <p className="mt-2 leading-7 text-amber-950">
                Conchas, pan de ajo y pan de pulque incorporan azúcar y grasa, pero sus cantidades y demás
                ingredientes son diferentes.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Fermentation is described through concrete signals and times</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente utiliza tanto tiempos definidos —por ejemplo, 1 hora en cada fermentación de las conchas—
                como señales de volumen, como “hasta que duplique su tamaño” en el pan de pulque y el pan de ajo.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Refrigerating does not automatically mean fermenting for longer</p>
              <p className="mt-2 leading-7 text-stone-700">
                En las recetas documentadas, la refrigeración aparece como una etapa concreta dentro del manejo del
                croissant y del pan danés. La fuente no explica una teoría general de fermentación en frío.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Distinguish the Brioche recipe from the other enriched doughs</p>
              <p className="mt-2 leading-7 text-stone-700">
                The Brioche recipe is explicitly identified in Class 27; the other preparations remain comparisons and are not renamed as Brioche.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comparison practice</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Compare Brioche formula and handling</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Compara la receta de Brioche con conchas, pan de ajo y pan de pulque. Registra harina, azúcar, huevo, mantequilla
            u otra grasa, líquido adicional, levadura y etapas de fermentación. Después identifica qué elementos son
            específicos de cada receta. Marca como “no documentado” únicamente aquello que la fuente no proporcione.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Source boundary</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">The Brioche recipe is documented.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Class 27 provides the recipe, quantities, and procedure. Shaping is referred to the class demonstration.
            El objetivo de la clase menciona un fermentado prolongado en refrigeración y la receta indica 12 horas
            de reposo en refrigerador; la fuente no desarrolla una explicación teórica adicional sobre ese manejo.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Guided activity</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Do, observe, and record</h2>
          <p className="mt-2 leading-7 text-stone-600">Before looking at the procedure, predict which stages will be especially important in a dough with butter and sugar. Then compare your prediction with the documented sequence.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Check your learning</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explain the sequence</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. What happens before the softened butter is incorporated?</p>
            <p>2. How long is the refrigerated rest specified by the source?</p>
            <p>3. What operations follow the rest and occur before baking?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">At the end</p>
          <h2 className="mt-2 text-2xl font-semibold">What you should take away from this lesson</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>Las masas enriquecidas del curso sí están documentadas:</strong> conchas, pan de ajo y pan de
              pulque muestran distintas combinaciones de azúcar, huevo y grasa.
            </p>
            <p className="leading-7">
              <strong>La fermentación forma parte de esas recetas:</strong> aparece mediante tiempos concretos o
              mediante el aumento de volumen indicado por la fuente.
            </p>
            <p className="leading-7">
              <strong>La refrigeración también aparece:</strong> el croissant y el pan danés la incorporan en etapas
              concretas de su proceso.
            </p>
            <p className="leading-7">
              <strong>Brioche está documentado:</strong> the source provides the formula, refrigerated rest, portioning, fermentation, brushing, and baking; shaping is referred to the demonstration.
              The lesson does not turn comparisons with other doughs into a recipe or theory that the source does not develop.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Source note</p>
          <p className="mt-2 leading-7 text-stone-700">
            Los datos de composición y procedimiento proceden de las recetas de pan de pulque, conchas, pan de ajo,
            croissant y pan danés en data/recetas.js. La organización comparativa de esta lección sigue la ruta del
            Módulo 4 y es organización pedagógica del curso. La búsqueda del repositorio no encontró contenido
            específico de brioche.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Next lesson</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Bagels and pita: format changes the process</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección deberá comprobar primero qué información existe realmente sobre bagels y pita antes
            de atribuirles procedimientos o técnicas específicas.
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
