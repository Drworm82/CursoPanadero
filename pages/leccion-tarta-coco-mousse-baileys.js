import CourseShell from '../components/course/CourseShell';

const lesson = { number: '64', title: 'Tarta de coco con mousse de Bailey’s', subtitle: 'Clase 35 · Pastelería Contemporánea II' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 64" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aplicara técnicas antes vistas, para la confección de tartas contemporáneas.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Separar componentes para entender el montaje</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La tarta reúne sable de chocolate y especias, flan de coco, mousse y tejas. Cada componente usa una técnica diferente y después se integra en una misma preparación.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera masas sable y mousses. Antes de seguir el procedimiento, clasifica qué componentes necesitan horno y cuáles dependen de cocción, montaje o frío. Práctica: clasifica los componentes como base, relleno, mousse o decoración y relaciona cada uno con la técnica previa que recupera.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Convierte cada paso en una observación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Usa cada componente para recuperar una técnica ya estudiada. <strong>Al preparar el sablé:</strong> reconoce que estás volviendo al trabajo de una masa friable. <strong>Al preparar la mousse:</strong> identifica la crema inglesa, la grenetina y la crema semi montada como etapas distintas antes de unirlas. <strong>Durante el montaje:</strong> observa que la tarta debe estar fría antes de colocar la mousse. Al terminar, intenta explicar qué parte de la pieza corresponde a base, relleno, mousse y decoración.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Componentes de la tarta]</strong><br />Vista de corte que permita reconocer el sable de chocolate y especias, el flan de coco, la mousse y las tejas de coco.</p>
            <p><strong>[VIDEO SUGERIDO — Montaje de la tarta]</strong><br />Mostrar la preparación del molde y la incorporación sucesiva de los componentes para hacer visible la lógica del montaje.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Sablé de chocolate y especias</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>mantequilla 125 g</li><li>harina 200 g</li><li>cocoa 50 g</li><li>4 especias 1 pizca</li><li>sal 1 pizca</li><li>yemas 1 pza</li><li>huevo 1 pza</li><li>azúcar 80 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Flan de coco y caramelo</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>leche 120 ml</li><li>crema para batir 180 ml</li><li>azúcar 80 g</li><li>coco rallado 40 g</li><li>huevo 1 pza</li><li>yemas 3 pzas</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de chocolate y Bailey’s</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>cobertura de leche 140 g</li><li>leche 50 ml</li><li>crema para batir 50 ml</li><li>yemas 20 g</li><li>Bailey’s 25 ml</li><li>azúcar 25 g</li><li>crema para batir 160 g semi montada</li><li>grenetina en polvo 8 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Tejas de coco</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>coco rallado 30 g</li><li>azúcar mascabado 35 g</li><li>claras 30 g</li><li>harina 10 g</li><li>mantequilla noisette 24 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Para decorar</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>chocolate amargo 300 g y manteca de cacao 300 g, para todo el grupo</li></ul></div>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Sablé de chocolate</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una masa friable por el método de sablage.</li><li>Forrar un molde de 20 cm de diámetro.</li><li>Pre cocinar a 180 °C por 7–8 minutos.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Flan de coco y caramelo</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar un caramelo claro con el azúcar y agregarle la crema hirviendo.</li><li>Mezclar con la leche fría.</li><li>Incorporar el coco rallado y el huevo.</li><li>Vaciar sobre la masa pre cocida.</li><li>Hornear a 180 °C de 15 a 20 minutos.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de chocolate y Bailey’s</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una crema inglesa.</li><li>Agregar el chocolate derretido y Bailey’s.</li><li>Incorporar la grenetina hidratada y disuelta.</li><li>Bajar la temperatura a 40 °C e incorporar la crema semi montada.</li><li>Colocar en un aro de 18 cm y refrigerar.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Tejas de coco</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Mezclar los ingredientes secos.</li><li>Incorporar las claras y la mantequilla noisette tibia.</li><li>Estirar de 3 mm de espesor.</li><li>Cortar pequeños discos.</li><li>Hornear a 180 °C hasta dorar.</li><li>Una vez fuera del horno mientras siguen calientes cortar a la mitad.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Una vez que la tarta esta fría colocar la mousse de Bailey’s sobre esta.</li><li>En caso de tener compresor, pulverizar con cantidades iguales de chocolate amargo y manteca de cacao a 30 °C.</li><li>Colocar las mitades de teja alrededor del mousse. Para decorar hacer alguna decoración con chocolate.</li></ol></div>
          </div>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Vas a reutilizar masa sable, flan, mousse y elementos de decoración. Antes de leer el procedimiento completo, identifica qué técnica corresponde a cada componente.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder separar la preparación en componentes y explicar qué técnica previa recupera cada uno.</p></section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Sigue la transformación de la mousse</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Reconstruye la secuencia de la mousse: crema inglesa → chocolate y Bailey’s → grenetina → 40 °C → crema semi montada → aro de 18 cm → refrigeración. Después relaciona esa secuencia con la tarta fría, el pulverizado documentado y las tejas.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Relaciona técnica y componente</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Explica qué componente se construye mediante crema inglesa.</li>
            <li>Indica qué sucede con la mousse cuando llega a 40 °C.</li>
            <li>Reconstruye el orden general del montaje de la tarta.</li>
            <li>Señala qué parte del acabado está condicionada por disponer de compresor según la fuente.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}