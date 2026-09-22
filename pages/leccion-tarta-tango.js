import CourseShell from '../components/course/CourseShell';

const lesson = { number: '67', title: 'Tarta Tango', subtitle: 'Clase 36 · Pastelería Contemporánea' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 67" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno confeccionara una tarta contemporánea con técnicas conocidas, descubrirá el uso de ingredientes no típicos para repostería.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Los sabores cambian; la lógica de construcción permanece</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Tango combina ajonjolí, frambuesa, pimiento rojo y parmesano dentro de técnicas conocidas. La lección enseña a analizar la pieza por componentes aunque la combinación sea poco habitual.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera masas de tarta, biscuit, compotas, cremas y acabados. Observa cómo cada componente entra en el montaje. Práctica: separa estructura, capa intermedia, crema, acabado y elemento crujiente; después identifica qué técnica previa reconoces en cada uno.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Convierte cada paso en una observación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Esta receta permite practicar la lectura de una composición compleja. <strong>Antes de comenzar:</strong> separa mentalmente casco, biscuit, compota, crema y teja. <strong>Durante la elaboración:</strong> identifica qué preparaciones requieren horno, cuáles requieren cocción y cuáles se reservan para el montaje. <strong>Al montar:</strong> sigue la secuencia documentada y comprueba qué componente aparece después de la refrigeración. Al terminar, intenta describir Tango únicamente mediante sus componentes y su orden de montaje.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Corte de Tarta Tango]</strong><br />Fotografía o diagrama que permita reconocer las capas de sucrée de sésamo, joconde, compota, crema de parmesano y acabado de frambuesa.</p>
            <p><strong>[VIDEO SUGERIDO — Montaje y acabado]</strong><br />Mostrar la colocación de las capas y la elaboración o aplicación de los acabados documentados, sin sustituir las instrucciones escritas.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Sucrée de ajonjolí</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>mantequilla 75 g</li><li>polvo de almendra 18 g</li><li>azúcar glass 47 g</li><li>vaina de vainilla ½ pza</li><li>huevo 30 g</li><li>flor de sal 1 pizca</li><li>harina 125 g</li><li>ajonjolí blanco 30 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Biscuit joconde</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>polvo de almendras 83 g</li><li>azúcar glass 66 g</li><li>azúcar invertida 6 g</li><li>huevo 110 g</li><li>mantequilla 16 g</li><li>claras 73 g</li><li>azúcar 10 g</li><li>harina 22 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Compota de frambuesa y pimiento</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>puré de frambuesa 92 g</li><li>puré de pimiento rojo 9 g (blanqueado)</li><li>azúcar 22 g</li><li>vinagre de frambuesa 7 ml</li><li>grenetina 3 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Crema de parmesano</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>yemas 40 g</li><li>agua 55 g</li><li>azúcar 61 g</li><li>grenetina en polvo 5 g</li><li>crema para batir 22 g</li><li>crema semi montada 188 g</li><li>queso parmesano 75 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Brillo de frambuesa</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>frambuesas 120 g</li><li>azúcar 65 g</li><li>pectina 2 g</li><li>jugo de limón 10 ml</li><li>brillo neutro 75 g</li><li>colorante rojo 1 g en gel</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Teja de parmesano</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>queso parmesano 25 g rallado</li><li>isomalt 65 g</li></ul></div>
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


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Construye el mapa de Tango</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Clasifica los componentes de la receta en base, componente frutal, crema, brillo y decoración. Después relaciona cada uno con la técnica documentada y reconstruye el orden de los dos pasos de montaje que aparecen en la fuente.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Distingue componente y función</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Identifica qué componente aporta la estructura de tarta y cuál aporta la base de biscuit.</li>
            <li>Explica cómo se prepara la compota de frambuesa y pimiento según la receta.</li>
            <li>Reconstruye el montaje documentado desde el casco de tarta hasta la crema de parmesano.</li>
            <li>Explica qué información puedes obtener de la receta y qué aspectos no están desarrollados en el apartado de montaje.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}