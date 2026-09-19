import CourseShell from './CourseShell';

export default function LessonView({ lesson, recipes }) {
  return (
    <CourseShell eyebrow={`Lección ${lesson.sort_order}`} title={lesson.title} description={lesson.objective} backHref="/modulo-1" backLabel="Volver al módulo">
      <div className="grid gap-6 lg:grid-cols-[1.4fr_.6fr]">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-stone-900">Preparaciones</h2>
          <div className="space-y-3">
            {recipes.length ? recipes.map(recipe => (
              <a key={recipe.id} href={`/receta-${recipe.slug}`} className="block rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-stone-900">{recipe.title}</h3>
                    {recipe.pedagogical_role && <p className="mt-1 text-sm text-stone-600">{recipe.pedagogical_role}</p>}
                  </div>
                  <span className="text-sm text-stone-400">Abrir</span>
                </div>
              </a>
            )) : (
              <div className="rounded-2xl border border-dashed border-stone-300 p-6 text-stone-600">
                Esta lección es de introducción/observación y no tiene una preparación asociada.
              </div>
            )}
          </div>
        </section>
        <aside className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">En esta lección</p>
          <p className="mt-2 text-sm leading-6 text-amber-950">
            Primero observa. Después ejecuta. La meta es aprender a interpretar lo que ocurre, no solamente seguir pasos.
          </p>
        </aside>
      </div>
    </CourseShell>
  );
}
