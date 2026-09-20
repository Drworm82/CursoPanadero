import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Agua', '500 ml', '—'],
  ['Mantequilla', '200 g', '—'],
  ['Sal', '3 g', '—'],
  ['Azúcar', '5 g', '—'],
  ['Harina', '250 g', '—'],
  ['Huevos', '7 pzas', '—'],
];

const steps = [
  {
    title: '1. Hervir y cocinar la harina',
    text: 'Hervir agua, mantequilla, sal y azúcar. Una vez que esté hirviendo, agregar la harina de un solo golpe y secar hasta que se vea el fondo de la cacerola.',
    observe: 'Mira el cambio de una preparación líquida a una masa compacta y observa la señal indicada por la fuente: que se vea el fondo de la cacerola.',
  },
  {
    title: '2. Entibiar e incorporar el huevo',
    text: 'Retirar del fuego y dejar entibiar por unos minutos. Seguir batiendo con la pala y añadir los huevos uno por uno, batiendo sin dejar de mover, hasta integrarlos perfectamente y formar una pasta manejable con la duya. Con batidora, la fuente indica velocidad media durante 5 minutos.',
    observe: 'Observa cómo cambia la consistencia con cada incorporación. El objetivo descrito por la fuente es llegar a una pasta que pueda manejarse con la duya.',
  },
  {
    title: '3. Pasar a la manga',
    text: 'Verter la pasta en la manga con la duya previamente preparada.',
    observe: 'La pasta ya no debe estar en una consistencia que impida formarla; aquí debe poder pasar de la cacerola a la manga.',
  },
  {
    title: '4. Formar las piezas',
    text: 'Sobre la charola, formar las figuras una por una, presionando la manga hacia abajo, del centro hacia fuera, formando bolitas de un tamaño aproximado al de un huevo.',
    observe: 'Observa que la presión y el movimiento de la manga producen una pieza definida. La fuente utiliza el tamaño aproximado de un huevo como referencia.',
  },
  {
    title: '5. Hornear',
    text: 'Introducir en el horno precalentado, de preferencia en las charolas del centro, y cocer a 185 °C durante 15 a 20 minutos, o hasta que estén doradas.',
    observe: 'No abras el horno durante la cocción. La fuente advierte que pueden perder altura si se abre mientras se hornean.',
  },
  {
    title: '6. Enfriar',
    text: 'Sacar del horno y retirar las piezas de la charola hacia una rejilla para que se enfríen completamente.',
    observe: 'Observa cómo la pieza pasa de la charola caliente a una rejilla donde puede enfriarse completamente antes del relleno.',
  },
  {
    title: '7. Cortar y rellenar',
    text: 'Cortar las figuras por la mitad con un cuchillo de pan y rellenar con la crema elegida. La fuente menciona chantilly, pastelera, chiboust, Paris Brest o mantequilla. Terminar con azúcar glass o preparar un glaseado.',
    observe: 'Al abrir la pieza puedes observar el resultado de todo el proceso antes de incorporar el relleno: una pieza que puede cortarse y recibir una crema.',
  },
];

export default function RecipePastaChouxPage() {
  return (
    <CourseShell
      eyebrow="Práctica · Lección 17"
      title="Pasta choux"
      backHref="/leccion-una-masa-que-se-cocina"
      backLabel="Volver a la lección"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <span>Clase 11</span>
            <span>·</span>
            <span>Masa de cocción mixta</span>
            <span>·</span>
            <span>Demostración en la fuente</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-stone-900">Qué vas a practicar</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-700">
            Reconocer la transformación de la pasta choux desde la cocción inicial en cacerola hasta una pasta
            manejable con duya y su posterior cocción en horno.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Importante sobre la fuente</p>
          <p className="mt-2 leading-7 text-amber-950">
            El material original presenta la Pasta Choux como <strong>“Demostración con la mitad de la receta”</strong>.
            Las cantidades de abajo se reproducen tal como aparecen en la fuente, sin recalcularlas.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500">
                  <th className="px-3 py-3 font-medium">Ingrediente</th>
                  <th className="px-3 py-3 font-medium">Cantidad</th>
                  <th className="px-3 py-3 font-medium">Observación</th>
                </tr>
              </thead>
              <tbody>
                {ingredients.map(([name, amount, note]) => (
                  <tr key={name} className="border-b border-stone-100 last:border-0">
                    <td className="px-3 py-3 font-medium text-stone-800">{name}</td>
                    <td className="px-3 py-3 text-stone-700">{amount}</td>
                    <td className="px-3 py-3 text-stone-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Procedimiento</h2>
          <div className="mt-6 space-y-5">
            {steps.map((step) => (
              <article key={step.title} className="rounded-2xl bg-stone-50 p-5">
                <h3 className="text-lg font-semibold text-stone-900">{step.title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{step.text}</p>
                <div className="mt-4 rounded-xl bg-amber-50 p-4">
                  <p className="text-sm font-semibold text-amber-900">Observa</p>
                  <p className="mt-1 text-sm leading-6 text-amber-950">{step.observe}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Equipo</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Necesitas</p>
              <p className="mt-2 leading-7 text-stone-700">
                Cacerola, pala o batidora con pala, manga pastelera, duya, charola, horno y rejilla.
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">Te servirá más adelante</p>
              <p className="mt-2 leading-7 text-amber-950">
                La manga y las duyas reaparecerán en decoración y en otros productos. Aquí no son un accesorio:
                son parte del proceso porque la fuente utiliza la duya para formar las piezas.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La masa se cocina antes del horno:</strong> la harina se incorpora al líquido hirviendo y se seca en la cacerola.</p>
            <p className="leading-7"><strong>El huevo se incorpora después:</strong> entra uno por uno cuando la masa ya se ha entibiado.</p>
            <p className="leading-7"><strong>La consistencia decide el siguiente paso:</strong> debe quedar manejable con duya para poder formar las piezas.</p>
            <p className="leading-7"><strong>El horno también tiene una condición:</strong> la fuente indica precalentarlo y no abrirlo durante la cocción porque las piezas pueden perder altura.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
