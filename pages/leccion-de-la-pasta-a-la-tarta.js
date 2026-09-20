import CourseShell from '../components/course/CourseShell';

export default function LessonNinePage() {
  return (
    <CourseShell eyebrow="Lección 9" title="De la pasta a la tarta" backHref="/modulo-2" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Antes de empezar</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">Ahora la pasta tiene que convertirse en una base</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Ya viste cómo se construye una masa friable. En esta preparación vamos a observar qué ocurre cuando esa pasta entra en un molde,
            se cuece y después recibe un relleno.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Primero: el fondo</p>
            <p className="mt-3 leading-7 text-stone-700">
              La fuente indica forrar el molde con pasta sablée y cocer el fondo a <strong>180 °C durante 15 minutos</strong>.
              Observa que aquí todavía no estamos construyendo la tarta completa: primero necesitamos una base cocida.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Después: protegerlo</p>
            <p className="mt-3 leading-7 text-stone-700">
              Una vez frío, el fondo se barniza con chocolate fundido antes de colocar la crema pastelera.
              La fuente identifica esta operación como <strong>impermeabilización</strong>.
            </p>
          </article>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">¿Qué debes observar?</p>
          <h2 className="mt-2 text-2xl font-semibold">La diferencia entre una base cocida y una base lista para rellenar</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            Mira el fondo después de hornearlo y otra vez después de aplicar el chocolate. Primero debe estar cocido y enfriado;
            después aparece una capa que separa la pasta del relleno.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Para qué sirve impermeabilizar?</h2>
          <div className="mt-5 space-y-5 text-stone-700">
            <p className="leading-7">
              En la receta, el chocolate se coloca sobre el fondo ya frío antes de agregar la crema pastelera.
              La función práctica es crear una barrera entre el relleno húmedo y la pasta.
            </p>
            <p className="leading-7">
              Esto ayuda a que la humedad de la crema no pase directamente a la base y conserve mejor su textura.
              <span className="text-stone-500"> Esta explicación describe el mecanismo culinario de la operación; la fuente especifica la operación y su objetivo dentro de la preparación.</span>
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">La crema pastelera también tiene una secuencia</h2>
          <div className="mt-5 space-y-4 text-stone-700">
            <p className="leading-7">La fuente la marca como <strong>DEMO</strong>. Primero se hierve la leche con la mitad del azúcar.</p>
            <p className="leading-7">Las yemas se blanquean con la otra mitad del azúcar y la fécula de maíz.</p>
            <p className="leading-7">Se agrega parte de la leche a las yemas para temperarlas y después se regresa la mezcla al fuego, moviendo constantemente.</p>
            <p className="leading-7">La crema está lista cuando rompe hervor durante 2 minutos. Después se enfría cubierta con film arriba y abajo y, ya fría, se agrega la vainilla.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">El montaje completa la idea</p>
          <p className="mt-3 text-lg leading-8 text-amber-950">
            Base cocida → base impermeabilizada → crema pastelera → fruta → brillo → almendra.
            No son pasos independientes: cada uno prepara la estructura para el siguiente.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Preparación</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Tarta de frutas</h2>
          <p className="mt-2 leading-7 text-stone-600">
            La receta de la fuente rinde una tarta de 24 cm y tiene una dificultad indicada de ** y un tiempo de elaboración de 45 minutos.
          </p>
          <a href="/receta-tarta-de-frutas" className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800">
            Abrir preparación →
          </a>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La pasta:</strong> primero se cuece y se enfría.</p>
            <p className="leading-7"><strong>La impermeabilización:</strong> el chocolate crea una barrera antes de colocar la crema.</p>
            <p className="leading-7"><strong>La crema:</strong> la cocción y el enfriado forman parte de su estructura.</p>
            <p className="leading-7"><strong>El montaje:</strong> cada capa cumple una función y prepara la siguiente.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}