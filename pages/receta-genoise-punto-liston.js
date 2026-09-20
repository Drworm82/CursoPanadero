import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Huevos', '6', 'pzas', ''],
  ['Azúcar', '200', 'g', ''],
  ['Esencia de vainilla', '5', 'ml', ''],
  ['Harina', '190', 'g', ''],
];

const steps = [
  ['1', 'Batir los huevos junto con el azúcar hasta llegar a punto listón.', 'Observa el volumen y la consistencia. El objetivo es reconocer el punto, no sustituirlo por un tiempo fijo.'],
  ['2', 'Incorporar la esencia de vainilla.', 'Hazlo después del batido, antes de incorporar la harina, siguiendo la secuencia de la fuente.'],
  ['3', 'Cernir la harina e incorporarla suavemente y en forma envolvente, fuera de la batidora.', 'Observa que la mezcla conserve la mayor parte del volumen conseguido durante el batido.'],
  ['4', 'Engrasar y enharinar un molde de 24 cm y verter la preparación.', 'La fuente utiliza un molde de 24 cm de diámetro. Trabaja con cuidado para no perder innecesariamente el volumen antes del horno.'],
  ['5', 'Hornear a 160 °C aproximadamente, con el horno previamente calentado, durante unos 30 minutos.', 'La fuente indica que los bordes del bizcocho se contraen ligeramente como señal de que terminó la cocción.'],
  ['6', 'Retirar, esperar unos minutos y desmoldar sobre una rejilla.', 'Observa la estructura después de salir del horno: ya no depende únicamente del aire incorporado durante el batido, sino de la estructura fijada durante la cocción.'],
];

export default function GenoisePracticePage() {
  return (
    <CourseShell eyebrow="Práctica guiada" title="Genoise: reconocer el punto listón" description="Adaptación pedagógica de la parte de genoise de la DEMO de pastel de tres leches de la fuente." backHref="/leccion-cuando-el-huevo-sostiene-una-masa" backLabel="Volver a la lección">
      <div className="space-y-8">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Origen de la preparación</p>
          <p className="mt-2 leading-7 text-amber-950">
            Las cantidades y el procedimiento de esta práctica corresponden a la sección “Para el Genoise” de la DEMO de pastel de tres leches.
            Aquí se separa esa parte únicamente para practicar el principio técnico de esta lección.
          </p>
        </section>

        <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
          <div className="border-b border-stone-200 px-6 py-4"><h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2></div>
          <div className="divide-y divide-stone-200">
            {ingredients.map(([name, qty, unit, notes], i) => (
              <div key={name + i} className="grid grid-cols-[1fr_auto_auto] gap-3 px-6 py-4">
                <div>{name}{notes && <span className="block text-sm text-stone-500">{notes}</span>}</div>
                <span>{qty}</span><span className="text-stone-500">{unit}</span>
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

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>Primero:</strong> los huevos y el azúcar se baten hasta punto listón.</p>
            <p className="leading-7"><strong>Después:</strong> la harina entra de forma envolvente y fuera de la batidora.</p>
            <p className="leading-7"><strong>Finalmente:</strong> el horno fija la estructura y el bizcocho puede sostenerse.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
