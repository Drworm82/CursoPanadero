import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Harina', '250', 'g'],
  ['Mantequilla', '130', 'g'],
  ['Azúcar glass', '115', 'g'],
  ['Huevo', '1', 'pieza'],
];

export default function SableePage() {
  return (
    <CourseShell eyebrow="Preparación · Demo" title="Pasta sablée" backHref="/leccion-sablee-y-sucree" backLabel="Volver a la lección">
      <div className="space-y-8">
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-amber-300">Objetivo de la fuente</p>
          <p className="mt-3 text-lg leading-8 text-stone-100">
            Realizar una masa friable por el método de arenado y comprender el porqué de este método.
          </p>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
          <div className="border-b border-stone-200 px-6 py-4"><h2 className="text-2xl font-semibold">Ingredientes</h2></div>
          <div className="divide-y divide-stone-200">
            {ingredients.map(([name, qty, unit]) => <div key={name} className="grid grid-cols-[1fr_auto_auto] gap-4 px-6 py-4"><span>{name}</span><span>{qty}</span><span className="text-stone-500">{unit}</span></div>)}
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Paso a paso</p>
          <h2 className="mt-1 text-2xl font-semibold">Método de arenado</h2>
          <div className="mt-6 rounded-2xl bg-amber-50 p-6">
            <p className="font-medium text-amber-900">Qué debes observar</p>
            <p className="mt-2 leading-7 text-amber-950">La fuente indica realizar la pasta mediante el método de arenado. Busca que harina y mantequilla pasen de estar separadas a formar una textura semejante a una arenilla.</p>
          </div>
          <div className="mt-6 rounded-2xl border border-stone-200 p-6">
            <p className="font-semibold">1. Realizar a través del método de arenado.</p>
            <p className="mt-3 leading-7 text-stone-600">La explicación de este método se encuentra en la Lección 8: primero se trabaja la harina con la mantequilla en seco hasta obtener la arenilla; después se incorporan los ingredientes restantes sin amasar.</p>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
