import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '51',
  title: 'El chocolate como materia prima',
  subtitle: 'Distinguir coberturas y reconocer por qué el material de partida comienza la chocolatería por el tipo de chocolate.',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 51"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Qué cambia cuando trabajamos con chocolate oscuro, de leche o blanco?</h2>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Antes de trabajar</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La fuente empieza por identificar la cobertura</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La Clase 19 presenta una introducción histórica al chocolate y después pasa a su origen, variedades y clasificación de coberturas. Para este curso interesa conservar esa progresión: primero reconocer el material; después aprender a controlarlo.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente distingue tres coberturas principales: chocolate oscuro, chocolate de leche y chocolate blanco.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Chocolate oscuro</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Cacao, azúcar y porcentaje</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Se describe como una mezcla de manteca de cacao, pasta de cacao o cacao en polvo y azúcar. El porcentaje indicado en la envoltura se refiere al porcentaje de pasta de cacao sobre el peso total del chocolate.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente señala que, por lo general, un porcentaje mayor de manteca de cacao permite trabajar la cobertura a baja temperatura conservando la consistencia líquida necesaria.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Chocolate de leche y blanco</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Dos composiciones distintas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El chocolate de leche se describe con manteca de cacao, pasta de cacao o cocoa en polvo, azúcar y leche en polvo.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El chocolate blanco se presenta como manteca de cacao, leche en polvo y azúcar. La fuente destaca que puede colorearse y lo plantea como base de los chocolates de color.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Lo que aparece después en la misma clase</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Tres ejercicios de aplicación</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La Clase 19 no se queda en la clasificación. Presenta Mendiants, Enjambres de chocolate, Fresas cubiertas y Chocolate amargo con cardamomo.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Mendiants: cobertura semi amarga, almendra, avellana, arándano seco, cáscara de naranja confitada y limón confitado.</p></div>
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Enjambres: 300 g de cobertura de leche, 130 g de hojuelas de maíz y 20 g de manteca de cacao opcional.</p></div>
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Fresas cubiertas: 12 fresas, 300 g de chocolate blanco y 100 g de chocolate obscuro.</p></div>
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Cardamomo: 450 g de cobertura amarga, 10 g de manteca de cacao y 5 g de cardamomo en polvo.</p></div>
          </div>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Clasifica antes de fundir</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Toma tres coberturas distintas y escribe qué tipo son según la clasificación de la fuente. Después identifica cuál se utiliza en cada uno de los ejercicios de la Clase 19.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">La clasificación es la de la fuente</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Las afirmaciones sobre composición, porcentaje y características se presentan tal como aparecen en el documento. No se añaden categorías comerciales externas.</p>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">Material de <strong>Curso completo Panaderia y reposteria ISMM.pdf</strong>, organizado pedagógicamente para esta ruta.</p>
        </section>
      </div>
    </CourseShell>
  );
}
