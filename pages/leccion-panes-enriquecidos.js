import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const content = {
  es: {
    eyebrow:'Lección 31', title:'Panes con grasa, azúcar y huevo', back:'Volver al módulo',
    introLabel:'Cuando la masa incorpora más ingredientes',
    introTitle:'Las recetas del curso muestran masas de pan con azúcar, huevo y grasa.',
    intro:'El material disponible no ofrece una definición formal de “pan enriquecido”. Sin embargo, varias recetas de pan incorporan ingredientes que no aparecen en una masa básica: azúcar, huevo, mantequilla, aceite o leche. Podemos estudiar esa diferencia directamente a partir de las recetas, sin atribuirles una teoría que la fuente no desarrolla.',
    centralLabel:'La idea central', centralTitle:'Enriquecer una masa cambia su lista de ingredientes y su manejo.',
    central:'Las recetas permiten observar diferentes combinaciones. Las conchas llevan azúcar, huevo y mantequilla; el pan de ajo lleva azúcar, mantequilla y aceite; el pan danés incorpora azúcar, huevo, mantequilla y un empaste con margarina; y el pan de pulque contiene huevo, azúcar y una cantidad importante de mantequilla. La comparación parte de esos datos concretos.',
    compareTitle:'Cuatro recetas para comparar',
    recipes:[
      ['Conchas','Azúcar + huevo + mantequilla','La receta utiliza 550 g de harina, 130 g de azúcar, 200 g de huevo y 80 g de mantequilla. Añade agua poco a poco hasta obtener una masa suave y lisa; después fermenta, poncha, porciona y vuelve a fermentar.'],
      ['Pan de ajo','Azúcar + mantequilla + aceite','Con 500 g de harina, la receta contiene 70 g de azúcar, 50 g de mantequilla y 20 ml de aceite de oliva. La masa se amasa hasta quedar suave y homogénea, fermenta hasta duplicar su volumen, se poncha, se forma y vuelve a fermentar.'],
      ['Pan danés','Huevo + mantequilla + empaste','La masa contiene leche, azúcar, huevo y mantequilla. Además, la receta incorpora 225 g de margarina para el empaste. Después de fermentar y ponchar, la masa se extiende, se refrigera y se trabaja con vueltas antes del formado.'],
      ['Pan de pulque','Huevo + azúcar + mantequilla','La receta utiliza 7 huevos, 250 g de azúcar moscabado, 500 g de harina y 300 g de mantequilla, además de 150 ml de pulque y 15 g de levadura fresca. La mezcla fermenta hasta duplicar su tamaño antes del horneado.']
    ],
    observeTitle:'¿Qué debes observar?',
    observations:[
      ['1. La composición cambia de una receta a otra','No todas las masas incorporan los mismos ingredientes. La comparación permite identificar qué añade cada receta.'],
      ['2. El manejo también cambia','El pan de ajo se amasa y fermenta; las conchas se porcionan y fermentan nuevamente; el pan danés incorpora refrigeración, empaste y vueltas; el pan de pulque se trabaja como una mezcla que después fermenta hasta duplicar su tamaño.'],
      ['3. La fuente describe estados concretos de la masa','En las recetas aparecen expresiones como “suave y lisa”, “suave y homogénea” y “hasta que duplique su volumen”. Esas observaciones forman parte del procedimiento documentado.'],
      ['4. No confundas la receta con una teoría general','El material permite comparar ingredientes y procesos, pero no explica de manera general cómo cada ingrediente modifica la fermentación, la estructura o la conservación del pan.']
    ],
    practiceLabel:'Práctica de comparación', practiceTitle:'Construye el perfil de cada masa',
    practice:'Haz cuatro filas: conchas, pan de ajo, pan danés y pan de pulque. En columnas separadas registra harina, azúcar, huevo, mantequilla u otra grasa, líquido adicional y los pasos de fermentación. Después señala qué ingredientes aparecen en más de una receta y cuáles son exclusivos de una.',
    limitLabel:'Límite de esta fuente', limitTitle:'“Pan enriquecido” no está definido como categoría técnica.',
    limit:'La lección usa el término del programa como una organización pedagógica y observa las recetas que contienen grasa, azúcar y huevo. La fuente no proporciona una definición formal de enriquecimiento, ni explica cuáles ingredientes son necesarios para clasificar una masa de esa manera.',
    activityLabel:'Actividad guiada', activityTitle:'Haz, observa y registra',
    activity:'Compara dos masas enriquecidas del módulo y subraya los ingredientes que modifican respecto de una masa básica. Después identifica qué cambia en el manejo documentado.',
    checkLabel:'Comprueba tu aprendizaje', checkTitle:'Explica la secuencia',
    questions:['¿Qué ingredientes enriquecen las recetas comparadas?','¿Qué diferencias de manejo aparecen en las secuencias?','¿Qué puedes afirmar a partir de las recetas y qué requeriría información adicional de la fuente?'],
    takeLabel:'Al terminar', takeTitle:'Lo que debes llevarte de esta lección',
    takeaways:[
      ['Las recetas muestran enriquecimiento en la práctica:','aparecen azúcar, huevo, mantequilla, aceite, leche y otros ingredientes además de harina, sal y levadura.'],
      ['La composición y el proceso están relacionados en la receta:','cada preparación tiene su propia secuencia de amasado, fermentación, formado o laminado.'],
      ['La fuente permite comparar:','conchas, pan de ajo, pan danés y pan de pulque muestran combinaciones diferentes.'],
      ['La teoría general queda pendiente:','el material no explica todavía el efecto técnico de cada ingrediente sobre la masa.']
    ],
    sourceLabel:'Nota sobre la fuente',
    source:'Los datos proceden de las recetas de conchas, pan de ajo, pan danés y pan de pulque en data/recetas.js. El proceso general de panificación procede de data/curso.js. La categoría y la organización comparativa de esta lección siguen la ruta del Módulo 4 y son organización pedagógica del curso.',
    nextLabel:'Siguiente lección', nextTitle:'Brioche: grasa, azúcar y fermentación',
    next:'La siguiente lección puede profundizar en la comparación de masas enriquecidas, aunque será necesario verificar primero si existe contenido específico de brioche en el material.',
    nextLink:'Volver al Módulo 4 →'
  },
  en: {
    eyebrow:'Lesson 31', title:'Breads with Fat, Sugar, and Egg', back:'Back to module',
    introLabel:'When the dough incorporates more ingredients',
    introTitle:'The course recipes show bread doughs with sugar, egg, and fat.',
    intro:'The available material does not provide a formal definition of “enriched bread”. However, several bread recipes incorporate ingredients that do not appear in a basic dough: sugar, egg, butter, oil, or milk. We can study that difference directly from the recipes without attributing a theory to the source that it does not develop.',
    centralLabel:'The central idea', centralTitle:'Enriching a dough changes its ingredient list and its handling.',
    central:'The recipes allow us to observe different combinations. Conchas contain sugar, egg, and butter; garlic bread contains sugar, butter, and oil; Danish bread incorporates sugar, egg, butter, and a margarine lamination; and pulque bread contains egg, sugar, and a substantial amount of butter. The comparison starts from those concrete data.',
    compareTitle:'Four recipes to compare',
    recipes:[
      ['Conchas','Sugar + egg + butter','The recipe uses 550 g flour, 130 g sugar, 200 g egg, and 80 g butter. Water is added gradually until the dough is soft and smooth; it then ferments, is punched down, divided, and fermented again.'],
      ['Garlic bread','Sugar + butter + oil','With 500 g flour, the recipe contains 70 g sugar, 50 g butter, and 20 ml olive oil. The dough is kneaded until soft and homogeneous, fermented until it doubles in volume, punched down, shaped, and fermented again.'],
      ['Danish bread','Egg + butter + lamination','The dough contains milk, sugar, egg, and butter. The recipe also incorporates 225 g margarine for lamination. After fermentation and punching down, the dough is rolled out, refrigerated, and worked with turns before shaping.'],
      ['Pulque bread','Egg + sugar + butter','The recipe uses 7 eggs, 250 g brown sugar, 500 g flour, and 300 g butter, plus 150 ml pulque and 15 g fresh yeast. The mixture ferments until it doubles in size before baking.']
    ],
    observeTitle:'What should you observe?',
    observations:[
      ['1. Composition changes from one recipe to another','Not all doughs incorporate the same ingredients. The comparison lets us identify what each recipe adds.'],
      ['2. Handling also changes','Garlic bread is kneaded and fermented; conchas are divided and fermented again; Danish bread incorporates refrigeration, lamination, and turns; pulque bread is handled as a mixture that then ferments until it doubles in size.'],
      ['3. The source describes concrete dough states','The recipes use expressions such as “soft and smooth”, “soft and homogeneous”, and “until it doubles in volume”. These observations are part of the documented procedure.'],
      ['4. Do not confuse a recipe with a general theory','The material allows us to compare ingredients and processes, but it does not generally explain how each ingredient modifies fermentation, structure, or bread keeping quality.']
    ],
    practiceLabel:'Comparison practice', practiceTitle:'Build the profile of each dough',
    practice:'Make four rows: conchas, garlic bread, Danish bread, and pulque bread. In separate columns record flour, sugar, egg, butter or another fat, additional liquid, and the fermentation steps. Then identify which ingredients appear in more than one recipe and which are unique to one.',
    limitLabel:'Source boundary', limitTitle:'“Enriched bread” is not defined as a technical category.',
    limit:'The lesson uses the program term as a pedagogical organization and observes recipes containing fat, sugar, and egg. The source does not provide a formal definition of enrichment or explain which ingredients are required to classify a dough in that way.',
    activityLabel:'Guided activity', activityTitle:'Do, observe, and record',
    activity:'Compare two enriched doughs from the module and underline the ingredients that differ from a basic dough. Then identify what changes in the documented handling.',
    checkLabel:'Check your learning', checkTitle:'Explain the sequence',
    questions:['What ingredients enrich the recipes being compared?','What handling differences appear in the sequences?','What can you state from the recipes, and what would require additional information from the source?'],
    takeLabel:'At the end', takeTitle:'What you should take away from this lesson',
    takeaways:[
      ['The recipes show enrichment in practice:','sugar, egg, butter, oil, milk, and other ingredients appear in addition to flour, salt, and yeast.'],
      ['Composition and process are connected in the recipe:','each preparation has its own sequence of kneading, fermentation, shaping, or lamination.'],
      ['The source allows comparison:','conchas, garlic bread, Danish bread, and pulque bread show different combinations.'],
      ['The general theory remains open:','the material does not yet explain the technical effect of each ingredient on the dough.']
    ],
    sourceLabel:'Source note',
    source:'The data come from the conchas, garlic bread, Danish bread, and pulque bread recipes in data/recetas.js. The general breadmaking process comes from data/curso.js. The category and comparative organization of this lesson follow the Module 4 route and are a pedagogical organization of the course.',
    nextLabel:'Next lesson', nextTitle:'Brioche: fat, sugar, and fermentation',
    next:'The next lesson could deepen the comparison of enriched doughs, although the material should first be checked for specific brioche content.',
    nextLink:'Back to Module 4 →'
  }
};

export default function LessonThirtyOnePage() {
  const { locale = 'es' } = useRouter();
  const t = locale === 'en' ? content.en : content.es;
  return (
    <CourseShell eyebrow={t.eyebrow} title={t.title} backHref={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} backLabel={t.back}>
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.introLabel}</p><h2 className="mt-3 text-2xl font-semibold text-stone-900">{t.introTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.centralLabel}</p><h2 className="mt-2 text-2xl font-semibold">{t.centralTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">{t.central}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.compareTitle}</h2><div className="mt-6 space-y-4">{t.recipes.map(([name, heading, text], i) => <article key={name} className={i % 2 === 0 ? 'rounded-2xl border border-amber-200 bg-amber-50 p-6' : 'rounded-2xl border border-stone-200 bg-white p-6'}><p className={i % 2 === 0 ? 'text-sm font-medium text-amber-800' : 'text-sm font-medium text-stone-500'}>{name}</p><h3 className={i % 2 === 0 ? 'mt-2 text-xl font-semibold text-amber-950' : 'mt-2 text-xl font-semibold text-stone-900'}>{heading}</h3><p className={i % 2 === 0 ? 'mt-3 leading-7 text-amber-950' : 'mt-3 leading-7 text-stone-700'}>{text}</p></article>)}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.observeTitle}</h2><div className="mt-5 space-y-5">{t.observations.map(([heading,text],i)=><div key={heading} className={i===0?'rounded-2xl bg-amber-50 p-5':'rounded-2xl bg-stone-100 p-5'}><p className={i===0?'font-semibold text-amber-900':'font-semibold text-stone-900'}>{heading}</p><p className={i===0?'mt-2 leading-7 text-amber-950':'mt-2 leading-7 text-stone-700'}>{text}</p></div>)}</div></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.practiceLabel}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.practiceTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.practice}</p></section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-900">{t.limitLabel}</p><h2 className="mt-2 text-xl font-semibold text-amber-950">{t.limitTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.limit}</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.activityLabel}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.activityTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.activity}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium text-stone-500">{t.checkLabel}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.checkTitle}</h2><div className="mt-4 space-y-3 text-stone-700">{t.questions.map((q,i)=><p key={q}>{i+1}. {q}</p>)}</div></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.takeLabel}</p><h2 className="mt-2 text-2xl font-semibold">{t.takeTitle}</h2><div className="mt-5 space-y-4 text-stone-100">{t.takeaways.map(([strong,text])=><p key={strong} className="leading-7"><strong>{strong}</strong> {text}</p>)}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{t.sourceLabel}</p><p className="mt-2 leading-7 text-stone-700">{t.source}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.nextLabel}</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">{t.nextTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.next}</p><a href={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">{t.nextLink}</a></section>
      </div>
    </CourseShell>
  );
}
