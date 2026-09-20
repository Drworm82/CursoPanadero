import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '55',
  title: 'Bombonería, trufas, rochers y cortes',
  subtitle: 'Reconocer cuatro maneras documentadas de terminar preparaciones de chocolate: bombón, trufa, rocher y chocolate de corte.',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 55"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Qué cambia cuando el relleno se convierte en una pieza que debe cortarse, bañarse o revolcarse?</h2>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Bombonería</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La pieza rellena se construye por capas de trabajo</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Las Clases 20 y 21 muestran bombones con cascos de chocolate temperado, rellenos preparados aparte y un cierre posterior. El punto importante para leer la receta es distinguir cobertura, relleno, enfriado y desmolde.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Trufa de vainilla con transfer</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una trufa también puede ser de corte</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fórmula utiliza 100 g de crema para batir, 150 g de chocolate de leche, 150 g de chocolate semi amargo, 60 g de mantequilla, 10 g de licor de vainilla y 10 g de esencia de vainilla. Para la cobertura se documentan 500 g de chocolate amargo, 20 g de manteca de cacao y un transfer.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El procedimiento indica hervir la crema y bajar la temperatura; temperar los chocolates y unirlos; agregar mantequilla pomada, licor y vainilla; formar una película fina de cobertura sobre acetato; colocar encima la trufa a 1 cm de altura; enfriar; cubrir con otra película; cortar en cuadrados en primera cristalización; bañar, colocar el transfer, enfriar y retirarlo.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Rochers</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una mezcla con sólidos y frutos secos</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fórmula documenta 200 g de praliné, 50 g de manteca de cacao, 50 g de chocolate de leche, 30 g de feuilletine, 10 g de avellana, 20 g de almendra en pedazo, 30 g de avellana picada para revolcar y 200 g de chocolate amargo para decorar.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El procedimiento: fundir manteca de cacao y chocolate de leche; agregar feuilletine y frutos secos picados; refrigerar; bolear a mano; pasar por avellana picada y trampar con chocolate amargo temperado.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Chocolate de pasas y dulce de leche</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una preparación que se corta</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Las pasas se maceran con ron, se procesan y se agregan al dulce de leche y mantequilla. Después se tempera la cobertura blanca con manteca de cacao y se incorpora el preparado.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La mezcla se vuelca sobre Silpat con un cuadrante de 1.5 cm de altura. Al endurecer, se añade una capa fina de cobertura de leche, se da vuelta y se realiza otra capa, cortando en primera cristalización. Finalmente se enfría hasta endurecimiento.</p>
          
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye tres formatos</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Compara trufa de vainilla, rocher y chocolate de pasas: indica cuál se corta, cuál se bolea y cuál recibe transfer.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Conservamos los términos del documento</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente utiliza expresiones como «trampar», «revolcarlas», «primera cristalización» y «feulletine». Se conservan sin sustituirlas por una terminología externa.</p>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">Material de <strong>Curso completo Panaderia y reposteria ISMM.pdf</strong>, organizado pedagógicamente para esta ruta.</p>
        </section>
      </div>
    </CourseShell>
  );
}
