import CourseShell from '../components/course/CourseShell';

export default function LessonSeventeenPage() {
  return (
    <CourseShell
      eyebrow="Lección 17"
      title="Una masa que se cocina antes de hornearse"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Ahora cambia la forma de construir la estructura
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Hasta ahora hemos construido volumen con aire. Ahora vamos a cocinar la masa antes de llevarla al horno.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En las masas batidas ligeras, el huevo incorpora aire y la harina se incorpora con cuidado para no perderlo.
            La pasta choux parte de otra lógica: primero se hierven el agua, la mantequilla, la sal y el azúcar;
            después se incorpora la harina de un solo golpe y la mezcla se seca en la cacerola.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">La cocción empieza antes del horno</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente llama a la choux una <strong>masa de cocción mixta</strong>. La primera cocción ocurre en la cacerola;
            la segunda ocurre en el horno. Entre ambas, el huevo transforma la preparación en una pasta que puede manejarse con duya.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · Hervir</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Agua + grasa + sabor</h3>
            <p className="mt-3 leading-7 text-stone-700">
              Agua, mantequilla, sal y azúcar llegan juntos al hervor. La harina todavía no está dentro de la mezcla.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">2 · Cocinar</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">La harina entra de golpe</h3>
            <p className="mt-3 leading-7 text-amber-950">
              La fuente indica incorporarla de un solo golpe y secar la mezcla hasta que se vea el fondo de la cacerola.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · Transformar</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Después entra el huevo</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La masa se entibia y el huevo se incorpora uno por uno hasta obtener una pasta manejable con la duya.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El cambio ocurre en la cacerola</p>
              <p className="mt-2 leading-7 text-amber-950">
                Observa el momento en que la harina entra al líquido hirviendo. La preparación deja de comportarse como
                un líquido y se convierte en una masa que debe seguir cocinándose.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El fondo de la cacerola es una señal</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente indica secar la mezcla hasta que se vea el fondo de la cacerola. No es un paso decorativo:
                es la señal concreta que utiliza el procedimiento para indicar que la primera cocción ha avanzado lo suficiente.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El huevo no entra todo junto</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente indica dejar entibiar la masa durante unos minutos y añadir los huevos uno por uno,
                batiendo sin dejar de mover. Observa cómo cada incorporación modifica la consistencia antes de añadir el siguiente.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. La textura final tiene una función</p>
              <p className="mt-2 leading-7 text-stone-700">
                La preparación debe terminar como una pasta manejable con la duya. Esa consistencia es la que permite
                pasar de la cacerola a la manga y después formar las piezas sobre la charola.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">El puente con el módulo anterior</p>
          <p className="mt-3 leading-7 text-amber-950">
            En el módulo anterior aprendiste a cuidar una estructura de aire durante la mezcla.
            Aquí la estructura se construye mediante otra secuencia: <strong>cocción inicial → incorporación del huevo → formado → horno</strong>.
            Más adelante veremos qué ocurre dentro del horno y por qué estas piezas terminan con una forma hueca.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Práctica guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Pasta choux</h2>
          <p className="mt-2 leading-7 text-stone-600">
            La fuente presenta la pasta choux como demostración y después muestra aplicaciones como profiteroles,
            cisnes, éclairs y religiosas. Esta primera práctica se concentra en reconocer la transformación de la masa
            y la consistencia que permite trabajarla con duya.
          </p>
          <a
            href="/receta-pasta-choux"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Abrir práctica →
          </a>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La choux tiene dos momentos de cocción:</strong> primero en la cacerola y después en el horno.</p>
            <p className="leading-7"><strong>La harina entra de una sola vez:</strong> después de incorporarla, la mezcla se seca hasta que se ve el fondo de la cacerola.</p>
            <p className="leading-7"><strong>El huevo se incorpora gradualmente:</strong> se añade uno por uno después de entibiar la masa.</p>
            <p className="leading-7"><strong>La consistencia importa:</strong> la preparación debe terminar siendo manejable con la duya para poder formar las piezas.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La Clase 11 denomina esta preparación <strong>“Pasta Choux”</strong> y la presenta como
            <strong> demostración con la mitad de la receta</strong>. Esta lección conserva esa condición;
            las explicaciones sobre la función de cada señal se presentan como desarrollo pedagógico del procedimiento original.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
