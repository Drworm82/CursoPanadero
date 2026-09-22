import CourseShell from '../components/course/CourseShell';

const lesson = { number: '61', title: 'Pastel de vino espumoso y frutos rojos', subtitle: 'Clase 33 · Pastelería Internacional' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 61" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 33 · Pastelería Internacional</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">Pâte à cigarette, biscuit Joconde, gelée y mousse de vino espumoso.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La clase tiene como objetivo elaborar pâte à cigarette, aplicar la técnica de encamisado y conocer
            el método de elaboración de un sabayón. El pastel combina un biscuit impreso, gelée de frutos rojos,
            mousse de vino espumoso y decoración de fruta.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Dependencias</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Qué debe estar listo antes?</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Sin mirar el procedimiento, identifica qué elementos dependen de enfriado, congelación o temperatura antes de entrar al montaje. Después verifica la secuencia documentada, incluida la gelée, el biscuit impreso y la mousse de vino espumoso.</p></section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Pâte à cigarette</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Mantequilla 60 g.</li><li>Azúcar glass 60 g.</li><li>Clara de huevo 60 g.</li><li>Harina 40 g.</li><li>Cocoa 20 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Biscuit Joconde</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Huevo 70 g.</li><li>Yema 50 g.</li><li>TpT 200 g (100 g azúcar glass + 100 g polvo de almendra).</li><li>Claras 160 g.</li><li>Azúcar 60 g.</li><li>Harina 70 g.</li><li>Mantequilla derretida 20 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Gelée de frutos rojos</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Azúcar 150 g.</li><li>Agua 150 g.</li><li>Mix de frutos rojos 100 g.</li><li>Grenetina en polvo 12 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Mousse de vino espumoso</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Azúcar 180 g.</li><li>Yemas 120 g.</li><li>Ralladura de limón 1 pieza.</li><li>Vino espumoso 130 g.</li><li>Grenetina en polvo 15 g.</li><li>Crema semi montada 400 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5 md:col-span-2"><h3 className="font-semibold">Decoración</h3><ul className="mt-3 grid gap-1.5 text-sm leading-6 text-stone-700 sm:grid-cols-2">
              <li>Pulpa de frutos rojos 70 g.</li><li>Gel neutro 60 g.</li><li>Frambuesa fresca 30 g.</li><li>Arándano 30 g.</li><li>Zarzamora 30 g.</li><li>Hoja de menta 10 piezas.</li>
            </ul></article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold">Biscuit impreso · Pâte à cigarette</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Acremar la mantequilla con el azúcar glass.</li>
              <li>Incorporar las claras a temperatura ambiente.</li>
              <li>Agregar la harina y mezclar lo suficiente para obtener una pasta homogénea.</li>
              <li>Agregar la cocoa y extender sobre un silpat según el diseño que se quiera tener.</li>
              <li>Refrigerar y extender el biscuit sobre esta preparación.</li>
            </ol></div>
            <div><h3 className="font-semibold">Biscuit Joconde</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Batir los huevos y las yemas con el TpT en la batidora con la pala hasta punto letra.</li>
              <li>Batir las claras con los 60 g de azúcar hasta punto nieve.</li>
              <li>Incorporar la harina a la mezcla de yemas de forma envolvente.</li>
              <li>Agregar las claras también de forma envolvente.</li>
              <li>Por último agregar la mantequilla fundida.</li>
              <li>Extender sobre el diseño de pâte à cigarette y hornear a 200 °C durante 7–8 minutos.</li>
            </ol></div>
            <div><h3 className="font-semibold">Gelée de frutos rojos</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Realizar un almíbar con el agua y el azúcar.</li>
              <li>Calentar los frutos para que se descongelen y después procesar para obtener un puré.</li>
              <li>Mezclar la fruta y el almíbar.</li>
              <li>Agregar la grenetina hidratada y disuelta.</li>
              <li>Vaciar en aro de 18 cm sobre un disco de Biscuit Joconde y congelar.</li>
            </ol></div>
            <div><h3 className="font-semibold">Mousse de vino espumoso · sabayón</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Mezclar las yemas con el azúcar y batir hasta disolver el azúcar.</li>
              <li>Llevar a baño María a 72 °C sin dejar de batir.</li>
              <li>Una vez alcanzada la temperatura, incorporar el vino espumoso poco a poco sin dejar de batir.</li>
              <li>Retirar el sabayón del baño María y batir a velocidad media hasta que esté a temperatura ambiente.</li>
              <li>Incorporar la grenetina hidratada y disuelta.</li>
              <li>Por último agregar la crema semi montada.</li>
              <li>Volcar sobre un aro de 20 cm con acetato, biscuit impreso y la gelée.</li>
            </ol></div>
            <div><h3 className="font-semibold">Decoración</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Mezclar la pulpa y el gel de brillo.</li>
              <li>Colocar una capa delgada sobre el pastel y después adornar con pâte à cigarette y los frutos.</li>
            </ol></div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Reconstruye el encamisado</h2>
          <p className="mt-2 leading-7 text-stone-700">
            Ordena la preparación de pâte à cigarette, la extensión del Joconde, el congelado de la gelée y el
            montaje de la mousse. Después marca el punto de 72 °C del sabayón y explica qué sucede antes de añadir la crema.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>¿Qué se prepara primero para crear el diseño impreso?</li>
            <li>¿A qué temperatura se lleva el sabayón?</li>
            <li>¿Qué componentes se colocan dentro del aro de 20 cm?</li>
            <li>¿Qué operaciones de acabado están documentadas?</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Se conserva el término “Pate cigarrete” del encabezado y “pâte à cigarette” en el procedimiento,
            además de la denominación “Sabayón” usada por la fuente. No se corrige ni se reconcilia la terminología.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
