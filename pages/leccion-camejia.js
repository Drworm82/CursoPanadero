import CourseShell from '../components/course/CourseShell';

const lesson = { number: '68', title: 'Camejía', subtitle: 'Clase 37 · Pastelería Contemporánea IV' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 68" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a ensamblar pasteles con distintas técnicas y texturas. Reforzará técnicas básicas de pastelería.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Comparar dos mousses revela la estructura de una fórmula</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Camejía reúne un bizcocho de chocolate y avellana, mousse de té, mousse de naranja y naranjas deshidratadas. Las dos mousses permiten comparar una misma estructura con distinto componente aromático.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Analiza la fórmula</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Dos mousses, una estructura comparable</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Antes de consultar las dos recetas, escribe qué elementos esperas que compartan. Después marca en paralelo los componentes comunes y los que cambian entre mousse de té y mousse de naranja.</p></section>

<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera merengue italiano, crema montada, gelatina y deshidratación. Compara qué se mantiene y qué cambia entre mousse de té y mousse de naranja. Práctica: coloca ambas mousses lado a lado, marca sus elementos comunes y diferentes y después relaciona bizcocho y naranjas deshidratadas con el conjunto.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Convierte cada paso en una observación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La comparación entre las dos mousses es la oportunidad de aprendizaje principal. <strong>Al prepararlas:</strong> identifica qué elementos permanecen iguales —merengue italiano, gelatina y crema montada— y qué elemento cambia —té fuerte frente a jugo de naranja—. <strong>Durante el proceso:</strong> observa cuándo se incorpora la grenetina y cuándo se termina cada mousse con crema montada. <strong>Al revisar el montaje:</strong> conecta ambas mousses con el bizcocho y la fruta deshidratada, sin completar pasos que la fuente no documenta.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Componentes de Camejía]</strong><br />Esquema de corte que identifique el bizcocho de chocolate y avellana, mousse de té, mousse de naranja y naranjas deshidratadas.</p>
            <p><strong>[VIDEO SUGERIDO — Secuencia de montaje]</strong><br />Mostrar cómo se relacionan los componentes antes del punto final documentado por la fuente.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Bizcocho de chocolate y avellana</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>yemas 115 g</li><li>azúcar 100 g</li><li>harina 25 g</li><li>fécula de maíz 25 g</li><li>cocoa 25 g</li><li>mantequilla fundida y fría 50 g</li><li>avellana tostada y troceada 30 g</li><li>claras 125 g</li><li>azúcar 20 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de té</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>té fuerte 95 g (100 agua + 20 g té negro, infusionar)</li><li>grenetina 10 g</li><li>merengue italiano 150 g (2 claras + 120 azúcar)</li><li>crema montada 190 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de naranja</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>jugo de naranja 100 g</li><li>grenetina 8 g</li><li>merengue italiano 150 g (2 claras + 120 g azúcar)</li><li>crema montada 190 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Naranjas deshidratadas</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>ocupar el resto del almíbar para humectar el bizcocho</li><li>agua 100 g</li><li>azúcar 100 g</li><li>naranja 1 pza</li><li>té negro 10 g</li></ul></div>
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
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Merengue italiano, crema montada, gelatina y bizcochos ya forman parte del curso. La comparación entre las dos mousses permite recuperar esas técnicas.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder explicar qué estructura comparten las dos mousses y qué componente cambia entre ellas.</p></section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Compara las dos mousses</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Coloca en paralelo la mousse de té y la mousse de naranja. Marca los elementos que comparten —grenetina, merengue italiano y crema montada— y el componente que cambia. Después identifica cómo se prepara el bizcocho y cómo se documentan las naranjas deshidratadas.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconoce lo común y lo diferente</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Enumera los elementos comunes a las dos mousses.</li>
            <li>Explica qué cambia entre la mousse de té y la de naranja.</li>
            <li>Reconstruye la preparación de las naranjas deshidratadas.</li>
            <li>Indica hasta dónde documenta la fuente el montaje de Camejía.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}