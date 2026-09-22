import CourseShell from '../components/course/CourseShell';

const lesson = { number: '60', title: 'Bavaroise de la pasión con dacquoise de avellanas', subtitle: 'Clase 32 · Pastelería Internacional' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 60" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 32 · Pastelería Internacional</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">Una preparación donde crema, mousse, bavaroise y frío se organizan en capas.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            El objetivo documentado es confeccionar cremas saborizadas, aplicar la técnica para gelificarlas
            y montar un pastel contemporáneo. La receta reúne dacquoise de avellana, crema Diplomat de vainilla,
            mousse de chocolate, bavaroise de la pasión, brillo y decoración.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Dacquoise de avellana</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Claras 120 g.</li><li>Cremor tártaro 1 g.</li><li>Azúcar 70 g.</li><li>TpT de almendra 150 g (75 g polvo de almendra + 75 g azúcar glass).</li><li>Harina 30 g.</li><li>Avellanas caramelizadas 40 g.</li><li>Azúcar glass 30 g, para espolvorear.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Avellanas caramelizadas</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700"><li>Avellanas 40 g.</li><li>Azúcar 40 g.</li></ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Crema Diplomat de vainilla</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Crema para batir 100 g.</li><li>Leche 100 g.</li><li>Azúcar 50 g.</li><li>Yemas 2 piezas.</li><li>Fécula de maíz 15 g.</li><li>Vaina de vainilla ½ pieza.</li><li>Grenetina en polvo 8 g.</li><li>Crema semi montada 100 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Mousse de chocolate</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Claras 3 piezas.</li><li>Azúcar 90 g.</li><li>Chocolate semi amargo 120 g.</li><li>Grenetina en polvo 8 g.</li><li>Crema semi montada 150 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Bavaroise de la pasión</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Pulpa colada de maracuyá 275 g.</li><li>Azúcar 120 g.</li><li>Grenetina en polvo 16 g.</li><li>Crema semi montada 275 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5"><h3 className="font-semibold">Brillo de fruta de la pasión</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Pulpa colada de maracuyá 100 g.</li><li>Azúcar 35 g.</li><li>Grenetina en polvo 6 g.</li>
            </ul></article>
            <article className="rounded-2xl bg-stone-100 p-5 md:col-span-2"><h3 className="font-semibold">Decoración</h3><ul className="mt-3 grid gap-1.5 text-sm leading-6 text-stone-700 sm:grid-cols-2">
              <li>Glucosa 50 g.</li><li>Avellana 50 g.</li><li>Azúcar 150 g.</li><li>Glucosa 15 g.</li><li>Palillos 15 piezas.</li>
            </ul></article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Procedimiento</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold">Dacquoise de avellana</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Realizar las avellanas caramelizadas como un praliné, picar y reservar.</li>
              <li>Hacer un merengue con las claras, crémor y azúcar.</li>
              <li>Incorporar de forma envolvente el TpT de avellanas y la harina al merengue.</li>
              <li>Vaciar sobre una manga y hacer discos del tamaño del aro en el que se va a montar.</li>
              <li>Espolvorear con azúcar glass dos veces.</li>
              <li>Esparcir las avellanas caramelizadas sobre los discos.</li>
              <li>Hornear a 200 °C durante 5 a 10 minutos.</li>
            </ol></div>
            <div><h3 className="font-semibold">Crema Diplomat de vainilla</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Preparar una crema pastelera de vainilla.</li><li>Dejar enfriar e incorporar la grenetina hidratada y disuelta.</li><li>Montar la crema.</li><li>Agregar la crema semi montada de forma envolvente.</li>
            </ol></div>
            <div><h3 className="font-semibold">Mousse de chocolate</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Elaborar un merengue italiano con las claras y el azúcar.</li><li>Mezclar con el chocolate fundido.</li><li>Hidratar la grenetina e integrarla a una parte de la preparación en tibio.</li><li>Incorporar la crema semi montada.</li>
            </ol></div>
            <div><h3 className="font-semibold">Bavaroise de la pasión</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Disolver la grenetina hidratada en la pulpa de fruta de la pasión reducida con el azúcar.</li>
              <li>Dejar enfriar. Mezclar de manera envolvente con la crema semi montada hasta obtener una consistencia espesa.</li>
            </ol></div>
            <div><h3 className="font-semibold">Brillo de fruta de la pasión</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Calentar la pulpa con el azúcar hasta que hierva.</li><li>Añadir la gelatina hidratada y vaciar sobre la bavaroise.</li>
            </ol></div>
            <div><h3 className="font-semibold">Decoración y montaje</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Sobre un aro de 18 cm de diámetro poner un círculo de dacquoise cortado del mismo tamaño.</li>
              <li>Cubrirlo con la crema Diplomat hasta la mitad.</li>
              <li>Dejar cuajar y poner el mousse de chocolate encima. Cubrir con otro disco de dacquoise.</li>
              <li>En un aro de 20 cm preparado con acetato y papel film, colocar la bavaroise y después la pastilla hecha con la Diplomat y el mousse de chocolate, asegurándose de que la Diplomat esté arriba.</li>
              <li>Llevar al congelador a que cuaje la bavaroise.</li>
              <li>Hacer un gelée de fruta de la pasión y vaciarlo encima. Dejar cuajar y decorar.</li>
              <li>Decorar con 50 g de glucosa horneada y alfileres de avellana hechos con 50 g de avellana, 150 g de azúcar y 15 g de glucosa.</li>
            </ol></div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Dibuja las capas antes del montaje</h2>
          <p className="mt-2 leading-7 text-stone-700">
            Representa los dos aros de la receta y coloca en orden dacquoise, Diplomat, mousse de chocolate,
            bavaroise y gelée. Después marca qué etapa necesita cuajado o congelación.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la ruta de construcción</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>¿Qué componentes forman la pastilla antes de entrar al aro de 20 cm?</li>
            <li>¿Qué preparación se deja cuajar antes de continuar con la siguiente capa?</li>
            <li>¿Qué componente recibe finalmente el gelée de fruta de la pasión?</li>
            <li>¿Qué diferencias observas entre la dacquoise, la mousse y la bavaroise dentro de la secuencia?</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Se conserva “Bavaresa de la Pasión” como nombre de la preparación en el apartado de ingredientes y
            “Bavaroise” en el procedimiento, tal como aparece en la fuente. No se reconcilian esas formas.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
