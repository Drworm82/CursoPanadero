import CourseShell from '../components/course/CourseShell';

const lesson = { number: '64', title: 'Camejía', subtitle: 'Bizcocho de chocolate y avellana con mousse de té, mousse de naranja y naranjas deshidratadas.' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 64" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Cómo se construye un pastel a partir de un bizcocho y dos mousses?</h2></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 37</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Tres componentes principales y una decoración</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La receta Camejía documenta un bizcocho de chocolate y avellana, mousse de té, mousse de naranja y naranjas deshidratadas. El montaje parte de un marco de 22 × 16 cm.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Composición</p><p className="mt-3 max-w-3xl leading-7 text-stone-700"><strong>Bizcocho:</strong> yemas 115 g, azúcar 100 g + 20 g, harina 25 g, fécula 25 g, cocoa 25 g, mantequilla 50 g y avellana tostada 30 g, además de 125 g de claras. <strong>Mousse de té:</strong> té fuerte 95 g, grenetina 10 g, merengue italiano 150 g y crema montada 190 g. <strong>Mousse de naranja:</strong> jugo 100 g, grenetina 8 g, merengue italiano 150 g y crema montada 190 g. Para las naranjas se utiliza agua 100 g, azúcar 100 g, una naranja y té negro 10 g.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Procedimiento</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">Las yemas se montan con 100 g de azúcar y se incorporan harina, fécula y cocoa; aparte se montan las claras con 20 g de azúcar y se integran envolventemente, junto con mantequilla y avellanas. Se hornea a 180 °C durante aproximadamente 16 minutos. El mousse de té mezcla té fuerte con grenetina hidratada y después merengue italiano y crema montada. El mousse de naranja entibia ligeramente el jugo, incorpora grenetina y termina con merengue y crema. Las rodajas de naranja se pasan por un almíbar infusionado con té y se secan a 140 °C.</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6"><p className="text-sm font-medium text-amber-800">Práctica</p><p className="mt-2 max-w-3xl leading-7 text-stone-700">Compara los dos mousses: identifica qué líquido constituye la base de cada uno y qué componentes aireados se incorporan al final.</p></section>
      </div>
    </CourseShell>
  );
}
