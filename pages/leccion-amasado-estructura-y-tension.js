import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const content = {
  es: {
    eyebrow:'Lección 27', title:'Amasado, estructura y tensión', back:'Volver al módulo',
    introEyebrow:'El punto que pide la masa', introTitle:'Amasar no es solamente mover la masa: hay una condición que debes reconocer.',
    intro:<>La fuente describe el amasado como una etapa en la que se agrega la levadura y se incorpora más líquido hasta obtener una masa <strong>suave, lisa y elástica</strong>. Esta lección se concentra en reconocer esa condición y en ubicarla dentro del proceso completo.</>,
    central:'La idea central', centralTitle:'El resultado del amasado se lee en la masa.',
    centralText:'La secuencia general coloca el amasado después del premezclado y la autolisis. En ese momento se agrega la levadura y se continúa incorporando líquido hasta llegar a la condición que la fuente describe: una masa suave, lisa y elástica. Después vienen la primera fermentación, el ponchado, el porcionado y el formado.',
    where:'Dónde ocurre el amasado', before:'Antes', during:'Durante', after:'Después',
    beforeText:'Premezclado con los secos y autolisis.', duringText:'Se agrega la levadura y se adiciona más líquido durante el amasado.', afterText:'La masa pasa a primera fermentación, cubierta y en un lugar tibio.',
    tableNote:'La tabla organiza la secuencia descrita por la fuente. No añade una explicación externa sobre el mecanismo físico de la estructura de la masa.',
    soft:'1. Suave', softTitle:'Una condición de textura', softText:'La fuente utiliza “suave” como una de las tres características que debe alcanzar la masa durante el amasado.',
    smooth:'2. Lisa', smoothTitle:'Una condición de superficie', smoothText:'“Lisa” forma parte de la misma descripción del punto buscado. No se presenta en la fuente como un concepto separado.',
    elastic:'3. Elástica', elasticTitle:'Una condición de comportamiento', elasticText:'“Elástica” completa la descripción. Las tres palabras deben leerse juntas: suave, lisa y elástica.',
    observeTitle:'¿Qué debes observar?', o1:'1. La secuencia de incorporación', o1t:'La fuente coloca la levadura en el momento del amasado y señala que se adiciona más líquido hasta alcanzar la condición buscada.',
    o2:'2. Las tres palabras del punto', o2t:'Antes de avanzar, comprueba que puedes identificar qué describe la fuente cuando dice “suave, lisa y elástica”. No sustituyas esas palabras por un tiempo fijo de amasado que la fuente no proporciona.',
    o3:'3. Lo que ocurre después', o3t:'El amasado no termina el proceso. Una vez alcanzada la condición indicada, la masa pasa a la primera fermentación y continúa por el resto de la secuencia.',
    practice:'Práctica de observación', practiceTitle:'Describe la masa sin inventar un tiempo',
    practiceText:'Al trabajar una masa de pan de las recetas del curso, anota qué observas durante el amasado. Tu registro debe responder a tres preguntas: ¿la masa se siente suave?, ¿su superficie se ve lisa?, ¿presenta la elasticidad que describe la fuente? Después escribe qué etapa sigue en el proceso.',
    recipesTitle:'El mismo principio aparece en las recetas',
    recipesText:<>Las recetas del archivo de datos muestran distintas formas de llegar al trabajo de la masa. En el <strong>Pan de Ajo Esponjoso</strong>, por ejemplo, se mezclan los ingredientes secos con el agua y se amasa hasta obtener una masa suave y homogénea; después se incorpora la mantequilla y el ajo y se continúa amasando hasta integrar. En los <strong>Grissini</strong>, la indicación es amasar hasta obtener una masa lisa y homogénea. En las <strong>Conchas</strong>, se añade el agua poco a poco hasta obtener una masa suave y lisa.</>,
    recipesNote:'Estos ejemplos proceden de recetas concretas. Sus ingredientes, cantidades y pasos no sustituyen la secuencia general de la fuente.',
    limit:'Lo que todavía no estamos explicando', limitTitle:'No añadimos una teoría que la fuente no desarrolla.',
    limitText:'El material disponible indica qué se incorpora durante el amasado y qué condición debe alcanzar la masa, pero no desarrolla aquí una explicación detallada de cómo se forma la estructura, cómo se organiza el gluten ni cómo medir el desarrollo de la masa mediante pruebas específicas. Esos conceptos no se presentan como contenido de esta lección.',
    activity:'Actividad guiada', activityTitle:'Haz, observa y registra', activityText:'Durante el amasado, detente en los puntos que la receta utiliza para describir la masa. Anota cómo cambia su elasticidad, superficie o capacidad de formar una pieza.',
    check:'Comprueba tu aprendizaje', checkTitle:'Explica la secuencia', q1:'1. ¿Qué condición debe alcanzar la masa antes de continuar?', q2:'2. ¿Qué señales de estructura aparecen durante el trabajo?', q3:'3. ¿Qué relación puedes establecer entre amasado y formado sin agregar información que la fuente no da?',
    finish:'Al terminar', finishTitle:'Lo que debes llevarte de esta lección',
    t1:'El amasado tiene un lugar preciso: ocurre después del premezclado y la autolisis, y antes de la primera fermentación.', t2:'La levadura entra en esta etapa: la secuencia general indica agregarla al comenzar el amasado.', t3:'El punto se describe con tres palabras: la masa debe quedar suave, lisa y elástica.', t4:'No hay un tiempo general de amasado en la secuencia: la fuente describe una condición de la masa, mientras que algunas recetas concretas añaden sus propios tiempos o procedimientos.',
    source:'Nota sobre la fuente', sourceText:'El núcleo de esta lección procede de «Proceso para elaborar una masa» en data/curso.js: después de la autolisis se agrega la levadura y se comienza el amasado, adicionando más líquido hasta obtener una masa suave, lisa y elástica. Los ejemplos de Pan de Ajo, Grissini y Conchas proceden de data/recetas.js. La organización en observaciones, práctica y límites de contenido es organización pedagógica del curso.',
    next:'Siguiente lección', nextTitle:'Baguette: estructura, formado y greñado', nextText:'El siguiente paso será observar cómo el trabajo de la masa continúa en el formado de una pieza y cómo aparece el greñado en el proceso.', nextButton:'Volver al Módulo 4 →'
  },
  en: {
    eyebrow:'Lesson 27', title:'Kneading, Structure, and Tension', back:'Back to module',
    introEyebrow:'The condition the dough calls for', introTitle:'Kneading is not simply moving the dough: there is a condition you must learn to recognize.',
    intro:<>The source describes kneading as a stage in which yeast is added and more liquid is incorporated until the dough becomes <strong>soft, smooth, and elastic</strong>. This lesson focuses on recognizing that condition and locating it within the complete process.</>,
    central:'The central idea', centralTitle:'The result of kneading can be read in the dough.',
    centralText:'The general sequence places kneading after pre-mixing and autolyse. At that point, yeast is added and more liquid continues to be incorporated until the condition described by the source is reached: a soft, smooth, and elastic dough. First fermentation, punching down, portioning, and shaping follow.',
    where:'Where kneading occurs', before:'Before', during:'During', after:'After',
    beforeText:'Pre-mixing the dry ingredients and autolyse.', duringText:'Yeast is added and more liquid is incorporated during kneading.', afterText:'The dough moves to first fermentation, covered and kept in a warm place.',
    tableNote:'The table organizes the sequence described by the source. It does not add an external explanation of the physical mechanism of dough structure.',
    soft:'1. Soft', softTitle:'A texture condition', softText:'The source uses “soft” as one of the three characteristics the dough should reach during kneading.',
    smooth:'2. Smooth', smoothTitle:'A surface condition', smoothText:'“Smooth” is part of the same description of the desired condition. The source does not present it as a separate concept.',
    elastic:'3. Elastic', elasticTitle:'A behavioral condition', elasticText:'“Elastic” completes the description. The three words should be read together: soft, smooth, and elastic.',
    observeTitle:'What should you observe?', o1:'1. The order of incorporation', o1t:'The source places yeast at the kneading stage and states that more liquid is added until the desired condition is reached.',
    o2:'2. The three words describing the condition', o2t:'Before moving on, make sure you can identify what the source describes as “soft, smooth, and elastic.” Do not replace those words with a fixed kneading time that the source does not provide.',
    o3:'3. What happens next', o3t:'Kneading does not finish the process. Once the stated condition is reached, the dough moves to first fermentation and continues through the rest of the sequence.',
    practice:'Observation practice', practiceTitle:'Describe the dough without inventing a time',
    practiceText:'When working with a bread dough from the course recipes, write down what you observe during kneading. Your record should answer three questions: Does the dough feel soft? Does its surface look smooth? Does it show the elasticity described by the source? Then write down which stage follows.',
    recipesTitle:'The same principle appears in the recipes',
    recipesText:<>The recipes in the data file show different ways of working the dough. In <strong>Soft Garlic Bread</strong>, for example, the dry ingredients are mixed with water and kneaded until a soft, homogeneous dough is obtained; butter and garlic are then incorporated and kneading continues until integrated. In <strong>Grissini</strong>, the instruction is to knead until a smooth, homogeneous dough is obtained. In <strong>Conchas</strong>, water is added gradually until the dough becomes soft and smooth.</>,
    recipesNote:'These examples come from specific recipes. Their ingredients, quantities, and steps do not replace the source’s general sequence.',
    limit:'What we are not explaining yet', limitTitle:'We do not add a theory that the source does not develop.',
    limitText:'The available material indicates what is incorporated during kneading and what condition the dough should reach, but it does not provide a detailed explanation here of how structure forms, how gluten is organized, or how dough development can be measured through specific tests. Those concepts are not presented as content for this lesson.',
    activity:'Guided activity', activityTitle:'Do, observe, and record', activityText:'During kneading, stop at the points the recipe uses to describe the dough. Record how its elasticity, surface, or ability to form a piece changes.',
    check:'Check your learning', checkTitle:'Explain the sequence', q1:'1. What condition should the dough reach before continuing?', q2:'2. What signs of structure appear during the process?', q3:'3. What relationship can you establish between kneading and shaping without adding information the source does not provide?',
    finish:'When you finish', finishTitle:'What you should take away from this lesson',
    t1:'Kneading has a precise place: it occurs after pre-mixing and autolyse, and before first fermentation.', t2:'Yeast enters at this stage: the general sequence says to add it when kneading begins.', t3:'The target is described with three words: the dough should be soft, smooth, and elastic.', t4:'There is no general kneading time in the sequence: the source describes a dough condition, while specific recipes may add their own times or procedures.',
    source:'Source note', sourceText:'The core of this lesson comes from “Proceso para elaborar una masa” in data/curso.js: after autolyse, yeast is added and kneading begins, with more liquid added until a soft, smooth, and elastic dough is obtained. The Garlic Bread, Grissini, and Conchas examples come from data/recetas.js. The organization into observations, practice, and content limits is pedagogical organization by the course.',
    next:'Next lesson', nextTitle:'Baguette: Structure, Shaping, and Scoring', nextText:'The next step is to observe how dough work continues through shaping a piece and how scoring appears in the process.', nextButton:'Back to Module 4 →'
  }
};

export default function LessonTwentySevenPage() {
  const { locale = 'es' } = useRouter();
  const t = locale === 'en' ? content.en : content.es;
  const observations = [[t.o1,t.o1t,'amber'],[t.o2,t.o2t,'stone'],[t.o3,t.o3t,'stone']];
  const takeaways = [t.t1,t.t2,t.t3,t.t4];

  return (
    <CourseShell eyebrow={t.eyebrow} title={t.title} backHref={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} backLabel={t.back}>
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.introEyebrow}</p><h2 className="mt-3 text-2xl font-semibold text-stone-900">{t.introTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.central}</p><h2 className="mt-2 text-2xl font-semibold">{t.centralTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">{t.centralText}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.where}</h2><div className="mt-6 overflow-hidden rounded-2xl border border-stone-200"><div className="grid grid-cols-3 bg-stone-100 text-sm font-semibold text-stone-700"><div className="p-4">{t.before}</div><div className="p-4">{t.during}</div><div className="p-4">{t.after}</div></div><div className="grid grid-cols-3 border-t border-stone-200 text-sm text-stone-700"><div className="p-4">{t.beforeText}</div><div className="p-4">{t.duringText}</div><div className="p-4">{t.afterText}</div></div></div><p className="mt-4 text-sm leading-6 text-stone-500">{t.tableNote}</p></section>
        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6"><p className="text-sm font-medium text-amber-800">{t.soft}</p><h3 className="mt-2 text-xl font-semibold text-amber-950">{t.softTitle}</h3><p className="mt-3 leading-7 text-amber-950">{t.softText}</p></article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{t.smooth}</p><h3 className="mt-2 text-xl font-semibold text-stone-900">{t.smoothTitle}</h3><p className="mt-3 leading-7 text-stone-700">{t.smoothText}</p></article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{t.elastic}</p><h3 className="mt-2 text-xl font-semibold text-stone-900">{t.elasticTitle}</h3><p className="mt-3 leading-7 text-stone-700">{t.elasticText}</p></article>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.observeTitle}</h2><div className="mt-5 space-y-5">{observations.map(([title,text,tone])=><div key={title} className={`rounded-2xl p-5 ${tone==='amber'?'bg-amber-50':'bg-stone-100'}`}><p className={`font-semibold ${tone==='amber'?'text-amber-900':'text-stone-900'}`}>{title}</p><p className={`mt-2 leading-7 ${tone==='amber'?'text-amber-950':'text-stone-700'}`}>{text}</p></div>)}</div></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.practice}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.practiceTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.practiceText}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.recipesTitle}</h2><p className="mt-4 leading-7 text-stone-700">{t.recipesText}</p><p className="mt-4 text-sm leading-6 text-stone-500">{t.recipesNote}</p></section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-900">{t.limit}</p><h2 className="mt-2 text-xl font-semibold text-amber-950">{t.limitTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.limitText}</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.activity}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.activityTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.activityText}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium text-stone-500">{t.check}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.checkTitle}</h2><div className="mt-4 space-y-3 text-stone-700"><p>{t.q1}</p><p>{t.q2}</p><p>{t.q3}</p></div></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.finish}</p><h2 className="mt-2 text-2xl font-semibold">{t.finishTitle}</h2><div className="mt-5 space-y-4 text-stone-100">{takeaways.map(item=>{const [lead,...rest]=item.split(':');return <p key={item} className="leading-7"><strong>{lead}:</strong>{rest.join(':')}</p>;})}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{t.source}</p><p className="mt-2 leading-7 text-stone-700">{t.sourceText}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.next}</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">{t.nextTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.nextText}</p><a href={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">{t.nextButton}</a></section>
      </div>
    </CourseShell>
  );
}
