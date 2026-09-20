import CourseShell from './CourseShell';

const recipeObservationGuides = {
  'rosca-pina-colada': [
    {
      observation: 'Mira la mantequilla con el azúcar: debe verse más suave y trabajada que al inicio. Compara la textura antes de continuar.',
      interpretation: 'Este cambio es la primera señal de que el método de acremado está haciendo su trabajo.',
    },
    {
      observation: 'Al incorporar cada huevo, observa si la mezcla conserva una apariencia uniforme o cambia de textura.',
      interpretation: 'La forma en que incorporas los huevos modifica el estado de la mezcla; no avances automáticamente sin mirar qué ocurrió.',
      chibi: '¿Por qué uno por uno? Porque cada incorporación cambia la mezcla y permite trabajarla de forma progresiva.',
    },
    {
      observation: 'Después de agregar el coco tostado, observa cómo queda distribuido antes de incorporar los secos.',
      interpretation: 'Aquí todavía estás construyendo una mezcla homogénea sin perder de vista su textura.',
    },
    {
      observation: 'Después de cernir la harina y el polvo para hornear, compara la mezcla con el paso anterior.',
      interpretation: 'La incorporación de los secos empieza a cambiar la estructura de la preparación.',
    },
    {
      observation: 'Al alternar la leche de coco y los secos, observa cómo cambia la textura. En cuanto estén incorporados, detén el batido.',
      interpretation: 'El punto de dejar de trabajar la mezcla es parte de la técnica: no se trata de batir más, sino de llegar al estado necesario.',
      chibi: '¿Qué debes aprender aquí? A reconocer cuándo continuar trabajando y cuándo parar.',
    },
    {
      observation: 'Al incorporar la piña cristalizada con movimientos envolventes, fíjate en que quede distribuida sin trabajar nuevamente toda la masa con la batidora.',
      interpretation: 'La mezcla ya tiene la estructura que buscas; ahora el objetivo es incorporar el ingrediente sin sobretrabajarla.',
    },
    {
      observation: 'Antes de hornear, mira la preparación en el molde. Durante el horneado observa cómo cambia su volumen, color y estructura.',
      interpretation: 'El horno transforma la mezcla que acabas de preparar. La temperatura indicada en la receta forma parte del proceso, no es un dato independiente.',
    },
    {
      observation: 'Después de enfriar y desmoldar, observa la firmeza y la estructura de la rosca antes de cubrirla.',
      interpretation: 'El resultado final permite relacionar lo que hiciste durante la mezcla y la cocción con la estructura obtenida.',
    },
    {
      observation: 'Al preparar el glaseado, observa cómo cambia la consistencia al incorporar poco a poco la leche de coco.',
      interpretation: 'La cantidad de líquido determina la consistencia del glaseado; aquí debes aprender a reconocer el punto, no solamente repetir una cantidad.',
    },
    {
      observation: 'Al cubrir la rosca, observa cómo se comporta el glaseado sobre la superficie y cómo queda distribuido el coco.',
      interpretation: 'El acabado es la última etapa de la preparación y también sirve para evaluar la consistencia que obtuviste.',
    },
  ],
};

const lessonLinks = {
  'rosca-pina-colada': {
    href: '/leccion-primer-panque-acremado',
    label: 'Volver a la lección',
  },
};

const defaultEquipment = [
  'Báscula',
  'Bowl y utensilios de mezcla',
  'Molde según la preparación',
  'Horno',
  'Rejilla para enfriar',
];

export default function RecipeView({ recipe, ingredients, steps }) {
  const guides = recipeObservationGuides[recipe.slug] || [];
  const lessonLink = lessonLinks[recipe.slug];

  return (
    <CourseShell
      eyebrow="Preparación"
      title={recipe.title}
      description={recipe.source_objective}
      backHref={lessonLink?.href || '/modulo-1'}
      backLabel={lessonLink?.label || 'Volver al módulo'}
    >
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-3xl bg-stone-900 p-6 text-white shadow-sm sm:p-8">
          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Antes de empezar</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Haz, observa y continúa.</h2>
            <p className="mt-3 text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
              No necesitas memorizar todos los pasos. Trabaja uno, observa qué ocurrió y después continúa.
            </p>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2" aria-label="Datos de la preparación">
          <div className="rounded-xl bg-stone-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Dificultad</p>
            <p className="mt-1 font-medium text-stone-900">{recipe.difficulty || '—'}</p>
          </div>
          <div className="rounded-xl bg-stone-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Rendimiento</p>
            <p className="mt-1 font-medium text-stone-900">{recipe.source_yield || '—'}</p>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(240px,.7fr)_minmax(0,1.3fr)] lg:items-start">
          <aside className="space-y-5">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Equipo</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                Empieza con equipo doméstico. El curso irá introduciendo herramientas nuevas cuando realmente aporten algo a lo que estás aprendiendo.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Necesitas ahora</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                {defaultEquipment.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">Todavía no necesitas</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">Equipo profesional o especializado para comenzar esta preparación.</p>
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
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">Trabaja, observa e interpreta</h2>
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => {
              const guide = guides[index];
              const observation = guide?.observation || step.observation || 'Detente un momento y compara lo que ves con lo que esperabas obtener.';
              const interpretation = guide?.interpretation;

              return (
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
                        <p className="mt-1 text-sm leading-6 text-amber-950">{observation}</p>
                      </div>

                      {interpretation && (
                        <div className="mt-3 rounded-xl bg-stone-50 p-4">
                          <p className="text-sm font-medium text-stone-800">Interpreta</p>
                          <p className="mt-1 text-sm leading-6 text-stone-700">{interpretation}</p>
                        </div>
                      )}

                      {guide?.chibi && (
                        <div className="mt-3 rounded-xl border border-amber-200 bg-white p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">Chibi</p>
                          <p className="mt-1 text-sm leading-6 text-stone-700">{guide.chibi}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Al terminar</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Antes de pasar a la siguiente preparación</h2>
          <div className="mt-4 space-y-3 text-stone-600">
            <p className="leading-7">Quédate con tres observaciones concretas:</p>
            <ol className="list-decimal space-y-2 pl-5 leading-7">
              <li>¿Qué cambió al acremar la mantequilla con el azúcar?</li>
              <li>¿Qué cambió al incorporar los huevos y los secos?</li>
              <li>¿Qué observaste durante el horneado y qué resultado obtuviste?</li>
            </ol>
          </div>
        </section>

        <a
          href={lessonLink?.href || '/modulo-1'}
          className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white"
        >
          {lessonLink?.href ? 'Volver a la lección' : 'Volver al módulo'}
        </a>
      </div>
    </CourseShell>
  );
}
