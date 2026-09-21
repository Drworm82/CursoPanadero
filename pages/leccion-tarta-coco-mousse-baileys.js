import CourseShell from '../components/course/CourseShell';

const lesson = { number: '60', title: 'Tarta de coco con mousse de Bailey’s', subtitle: 'Un montaje que combina sable de chocolate, flan, mousse y tejas de coco.' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 60" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Cómo se combinan una tarta horneada y una mousse para construir un acabado contemporáneo?</h2></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 35</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cuatro preparaciones</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente documenta un sable de chocolate y especias, un flan de coco y caramelo, un mousse de chocolate y Bailey’s y tejas de coco.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Composición</p><p className="mt-3 max-w-3xl leading-7 text-stone-700"><strong>Sable:</strong> mantequilla 125 g, harina 200 g, cocoa 50 g, 4 especias y sal, yema, huevo y azúcar 80 g. <strong>Flan:</strong> leche 120 ml, crema 180 ml, azúcar 80 g, coco 40 g, huevo y 3 yemas. <strong>Mousse:</strong> cobertura de leche 140 g, leche 50 ml, crema 50 ml, yemas 20 g, Bailey’s 25 ml, azúcar 25 g, crema semimontada 160 g y grenetina 8 g. <strong>Tejas:</strong> coco 30 g, azúcar mascabado 35 g, claras 30 g, harina 10 g y mantequilla noisette 24 g.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Procedimiento y montaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El sable se trabaja por sablage, se forra un molde de 20 cm y se precocina a 180 °C durante 7–8 minutos. El flan se inicia con caramelo claro, crema hirviendo, leche fría, coco y huevo; se vierte sobre la masa y se hornea a 180 °C de 15 a 20 minutos. El mousse se hace con crema inglesa, chocolate derretido, Bailey’s, grenetina y crema semimontada a 40 °C. Las tejas se extienden a 3 mm, se hornean a 180 °C y se cortan mientras están calientes. Al montar, la mousse se coloca sobre la tarta fría; la fuente contempla pulverizado con chocolate amargo y manteca de cacao a 30 °C si se dispone de compresor, y las tejas se colocan alrededor.</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6"><p className="text-sm font-medium text-amber-800">Práctica</p><p className="mt-2 max-w-3xl leading-7 text-stone-700">Explica qué componentes se hornean antes del montaje y cuál se incorpora después como elemento frío.</p></section>
      </div>
    </CourseShell>
  );
}
