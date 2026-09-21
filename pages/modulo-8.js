import CourseShell from '../components/course/CourseShell';

const moduleInfo = {
  sort_order: 8,
  title: 'Pastelería contemporánea',
  guiding_question: '¿Cómo se combinan técnicas conocidas para construir postres de varias capas y texturas?',
  expected_result: 'Interpretar montajes contemporáneos mediante bases, cremosos, mousses, insertos y glaseados, a partir de las preparaciones documentadas en la fuente.',
};

const lessons = [
  ['58', 'Pastel de yogurt y frutos rojos', 'Reconoce la relación entre una magdalena, una jelly, un mousse de yogurt y un armado invertido.', '/leccion-pastel-yogurt-frutos-rojos', true],
  ['59', 'Tarta de plátano', 'Relaciona masa sable, ganache de plátano, plátano salteado y chiboust en un mismo montaje.', '/leccion-tarta-platano', true],
  ['60', 'Tarta de coco con mousse de Bailey’s', 'Observa cómo se integran sable de chocolate, flan, mousse, tejas y acabado de chocolate.', '/leccion-tarta-coco-mousse-baileys', true],
  ['61', 'Andalucía', 'Identifica la combinación de biscuit de almendra, crema de naranja, mousse de chocolate y praliné y glaseado oscuro.', '/leccion-andalucia', true],
  ['62', 'Pastel café y chocolate', 'Relaciona dacquoise, cremoso de café, bavaresa de chocolate y glaseo de café en un armado invertido.', '/leccion-pastel-cafe-chocolate', true],
  ['63', 'Tarta Tango', 'Reconoce la construcción de una tarta con sucrée de ajonjolí, biscuit joconde, compota de frambuesa y pimiento, crema de parmesano y teja.', '/leccion-tarta-tango', true],
  ['64', 'Camejía', 'Analiza un ensamblaje de bizcocho de chocolate y avellana con mousses de té y naranja y naranjas deshidratadas.', '/leccion-camejia', true],
  ['65', 'Pastelería Contemporánea IV', 'Clase 37 · preparación documentada de biscuit, crema, gel y naranjas deshidratadas.', '/leccion-pasteleria-contemporanea-naranja', true],
];

export default function ModuleEightPage() {
  return (
    <CourseShell eyebrow="Módulo 8" title={moduleInfo.title} backHref="/ruta" backLabel="Volver a la ruta">
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">Pregunta guía</p><p className="mt-3 text-lg leading-8 text-stone-800">{moduleInfo.guiding_question}</p></section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">Al terminar</p><p className="mt-3 leading-7 text-stone-700">{moduleInfo.expected_result}</p></section>
        </div>
        <section className="rounded-2xl bg-amber-50 p-6"><p className="text-sm font-medium text-amber-900">El siguiente cambio</p><p className="mt-2 max-w-3xl leading-7 text-amber-950">Después de trabajar masas, fermentación, laminados y chocolate, el curso reúne técnicas conocidas dentro de montajes de mayor complejidad, donde cada componente cumple una función dentro del conjunto.</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Límite de la fuente</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Los montajes se estudiarán desde las preparaciones documentadas.</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Las clases 34 a 37 documentan pasteles y tartas contemporáneos construidos con componentes como biscuits, masas friables, cremas, mousses, jellies, glaseados, decoraciones e insertos. Las lecciones separarán esos componentes para hacer visible su función dentro de cada montaje, sin añadir técnicas o formulaciones que no aparezcan en la fuente.</p></section>
        <section><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p><h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2></div><span className="text-sm text-stone-500">8 lecciones</span></div>
          <div className="grid gap-3">{lessons.map(([number,title,description,href,active]) => active ? (
            <a key={number} href={href} className="flex items-center gap-4 rounded-2xl border border-amber-300 bg-white p-5 shadow-sm transition hover:border-amber-500 hover:shadow-md">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">{number}</span>
              <span className="min-w-0 flex-1"><span className="block font-semibold text-stone-900">{title}</span><span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span></span>
              <span className="shrink-0 text-sm font-medium text-amber-800">Abrir lección →</span>
            </a>
          ) : null)}</div>
        </section>
      </div>
    </CourseShell>
  );
}
