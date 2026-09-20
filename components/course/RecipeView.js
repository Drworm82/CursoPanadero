import CourseShell from './CourseShell';

const recipeObservationGuides = {
  'rosca-pina-colada': [
    {
      observation: 'Pon atención a la textura de la mantequilla con el azúcar: busca una mezcla más suave y homogénea que al inicio.',
      interpretation: 'Este cambio es la primera señal de que el método de acremado está haciendo su trabajo.',
    },
    {
      observation: 'Pon atención a la apariencia de la mezcla después de cada huevo: fíjate si se mantiene uniforme y cómo cambia su textura.',
      interpretation: 'La forma en que incorporas los huevos modifica el estado de la mezcla; no avances automáticamente sin mirar qué ocurrió.',
      chibi: '¿Por qué uno por uno? Porque cada incorporación cambia la mezcla y permite trabajarla de forma progresiva.',
    },
    {
      observation: 'Pon atención a cómo queda distribuido el coco tostado en la mezcla antes de incorporar los secos.',
      interpretation: 'Aquí todavía estás construyendo una mezcla homogénea sin perder de vista su textura.',
    },
    {
      observation: 'Pon atención a los secos después de cernirlos: busca una mezcla suelta y sin grumos antes de incorporarlos.',
      interpretation: 'La incorporación de los secos empieza a cambiar la estructura de la preparación.',
    },
    {
      observation: 'Pon atención a la textura mientras alternas la leche de coco y los secos. Fíjate en el momento en que todo queda integrado y deja de batir.',
      interpretation: 'El punto de dejar de trabajar la mezcla es parte de la técnica: no se trata de batir más, sino de llegar al estado necesario.',
      chibi: '¿Qué debes aprender aquí? A reconocer cuándo continuar trabajando y cuándo parar.',
    },
    {
      observation: 'Pon atención a la distribución de la piña cristalizada: debe quedar repartida en la masa mientras mantienes los movimientos envolventes.',
      interpretation: 'La mezcla ya tiene la estructura que buscas; ahora el objetivo es incorporar el ingrediente sin sobretrabajarla.',
    },
    {
      observation: 'Pon atención durante el horneado al volumen, al cambio de color de la superficie y a cómo se va formando la estructura de la rosca.',
      interpretation: 'El horno transforma la mezcla que acabas de preparar. La temperatura indicada en la receta forma parte del proceso, no es un dato independiente.',
    },
    {
      observation: 'Pon atención a la firmeza y a la estructura de la rosca después de enfriar y desmoldar, antes de cubrirla.',
      interpretation: 'El resultado final permite relacionar lo que hiciste durante la mezcla y la cocción con la estructura obtenida.',
    },
    {
      observation: 'Pon atención a la consistencia del glaseado mientras agregas la leche de coco: debe quedar fluido pero consistente.',
      interpretation: 'La cantidad de líquido determina la consistencia del glaseado; aquí debes aprender a reconocer el punto, no solamente repetir una cantidad.',
    },
    {
      observation: 'Pon atención a cómo se extiende el glaseado sobre la rosca y a la distribución del coco sobre la cobertura.',
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
              const observation = guide?.observation || step.observation;
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

                      {observation && (
                        <div className="mt-5 rounded-xl bg-amber-50 p-4">
                          <p className="text-sm font-medium text-amber-900">Observa</p>
                          <p className="mt-1 text-sm leading-6 text-amber-950">{observation}</p>
                        </div>
                      )}

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
          <div className="mt-4 space-y-4 text-stone-600">
            <p className="leading-7">
              No necesitas responder un examen. Aquí tienes las ideas que conviene llevarte de esta preparación.
            </p>
            <div className="space-y-3">
              <div className="rounded-xl bg-stone-50 p-4">
                <p className="font-medium text-stone-900">1. Al acremar la mantequilla con el azúcar</p>
                <p className="mt-1 leading-7">
                  La mezcla se vuelve más suave y trabajada. Ese cambio es parte del método de acremado.
                </p>
              </div>
              <div className="rounded-xl bg-stone-50 p-4">
                <p className="font-medium text-stone-900">2. Al incorporar los huevos y los secos</p>
                <p className="mt-1 leading-7">
                  La mezcla cambia progresivamente de textura y empieza a tomar la estructura de la masa. Por eso es importante incorporar los ingredientes según el procedimiento y dejar de trabajarla cuando ya están integrados.
                </p>
              </div>
              <div className="rounded-xl bg-stone-50 p-4">
                <p className="font-medium text-stone-900">3. Durante el horneado</p>
                <p className="mt-1 leading-7">
                  La masa cambia de volumen, color y estructura hasta convertirse en una rosca horneada con una estructura firme después de enfriar.
                </p>
              </div>
            </div>
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
