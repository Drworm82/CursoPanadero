import CourseShell from '../components/course/CourseShell';

export default function LessonEighteenPage() {
  return (
    <CourseShell
      eyebrow="Lección 18"
      title="El huevo cambia la masa"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            La masa todavía no está terminada cuando sale de la cacerola
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            El huevo no es simplemente el último ingrediente: cambia la consistencia de la pasta.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La pasta choux ya pasó por una primera cocción cuando retiramos la cacerola del fuego.
            Sin embargo, todavía no tiene la consistencia con la que vamos a formar las piezas.
            La fuente indica dejarla entibiar y añadir los huevos uno por uno, batiendo sin dejar de mover,
            hasta obtener una pasta manejable con la duya.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Aquí el huevo funciona como ajuste de la masa</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente no establece una cantidad de huevo que deba incorporarse de golpe ni indica que debamos
            añadirlos todos sin observar la mezcla. El procedimiento exige incorporarlos <strong>uno por uno</strong>
            y seguir batiendo hasta alcanzar una consistencia concreta: una pasta que pueda manejarse con duya.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-stone-300">
            Esa es la referencia que interesa aprender a reconocer: no solamente cuánto huevo dice la receta,
            sino qué cambio produce cada incorporación y cómo se comporta la pasta al acercarse al punto de formado.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Antes</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Masa cocida</h3>
            <p className="mt-3 leading-7 text-stone-700">
              Después de secar la harina en la cacerola, la preparación ya tiene una estructura de masa,
              pero todavía debe transformarse antes de poder formar las piezas.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">Durante</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Huevo uno por uno</h3>
            <p className="mt-3 leading-7 text-amber-950">
              Cada huevo se incorpora mientras la mezcla se sigue batiendo. Observa la consistencia después
              de cada incorporación antes de continuar.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Después</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Pasta para duya</h3>
            <p className="mt-3 leading-7 text-stone-700">
              El punto descrito por la fuente es una pasta manejable con duya. Esa textura permite pasar a la manga
              y formar las piezas.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. No mires solamente el número de huevos</p>
              <p className="mt-2 leading-7 text-amber-950">
                La receta indica 7 huevos, pero el procedimiento enseña otra cosa además de la cantidad:
                incorporarlos uno por uno y observar cómo se integra la mezcla. El aprendizaje está en relacionar
                la incorporación con el cambio de consistencia.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Observa la consistencia antes de formar</p>
              <p className="mt-2 leading-7 text-stone-700">
                Antes de pasar la preparación a la manga, comprueba la señal que da la propia fuente:
                debe ser una pasta manejable con la duya. Si todavía no puede trabajarse de esa manera,
                el proceso de incorporación todavía no ha terminado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El formado revela si la pasta puede trabajarse</p>
              <p className="mt-2 leading-7 text-stone-700">
                Al presionar la manga hacia abajo y formar las piezas, observa si la pasta permite producir una
                figura definida. El formado no es un paso aislado: es la primera prueba práctica de la consistencia
                que acabas de construir.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Hay señales que pertenecen al proceso, no a una “receta perfecta”</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente da señales concretas: ver el fondo de la cacerola durante la primera cocción,
                dejar entibiar antes de incorporar el huevo y llegar a una pasta manejable con duya.
                Aprende a leer esas señales porque te permiten interpretar la preparación en lugar de depender
                únicamente de repetir movimientos.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Diagnóstico durante la práctica</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">No es un examen: es aprender a leer la masa</h2>
          <div className="mt-4 space-y-3 text-amber-950">
            <p className="leading-7">
              <strong>Si todavía no puedes trabajar la pasta con la duya:</strong> vuelve al punto que establece la fuente
              y revisa la incorporación del huevo y la consistencia alcanzada.
            </p>
            <p className="leading-7">
              <strong>Si las piezas pierden altura durante el horneado:</strong> recuerda la indicación específica de la fuente:
              no abrir el horno durante la cocción.
            </p>
            <p className="leading-7">
              <strong>Si dudas de cuándo terminó la primera cocción:</strong> utiliza la señal que ya conoces:
              la fuente indica secar la mezcla hasta que se vea el fondo de la cacerola.
            </p>
          </div>
          <p className="mt-4 text-sm leading-6 text-amber-900">
            Estas señales están tomadas del procedimiento de Pasta Choux de la Clase 11; el formato de diagnóstico
            es una organización pedagógica del curso.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Vuelve a la práctica</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Pasta choux</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Repite especialmente el tramo entre la masa tibia y el formado. Esta vez no observes solamente
            si terminaste la receta: observa cómo cambia la pasta mientras incorporas el huevo.
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
            <p className="leading-7"><strong>El huevo transforma la consistencia:</strong> la fuente lo incorpora después de la cocción inicial y antes del formado.</p>
            <p className="leading-7"><strong>La incorporación es gradual:</strong> los huevos entran uno por uno mientras la mezcla se sigue batiendo.</p>
            <p className="leading-7"><strong>El punto se reconoce por su función:</strong> la pasta debe quedar manejable con la duya.</p>
            <p className="leading-7"><strong>La masa te da información:</strong> su consistencia y su comportamiento al formar las piezas son señales que puedes interpretar durante el proceso.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La Clase 11 indica incorporar los huevos uno por uno, después de entibiar la masa, hasta formar una pasta
            manejable con la duya. La interpretación de la consistencia como señal de proceso y el pequeño bloque de
            diagnóstico son desarrollo pedagógico del curso, no una tabla de fallas incluida en la fuente original.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
