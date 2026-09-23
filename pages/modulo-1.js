import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  es: {
    sort_order: 1,
    title: 'Entrar a la panadería: masas batidas pesadas',
    guiding_question: '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?',
    expected_result: 'Ejecutar las preparaciones del módulo aplicando y comparando métodos de masas batidas pesadas, y explicar qué se observa durante la mezcla y la cocción.',
    studyTitle: 'Aprende haciendo, observando y comparando',
    studyText: 'En este módulo no basta con terminar una preparación. En cada práctica identifica qué método estás usando, observa los cambios de textura y compara el resultado con lo que ocurrió en las preparaciones anteriores.',
    steps: [
      ['1', 'Comprende', 'Identifica el método que vas a practicar.'],
      ['2', 'Haz', 'Sigue la preparación y atiende las señales indicadas.'],
      ['3', 'Observa', 'Registra cambios de textura, volumen, color y estructura.'],
      ['4', 'Compara', 'Relaciona lo observado con las otras preparaciones.'],
    ],
    lessonsTitle: 'Lecciones',
    lessonsCount: '6 lecciones',
    lessons: [
      ['1', 'Entrar a la panadería', 'Conoce la ruta y establece qué vas a observar durante la preparación, mezcla y cocción.', '/leccion-entrar-a-la-panaderia'],
      ['2', 'Primer panqué: acremado', 'Ejecuta el método de acremado y reconoce los cambios de textura durante la mezcla.', '/leccion-primer-panque-acremado'],
      ['3', 'Segunda ruta: aceite', 'Trabaja una masa batida pesada con aceite y compárala con el acremado.', '/leccion-segunda-ruta-aceite'],
      ['4', 'Repetición con criterio', 'Repite el acremado observando sus etapas y evitando sobrebatir los secos.', '/leccion-repeticion-con-criterio'],
      ['5', 'El horno también es parte', 'Relaciona las condiciones de cocción indicadas con el resultado que observas.', '/leccion-el-horno-tambien-es-parte'],
      ['6', 'Mini reto: ¿qué cambió?', 'Compara métodos, mezclas y cocción y explica qué cambió entre las preparaciones.', '/leccion-mini-reto-que-cambio'],
    ],
    closeTitle: 'Qué deberías poder explicar',
    closeItems: [
      'Qué método de elaboración estás utilizando en cada preparación.',
      'Qué cambios de textura observas durante la mezcla.',
      'Por qué el momento de detener el batido importa en estas preparaciones.',
      'Qué diferencias observas entre una masa trabajada con mantequilla y una elaborada con aceite.',
      'Qué relación encuentras entre las condiciones de cocción y el resultado final.',
    ],
  },
  en: {
    sort_order: 1,
    title: 'Entering baking: heavy batters',
    guiding_question: 'What am I doing when I mix a batter, and how do I know when to stop working it?',
    expected_result: 'Execute the module preparations using and comparing heavy-batter methods, and explain what you observe during mixing and baking.',
    studyTitle: 'Learn by doing, observing, and comparing',
    studyText: 'In this module, finishing a preparation is not enough. During each practice, identify the method you are using, observe texture changes, and compare the result with what happened in earlier preparations.',
    steps: [
      ['1', 'Understand', 'Identify the method you are going to practice.'],
      ['2', 'Do', 'Follow the preparation and pay attention to the indicated signals.'],
      ['3', 'Observe', 'Record changes in texture, volume, color, and structure.'],
      ['4', 'Compare', 'Relate what you observe to the other preparations.'],
    ],
    lessonsTitle: 'Lessons',
    lessonsCount: '6 lessons',
    lessons: [
      ['1', 'Entering baking', 'Learn the path and establish what you will observe during preparation, mixing, and baking.', '/leccion-entrar-a-la-panaderia'],
      ['2', 'First pound cake: creaming method', 'Execute the creaming method and recognize texture changes during mixing.', '/leccion-primer-panque-acremado'],
      ['3', 'Second route: oil', 'Work a heavy batter with oil and compare it with the creaming method.', '/leccion-segunda-ruta-aceite'],
      ['4', 'Repeat with intention', 'Repeat the creaming method while observing its stages and avoiding overmixing the dry ingredients.', '/leccion-repeticion-con-criterio'],
      ['5', 'The oven is part of the process', 'Relate the indicated baking conditions to the result you observe.', '/leccion-el-horno-tambien-es-parte'],
      ['6', 'Mini challenge: what changed?', 'Compare methods, mixing, and baking and explain what changed between the preparations.', '/leccion-mini-reto-que-cambio'],
    ],
    closeTitle: 'What you should be able to explain',
    closeItems: [
      'Which method you are using in each preparation.',
      'Which texture changes you observe during mixing.',
      'Why the moment when you stop mixing matters in these preparations.',
      'Which differences you observe between a batter made with butter and one made with oil.',
      'What relationship you find between baking conditions and the final result.',
    ],
  },
};

export default function ModuleOnePage() {
  const { locale = 'es' } = useRouter();
  const content = moduleInfo[locale] || moduleInfo.es;
  const localizedHref = (href) => locale === 'en' ? `/en${href}` : href;

  return (
    <CourseShell eyebrow={`${locale === 'en' ? 'Module' : 'Módulo'} 1`} title={content.title} backHref={locale === 'en' ? '/en/ruta' : '/ruta'} backLabel={locale === 'en' ? 'Back to course' : 'Volver a la ruta'}>
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">{locale === 'en' ? 'Guiding question' : 'Pregunta guía'}</p>
            <p className="mt-3 text-lg leading-8 text-stone-800">{content.guiding_question}</p>
          </section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">{locale === 'en' ? 'By the end' : 'Al terminar'}</p>
            <p className="mt-3 leading-7 text-stone-700">{content.expected_result}</p>
          </section>
        </div>

        <section className="rounded-2xl bg-amber-50 p-6 sm:p-7">
          <p className="text-sm font-medium text-amber-900">{locale === 'en' ? 'How to study this module' : 'Cómo estudiar este módulo'}</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">{content.studyTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">{content.studyText}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {content.steps.map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">{number}. {title}</p><p className="mt-1 text-sm leading-6 text-stone-600">{text}</p></div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{locale === 'en' ? 'Learning path' : 'Ruta de aprendizaje'}</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">{content.lessonsTitle}</h2>
            </div>
            <span className="text-sm text-stone-500">{content.lessonsCount}</span>
          </div>
          <div className="grid gap-3">
            {content.lessons.map(([number, title, description, href]) => (
              <a key={number} href={localizedHref(href)} className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700 group-hover:bg-amber-100 group-hover:text-amber-900">{number}</span>
                <span className="min-w-0 flex-1"><span className="block font-semibold text-stone-900">{title}</span><span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span></span>
                <span className="shrink-0 text-xl text-stone-300 transition group-hover:translate-x-0.5 group-hover:text-stone-600" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{locale === 'en' ? 'Module close' : 'Cierre del módulo'}</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">{content.closeTitle}</h2>
          <ul className="mt-4 space-y-3 text-stone-700">
            {content.closeItems.map((item) => <li key={item}>• {item}</li>)}
          </ul>
        </section>
      </div>
    </CourseShell>
  );
}
