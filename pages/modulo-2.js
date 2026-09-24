import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const content = {
  es: {
    title: 'Cuando una masa no quiere gluten: masas friables',
    question: '¿Por qué algunas masas necesitan desarrollar estructura y otras necesitan evitarla?',
    result: 'Aplicar los métodos documentados para masas friables, comparar sus efectos sobre la pasta y explicar cómo el trabajo, la grasa y el reposo se relacionan con el resultado.',
    studyTitle: 'Cómo estudiar este módulo',
    study: 'En el módulo anterior observaste que el momento de detener el trabajo importa. Ahora usa esa idea como punto de partida: en las masas friables, cada decisión de mezcla, reposo y manipulación está relacionada con la textura que buscamos.',
    readTitle: 'Cómo leer las últimas preparaciones',
    read: 'Las Clases 5 y 8 amplían el recorrido hacia petit fours secos. No todas las piezas siguen el mismo método: el macaron integra un merengue italiano con TpT de almendra; otras preparaciones parten de masas friables; el brigadeiro concentra la preparación mediante cocción. La comparación sirve para reconocer el proceso documentado sin convertir todas las piezas pequeñas en una sola categoría técnica.',
    closeTitle: 'Qué deberías poder explicar',
    close: [
      'Qué busca una masa friable y en qué se diferencia de una masa de pan.',
      'Qué observas cuando la grasa y la harina forman la arenilla del sablage.',
      'Por qué la fuente indica mezclar sin amasar y dejar reposar en refrigeración.',
      'Qué diferencia hay entre trabajar una pasta por sablage y por acremado.',
      'Cómo se relacionan la base, la impermeabilización y el montaje en las tartas trabajadas.',
      'Cómo cambia la técnica cuando pasas de masas friables a petit fours con merengue o cocción de concentración.',
    ],
    lessons: [
      ['7', 'Una masa que quiere lo contrario', 'Descubre por qué en una masa friable buscamos mantener el gluten lo más aislado posible.', '/leccion-masa-friable'],
      ['8', 'Sablée y sucrée', 'Conoce el método de arenado y compara dos pastas friables de la fuente.', '/leccion-sablee-y-sucree'],
      ['9', 'De la pasta a la tarta', 'Aplica la pasta, cocínala, impermeabilízala y entiende cómo se construye una tarta de frutas.', '/leccion-de-la-pasta-a-la-tarta'],
      ['10', 'Pay de limón', 'Integra una pasta sucrée con crema de limón y merengue suizo.', '/leccion-pay-de-limon'],
      ['11', 'Lo que cambia cuando cambia el objetivo', 'Cierra el recorrido por las masas friables relacionando gluten, grasa, reposo y método.', '/leccion-lo-que-cambia-el-objetivo'],
      ['12', 'Petit fours secos: precisión, concentración y acabado', 'Integra las preparaciones documentadas de las Clases 5 y 8 y compara macaron, galletas, masas friables y brigadeiro.', '/leccion-petit-fours-secos'],
    ],
  },
  en: {
    title: 'When a Dough Does Not Want Gluten: Shortcrust Doughs',
    question: 'Why do some doughs need to develop structure while others need to avoid it?',
    result: 'Apply the documented methods for shortcrust doughs, compare their effects on the dough, and explain how mixing, fat, and resting relate to the result.',
    studyTitle: 'How to study this module',
    study: 'In the previous module you observed that when you stop working the mixture matters. Use that idea as your starting point: in shortcrust doughs, every decision about mixing, resting, and handling is related to the texture we want.',
    readTitle: 'How to read the final preparations',
    read: 'Classes 5 and 8 extend the course into dry petit fours. Not every piece follows the same method: the macaron combines Italian meringue with almond TPT; other preparations start from shortcrust doughs; brigadeiro concentrates the preparation through cooking. The comparison helps you recognize the documented process without turning every small piece into a single technical category.',
    closeTitle: 'What you should be able to explain',
    close: [
      'What a shortcrust dough is designed to achieve and how it differs from bread dough.',
      'What you observe when fat and flour form the sandy sablage texture.',
      'Why the source calls for mixing without kneading and resting under refrigeration.',
      'What differs between working a dough by sablage and by creaming.',
      'How the base, sealing, and assembly relate to the tarts studied.',
      'How the technique changes when moving from shortcrust doughs to petit fours using meringue or concentrated cooking.',
    ],
    lessons: [
      ['7', 'A Dough That Wants the Opposite', 'Discover why shortcrust dough aims to keep gluten as isolated as possible.', '/leccion-masa-friable'],
      ['8', 'Sablée and Sucrée', 'Learn the sanding method and compare two shortcrust doughs from the source.', '/leccion-sablee-y-sucree'],
      ['9', 'From Dough to Tart', 'Apply the dough, bake it, seal it, and understand how a fruit tart is constructed.', '/leccion-de-la-pasta-a-la-tarta'],
      ['10', 'Lemon Tart', 'Combine a sucrée dough with lemon cream and Swiss meringue.', '/leccion-pay-de-limon'],
      ['11', 'What Changes When the Objective Changes', 'Close the shortcrust journey by relating gluten, fat, resting, and method.', '/leccion-lo-que-cambia-el-objetivo'],
      ['12', 'Dry Petit Fours: Precision, Concentration, and Finish', 'Integrate the preparations documented in Classes 5 and 8 and compare macarons, cookies, shortcrust doughs, and brigadeiro.', '/leccion-petit-fours-secos'],
    ],
  },
};

export default function ModuleTwoPage() {
  const { locale = 'es' } = useRouter();
  const t = content[locale] || content.es;
  const isEnglish = locale === 'en';

  return (
    <CourseShell eyebrow={isEnglish ? 'Module 2' : 'Módulo 2'} title={t.title} backHref={isEnglish ? '/en/ruta' : '/ruta'} backLabel={isEnglish ? 'Back to course' : 'Volver a la ruta'}>
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">{isEnglish ? 'Guiding question' : 'Pregunta guía'}</p>
            <p className="mt-3 text-lg leading-8 text-stone-800">{t.question}</p>
          </section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">{isEnglish ? 'By the end' : 'Al terminar'}</p>
            <p className="mt-3 leading-7 text-stone-700">{t.result}</p>
          </section>
        </div>

        <section className="rounded-2xl bg-amber-50 p-6 sm:p-7">
          <p className="text-sm font-medium text-amber-900">{t.studyTitle}</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">{t.study}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {(isEnglish
              ? [['1. Understand', 'Identify what structure the dough is seeking.'], ['2. Do', 'Apply the method indicated in the preparation.'], ['3. Observe', 'Look for signs of texture, cold, and shape.'], ['4. Explain', 'Relate the method to the result.']]
              : [['1. Comprende', 'Identifica qué estructura busca la masa.'], ['2. Haz', 'Aplica el método indicado en la preparación.'], ['3. Observa', 'Busca señales de textura, frío y forma.'], ['4. Explica', 'Relaciona el método con el resultado.']]
            ).map(([title, text]) => (
              <div key={title} className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">{title}</p><p className="mt-1 text-sm leading-6 text-stone-600">{text}</p></div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">{t.readTitle}</p>
          <p className="mt-2 leading-7 text-stone-700">{t.read}</p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{isEnglish ? 'Learning path' : 'Ruta de aprendizaje'}</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">{isEnglish ? 'Lessons' : 'Lecciones'}</h2>
            </div>
            <span className="text-sm text-stone-500">{isEnglish ? '6 lessons' : '6 lecciones'}</span>
          </div>
          <div className="grid gap-3">
            {t.lessons.map(([number, title, description, href]) => (
              <a key={number} href={href} className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">{number}</span>
                <span className="min-w-0 flex-1"><span className="block font-semibold text-stone-900">{title}</span><span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span></span>
                <span className="shrink-0 text-sm text-stone-400">{isEnglish ? 'Open →' : 'Abrir →'}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{isEnglish ? 'Module close' : 'Cierre del módulo'}</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">{t.closeTitle}</h2>
          <ul className="mt-4 space-y-3 text-stone-700">{t.close.map((item) => <li key={item}>• {item}</li>)}</ul>
        </section>
      </div>
    </CourseShell>
  );
}
