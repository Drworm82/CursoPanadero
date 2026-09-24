import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const es = {
  eyebrow: 'Lección 25', title: 'El proceso completo de una masa', back: 'Volver al módulo',
  introLabel: 'Entrada al módulo', introTitle: 'Una masa fermentada no se entiende mirando solamente el horno.',
  intro: 'En esta lección vamos a leer el proceso completo como una secuencia. La fuente organiza la elaboración desde identificar y pesar los ingredientes hasta enfriar y terminar la pieza. El objetivo aquí es reconocer qué sucede en cada etapa y qué señal permite pasar a la siguiente.',
  central: 'La idea central', centralTitle: 'El pan se construye por etapas.',
  centralText: 'La secuencia de la fuente incluye pesado, premezclado, autolisis, amasado, primera fermentación, desgasificado, porcionado, formado, segunda fermentación, terminado, horneado y enfriado. Antes de estudiar panes concretos, conviene aprender a reconocer esta secuencia.',
  sequence: 'La secuencia completa', sequenceText: 'No todas las etapas tienen la misma función ni ocurren de la misma manera en todos los panes. Por ahora, usa esta lista como mapa del proceso que presenta la fuente.',
  during: 'Durante la masa', observe: 'Busca cambios observables', duringText: 'La fuente da señales concretas en distintos puntos: una masa suave, lisa y elástica después del amasado, y el doble de volumen como referencia para la primera y segunda fermentación.',
  process: 'Durante el proceso', noSkip: 'No saltes etapas', processText: 'El mapa permite ubicar dónde estás antes de modificar la masa. Primero se prepara, después se desarrolla mediante el proceso indicado, luego fermenta, se divide, se forma y vuelve a fermentar.',
  what: '¿Qué debes observar?', practice: 'Práctica de lectura', line: 'Convierte una receta en una línea de proceso',
  practiceText: 'Antes de preparar una masa fermentada, escribe la secuencia en una sola línea: pesado → premezclado → autolisis → amasado → primera fermentación → ponchado → porcionado → formado → segunda fermentación → terminado → horneado → enfriado. Después compara esa línea con la receta que estés trabajando y marca cualquier etapa que cambie.',
  precision: 'Una precisión importante', terminology: 'Conservamos la terminología de la fuente.',
  precisionText: 'En el paso 11, la fuente llama al horneado «Tercera fermentación» y explica que el producto final sube en el horno. Esta lección conserva esa formulación como parte del material de origen; no la sustituye por una explicación externa.',
  activity: 'Actividad guiada', activityTitle: 'Haz, observa y registra', activityText: 'Antes de trabajar, reconstruye en una hoja la secuencia de la masa desde el pesado hasta el enfriado. Durante la preparación, marca cada etapa cuando realmente la hayas realizado y anota qué cambió.',
  check: 'Comprueba tu aprendizaje', explain: 'Explica la secuencia', finish: 'Al terminar', takeaway: 'Lo que debes llevarte de esta lección',
  source: 'Nota sobre la fuente', sourceText: 'La secuencia de esta lección procede de la sección «Proceso para elaborar una masa» de la fuente del curso. La organización en bloques, las preguntas de observación y la práctica de convertir el procedimiento en una línea de proceso son organización pedagógica del curso. No se añaden aquí mecanismos técnicos que la fuente no desarrolla.',
  continuation: 'Continuación del módulo', map: 'La secuencia será nuestro mapa', continuationText: 'Las siguientes lecciones tomarán esta secuencia como punto de partida para comparar fermentación, amasado, formado y diferentes familias de pan.'
};

const en = {
  eyebrow: 'Lesson 25', title: 'The Complete Dough Process', back: 'Back to module',
  introLabel: 'Module entry', introTitle: 'A fermented dough cannot be understood by looking only at the oven.',
  intro: 'In this lesson we read the complete process as a sequence. The source organizes production from identifying and weighing the ingredients through cooling and finishing the piece. The objective is to recognize what happens at each stage and what signal allows us to move to the next one.',
  central: 'The central idea', centralTitle: 'Bread is built in stages.',
  centralText: 'The source sequence includes weighing, pre-mixing, autolyse, mixing, first fermentation, degassing, portioning, shaping, second fermentation, finishing, baking, and cooling. Before studying specific breads, it is useful to learn to recognize this sequence.',
  sequence: 'The complete sequence', sequenceText: 'Not all stages have the same function or occur in the same way in every bread. For now, use this list as a map of the process presented by the source.',
  during: 'During the dough process', observe: 'Look for observable changes', duringText: 'The source gives concrete signals at different points: a soft, smooth, elastic dough after mixing, and doubled volume as the reference for the first and second fermentation.',
  process: 'During the process', noSkip: 'Do not skip stages', processText: 'The map lets you locate where you are before modifying the dough. First it is prepared, then developed through the indicated process, then fermented, divided, shaped, and fermented again.',
  what: 'What should you observe?', practice: 'Reading practice', line: 'Turn a recipe into a process line',
  practiceText: 'Before preparing a fermented dough, write the sequence on one line: weighing → pre-mixing → autolyse → mixing → first fermentation → degassing → portioning → shaping → second fermentation → finishing → baking → cooling. Then compare that line with the recipe you are working on and mark any stage that changes.',
  precision: 'An important precision', terminology: 'We preserve the source terminology.',
  precisionText: 'In step 11, the source calls baking «Third fermentation» and explains that the final product rises in the oven. This lesson preserves that wording as part of the source material; it does not replace it with an external explanation.',
  activity: 'Guided activity', activityTitle: 'Do, observe, and record', activityText: 'Before working, reconstruct the dough sequence on a sheet from weighing through cooling. During preparation, mark each stage when you actually complete it and note what changed.',
  check: 'Check your learning', explain: 'Explain the sequence', finish: 'At the end', takeaway: 'What you should take away from this lesson',
  source: 'Source note', sourceText: 'This lesson sequence comes from the course source section «Process for making a dough». The block organization, observation questions, and practice of turning the procedure into a process line are pedagogical organization for the course. No technical mechanisms that the source does not develop are added here.',
  continuation: 'Module continuation', map: 'The sequence will be our map', continuationText: 'The following lessons will use this sequence as a starting point for comparing fermentation, mixing, shaping, and different bread families.'
};

const stepsEs = [
['1','Identificar y pesar ingredientes','El proceso comienza antes de mezclar: primero se identifican y pesan los ingredientes.'],
['2','Premezclado con los secos','La fuente indica mezclar los secos con huevo, grasas en baja proporción sin la levadura y la mitad del líquido.'],
['3','Autolisis','La secuencia incluye una etapa de autolisis antes del amasado.'],
['4','Amasado','Se agrega la levadura y comienza el amasado; se incorpora más líquido hasta obtener una masa suave, lisa y elástica.'],
['5','Primera fermentación','La masa se deja tapada en un lugar tibio hasta que doble su volumen.'],
['6','Desgasificado o ponchado','Después de la primera fermentación, la fuente indica desgasificar la masa.'],
['7','Porcionado de piezas','La masa se divide en las piezas que se van a trabajar.'],
['8','Formado','Las piezas porcionadas pasan al formado.'],
['9','Segunda fermentación','Las piezas formadas se dejan hasta que doblen su volumen.'],
['10','Terminado y acabados','La secuencia contempla una etapa de terminado antes del horneado.'],
['11','Horneado','La fuente identifica el horneado como «Tercera fermentación» y señala que el producto final sube en el horno.'],
['12','Enfriado y acabado','El proceso termina con el enfriado y el acabado.']
];
const stepsEn = [
['1','Identify and weigh ingredients','The process begins before mixing: first, the ingredients are identified and weighed.'],
['2','Pre-mixing with the dry ingredients','The source indicates mixing the dry ingredients with egg, low-proportion fats without the yeast, and half of the liquid.'],
['3','Autolyse','The sequence includes an autolyse stage before mixing.'],
['4','Mixing','Yeast is added and mixing begins; more liquid is incorporated until the dough is soft, smooth, and elastic.'],
['5','First fermentation','The dough is covered and left in a warm place until it doubles in volume.'],
['6','Degassing or punching down','After the first fermentation, the source indicates degassing the dough.'],
['7','Portioning pieces','The dough is divided into the pieces to be worked.'],
['8','Shaping','The portioned pieces move to shaping.'],
['9','Second fermentation','The shaped pieces are left until they double in volume.'],
['10','Finishing and final touches','The sequence includes a finishing stage before baking.'],
['11','Baking','The source identifies baking as «Third fermentation» and states that the final product rises in the oven.'],
['12','Cooling and finishing','The process ends with cooling and finishing.']
];

export default function LessonTwentyFivePage() {
 const { locale='es' } = useRouter();
 const t=locale==='en'?en:es;
 const steps=locale==='en'?stepsEn:stepsEs;
 return <CourseShell eyebrow={t.eyebrow} title={t.title} backHref={locale==='en'?'/en/modulo-4':'/modulo-4'} backLabel={t.back}>
  <div className="space-y-8">
   <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.introLabel}</p><h2 className="mt-3 text-2xl font-semibold text-stone-900">{t.introTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p></section>
   <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.central}</p><h2 className="mt-2 text-2xl font-semibold">{t.centralTitle}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">{t.centralText}</p></section>
   <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.sequence}</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.sequenceText}</p><div className="mt-6 space-y-3">{steps.map(([n,title,desc])=><article key={n} className="rounded-2xl bg-stone-100 p-5"><div className="flex items-start gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-stone-700">{n}</span><div><h3 className="font-semibold text-stone-900">{title}</h3><p className="mt-2 leading-7 text-stone-700">{desc}</p></div></div></article>)}</div></section>
   <section className="grid gap-4 md:grid-cols-2"><article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-7"><p className="text-sm font-medium text-amber-800">{t.during}</p><h3 className="mt-2 text-2xl font-semibold text-amber-950">{t.observe}</h3><p className="mt-4 leading-7 text-amber-950">{t.duringText}</p></article><article className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7"><p className="text-sm font-medium text-stone-500">{t.process}</p><h3 className="mt-2 text-2xl font-semibold text-stone-900">{t.noSkip}</h3><p className="mt-4 leading-7 text-stone-700">{t.processText}</p></article></section>
   <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><h2 className="text-2xl font-semibold text-stone-900">{t.what}</h2><div className="mt-5 space-y-5">{(locale==='en'?[['1. The order of the stages','Identify when mixing, first fermentation, punching down, shaping, and second fermentation appear. The sequence is part of what you are learning.'],['2. The signal of a dough ready to advance','During mixing, the source describes a soft, smooth, elastic dough. In both fermentations, it uses doubled volume as the signal. Observe those references instead of advancing only by time.'],['3. What changes after each intervention','Compare the dough before and after mixing, first fermentation, punching down, and shaping. You do not need to add explanations the source does not develop: you need to learn to read the sequence.'],['4. The process continues after the oven','The map ends with cooling and finishing. Do not treat leaving the oven as the automatic end of the process.']]:[['1. El orden de las etapas','Identifica en qué momento aparecen el amasado, la primera fermentación, el ponchado, el formado y la segunda fermentación. La secuencia es parte de lo que estás aprendiendo.'],['2. La señal de una masa lista para avanzar','En el amasado, la fuente describe una masa suave, lisa y elástica. En las dos fermentaciones, utiliza el doble de volumen como señal. Observa esas referencias en lugar de avanzar solamente por tiempo.'],['3. Qué cambia después de cada intervención','Compara la masa antes y después del amasado, de la primera fermentación, del ponchado y del formado. Por ahora no necesitas añadir explicaciones que la fuente no desarrolla: necesitas aprender a leer la secuencia.'],['4. El proceso continúa después del horno','El mapa termina con enfriado y acabado. No tomes la salida del horno como el final automático del proceso.']]).map(([a,b])=><div key={a} className="rounded-2xl bg-stone-100 p-5"><p className="font-semibold text-stone-900">{a}</p><p className="mt-2 leading-7 text-stone-700">{b}</p></div>)}</div></section>
   <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.practice}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.line}</h2><p className="mt-2 leading-7 text-stone-600">{t.practiceText}</p></section>
   <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-900">{t.precision}</p><h2 className="mt-2 text-xl font-semibold text-amber-950">{t.terminology}</h2><p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.precisionText}</p></section>
   <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-800">{t.activity}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.activityTitle}</h2><p className="mt-2 leading-7 text-stone-600">{t.activityText}</p></section>
   <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium text-stone-500">{t.check}</p><h2 className="mt-2 text-xl font-semibold text-stone-900">{t.explain}</h2><div className="mt-4 space-y-3 text-stone-700">{(locale==='en'?['1. What stages appear before fermentation?','2. What signal do you use to recognize that a stage has ended?','3. What operations occur after baking?']:['1. ¿Qué etapas aparecen antes de la fermentación?','2. ¿Qué señal utilizas para reconocer que una etapa terminó?','3. ¿Qué operaciones ocurren después del horneado?']).map(x=><p key={x}>{x}</p>)}</div></section>
   <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8"><p className="text-sm font-medium text-stone-300">{t.finish}</p><h2 className="mt-2 text-2xl font-semibold">{t.takeaway}</h2><div className="mt-5 space-y-4 text-stone-100">{(locale==='en'?[['A fermented dough is worked in stages:','the source presents a sequence from weighing through cooling and finishing.'],['Mixing has a concrete signal:','the dough should reach a soft, smooth, elastic condition according to the sequence presented.'],['Fermentation also has an observable reference:','the source uses doubled volume for the first and second fermentation.'],['Shaping occurs after portioning:','the pieces are shaped before the second fermentation.'],['The process does not end when the piece leaves the oven:','cooling and finishing still remain.']]:[['Una masa fermentada se trabaja por etapas:','la fuente presenta una secuencia que va desde el pesado hasta el enfriado y acabado.'],['El amasado tiene una señal concreta:','la masa debe llegar a una condición suave, lisa y elástica según la secuencia presentada.'],['La fermentación también tiene una referencia observable:','la fuente utiliza el doble de volumen para la primera y la segunda fermentación.'],['El formado ocurre después del porcionado:','las piezas se forman antes de la segunda fermentación.'],['El proceso no termina al sacar la pieza del horno:','todavía quedan el enfriado y el acabado.']]).map(([a,b])=><p key={a} className="leading-7"><strong>{a}</strong> {b}</p>)}</div></section>
   <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{t.source}</p><p className="mt-2 leading-7 text-stone-700">{t.sourceText}</p></section>
   <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.continuation}</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">{t.map}</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.continuationText}</p><a href={locale==='en'?'/en/modulo-4':'/modulo-4'} className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">{t.back} →</a></section>
  </div>
 </CourseShell>;
}
