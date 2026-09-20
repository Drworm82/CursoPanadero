import CourseShell from '../components/course/CourseShell';

export default function LessonThirtyTwoPage() {
  return (
    <CourseShell
      eyebrow="Lección 32"
      title="Brioche: grasa, azúcar y fermentación"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Una lección que exige distinguir la ruta del material</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            El programa propone brioche, pero la fuente disponible no contiene una receta de brioche.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La búsqueda del material del curso no encuentra “brioche” ni una receta identificada como tal.
            Por eso esta lección no inventa una fórmula ni un procedimiento. En su lugar, utiliza las masas
            enriquecidas que sí están documentadas para precisar qué podemos aprender de ellas y qué información
            todavía falta para estudiar brioche de manera específica.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">La fuente sí permite estudiar grasa, azúcar y fermentación en otras masas.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            Las conchas, el pan de ajo y el pan de pulque incorporan azúcar y grasa y pasan por fermentación.
            El pan danés añade además huevo, mantequilla, leche y un empaste con margarina. Estas recetas permiten
            observar combinaciones concretas sin convertirlas en una definición técnica de brioche.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Lo que sí está documentado</h2>

          <div className="mt-6 space-y-4">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Pan de pulque</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Huevo + azúcar + mantequilla + levadura</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La receta contiene 7 huevos, 250 g de azúcar moscabado, 500 g de harina, 300 g de mantequilla
                fundida y 15 g de levadura fresca, además de 150 ml de pulque. Después de mezclar, la preparación
                fermenta hasta duplicar su tamaño antes de pasar al molde y al horno.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">Conchas</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Una masa enriquecida con dos fermentaciones</h3>
              <p className="mt-3 leading-7 text-stone-700">
                La receta utiliza 550 g de harina, 130 g de azúcar, 200 g de huevo y 80 g de mantequilla.
                Después de incorporar el agua hasta obtener una masa suave y lisa, fermenta por 1 hora, se poncha,
                se porciona y fermenta de nuevo por 1 hora.
              </p>
            </article>

            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Pan de ajo</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Azúcar + mantequilla + aceite</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La receta contiene 70 g de azúcar, 50 g de mantequilla y 20 ml de aceite de oliva por 500 g de harina.
                La masa se amasa hasta quedar suave y homogénea, fermenta hasta duplicar su volumen, se poncha,
                se forma y vuelve a fermentar.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Dónde aparece la refrigeración?</h2>
          <p className="mt-4 leading-7 text-stone-700">
            La fuente sí documenta refrigeración en otras masas, pero no la presenta como una fermentación prolongada
            de brioche. En el croissant, la masa fermenta 45 minutos, se poncha y se refrigera 20 minutos antes del
            empaste. En el pan danés, la masa fermenta 30 minutos, se poncha, se extiende y se refrigera antes del
            empaste y las vueltas.
          </p>
          <div className="mt-5 rounded-2xl bg-stone-100 p-5">
            <p className="font-semibold text-stone-900">Distinción importante</p>
            <p className="mt-2 leading-7 text-stone-700">
              La presencia de refrigeración en estas recetas no permite afirmar, a partir de esta fuente, que exista
              una técnica general de “fermentación prolongada en refrigeración” para masas enriquecidas.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. La cantidad no es la misma en todas las recetas</p>
              <p className="mt-2 leading-7 text-amber-950">
                Conchas, pan de ajo y pan de pulque incorporan azúcar y grasa, pero sus cantidades y demás
                ingredientes son diferentes.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. La fermentación se describe mediante señales y tiempos concretos</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente utiliza tanto tiempos definidos —por ejemplo, 1 hora en cada fermentación de las conchas—
                como señales de volumen, como “hasta que duplique su tamaño” en el pan de pulque y el pan de ajo.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Refrigerar no significa automáticamente fermentar durante más tiempo</p>
              <p className="mt-2 leading-7 text-stone-700">
                En las recetas documentadas, la refrigeración aparece como una etapa concreta dentro del manejo del
                croissant y del pan danés. La fuente no explica una teoría general de fermentación en frío.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. No atribuyas estas recetas a brioche</p>
              <p className="mt-2 leading-7 text-stone-700">
                Una masa enriquecida puede servir como comparación pedagógica, pero el material no identifica ninguna
                de estas preparaciones como brioche.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de comparación</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Construye el puente hacia brioche sin inventarlo</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Compara conchas, pan de ajo y pan de pulque. Para cada una registra harina, azúcar, huevo, mantequilla
            u otra grasa, líquido adicional, levadura y etapas de fermentación. Después escribe qué características
            necesitarías conocer para poder estudiar una receta de brioche: ingredientes, cantidades, orden de
            incorporación, tiempos de fermentación, formado, temperatura y horneado. Marca esas casillas como
            “no documentadas” cuando la fuente no las proporcione.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">Brioche no está documentado en el material disponible.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            No hay receta, cantidades, procedimiento ni explicación específica de brioche en los archivos consultados.
            Tampoco hay una explicación que establezca que la fermentación prolongada en refrigeración sea el principio
            característico de esta preparación. La lección conserva el título previsto por la ruta, pero deja explícito
            que su contenido específico queda pendiente de una fuente que lo documente.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
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
              <strong>Brioche queda sin documentar:</strong> no debemos convertir una comparación de masas enriquecidas
              en una receta o teoría de brioche que la fuente no contiene.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Los datos de composición y procedimiento proceden de las recetas de pan de pulque, conchas, pan de ajo,
            croissant y pan danés en data/recetas.js. La organización comparativa de esta lección sigue la ruta del
            Módulo 4 y es organización pedagógica del curso. La búsqueda del repositorio no encontró contenido
            específico de brioche.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Bagels y pita: el formato cambia el proceso</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección deberá comprobar primero qué información existe realmente sobre bagels y pita antes
            de atribuirles procedimientos o técnicas específicas.
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
