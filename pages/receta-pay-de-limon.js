import { createCourseServerClient, requireCourseAccess } from '../lib/course';

import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Pasta sucrée', '280', 'g', ''],
  ['Jugo de limón', '100', 'g', 'Para la crema de limón'],
  ['Azúcar', '140', 'g', 'Para la crema de limón'],
  ['Huevos', '100', 'g', 'Para la crema de limón'],
  ['Mantequilla', '60', 'g', 'Para la crema de limón'],
  ['Claras', '3', 'pzas', 'Para el merengue suizo · DEMO'],
  ['Azúcar', '180', 'g', 'Para el merengue suizo · DEMO'],
];

const steps = [
  ['1', 'Preparar la pasta sucrée y colocarla en el molde.', 'La fuente indica montar la pasta en el molde como en la tarta de frutas.'],
  ['2', 'Cocer a ciegas hasta que la pasta esté bien dorada.', 'Busca un fondo completamente cocido y con color dorado antes de enfriarlo.'],
  ['3', 'Preparar la crema de limón a baño María con el jugo, huevo y azúcar.', 'Observa cómo cambia la mezcla mientras se calienta y se cocina.'],
  ['4', 'Enfriar la crema y agregar la mantequilla.', 'La mantequilla se incorpora después del enfriado, según la secuencia de la fuente.'],
  ['5', 'Agregar la crema de limón a la base y refrigerar.', 'El relleno debe quedar contenido por la base ya cocida.'],
  ['6', 'Preparar el merengue suizo.', 'Calienta claras y azúcar a 45 °C sobre baño María y después bate hasta obtener un merengue espeso y frío.'],
  ['7', 'Decorar el pay con el merengue y dorarlo con soplete.', 'Observa cómo el soplete cambia la superficie del merengue sin sustituir la estructura que se obtuvo durante el batido.'],
];

export default function LemonPiePage() {
  return (
    <CourseShell eyebrow="Preparación" title="Pay de limón" description="Pasta sucrée, crema de limón y merengue suizo." backHref="/leccion-pay-de-limon" backLabel="Volver a la lección">
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
          <div className="border-b border-stone-200 px-6 py-4"><h2 className="text-2xl font-semibold">Ingredientes</h2></div>
          <div className="divide-y divide-stone-200">
            {ingredients.map(([name, qty, unit, notes], i) => (
              <div key={name + i} className="grid grid-cols-[1fr_auto_auto] gap-3 px-6 py-4">
                <div><span>{name}</span>{notes && <span className="block text-sm text-stone-500">{notes}</span>}</div>
                <span>{qty}</span><span className="text-stone-500">{unit}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Paso a paso</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Trabaja y observa</h2>
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
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Merengue suizo · DEMO</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">El punto de la preparación</h2>
          <p className="mt-4 leading-7 text-stone-700">
            La fuente indica calentar claras y azúcar sobre baño María hasta <strong>45 °C</strong> y después batir hasta que el merengue esté espeso y frío. Se utiliza inmediatamente.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La base:</strong> se cuece a ciegas y debe quedar bien dorada.</p>
            <p className="leading-7"><strong>La crema:</strong> se cocina a baño María y se termina con mantequilla una vez fría.</p>
            <p className="leading-7"><strong>El merengue:</strong> alcanza 45 °C antes del batido y se utiliza una vez espeso y frío.</p>
            <p className="leading-7"><strong>El acabado:</strong> el soplete forma parte del montaje final.</p>
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
