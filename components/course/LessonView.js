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
    text: 'Compara las preparaciones y describe qué cambió entre métodos, mezclado y cocción. La meta es poder explicar lo que observaste con tus propias palabras.',
  },
};

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
      </div>
    </CourseShell>
  );
}
