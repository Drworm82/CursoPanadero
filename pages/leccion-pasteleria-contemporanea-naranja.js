import CourseShell from '../components/course/CourseShell';

const lesson = { number: '65', title: 'Pastelería Contemporánea IV', subtitle: 'Clase 37 · Pastelería Contemporánea IV' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 65" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a ensamblar pasteles con distintas técnicas y texturas. Reforzará técnicas básicas de pastelería.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <p><strong>Para Biscuit de Naranja:</strong> mantequilla 85 g · azúcar 85 g · yemas de huevo 3 pzas · extracto de vainilla · sal 1 g · naranja, solo la ralladura, 1 pza · claras de huevo 3 pzas · harina 58 g · almendra en polvo 35 g.</p>
            <p><strong>Para la Crema de Naranja:</strong> azúcar 250 g · huevos 6 pzas · jugo de naranja 350 g · mantequilla 60 g · ralladura de naranja 5 g · crema para batir 800 g · hojas de grenetina 13 pzas.</p>
            <p><strong>Para el Gel de Naranja:</strong> base de la crema de naranja sin añadir crema, 150 g · colorante naranja 1 c/s.</p>
            <p><strong>Para las Naranjas Deshidratadas:</strong> jarabe TPT 200 g (100 g azúcar + 100 g agua) · naranjas en rodajas delgadas 2 pzas · sal 1 g.</p>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Biscuit de Naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Acremar el azúcar con la mantequilla.</li><li>Añadir las yemas, la vainilla y la sal.</li><li>Agregar la ralladura de naranja y los ingredientes secos restantes.</li><li>Al final mezclar las claras batidas a punto de nieve.</li><li>Extender en charolas con papel siliconado, cocer a 190 °C durante 8 a 10 min.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Crema de Naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Mezclar todos los ingredientes.</li><li>Cocer a baño maría hasta que la crema espese.</li><li>Añadir las hojas de grenetina previamente hidratadas.</li><li>Enfriar y doblarle la crema batida.</li><li>Usar inmediatamente.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Gel de Naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Solo reservar la crema.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Naranjas Deshidratadas</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Pasar las rodajas de naranja por el jarabe y poner sobre silpat.</li><li>Secar en horno a 100 °C.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Aro 22 cm.</li><li>Pastilla 18 cm.</li></ol><p className="mt-2 text-sm text-stone-500">La fuente recuperada termina aquí el apartado de montaje. No se agregan pasos posteriores.</p></div>
          </div>
        </section>
      </div>
    </CourseShell>
  );
}