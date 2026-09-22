import { requireCourseAuth, requireCourseAccess } from '../lib/course';

import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Huevos', '6', 'pzas', 'Para el genoise'],
  ['Azúcar', '200', 'g', 'Para el genoise'],
  ['Esencia de vainilla', '5', 'ml', 'Para el genoise'],
  ['Harina', '190', 'g', 'Para el genoise'],
  ['Leche evaporada', '240', 'ml', 'Para el jarabe'],
  ['Media crema', '240', 'ml', 'Para el jarabe'],
  ['Leche condensada', '240', 'ml', 'Para el jarabe'],
  ['Crema para batir', '300', 'g', 'Refrigerada'],
  ['Crema vegetal', '300', 'g', 'Congelada'],
  ['Durazno en almíbar', '300', 'g', 'Drenados'],
];

const steps = [
  ['1', 'Batir los huevos junto con el azúcar hasta que lleguen a punto listón.', 'Reconoce el mismo punto trabajado en la lección 13. El objetivo sigue siendo construir volumen antes de incorporar la harina.'],
  ['2', 'Incorporar la esencia de vainilla.', 'La fuente coloca la vainilla después del batido y antes de la harina.'],
  ['3', 'Cernir la harina e incorporarla suavemente y en forma envolvente, fuera de la batidora.', 'Observa si la mezcla conserva el volumen. No la trates como una masa que necesita amasado.'],
  ['4', 'Engrasar y enharinar un molde de 24 cm, verter la preparación y llevar a horno moderado, aproximadamente 160 °C, previamente calentado.', 'La fuente insiste en conocer las diferencias entre hornos y recomienda tener un termómetro para regular la temperatura real.'],
  ['5', 'Cocinar aproximadamente 30 minutos.', 'La fuente señala que los bordes del bizcocho se contraen un poco una vez terminada la cocción.'],
  ['6', 'Retirar, esperar unos minutos y desmoldar sobre una rejilla.', 'Observa que el bizcocho debe salir del molde antes de continuar con el montaje.'],
  ['7', 'Cortar el bizcocho en tres partes iguales y reservar.', 'La siguiente etapa necesita capas relativamente uniformes para que el montaje se repita de forma consistente.'],
  ['8', 'Mezclar la leche evaporada, la media crema y la leche condensada y licuar.', 'Aquí se prepara por separado el líquido que después recibirá el bizcocho.'],
  ['9', 'Colocar la primera capa de bizcocho y mojarla con las tres leches. Esperar a que se absorban; después emparejar con un poco de crema y frutas frescas. Repetir la operación dos veces más y cubrir por completo.', 'Observa la secuencia: primero absorción, después crema y fruta. No avances al siguiente componente mientras el jarabe todavía está sobre la superficie.'],
  ['10', 'Decorar con duya y frutas frescas.', 'La decoración llega al final, después de construir y cubrir el pastel.'],
];

export default function TresLechesRecipePage() {
  return (
    <CourseShell
      eyebrow="Práctica guiada"
      title="Pastel de tres leches"
      description="Aplicación de la DEMO de pastel de tres leches de la fuente, utilizada aquí para estudiar cómo una masa batida ligera recibe y absorbe un jarabe."
      backHref="/leccion-tres-leches"
      backLabel="Volver a la lección"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Origen de la preparación</p>
          <p className="mt-2 leading-7 text-amber-950">
            La fuente marca esta preparación como <strong>“DEMO DE TODO EL PASTEL”</strong>. Las cantidades y el procedimiento
            de esta página siguen la preparación original; aquí se utilizan como práctica para conectar el genoise con el jarabe y el montaje.
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
                  <span className="block text-sm text-stone-500">{notes}</span>
                </div>
                <span>{qty}</span>
                <span className="text-stone-500">{unit}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Paso a paso</p>
          <h2 className="mt-1 text-2xl font-semibold text-stone-900">Construye y observa</h2>
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
              ['Ya lo necesitas ahora', 'Báscula, bowls, batidora, molde redondo de 24 cm, rejilla, cuchillo para cortar las capas y utensilios de montaje.'],
              ['Necesitas conseguir', 'Ninguna herramienta especializada adicional para entender la técnica.'],
              ['Opcional', 'Termómetro de horno; la fuente lo recomienda para conocer y regular la temperatura real de cada horno.'],
              ['Te servirá más adelante', 'La manga y la duya volverán a utilizarse en decoración de pasteles y otras preparaciones.'],
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
            <p className="leading-7"><strong>La masa ligera no termina en el horno:</strong> aquí el bizcocho continúa transformándose durante el montaje.</p>
            <p className="leading-7"><strong>El jarabe se absorbe:</strong> las tres leches se aplican sobre cada capa y se espera antes de continuar.</p>
            <p className="leading-7"><strong>La secuencia importa:</strong> bizcocho → jarabe → absorción → crema y fruta.</p>
            <p className="leading-7"><strong>La fuente lo presenta como DEMO:</strong> esta página conserva ese carácter y lo convierte en una práctica guiada dentro de la nueva ruta.</p>
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
