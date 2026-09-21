import CourseShell from '../components/course/CourseShell';

const lesson = { number: '63', title: 'Tarta Tango', subtitle: 'Clase 36 · Pastelería Contemporánea' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 63" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno confeccionara una tarta contemporánea con técnicas conocidas, descubrirá el uso de ingredientes no típicos para repostería.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Los sabores cambian; la lógica de construcción permanece</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Tango combina ajonjolí, frambuesa, pimiento rojo y parmesano dentro de técnicas conocidas. La lección enseña a analizar la pieza por componentes aunque la combinación sea poco habitual.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera masas de tarta, biscuit, compotas, cremas y acabados. Observa cómo cada componente entra en el montaje. Práctica: separa estructura, capa intermedia, crema, acabado y elemento crujiente; después identifica qué técnica previa reconoces en cada uno.</p></section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <p><strong>Sucrée de ajonjolí:</strong> mantequilla 75 g · polvo de almendra 18 g · azúcar glass 47 g · vaina de vainilla ½ pza · huevo 30 g · flor de sal 1 pizca · harina 125 g · ajonjolí blanco 30 g.</p>
            <p><strong>Biscuit joconde:</strong> polvo de almendras 83 g · azúcar glass 66 g · azúcar invertida 6 g · huevo 110 g · mantequilla 16 g · claras 73 g · azúcar 10 g · harina 22 g.</p>
            <p><strong>Compota de frambuesa y pimiento:</strong> puré de frambuesa 92 g · puré de pimiento rojo 9 g (blanqueado) · azúcar 22 g · vinagre de frambuesa 7 ml · grenetina 3 g.</p>
            <p><strong>Crema de parmesano:</strong> yemas 40 g · agua 55 g · azúcar 61 g · grenetina en polvo 5 g · crema para batir 22 g · crema semi montada 188 g · queso parmesano 75 g.</p>
            <p><strong>Brillo de frambuesa:</strong> frambuesas 120 g · azúcar 65 g · pectina 2 g · jugo de limón 10 ml · brillo neutro 75 g · colorante rojo 1 g en gel.</p>
            <p><strong>Teja de parmesano:</strong> queso parmesano 25 g rallado · isomalt 65 g.</p>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Sucrée de ajonjolí</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Técnica de acremar.</li><li>Refrigerar.</li><li>Extender y forrar un aro.</li><li>Cocer a 170 °C hasta dorar.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Biscuit joconde</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Trabajar el polvo de almendras, azúcar glass y azúcar invertida.</li><li>Agregar la mitad del huevo y montar por 8 min.</li><li>Incorporar el resto del huevo y seguir montando por 10–12 min. más.</li><li>Tomar un poco del batido y mezclarlo con la mantequilla derretida, reservar.</li><li>Aparte montar las claras con el azúcar.</li><li>Mezclar los dos batidos de forma envolvente e ir agregando la harina.</li><li>Al final la mantequilla.</li><li>Verter en charola.</li><li>Hornear a 200 °C de 7–8 min.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Compota de frambuesa y pimiento</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Mezclar el puré de frambuesa con el azúcar y el vinagre.</li><li>Calentar el puré de pimiento rojo para disolver la grenetina hidratada.</li><li>Verter en la mezcla anterior.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Crema de parmesano</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Calentar el agua con el azúcar.</li><li>Verter sobre las yemas y cocer a la inglesa.</li><li>Montar.</li><li>Agregar la grenetina hidratada y fundida, junto con la crema.</li><li>Enseguida el queso parmesano y por último la crema semimontada.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Brillo de frambuesa</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Moler las frambuesas.</li><li>Hervir con el azúcar y la pectina.</li><li>Agregar el jugo de limón.</li><li>Incorporar el brillo neutro y el colorante.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Tejas</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Moler queso parmesano con isomalt.</li><li>Hornear en silpat a 180 °C por 10 min.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Colocar sobre el casco de tarta una capa de compota de frambuesa y refrigerar.</li><li>Poner un disco de joconde y sobre esta la crema de parmesano glaseada con el brillo.</li></ol></div>
          </div>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Masa sucrée, joconde, compota, crema y acabados son técnicas ya estudiadas. El ejercicio consiste en reconocerlas dentro de una combinación distinta.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder leer Tango como una suma ordenada de componentes y no como una receta de una sola preparación.</p></section>

      </div>
    </CourseShell>
  );
}