import CourseShell from '../components/course/CourseShell';

const lesson = { number: '61', title: 'Andalucía', subtitle: 'Biscuit de almendra, crema de naranja, mousse de chocolate y praliné y glaseado oscuro.' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 61" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Cómo se organiza un pastel donde el biscuit, el mousse y el glaseado cumplen funciones distintas?</h2></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 35</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Componentes del montaje</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La receta Andalucía incluye biscuit de almendra, crema de naranja, mousse de chocolate y praliné, glaseado oscuro y decoración de naranja, chocolate, manteca de cacao y colorante.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Preparaciones</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El biscuit utiliza 3 yemas, 3 claras, harina 50 g, mantequilla 50 g y almendra caramelizada 50 g. La crema de naranja lleva grenetina 3 g, huevo 50 g, azúcar 100 g, jugo y ralladura de naranja y mantequilla 100 g. El mousse utiliza leche 75 g, crema 75 g, yemas 40 g, praliné 60% 90 g, chocolate amargo 90 g, grenetina 8 g y crema semimontada 270 g. El glaseado oscuro contiene crema 60 g, agua 70 g, azúcar 90 g, cocoa 30 g y grenetina 4 g.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Procedimiento</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">Se carameliza la almendra con mantequilla; se baten yemas y claras con sus azúcares, se incorpora harina y después mantequilla. Se forman dos discos de 18 cm y se hornean a 180 °C durante 8 minutos. La crema de naranja se realiza a la inglesa y se termina con mantequilla fría y grenetina. El mousse parte de una crema inglesa que se vierte sobre chocolate picado, incorpora praliné y grenetina y termina con crema semibatida. Para el glaseado se hierven crema, agua y azúcar, se agrega cocoa, luego gelatina y se mixea sin incorporar aire; se utiliza entre 22 y 24 °C.</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6"><p className="text-sm font-medium text-amber-800">Práctica</p><p className="mt-2 max-w-3xl leading-7 text-stone-700">Relaciona cada preparación con su función en el montaje: biscuit, crema, mousse y glaseado.</p></section>
      </div>
    </CourseShell>
  );
}
