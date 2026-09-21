import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '52',
  title: 'Temperado: controlar la cristalización',
  subtitle: 'Seguir las temperaturas y la secuencia de temperado documentadas antes de pasar a piezas macizas y moldeadas.',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 52"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Qué busca la fuente cuando hace oscilar la cobertura entre distintas temperaturas?</h2>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">El temperado es una secuencia, no un número aislado</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">El objetivo documentado es estabilizar los cristales Beta mediante una oscilación de temperaturas. Por eso debes aprender a reconstruir el recorrido completo y relacionarlo con el resultado de la pieza.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera la clasificación de coberturas. Después observa cómo la fuente relaciona temperado con brillo, contracción, desmolde y textura, y cómo diagnostica superficies satinadas o manchas oscuras. Práctica: reconstruye 45 °C → 28 °C en la mitad enfriada → temperatura de trabajo, y después identifica las causas documentadas de una superficie satinada.</p></section>


        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">El temperado como secuencia de temperaturas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La Clase 19 define el temperado como la oscilación de la cobertura de chocolate por diferentes temperaturas con el fin de estabilizar los cristales Beta contenidos en la manteca de cacao.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El documento relaciona el temperado con brillo, facilidad de moldeado, desmoldado, textura crujiente, rotura y contracción.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">La secuencia documentada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Fundir → enfriar → juntar → verificar</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La técnica indicada por la fuente es: fundir el chocolate a 45 °C; enfriar en mármol el 50% a 28 °C; juntar esa parte con el resto que permanece a 45 °C; verificar la temperatura y emplear según el caso.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Temperaturas indicadas</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Oscuro, leche y blanco</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La tabla de la fuente presenta como temperaturas de trabajo 30 °C para oscuro, 29 °C para leche y 27 °C para blanco. También aparecen temperaturas de 45 °C para oscuro, 31 °C para leche y 29 °C para blanco en la secuencia térmica.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Chocolate oscuro: 45 °C → 28 °C en la parte enfriada → 30 °C de trabajo.</p></div>
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Chocolate de leche: 45 °C → 28 °C en la parte enfriada → 29 °C de trabajo.</p></div>
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Chocolate blanco: 45 °C → 28 °C en la parte enfriada → 27 °C de trabajo.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Diagnóstico</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La superficie también cuenta</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente enumera como causas de textura blanca o satinada el mal temperado, mal enfriamiento, molde demasiado caliente, choque térmico, humedad ambiental, temperatura demasiado caliente y suciedad en el molde.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Para manchas oscuras, señala moldes demasiado fríos y establece 20 °C como temperatura correcta del molde.</p>
          
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconstruye la secuencia térmica</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Escribe sin mirar la receta: 45 °C para fundir, 28 °C para enfriar la mitad y después la temperatura de trabajo correspondiente al tipo de chocolate.</p>
        </section>
        
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y reconstruye</h2>
          <p className="mt-2 leading-7 text-stone-600">Sin mirar la receta, reconstruye la secuencia 45 °C → 28 °C → combinación → verificación. Después compara las temperaturas de trabajo indicadas para oscuro, leche y blanco.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Responde con evidencia de la fuente</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué ocurre con el 50% del chocolate durante el enfriamiento?</p>
            <p>2. ¿Qué temperaturas de trabajo documenta la fuente para oscuro, leche y blanco?</p>
            <p>3. ¿Qué resultados relaciona la fuente con un temperado correcto?</p>
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
