import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 5,
  title: 'Pan mexicano: fórmulas, procesos y acabados',
  guiding_question: '¿Cómo cambian la fórmula, el proceso, el formado y el acabado entre las preparaciones mexicanas documentadas?',
  expected_result: 'Comparar las preparaciones mexicanas documentadas y explicar cómo sus ingredientes, proceso, formado y acabado construyen diferencias observables entre las piezas.'
};

const lessons = [
  ['35', 'Entrar al pan mexicano', 'Identifica qué productos mexicanos están realmente documentados y qué aspectos de su elaboración pueden compararse.', '/leccion-entrar-al-pan-mexicano', true],
  ['36', 'Conchas: una masa, dos preparaciones', 'Analiza la masa fermentada y la pasta de cobertura de las conchas como partes distintas del mismo producto.', '/leccion-conchas-una-masa-dos-preparaciones', true],
  ['37', 'Pan de pulque: otra ruta de fermentación', 'Reconoce la secuencia particular del pan de pulque y compara su fórmula con otras masas enriquecidas.', '/leccion-pan-de-pulque-otra-ruta-fermentacion', true],
  ['38', 'Garibaldis: estructura, acabado e identidad', 'Observa cómo una preparación horneada se completa con mermelada y gragea blanca.', '/leccion-garibaldis-estructura-acabado-identidad', true],
  ['39', 'Comparar para reconocer', 'Integra conchas, pan de pulque y garibaldis y distingue qué cambia en ingredientes, proceso, formado y acabado.', '/leccion-comparar-para-reconocer', true],
];

export default function ModuleFivePage() {
  return (
    <CourseShell eyebrow="Módulo 5" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Pregunta guía</p>
            <p className="mt-3 text-lg leading-8 text-stone-800">{moduleInfo.guiding_question}</p>
          </section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Al terminar</p>
            <p className="mt-3 leading-7 text-stone-700">{moduleInfo.expected_result}</p>
          </section>
        </div>

        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">El siguiente cambio</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            En el módulo anterior trabajaste el proceso general de las masas fermentadas y comparaste distintas
            formas de incorporar ingredientes. Ahora vamos a observar cómo esas decisiones aparecen en productos
            mexicanos que sí están documentados en el material disponible.
          </p>
        </section>

        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Cómo estudiar este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Comprende → Haz → Observa → Explica</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Estudia cada pieza desde lo que la fuente permite observar. Identifica la fórmula y la secuencia,
            realiza o reconstruye las operaciones documentadas, observa el resultado y explica qué diferencia
            encuentras frente a las otras preparaciones. El módulo estudia las preparaciones desde la fórmula, el proceso, el formado y el acabado. No añade información histórica o cultural cuando la fuente no la desarrolla.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <div className="grid gap-3 md:grid-cols-4">
            <div><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Identifica ingredientes, operaciones y objetivo de la pieza.</p></div>
            <div><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Ejecuta o reconstruye la secuencia documentada.</p></div>
            <div><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Registra diferencias visibles de estructura y acabado.</p></div>
            <div><p className="font-semibold text-stone-900">4. Explica</p><p className="mt-1 text-sm leading-6 text-stone-600">Compara las decisiones de cada receta.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Integración del módulo</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Construye una comparación final</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Haz una tabla con Conchas, Pan de pulque y Garibaldis. Para cada pieza registra ingredientes que
            distinguen la fórmula, etapas antes del horno, formado o preparación de la pieza y acabado.
            Después escribe dos diferencias que puedas demostrar directamente con las recetas.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">5 lecciones</span>
          </div>

          <div className="grid gap-3">
            {lessons.map(([number, title, description, href, active]) => (
              active ? (
                <a
                  key={number}
                  href={href}
                  className="flex items-center gap-4 rounded-2xl border border-amber-300 bg-white p-5 shadow-sm transition hover:border-amber-500 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">
                    {number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-stone-900">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                  </span>
                  <span className="shrink-0 text-sm font-medium text-amber-800">Abrir lección →</span>
                </a>
              ) : (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm opacity-70"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                    {number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold text-stone-900">{title}</span>
                    <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                  </span>
                  <span className="shrink-0 text-sm text-stone-400">En preparación</span>
                </div>
              )
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Cómo leer este módulo</p>
          <h2 className="mt-2 text-2xl font-semibold">Las diferencias también pueden observarse en el proceso.</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7">
              <strong>Conchas:</strong> una masa fermentada se combina con una pasta de cobertura que se coloca,
              marca y hornea junto con la pieza.
            </p>
            <p className="leading-7">
              <strong>Pan de pulque:</strong> la fuente presenta una fórmula con huevo, pulque, azúcar, harina,
              mantequilla y levadura, seguida de una fermentación antes del horneado.
            </p>
            <p className="leading-7">
              <strong>Garibaldis:</strong> una preparación con mantequilla, azúcar, yemas, mermelada, harina,
              polvo de hornear, leche y claras se termina, una vez fría, con mermelada y gragea blanca.
            </p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
