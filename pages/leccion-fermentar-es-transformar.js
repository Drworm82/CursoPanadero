import CourseShell from '../components/course/CourseShell';

export default function LessonTwentySixPage() {\n  const { locale = 'es' } = require('next/router').useRouter();
  return (
    <CourseShell
      eyebrow={locale === 'en' ? 'Lesson 26' : 'Lección 26'}
      title={locale === 'en' ? 'Fermentation Is Transformation' : 'Fermentar es transformar'}
      backHref={locale === 'en' ? '/en/modulo-4' : '/modulo-4'}
      backLabel={locale === 'en' ? 'Back to module' : 'Volver al módulo'}
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">La masa cambia con el tiempo</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La fermentación se puede leer observando la masa.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La fuente coloca la levadura antes de la fermentación y utiliza una señal visual concreta para decidir
            cuándo avanzar: el aumento de volumen. En esta lección vamos a concentrarnos en esa relación entre
            etapa, tiempo y cambio observable, sin añadir mecanismos que la fuente no desarrolla.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">No leas la fermentación solamente como un reloj.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            En el proceso de la fuente, la primera fermentación continúa hasta que la masa dobla su volumen.
            Después viene el ponchado, el porcionado y el formado. Las piezas vuelven a fermentar hasta doblar
            su volumen antes de continuar hacia el terminado y el horneado.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7">
            <p className="text-sm font-medium text-amber-800">Primera fermentación</p>
            <h3 className="mt-2 text-2xl font-semibold text-amber-950">La masa completa cambia</h3>
            <p className="mt-4 leading-7 text-amber-950">
              La fuente indica dejar la masa tapada en un lugar tibio hasta que doble su volumen.
              Esa es la señal que marca el paso siguiente: desgasificado o ponchado.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-medium text-stone-500">Segunda fermentación</p>
            <h3 className="mt-2 text-2xl font-semibold text-stone-900">Las piezas vuelven a cambiar</h3>
            <p className="mt-4 leading-7 text-stone-700">
              Después del porcionado y formado, las piezas se dejan nuevamente hasta que doblen su volumen.
              La fermentación aparece así en dos momentos distintos del mismo proceso.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Dos fermentaciones, dos momentos de observación</h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200">
            <div className="grid grid-cols-3 bg-stone-100 text-sm font-semibold text-stone-700">
              <div className="p-4">Momento</div>
              <div className="p-4">Qué ocurre en la secuencia</div>
              <div className="p-4">Señal indicada por la fuente</div>
            </div>
            <div className="grid grid-cols-3 border-t border-stone-200 text-sm text-stone-700">
              <div className="p-4 font-medium">Primera fermentación</div>
              <div className="p-4">La masa permanece tapada antes del ponchado.</div>
              <div className="p-4">Dobla su volumen.</div>
            </div>
            <div className="grid grid-cols-3 border-t border-stone-200 text-sm text-stone-700">
              <div className="p-4 font-medium">Segunda fermentación</div>
              <div className="p-4">Las piezas ya formadas permanecen antes del terminado y horneado.</div>
              <div className="p-4">Doblan su volumen.</div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-stone-500">
            La tabla organiza pedagógicamente la secuencia de la fuente; no añade una explicación del mecanismo de fermentación.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El volumen antes y después</p>
              <p className="mt-2 leading-7 text-amber-950">
                No te limites a mirar la masa una sola vez. Compara su volumen al comenzar la fermentación
                y cuando la fuente indica que está lista para avanzar.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Qué sucede entre las dos fermentaciones</p>
              <p className="mt-2 leading-7 text-stone-700">
                La primera fermentación no lleva directamente al horno. Después aparecen el ponchado,
                el porcionado y el formado. Solo entonces comienza la segunda fermentación.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. La señal frente al tiempo</p>
              <p className="mt-2 leading-7 text-stone-700">
                En la secuencia general de la fuente, la referencia para ambas fermentaciones es el doble de volumen,
                no una duración concreta. Algunas recetas del mismo archivo sí proporcionan tiempos específicos,
                por lo que conviene distinguir una referencia de volumen de un tiempo de receta.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. La fermentación no aparece aislada</p>
              <p className="mt-2 leading-7 text-stone-700">
                Observa su lugar dentro de la secuencia completa: amasado → primera fermentación → ponchado →
                porcionado → formado → segunda fermentación → terminado → horneado.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica de observación</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Marca el cambio</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Si preparas una masa fermentada, registra visualmente su volumen antes de la primera fermentación
            y vuelve a observarla cuando haya alcanzado el doble. Después del ponchado y formado, repite la
            observación con las piezas. La finalidad es entrenar la lectura del cambio, no memorizar un tiempo único.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Lo que todavía no estamos explicando</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">Primero aprendemos a reconocer la señal.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            La fuente disponible para este módulo indica la presencia de la levadura y las etapas de fermentación,
            pero no desarrolla aquí una explicación detallada del mecanismo biológico ni de los factores que controlan
            su velocidad. Por eso esta lección se limita a lo que sí podemos observar y documentar en la fuente.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y registra</h2>
          <p className="mt-2 leading-7 text-stone-600">Observa la masa antes y después del reposo. Registra qué cambió en volumen, textura o manejo y evita usar solamente el tiempo como descripción.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué cambio observable relacionas con la fermentación?</p>
            <p>2. ¿Qué diferencia hay entre dejar reposar una masa y reconocer que ya avanzó la fermentación?</p>
            <p>3. ¿Qué información aporta la receta para decidir cuándo continuar?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte de esta lección</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>La fuente usa el volumen como señal:</strong> la primera y la segunda fermentación avanzan hasta que la masa o las piezas doblan su volumen.
            </p>
            <p className="leading-7">
              <strong>Hay dos momentos de fermentación en la secuencia:</strong> uno antes del ponchado y formado, y otro después del formado.
            </p>
            <p className="leading-7">
              <strong>La fermentación forma parte de una secuencia:</strong> no aparece separada del amasado, porcionado, formado y horneado.
            </p>
            <p className="leading-7">
              <strong>Un tiempo de receta y una señal visual no son lo mismo:</strong> la secuencia general usa el doble de volumen como referencia, mientras que algunas recetas concretas especifican minutos u horas.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La secuencia de esta lección procede de «Proceso para elaborar una masa» en data/curso.js y de
            las recetas de panificación del mismo archivo de datos. La comparación entre primera y segunda
            fermentación, las preguntas de observación y la práctica son organización pedagógica del curso.
            No se presenta aquí como fuente una explicación biológica que el material disponible no desarrolla.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Siguiente lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Amasado, estructura y tensión</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            El siguiente paso es volver al amasado: qué condición de la masa pide la fuente y cómo se relaciona
            esa etapa con el resto del proceso.
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
