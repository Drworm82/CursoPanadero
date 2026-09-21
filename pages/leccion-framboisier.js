import CourseShell from '../components/course/CourseShell';

const lesson = { number: '66', title: 'Framboisier', subtitle: 'Clase 38 · Pasteles a Gran Escala' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 9 · Lección 66" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-9" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><p className="text-sm font-medium text-amber-800">Grado de dificultad</p><p className="mt-1 text-lg text-stone-800">**</p></div>
            <div><p className="text-sm font-medium text-amber-800">Tiempo de elaboración</p><p className="mt-1 text-lg text-stone-800">2 hrs</p></div>
          </div>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a elaborar pasteles a gran escala, mediante sistemas de producción en serie.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Bizcocho de almendra</h3><p className="mt-2">Almendra en polvo 500 g · azúcar 250 g · claras 600 g · azúcar 250 g · mantequilla 75 g, fundida.</p></div>
            <div><h3 className="font-semibold text-stone-900">Crema pastelera</h3><p className="mt-2">Crema pastelera 600 g. Para elaborarla: leche 400 ml · yemas 96 g · azúcar 120 g · fécula de maíz 28 g · esencia de vainilla 8 ml.</p></div>
            <div><h3 className="font-semibold text-stone-900">Mousseline de frambuesa</h3><p className="mt-2">Mantequilla 1,100 g; separar 400 g de crema de mantequilla para alisar · claras 360 g · azúcar 720 g · esencia de frambuesa 90 gotas, importada · crema pastelera, la receta · colorante rojo c/s · frambuesas frescas 680 g, 3 domos (2 relleno y 1 decoración).</p></div>
            <div><h3 className="font-semibold text-stone-900">Acabado</h3><p className="mt-2">Pintura de chocolate obscura 700 g, para todo el grupo · brillo neutro 250 g · colorante rojo c/s.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Preparaciones</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Elaborar un bizcocho de almendras, cocer en plancha a 180 °C, reservar.</li><li>Elaborar una crema pastelera, derivar una mousseline de frambuesa.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Colocar una placa de bizcocho y una de crema mousseline, rellenar con frambuesas frescas.</li><li>Colocar otra capa de bizcocho y alisar con crema de mantequilla. Congelar.</li><li>Con ayuda de una reja, pintar con compresora, volver a congelar.</li><li>Pintar el brillo ligeramente con color rojo, brillar el pastel.</li><li>Cortar según demo de chef.</li><li>Decorar con frambuesa y un cigarrillo de chocolate (opcional).</li></ol></div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Límite de la fuente</p>
          <p className="mt-3 leading-7 text-stone-700">La fuente no desarrolla paso a paso la elaboración del bizcocho de almendra, la crema pastelera ni la derivación de la mousseline de frambuesa en esta clase; remite a su elaboración y después describe el montaje. No se agregan procedimientos externos.</p>
        </section>
      </div>
    </CourseShell>
  );
}