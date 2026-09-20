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

  'panque-platano-streusel-canela': [
    {
      observation: 'Pon atención a los secos después de cernirlos: busca una mezcla suelta y sin grumos, con la canela distribuida.',
      phenomenon: 'El cernido separa grumos y ayuda a repartir la harina, la sal, el polvo para hornear y la canela.',
      importance: 'Así los ingredientes secos pueden incorporarse de manera más uniforme a la mezcla húmeda.',
    },
    {
      observation: 'Pon atención a la mezcla de aceite, plátano, azúcar, huevo y vainilla: debe quedar homogénea y sin grumos, como indica la receta.',
      phenomenon: 'Aquí la grasa principal es aceite, que ya está en estado líquido. No necesitamos batir mantequilla con azúcar para formar una estructura de acremado.',
      importance: 'Esta es la diferencia que debes empezar a reconocer: estamos haciendo una masa batida pesada con una técnica distinta a la de acremado.',
      chibi: 'En la rosca anterior trabajaste mantequilla y azúcar para acremar. Aquí la grasa ya está líquida, así que el procedimiento parte de otra estructura.',
    },
    {
      observation: 'Al comparar esta preparación con la rosca anterior, pon atención a la textura que buscas después de que el panqué se enfríe: debe conservar una sensación húmeda y suave.',
      phenomenon: 'El aceite permanece líquido a temperatura ambiente, mientras que la mantequilla contiene grasa, agua y sólidos lácteos y cambia de estado al enfriarse.',
      importance: 'En este panqué elegimos aceite porque buscamos una miga húmeda y suave y una sensación que se conserve después del enfriado. La mantequilla también aporta grasa, pero produciría un comportamiento diferente y además aporta su propio sabor.',
      chibi: 'No se trata de que una grasa sea “mejor” que la otra. Se elige la materia grasa según el resultado que queremos obtener.',
    },
    {
      observation: 'Al mezclar el licuado con los secos, pon atención a cómo desaparecen poco a poco los rastros de harina y a cuándo la mezcla queda integrada. Después fíjate en cómo quedan repartidas las nueces y las pasitas.',
      phenomenon: 'En cuanto la harina recibe líquido y trabajo mecánico, sus proteínas pueden empezar a formar gluten. Las nueces y las pasitas se incorporan después como ingredientes sólidos.',
      importance: 'Por eso la receta indica mezclar de manera envolvente y no sobre batir: queremos integrar la harina y repartir los sólidos sin desarrollar una estructura excesiva.',
      chibi: 'La palabra clave aquí es “integrar”. Una vez que ya no ves harina seca, seguir trabajando la mezcla no significa necesariamente mejorarla.',
    },
    {
      observation: 'Antes de hornear, pon atención a cómo queda distribuido el streusel sobre la superficie.',
      phenomenon: 'El streusel se prepara formando una arenilla con mantequilla fría, azúcar, harina y canela. Durante el horneado esa mezcla se transforma y toma color.',
      importance: 'La capa de streusel aporta una textura y un acabado diferentes a la masa del panqué.',
    },
    {
      observation: 'Durante el horneado, pon atención al volumen, al color de la superficie y a cómo cambia la estructura de la masa.',
      phenomenon: 'El calor transforma la mezcla: se expanden gases y vapor, actúa el polvo para hornear y la estructura termina fijándose.',
      importance: 'El resultado del horno depende de la estructura que construiste antes de hornear y de las condiciones de cocción indicadas por la receta.',
    },
    {
      observation: 'Al enfriar y desmoldar, pon atención a la firmeza de la pieza y a cómo se mantiene la estructura al manipularla.',
      phenomenon: 'La estructura se estabiliza al bajar la temperatura y la pieza deja de estar tan frágil como cuando acaba de salir del horno.',
      importance: 'El enfriado forma parte del resultado final: permite que la pieza se estabilice antes de manipularla y desmoldarla.',
    },
    {
      observation: 'Al preparar el streusel, pon atención a que la mantequilla fría se distribuya con los secos formando una arenilla, no una masa lisa.',
      phenomenon: 'La mantequilla fría se mantiene en pequeños fragmentos entre los ingredientes secos mientras se trabaja la mezcla.',
      importance: 'Esa estructura es la que permite obtener el acabado arenoso y crujiente característico del streusel después del horneado.',
    },
  ],

  'panque-citricos': [
    ['El acremado ya es reconocible', 'Volviste a trabajar mantequilla y azúcar, pero ahora la señal ya no debería ser desconocida: buscas una mezcla más pálida, suave y esponjosa porque el batido ha modificado su textura e incorporado aire.'],
    ['Los huevos se incorporan progresivamente', 'Cada huevo aporta una fase acuosa a una mezcla basada en grasa. Esperar a que se integre antes de agregar el siguiente ayuda a mantener una mezcla uniforme.'],
    ['La harina cambia la preparación', 'Al entrar en contacto con líquido y trabajo mecánico, la harina puede empezar a formar gluten. Por eso se incorpora sin trabajar de más: queremos una masa batida pesada, no una estructura de pan.'],
    ['El jugo entra al final', 'Los jugos aportan líquido y la receta los incorpora después de los secos, con un aumento breve de velocidad para integrarlos. Esto permite observar que el orden de incorporación también forma parte de la técnica.'],
    ['El horno se aprende observándolo', 'El crecimiento, el color y la fijación de la estructura ocurren durante la cocción. La temperatura y el tiempo de la receta son una referencia, pero el resultado también se reconoce por lo que ves en la pieza.'],
    ['El glaseado también se decide por textura', 'El azúcar glass recibe los jugos poco a poco hasta obtener una textura semilíquida. La consistencia final determina cómo se extiende y permanece sobre el panqué.'],
  ],
  'marmoleado-intenso-cafe': [
    {
      observation: 'Pon atención a la mantequilla después de incorporar el azúcar moscabado y la miel: busca una crema más suave, esponjosa y untuosa que al inicio.',
      phenomenon: 'El batido modifica la estructura de la mantequilla y favorece la incorporación de aire. El azúcar aporta partículas sólidas que participan en ese trabajo mecánico y la miel se incorpora poco a poco, como indica la receta.',
      importance: 'La receta busca explícitamente llegar a una crema suave y untuosa y continuar batiendo hasta esponjar. Esa textura es la señal que debes reconocer antes de seguir.',
      chibi: 'Ya viste el acremado en la rosca. Aquí la señal importante es la misma idea: no te guíes solamente por el tiempo; aprende a reconocer el cambio de textura.',
    },
    {
      observation: 'Pon atención a la mezcla después de cada huevo: fíjate en que se integre antes de agregar el siguiente.',
      phenomenon: 'El huevo aporta una fase acuosa a una mezcla cuya base es grasa. Al incorporarlo progresivamente, el batido ayuda a mantener una mezcla uniforme.',
      importance: 'Por eso los huevos se agregan uno a uno. El objetivo es que cada adición se integre antes de introducir la siguiente.',
    },
    {
      observation: 'Pon atención a los dos grupos que vas a preparar: la leche con vainilla debe quedar lista y los secos deben quedar cernidos y sin grumos.',
      phenomenon: 'La leche aporta la fase líquida que se incorporará después, mientras que el cernido ayuda a distribuir la harina y el polvo para hornear.',
      importance: 'Tener ambas partes preparadas permite incorporarlas de forma intercalada sin detener el proceso para preparar ingredientes a mitad de la mezcla.',
    },
    {
      observation: 'Pon atención a la textura mientras alternas la leche y los secos. Busca el momento en que todo queda integrado y detén el batido.',
      phenomenon: 'La harina entra en contacto con líquido y trabajo mecánico, por lo que sus proteínas pueden empezar a formar gluten.',
      importance: 'La receta indica expresamente no sobre batir. En esta masa buscamos integrar los ingredientes y conservar una textura adecuada, no desarrollar una red de gluten como en un pan.',
      chibi: 'Ya conoces esta señal del panqué de plátano: una vez integrada la harina, seguir trabajando no significa mejorar la masa.',
    },
    {
      observation: 'Después de dividir la mezcla, comprueba que las dos partes tengan una textura semejante antes de modificar una de ellas.',
      phenomenon: 'Dividir la masa crea dos preparaciones que después se combinarán en el mismo panqué: una permanece como vainilla y la otra recibe el café.',
      importance: 'Si las dos partes parten de una textura semejante, el marmoleado puede distribuirse sin que una mezcla sea mucho más pesada o fluida que la otra.',
    },
    {
      observation: 'Pon atención a la mezcla de café: disuelve el café instantáneo en la leche y agrega solamente la cantidad necesaria para mantener una textura parecida a la mezcla de vainilla.',
      phenomenon: 'La leche aporta líquido a la preparación de café. La receta indica que no es necesario utilizar toda la cantidad marcada porque la cantidad necesaria depende de la textura que se busca.',
      importance: 'Aquí aparece una idea importante: una cantidad escrita en la receta no siempre significa que debas utilizarla toda si el propio procedimiento indica ajustar según la textura.',
      chibi: 'No estás cambiando la receta al azar. Estás siguiendo un criterio que la propia receta establece: agregar la cantidad necesaria para igualar texturas.',
    },
    {
      observation: 'Pon atención a cómo colocas las dos mezclas en el molde y a la profundidad de los movimientos del palillo. Busca vetas visibles, no una mezcla completamente unificada.',
      phenomenon: 'Las dos masas permanecen diferentes y el palillo las atraviesa para generar el patrón marmoleado.',
      importance: 'El objetivo del movimiento no es mezclar las dos masas por completo, sino crear el dibujo sin perder la separación entre vainilla y café.',
    },
    {
      observation: 'Durante el horneado, pon atención al volumen, al color de la superficie y a cómo se fija la estructura del panqué.',
      phenomenon: 'El calor provoca expansión de gases y vapor, actúa el polvo para hornear y transforma progresivamente la mezcla hasta fijar su estructura.',
      importance: 'El horno transforma la estructura que construiste durante el mezclado. El resultado que observas es consecuencia de ambas etapas.',
    },
    {
      observation: 'Al enfriar y desmoldar, pon atención a la firmeza de la pieza y al dibujo del marmoleado antes de cortarla.',
      phenomenon: 'Al bajar la temperatura, la estructura del panqué se estabiliza y la grasa se vuelve más firme.',
      importance: 'El enfriado permite manipular la pieza sin comprometer su estructura y comprobar el resultado final del marmoleado.',
    },
  ]
};

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
              {(recipeClosingGuides[recipe.slug] || []).map(([title, text]) => (
                <div key={title} className="rounded-xl bg-stone-50 p-4">
                  <p className="font-medium text-stone-900">{title}</p>
                  <p className="mt-1 leading-7">{text}</p>
                </div>
              ))}
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
