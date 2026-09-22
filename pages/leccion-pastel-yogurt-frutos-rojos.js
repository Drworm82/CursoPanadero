import CourseShell from '../components/course/CourseShell';

const lesson = { number: '62', title: 'Pastel de yogurt y frutos rojos', subtitle: 'Clase 34 · Pastelería Contemporánea I' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 62" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a confeccionar un pastel de tipo contemporáneo, utilizando técnicas diversas, también conocerá como es el armado de un pastel con insertos.</p>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Un pastel contemporáneo se construye por componentes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La preparación combina magdalena, gelatina de frutos rojos, mousse de yogurt y decoración. La idea es aprender a leer esas partes como una arquitectura de montaje.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera batidos, gelatinas, merengue italiano y mousses. Después identifica qué aporta cada componente dentro del pastel según el montaje documentado. Práctica: dibuja un corte del pastel y coloca los componentes en el orden del montaje; después explica por qué se preparan por separado.</p></section>



        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cómo leer esta receta</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">No empieces por memorizar ingredientes: empieza por reconocer el sistema</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Esta preparación no se presenta como una sola mezcla. La fuente la organiza en cuatro partes: magdalena de limón y romero, jelly de frutos rojos, mousse de yogurt y decoración.
            El objetivo de esta lección es aprender a seguir la relación entre esas partes y el orden en que se convierten en un solo pastel.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-stone-50 p-5">
              <h3 className="font-semibold text-stone-900">1. Construir</h3>
              <p className="mt-2 leading-7 text-stone-700">Primero se preparan por separado la magdalena, el jelly y la mousse. La receta permite identificar cada preparación antes del montaje.</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-5">
              <h3 className="font-semibold text-stone-900">2. Insertar</h3>
              <p className="mt-2 leading-7 text-stone-700">La magdalena y el jelly se colocan juntos en una pastilla de 20 cm. Esa pastilla será incorporada después al armado.</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-5">
              <h3 className="font-semibold text-stone-900">3. Encerrar</h3>
              <p className="mt-2 leading-7 text-stone-700">La mousse se coloca en un molde de gota de 25 cm y la pastilla fría entra en un armado invertido. La secuencia es parte del aprendizaje.</p>
            </div>
            <div className="rounded-xl bg-stone-50 p-5">
              <h3 className="font-semibold text-stone-900">4. Terminar</h3>
              <p className="mt-2 leading-7 text-stone-700">Después del frío vienen el desmolde y los acabados documentados: cinta de chocolate, enjambre de glucosa con frambuesa y brillo rojo.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye el montaje antes de cocinar</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Sin mirar todavía el modo de elaboración, intenta ordenar estas operaciones: preparar la mousse, formar la pastilla con magdalena y jelly, enfriar la pastilla, colocar la mousse en el molde grande, realizar el armado invertido, refrigerar, desmoldar y decorar.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">
            Después compara tu secuencia con la receta. El ejercicio no consiste en adivinar: consiste en detectar qué operaciones dependen de que una preparación anterior ya esté lista o fría.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Lectura de los componentes</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Qué estás construyendo en cada etapa?</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="px-3 py-3 font-semibold text-stone-900">Componente</th>
                  <th className="px-3 py-3 font-semibold text-stone-900">Qué documenta la fuente</th>
                  <th className="px-3 py-3 font-semibold text-stone-900">Qué debes observar</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100"><td className="px-3 py-3 font-medium text-stone-900">Magdalena</td><td className="px-3 py-3">Se cocina sobre silpat y se corta una gota de 20 cm.</td><td className="px-3 py-3">Cómo una preparación horneada se prepara para entrar al montaje.</td></tr>
                <tr className="border-b border-stone-100"><td className="px-3 py-3 font-medium text-stone-900">Jelly</td><td className="px-3 py-3">Se cocina, enfría y después recibe la grenetina.</td><td className="px-3 py-3">Su relación temporal con la pastilla de magdalena y el frío.</td></tr>
                <tr className="border-b border-stone-100"><td className="px-3 py-3 font-medium text-stone-900">Mousse</td><td className="px-3 py-3">Integra yogurt, merengue italiano, grenetina y crema semi montada.</td><td className="px-3 py-3">Que se prepara como componente independiente antes del armado.</td></tr>
                <tr><td className="px-3 py-3 font-medium text-stone-900">Montaje y acabado</td><td className="px-3 py-3">La fuente indica armado invertido, refrigeración, desmolde y decoración.</td><td className="px-3 py-3">Cómo cambia la pieza al pasar de componentes separados a producto terminado.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Explica la receta sin leerla</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Enumera los cuatro grandes componentes de la preparación.</li>
            <li>Explica qué preparaciones forman la pastilla de 20 cm.</li>
            <li>Describe en qué momento aparece el molde de 25 cm y qué se coloca dentro de él.</li>
            <li>Explica por qué el frío aparece antes del desmolde y del acabado en la secuencia documentada.</li>
            <li>Reconstruye de memoria el orden general: preparación → pastilla → armado → frío → acabado.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Estructura del pastel]</strong><br />Diagrama o fotografía de corte que permita identificar visualmente la magdalena, el jelly, la mousse y la relación entre el inserto y el molde exterior.</p>
            <p><strong>[VIDEO SUGERIDO — Armado invertido]</strong><br />Demostración del montaje de la mousse, incorporación de la pastilla y secuencia de refrigeración y desmolde. El objetivo es observar el orden de las operaciones.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div><h3 className="font-semibold text-stone-900">Magdalena de limón y romero</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Huevo 50 g</li><li>azúcar 60 g</li><li>ralladura de limón 5 g</li><li>crema para batir 12 g</li><li>romero fresco 2 g</li><li>harina 50 g</li><li>fécula de maíz 12 g</li><li>polvo de hornear 2 g</li><li>mantequilla derretida 25 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Jelly de frutos rojos</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Azúcar 40 g</li><li>glucosa 15 g</li><li>frutos rojos 300 g</li><li>grenetina en polvo 8 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de yogurt</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Yogurt 250 g</li><li>merengue italiano 150 g (2 pzas claras y 120 g azúcar)</li><li>vaina de vainilla ½ pza</li><li>grenetina en polvo 10 g</li><li>crema para batir 250 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Decoración</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>Manteca de cacao 20 g</li><li>colorante para chocolate rojo 5 g</li><li>chocolate blanco 200 g</li><li>frambuesas frescas 50 g</li><li>brillo de pastelería 100 g</li><li>colorante rojo 2 g</li><li>glucosa 50 g</li></ul></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Magdalena de limón y romero</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Blanquear el huevo con el azúcar y la ralladura de limón.</li><li>Incorporar la crema y el romero picado.</li><li>Tamizar la harina, fécula y polvo de hornear e incorporarla a la preparación.</li><li>Agregar la mantequilla derretida.</li><li>Volcar la preparación sobre un silpat a 4 mm de espesor.</li><li>Cocinar a 170 °C.</li><li>Cortar una gota de 20 cm.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Jelly de frutos rojos</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Cocinar las moras, azúcar, glucosa y hervir por 2 minutos.</li><li>Dejar enfriar.</li><li>Agregar la grenetina.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de yogurt</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar un merengue italiano.</li><li>Entibiar el yogurt con la vaina de vainilla.</li><li>Mezclar el yogurt con el merengue.</li><li>Incorporar la grenetina y por último la crema semi montada.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una pastilla en molde de gota de 20 cm de largo con la Magdalena y el jelly de frutos rojos.</li><li>Una vez fría la pastilla y hecha la mousse de yogurt preparar un molde de gota de 25 cm de largo con acetato.</li><li>Vaciar la mousse dentro del aro para realizar un armado invertido.</li><li>Refrigerar el pastel una vez montado.</li><li>Desmoldar y para decorar hacer una cinta de chocolate con vetas rojas de manteca de cacao y colorante de la mitad altura de la mousse.</li><li>En la parte de arriba colocar enjambre de glucosa con frambuesa y cubrir el pastel con gel de brillo teñido de rojo.</li></ol></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cierre</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La receta es ahora una secuencia que puedes explicar</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Si puedes reconstruir los componentes, explicar cómo se forma la pastilla, identificar el armado invertido y ordenar las etapas de frío y acabado, ya no estás solamente siguiendo una receta: estás interpretando el sistema de montaje documentado en esta clase.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}