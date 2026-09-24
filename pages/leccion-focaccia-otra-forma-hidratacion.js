import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const content = {
  es: {
    eyebrow:'Lección 29', title:'Focaccia: otra forma de entender la hidratación', back:'Volver al módulo',
    introEyebrow:'Una comparación antes de avanzar', introTitle:'La focaccia sí está documentada en la Clase 25 del material.',
    intro:'La Clase 25 documenta una Focaccia de 1 pieza de 20 × 30 cm. La receta proporciona fórmula, guarnición y procedimiento. Esta lección puede estudiar directamente esa preparación y después compararla con otras masas del curso.',
    central:'La idea central', centralTitle:'Una receta también puede leerse como una relación entre cantidades.',
    centralText:'En las recetas de pan del material aparecen cantidades concretas de harina y agua. Compararlas permite observar que no todas las masas parten de la misma proporción. La fuente no desarrolla todavía una teoría de hidratación; aquí la usamos como una forma de leer y comparar los datos de las recetas.',
    formulaTitle:'Focaccia: fórmula y procedimiento documentados', dough:'Masa', doughText:'1 kg de harina, 700 ml de agua, 30 g de levadura fresca, 10 g de malta, 30 ml de aceite de oliva y 20 g de sal.',
    garnish:'Guarnición', garnishText:'80 g de aceite de oliva extra virgen, 20 g de sal de humo o flor de sal, 8 dientes de ajo y romero c/s.',
    process:'La fuente indica pesar los ingredientes, formar una fuente con la harina, incorporar levadura, malta, sal y 30 ml de aceite, agregar el agua poco a poco y trabajar hasta obtener una masa homogénea. Después se deja reposar en aceite de oliva, se da forma según la demostración y se añade la guarnición elegida.',
    numbers:'Mira primero los números',
    garlic:'Pan de ajo', garlicTitle:'500 g de harina + 300 g de agua', garlicText:'La receta declara 500 g de harina y 300 g de agua tibia. Después indica amasar hasta obtener una masa suave y homogénea, fermentar hasta duplicar su volumen, ponchar, formar y fermentar de nuevo.',
    grissini:'Grissini', grissiniTitle:'500 g de harina + 300 g de agua', grissiniText:'También declara 500 g de harina y 300 g de agua, pero añade 50 g de aceite de oliva y leche en polvo. Su proceso incluye una fermentación de 20 minutos, refrigeración, extendido, corte y otra fermentación.',
    conchas:'Conchas', conchasTitle:'550 g de harina + 80 a 130 ml de agua', conchasText:'Aquí la cantidad de agua aparece como un intervalo y la masa también contiene 200 g de huevo y 80 g de mantequilla. La receta indica añadir el agua poco a poco hasta obtener una masa suave y lisa.',
    croissant:'Croissant', croissantTitle:'500 g de harina + 240 ml de agua', croissantText:'La receta declara 240 ml de agua, además de mantequilla, azúcar, sal y levadura. Después de la primera fermentación, la masa se poncha, se refrigera y pasa al empaste y al formado.',
    observe:'¿Qué debes observar?', o1:'1. No todas las recetas usan la misma cantidad de agua', o1t:'Incluso antes de hablar de técnicas particulares, las listas de ingredientes ya muestran diferencias entre masas.',
    o2:'2. El agua no es el único líquido o fuente de humedad', o2t:'En las conchas aparecen huevo y agua; en el pan de ajo aparecen agua, mantequilla y aceite; en el croissant aparecen agua y mantequilla. Por eso no conviene reducir la lectura de una receta a un solo número.',
    o3:'3. La cantidad declarada no sustituye la observación de la masa', o3t:'Las propias recetas describen estados de la masa: “suave y homogénea”, “lisa y homogénea” o “suave y lisa”. Esas descripciones forman parte del proceso documentado.',
    o4:'4. La guarnición forma parte de la preparación', o4t:'La fuente separa los ingredientes de la masa de la guarnición: aceite de oliva extra virgen, sal de humo o flor de sal, ajo y romero. El formado se realiza según la demostración de clase.',
    practice:'Práctica de lectura', practiceTitle:'Compara antes de interpretar', practiceText:'Toma pan de ajo, grissini, conchas y croissant. Para cada uno registra harina, agua y otros ingredientes que también forman parte de la masa. Después escribe qué cantidades son iguales y cuáles cambian. Como segundo paso, anota qué descripción de textura utiliza cada receta antes de fermentar.',
    limit:'Límite de esta fuente', limitTitle:'La receta permite observar directamente una masa con 1 kg de harina y 700 ml de agua, pero la fuente no desarrolla aquí una teoría general de hidratación.',
    limitText:'La comparación de harina y agua es una herramienta pedagógica de esta lección. La fuente proporciona las cantidades de la Focaccia, pero no desarrolla una clasificación general de porcentajes de hidratación.',
    activity:'Actividad guiada', activityTitle:'Haz, observa y registra', activityText:'Compara las cantidades de harina y agua de las preparaciones que aparecen en la lección. Después observa cómo se maneja la masa y qué información concreta proporciona la fuente sobre su formado.',
    check:'Comprueba tu aprendizaje', checkTitle:'Explica la secuencia', q1:'1. ¿Qué relación de cantidades puedes observar en la receta?', q2:'2. ¿Qué operaciones aparecen después de formar una masa homogénea?', q3:'3. ¿Qué explicación general sobre hidratación no está desarrollada explícitamente por la fuente?',
    finish:'Al terminar', finishTitle:'Lo que debes llevarte de esta lección',
    t1:'Las recetas pueden compararse por cantidades: harina, agua y otros ingredientes aparecen de forma explícita en el material.',
    t2:'La masa también se describe por su estado: las recetas indican condiciones como suave, lisa y homogénea.',
    t3:'La Focaccia sí está documentada: la Clase 25 proporciona fórmula, guarnición y procedimiento.',
    t4:'La hidratación queda como herramienta de comparación: la receta proporciona cantidades concretas, pero no desarrolla una teoría general del concepto.',
    source:'Nota sobre la fuente', sourceText:'La receta de Focaccia procede de la Clase 25 del PDF. Los datos de comparación proceden además de las recetas de pan de ajo, grissini, conchas y croissant. La organización comparativa de esta lección y el uso de la relación harina/agua como herramienta de lectura son organización pedagógica del curso.',
    next:'Siguiente lección', nextTitle:'Ciabatta y biga', nextText:'La siguiente lección sí puede apoyarse en un concepto que aparece explícitamente en la fuente: la biga como prefermento denso y poco hidratado.', nextButton:'Volver al Módulo 4 →'
  },
  en: {
    eyebrow:'Lesson 29', title:'Focaccia: Another Way to Understand Hydration', back:'Back to module',
    introEyebrow:'A comparison before moving on', introTitle:'Focaccia is documented in Class 25 of the material.',
    intro:'Class 25 documents a Focaccia, one piece measuring 20 × 30 cm. The recipe provides its formula, topping, and procedure. This lesson can study that preparation directly and then compare it with other doughs in the course.',
    central:'The central idea', centralTitle:'A recipe can also be read as a relationship between quantities.',
    centralText:'The bread recipes in the material contain specific amounts of flour and water. Comparing them shows that not all doughs start from the same proportion. The source does not yet develop a theory of hydration; here we use it as a way to read and compare recipe data.',
    formulaTitle:'Focaccia: documented formula and procedure', dough:'Dough', doughText:'1 kg flour, 700 ml water, 30 g fresh yeast, 10 g malt, 30 ml olive oil, and 20 g salt.',
    garnish:'Topping', garnishText:'80 g extra-virgin olive oil, 20 g smoked salt or fleur de sel, 8 garlic cloves, and rosemary as needed.',
    process:'The source instructs weighing the ingredients, making a well with the flour, incorporating yeast, malt, salt, and 30 ml oil, adding the water gradually, and working until a homogeneous dough is obtained. It is then left to rest in olive oil, shaped according to the demonstration, and finished with the chosen topping.',
    numbers:'Look at the numbers first',
    garlic:'Garlic bread', garlicTitle:'500 g flour + 300 g water', garlicText:'The recipe lists 500 g flour and 300 g warm water. It then says to knead until a soft, homogeneous dough is obtained, ferment until doubled, punch down, shape, and ferment again.',
    grissini:'Grissini', grissiniTitle:'500 g flour + 300 g water', grissiniText:'It also lists 500 g flour and 300 g water, but adds 50 g olive oil and milk powder. Its process includes a 20-minute fermentation, refrigeration, rolling out, cutting, and another fermentation.',
    conchas:'Conchas', conchasTitle:'550 g flour + 80–130 ml water', conchasText:'Here the water amount is given as a range, and the dough also contains 200 g egg and 80 g butter. The recipe says to add water gradually until the dough becomes soft and smooth.',
    croissant:'Croissant', croissantTitle:'500 g flour + 240 ml water', croissantText:'The recipe lists 240 ml water along with butter, sugar, salt, and yeast. After first fermentation, the dough is punched down, refrigerated, and moved to butter incorporation and shaping.',
    observe:'What should you observe?', o1:'1. Not every recipe uses the same amount of water', o1t:'Even before discussing specific techniques, the ingredient lists already show differences between doughs.',
    o2:'2. Water is not the only liquid or source of moisture', o2t:'Conchas contain egg and water; garlic bread contains water, butter, and oil; croissant contains water and butter. A recipe should therefore not be reduced to a single number.',
    o3:'3. The stated quantity does not replace observing the dough', o3t:'The recipes themselves describe dough states: “soft and homogeneous,” “smooth and homogeneous,” or “soft and smooth.” These descriptions are part of the documented process.',
    o4:'4. The topping is part of the preparation', o4t:'The source separates dough ingredients from the topping: extra-virgin olive oil, smoked salt or fleur de sel, garlic, and rosemary. Shaping is performed according to the class demonstration.',
    practice:'Reading practice', practiceTitle:'Compare before interpreting', practiceText:'Take garlic bread, grissini, conchas, and croissant. For each one, record flour, water, and other ingredients that are also part of the dough. Then write which quantities are the same and which change. As a second step, note the texture description each recipe uses before fermentation.',
    limit:'Source boundary', limitTitle:'The recipe lets us directly observe a dough with 1 kg flour and 700 ml water, but the source does not develop a general theory of hydration here.',
    limitText:'Comparing flour and water is a pedagogical tool for this lesson. The source provides the Focaccia quantities, but it does not develop a general classification of hydration percentages.',
    activity:'Guided activity', activityTitle:'Do, observe, and record', activityText:'Compare the flour and water quantities in the preparations shown in this lesson. Then observe how the dough is handled and what concrete information the source provides about shaping it.',
    check:'Check your learning', checkTitle:'Explain the sequence', q1:'1. What relationship between quantities can you observe in the recipe?', q2:'2. What operations appear after a homogeneous dough is formed?', q3:'3. What general explanation of hydration is not explicitly developed by the source?',
    finish:'When you finish', finishTitle:'What you should take away from this lesson',
    t1:'Recipes can be compared by quantities: flour, water, and other ingredients are explicitly stated in the material.',
    t2:'Dough is also described by its state: recipes use conditions such as soft, smooth, and homogeneous.',
    t3:'Focaccia is documented: Class 25 provides its formula, topping, and procedure.',
    t4:'Hydration remains a comparison tool: the recipe provides concrete quantities, but it does not develop a general theory of the concept.',
    source:'Source note', sourceText:'The Focaccia recipe comes from Class 25 of the PDF. The comparison data also come from the garlic bread, grissini, conchas, and croissant recipes. The comparative organization of this lesson and the use of the flour/water relationship as a reading tool are pedagogical organization by the course.',
    next:'Next lesson', nextTitle:'Ciabatta and Biga', nextText:'The next lesson can rely on a concept that appears explicitly in the source: biga as a dense, low-hydration preferment.', nextButton:'Back to Module 4 →'
  }
};

export default function LessonTwentyNinePage() {
  const { locale = 'es' } = useRouter();
  const t = locale === 'en' ? content.en : content.es;
  const comparisons = [
    [t.garlic,t.garlicTitle,t.garlicText,'amber'],[t.grissini,t.grissiniTitle,t.grissiniText,'stone'],
    [t.conchas,t.conchasTitle,t.conchasText,'stone'],[t.croissant,t.croissantTitle,t.croissantText,'stone']
  ];
  const observations = [[t.o1,t.o1t,'amber'],[t.o2,t.o2t,'stone'],[t.o3,t.o3t,'stone'],[t.o4,t.o4t,'stone']];
  return (
    <CourseShell eyebrow={t.eyebrow} title={t.title} backHref={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} backLabel={t.back}>
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.introEyebrow}</p><h2 className="mt-3 text-2xl font-semibold text-stone-900">{t.introTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.central}</p><h2 className="mt-2 text-2xl font-semibold">{t.centralTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">{t.centralText}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.formulaTitle}</h2><div className="mt-6 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-semibold text-amber-900">{t.dough}</p><p className="mt-2 leading-7 text-amber-950">{t.doughText}</p></div><div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="font-semibold text-stone-900">{t.garnish}</p><p className="mt-2 leading-7 text-stone-700">{t.garnishText}</p></div></div><p className="mt-5 leading-7 text-stone-700">{t.process}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.numbers}</h2><div className="mt-6 grid gap-4 md:grid-cols-2">{comparisons.map(([label,title,text,tone])=><article key={label} className={`rounded-2xl border p-6 ${tone==='amber'?'border-amber-200 bg-amber-50':'border-stone-200 bg-white'}`}><p className={`text-sm font-medium ${tone==='amber'?'text-amber-800':'text-stone-500'}`}>{label}</p><h3 className={`mt-2 text-xl font-semibold ${tone==='amber'?'text-amber-950':'text-stone-900'}`}>{title}</h3><p className={`mt-3 leading-7 ${tone==='amber'?'text-amber-950':'text-stone-700'}`}>{text}</p></article>)}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.observe}</h2><div className="mt-5 space-y-5">{observations.map(([title,text,tone])=><div key={title} className={`rounded-2xl p-5 ${tone==='amber'?'bg-amber-50':'bg-stone-100'}`}><p className={`font-semibold ${tone==='amber'?'text-amber-900':'text-stone-900'}`}>{title}</p><p className={`mt-2 leading-7 ${tone==='amber'?'text-amber-950':'text-stone-700'}`}>{text}</p></div>)}</div></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.practice}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.practiceTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.practiceText}</p></section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-900">{t.limit}</p><h2 className="mt-2 text-xl font-semibold text-amber-950">{t.limitTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.limitText}</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.activity}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.activityTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.activityText}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium text-stone-500">{t.check}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.checkTitle}</h2><div className="mt-4 space-y-3 text-stone-700"><p>{t.q1}</p><p>{t.q2}</p><p>{t.q3}</p></div></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.finish}</p><h2 className="mt-2 text-2xl font-semibold">{t.finishTitle}</h2><div className="mt-5 space-y-4 text-stone-100">{[t.t1,t.t2,t.t3,t.t4].map(item=>{const [lead,...rest]=item.split(':');return <p key={item} className="leading-7"><strong>{lead}:</strong>{rest.join(':')}</p>;})}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{t.source}</p><p className="mt-2 leading-7 text-stone-700">{t.sourceText}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.next}</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">{t.nextTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.nextText}</p><a href={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">{t.nextButton}</a></section>
      </div>
    </CourseShell>
  );
}
