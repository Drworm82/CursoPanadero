import { requireCourseAuth, requireCourseAccess } from '../lib/course';

import CourseShell from '../components/course/CourseShell';

const ingredients = [
  ['Harina', '250', 'g'],
  ['Mantequilla', '100', 'g'],
  ['Azúcar glass', '120', 'g'],
  ['Huevo', '1', 'pieza'],
  ['Yema', '1', 'pieza'],
];

export default function SucreePage() {
  return (
    <CourseShell eyebrow="Preparación · Práctica" title="Pasta sucrée" backHref="/leccion-sablee-y-sucree" backLabel="Volver a la lección">
      <div className="space-y-8">
        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-amber-300">Objetivo de la lección</p>
          <p className="mt-3 text-lg leading-8 text-stone-100">
            Comparar otra formulación de pasta friable realizada mediante el método de arenado.
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
            <p className="mt-2 leading-7 text-amber-950">Busca la misma señal que en la sablée: la harina y la grasa forman una arenilla antes de incorporar los ingredientes restantes.</p>
          </div>
          <div className="mt-6 rounded-2xl border border-stone-200 p-6">
            <p className="font-semibold">1. Realizar a través del método de arenado.</p>
            <p className="mt-3 leading-7 text-stone-600">La fuente indica este mismo método para la pasta sucrée. No añadimos pasos que no estén descritos en la fuente; la explicación técnica está desarrollada en la Lección 8.</p>
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
