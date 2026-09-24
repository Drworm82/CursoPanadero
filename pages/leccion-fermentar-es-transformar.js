import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const content = {
  es: {
    eyebrow: 'Lección 26', title: 'Fermentar es transformar', back: 'Volver al módulo',
    introEyebrow: 'La masa cambia con el tiempo', introTitle: 'La fermentación se puede leer observando la masa.',
    intro: 'La fuente coloca la levadura antes de la fermentación y utiliza una señal visual concreta para decidir cuándo avanzar: el aumento de volumen. En esta lección vamos a concentrarnos en esa relación entre etapa, tiempo y cambio observable, sin añadir mecanismos que la fuente no desarrolla.',
    central: 'La idea central', centralTitle: 'No leas la fermentación solamente como un reloj.',
    centralText: 'En el proceso de la fuente, la primera fermentación continúa hasta que la masa dobla su volumen. Después viene el ponchado, el porcionado y el formado. Las piezas vuelven a fermentar hasta doblar su volumen antes de continuar hacia el terminado y el horneado.',
    first: 'Primera fermentación', firstTitle: 'La masa completa cambia',
    firstText: 'La fuente indica dejar la masa tapada en un lugar tibio hasta que doble su volumen. Esa es la señal que marca el paso siguiente: desgasificado o ponchado.',
    second: 'Segunda fermentación', secondTitle: 'Las piezas vuelven a cambiar',
    secondText: 'Después del porcionado y formado, las piezas se dejan nuevamente hasta que doblen su volumen. La fermentación aparece así en dos momentos distintos del mismo proceso.',
    compareTitle: 'Dos fermentaciones, dos momentos de observación', moment: 'Momento', sequence: 'Qué ocurre en la secuencia', signal: 'Señal indicada por la fuente',
    firstMoment: 'Primera fermentación', firstSequence: 'La masa permanece tapada antes del ponchado.',
    secondMoment: 'Segunda fermentación', secondSequence: 'Las piezas ya formadas permanecen antes del terminado y horneado.',
    double: 'Dobla su volumen.', doubles: 'Doblan su volumen.',
    tableNote: 'La tabla organiza pedagógicamente la secuencia de la fuente; no añade una explicación del mecanismo de fermentación.',
    observeTitle: '¿Qué debes observar?',
    obs1Title: '1. El volumen antes y después', obs1: 'No te limites a mirar la masa una sola vez. Compara su volumen al comenzar la fermentación y cuando la fuente indica que está lista para avanzar.',
    obs2Title: '2. Qué sucede entre las dos fermentaciones', obs2: 'La primera fermentación no lleva directamente al horno. Después aparecen el ponchado, el porcionado y el formado. Solo entonces comienza la segunda fermentación.',
    obs3Title: '3. La señal frente al tiempo', obs3: 'En la secuencia general de la fuente, la referencia para ambas fermentaciones es el doble de volumen, no una duración concreta. Algunas recetas del mismo archivo sí proporcionan tiempos específicos, por lo que conviene distinguir una referencia de volumen de un tiempo de receta.',
    obs4Title: '4. La fermentación no aparece aislada', obs4: 'Observa su lugar dentro de la secuencia completa: amasado → primera fermentación → ponchado → porcionado → formado → segunda fermentación → terminado → horneado.',
    practiceEyebrow: 'Práctica de observación', practiceTitle: 'Marca el cambio',
    practice: 'Si preparas una masa fermentada, registra visualmente su volumen antes de la primera fermentación y vuelve a observarla cuando haya alcanzado el doble. Después del ponchado y formado, repite la observación con las piezas. La finalidad es entrenar la lectura del cambio, no memorizar un tiempo único.',
    limitEyebrow: 'Lo que todavía no estamos explicando', limitTitle: 'Primero aprendemos a reconocer la señal.',
    limit: 'La fuente disponible para este módulo indica la presencia de la levadura y las etapas de fermentación, pero no desarrolla aquí una explicación detallada del mecanismo biológico ni de los factores que controlan su velocidad. Por eso esta lección se limita a lo que sí podemos observar y documentar en la fuente.',
    activityEyebrow: 'Actividad guiada', activityTitle: 'Haz, observa y registra',
    activity: 'Observa la masa antes y después del reposo. Registra qué cambió en volumen, textura o manejo y evita usar solamente el tiempo como descripción.',
    checkEyebrow: 'Comprueba tu aprendizaje', checkTitle: 'Explica la secuencia',
    q1: '1. ¿Qué cambio observable relacionas con la fermentación?', q2: '2. ¿Qué diferencia hay entre dejar reposar una masa y reconocer que ya avanzó la fermentación?', q3: '3. ¿Qué información aporta la receta para decidir cuándo continuar?',
    finishEyebrow: 'Al terminar', finishTitle: 'Lo que debes llevarte de esta lección',
    takeaway1: 'La fuente usa el volumen como señal: la primera y la segunda fermentación avanzan hasta que la masa o las piezas doblan su volumen.',
    takeaway2: 'Hay dos momentos de fermentación en la secuencia: uno antes del ponchado y formado, y otro después del formado.',
    takeaway3: 'La fermentación forma parte de una secuencia: no aparece separada del amasado, porcionado, formado y horneado.',
    takeaway4: 'Un tiempo de receta y una señal visual no son lo mismo: la secuencia general usa el doble de volumen como referencia, mientras que algunas recetas concretas especifican minutos u horas.',
    sourceTitle: 'Nota sobre la fuente', source: 'La secuencia de esta lección procede de «Proceso para elaborar una masa» en data/curso.js y de las recetas de panificación del mismo archivo de datos. La comparación entre primera y segunda fermentación, las preguntas de observación y la práctica son organización pedagógica del curso. No se presenta aquí como fuente una explicación biológica que el material disponible no desarrolla.',
    nextEyebrow: 'Siguiente lección', nextTitle: 'Amasado, estructura y tensión',
    nextText: 'El siguiente paso es volver al amasado: qué condición de la masa pide la fuente y cómo se relaciona esa etapa con el resto del proceso.', nextButton: 'Volver al Módulo 4 →'
  },
  en: {
    eyebrow: 'Lesson 26', title: 'Fermentation Is Transformation', back: 'Back to module',
    introEyebrow: 'The dough changes over time', introTitle: 'Fermentation can be read by observing the dough.',
    intro: 'The source places yeast before fermentation and uses a concrete visual signal to decide when to move forward: increased volume. In this lesson, we focus on the relationship between stage, time, and observable change without adding mechanisms that the source does not develop.',
    central: 'The central idea', centralTitle: 'Do not read fermentation only as a clock.',
    centralText: 'In the source process, the first fermentation continues until the dough doubles in volume. Punching down, portioning, and shaping follow. The pieces ferment again until they double in volume before moving on to finishing and baking.',
    first: 'First fermentation', firstTitle: 'The whole dough changes',
    firstText: 'The source instructs us to leave the covered dough in a warm place until it doubles in volume. That is the signal for the next step: degassing or punching down.',
    second: 'Second fermentation', secondTitle: 'The pieces change again',
    secondText: 'After portioning and shaping, the pieces are left again until they double in volume. Fermentation therefore appears at two different points in the same process.',
    compareTitle: 'Two fermentations, two moments to observe', moment: 'Stage', sequence: 'What happens in the sequence', signal: 'Signal given by the source',
    firstMoment: 'First fermentation', firstSequence: 'The dough remains covered before punching down.',
    secondMoment: 'Second fermentation', secondSequence: 'The shaped pieces remain before finishing and baking.',
    double: 'Doubles in volume.', doubles: 'Double in volume.',
    tableNote: 'The table organizes the source sequence pedagogically; it does not add an explanation of the fermentation mechanism.',
    observeTitle: 'What should you observe?',
    obs1Title: '1. Volume before and after', obs1: 'Do not look at the dough only once. Compare its volume when fermentation begins with its volume when the source indicates that it is ready to move forward.',
    obs2Title: '2. What happens between the two fermentations', obs2: 'The first fermentation does not lead directly to the oven. Punching down, portioning, and shaping come next. Only then does the second fermentation begin.',
    obs3Title: '3. The signal versus time', obs3: 'In the source’s general sequence, the reference for both fermentations is doubled volume, not a specific duration. Some recipes in the same file do provide specific times, so distinguish a volume reference from a recipe time.',
    obs4Title: '4. Fermentation does not appear in isolation', obs4: 'Observe its place in the complete sequence: kneading → first fermentation → punching down → portioning → shaping → second fermentation → finishing → baking.',
    practiceEyebrow: 'Observation practice', practiceTitle: 'Mark the change',
    practice: 'If you prepare a fermented dough, visually record its volume before the first fermentation and observe it again when it has doubled. After punching down and shaping, repeat the observation with the pieces. The purpose is to train your ability to read change, not to memorize a single time.',
    limitEyebrow: 'What we are not explaining yet', limitTitle: 'First, learn to recognize the signal.',
    limit: 'The source available for this module identifies yeast and the stages of fermentation, but it does not provide a detailed explanation here of the biological mechanism or the factors controlling its speed. This lesson therefore stays with what we can observe and document from the source.',
    activityEyebrow: 'Guided activity', activityTitle: 'Do, observe, and record',
    activity: 'Observe the dough before and after resting. Record what changed in volume, texture, or handling, and avoid using time alone as your description.',
    checkEyebrow: 'Check your learning', checkTitle: 'Explain the sequence',
    q1: '1. What observable change do you associate with fermentation?', q2: '2. What is the difference between letting dough rest and recognizing that fermentation has progressed?', q3: '3. What information does the recipe provide to decide when to continue?',
    finishEyebrow: 'When you finish', finishTitle: 'What you should take away from this lesson',
    takeaway1: 'The source uses volume as a signal: first and second fermentation continue until the dough or pieces double in volume.',
    takeaway2: 'There are two fermentation moments in the sequence: one before punching down and shaping, and another after shaping.',
    takeaway3: 'Fermentation is part of a sequence: it does not appear separately from kneading, portioning, shaping, and baking.',
    takeaway4: 'A recipe time and a visual signal are not the same thing: the general sequence uses doubled volume as a reference, while specific recipes may specify minutes or hours.',
    sourceTitle: 'Source note', source: 'This lesson’s sequence comes from “Proceso para elaborar una masa” in data/curso.js and from the bread recipes in the same data file. The comparison between first and second fermentation, the observation questions, and the practice are pedagogical organization by the course. This page does not present a biological explanation that the available material does not develop.',
    nextEyebrow: 'Next lesson', nextTitle: 'Kneading, Structure, and Tension',
    nextText: 'The next step is to return to kneading: what condition of the dough the source calls for and how that stage relates to the rest of the process.', nextButton: 'Back to Module 4 →'
  }
};

export default function LessonTwentySixPage() {
  const { locale = 'es' } = useRouter();
  const t = locale === 'en' ? content.en : content.es;
  const observations = [[t.obs1Title,t.obs1,'amber'],[t.obs2Title,t.obs2,'stone'],[t.obs3Title,t.obs3,'stone'],[t.obs4Title,t.obs4,'stone']];
  const takeaways = [t.takeaway1,t.takeaway2,t.takeaway3,t.takeaway4];

  return (
    <CourseShell eyebrow={t.eyebrow} title={t.title} backHref={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} backLabel={t.back}>
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.introEyebrow}</p><h2 className="mt-3 text-2xl font-semibold text-stone-900">{t.introTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.central}</p><h2 className="mt-2 text-2xl font-semibold">{t.centralTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">{t.centralText}</p></section>
        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7"><p className="text-sm font-medium text-amber-800">{t.first}</p><h3 className="mt-2 text-2xl font-semibold text-amber-950">{t.firstTitle}</h3><p className="mt-4 leading-7 text-amber-950">{t.firstText}</p></article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7"><p className="text-sm font-medium text-stone-500">{t.second}</p><h3 className="mt-2 text-2xl font-semibold text-stone-900">{t.secondTitle}</h3><p className="mt-4 leading-7 text-stone-700">{t.secondText}</p></article>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.compareTitle}</h2><div className="mt-6 overflow-hidden rounded-2xl border border-stone-200"><div className="grid grid-cols-3 bg-stone-100 text-sm font-semibold text-stone-700"><div className="p-4">{t.moment}</div><div className="p-4">{t.sequence}</div><div className="p-4">{t.signal}</div></div><div className="grid grid-cols-3 border-t border-stone-200 text-sm text-stone-700"><div className="p-4 font-medium">{t.firstMoment}</div><div className="p-4">{t.firstSequence}</div><div className="p-4">{t.double}</div></div><div className="grid grid-cols-3 border-t border-stone-200 text-sm text-stone-700"><div className="p-4 font-medium">{t.secondMoment}</div><div className="p-4">{t.secondSequence}</div><div className="p-4">{t.doubles}</div></div></div><p className="mt-4 text-sm leading-6 text-stone-500">{t.tableNote}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.observeTitle}</h2><div className="mt-5 space-y-5">{observations.map(([title,text,tone])=><div key={title} className={`rounded-2xl p-5 ${tone==='amber'?'bg-amber-50':'bg-stone-100'}`}><p className={`font-semibold ${tone==='amber'?'text-amber-900':'text-stone-900'}`}>{title}</p><p className={`mt-2 leading-7 ${tone==='amber'?'text-amber-950':'text-stone-700'}`}>{text}</p></div>)}</div></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.practiceEyebrow}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.practiceTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.practice}</p></section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-900">{t.limitEyebrow}</p><h2 className="mt-2 text-xl font-semibold text-amber-950">{t.limitTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.limit}</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.activityEyebrow}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.activityTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.activity}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium text-stone-500">{t.checkEyebrow}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.checkTitle}</h2><div className="mt-4 space-y-3 text-stone-700"><p>{t.q1}</p><p>{t.q2}</p><p>{t.q3}</p></div></section>
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.finishEyebrow}</p><h2 className="mt-2 text-2xl font-semibold">{t.finishTitle}</h2><div className="mt-5 space-y-4 text-stone-100">{takeaways.map(item=>{const [lead,...rest]=item.split(':');return <p key={item} className="leading-7"><strong>{lead}:</strong>{rest.join(':')}</p>;})}</div></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{t.sourceTitle}</p><p className="mt-2 leading-7 text-stone-700">{t.source}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.nextEyebrow}</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">{t.nextTitle}</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.nextText}</p><a href={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">{t.nextButton}</a></section>
      </div>
    </CourseShell>
  );
}
