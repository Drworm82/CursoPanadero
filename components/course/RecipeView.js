import CourseShell from './CourseShell';

const observationPrompts = [
  'Antes de seguir, mira la mezcla: ¿qué cambió respecto al paso anterior?',
  'Fíjate en la textura. ¿La mezcla se ve más uniforme, más aireada o más líquida?',
  'Detente un momento y compara lo que ves con lo que esperabas obtener.',
];

export default function RecipeView({ recipe, ingredients, steps }) {
  return (
    <CourseShell
      eyebrow="Preparación"
      title={recipe.title}
      description={recipe.source_objective}
      backHref="/leccion-primer-panque-acremado"
      backLabel="Volver a la lección"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-300">Antes de empezar</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-100">
            No empieces leyendo todos los pasos como una lista que debes memorizar.
            Trabaja un paso, observa qué ocurrió y después continúa.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
          <aside className="space-y-5">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ficha</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4"><dt className="text-stone-500">Dificultad</dt><dd>{recipe.difficulty || '—'}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-stone-500">Tiempo</dt><dd>{recipe.source_time || '—'}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-stone-500">Rendimiento</dt><dd className="text-right">{recipe.source_yield || '—'}</dd></div>
              </dl>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Equipo</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Para esta preparación piensa primero en el equipo básico de una cocina doméstica.
                No necesitas empezar con equipo profesional.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-stone-700">
                <li>• Báscula</li>
                <li>• Bowl y utensilios de mezcla</li>
                <li>• Molde de panqué/rosca según la preparación</li>
                <li>• Horno</li>
                <li>• Rejilla para enfriar</li>
              </ul>
            </div>
          </aside>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-stone-900">Ingredientes</h2>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              {ingredients.map((item) => (
                <div key={item.id} className="grid grid-cols-[minmax(0,1fr)_auto_auto] gap-3 border-b border-stone-100 px-5 py-3 text-sm last:border-0">
                  <span>{item.name}{item.notes ? ` — ${item.notes}` : ''}</span>
                  <span className="text-right">{item.quantity ?? ''}</span>
                  <span className="min-w-12 text-stone-500">{item.unit || ''}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section>
          <div className="mb-5">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Paso a paso</p>
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">Trabaja y observa</h2>
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => (
              <li key={step.id} className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    {step.title && <h3 className="font-semibold text-stone-900">{step.title}</h3>}
                    <p className="mt-1 leading-7 text-stone-700">{step.instruction}</p>

                    {(step.time_text || step.temperature_text) && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.time_text && <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">Tiempo: {step.time_text}</span>}
                        {step.temperature_text && <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">Temperatura: {step.temperature_text}</span>}
                      </div>
                    )}

                    <div className="mt-5 rounded-xl bg-amber-50 p-4">
                      <p className="text-sm font-medium text-amber-900">Observa</p>
                      <p className="mt-1 text-sm leading-6 text-amber-950">
                        {step.observation || observationPrompts[index % observationPrompts.length]}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Al terminar</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Antes de pasar a la siguiente preparación</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-600">
            Quédate con una observación concreta: ¿qué viste cambiar durante la mezcla y qué viste cambiar durante el horneado?
            Esa observación será más útil que memorizar la receta.
          </p>
        </section>

        <a href="/modulo-1" className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white">
          Volver al módulo
        </a>
      </div>
    </CourseShell>
  );
}
