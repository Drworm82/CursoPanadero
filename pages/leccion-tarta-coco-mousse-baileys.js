import CourseShell from '../components/course/CourseShell';

const lesson = { number: '60', title: 'Tarta de coco con mousse de Bailey’s', subtitle: 'Clase 35 · Pastelería Contemporánea II' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 60" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aplicara técnicas antes vistas, para la confección de tartas contemporáneas.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <p><strong>Sablé de chocolate y especias:</strong> mantequilla 125 g · harina 200 g · cocoa 50 g · 4 especias 1 pizca · sal 1 pizca · yemas 1 pza · huevo 1 pza · azúcar 80 g.</p>
            <p><strong>Flan de coco y caramelo:</strong> leche 120 ml · crema para batir 180 ml · azúcar 80 g · coco rallado 40 g · huevo 1 pza · yemas 3 pzas.</p>
            <p><strong>Mousse de chocolate y Bailey’s:</strong> cobertura de leche 140 g · leche 50 ml · crema para batir 50 ml · yemas 20 g · Bailey’s 25 ml · azúcar 25 g · crema para batir 160 g semi montada · grenetina en polvo 8 g.</p>
            <p><strong>Tejas de coco:</strong> coco rallado 30 g · azúcar mascabado 35 g · claras 30 g · harina 10 g · mantequilla noisette 24 g.</p>
            <p><strong>Para decorar:</strong> chocolate amargo 300 g y manteca de cacao 300 g, para todo el grupo.</p>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Sablé de chocolate</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una masa friable por el método de sablage.</li><li>Forrar un molde de 20 cm de diámetro.</li><li>Pre cocinar a 180 °C por 7–8 minutos.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Flan de coco y caramelo</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar un caramelo claro con el azúcar y agregarle la crema hirviendo.</li><li>Mezclar con la leche fría.</li><li>Incorporar el coco rallado y el huevo.</li><li>Vaciar sobre la masa pre cocida.</li><li>Hornear a 180 °C de 15 a 20 minutos.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Mousse de chocolate y Bailey’s</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Realizar una crema inglesa.</li><li>Agregar el chocolate derretido y Bailey’s.</li><li>Incorporar la grenetina hidratada y disuelta.</li><li>Bajar la temperatura a 40 °C e incorporar la crema semi montada.</li><li>Colocar en un aro de 18 cm y refrigerar.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Tejas de coco</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Mezclar los ingredientes secos.</li><li>Incorporar las claras y la mantequilla noisette tibia.</li><li>Estirar de 3 mm de espesor.</li><li>Cortar pequeños discos.</li><li>Hornear a 180 °C hasta dorar.</li><li>Una vez fuera del horno mientras siguen calientes cortar a la mitad.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Una vez que la tarta esta fría colocar la mousse de Bailey’s sobre esta.</li><li>En caso de tener compresor, pulverizar con cantidades iguales de chocolate amargo y manteca de cacao a 30 °C.</li><li>Colocar las mitades de teja alrededor del mousse. Para decorar hacer alguna decoración con chocolate.</li></ol></div>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}