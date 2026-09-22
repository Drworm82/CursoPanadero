import { createCourseServerClient, requireCourseAccess } from '../lib/course';

import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Pasta sablée', '280', 'g', ''],
  ['Crema pastelera', '400', 'g', ''],
  ['Chocolate semi amargo', '40', 'g', ''],
  ['Fresas frescas', '3', 'pzas', ''],
  ['Kiwi', '1', 'pza', ''],
  ['Duraznos en almíbar', '1', 'pza', ''],
  ['Frambuesas', '5', 'pzas', ''],
  ['Brillo de pastelería', '30', 'g', ''],
  ['Almendra fileteada', '20', 'g', ''],
  ['Leche', '250', 'ml', 'Para la crema pastelera · DEMO'],
  ['Yemas', '60', 'g', 'Las claras son para el merengue · DEMO'],
  ['Azúcar', '75', 'g', 'Para la crema pastelera · DEMO'],
  ['Fécula de maíz', '18', 'g', 'Para la crema pastelera · DEMO'],
  ['Esencia de vainilla', '5', 'ml', 'Demo con vaina de vainilla'],
];

const steps = [
  ['1', 'Identificar y pesar los ingredientes.', 'Antes de comenzar, comprueba que cada ingrediente esté pesado y preparado. La receta separa la crema pastelera como DEMO.'],
  ['2', 'Forrar un molde de tarta con la pasta.', 'Busca que la pasta cubra el molde de manera uniforme.'],
  ['3', 'Cocer el fondo de pasta a 180 °C durante 15 minutos.', 'Observa el cambio de color y firmeza del fondo durante la cocción.', '180 °C · 15 min'],
  ['4', 'Dejar enfriar la pasta y barnizar el fondo con chocolate fundido.', 'Primero debe estar fría. Observa la capa de chocolate que queda entre la base y el futuro relleno.'],
  ['5', 'Rellenar con la crema pastelera.', 'La crema entra después de la impermeabilización; observa cómo se mantiene sobre la barrera de chocolate.'],
  ['6', 'Cubrir de forma decorativa con las frutas.', 'Distribuye las frutas sobre la crema según el acabado indicado en la preparación.'],
  ['7', 'Aplicar brillo y espolvorearle el pistache o almendras.', 'La fuente menciona pistache o almendras; en los ingredientes de esta tarta aparecen almendras fileteadas.'],
];

const creamSteps = [
  ['1', 'Hervir la leche con la mitad del azúcar.', 'Observa el calentamiento de la leche antes de incorporarla a las yemas.'],
  ['2', 'Blanquear las yemas con la otra mitad del azúcar y la maicena.', 'Busca una mezcla de yemas, azúcar y fécula homogénea antes de temperarla.'],
  ['3', 'Agregar un poco de la leche a la mezcla de las yemas para temperarlas.', 'La incorporación gradual permite elevar la temperatura de las yemas antes de volver al fuego.'],
  ['4', 'Regresar al fuego sin dejar de mover.', 'La mezcla comienza a espesar mientras se calienta.'],
  ['5', 'La crema estará lista una vez que rompa hervor por 2 minutos.', 'Observa el cambio de viscosidad y la consistencia final de la crema.'],
  ['6', 'Colocar en una charola con film arriba y abajo para dejar enfriar.', 'El film queda en contacto con la crema mientras se enfría.'],
  ['7', 'Una vez fría, agregar la esencia de vainilla.', 'La fuente incorpora la vainilla después del enfriado.'],
];

export default function FruitTartPage() {
  return (
    <CourseShell eyebrow="Preparación" title="Tarta de frutas" description="Base de pasta sablée, crema pastelera, fruta y brillo." backHref="/leccion-de-la-pasta-a-la-tarta" backLabel="Volver a la lección">
      <div className="space-y-8">
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-amber-300">Ficha de la fuente</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div><p className="text-sm text-stone-400">Dificultad</p><p className="mt-1 text-xl font-semibold">**</p></div>
            <div><p className="text-sm text-stone-400">Tiempo</p><p className="mt-1 text-xl font-semibold">45 min</p></div>
            <div><p className="text-sm text-stone-400">Rendimiento</p><p className="mt-1 text-xl font-semibold">1 tarta de 24 cm</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
          <div className="border-b border-stone-200 px-6 py-4"><h2 className="text-2xl font-semibold">Ingredientes</h2></div>
          <div className="divide-y divide-stone-200">
            {ingredients.map(([name, qty, unit, notes]) => (
              <div key={name} className="grid grid-cols-[1fr_auto_auto] gap-3 px-6 py-4">
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
            {steps.map(([n, text, obs, meta]) => (
              <article key={n} className="rounded-2xl border border-stone-200 bg-white p-6">
                <div className="flex gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 text-sm font-semibold text-white">{n}</span><div className="flex-1"><p className="text-lg leading-8 text-stone-800">{text}</p>{meta && <p className="mt-2 inline-block rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-600">{meta}</p>}<div className="mt-4 rounded-2xl bg-amber-50 p-5"><p className="font-medium text-amber-900">Observa</p><p className="mt-2 leading-7 text-amber-950">{obs}</p></div></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Crema pastelera · DEMO</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Trabaja y observa</h2>
          <div className="mt-5 space-y-4">
            {creamSteps.map(([n, text, obs]) => <article key={n} className="rounded-2xl border border-stone-200 p-5"><div className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold">{n}</span><div><p className="leading-7 text-stone-800">{text}</p><p className="mt-3 leading-7 text-stone-600"><strong>Observa:</strong> {obs}</p></div></div></article>)}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La base:</strong> debe estar cocida y fría antes de impermeabilizar.</p>
            <p className="leading-7"><strong>La barrera:</strong> el chocolate se coloca antes de la crema para separar el relleno de la pasta.</p>
            <p className="leading-7"><strong>La crema:</strong> la fécula y la cocción cambian su consistencia; el enfriado completa el proceso.</p>
            <p className="leading-7"><strong>El montaje:</strong> fruta, brillo y almendra terminan una tarta cuya estructura se construyó por capas.</p>
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
