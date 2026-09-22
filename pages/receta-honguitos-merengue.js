import { requireCourseAuth, requireCourseAccess } from '../lib/course';

import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Claras', '90', 'g', 'La fuente indica que los hongos de merengue fueron realizados una clase antes.'],
  ['Azúcar', '180', 'g', ''],
];

const steps = [
  ['1', 'Identificar y pesar los ingredientes.', 'Comprueba que las cantidades estén listas antes de comenzar.'],
  ['2', 'Verificar que el bowl y el globo estén completamente limpios.', 'La limpieza del equipo es una condición que la fuente establece antes de incorporar las claras.'],
  ['3', 'Pasar las claras al bowl junto con el azúcar y colocar sobre un baño María.', 'Observa cómo la mezcla empieza a calentarse antes del batido final.'],
  ['4', 'Batir con globo manual hasta que la mezcla alcance 45 °C.', 'Aquí la temperatura es la señal concreta que indica la fuente para pasar a la batidora.'],
  ['5', 'Pasar a batidora y batir hasta que espese y enfríe el merengue.', 'Observa simultáneamente el cambio de consistencia y la pérdida de calor. La fuente no establece un tiempo fijo.'],
  ['6', 'Colocar en una manga con duya lisa y, sobre una charola con papel estrella, realizar los hongos en dos partes: tallo y sombrero.', 'Mira cómo el merengue mantiene la forma que le das con la manga. Las dos piezas forman después un solo hongo.'],
  ['7', 'Secar en el horno y reservar bien tapados.', 'La preparación cambia de una masa aireada y moldeable a una pieza seca. La fuente no especifica en este apartado una temperatura ni un tiempo de secado.'],
  ['8', 'Pegar con chocolate y decorar con cocoa.', 'El chocolate une las dos partes del hongo y la cocoa completa su acabado.'],
];

export default function MeringueMushroomsRecipePage() {
  return (
    <CourseShell
      eyebrow="Práctica guiada"
      title="Honguitos de merengue"
      description="Adaptación pedagógica del procedimiento de “Para los Honguitos” del Buche de Noël de la fuente."
      backHref="/leccion-merengues"
      backLabel="Volver a la lección"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Origen de la preparación</p>
          <p className="mt-2 leading-7 text-amber-950">
            En la fuente, los honguitos aparecen dentro del Buche de Noël y se indica que fueron realizados una clase antes.
            Aquí se separan como práctica para estudiar el procedimiento del merengue. La fuente sí proporciona el método,
            pero <strong>no especifica en este apartado la temperatura ni el tiempo de secado en horno</strong>.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <div className="border-b border-stone-200 px-6 py-4">
            <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          </div>
          <div className="divide-y divide-stone-200">
            {ingredients.map(([name, qty, unit, notes], i) => (
              <div key={name + i} className="grid grid-cols-[1fr_auto_auto] gap-3 px-6 py-4">
                <div>
                  {name}
                  {notes && <span className="block text-sm text-stone-500">{notes}</span>}
                </div>
                <span>{qty}</span>
                <span className="text-stone-500">{unit}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Paso a paso</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Hazlo y observa</h2>
          <div className="mt-5 space-y-4">
            {steps.map(([n, text, obs]) => (
              <article key={n} className="rounded-2xl border border-stone-200 bg-white p-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">{n}</span>
                  <div className="flex-1">
                    <p className="text-lg leading-8 text-stone-800">{text}</p>
                    <div className="mt-4 rounded-2xl bg-amber-50 p-5">
                      <p className="font-medium text-amber-900">Observa</p>
                      <p className="mt-2 leading-7 text-amber-950">{obs}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Equipo de esta práctica</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ['Ya lo necesitas ahora', 'Báscula, bowl, batidor de globo, baño María, batidora, manga, duya lisa, charola y papel para hornear.'],
              ['Necesitas conseguir', 'Manga y duya lisa si todavía no cuentas con ellas.'],
              ['Opcional', 'Termómetro de cocina para controlar los 45 °C indicados por la fuente.'],
              ['Te servirá más adelante', 'La manga, la duya y el control de temperatura volverán a aparecer en decoración y otras preparaciones.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-stone-50 p-5">
                <p className="font-semibold text-stone-900">{title}</p>
                <p className="mt-2 leading-7 text-stone-700">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>Primero se controla la mezcla:</strong> claras + azúcar llegan a 45 °C en baño María.</p>
            <p className="leading-7"><strong>Después se construye la estructura:</strong> el batido continúa hasta que el merengue espesa y se enfría.</p>
            <p className="leading-7"><strong>La manga convierte el merengue en una forma:</strong> tallo y sombrero se realizan por separado.</p>
            <p className="leading-7"><strong>El horno seca la pieza:</strong> la fuente establece el secado, pero no proporciona aquí temperatura ni tiempo, así que no se inventa ese dato.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}


export async function getServerSideProps({ req, res }) {
  const { supabase, claims } = await requireCourseAuth(req, res);

  if (!claims) return { redirect: { destination: '/acceso', permanent: false } };

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  return { props: {} };
}
