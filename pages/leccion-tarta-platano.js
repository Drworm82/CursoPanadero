import CourseShell from '../components/course/CourseShell';

const lesson = { number: '59', title: 'Tarta de plátano', subtitle: 'Clase 34 · Pastelería Contemporánea I' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 59" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno reforzara técnicas antes vistas, esta vez aplicada a la elaboración de tartas de corte contemporáneo. Conocerá la técnica para elaborar crema chiboust.</p>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Una tarta puede reunir varias texturas</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La masa sable funciona como estructura y después recibe plátano salteado, ganache y chiboust. El aprendizaje está en comprender cómo esas preparaciones se integran en una sola pieza.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera masa sable y preparaciones de crema. Observa qué componente se hornea como estructura y cuáles se incorporan posteriormente. Práctica: identifica base, capa de ganache y cobertura de chiboust; después reconstruye el montaje sin mirar la receta.</p></section>


        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Capas de la tarta]</strong><br />Corte esquemático o fotografía de referencia que identifique sable, ganache de plátano, plátano salteado y chiboust.</p>
            <p><strong>[VIDEO SUGERIDO — Construcción de la tarta]</strong><br />Demostración del orden de montaje y de la colocación de los componentes, para que el alumno pueda comparar el proceso con su propia secuencia.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div><h3 className="font-semibold text-stone-900">Masa sable</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Harina 250 g</li><li>mantequilla 125 g</li><li>azúcar glass 100 g</li><li>yemas 40 g</li><li>huevo 50 g</li><li>sal 1 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Ganache de plátano</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Crema para batir 125 g</li><li>chocolate semi amargo 150 g</li><li>plátano 120 g</li><li>Trimoline 12 g</li><li>mantequilla 15 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Plátano salteado</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Plátano 2 pzas</li><li>mantequilla 15 g</li><li>miel 30 g</li><li>ron 20 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Chiboust de plátano</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Puré de plátano 170 g</li><li>jugo de limón 15 g</li><li>yemas 40 g</li><li>azúcar 30 g (crema pastelera)</li><li>crema para batir 200 g (crema pastelera)</li><li>fécula 15 g (crema pastelera)</li><li>grenetina 8 g</li><li>claras 70 g (merengue italiano)</li><li>azúcar 140 g (merengue italiano)</li><li>sal 1 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Decoración</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Plátano en rodajas 1 pza</li><li>azúcar 250 g</li><li>chocolate semi amargo 100 g</li></ul></div>
          </div>
        </section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Convierte cada paso en una observación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Durante la elaboración, usa la receta para comprobar tres relaciones. <strong>Antes de montar:</strong> identifica qué componentes ya están cocidos o preparados y cuáles todavía dependen del frío. <strong>Durante el chiboust:</strong> sigue el orden documentado y observa que la preparación incorpora la grenetina y el merengue italiano mientras sigue tibia. <strong>Antes de decorar:</strong> reconstruye mentalmente la secuencia plátano salteado → ganache → chiboust → frío → acabado. Si puedes explicar esa secuencia sin mirar, no solo seguiste la receta: reconociste cómo se construye la tarta.</p></section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Para la masa</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar la masa por el método de arenado.</li><li>Enfriar.</li><li>Forrar un molde de 20 cm de diámetro y darle cocción a fondo.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Para la ganache</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Llevar la crema a ebullición junto con el azúcar invertido.</li><li>Agregar el puré de plátano y la mantequilla.</li></ol><p className="mt-2 text-sm text-stone-500">La lista de ingredientes denomina este ingrediente Trimoline.</p></div>
            <div><h3 className="font-semibold text-stone-900">Para los plátanos salteados</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Cortar los plátanos en rodajas de 1 cm.</li><li>Saltearlas con la mantequilla y la miel.</li><li>Por último agregar el ron.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Para el chiboust de plátano</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una crema pastelera con las yemas, azúcar, crema y harina.</li><li>Mientras sigue tibia agregarle el puré de plátano con el jugo de limón.</li><li>Por último pero sin dejar que enfríe agregar la grenetina y el merengue italiano.</li></ol><p className="mt-2 text-sm text-stone-500">La lista de ingredientes indica fécula; el procedimiento de la fuente dice «harina». Se conserva esa diferencia.</p></div>
            <div><h3 className="font-semibold text-stone-900">Para el montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Colocar dentro de la tarta los plátanos salteados.</li><li>Cubrir con la ganache.</li><li>Envolver la tarta con una cinta de acetato y completar con la chiboust.</li><li>Dar frío.</li><li>Espolvorear con azúcar la superficie y caramelizar con el soplete. Decorar con chocolate y plátano.</li></ol></div>
          </div>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La masa sable y las preparaciones de crema son técnicas conocidas. La novedad está en coordinarlas dentro de una tarta con varias capas.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder reconstruir el orden del montaje y justificar por qué cada componente entra en ese momento según la receta.</p></section>

      </div>
    </CourseShell>
  );
}