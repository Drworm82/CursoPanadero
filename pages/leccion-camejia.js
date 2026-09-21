import CourseShell from '../components/course/CourseShell';

const lesson = { number: '64', title: 'Camejía', subtitle: 'Clase 37 · Pastelería Contemporánea IV' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 64" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a ensamblar pasteles con distintas técnicas y texturas. Reforzará técnicas básicas de pastelería.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Comparar dos mousses revela la estructura de una fórmula</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Camejía reúne un bizcocho de chocolate y avellana, mousse de té, mousse de naranja y naranjas deshidratadas. Las dos mousses permiten comparar una misma estructura con distinto componente aromático.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera merengue italiano, crema montada, gelatina y deshidratación. Compara qué se mantiene y qué cambia entre mousse de té y mousse de naranja. Práctica: coloca ambas mousses lado a lado, marca sus elementos comunes y diferentes y después relaciona bizcocho y naranjas deshidratadas con el conjunto.</p></section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <p><strong>Bizcocho de chocolate y avellana:</strong> yemas 115 g · azúcar 100 g · harina 25 g · fécula de maíz 25 g · cocoa 25 g · mantequilla fundida y fría 50 g · avellana tostada y troceada 30 g · claras 125 g · azúcar 20 g.</p>
            <p><strong>Mousse de té:</strong> té fuerte 95 g (100 agua + 20 g té negro, infusionar) · grenetina 10 g · merengue italiano 150 g (2 claras + 120 azúcar) · crema montada 190 g.</p>
            <p><strong>Mousse de naranja:</strong> jugo de naranja 100 g · grenetina 8 g · merengue italiano 150 g (2 claras + 120 g azúcar) · crema montada 190 g.</p>
            <p><strong>Naranjas deshidratadas:</strong> ocupar el resto del almíbar para humectar el bizcocho · agua 100 g · azúcar 100 g · naranja 1 pza · té negro 10 g.</p>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Bizcocho de chocolate y avellana</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Montar las yemas con 100 g de azúcar, agregar la harina cernida junto con la fécula y la cocoa.</li><li>Por separado montar las claras con 20 g de azúcar, agregar a la mezcla anterior en forma envolvente.</li><li>Posteriormente agregar la mantequilla y las avellanas.</li><li>Hornear a 180 °C por 16 min., aprox.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de té</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Mezclar el té fuerte con la grenetina previamente hidratada.</li><li>Mezclar el merengue italiano y la crema montada en forma envolvente.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Entibiar ligeramente el jugo de naranja, agregar la grenetina previamente hidratada.</li><li>Incorporar el merengue italiano y terminar con la crema montada.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Naranjas deshidratadas</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Elaborar un jarabe con azúcar y agua. Realizar una infusión con el té.</li><li>Sumergir las rodajas de naranja en el almíbar.</li><li>Secar en horno a 140 °C. Reservar.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Marco 22 cm × 16 cm.</li></ol><p className="mt-2 text-sm text-stone-500">La fuente recuperada termina el apartado de montaje después de indicar el marco; no se agregan pasos que no estén documentados.</p></div>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}