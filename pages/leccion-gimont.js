import CourseShell from '../components/course/CourseShell';

const lesson = { number: '67', title: 'Gimont', subtitle: 'Clase 38 · Pasteles a Gran Escala' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 9 · Lección 67" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-9" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div><p className="text-sm font-medium text-amber-800">Grado de dificultad</p><p className="mt-1 text-lg text-stone-800">***</p></div>
            <div><p className="text-sm font-medium text-amber-800">Tiempo de elaboración</p><p className="mt-1 text-lg text-stone-800">2 hrs</p></div>
          </div>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a elaborar pasteles a gran escala, mediante sistemas de producción en serie.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Bizcocho cuillere de pistache</h3><p className="mt-2">Yemas 5 pz · claras 5 pz · azúcar 150 g · harina 150 g · pistache picado finamente 30 g.</p></div>
            <div><h3 className="font-semibold text-stone-900">Jarabe de pistache</h3><p className="mt-2">Jarabe TpT 180 g, azúcar 90 g + agua 90 g · esencia de pistache 5 gotas.</p></div>
            <div><h3 className="font-semibold text-stone-900">Pistache dragee</h3><p className="mt-2">Pistache 225 g · azúcar 60 g · agua 15 g.</p></div>
            <div><h3 className="font-semibold text-stone-900">Mousseline pistache</h3><p className="mt-2">Crema pastelera 800 g, elaborada con leche 600 g, azúcar 170 g, fécula 50 g y yemas 8 pz · pasta de pistache 150 g · mantequilla 160 g · pistache dragee c/s, la receta.</p></div>
            <div><h3 className="font-semibold text-stone-900">Bavaroise pistache</h3><p className="mt-2">Grenetina en hoja 10 pz · leche 600 g · yemas 200 g · azúcar 200 g · pasta de pistache 120 g · crema para batir 500 g.</p></div>
            <div><h3 className="font-semibold text-stone-900">Decoración</h3><p className="mt-2">Brillo neutro 50 g · chocolate blanco 300 g · manteca de cacao 30 g · colorante verde c/s, laca alumínica.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><ol className="list-decimal space-y-2 pl-6"><li>Elaborar un biscuit de soleta, con técnica conocida, espolvorear pistache picado finamente, hornear a 180 °C por 15 min y reservar.</li><li>Cocer el jarabe TpT y una vez frío añadir la esencia.</li><li>Cannelizar los pistaches y reservar.</li><li>Confeccionar la pastelera y derivarla en mousseline, agregar el pistache dragee.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Encamisar un aro individual con fondo y ¾ de los laterales.</li><li>Agregar la crema mousseline a la mitad del aro.</li><li>Adicionar la Bavaroise de pistache.</li><li>Decorar con brillo y chocolate temperado con manteca de cacao verde.</li></ol></div>
          </div>
        </section>

      </div>
    </CourseShell>
  );
}