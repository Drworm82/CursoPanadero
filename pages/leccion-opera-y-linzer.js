import CourseShell from '../components/course/CourseShell';

const lesson = { number: '59', title: 'Ópera y Linzer Torte', subtitle: 'Clase 31 · Pastelería Internacional' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 59" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 31 · Pastelería Internacional</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">Dos preparaciones para estudiar capas, cremas y montaje.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La clase presenta Ópera como un pastel ensamblado por capas y Linzer Torte como una preparación
            de masa por arenado con relleno de mermelada. La lección conserva ambas rutas para comparar
            cómo cambia la construcción del producto.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Modelo inicial</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Primero lee la arquitectura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Antes de entrar en cantidades, dibuja dos esquemas: Ópera como capas y Linzer como masa, relleno y elementos de acabado documentados. Después verifica cada esquema con la receta.</p></section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ópera · ingredientes</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold">Biscuit Joconde</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Huevo 3 piezas.</li><li>TpT de almendra 200 g (100 g polvo de almendra + 100 g azúcar glass).</li>
                <li>Harina 30 g.</li><li>Mantequilla 30 g.</li><li>Claras 3 piezas.</li><li>Azúcar 30 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold">Genoise de cocoa</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Azúcar 90 g.</li><li>Huevo 3 piezas.</li><li>Harina 75 g.</li><li>Cocoa 15 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold">Crema de mantequilla al café</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Huevo 1 pieza.</li><li>Yema 1 pieza.</li><li>Agua 40 g.</li><li>Azúcar 130 g.</li>
                <li>Mantequilla 130 g.</li><li>Agua 3 g.</li><li>Café soluble 5 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold">Ganache de chocolate</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Chocolate semi amargo 175 g.</li><li>Crema para batir 175 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold">Almíbar de café</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Jarabe TpT 250 g (125 g azúcar + 125 ml agua).</li><li>Café soluble 15 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold">Glaseado de chocolate</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Azúcar 125 g.</li><li>Agua 125 g.</li><li>Crema para batir 125 g.</li><li>Cocoa 50 g.</li><li>Grenetina en hoja 4 piezas.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ópera · procedimiento</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold">Biscuit Joconde</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Colocar los huevos junto con el polvo de almendras y el azúcar glass y batir hasta montar los huevos.</li>
              <li>Añadir la harina previamente cernida y mezclar de forma envolvente; al final incorporar la mantequilla fundida fría.</li>
              <li>Batir las claras junto con el azúcar hasta obtener picos firmes.</li>
              <li>Mezclar las claras con movimientos envolventes.</li>
              <li>Vaciar en una charola engrasada y enharinada, repartir uniformemente y hornear a 200 °C durante 8 minutos o hasta dorar por arriba.</li>
            </ol></div>
            <div><h3 className="font-semibold">Genoise de cocoa</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Montar los huevos con el azúcar.</li><li>Cernir los secos e integrarlos al huevo de forma envolvente.</li>
              <li>Verter en charola con papel encerado.</li><li>Hornear a 175 °C durante 10–12 minutos.</li>
            </ol></div>
            <div><h3 className="font-semibold">Crema de mantequilla al café</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Batir los huevos y las yemas con una pizca de azúcar.</li>
              <li>Realizar un almíbar a 115 °C con el resto del azúcar y el agua.</li>
              <li>Vaciar el almíbar caliente sobre el batido de huevos en forma de hilo mientras continúa el batido hasta que los huevos vuelvan a temperatura ambiente.</li>
              <li>Agregar la mantequilla pomada poco a poco y sin dejar de batir, hasta obtener una crema homogénea.</li>
              <li>Hidratar el café con agua tibia y dejar enfriar. Agregar el café concentrado a la crema batiendo hasta integrar y obtener una preparación lisa y tersa.</li>
              <li>Reservar la crema en frío, pero utilizar a temperatura ambiente.</li>
            </ol></div>
            <div><h3 className="font-semibold">Ganache</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Picar el chocolate finamente y reservar.</li><li>Llevar la crema al fuego y, una vez que rompa el hervor, verter sobre el chocolate.</li><li>Mezclar hasta fundir por completo y dejar enfriar a temperatura ambiente.</li>
            </ol></div>
            <div><h3 className="font-semibold">Almíbar y glaseado</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Para el almíbar, mezclar el jarabe tibio con el café soluble y reservar.</li>
              <li>Para el glaseado, hervir azúcar, agua y crema; incorporar la cocoa y llevar de nuevo al hervor.</li>
              <li>Retirar del fuego y, cuando baje un poco la temperatura, disolver la gelatina en el glaseado.</li>
              <li>Colar y esperar a que enfríe hasta obtener la consistencia deseada antes de volcar sobre el pastel.</li>
            </ol></div>
            <div><h3 className="font-semibold">Montaje</h3><ol className="mt-2 list-decimal space-y-1.5 pl-6">
              <li>Colocar una plancha de biscuit Joconde, mojar con almíbar de café y untar una capa de crema de mantequilla. Dejar enfriar.</li>
              <li>Colocar una plancha de genoise mojada con almíbar y extender toda la ganache.</li>
              <li>Colocar otra plancha de Joconde y otra capa de crema de mantequilla.</li>
              <li>Realizar otra capa con un genoise embebido y crema de mantequilla y refrigerar.</li>
              <li>Cubrir la superficie con el glaseado oscuro.</li>
              <li>Cortar los cuatro lados del pastel.</li>
              <li>Escribir “Opera” con el glaseado restante.</li>
            </ol></div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Linzer Torte</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5"><h3 className="font-semibold">Pasta de Linzer</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Harina 260 g.</li><li>Mantequilla 180 g.</li><li>Azúcar 100 g.</li><li>Polvo para hornear 2 g.</li><li>Polvo de nuez 50 g.</li><li>Polvo de avellana 50 g.</li><li>Canela 2 g.</li><li>Clavo de olor 2 g.</li><li>Ralladura de limón 2 g.</li><li>Brandy 12 g.</li><li>Huevo 1 pieza.</li>
            </ul></article>
            <article className="rounded-2xl bg-white p-5"><h3 className="font-semibold">Relleno y acabado</h3><ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
              <li>Mermelada de frambuesa 400 g.</li><li>Brillo neutro 50 g.</li><li>Azúcar glass 30 g.</li>
            </ul></article>
          </div>
          <ol className="mt-5 list-decimal space-y-2 pl-6 leading-7 text-stone-700">
            <li>Realizar la masa por el método de arenado.</li>
            <li>Reservar en el refrigerador envuelta en papel film durante 15 minutos.</li>
            <li>Separar ¾ partes, estirar la masa y forrar un molde de tarta.</li>
            <li>Llevar al refrigerador durante 20 minutos. Cubrir con la mermelada y decorar la superficie con tiras de masa entrecruzadas usando la cuarta parte reservada.</li>
            <li>Llevar a horno moderado a 180 °C durante aproximadamente 30 minutos.</li>
            <li>Una vez fría, pincelar la superficie con gel de brillo y espolvorear con azúcar glass.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Reconstruye dos rutas</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Ordena las capas y componentes del Ópera.</li>
            <li>Explica qué función cumple el almíbar de café en el montaje documentado.</li>
            <li>Reconstruye el método de arenado y el armado de Linzer Torte.</li>
            <li>Compara qué preparación necesita refrigeración antes del montaje y qué ocurre después del horno.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Se conserva la denominación “Opera” tal como aparece en el procedimiento de la fuente y se mantiene
            “Linzer Torte”. La explicación comparativa es organización pedagógica; las cantidades, temperaturas
            y secuencias corresponden a la Clase 31.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
