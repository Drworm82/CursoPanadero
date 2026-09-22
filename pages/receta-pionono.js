import { createCourseServerClient, requireCourseAccess } from '../lib/course';

import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Huevos', '4', 'pzas', ''],
  ['Azúcar', '50', 'g', ''],
  ['Miel de abeja', '30', 'g', ''],
  ['Esencia de vainilla', '5', 'ml', 'La fuente la lista en ingredientes, pero no especifica en qué paso se incorpora.'],
  ['Sal', '5', 'g', ''],
  ['Harina', '80', 'g', ''],
];

const steps = [
  ['1', 'Batir los huevos, el azúcar, la miel y la sal a baño María hasta que triplique su tamaño.', 'Compara el volumen inicial con el volumen final. La señal que establece la fuente es triplicar el tamaño del batido.'],
  ['2', 'Incorporar la harina cernida de forma envolvente.', 'Observa si la mezcla conserva el volumen conseguido en el paso anterior. La fuente indica incorporar suavemente y de forma envolvente.'],
  ['3', 'Colocar sobre una charola con un silpat o papel siliconado, engrasada y enharinada, y estirar a la forma de la charola sin dar mucho trabajo.', 'Mira que el batido se distribuya en la charola sin trabajarlo innecesariamente. La fuente indica evitar darle mucho trabajo para impedir que se baje.'],
  ['4', 'Hornear a 190 °C durante 12 a 15 minutos.', 'El objetivo de esta cocción no termina en que esté cocido: al salir debe conservar la flexibilidad necesaria para doblarse.'],
  ['5', 'Sacar del horno y poner sobre una rejilla para que enfríe.', 'Comprueba la flexibilidad de la plancha. La fuente indica que debe quedar muy flexible para poderse doblar. También recomienda taparla una vez fuera del horno o conservarla en un lugar húmedo.'],
];

export default function PiononoRecipePage() {
  return (
    <CourseShell
      eyebrow="Práctica guiada"
      title="Pionono: volumen en plancha"
      description="Adaptación pedagógica de la sección “Para el Pionono” del Buche de Noël de la fuente."
      backHref="/leccion-el-pionono"
      backLabel="Volver a la lección"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Origen de la preparación</p>
          <p className="mt-2 leading-7 text-amber-950">
            Las cantidades y los cinco pasos de esta práctica corresponden a la sección “Para el Pionono” del Buche de Noël.
            Aquí se separan para estudiar el principio de una masa batida ligera flexible y en plancha.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
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
              ['Ya lo necesitas ahora', 'Báscula, bowl, batidor, charola y rejilla.'],
              ['Necesitas conseguir', 'Silpat o papel siliconado para cubrir la charola.'],
              ['Opcional', 'Un termómetro de horno puede ayudarte a comprobar la temperatura real del horno; la fuente recomienda disponer de uno para la repostería.'],
              ['Te servirá más adelante', 'La charola y el papel/silpat volverán a aparecer cuando trabajemos otras preparaciones en plancha.'],
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
            <p className="leading-7"><strong>Triplicar el volumen:</strong> es la señal de batido que establece la fuente para el Pionono.</p>
            <p className="leading-7"><strong>Conservar el volumen:</strong> la harina se incorpora de forma envolvente y la plancha se extiende sin trabajarla de más.</p>
            <p className="leading-7"><strong>Conservar la flexibilidad:</strong> el resultado debe poder doblarse; la fuente recomienda cubrirlo al salir del horno o mantenerlo en un lugar húmedo.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}


export async function getServerSideProps({ req, res }) {
  const supabase = createCourseServerClient(req, res);
  const { data: { claims } } = await supabase.auth.getClaims();

  if (!claims) return { redirect: { destination: '/acceso', permanent: false } };

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  return { props: {} };
}
