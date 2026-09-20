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


  'panque-citricos': [
    {
      observation: 'Pon atención a la mantequilla con el azúcar: busca que la mezcla se vea más pálida, suave y esponjosa antes de agregar los huevos.',
      phenomenon: 'Durante el batido, los cristales de azúcar rozan y trabajan la mantequilla, mientras el batido favorece la incorporación de pequeñas burbujas de aire.',
      importance: 'Esta es la señal del acremado que ya conoces. No se trata solamente de mezclar dos ingredientes: estás modificando la textura y la cantidad de aire de la mezcla.',
    },
    {
      observation: 'Después de cada huevo, pon atención a que la mezcla vuelva a verse uniforme antes de agregar el siguiente.',
      phenomenon: 'El huevo aporta una fase acuosa a una preparación cuya base es grasa. La incorporación progresiva ayuda a mantener ambas fases integradas durante el batido.',
      importance: 'Por eso la receta indica esperar a que un huevo se integre antes de agregar el siguiente. La textura de la mezcla te indica cuándo puedes continuar.',
    },
    {
      observation: 'Pon atención a los secos y a las ralladuras: la harina debe quedar sin grumos y las ralladuras deben quedar distribuidas al incorporarlas.',
      phenomenon: 'El cernido separa grumos de harina y ayuda a repartir el polvo de hornear. Las ralladuras aportan partículas aromáticas que deben distribuirse por la masa.',
      importance: 'Preparar y distribuir bien estos ingredientes ayuda a que la mezcla final sea uniforme.',
    },
    {
      observation: 'Al incorporar la harina, fíjate en cómo cambia la textura de la mezcla y detén el trabajo mecánico cuando los ingredientes estén integrados.',
      phenomenon: 'Cuando la harina recibe líquido y trabajo mecánico, sus proteínas pueden empezar a formar gluten.',
      importance: 'Ya has visto esta idea en las preparaciones anteriores: en una masa batida pesada no buscamos desarrollar una red de gluten como en un pan.',
      chibi: 'La receta te está enseñando a reconocer una señal: integrar no significa seguir batiendo indefinidamente.',
    },
    {
      observation: 'Al agregar los jugos al final, pon atención a cómo cambia la textura y a que la mezcla quede nuevamente uniforme después del aumento breve de velocidad.',
      phenomenon: 'Los jugos aportan líquido a una mezcla que ya contiene grasa, huevo y harina. La receta los incorpora al final y aumenta la velocidad durante medio minuto para favorecer su integración.',
      importance: 'Aquí puedes observar que el orden de incorporación no es arbitrario: cada ingrediente entra en un momento en el que la mezcla puede recibirlo y distribuirlo correctamente.',
    },
    {
      observation: 'Al llenar el molde, observa que la mezcla llegue aproximadamente a tres cuartas partes de su capacidad y quede distribuida de manera uniforme.',
      phenomenon: 'La masa todavía necesita espacio para aumentar de volumen durante el horneado.',
      importance: 'La cantidad de mezcla dentro del molde influye en el espacio disponible para que el panqué crezca y en la forma final de la pieza.',
    },
    {
      observation: 'Durante el horneado, pon atención a tres señales: cuánto aumenta el volumen, cómo cambia el color de la superficie y cuándo la pieza deja de verse húmeda.',
      phenomenon: 'El calor provoca expansión de gases y vapor, actúa el polvo para hornear y después la estructura de la masa se fija.',
      importance: 'Estas señales te permiten relacionar lo que ocurre dentro del horno con la estructura que construiste durante el mezclado.',
      chibi: 'Aquí el horno deja de ser una caja con una temperatura escrita: empieza a convertirse en algo que aprendes a observar.',
    },
    {
      observation: 'Al sacar el panqué y colocarlo en la rejilla, pon atención a cómo se mantiene la estructura al desmoldarlo.',
      phenomenon: 'Al salir del horno la pieza todavía está caliente y su estructura continúa estabilizándose mientras pierde temperatura.',
      importance: 'Por eso el enfriado y el desmolde forman parte del proceso y no son simplemente un paso posterior sin importancia.',
    },
    {
      observation: 'Al preparar el glaseado, fíjate en cómo cambia su consistencia a medida que agregas los jugos al azúcar glass. Busca una textura semilíquida que pueda cubrir la pieza.',
      phenomenon: 'El azúcar glass forma una mezcla cada vez más fluida a medida que recibe líquido. La cantidad de jugo determina la consistencia final.',
      importance: 'Aquí vuelves a trabajar con la textura como criterio: el objetivo no es solamente incorporar el jugo, sino alcanzar la consistencia indicada por la preparación.',
    },
    {
      observation: 'Pon atención a cómo queda el glaseado sobre la superficie del panqué: debe poder extenderse y cubrir la pieza sin quedar completamente líquido.',
      phenomenon: 'La viscosidad del glaseado determina cómo se desplaza y cuánto se mantiene sobre la superficie.',
      importance: 'El acabado final te permite comprobar si alcanzaste la consistencia adecuada.',
    },
  ],

const lessonLinks = {
  'rosca-pina-colada': {
    href: '/leccion-primer-panque-acremado',
    label: 'Volver a la lección',
  },
  'panque-platano-streusel-canela': {
    href: '/leccion-segunda-ruta-aceite',
    label: 'Volver a la lección',
  },
  'marmoleado-intenso-cafe': {
    href: '/leccion-repeticion-con-criterio',
    label: 'Volver a la lección',
  },
  'panque-citricos': {
    href: '/leccion-el-horno-tambien-es-parte',
    label: 'Volver a la lección',
  },
};

const recipeClosingGuides = {
  'rosca-pina-colada': [
    ['El acremado', 'Los cristales de azúcar ayudan mecánicamente a trabajar la mantequilla durante el batido. Al mismo tiempo, el batido favorece la incorporación de pequeñas burbujas de aire. Por eso la mezcla se vuelve más cremosa, puede verse más pálida y aumenta su volumen.'],
    ['La incorporación de huevos y harina', 'Los huevos aportan una fase acuosa que debe integrarse progresivamente con la grasa. Después, al incorporar la harina, comienza a desarrollarse estructura y el trabajo mecánico puede favorecer la formación de gluten. En esta preparación queremos integrar la harina, no desarrollar una red de gluten como en un pan.'],
    ['El horneado', 'El calor transforma la masa: los gases y el vapor se expanden, actúan los agentes leudantes y la estructura se fija. Por eso puedes relacionar el volumen, el color y la firmeza finales con todo lo que ocurrió antes de meter la rosca al horno.'],
  ],
  'panque-platano-streusel-canela': [
    ['Una masa batida sin acremado', 'A diferencia de la rosca anterior, aquí la grasa principal es aceite. No comenzamos batiendo mantequilla con azúcar, sino formando una mezcla homogénea con aceite, plátano, azúcar, huevo y vainilla.'],
    ['¿Por qué aceite y no mantequilla?', 'El aceite y la mantequilla aportan grasa, pero se comportan de manera diferente. El aceite permanece líquido a temperatura ambiente; la mantequilla contiene grasa, agua y sólidos lácteos y cambia de estado al enfriarse. En este panqué elegimos aceite porque buscamos una miga húmeda y suave y una sensación de suavidad que se conserve después del enfriado. La mantequilla no es “peor”: simplemente llevaría la preparación hacia otro resultado y además aportaría su propio sabor.'],
    ['Integrar sin sobre batir', 'Cuando los secos entran en contacto con los ingredientes húmedos, la harina puede empezar a formar gluten con el trabajo mecánico. Por eso la receta indica mezclar de manera envolvente y no sobre batir: buscamos integrar la mezcla, no desarrollar una estructura de pan.'],
    ['El streusel', 'La mantequilla fría se trabaja con harina, azúcar y canela hasta formar una arenilla. Sus pequeños fragmentos de grasa quedan separados entre los secos y, al hornearse, producen una cobertura con textura diferente a la del panqué.'],
    ['El horneado', 'El calor transforma tanto la masa como el streusel. El polvo para hornear contribuye al crecimiento, mientras la estructura de la masa se fija y la cobertura toma color y textura.'],
  ],
  'marmoleado-intenso-cafe': [
    ['Volver al acremado', 'En esta preparación volviste a utilizar mantequilla, azúcar y batido. La diferencia es que ahora ya puedes reconocer qué cambio de textura estás buscando: una crema suave, esponjosa y untuosa antes de continuar.'],
    ['Huevos y harina', 'Los huevos se incorporan uno a uno para mantener una mezcla uniforme. Después, la leche y los secos se incorporan de manera intercalada y sin sobre batir porque, una vez que la harina recibe líquido y trabajo mecánico, puede empezar a formar gluten.'],
    ['Igualar las dos mezclas', 'La parte de café recibe leche solamente en la cantidad necesaria para igualar su textura con la preparación de vainilla. Esto enseña que la textura también puede ser un criterio para decidir cuánto ingrediente incorporar cuando la propia receta permite ajustar.'],
    ['El marmoleado', 'Las dos mezclas se colocan de manera intercalada y el palillo genera las vetas. No buscamos unirlas completamente: buscamos conservar las dos preparaciones dentro de una misma pieza.'],
    ['El horneado', 'El polvo para hornear y el calor contribuyen al crecimiento y después la estructura se fija. El volumen, el color y la firmeza finales son el resultado de todo el proceso anterior.'],
  ],
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
