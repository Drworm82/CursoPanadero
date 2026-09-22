import CourseShell from '../components/course/CourseShell';

const lesson = { number: '70', title: 'Framboisier', subtitle: 'Clase 38 · Pasteles a Gran Escala' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 9 · Lección 70" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-9" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><p className="text-sm font-medium text-amber-800">Grado de dificultad</p><p className="mt-1 text-lg text-stone-800">**</p></div>
            <div><p className="text-sm font-medium text-amber-800">Tiempo de elaboración</p><p className="mt-1 text-lg text-stone-800">2 hrs</p></div>
          </div>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a leer un pastel a gran escala como un sistema de producción en serie, usando Framboisier como caso modelo.</p>
        </section>

<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Caso modelo</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Aprende a leer el sistema antes de transferirlo</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Framboisier permite leer una elaboración completa como cadena: bizcocho, crema pastelera, crema mousseline, relleno de frambuesas, alisado, congelación, acabado, brillo, corte y decoración. El aprendizaje está en reconocer cómo cada etapa prepara la siguiente.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera bizcochos, crema pastelera, cremas, frío, montaje y acabado. Aquí no se estudian como técnicas aisladas: se ordenan para producir una pieza que después debe terminarse y cortarse. Práctica: reconstruye la secuencia del montaje sin mirar la receta y señala qué operaciones requieren frío antes de pasar a la siguiente etapa.</p></section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Antes de empezar</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Conocimientos que vas a retomar</h2>
          <p className="mt-3 leading-7 text-stone-700">Esta elaboración reúne técnicas que ya aparecen en el recorrido. Repásalas antes de continuar:</p>
          <ul className="mt-4 space-y-3 leading-7">
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-el-aire-construye-la-estructura">El aire también construye la estructura</a> <span className="text-stone-700">— para recuperar el principio de los bizcochos y masas batidas.</span></li>
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-crema-y-relleno">Crema y relleno también construyen el producto</a> <span className="text-stone-700">— aquí se desarrolla la crema pastelera y se relacionan distintas cremas con el producto final.</span></li>
            <li><a className="font-medium text-amber-800 underline underline-offset-2" href="/leccion-montar-y-decorar">La consistencia también construye el acabado</a> <span className="text-stone-700">— para retomar la relación entre consistencia, relleno, montaje y acabado.</span></li>
          </ul>
        </section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Lee la receta como una secuencia de producción</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Mientras trabajas, identifica qué preparación debe estar lista antes de comenzar la siguiente. Observa la cadena documentada: biscuit → crema → crema mousseline → relleno → segunda capa → congelación → acabado → corte → decoración. La actividad consiste en marcar en tu receta qué operaciones pueden hacerse por separado y cuáles dependen del estado anterior de la pieza. Al terminar, intenta reconstruir la secuencia sin mirar el procedimiento.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Producción en serie]</strong><br />Vista del pastel terminado y esquema de sus componentes para hacer visible la organización del trabajo a gran escala.</p>
            <p><strong>[VIDEO SUGERIDO — Montaje, alisado y acabado]</strong><br />Demostración del montaje por capas, alisado, congelación, aplicación de pintura y brillo, hasta el corte y decoración documentados.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Bizcocho de almendra</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Almendra en polvo 500 g</li><li>azúcar 250 g</li><li>claras 600 g</li><li>azúcar 250 g</li><li>mantequilla 75 g, fundida</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Crema pastelera</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Crema pastelera 600 g. Para elaborarla: leche 400 ml</li><li>yemas 96 g</li><li>azúcar 120 g</li><li>fécula de maíz 28 g</li><li>esencia de vainilla 8 ml</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Mousseline de frambuesa</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Mantequilla 1,000 g; separar 400 g de crema de mantequilla para alisar</li><li>claras 360 g</li><li>azúcar 720 g</li><li>esencia de frambuesa 90 gotas, importada</li><li>crema pastelera, la receta</li><li>colorante rojo c/s</li><li>frambuesas frescas 680 g, 3 domos (2 relleno y 1 decoración)</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Acabado</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Pintura de chocolate obscura 704 g</li><li>brillo neutro 250 g</li><li>colorante rojo c/s</li></ul></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Preparaciones</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Elaborar un bizcocho de almendras, cocer en plancha a 180 °C, reservar.</li><li>Elaborar una crema pastelera, derivar una mousseline de frambuesa.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Colocar una placa de bizcocho y una de crema mousseline, rellenar con frambuesas frescas.</li><li>Colocar otra capa de bizcocho y alisar con crema de mantequilla. Congelar.</li><li>Con ayuda de una reja, pintar con compresora, volver a congelar.</li><li>Pintar el brillo ligeramente con color rojo, brillar el pastel.</li><li>Cortar según demo de chef.</li><li>Decorar con frambuesa y un cigarrillo de chocolate (opcional).</li></ol></div>
          </div>
        </section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Dibuja la línea de producción</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Construye un esquema con cuatro grupos: preparaciones, montaje, frío y acabado. Coloca dentro de cada grupo las operaciones documentadas y conecta cada una con la que le sigue. Después marca qué componentes se preparan antes del montaje y qué operaciones ocurren después de congelar.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye Framboisier sin la receta</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Enumera las preparaciones principales antes del montaje.</li>
            <li>Ordena el montaje desde la primera placa de bizcocho hasta la decoración.</li>
            <li>Identifica las dos etapas de congelación documentadas.</li>
            <li>Explica qué información aporta la receta sobre el corte y qué parte remite a la demostración del chef.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}