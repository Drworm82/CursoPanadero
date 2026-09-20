import CourseShell from './CourseShell';

const recipeObservationGuides = {
  'rosca-pina-colada': [
    {
      observation: 'Pon atención a la textura de la mantequilla con el azúcar: busca una mezcla más suave, cremosa y homogénea que al inicio.',
      phenomenon: 'Al batir, los cristales de azúcar rozan y fragmentan la estructura de la mantequilla mientras el batido favorece la incorporación de pequeñas burbujas de aire.',
      importance: 'Por eso la mezcla cambia de textura, puede verse más pálida y aumenta su volumen. Esas señales te indican que el acremado está ocurriendo.',
    },
    {
      observation: 'Pon atención a la apariencia de la mezcla después de cada huevo: fíjate si se mantiene uniforme y cómo cambia su textura.',
      phenomenon: 'El huevo aporta una cantidad importante de agua a una mezcla cuya base es grasa. Al incorporarlo progresivamente, la grasa y la fase acuosa pueden mantenerse integradas durante el batido.',
      importance: 'Por eso los huevos se incorporan uno a uno y se espera a que cada adición se integre antes de continuar.',
      chibi: '¿Por qué uno por uno? Porque no estamos agregando simplemente líquido: estamos incorporando una nueva fase a una mezcla basada en grasa.',
    },
    {
      observation: 'Pon atención a cómo queda distribuido el coco tostado en la mezcla antes de incorporar los secos.',
      phenomenon: 'El coco aporta partículas sólidas que deben repartirse por toda la mezcla.',
      importance: 'Una distribución uniforme ayuda a que el sabor y la textura del coco aparezcan a lo largo de la pieza y no queden concentrados en un solo lugar.',
    },
    {
      observation: 'Pon atención a los secos después de cernirlos: busca una mezcla suelta y sin grumos antes de incorporarlos.',
      phenomenon: 'El cernido separa los grumos y ayuda a distribuir los ingredientes secos entre sí.',
      importance: 'Así puedes incorporarlos de manera más uniforme y evitar que queden concentraciones de harina o polvo para hornear.',
    },
    {
      observation: 'Pon atención a la textura mientras alternas la leche de coco y los secos. Fíjate en el momento en que todo queda integrado y deja de batir.',
      phenomenon: 'Al entrar la harina en contacto con los líquidos y recibir trabajo mecánico, sus proteínas pueden formar gluten.',
      importance: 'En una masa batida pesada no buscamos desarrollar una red de gluten como en un pan. Por eso la harina se integra y el batido se detiene cuando la mezcla ya está unificada.',
      chibi: 'Aquí aparece una idea que volverá más adelante: en algunas preparaciones queremos desarrollar estructura y en otras queremos limitar ese desarrollo.',
    },
    {
      observation: 'Pon atención a la distribución de la piña cristalizada: debe quedar repartida en la masa mientras mantienes los movimientos envolventes.',
      phenomenon: 'La piña es un ingrediente sólido que se incorpora cuando la masa ya está formada.',
      importance: 'Los movimientos envolventes permiten repartirla sin volver a someter toda la masa al trabajo mecánico de la batidora.',
    },
    {
      observation: 'Pon atención durante el horneado al volumen, al cambio de color de la superficie y a cómo se va formando la estructura de la rosca.',
      phenomenon: 'El calor provoca cambios simultáneos en la masa: los gases se expanden, se produce vapor, actúan los agentes leudantes y la estructura de la masa se va fijando.',
      importance: 'Por eso el horno no solamente “cocina” la mezcla: transforma la estructura que construiste durante la preparación.',
    },
    {
      observation: 'Pon atención a la firmeza y a la estructura de la rosca después de enfriar y desmoldar, antes de cubrirla.',
      phenomenon: 'Al enfriarse, la estructura formada durante el horneado termina de estabilizarse y la grasa se vuelve más firme.',
      importance: 'Este es el momento de comprobar la estructura obtenida antes de añadir el glaseado.',
    },
    {
      observation: 'Pon atención a la consistencia del glaseado mientras agregas la leche de coco: debe quedar fluido pero consistente.',
      phenomenon: 'El azúcar glass se mezcla con una cantidad limitada de líquido; al aumentar el líquido, cambia la viscosidad de la mezcla.',
      importance: 'Por eso la leche de coco se incorpora poco a poco: buscas una consistencia concreta, no simplemente utilizar todo el líquido de una vez.',
    },
    {
      observation: 'Pon atención a cómo se extiende el glaseado sobre la rosca y a la distribución del coco sobre la cobertura.',
      phenomenon: 'La consistencia del glaseado determina cómo se desplaza y se queda sobre la superficie.',
      importance: 'El acabado te permite comprobar si alcanzaste la consistencia adecuada y si puedes distribuir la cobertura de manera uniforme.',
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
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">Trabaja, observa y entiende</h2>
          </div>

          <ol className="space-y-4">
            {steps.map((step, index) => {
              const guide = guides[index];
              const observation = guide?.observation || step.observation;

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

                      {guide?.phenomenon && (
                        <div className="mt-3 rounded-xl bg-stone-50 p-4">
                          <p className="text-sm font-medium text-stone-800">Qué está ocurriendo</p>
                          <p className="mt-1 text-sm leading-6 text-stone-700">{guide.phenomenon}</p>
                        </div>
                      )}

                      {guide?.importance && (
                        <div className="mt-3 rounded-xl border border-stone-200 bg-white p-4">
                          <p className="text-sm font-medium text-stone-800">¿Por qué importa?</p>
                          <p className="mt-1 text-sm leading-6 text-stone-700">{guide.importance}</p>
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
            <div className="space-y-3">
              <div className="rounded-xl bg-stone-50 p-4">
                <p className="font-medium text-stone-900">1. El acremado</p>
                <p className="mt-1 leading-7">
                  Los cristales de azúcar ayudan mecánicamente a trabajar la mantequilla durante el batido. Al mismo tiempo, el batido favorece la incorporación de pequeñas burbujas de aire. Por eso la mezcla se vuelve más cremosa, puede verse más pálida y aumenta su volumen.
                </p>
              </div>
              <div className="rounded-xl bg-stone-50 p-4">
                <p className="font-medium text-stone-900">2. La incorporación de huevos y harina</p>
                <p className="mt-1 leading-7">
                  Los huevos aportan una fase acuosa que debe integrarse progresivamente con la grasa. Después, al incorporar la harina, comienza a desarrollarse estructura y el trabajo mecánico puede favorecer la formación de gluten. En esta preparación queremos integrar la harina, no desarrollar una red de gluten como en un pan.
                </p>
              </div>
              <div className="rounded-xl bg-stone-50 p-4">
                <p className="font-medium text-stone-900">3. El horneado</p>
                <p className="mt-1 leading-7">
                  El calor transforma la masa: los gases y el vapor se expanden, actúan los agentes leudantes y la estructura se fija. Por eso puedes relacionar el volumen, el color y la firmeza finales con todo lo que ocurrió antes de meter la rosca al horno.
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
