import CourseShell from '../components/course/CourseShell';

const lesson = { number: '58', title: 'Pastel de yogurt y frutos rojos', subtitle: 'Clase 34 · Pastelería Contemporánea I' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 58" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a confeccionar un pastel de tipo contemporáneo, utilizando técnicas diversas, también conocerá como es el armado de un pastel con insertos.</p>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Un pastel contemporáneo se construye por componentes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La preparación combina magdalena, gelatina de frutos rojos, mousse de yogurt y decoración. La idea es aprender a leer esas partes como una arquitectura de montaje.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera batidos, gelatinas, merengue italiano y mousses. Después identifica qué aporta cada componente dentro del pastel según el montaje documentado. Práctica: dibuja un corte del pastel y coloca los componentes en el orden del montaje; después explica por qué se preparan por separado.</p></section>


        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            <div><h3 className="font-semibold">Magdalena de limón y romero</h3><p className="mt-2 leading-7 text-stone-700">Huevo 50 g · azúcar 60 g · ralladura de limón 5 g · crema para batir 12 g · romero fresco 2 g · harina 50 g · fécula de maíz 12 g · polvo de hornear 2 g · mantequilla derretida 25 g.</p></div>
            <div><h3 className="font-semibold">Jelly de frutos rojos</h3><p className="mt-2 leading-7 text-stone-700">Azúcar 40 g · glucosa 15 g · frutos rojos 300 g · grenetina en polvo 8 g.</p></div>
            <div><h3 className="font-semibold">Mousse de yogurt</h3><p className="mt-2 leading-7 text-stone-700">Yogurt 250 g · merengue italiano 150 g (2 pzas claras y 120 g azúcar) · vaina de vainilla ½ pza · grenetina en polvo 10 g · crema para batir 250 g.</p></div>
            <div><h3 className="font-semibold">Decoración</h3><p className="mt-2 leading-7 text-stone-700">Manteca de cacao 20 g · colorante para chocolate rojo 5 g · chocolate blanco 200 g · frambuesas frescas 50 g · brillo de pastelería 100 g · colorante rojo 2 g · glucosa 50 g.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Magdalena de limón y romero</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Blanquear el huevo con el azúcar y la ralladura de limón.</li><li>Incorporar la crema y el romero picado.</li><li>Tamizar la harina, fécula y polvo de hornear e incorporarla a la preparación.</li><li>Agregar la mantequilla derretida.</li><li>Volcar la preparación sobre un silpat a 4 mm de espesor.</li><li>Cocinar a 170 °C.</li><li>Cortar una gota de 20 cm.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Jelly de frutos rojos</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Cocinar las moras, azúcar, glucosa y hervir por 2 minutos.</li><li>Dejar enfriar.</li><li>Agregar la grenetina.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de yogurt</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar un merengue italiano.</li><li>Entibiar el yogurt con la vaina de vainilla.</li><li>Mezclar el yogurt con el merengue.</li><li>Incorporar la grenetina y por último la crema semi montada.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una pastilla en molde de gota de 20 cm de largo con la Magdalena y el jelly de frutos rojos.</li><li>Una vez fría la pastilla y hecha la mousse de yogurt preparar un molde de gota de 25 cm de largo con acetato.</li><li>Vaciar la mousse dentro del aro para realizar un armado invertido.</li><li>Refrigerar el pastel una vez montado.</li><li>Desmoldar y para decorar hacer una cinta de chocolate con vetas rojas de manteca de cacao y colorante de la mitad altura de la mousse.</li><li>En la parte de arriba colocar enjambre de glucosa con frambuesa y cubrir el pastel con gel de brillo teñido de rojo.</li></ol></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente</p>
          <p className="mt-2 leading-7 text-stone-700">Curso completo Panaderia y reposteria ISMM.pdf · Clase 34 · Pastelería Contemporánea I.</p>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Batidos, gelatinas, merengue italiano y mousses ya aparecieron en el curso. Aquí debes reconocer cada técnica antes de combinarla.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder señalar la función de la base, el inserto, la mousse y el acabado dentro del montaje documentado.</p></section>

      </div>
    </CourseShell>
  );
}