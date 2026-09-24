import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyEightPage() {\n  const { locale = 'es' } = require('next/router').useRouter();
  return (
    <CourseShell
      eyebrow={locale === 'en' ? 'Lesson 28' : 'Lección 28'}
      title={locale === 'en' ? 'Baguette: Structure, Shaping, and Scoring' : 'Baguette: estructura, formado y greñado'}
      backHref={locale === 'en' ? '/en/modulo-4' : '/modulo-4'}
      backLabel={locale === 'en' ? 'Back to module' : 'Volver al módulo'}
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Una lección con una fuente limitada</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La baguette sí está documentada; el greñado específico no.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La Clase 24 del material documenta una Baguette Tradicional con ingredientes, procedimiento y horneado.
            La misma clase también incluye pan de centeno y chipá o pan de yuca. Esta lección se concentra en la
            baguette y conserva como límite únicamente aquello que la fuente no desarrolla de manera específica:
            la técnica detallada de greñado.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Una pieza formada sigue siendo parte de una secuencia.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            En la secuencia general de la fuente, después de la primera fermentación vienen el desgasificado
            o ponchado, el porcionado y el formado. Las piezas formadas pasan después a una segunda fermentación,
            seguida por terminado, horneado y enfriado. Esa estructura permite estudiar dónde encajaría una pieza
            como una baguette, La fuente no desarrolla aquí una técnica detallada de greñado específica de baguette; por ello esta lección no añade una técnica externa como si fuera parte del material fuente.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Lo que sí está documentado</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm font-medium text-amber-800">Después de fermentar</p>
              <h3 className="mt-2 text-xl font-semibold text-amber-950">Ponchar y porcionar</h3>
              <p className="mt-3 leading-7 text-amber-950">
                La fuente coloca el desgasificado o ponchado después de la primera fermentación y luego divide
                la masa en piezas.
              </p>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium text-stone-500">La pieza toma forma</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">Formado</h3>
              <p className="mt-3 leading-7 text-stone-700">
                El formado aparece como una etapa propia. Después de él, las piezas formadas pasan a la segunda fermentación.
              </p>
            </article>
          </div>

          <div className="mt-4 rounded-2xl bg-stone-100 p-6">
            <p className="font-semibold text-stone-900">Después del formado</p>
            <p className="mt-2 leading-7 text-stone-700">
              La fuente indica dejar las piezas formadas hasta que doblen su volumen. Después aparecen el terminado
              y los acabados, el horneado y el enfriado.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Baguette Tradicional: lo que indica la fuente</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-semibold text-amber-900">Fórmula</p><p className="mt-2 leading-7 text-amber-950">La receta declara 500 g de harina, 150 g de poolish, 325 ml de agua, 12 g de levadura fresca, 14 g de sal y 5 g de mejorante para pan. El poolish de mise en place se prepara con 1 kg de harina, 1 litro de agua y 5 g de levadura, y reposa al menos 8 horas.</p></div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="font-semibold text-stone-900">Proceso</p><p className="mt-2 leading-7 text-stone-700">La secuencia documentada pasa por un reposo inicial de harina y agua, incorporación de levadura, poolish, mejorante y sal, amasado, reposo hasta duplicar volumen, porcionado de 450 g, formado según demostración, cortes transversales con navaja, reposo adicional, barnizado con agua y horneado con vapor.</p></div>
          </div>
          <p className="mt-5 leading-7 text-stone-700">La fuente indica vapor durante la cocción y un horneado a 220 °C durante 18 minutos. El formado se realiza de acuerdo con la demostración y el texto sí indica hacer cortes transversales con una navaja.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Otras preparaciones de la Clase 24</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Pan de centeno y Chipá</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La misma clase documenta otras dos preparaciones. Se incorporan aquí para cerrar la cobertura de la clase completa, sin atribuirles técnicas que la fuente no desarrolla.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="text-xl font-semibold text-amber-950">Pan de centeno</h3>
              <p className="mt-3 text-sm leading-6 text-amber-950">Harina de fuerza 550 g, harina de centeno 220 g, sal 10 g, levadura fresca 50 g, agua 450 ml y mejorante para pan 10 g.</p>
              <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-amber-950">
                <li>Preparar una masa base con levadura, una cuarta parte de la harina de fuerza y un poco de agua; reposar 20 minutos.</li>
                <li>Mezclar el resto de las harinas, el mejorante y el agua; reposar 5 minutos.</li>
                <li>Añadir la masa base y amasar con fuerza hasta obtener una masa elástica.</li>
                <li>Agregar finalmente la sal y terminar de amasar.</li>
                <li>Dejar reposar hasta doblar tamaño, quitar el gas y hacer una segunda fermentación.</li>
                <li>Cortar en bollos de 60 g y bolear.</li>
                <li>Hornear a 220 °C durante 20 minutos y enfriar.</li>
              </ol>
            </article>
            <article className="rounded-2xl border border-stone-200 bg-white p-5">
              <h3 className="text-xl font-semibold text-stone-900">Chipá o Pao de Quijo o Pan de Yuca</h3>
              <p className="mt-3 text-sm leading-6 text-stone-700">Fécula de mandioca o yuca 500 g, leche 100 ml, agua c/s, huevo 3 piezas, sal 10 g, mantequilla 200 g y queso tipo Chihuahua 500 g.</p>
              <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-stone-700">
                <li>Hacer un volcán con la fécula y agregar al centro sal y leche.</li>
                <li>Mezclar los ingredientes.</li>
                <li>Incorporar la mantequilla y amasar hasta que quede lisa y homogénea.</li>
                <li>Incorporar por último los huevos.</li>
                <li>Agregar el queso rallado y trabajar hasta incorporarlo.</li>
                <li>Realizar bolitas de aproximadamente 20 g y ponerlas en una charola aceitada.</li>
                <li>Hornear a 200 °C durante 15 minutos.</li>
              </ol>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. La transformación de masa a pieza</p>
              <p className="mt-2 leading-7 text-amber-950">
                La fuente separa el porcionado del formado. Observa que primero se divide la masa y después se trabaja cada pieza.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. La segunda fermentación ocurre después del formado</p>
              <p className="mt-2 leading-7 text-stone-700">
                No confundas la primera fermentación de la masa completa con la segunda fermentación de las piezas ya formadas.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El volumen vuelve a ser una señal</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente utiliza nuevamente el doble de volumen como referencia para decidir cuándo avanzar después del formado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. No atribuyas al material una técnica que no contiene</p>
              <p className="mt-2 leading-7 text-stone-700">
                En el material consultado no aparecen instrucciones sobre cortes, profundidad, ángulo, número de cortes
                o herramienta de greñado para baguette.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de secuencia</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Ubica la pieza dentro del proceso</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Sin añadir una técnica externa, escribe la secuencia que la fuente sí permite establecer:
            primera fermentación → ponchado → porcionado → formado → segunda fermentación → terminado →
            horneado → enfriado. Después señala en qué punto necesitarías una fuente específica para estudiar
            el greñado de una baguette.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Límite de esta fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">La baguette sí está desarrollada en el material disponible; el límite está únicamente en la descripción detallada del greñado.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La fuente sí proporciona una receta de Baguette Tradicional. Lo que no desarrolla con detalle son los cortes de
            greñado: no especifica profundidad, ángulo, número de cortes ni herramienta. Esos detalles quedan fuera
            de esta lección para no completar la fuente con información externa.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Reconstruye el proceso de la Baguette Tradicional antes de volver a mirar la receta: mezclado, amasado,
            fermentación, ponchado, porcionado, formado, segunda fermentación, barnizado, vapor y horneado. Marca
            qué parte del formado está descrita en texto y qué parte queda remitida a la demostración.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué ingredientes y cantidades declara la receta de Baguette Tradicional?</p>
            <p>2. ¿En qué orden aparecen fermentación, ponchado, porcionado, formado y segunda fermentación?</p>
            <p>3. ¿Qué detalles del greñado no desarrolla la fuente y, por tanto, no debes inventar?</p>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Reconstruye el proceso del baguette antes de volver a mirar la receta: poolish, mezcla, reposo, porcionado, formado, corte y horneado. Marca qué operaciones están documentadas y cuáles solo se mencionan como demostración.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué función cumple el poolish dentro de la secuencia documentada?</p>
            <p>2. ¿En qué momento aparece el formado y el corte?</p>
            <p>3. ¿Qué detalle específico sobre el greñado no desarrolla la fuente y, por tanto, no debes inventar?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>El formado es una etapa propia:</strong> ocurre después del ponchado y del porcionado.
            </p>
            <p className="leading-7">
              <strong>La segunda fermentación pertenece a las piezas:</strong> la fuente indica dejar las piezas formadas hasta que doblen su volumen.
            </p>
            <p className="leading-7">
              <strong>El proceso continúa:</strong> después de la segunda fermentación aparecen terminado, horneado y enfriado.
            </p>
            <p className="leading-7">
              <strong>El greñado detallado queda pendiente:</strong> la receta existe, pero la fuente no explica profundidad, ángulo, número de cortes ni herramienta.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            El contenido documentado procede de «Proceso para elaborar una masa» en data/curso.js, especialmente
            las etapas de desgasificado, porcionado, formado, segunda fermentación, terminado, horneado y enfriado.
            El contenido específico de Baguette Tradicional procede de la Clase 24 del PDF. La fuente remite el formado a la demostración y no desarrolla en texto la técnica detallada de greñado. La organización
            de esta lección y su práctica son organización pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Focaccia: otra forma de entender la hidratación</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La siguiente lección cambia el foco hacia otra familia de pan y hacia la comparación de masas con diferentes características.
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
