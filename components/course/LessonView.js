import CourseShell from './CourseShell';

const lessonNotes = {
  1: {
    label: 'Antes de empezar',
    text: 'Esta primera lección te presenta la ruta. No necesitas dominar técnicas ni equipo especializado para comenzar; la idea es aprender a mirar lo que ocurre mientras trabajas.',
  },
  2: {
    label: 'Qué vas a observar',
    text: 'La receta introduce la técnica de acremado. Fíjate en el cambio de la mantequilla con el azúcar, en la incorporación de los huevos y en el momento en que dejamos de trabajar la mezcla.',
  },
  3: {
    label: 'Qué cambia',
    text: 'Aquí vas a trabajar una masa batida pesada con un método distinto al acremado. La comparación con la lección anterior es parte del aprendizaje.',
  },
  4: {
    label: 'Repetir no es hacer lo mismo',
    text: 'Vuelve a encontrarte con el acremado, pero ahora con criterio: observa sus etapas y presta especial atención a no sobrebatir al incorporar los secos.',
  },
  5: {
    label: 'El horno también enseña',
    text: 'La cocción no es un paso separado del proceso. Observa la temperatura y el tiempo indicados y compara el resultado con lo que esperabas.',
  },
  6: {
    label: 'Cierra el ciclo',
    text: 'Ahora reúne lo que has visto en las cuatro preparaciones. No necesitas memorizar una lista de respuestas: aquí encontrarás las relaciones que conviene llevarte antes de continuar.',
  },
};

const lessonActivities = {
  1: {
    title: 'Construye tu punto de partida',
    instruction: 'Antes de abrir una receta, escribe qué crees que cambia durante una masa batida pesada cuando se mezcla, se incorporan los ingredientes y se hornea.',
    check: [
      '¿Qué cambio de textura esperarías observar durante la mezcla?',
      '¿En qué momento crees que conviene dejar de trabajar la preparación?',
    ],
  },
  2: {
    title: 'Observa el acremado',
    instruction: 'Mientras elaboras la Rosca de Piña Colada, detente en cada etapa de la mezcla y anota qué cambia antes de pasar a la siguiente incorporación.',
    check: [
      '¿Cómo cambia la mantequilla con el azúcar glass durante el acremado?',
      '¿Qué observas cuando incorporas los huevos uno a uno?',
      '¿Qué señal te indica que ya no debes sobre batir al incorporar los secos?',
    ],
  },
  3: {
    title: 'Compara el método',
    instruction: 'Mientras elaboras el Panqué de Plátano y Streusel de Canela, compara el método con el acremado de la lección anterior. Concéntrate en el orden de incorporación y en la textura de la mezcla.',
    check: [
      '¿Qué diferencia observas entre trabajar con aceite y trabajar con mantequilla mediante acremado?',
      '¿Qué indica la fuente sobre la textura que debe tener el licuado de plátano?',
      '¿Qué debes evitar al unir el licuado con los secos?',
    ],
  },
  4: {
    title: 'Repite con intención',
    instruction: 'En el Marmoleado Intenso de Café, reconstruye mentalmente el acremado antes de ejecutarlo y comprueba si puedes reconocer cada etapa mientras trabajas.',
    check: [
      '¿Qué ocurre con la mantequilla, el azúcar moscabado y la miel antes de incorporar los huevos?',
      '¿Por qué se incorporan la leche y los secos de manera intercalada?',
      '¿Qué cambia cuando divides la mezcla y preparas la parte de café?',
    ],
  },
  5: {
    title: 'Lee el horno como parte del proceso',
    instruction: 'Durante el Panqué de Cítricos, registra la temperatura y el tiempo indicados y, al terminar, relaciona esas condiciones con el color, volumen y firmeza que observes.',
    check: [
      '¿Qué temperatura y tiempo indica la fuente para la cocción?',
      '¿Qué señales observas al retirar y desmoldar el panqué?',
      '¿Qué diferencia hay entre seguir un tiempo indicado y observar el resultado real de la cocción?',
    ],
  },
  6: {
    title: 'Explica qué cambió',
    instruction: 'Sin volver a mirar las recetas, compara las preparaciones del módulo y reconstruye las diferencias de método, textura y cocción que recuerdes.',
    check: [
      '¿Qué preparación utilizó un método distinto al acremado?',
      '¿Qué señales de textura te ayudaron a decidir cuándo continuar o detenerte?',
      '¿Qué relación puedes establecer entre el método utilizado y el resultado observado?',
    ],
  },
};

const recap = [
  {
    title: 'Mantequilla y acremado',
    text: 'En la Rosca, el Marmoleado y el Panqué de Cítricos trabajaste mantequilla con azúcar mediante acremado. El batido modifica la textura de la mantequilla y favorece la incorporación de aire. Por eso buscas una mezcla más suave, pálida y esponjosa.',
  },
  {
    title: 'Aceite y otra forma de trabajar',
    text: 'En el Panqué de Plátano utilizaste aceite. Al ser una grasa líquida, no se trabaja mediante el mismo acremado que la mantequilla. En esta preparación se busca una miga húmeda y suave, y la elección de la grasa cambia tanto el método como el resultado.',
  },
  {
    title: 'La harina y el momento de detenerse',
    text: 'En todas estas masas batidas pesadas, la harina se incorpora sin sobrebatir. Cuando recibe líquido y trabajo mecánico, sus proteínas pueden empezar a formar gluten. Aquí buscamos integrar la mezcla, no desarrollar una estructura de pan.',
  },
  {
    title: 'La textura también da información',
    text: 'Ya viste que la textura sirve para saber cuándo continuar y cuándo detenerse: una crema esponjosa durante el acremado, una mezcla integrada después de los secos y una consistencia concreta en el glaseado o en la mezcla de café.',
  },
  {
    title: 'El horno forma parte del proceso',
    text: 'El calor transforma la masa: se expanden gases y vapor, actúa el polvo para hornear y la estructura termina fijándose. El volumen, el color y la firmeza que observas al final son señales de lo que ocurrió durante la preparación y la cocción.',
  },
];

export default function LessonView({ lesson, recipes }) {
  const note = lessonNotes[lesson.sort_order] || lessonNotes[1];

  return (
    <CourseShell
      eyebrow={`Lección ${lesson.sort_order}`}
      title={lesson.title}
      description={lesson.objective}
      backHref="/modulo-1"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{note.label}</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-800">{note.text}</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Actividad guiada</p>
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">{lessonActivities[lesson.sort_order].title}</h2>
            <p className="mt-3 leading-7 text-stone-600">{lessonActivities[lesson.sort_order].instruction}</p>
          </div>

          <div className="rounded-2xl bg-stone-900 p-6 text-white sm:p-7">
            <p className="text-sm font-medium text-stone-300">Comprueba tu aprendizaje</p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-stone-100">
              {lessonActivities[lesson.sort_order].check.map((question) => (
                <li key={question}>• {question}</li>
              ))}
            </ul>
          </div>
        </section>

        {lesson.sort_order === 6 ? (
          <section>
            <div className="mb-5">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Lo que acabas de aprender</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Cuatro preparaciones, varias ideas conectadas</h2>
              <p className="mt-3 max-w-3xl leading-7 text-stone-600">
                Las cuatro preparaciones no estaban ahí solamente para practicar recetas distintas. Cada una añadió una pieza que ayuda a entender la siguiente.
              </p>
            </div>

            <div className="grid gap-3">
              {recap.map((item, index) => (
                <article key={item.title} className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-stone-900">{item.title}</h3>
                      <p className="mt-2 leading-7 text-stone-600">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-stone-900 p-6 text-white sm:p-7">
              <p className="text-sm font-medium text-stone-300">La idea que llevas al siguiente módulo</p>
              <p className="mt-3 text-xl leading-8 text-stone-100">
                No solo sabes seguir una receta: ya puedes empezar a relacionar una textura o un cambio en la masa con lo que acabas de hacer.
              </p>
            </div>
          </section>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
            <section>
              <div className="mb-4">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Práctica</p>
                <h2 className="mt-1 text-2xl font-semibold text-stone-900">Preparaciones</h2>
              </div>

              <div className="space-y-3">
                {recipes.length ? recipes.map((recipe) => (
                  <a
                    key={recipe.id}
                    href={`/receta-${recipe.slug}`}
                    className="group block rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-900">
                        →
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-stone-900">{recipe.title}</span>
                        {recipe.pedagogical_role && (
                          <span className="mt-1 block text-sm leading-6 text-stone-600">{recipe.pedagogical_role}</span>
                        )}
                      </span>
                      <span className="text-sm text-stone-400">Abrir</span>
                    </div>
                  </a>
                )) : (
                  <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 text-stone-600">
                    Esta lección no tiene una preparación asociada. Aquí el trabajo principal es observar, comparar y sacar conclusiones.
                  </div>
                )}
              </div>
            </section>

            <aside className="rounded-2xl bg-stone-900 p-6 text-white">
              <p className="text-sm font-medium text-stone-300">La idea central</p>
              <p className="mt-3 leading-7 text-stone-100">
                No memorices solamente los pasos. Intenta relacionar cada cambio que ves con lo que acabas de hacer.
              </p>
            </aside>
          </div>
        )}
      </div>
    </CourseShell>
  );
}
