import CourseShell from '../components/course/CourseShell';

const lesson = { number: '71', title: 'Gimont', subtitle: 'Clase 38 · Pasteles a Gran Escala' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 9 · Lección 71" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-9" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><p className="text-sm font-medium text-amber-800">Grado de dificultad</p><p className="mt-1 text-lg text-stone-800">***</p></div>
            <div><p className="text-sm font-medium text-amber-800">Tiempo de elaboración</p><p className="mt-1 text-lg text-stone-800">2 hrs</p></div>
          </div>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a elaborar pasteles a gran escala, mediante sistemas de producción en serie.</p>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Coordinar componentes para llegar al montaje</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Gimont reúne biscuit, jarabe, pistache caramelizado, mousseline, bavaroise y acabados. La producción se entiende al coordinar esas partes en el orden documentado.</p></section>

<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">La producción a gran escala exige pensar en componentes y orden</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Gimont reúne biscuit cuillere de pistache, jarabe, pistache caramelizado, mousseline, bavaroise y acabados. La dificultad no está solamente en cada receta, sino en coordinar componentes diferentes para llegar al montaje final.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera biscuit, jarabes, crema pastelera, mousseline, bavaroise, frío y chocolate temperado. Identifica cuáles son preparaciones base y cuáles aparecen como derivados o acabados. Práctica: ordena los componentes desde la primera preparación hasta el montaje individual y explica por qué el orden de producción importa.</p></section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Antes de empezar</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Conocimientos que vas a retomar</h2>
          <p className="mt-3 leading-7 text-stone-700">Esta elaboración reúne técnicas que ya aparecen en el recorrido. Repásalas antes de continuar:</p>
          <ul className="mt-4 space-y-3 leading-7">
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-el-aire-construye-la-estructura">El aire también construye la estructura</a> <span className="text-stone-700">— para retomar el principio de los bizcochos y masas batidas aplicado al biscuit de soleta.</span></li>
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-tres-leches">Tres leches: cuando una masa recibe humedad</a> <span className="text-stone-700">— para recuperar el uso y la función de un jarabe durante el montaje.</span></li>
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-crema-y-relleno">Crema y relleno también construyen el producto</a> <span className="text-stone-700">— para retomar la crema pastelera y la función de las cremas en el montaje.</span></li>
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-cuando-una-estructura-necesita-frio">Cuando una estructura necesita frío</a> <span className="text-stone-700">— para relacionar la bavaroise con preparaciones cuya estructura se consolida mediante frío.</span></li>
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-temperado-cristalizacion">Temperado: controlar la cristalización</a> <span className="text-stone-700">— antes de trabajar el chocolate temperado de la decoración.</span></li>
          </ul>
        </section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconoce el sistema detrás del montaje</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Durante la preparación, separa las operaciones por componente: biscuit, jarabe, pistache, mousseline y bavaroise. Después sigue el montaje documentado y observa cómo las preparaciones independientes se convierten en una pieza. Antes de terminar, explica qué componentes necesitan estar preparados antes del montaje y qué acabados aparecen al final. El objetivo es leer Gimont como una secuencia organizada, no memorizar una lista aislada de pasos.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Corte y componentes]</strong><br />Diagrama que permita reconocer biscuit de pistache, mousseline, bavaresa y decoración dentro del montaje individual.</p>
            <p><strong>[VIDEO SUGERIDO — Montaje en aro]</strong><br />Mostrar el revestimiento del aro, la incorporación de la mousseline y la bavaresa, y el acabado documentado con chocolate.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Bizcocho cuillere de pistache</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Yemas 5 pz</li><li>claras 5 pz</li><li>azúcar 150 g</li><li>harina 150 g</li><li>pistache picado finamente 30 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Jarabe de pistache</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Jarabe TpT 180 g, azúcar 90 g + agua 90 g</li><li>esencia de pistache 5 gotas</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Pistache dragee</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Pistache 225 g</li><li>azúcar 60 g</li><li>agua 15 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Mousseline pistache</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Crema pastelera 800 g, elaborada con leche 600 g, azúcar 170 g, fécula 50 g y yemas 8 pz</li><li>pasta de pistache 150 g</li><li>mantequilla 160 g</li><li>pistache dragee c/s, la receta</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Bavaroise pistache</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Grenetina en hoja 10 pz</li><li>leche 600 g</li><li>yemas 200 g</li><li>azúcar 200 g</li><li>pasta de pistache 120 g</li><li>crema para batir 500 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Decoración</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Brillo neutro 50 g</li><li>chocolate blanco 300 g</li><li>manteca de cacao 30 g</li><li>colorante verde c/s, laca alumínica</li></ul></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><ol className="list-decimal space-y-2 pl-6"><li>Elaborar un biscuit de soleta, con técnica conocida, espolvorear pistache picado finamente, hornear a 180 °C por 15 min y reservar.</li><li>Cocer el jarabe TpT y una vez frío añadir la esencia.</li><li>Caramelizar los pistaches y reservar.</li><li>Confeccionar la pastelera y derivarla en mousseline, agregar el pistache dragee.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Encamisar un aro individual con fondo y ¾ de los laterales.</li><li>Agregar la crema mousseline a la mitad del aro.</li><li>Adicionar la Bavaroise de pistache.</li><li>Decorar con brillo y chocolate temperado con manteca de cacao verde.</li></ol></div>
          </div>
        </section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Separa base, derivado y acabado</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Haz tres columnas y clasifica las elaboraciones de Gimont: biscuit, jarabe, pistache dragee, crema pastelera, mousseline, bavaroise y decoración. Después reconstruye el orden documentado hasta el montaje individual y marca qué preparaciones se derivan de otra.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Explica el sistema de producción</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Explica cómo se relacionan la crema pastelera y la mousseline de pistache.</li>
            <li>Ordena las preparaciones documentadas antes del montaje.</li>
            <li>Reconstruye los cuatro pasos del montaje individual.</li>
            <li>Identifica qué elementos pertenecen al acabado final y cuáles forman parte de la estructura del pastel.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}