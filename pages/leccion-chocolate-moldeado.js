import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '53',
  title: 'Chocolate moldeado',
  subtitle: 'Pasar del temperado a piezas que necesitan molde, contracción y desmolde.',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 53"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Qué operaciones aparecen cuando la cobertura deja de ser una salsa y se convierte en una pieza?</h2>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Del temperado al molde</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">El molde es parte de la secuencia</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La Clase 19 relaciona el temperado con el moldeado fácil y rápido y con un desmoldado sin problemas. También indica que el molde debe estar a 20 °C para evitar las manchas oscuras descritas en la fuente.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">En el ejercicio de chocolate amargo con cardamomo se puede observar la secuencia completa: preparar el saborizante, temperar, llevar la manteca de cacao a 28 °C, combinarla con la cobertura a 30 °C, llenar un molde, retirar excedentes, enfriar y desmoldar.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ejercicio documentado</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Chocolate amargo con cardamomo</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Ingredientes: 450 g de cobertura amarga, 10 g de manteca de cacao y 5 g de cardamomo en polvo.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El procedimiento indica disolver el cardamomo en la manteca de cacao; temperar la cobertura amarga; llevar la manteca a 28 °C sobre el mármol e incorporarla a la cobertura que deberá estar a 30 °C; vaciar sobre un molde limpio, retirar excedentes y enfriar de 10 a 15 minutos; finalmente, desmoldar.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Otro formato</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Mendiants: una pieza sin molde rígido</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">En los Mendiants, la fuente cambia el formato: se tempera la cobertura, se coloca en manga y se hacen moneditas sobre mica de acetato. Antes de que cristalice se coloca la guarnición y se refrigera de ser necesario.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Enjambres</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La cobertura también puede envolver sólidos</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Para los enjambres, la cobertura de leche templada se mezcla con hojuelas de maíz cuidando de no romperlas. Después se vacía sobre una superficie preparada con papel estrella, egapack o plástico, se refrigera y se decora con líneas de cobertura de otro color.</p>
          
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Compara dos formas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Explica la diferencia entre el molde limpio del chocolate con cardamomo y las moneditas sobre acetato de los Mendiants. En ambos casos identifica cuándo interviene el temperado.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">No generalizamos el comportamiento del molde</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La lección se limita a los formatos y temperaturas que la Clase 19 documenta.</p>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">Material de <strong>Curso completo Panaderia y reposteria ISMM.pdf</strong>, organizado pedagógicamente para esta ruta.</p>
        </section>
      </div>
    </CourseShell>
  );
}
