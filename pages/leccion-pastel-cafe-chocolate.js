import CourseShell from '../components/course/CourseShell';

const lesson = { number: '62', title: 'Pastel café y chocolate', subtitle: 'Clase 36 · Pastelería Contemporánea' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 62" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno reforzara su conocimiento en la elaboración de masas merengadas. Elaborara cremas saborizadas con técnica de cocción a la inglesa.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Varias texturas, una sola arquitectura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La dacquoise, el cremoso de café, la bavaresa, el glaseado y la decoración tienen preparaciones distintas pero terminan organizados en un solo pastel.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera batidos y cremas cocidas. Compara qué técnica produce cada componente y qué lugar ocupa dentro del conjunto. Práctica: construye un esquema con base, crema, bavaresa, glaseado y decoración y explica la técnica asociada a cada parte.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Convierte cada paso en una observación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Mientras avanzas, identifica qué función cumple cada preparación dentro del conjunto. <strong>En la dacquoise:</strong> observa cómo se combinan claras, azúcar, almendra y los ingredientes secos documentados. <strong>En las cremas:</strong> distingue la preparación cocida de la incorporación de crema semi montada. <strong>En el montaje:</strong> recupera el orden de los componentes antes de pasar al acabado. Después compara esta arquitectura con una preparación anterior del módulo y señala qué elemento se repite y cuál cambia.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Dacquoise, bavaresa y glaseado]</strong><br />Corte o esquema que permita distinguir las capas y relacionarlas con las preparaciones documentadas.</p>
            <p><strong>[VIDEO SUGERIDO — Montaje y acabado]</strong><br />Mostrar el armado de las capas y el glaseado final, haciendo visible cómo una preparación compuesta se convierte en una pieza terminada.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Dacquoise de chocolate</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>claras 105 g</li><li>azúcar 52 g</li><li>polvo de almendras 90 g</li><li>azúcar 30 g</li><li>harina 15 g</li><li>chocolate semi amargo 30 g</li><li>café soluble 3 g</li><li>azúcar glass 45 g para espolvorear</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Cremoso de café</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>leche 110 ml</li><li>crema para batir 80 g</li><li>yemas 40 g</li><li>azúcar mascabado 90 g</li><li>café soluble 10 g</li><li>grenetina en polvo 12 g</li><li>crema para batir 150 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Bavaresa de chocolate</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>leche 100 ml</li><li>crema para batir 100 g</li><li>yemas 40 g</li><li>azúcar 20 g</li><li>grenetina en polvo 6 g</li><li>chocolate amargo 120 g</li><li>crema semi batida 360 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Glaceo de café</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>glucosa 30 g</li><li>crema para batir 95 g</li><li>chocolate blanco 150 g</li><li>café soluble 3 g</li><li>grenetina en polvo 5 g</li><li>brillo de pastelería 75 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Decoración</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>chocolate blanco 150 g</li><li>chocolate amargo 300 g</li></ul></div>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Dacquoise de chocolate</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Batir las claras con azúcar.</li><li>Agregar los ingredientes secos tamizados y el chocolate rallado.</li><li>Hacer dos óvalos de 16 cm.</li><li>Espolvorear con azúcar glass.</li><li>Cocinar a 180 °C de 7 a 8 minutos.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Cremoso de café</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una infusión con el café y la leche.</li><li>Pasar por un chino.</li><li>Agregar la crema y cocinar a 84 °C con las yemas blanqueadas con el azúcar, y agregar la grenetina.</li><li>Mezclar a 26 °C con la crema semi-batida y colocar en el molde.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Bavaresa de chocolate</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una crema inglesa con la leche, crema, yemas y azúcar.</li><li>Una vez lista, volcar sobre el chocolate picado.</li><li>Agregar la grenetina hidrata y disuelta, mezclar bien.</li><li>Por último incorporar la crema semi batida.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Glaseo de café</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Colocar la crema, glucosa, café y chocolate blanco en baño María y fundir.</li><li>Cuando esté por debajo de los 50 °C agregar la grenetina hidratada y disuelta.</li><li>Incorporar el brillo de pastelería y licuar con una procesadora de inmersión.</li><li>Usar a 27–29 °C.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una pastilla con el cremoso de café y el dacquoise en un óvalo de 18 cm de diámetro.</li><li>En un óvalo de 20 cm. Verter la bavaresa de café para realizar un armado invertido.</li><li>Una vez listo desmoldar y bañar con el glaseo de café.</li><li>Para decorar realizar casquillos de chocolate para colocar alrededor del pastel terminar con algo de chocolate.</li></ol><p className="mt-2 text-sm text-stone-500">La fuente denomina «bavaresa de café» en este paso, aunque la receta está titulada y formulada como bavaresa de chocolate. Se conserva el texto de la fuente.</p></div>
          </div>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Retoma los batidos y las cremas cocidas. La preparación usa esas técnicas para construir componentes con texturas diferentes.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder distinguir la función de dacquoise, crema de café, bavaresa, glaseado y decoración.</p></section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye el armado invertido</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Ordena los componentes del pastel: dacquoise, cremoso de café, bavaresa y glaseo. Después anota las temperaturas documentadas para el cremoso y el glaseo y ubica en qué momento aparece cada una dentro de la secuencia.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Explica las relaciones entre componentes</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>¿Qué componente se construye a partir de una cocción a 84 °C?</li>
            <li>¿A qué temperatura se mezcla el cremoso con la crema semi-batida?</li>
            <li>Reconstruye el armado invertido con los tamaños documentados.</li>
            <li>Explica la diferencia entre el nombre de la bavaresa en la receta y el nombre que aparece en el paso de montaje.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}