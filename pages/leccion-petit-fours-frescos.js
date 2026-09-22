import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '58',
  title: 'Petit fours frescos: café y mango',
  subtitle: 'Clase 23 · Petit Fours Frescos',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 58"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Clase 23 · Petit Fours Frescos
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Dos bocaditos, dos sistemas de construcción.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La fuente plantea esta clase como práctica de pequeños bocados dulces y de cortes básicos en petit four.
            Aquí aparecen dos preparaciones: Delicias de café y Bocadito de Mango. La primera combina biscuit,
            crema de café, ganache, almíbar y glacage; la segunda combina una sablée de especias, mousse de mango,
            crujiente y glacage de mango.
          </p>
        </section>

        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Cómo estudiar</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Comprende → Haz → Observa → Explica</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Separa cada preparación en componentes. Después reconstruye el orden documentado y observa qué
            componentes necesitan cocción, enfriado, refrigeración o una temperatura de uso específica antes
            del montaje o del corte.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Identifica los componentes del petit four.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Sigue las operaciones documentadas.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Registra cambios de textura, temperatura y forma.</p></div>
            <div className="rounded-xl bg-white/70 p-4"><p className="font-semibold text-stone-900">4. Explica</p><p className="mt-1 text-sm leading-6 text-stone-600">Reconstruye cómo cada componente entra en el montaje.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Delicias de café</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Ingredientes</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold text-stone-900">Biscuit de chocolate</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Claras: 90 g.</li>
                <li>Azúcar: 90 g.</li>
                <li>Yemas: 60 g.</li>
                <li>Sal: 1 pizca.</li>
                <li>Cocoa: 27 g.</li>
                <li>Harina: 10 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold text-stone-900">Crema de café</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Azúcar: 50 g.</li>
                <li>Huevo: 25 g.</li>
                <li>Mantequilla: 75 g.</li>
                <li>Café soluble: 3 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold text-stone-900">Ganache</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Crema para batir: 100 g.</li>
                <li>Chocolate semi amargo: 100 g.</li>
                <li>Mantequilla: 20 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold text-stone-900">Almíbar</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Azúcar: 20 g.</li>
                <li>Agua: 100 g.</li>
                <li>Café soluble: 4 g.</li>
                <li>Licor de café: 10 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5 md:col-span-2">
              <h3 className="font-semibold text-stone-900">Glacage de café y montaje</h3>
              <ul className="mt-3 grid gap-1.5 text-sm leading-6 text-stone-700 sm:grid-cols-2">
                <li>Glucosa: 12 g.</li>
                <li>Crema para batir: 65 g.</li>
                <li>Chocolate blanco: 82 g.</li>
                <li>Café soluble: 2 g.</li>
                <li>Grenetina en polvo: 2 g.</li>
                <li>Brillo neutro: 37 g.</li>
                <li>Granos de café: 10 piezas.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Delicias de café · procedimiento</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div>
              <h3 className="font-semibold text-stone-900">Biscuit de chocolate</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Batir las claras con el azúcar a nieve.</li>
                <li>Incorporar las yemas una a una.</li>
                <li>Agregar los ingredientes secos de forma envolvente.</li>
                <li>Extender la preparación sobre papel estrella.</li>
                <li>Cocinar a 180 °C durante 8 minutos.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Crema de café</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Realizar un almíbar a punto de bola suave.</li>
                <li>Volcar sobre el huevo batido a punto de letra.</li>
                <li>Batir hasta que se enfríe e incorporar la mantequilla en cuadritos para realizar una crema de mantequilla.</li>
                <li>Saborizar con el café diluido en un poco de agua.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Ganache</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Picar el chocolate lo más fino posible.</li>
                <li>Hervir la crema en una cacerola y volcar sobre el chocolate.</li>
                <li>Mezclar para derretir el chocolate y agregar la mantequilla.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Almíbar</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Colocar en una cacerola el agua, azúcar y café.</li>
                <li>Cocinar hasta que hierva.</li>
                <li>Esperar a que baje la temperatura e incorporar el licor.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Glacage de café</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Colocar la crema, glucosa, café y chocolate blanco en baño María y fundir.</li>
                <li>Cuando esté por debajo de los 50 °C, agregar la grenetina hidratada y disuelta.</li>
                <li>Incorporar el brillo de pastelería y licuar con una procesadora de inmersión.</li>
                <li>Usar a 27–29 °C.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Montaje</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Cortar tres rectángulos de biscuit.</li>
                <li>Humedecerlos con el almíbar.</li>
                <li>Sobre un rectángulo colocar ganache.</li>
                <li>Colocar un biscuit encima y extender una capa de crema de café.</li>
                <li>Poner otro biscuit y sobre este colocar la ganache.</li>
                <li>Enfriar y bañar con el glaceo.</li>
                <li>Cortar en cuadros de 3 cm × 2 cm.</li>
                <li>Decorar con granos de café.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Bocadito de Mango</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Ingredientes</h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-white p-5">
              <h3 className="font-semibold text-stone-900">Sablée de especias</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Mantequilla: 75 g.</li>
                <li>Azúcar: 45 g.</li>
                <li>Polvo de almendras: 15 g.</li>
                <li>Huevo: 50 g.</li>
                <li>Harina: 150 g.</li>
                <li>Especias: 2 g (comino, cardamomo, clavo, canela).</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-white p-5">
              <h3 className="font-semibold text-stone-900">Mousse de mango</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Grenetina en polvo: 8 g.</li>
                <li>Pulpa de mango: 140 g.</li>
                <li>Claras: 45 g.</li>
                <li>Azúcar: 55 g.</li>
                <li>Crema semi montada: 200 g.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-white p-5">
              <h3 className="font-semibold text-stone-900">Crujiente de mango</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Mantequilla: 20 g.</li>
                <li>Azúcar glass: 50 g.</li>
                <li>Pulpa de mango: 25 g.</li>
                <li>Harina: 25 g.</li>
                <li>Colorante amarillo: c/s.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-white p-5">
              <h3 className="font-semibold text-stone-900">Glacage de mango</h3>
              <ul className="mt-3 space-y-1.5 text-sm leading-6 text-stone-700">
                <li>Pulpa de mango: 100 g.</li>
                <li>Brillo neutro: 150 g.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Bocadito de Mango · procedimiento</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div>
              <h3 className="font-semibold text-stone-900">Sablée de especias</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Realizar un cremage con la mantequilla y el azúcar.</li>
                <li>Agregar el huevo y por último los ingredientes secos.</li>
                <li>Refrigerar la masa y después extender a 2 mm de grosor.</li>
                <li>Hornear a 180 °C durante 12 a 15 minutos.</li>
                <li>Retirar del horno y, mientras sigue caliente, cortar discos de 3 a 5 cm de diámetro.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Mousse de mango</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Hidratar y disolver la grenetina e incorporarla a la pulpa de mango entibiada.</li>
                <li>Con la clara y el azúcar realizar un merengue italiano.</li>
                <li>Incorporar el merengue a la pulpa de mango.</li>
                <li>Por último, mezclar de forma envolvente la crema semi montada.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Crujiente de mango</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Mezclar la mantequilla con el azúcar (cremage).</li>
                <li>Agregar la pulpa, harina y unas gotas de colorante.</li>
                <li>Dar forma circular con cuchara.</li>
                <li>Cocinar sobre un papel siliconado a 180 °C durante 5 a 10 minutos.</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Glacage de mango</h3>
              <ol className="mt-2 list-decimal space-y-1.5 pl-6">
                <li>Mezclar los ingredientes.</li>
              </ol>
              <p className="mt-3 text-sm text-stone-500">
                La fuente termina el procedimiento de este componente en este punto.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Compara las dos preparaciones</p>
          <h2 className="mt-2 text-2xl font-semibold">La estructura cambia, pero el montaje depende de la secuencia.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">Delicias de café</p>
              <p className="mt-2 leading-7 text-stone-200">
                Biscuit → almíbar → ganache → crema de café → ganache → enfriado → glacage → corte → decoración.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">Bocadito de Mango</p>
              <p className="mt-2 leading-7 text-stone-200">
                Sablée → mousse de mango → crujiente → glacage de mango. La fuente documenta la preparación
                de estos componentes, pero no presenta aquí una secuencia final de montaje tan desarrollada como la de Delicias de café.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Reconstruye los componentes</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Haz dos diagramas. En el primero coloca los componentes de Delicias de café en el orden del montaje.
            En el segundo separa sablée, mousse, crujiente y glacage de mango. Marca qué componentes se cocinan,
            cuáles se enfrían y qué temperaturas de uso aparecen expresamente en la fuente.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la diferencia</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué componentes forman Delicias de café y en qué orden aparecen en el montaje?</p>
            <p>2. ¿Qué temperatura de uso indica la fuente para el glacage de café?</p>
            <p>3. ¿Qué operaciones de la sablée de especias están documentadas para el Bocadito de Mango?</p>
            <p>4. ¿Qué parte del procedimiento del glacage de mango queda limitada en la fuente disponible?</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Esta lección conserva la terminología y la secuencia de la Clase 23. En particular, se mantiene
            “glacage”, “glaceo”, “crema de café”, “biscuit” y “sablée de especias”. La explicación comparativa
            del recorrido de ambas preparaciones es organización pedagógica; no añade un montaje final que la
            fuente no documenta.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
