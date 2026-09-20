import CourseShell from '../components/course/CourseShell';

export default function LessonSixteenPage() {
  return (
    <CourseShell
      eyebrow="Lección 16"
      title="Merengues: aire + azúcar"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Cambiamos de protagonista</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Ahora el huevo ya no aporta la yema: trabajamos con la clara
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            En las lecciones anteriores usamos el huevo para construir una masa batida ligera. Ahora vamos a aislar la clara
            y estudiar qué ocurre cuando el batido de claras se combina con azúcar.
            La propia fuente plantea esta etapa como un repaso de merengues y como una introducción al <strong>merengue italiano</strong>
            y a la cocción del azúcar.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">El aire necesita una estructura que lo sostenga</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente utiliza dos situaciones distintas dentro del Buche de Noël:
            un <strong>merengue italiano</strong> para la crema de mantequilla y un merengue que se calienta a baño María
            para formar los honguitos. Esta segunda preparación sí tiene un procedimiento detallado en la fuente y será nuestra práctica.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Clara</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">La base del batido</h3>
            <p className="mt-3 leading-7 text-stone-700">
              El material ya había presentado al huevo como agente aireante en las masas batidas ligeras. Aquí trabajamos específicamente con claras.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">Azúcar + calor</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Una nueva forma de trabajar</h3>
            <p className="mt-3 leading-7 text-amber-950">
              En los honguitos, claras y azúcar pasan primero por baño María hasta alcanzar 45 °C antes de continuar el batido.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Resultado</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Una estructura que puede secarse</h3>
            <p className="mt-3 leading-7 text-stone-700">
              El merengue se coloca con manga en dos piezas, se seca en el horno y después se reserva bien tapado.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>
          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. La limpieza antes del batido</p>
              <p className="mt-2 leading-7 text-amber-950">
                La fuente pide verificar que el bowl y el globo estén completamente limpios antes de poner las claras y el azúcar.
                No es un detalle decorativo: es una condición que la propia preparación establece antes de comenzar.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. El cambio a 45 °C</p>
              <p className="mt-2 leading-7 text-stone-700">
                Mira la mezcla mientras se calienta y se bate manualmente a baño María. La referencia de la fuente es 45 °C:
                ese es el punto en el que pasa a la batidora.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. Qué ocurre durante el batido final</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente indica batir hasta que el merengue espese y se enfríe. Observa ambas cosas:
                no buscamos únicamente volumen, también un cambio claro de consistencia y temperatura.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. Qué significa “secar”</p>
              <p className="mt-2 leading-7 text-stone-700">
                Una vez formado con manga, el merengue pasa al horno para secarse. Observa la diferencia entre una preparación
                recién escudillada y la pieza ya seca antes de reservarla.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Merengue italiano: qué sí podemos afirmar de la fuente</p>
          <p className="mt-3 leading-7 text-amber-950">
            La fuente indica que para la crema de mantequilla se debe preparar un <strong>merengue italiano con las claras montadas y el almíbar</strong>,
            y antes especifica un almíbar a punto de bola suave, entre 110 °C y 115 °C. También utiliza merengue italiano en otras preparaciones del corpus,
            como el macaron de almendra. Sin embargo, en esta sección no presenta una receta independiente completa del merengue italiano.
            Por eso aquí lo introducimos como concepto y no inventamos un procedimiento que la fuente no proporciona.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Práctica guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Honguitos de merengue</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Esta práctica utiliza el procedimiento detallado de los “Honguitos” del Buche de Noël.
            Es la oportunidad de observar directamente el trabajo de claras + azúcar + baño María + batido + secado.
          </p>
          <a
            href="/receta-honguitos-merengue"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Abrir práctica →
          </a>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>Ahora trabajamos con claras:</strong> el objetivo es construir una estructura aireada a partir del batido.</p>
            <p className="leading-7"><strong>La temperatura también entra en juego:</strong> en los honguitos, claras y azúcar llegan a 45 °C antes del batido final.</p>
            <p className="leading-7"><strong>El merengue cambia de estado:</strong> durante el batido debe espesar y enfriarse antes de escudillarse.</p>
            <p className="leading-7"><strong>Secar es parte de la técnica:</strong> la pieza terminada necesita pasar por horno y después conservarse bien tapada.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
