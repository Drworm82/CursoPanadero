import CourseShell from './CourseShell';

const defaultEquipment = { es: ['Báscula', 'Batidora', 'Tazón', 'Espátula', 'Molde', 'Horno'], en: ['Scale', 'Mixer', 'Bowl', 'Spatula', 'Pan', 'Oven'] };

const lessonLinks = {
  'rosca-pina-colada': { href: '/leccion-primer-panque-acremado', label: 'Volver a la lección' },
  'panque-platano-streusel-canela': { href: '/leccion-segunda-ruta-aceite', label: 'Volver a la lección' },
  'marmoleado-intenso-cafe': { href: '/leccion-repeticion-con-criterio', label: 'Volver a la lección' },
  'panque-citricos': { href: '/leccion-el-horno-tambien-es-parte', label: 'Volver a la lección' },
};

const recipeClosingGuides = {
  'rosca-pina-colada': [
    ['Reconoce la señal del acremado', 'Antes de pasar a la siguiente preparación, identifica el cambio de textura que obtuviste al acremar la mantequilla con el azúcar glass.'],
    ['Comprueba la estructura', 'Después de enfriar y desmoldar, observa la firmeza de la rosca antes de cubrirla con el glaseado.'],
  ],
  'panque-platano-streusel-canela': [
    ['Compara la técnica', 'Relaciona el resultado del panqué con la técnica utilizada: aquí la grasa principal es aceite y la mezcla se integra sin sobre batir.'],
    ['Observa el streusel', 'Después de enfriar y desmoldar, observa cómo la cobertura de streusel cambió durante el horneado.'],
  ],
  'marmoleado-intenso-cafe': [
    ['Compara las dos mezclas', 'Observa el resultado del marmoleado y relaciona las dos mezclas con la textura que tenían antes de entrar al horno.'],
    ['Comprueba la estructura', 'Después de enfriar y desmoldar, observa la firmeza de la pieza y el dibujo que se formó durante el marmoleado.'],
  ],
  'panque-citricos': [
    ['Observa el resultado de la cocción', 'Comprueba el volumen, el color y la estructura del panqué después de enfriar y desmoldar.'],
    ['Comprueba el glaseado', 'Observa la consistencia del glaseado y cómo se distribuye sobre la pieza terminada.'],
  ],
};

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

const recipeClosingGuidesEn = {
  'rosca-pina-colada': [
    ['Recognize the creaming signal', 'Before moving to the next preparation, identify the change in texture you obtained when creaming the butter with powdered sugar.'],
    ['Check the structure', 'After cooling and unmolding, observe the firmness of the ring cake before covering it with the glaze.'],
  ],
  'panque-platano-streusel-canela': [
    ['Compare the technique', 'Relate the result of the pound cake to the technique used: here the main fat is oil and the mixture is combined without overmixing.'],
    ['Observe the streusel', 'After cooling and unmolding, observe how the streusel topping changed during baking.'],
  ],
  'marmoleado-intenso-cafe': [
    ['Compare the two mixtures', 'Observe the marbling result and relate the two mixtures to the texture they had before entering the oven.'],
    ['Check the structure', 'After cooling and unmolding, observe the firmness of the piece and the pattern formed during marbling.'],
  ],
  'panque-citricos': [
    ['Observe the baking result', 'Check the volume, color, and structure of the pound cake after cooling and unmolding.'],
    ['Check the glaze', 'Observe the consistency of the glaze and how it spreads over the finished piece.'],
  ],
};

const recipeObservationGuidesEn = {
  'rosca-pina-colada': [
    {
      observation: 'Pay attention to the texture of the butter and sugar: look for a mixture that is softer, creamier, and more homogeneous than at the beginning.',
      phenomenon: 'As you beat, the sugar crystals rub against and fragment the butter structure while mixing favors the incorporation of small air bubbles.',
      importance: 'That is why the mixture changes texture, may look paler, and increases in volume. These signals indicate that creaming is taking place.',
    },
    {
      observation: 'Pay attention to the appearance of the mixture after each egg: notice whether it remains uniform and how its texture changes.',
      phenomenon: 'Egg adds a significant amount of water to a mixture whose base is fat. When it is incorporated gradually, the fat and aqueous phase can remain integrated during mixing.',
      importance: 'That is why the eggs are incorporated one at a time, waiting for each addition to integrate before continuing.',
      chibi: 'Why one at a time? Because we are not simply adding liquid: we are incorporating a new phase into a fat-based mixture.',
    },
    {
      observation: 'Pay attention to how the toasted coconut is distributed in the mixture before adding the dry ingredients.',
      phenomenon: 'Coconut adds solid particles that need to be distributed throughout the mixture.',
      importance: 'An even distribution helps the coconut flavor and texture appear throughout the piece instead of being concentrated in one place.',
    },
    {
      observation: 'Pay attention to the dry ingredients after sifting: look for a loose mixture without lumps before incorporating them.',
      phenomenon: 'Sifting separates lumps and helps distribute the dry ingredients among themselves.',
      importance: 'This allows you to incorporate them more evenly and avoid concentrations of flour or baking powder.',
    },
    {
      observation: 'Pay attention to the texture while alternating the coconut milk and dry ingredients. Notice when everything is integrated and stop mixing.',
      phenomenon: 'When flour comes into contact with liquids and receives mechanical work, its proteins can form gluten.',
      importance: 'In a heavy batter we are not trying to develop a gluten network as we would in bread. The flour is incorporated and mixing stops once the batter is unified.',
      chibi: 'Here is an idea that will return later: in some preparations we want to develop structure, while in others we want to limit that development.',
    },
    {
      observation: 'Pay attention to how the candied pineapple is distributed: it should remain spread through the batter while you use folding motions.',
      phenomenon: 'Pineapple is a solid ingredient incorporated once the batter has already formed.',
      importance: 'Folding motions allow you to distribute it without subjecting the whole batter to the mechanical work of the mixer again.',
    },
    {
      observation: 'During baking, pay attention to volume, the change in surface color, and how the ring cake structure develops.',
      phenomenon: 'Heat causes simultaneous changes in the batter: gases expand, steam is produced, leavening agents act, and the batter structure becomes fixed.',
      importance: 'That is why the oven does not simply “cook” the mixture: it transforms the structure you built during preparation.',
    },
    {
      observation: 'Pay attention to the firmness and structure of the ring cake after cooling and unmolding, before covering it.',
      phenomenon: 'As it cools, the structure formed during baking finishes stabilizing and the fat becomes firmer.',
      importance: 'This is the moment to check the structure obtained before adding the glaze.',
    },
    {
      observation: 'Pay attention to the glaze consistency while adding the coconut milk: it should be fluid but consistent.',
      phenomenon: 'Powdered sugar is mixed with a limited amount of liquid; as the amount of liquid increases, the mixture viscosity changes.',
      importance: 'That is why the coconut milk is added gradually: you are looking for a specific consistency, not simply using all the liquid at once.',
    },
    {
      observation: 'Pay attention to how the glaze spreads over the ring cake and how the coconut is distributed over the coating.',
      phenomenon: 'The consistency of the glaze determines how it moves and remains on the surface.',
      importance: 'The finish allows you to check whether you reached the appropriate consistency and whether you can distribute the coating evenly.',
    },
  ],
  'panque-platano-streusel-canela': [
    {
      observation: 'Pay attention to the dry ingredients after sifting: look for a loose, lump-free mixture with the cinnamon distributed.',
      phenomenon: 'Sifting separates lumps and helps distribute the flour, salt, baking powder, and cinnamon.',
      importance: 'This allows the dry ingredients to be incorporated more evenly into the wet mixture.',
    },
    {
      observation: 'Pay attention to the oil, banana, sugar, egg, and vanilla mixture: it should be homogeneous and lump-free, as the recipe indicates.',
      phenomenon: 'Here the main fat is oil, which is already liquid. We do not need to beat butter with sugar to create a creamed structure.',
      importance: 'This is the difference you should begin to recognize: we are making a heavy batter using a technique different from creaming.',
      chibi: 'In the previous ring cake you worked with butter and sugar to cream them. Here the fat is already liquid, so the process starts from a different structure.',
    },
    {
      observation: 'When comparing this preparation with the previous ring cake, pay attention to the texture you want after the pound cake cools: it should remain moist and soft.',
      phenomenon: 'Oil remains liquid at room temperature, while butter contains fat, water, and milk solids and changes state as it cools.',
      importance: 'In this pound cake we choose oil because we want a moist, soft crumb and a sensation that remains after cooling. Butter also provides fat, but it behaves differently and adds its own flavor.',
      chibi: 'It is not that one fat is “better” than the other. The fat is chosen according to the result we want to obtain.',
    },
    {
      observation: 'When mixing the blended mixture with the dry ingredients, pay attention to how the traces of flour gradually disappear and when the mixture becomes integrated. Then notice how the walnuts and raisins are distributed.',
      phenomenon: 'As soon as flour receives liquid and mechanical work, its proteins can begin to form gluten. The walnuts and raisins are then incorporated as solid ingredients.',
      importance: 'That is why the recipe calls for folding and avoiding overmixing: we want to incorporate the flour and distribute the solids without developing excessive structure.',
      chibi: 'The key word here is “integrate.” Once you no longer see dry flour, continuing to work the mixture does not necessarily improve it.',
    },
    {
      observation: 'Before baking, pay attention to how the streusel is distributed over the surface.',
      phenomenon: 'The streusel is made by forming a sandy mixture with cold butter, sugar, flour, and cinnamon. During baking, that mixture transforms and takes on color.',
      importance: 'The streusel layer adds a different texture and finish to the pound-cake batter.',
    },
    {
      observation: 'During baking, pay attention to volume, surface color, and how the batter structure changes.',
      phenomenon: 'Heat transforms the mixture: gases and steam expand, baking powder acts, and the structure eventually sets.',
      importance: 'The oven result depends on the structure you built before baking and on the baking conditions specified by the recipe.',
    },
    {
      observation: 'As the piece cools and is unmolded, pay attention to its firmness and how the structure holds when handled.',
      phenomenon: 'The structure stabilizes as the temperature drops and the piece becomes less fragile than immediately after leaving the oven.',
      importance: 'Cooling is part of the final result: it allows the piece to stabilize before handling and unmolding.',
    },
    {
      observation: 'When preparing the streusel, pay attention to the cold butter being distributed through the dry ingredients as a sandy mixture, not a smooth dough.',
      phenomenon: 'The cold butter remains in small pieces among the dry ingredients while the mixture is worked.',
      importance: 'That structure is what allows the characteristic sandy and crisp streusel finish after baking.',
    },
  ],
  'marmoleado-intenso-cafe': [
    {
      observation: 'Pay attention to the butter after incorporating the brown sugar and honey: look for a cream that is softer, lighter, and more spreadable than at the beginning.',
      phenomenon: 'Mixing changes the structure of the butter and favors the incorporation of air. The sugar adds solid particles that participate in this mechanical work, and the honey is incorporated gradually as the recipe indicates.',
      importance: 'The recipe explicitly aims for a soft, smooth, creamy mixture and continued mixing until light. That texture is the signal you should recognize before continuing.',
      chibi: 'You already saw creaming in the ring cake. Here the important signal is the same idea: do not rely only on time; learn to recognize the change in texture.',
    },
    {
      observation: 'Pay attention to the mixture after each egg: make sure it integrates before adding the next one.',
      phenomenon: 'Egg adds an aqueous phase to a mixture whose base is fat. Gradual incorporation helps mixing maintain a uniform mixture.',
      importance: 'That is why the eggs are added one at a time. The goal is for each addition to integrate before introducing the next.',
    },
    {
      observation: 'Pay attention to the two groups you are preparing: the milk with vanilla should be ready, and the dry ingredients should be sifted and lump-free.',
      phenomenon: 'The milk provides the liquid phase to be incorporated later, while sifting helps distribute the flour and baking powder.',
      importance: 'Having both parts prepared allows you to incorporate them alternately without stopping the process to prepare ingredients in the middle of mixing.',
    },
    {
      observation: 'Pay attention to the texture while alternating the milk and dry ingredients. Look for the point when everything is integrated and stop mixing.',
      phenomenon: 'Flour comes into contact with liquid and mechanical work, so its proteins can begin to form gluten.',
      importance: 'The recipe explicitly says not to overmix. In this batter we want to integrate the ingredients and maintain an appropriate texture, not develop a gluten network as in bread.',
      chibi: 'You already know this signal from the banana pound cake: once the flour is integrated, continuing to work the batter does not mean improving it.',
    },
    {
      observation: 'After dividing the batter, check that both portions have a similar texture before modifying one of them.',
      phenomenon: 'Dividing the batter creates two preparations that will later be combined in the same pound cake: one remains vanilla and the other receives the coffee.',
      importance: 'If both portions start with a similar texture, the marbling can be distributed without one mixture being much heavier or more fluid than the other.',
    },
    {
      observation: 'Pay attention to the coffee mixture: dissolve the instant coffee in the milk and add only the amount needed to keep a texture similar to the vanilla mixture.',
      phenomenon: 'The milk adds liquid to the coffee preparation. The recipe indicates that you do not need to use all the specified amount because the necessary quantity depends on the desired texture.',
      importance: 'Here is an important idea: an amount written in a recipe does not always mean you must use all of it if the procedure itself tells you to adjust according to texture.',
      chibi: 'You are not changing the recipe at random. You are following a criterion established by the recipe itself: add the amount needed to match the textures.',
    },
    {
      observation: 'Pay attention to how you place the two mixtures in the pan and to the depth of the skewer movements. Look for visible streaks, not a completely unified mixture.',
      phenomenon: 'The two batters remain different and the skewer passes through them to create the marbled pattern.',
      importance: 'The purpose of the movement is not to mix the two batters completely, but to create the pattern without losing the separation between vanilla and coffee.',
    },
    {
      observation: 'During baking, pay attention to volume, surface color, and how the pound-cake structure sets.',
      phenomenon: 'Heat causes gases and steam to expand, baking powder acts, and the mixture progressively transforms until its structure is set.',
      importance: 'The oven transforms the structure you built during mixing. The result you observe is a consequence of both stages.',
    },
    {
      observation: 'As the piece cools and is unmolded, pay attention to its firmness and the marbled pattern before cutting it.',
      phenomenon: 'As the temperature drops, the pound-cake structure stabilizes and the fat becomes firmer.',
      importance: 'Cooling allows you to handle the piece without compromising its structure and check the final marbling result.',
    },
  ],
};

const recipeUi = {
  es: {
    backLesson: 'Volver a la lección',
    backModule: 'Volver al módulo',
    preparation: 'Preparación',
    beforeStart: 'Antes de empezar',
    doObserve: 'Haz, observa y continúa.',
    doObserveText: 'No necesitas memorizar todos los pasos. Trabaja uno, observa qué ocurrió y después continúa.',
    difficulty: 'Dificultad',
    yield: 'Rendimiento',
    equipment: 'Equipo',
    equipmentText: 'Empieza con equipo doméstico. El curso irá introduciendo herramientas nuevas cuando realmente aporten algo a lo que estás aprendiendo.',
    needNow: 'Necesitas ahora',
    notYet: 'Todavía no necesitas',
    professionalEquipment: 'Equipo profesional o especializado para comenzar esta preparación.',
    ingredients: 'Ingredientes',
    stepByStep: 'Paso a paso',
    workObserve: 'Trabaja, observa y entiende',
    observe: 'Observa',
    whatHappening: 'Qué está ocurriendo',
    whyItMatters: '¿Por qué importa?',
    chibi: 'Chibi',
    finish: 'Al terminar',
    beforeNext: 'Antes de pasar a la siguiente preparación',
    return: 'Volver a la lección',
    returnModule: 'Volver al módulo',
    time: 'Tiempo',
    temperature: 'Temperatura',
  },
  en: {
    backLesson: 'Back to lesson',
    backModule: 'Back to module',
    preparation: 'Preparation',
    beforeStart: 'Before you start',
    doObserve: 'Do, observe, and continue.',
    doObserveText: 'You do not need to memorize every step. Work through one step, observe what happened, and then continue.',
    difficulty: 'Difficulty',
    yield: 'Yield',
    equipment: 'Equipment',
    equipmentText: 'Start with household equipment. The course will introduce new tools when they actually add something to what you are learning.',
    needNow: 'You need now',
    notYet: 'You do not need yet',
    professionalEquipment: 'Professional or specialized equipment is not needed to start this preparation.',
    ingredients: 'Ingredients',
    stepByStep: 'Step by step',
    workObserve: 'Work, observe, and understand',
    observe: 'Observe',
    whatHappening: 'What is happening',
    whyItMatters: 'Why does it matter?',
    chibi: 'Chibi',
    finish: 'When you finish',
    beforeNext: 'Before moving to the next preparation',
    return: 'Back to lesson',
    returnModule: 'Back to module',
    time: 'Time',
    temperature: 'Temperature',
  },
};

export default function RecipeView({ recipe, ingredients, steps, locale = 'es' }) {
  const ui = recipeUi[locale] || recipeUi.es;
  const guides = locale === 'en' ? (recipeObservationGuidesEn[recipe.slug] || []) : (recipeObservationGuides[recipe.slug] || []);
  const lessonLink = lessonLinks[recipe.slug];
  const equipment = defaultEquipment[locale] || defaultEquipment.es;
  const lessonHref = lessonLink?.href
    ? `/${locale === 'en' ? 'en/' : ''}${lessonLink.href.slice(1)}`
    : `/${locale === 'en' ? 'en/' : ''}modulo-1`;

  return (
    <CourseShell
      eyebrow={ui.preparation}
      title={recipe.title}
      description={recipe.source_objective}
      backHref={lessonHref}
      backLabel={lessonLink ? ui.backLesson : ui.backModule}
    >
      <div className="space-y-8">
        <section className="relative overflow-hidden rounded-3xl bg-stone-900 p-6 text-white shadow-sm sm:p-8">
          <div className="relative max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">{ui.beforeStart}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{ui.doObserve}</h2>
            <p className="mt-3 text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
              {ui.doObserveText}
            </p>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2" aria-label={ui.preparation}>
          <div className="rounded-xl bg-stone-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">{ui.difficulty}</p>
            <p className="mt-1 font-medium text-stone-900">{recipe.difficulty || '—'}</p>
          </div>
          <div className="rounded-xl bg-stone-50 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">{ui.yield}</p>
            <p className="mt-1 font-medium text-stone-900">{recipe.source_yield || '—'}</p>
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(240px,.7fr)_minmax(0,1.3fr)] lg:items-start">
          <aside className="space-y-5">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{ui.equipment}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {ui.equipmentText}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">{ui.needNow}</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-700">
                {equipment.map((item) => <li key={item}>• {item}</li>)}
              </ul>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">{ui.notYet}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{ui.professionalEquipment}</p>
            </div>
          </aside>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-stone-900">{ui.ingredients}</h2>
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
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{ui.stepByStep}</p>
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">{ui.workObserve}</h2>
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
                          {step.time_text && <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">{ui.time}: {step.time_text}</span>}
                          {step.temperature_text && <span className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">{ui.temperature}: {step.temperature_text}</span>}
                        </div>
                      )}

                      {observation && (
                        <div className="mt-5 rounded-xl bg-amber-50 p-4">
                          <p className="text-sm font-medium text-amber-900">{ui.observe}</p>
                          <p className="mt-1 text-sm leading-6 text-amber-950">{observation}</p>
                        </div>
                      )}

                      {guide?.phenomenon && (
                        <div className="mt-3 rounded-xl bg-stone-50 p-4">
                          <p className="text-sm font-medium text-stone-800">{ui.whatHappening}</p>
                          <p className="mt-1 text-sm leading-6 text-stone-700">{guide.phenomenon}</p>
                        </div>
                      )}

                      {guide?.importance && (
                        <div className="mt-3 rounded-xl border border-stone-200 bg-white p-4">
                          <p className="text-sm font-medium text-stone-800">{ui.whyItMatters}</p>
                          <p className="mt-1 text-sm leading-6 text-stone-700">{guide.importance}</p>
                        </div>
                      )}

                      {guide?.chibi && (
                        <div className="mt-3 rounded-xl border border-amber-200 bg-white p-4">
                          <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-700">{ui.chibi}</p>
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
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{ui.finish}</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">{ui.beforeNext}</h2>
          <div className="mt-4 space-y-4 text-stone-600">
            <div className="space-y-3">
              {((locale === 'en' ? recipeClosingGuidesEn[recipe.slug] : recipeClosingGuides[recipe.slug]) || []).map(([title, text]) => (
                <div key={title} className="rounded-xl bg-stone-50 p-4">
                  <p className="font-medium text-stone-900">{title}</p>
                  <p className="mt-1 leading-7">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <a
          href={lessonHref}
          className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white"
        >
          {lessonLink ? ui.return : ui.returnModule}
        </a>
      </div>
    </CourseShell>
  );
}
