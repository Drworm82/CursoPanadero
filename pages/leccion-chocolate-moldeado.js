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
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Del chocolate controlado a una pieza con forma</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">El moldeado convierte la cobertura en una pieza concreta. La lectura pedagógica consiste en seguir la relación entre chocolate, molde, enfriado y desmolde, sin separar esas operaciones.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera el temperado. Ahora identifica en una pieza moldeada qué momento corresponde a preparar el molde, trabajar la cobertura, formar la pieza y permitir su cristalización. Práctica: señala qué parte depende de la cobertura, cuál del molde y cuál del enfriado; después explica qué observarías al desmoldar.</p></section>


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
        
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y reconstruye</h2>
          <p className="mt-2 leading-7 text-stone-600">Reconstruye el ejercicio de chocolate amargo con cardamomo como una línea de pasos: saborizante, temperado, preparación del molde, llenado, retiro de excedentes, enfriado y desmolde.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Responde con evidencia de la fuente</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué función ocupa el molde dentro de la secuencia documentada?</p>
            <p>2. ¿Qué temperatura de molde indica la fuente?</p>
            <p>3. ¿Qué observación permite comprobar el resultado al desmoldar?</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">Material de <strong>Curso completo Panaderia y reposteria ISMM.pdf</strong>, organizado pedagógicamente para esta ruta.</p>
        </section>
      </div>
    </CourseShell>
  );
}
