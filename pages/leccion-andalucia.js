import CourseShell from '../components/course/CourseShell';

const lesson = { number: '65', title: 'Andalucía', subtitle: 'Clase 35 · Pastelería Contemporánea II' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 65" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno reforzara la técnica de cocción en crema inglesa y la aplicara en la realización de una mousse.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Una técnica previa puede convertirse en estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">En Andalucía, la cocción inglesa aparece como base de preparaciones que después reciben otros componentes. La lección enseña a reconocer esa continuidad técnica dentro de un pastel contemporáneo.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera crema inglesa, batidos, gelatina y crema semimontada. Señala dónde aparece la cocción inglesa y qué sucede después de retirar cada preparación del fuego. Práctica: relaciona biscuit, crema de naranja, mousse, glaseado y decoración con su lugar en el montaje.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Convierte cada paso en una observación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Pon atención especial a la continuidad de la técnica. <strong>Durante la cocción inglesa:</strong> identifica dónde aparece dentro de la preparación documentada. <strong>Después de esa cocción:</strong> observa qué componentes se incorporan antes de llegar a la mousse terminada. <strong>Al revisar el montaje:</strong> separa las preparaciones horneadas, las cremas y el acabado. Al finalizar, explica qué técnica previa fue recuperada y en qué preparación vuelve a aparecer.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Estructura de Andalucía]</strong><br />Corte o esquema que identifique biscuit de almendra, crema de naranja, mousse de chocolate/praliné y glaseado oscuro.</p>
            <p><strong>[VIDEO SUGERIDO — Cocción de la crema inglesa y mousse]</strong><br />Demostración centrada en la transformación de la mezcla durante la cocción y en su integración posterior a la mousse.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Biscuit de almendra</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>yemas 3 pzas</li><li>azúcar 30 g</li><li>claras 3 pzas</li><li>azúcar 40 g</li><li>harina 50 g</li><li>mantequilla fundida 50 g</li><li>almendra caramelizada 50 g (30 g azúcar + 30 g almendra + 10 g mantequilla)</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Crema de naranja</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>grenetina en polvo 3 g</li><li>huevo 50 g</li><li>azúcar 100 g</li><li>jugo de naranja 75 ml</li><li>ralladura de naranja 6 g</li><li>mantequilla 100 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de chocolate y praliné</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>azúcar 20 g</li><li>leche 75 g</li><li>crema para batir 75 g</li><li>yemas 40 g</li><li>praliné 60% 90 g</li><li>chocolate amargo 90 g</li><li>grenetina en polvo 8 g</li><li>crema para batir 270 g semi montada</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Glaseado oscuro</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>crema para batir 60 g</li><li>agua 70 g</li><li>azúcar 90 g</li><li>cocoa 30 g</li><li>grenetina en polvo 4 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Decoración</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>naranja 1 pza</li><li>chocolate amargo 200 g</li><li>manteca de cacao 20 g</li><li>colorante para chocolate 5 g</li><li>colorante metálico en polvo 2 g (laca alumínica)</li><li>brillo de pastelería 30 g</li></ul></div>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Biscuit</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Caramelizar la almendra picada y ponerle la mantequilla.</li><li>Batir las yemas y las claras con su respectiva azúcar.</li><li>Incorporar la harina en forma envolvente.</li><li>En forma de pre-mezcla agregar la mantequilla derretida.</li><li>Con la ayuda de una manga y duya lisa realizar 2 discos de 18 cm de diámetro.</li><li>Espolvorear la almendra caramelizada sobre el biscuit.</li><li>Hornear a 180 °C por 8 minutos.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Crema de naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una inglesa con el huevo, jugo y ralladura de naranja, azúcar.</li><li>Sacar del fuego e incorporar la mantequilla fría con la ayuda de una procesadora de inmersión.</li><li>Disolver la grenetina hidratada e incorporarla a la preparación.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de chocolate</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una crema Inglesa con el azúcar, leche, crema (75 g) y yemas.</li><li>Retirar del fuego y volcar sobre el chocolate picado.</li><li>Agregar la pasta de Praliné y mezclar bien.</li><li>Disolver la grenetina hidratada e incorporar a la preparación.</li><li>Por último agregar la crema semi batida.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Glaseado</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Hervir la crema con el agua y el azúcar.</li><li>Agregar la cocoa y mezclar para que se incorpore bien.</li><li>Esperar a que baje la temperatura y agregar la gelatina.</li><li>Mixear sin incorporar aire y colar.</li><li>Utilizar entre 22 °C y 24 °C.</li></ol></div>
          </div>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La crema inglesa, los batidos y la gelatina ya forman parte del repertorio del curso. Esta vez se conectan para construir crema de naranja y mousse.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder localizar la cocción inglesa dentro de la preparación y relacionarla con el componente que se obtiene después.</p></section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Mapa de componentes y técnicas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Haz una tabla con biscuit de almendra, crema de naranja, mousse de chocolate, praliné y glaseado. Para cada componente, anota la técnica documentada y la señal de proceso que permite reconocer cuándo continuar. No agregues operaciones que la receta no indique.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye la lógica de la preparación</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Identifica qué preparaciones parten de una cocción inglesa.</li>
            <li>Explica qué función cumple la grenetina dentro de las preparaciones donde aparece.</li>
            <li>Describe la secuencia documentada del glaseado y su temperatura de uso.</li>
            <li>Explica cómo se combinan los componentes para formar una pieza contemporánea.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}