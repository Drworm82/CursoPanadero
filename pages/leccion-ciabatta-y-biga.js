import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const content = {
  es: {
    eyebrow: 'Lección 30',
    title: 'Ciabatta y biga',
    back: 'Volver al módulo',
    demoLabel: 'Un concepto que sí está en la fuente',
    introTitle: 'La Clase 25 documenta una Ciabatta (únicamente demo) y su biga.',
    intro: 'La Clase 25 presenta una Ciabatta marcada como “UNICAMENTE DEMO”, con una fórmula de biga, fórmula de masa, cubierta y procedimiento. Además, la fuente define la biga como un pre-fermento denso y poco hidratado. Esta lección distingue lo que está documentado en la demostración de aquello que el texto deja remitido al procedimiento mostrado en clase.',
    formulaTitle: 'Ciabatta: fórmula y procedimiento de la demostración',
    biga: 'Biga',
    bigaText: '2 kg de harina, 1.3 L de agua y 20 g de levadura fresca. La fuente indica prepararla 8 horas antes.',
    doughCover: 'Masa y cubierta',
    doughCoverText: '440 g de harina, 200 ml de agua, 45 g de sal, 20 g de malta y 50 ml de aceite de oliva. La cubierta lleva 100 g de harina y 100 g de sémola.',
    procedure: 'Para la biga, la fuente indica mezclar y dejar reposar 8 horas. Para la masa: mezclar la biga con los demás ingredientes hasta obtener una masa suave, fermentar, desgasificar, moldear según demostración, pasar por aceite de oliva, espolvorear la cubierta, fermentar y hornear a 220 °C. Al final se espolvorean harina y sémola.',
    centralLabel: 'La idea central',
    centralTitle: 'Un prefermento es una parte del proceso, no una receta completa.',
    central: 'La fuente distingue cuatro términos: masa madre, poolish, biga y masa vieja. Cada uno recibe una descripción breve. La biga no se presenta como una receta detallada, sino como un pre-fermento denso y poco hidratado. Por eso podemos reconocer su lugar conceptual sin inventar cantidades, tiempos o pasos.',
    termsTitle: 'Los cuatro términos de la fuente',
    terms: [
      ['Masa madre', 'Fermento natural', 'La fuente la define como un fermento natural de harina y agua.'],
      ['Poolish', 'Pre-fermento líquido', 'Se describe como un pre-fermento líquido hecho con partes iguales de harina y agua, más levadura.'],
      ['Biga', 'Pre-fermento denso y poco hidratado', 'Esta es la definición concreta que proporciona el material y el centro de esta lección.'],
      ['Masa vieja', 'Trozo de masa del día anterior', 'La fuente indica que se utiliza como fermento.']
    ],
    meaningTitle: '¿Qué significa “denso y poco hidratado” dentro de esta fuente?',
    meaning: [
      ['La fuente sí establece una característica', 'La biga se diferencia del poolish por la descripción que recibe: uno es presentado como pre-fermento líquido y la otra como pre-fermento denso y poco hidratado.'],
      ['La fuente sí proporciona una fórmula para la biga de esta demostración', 'Para esta demostración sí aparecen cantidades: 2 kg de harina, 1.3 L de agua y 20 g de levadura fresca, con 8 horas de reposo.'],
      ['El procedimiento está documentado como demostración', 'La Clase 25 sí indica mezclar la biga con los demás ingredientes, fermentar, desgasificar, moldear según demostración, pasar por aceite de oliva, espolvorear la cubierta, fermentar y hornear a 220 °C.']
    ],
    practiceLabel: 'Práctica de clasificación',
    practiceTitle: 'Distingue los prefermentos por lo que realmente dice la fuente',
    practice: 'Completa una tabla con cuatro filas: masa madre, poolish, biga y masa vieja. En una columna escribe exactamente qué característica aporta la fuente; en otra, anota qué información todavía falta para convertir esa definición en una receta reproducible.',
    limitLabel: 'Límite de esta fuente',
    limitTitle: 'La fuente documenta una Ciabatta como demostración.',
    limit: 'La lección no añade cantidades, temperaturas, tiempos ni técnica de elaboración que no aparezcan en la fuente. El texto remite el moldeado de la ciabatta a la demostración; no debemos reconstruir ese moldeado a partir de conocimiento externo.',
    activityLabel: 'Actividad guiada',
    activityTitle: 'Haz, observa y registra',
    activity: 'Separa en tu hoja las dos partes de la preparación: biga y masa final. Reconstruye qué debe ocurrir con la biga antes de incorporarla a los demás ingredientes.',
    checkLabel: 'Comprueba tu aprendizaje',
    checkTitle: 'Explica la secuencia',
    questions: [
      '¿Cuánto tiempo indica la fuente para el reposo de la biga?',
      '¿Qué operaciones siguen después de mezclar la biga con la masa?',
      '¿Qué información sobre la técnica de ciabatta queda indicada como demostración?'
    ],
    takeLabel: 'Al terminar',
    takeTitle: 'Lo que debes llevarte de esta lección',
    takeaways: [
      ['La biga está documentada:', 'la fuente la define como un pre-fermento denso y poco hidratado.'],
      ['Se puede comparar con otros prefermentos:', 'la fuente también define masa madre, poolish y masa vieja.'],
      ['La demostración sí proporciona una fórmula:', 'la biga lleva 2 kg de harina, 1.3 L de agua y 20 g de levadura fresca, con 8 horas de reposo.'],
      ['La ciabatta está documentada como demostración:', 'la fórmula y la secuencia general aparecen en la Clase 25.']
    ],
    sourceLabel: 'Nota sobre la fuente',
    source: 'Las definiciones de masa madre, poolish, biga y masa vieja proceden de la lección “Masa madre, poolish, biga, masa vieja” en data/curso.js. El proceso general de panificación procede de “Proceso para elaborar una masa”. La receta de Ciabatta y su biga proceden de la Clase 25 del PDF; el moldeado se remite a la demostración. La organización comparativa de esta lección es organización pedagógica del curso.',
    nextLabel: 'Siguiente lección',
    nextTitle: 'Panes enriquecidos',
    next: 'La siguiente lección puede apoyarse en las recetas existentes para observar masas que incorporan ingredientes como grasa, azúcar y huevo.',
    nextLink: 'Volver al Módulo 4 →'
  },
  en: {
    eyebrow: 'Lesson 30',
    title: 'Ciabatta and Biga',
    back: 'Back to module',
    demoLabel: 'A concept that is actually in the source',
    introTitle: 'Class 25 documents a Ciabatta (demonstration only) and its biga.',
    intro: 'Class 25 presents a Ciabatta marked “DEMO ONLY”, with a biga formula, dough formula, topping, and procedure. The source also defines biga as a dense, low-hydration preferment. This lesson distinguishes what is documented in the demonstration from what the text leaves referred to the procedure shown in class.',
    formulaTitle: 'Ciabatta: demonstration formula and procedure',
    biga: 'Biga',
    bigaText: '2 kg flour, 1.3 L water, and 20 g fresh yeast. The source says to prepare it 8 hours beforehand.',
    doughCover: 'Dough and topping',
    doughCoverText: '440 g flour, 200 ml water, 45 g salt, 20 g malt, and 50 ml olive oil. The topping contains 100 g flour and 100 g semolina.',
    procedure: 'For the biga, the source says to mix and let it rest for 8 hours. For the dough: mix the biga with the other ingredients until a smooth dough forms, ferment, degas, shape as shown in the demonstration, coat with olive oil, sprinkle the topping, ferment, and bake at 220 °C. Flour and semolina are sprinkled at the end.',
    centralLabel: 'The central idea',
    centralTitle: 'A preferment is one part of the process, not a complete recipe.',
    central: 'The source distinguishes four terms: sourdough starter, poolish, biga, and old dough. Each receives a brief description. Biga is not presented as a detailed recipe, but as a dense, low-hydration preferment. We can therefore recognize its conceptual role without inventing quantities, times, or steps.',
    termsTitle: 'The four terms in the source',
    terms: [
      ['Sourdough starter', 'Natural ferment', 'The source defines it as a natural ferment made from flour and water.'],
      ['Poolish', 'Liquid preferment', 'It is described as a liquid preferment made with equal parts flour and water, plus yeast.'],
      ['Biga', 'Dense, low-hydration preferment', 'This is the concrete definition provided by the material and the focus of this lesson.'],
      ['Old dough', 'Piece of dough from the previous day', 'The source states that it is used as a ferment.']
    ],
    meaningTitle: 'What does “dense and low-hydration” mean within this source?',
    meaning: [
      ['The source does establish one characteristic', 'Biga differs from poolish through the description it receives: one is presented as a liquid preferment and the other as a dense, low-hydration preferment.'],
      ['The source does provide a formula for the biga in this demonstration', 'For this demonstration, quantities are given: 2 kg flour, 1.3 L water, and 20 g fresh yeast, with 8 hours of resting time.'],
      ['The procedure is documented as a demonstration', 'Class 25 does indicate mixing the biga with the other ingredients, fermenting, degassing, shaping as shown in the demonstration, coating with olive oil, sprinkling the topping, fermenting, and baking at 220 °C.']
    ],
    practiceLabel: 'Classification practice',
    practiceTitle: 'Distinguish the preferments by what the source actually says',
    practice: 'Complete a four-row table: sourdough starter, poolish, biga, and old dough. In one column, write exactly what characteristic the source provides; in another, note what information is still missing to turn that definition into a reproducible recipe.',
    limitLabel: 'Source boundary',
    limitTitle: 'The source documents a Ciabatta as a demonstration.',
    limit: 'This lesson does not add quantities, temperatures, times, or preparation techniques that are not present in the source. The text refers the shaping of the ciabatta to the demonstration; we should not reconstruct that shaping from outside knowledge.',
    activityLabel: 'Guided activity',
    activityTitle: 'Do, observe, and record',
    activity: 'On your worksheet, separate the two parts of the preparation: biga and final dough. Reconstruct what must happen to the biga before it is incorporated into the other ingredients.',
    checkLabel: 'Check your learning',
    checkTitle: 'Explain the sequence',
    questions: [
      'How long does the source specify for the biga to rest?',
      'What operations follow mixing the biga with the dough?',
      'What information about ciabatta technique is explicitly left to the demonstration?'
    ],
    takeLabel: 'At the end',
    takeTitle: 'What you should take away from this lesson',
    takeaways: [
      ['Biga is documented:', 'the source defines it as a dense, low-hydration preferment.'],
      ['It can be compared with other preferments:', 'the source also defines sourdough starter, poolish, and old dough.'],
      ['The demonstration does provide a formula:', 'the biga uses 2 kg flour, 1.3 L water, and 20 g fresh yeast, with 8 hours of resting time.'],
      ['The ciabatta is documented as a demonstration:', 'the formula and general sequence appear in Class 25.']
    ],
    sourceLabel: 'Source note',
    source: 'The definitions of sourdough starter, poolish, biga, and old dough come from the lesson “Masa madre, poolish, biga, masa vieja” in data/curso.js. The general breadmaking process comes from “Proceso para elaborar una masa”. The Ciabatta recipe and its biga come from Class 25 of the PDF; shaping is referred to the demonstration. The comparative organization of this lesson is a pedagogical organization of the course.',
    nextLabel: 'Next lesson',
    nextTitle: 'Enriched breads',
    next: 'The next lesson can use the existing recipes to observe doughs that incorporate ingredients such as fat, sugar, and egg.',
    nextLink: 'Back to Module 4 →'
  }
};

export default function LessonThirtyPage() {
  const { locale = 'es' } = useRouter();
  const t = locale === 'en' ? content.en : content.es;

  return (
    <CourseShell eyebrow={t.eyebrow} title={t.title} backHref={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} backLabel={t.back}>
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.demoLabel}</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">{t.introTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">{t.intro}</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">{t.formulaTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><p className="font-semibold text-amber-900">{t.biga}</p><p className="mt-2 leading-7 text-amber-950">{t.bigaText}</p></div>
            <div className="rounded-2xl border border-stone-200 bg-white p-5"><p className="font-semibold text-stone-900">{t.doughCover}</p><p className="mt-2 leading-7 text-stone-700">{t.doughCoverText}</p></div>
          </div>
          <p className="mt-5 leading-7 text-stone-700">{t.procedure}</p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">{t.centralLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold">{t.centralTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">{t.central}</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">{t.termsTitle}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {t.terms.map(([label, heading, text], index) => (
              <article key={label} className={index % 2 === 0 ? 'rounded-2xl border border-amber-200 bg-amber-50 p-6' : 'rounded-2xl border border-stone-200 bg-white p-6'}>
                <p className={index % 2 === 0 ? 'text-sm font-medium text-amber-800' : 'text-sm font-medium text-stone-500'}>{label}</p>
                <h3 className={index % 2 === 0 ? 'mt-2 text-xl font-semibold text-amber-950' : 'mt-2 text-xl font-semibold text-stone-900'}>{heading}</h3>
                <p className={index % 2 === 0 ? 'mt-3 leading-7 text-amber-950' : 'mt-3 leading-7 text-stone-700'}>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">{t.meaningTitle}</h2>
          <div className="mt-5 space-y-5">
            {t.meaning.map(([heading, text], index) => (
              <div key={heading} className={index === 0 ? 'rounded-2xl bg-amber-50 p-5' : 'rounded-2xl bg-stone-100 p-5'}>
                <p className={index === 0 ? 'font-semibold text-amber-900' : 'font-semibold text-stone-900'}>{heading}</p>
                <p className={index === 0 ? 'mt-2 leading-7 text-amber-950' : 'mt-2 leading-7 text-stone-700'}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">{t.practiceLabel}</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">{t.practiceTitle}</h2>
          <p className="mt-2 leading-7 text-stone-600">{t.practice}</p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">{t.limitLabel}</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">{t.limitTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.limit}</p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">{t.activityLabel}</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">{t.activityTitle}</h2>
          <p className="mt-2 leading-7 text-stone-600">{t.activity}</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">{t.checkLabel}</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">{t.checkTitle}</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            {t.questions.map((question, index) => <p key={question}>{index + 1}. {question}</p>)}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">{t.takeLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold">{t.takeTitle}</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            {t.takeaways.map(([strong, text]) => <p key={strong} className="leading-7"><strong>{strong}</strong> {text}</p>)}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">{t.sourceLabel}</p>
          <p className="mt-2 leading-7 text-stone-700">{t.source}</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{t.nextLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">{t.nextTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.next}</p>
          <a href={locale === 'en' ? '/en/modulo-4' : '/modulo-4'} className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">{t.nextLink}</a>
        </section>
      </div>
    </CourseShell>
  );
}
