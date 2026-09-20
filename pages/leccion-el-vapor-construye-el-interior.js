import CourseShell from '../components/course/CourseShell';

export default function LessonNineteenPage() {
  return (
    <CourseShell
      eyebrow="Lección 19"
      title="El vapor construye el interior"
      backHref="/modulo-4"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Ahora podemos explicar por qué la choux crece
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La pasta llega al horno con agua suficiente para producir vapor. Ese vapor es el agente que impulsa el crecimiento.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La explicación teórica de la Clase 11 es muy concreta: el agua actúa como agente leudante por la producción
            de vapor. Durante los primeros minutos de cocción, el producto se infla y queda hueco en el centro;
            al mismo tiempo, el calor coagula los almidones y las proteínas que forman su estructura.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Primero se expande. Después debe sostenerse.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La choux necesita dos cosas que ocurren en secuencia: producir suficiente vapor para inflarse y desarrollar
            una estructura capaz de conservar ese volumen. Por eso la explicación de la fuente distingue una primera
            etapa de expansión y una etapa posterior de cocción.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · Agua</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Se convierte en vapor</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La fuente identifica el agua como el agente leudante de la pasta choux por la producción de vapor.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">2 · Expansión</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">La pieza se infla</h3>
            <p className="mt-3 leading-7 text-amber-950">
              La teoría indica que durante los primeros minutos el vapor hace que el producto se infle y quede hueco
              en el centro.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · Estructura</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">El calor la fija</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La fuente explica que el calor coagula los almidones y las proteínas que forman la estructura del producto final.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. La pieza cambia de volumen</p>
              <p className="mt-2 leading-7 text-amber-950">
                Observa cómo una pieza que salió de la manga relativamente compacta comienza a inflarse en el horno.
                El objetivo no es solamente verla crecer: es relacionar ese crecimiento con el vapor producido por el agua.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El interior debe quedar hueco</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente describe como resultado de la primera etapa que el producto se infla y queda hueco en el centro.
                Al cortar una pieza ya fría podrás comprobar físicamente ese resultado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El crecimiento no es el final</p>
              <p className="mt-2 leading-7 text-stone-700">
                Una pieza puede crecer y todavía necesitar terminar su cocción. La fuente relaciona el horneado posterior
                con mantener la estructura y evitar que el producto se queme.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. No abras el horno durante la cocción</p>
              <p className="mt-2 leading-7 text-stone-700">
                La receta de la Clase 11 advierte específicamente que no se debe abrir el horno mientras se hornean
                las piezas porque pueden perder altura. Aquí esa instrucción deja de ser una regla arbitraria:
                está relacionada con una pieza que todavía está desarrollando y fijando su estructura.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">La secuencia completa</p>
          <h2 className="mt-2 text-xl font-semibold text-amber-950">
            La choux ya tiene una lógica que puedes leer
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-5">
            {[
              ['01', 'Cocción inicial', 'La harina entra al líquido hirviendo.'],
              ['02', 'Secado', 'La mezcla se cocina hasta ver el fondo de la cacerola.'],
              ['03', 'Huevo', 'Se incorpora uno por uno hasta lograr una pasta manejable con duya.'],
              ['04', 'Horno', 'El agua produce vapor y la pieza se infla.'],
              ['05', 'Estructura', 'El calor permite que la pieza conserve su forma.'],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-2xl bg-white p-4">
                <p className="text-xs font-semibold text-amber-700">{number}</p>
                <h3 className="mt-1 font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Una precisión importante de la fuente</h2>
          <p className="mt-3 leading-7 text-stone-700">
            La explicación teórica de la Clase 11 indica comenzar la cocción a <strong>220 °C</strong> durante los primeros
            10 minutos para obtener la mayor cantidad de vapor en el menor tiempo posible y después bajar a <strong>180 °C</strong>
            para terminar la cocción. Sin embargo, el procedimiento de la receta de Pasta Choux de la misma clase indica
            <strong> 185 °C durante 15–20 minutos</strong>. Son dos instrucciones distintas dentro de la misma fuente.
          </p>
          <p className="mt-3 leading-7 text-stone-700">
            No las vamos a reconciliar inventando una tercera indicación. La receta del curso conserva por ahora el procedimiento
            tal como aparece en la fuente; esta lección utiliza la explicación teórica para entender el papel del vapor.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Vuelve a la práctica</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Pasta choux</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Cuando la hornees, observa especialmente dos momentos: primero, cuándo comienza a inflarse;
            después, qué aspecto tiene la pieza cuando ya terminó de cocerse y puedes abrirla.
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
            <p className="leading-7"><strong>El agua es el agente leudante:</strong> la fuente atribuye el crecimiento de la choux a la producción de vapor.</p>
            <p className="leading-7"><strong>El vapor produce la expansión:</strong> durante los primeros minutos la pieza se infla y queda hueca en el centro.</p>
            <p className="leading-7"><strong>El calor construye la estructura:</strong> la fuente relaciona la coagulación de almidones y proteínas con la estructura final.</p>
            <p className="leading-7"><strong>Crecer y conservar el volumen son etapas relacionadas pero distintas:</strong> primero la pieza se expande y después debe terminar de cocinarse para mantener su estructura.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La explicación sobre vapor, temperaturas y estructura procede de la sección teórica de Masas de Cocción Mixta
            de la Clase 11. La organización en etapas y las indicaciones de observación son desarrollo pedagógico del curso.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
