import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '57',
  title: 'Ganaches avanzadas: trimolina, sorbitol y emulsión',
  subtitle: 'Cerrar el módulo con tres preparaciones donde la fuente hace explícitos la trimolina, el sorbitol y la emulsión.',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 57"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Qué cambia cuando la fuente introduce ingredientes específicos para construir y estabilizar una ganache?</h2>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Leer una ganache como una formulación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Las preparaciones avanzadas permiten observar cómo aparecen trimolina y sorbitol dentro de fórmulas concretas. El objetivo es comprender la organización de la preparación documentada, no convertirla en una regla universal.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera el trabajo de rellenos y ganaches. Identifica qué componentes aparecen, qué se incorpora primero y qué cambios presenta la fórmula respecto de preparaciones anteriores. Práctica: compara una ganache anterior con una de esta clase y registra qué componentes cambian, cuáles permanecen y en qué momento se incorporan.</p></section>


        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 22</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La ganache deja de ser una fórmula única</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La Clase 22 trabaja chocolates rellenos y presenta tres rellenos: ganache de limón, relleno de mezcal y relleno de pistache. En dos de ellos el objetivo menciona explícitamente el uso de trimolina o sorbitol y la correcta emulsión de la mantequilla.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ganache de limón</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Dos jarabes que se encuentran</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Ingredientes: 60 g de crema para batir, 40 g de jugo de limón, ralladura de 2 piezas, 130 g de chocolate de leche, 50 g de chocolate obscuro, 20 g de mantequilla, 20 g de manteca de cacao, 20 g de trimoline, 10 g de sorbitol y 500 g de chocolate de leche para los cascos.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El procedimiento indica hervir crema, trimoline y sorbitol; aparte hervir jugo y ralladura y juntar los dos jarabes. Después se incorporan los chocolates y la manteca picados en el turbo, se agregan los jarabes hasta conseguir una ganache lisa y se incorpora la mantequilla. Finalmente se rellenan los moldes, se tapan, refrigeran y desmoldan.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Relleno de mezcal</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Caramelo, jugo y chocolate</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fórmula utiliza 100 g de azúcar, 60 g de jugo de uva, 100 g de chocolate de leche, 100 g de chocolate 50%, 40 g de mezcal, 45 g de mantequilla y 500 g de cobertura blanca para los cascos.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Se hace un caramelo con el azúcar, se incorpora el jugo de uva, después el chocolate picado para hacer una ganache y finalmente el mezcal. Se enfría y se rellenan los moldes previamente preparados con cobertura blanca.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Relleno de pistache</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Emulsionar antes y después de la mantequilla</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Ingredientes: 60 g de crema para batir, 10 g de sorbitol, 140 g de chocolate blanco, 10 g de manteca de cacao, 40 g de pasta de pistache, 15 g de marrasquino, 15 g de mantequilla y 500 g de chocolate obscuro 50% para los cascos.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El procedimiento indica hervir crema, sorbitol y pasta de pistache; verter sobre la cobertura y la manteca previamente picadas; emulsionar correctamente; adicionar el licor y la mantequilla; volver a emulsionar; enfriar y rellenar los moldes.</p>
          
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Compara las tres ganaches</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Identifica dónde aparece trimolina, dónde aparece sorbitol, cuándo se incorpora la mantequilla y qué rellenos terminan dentro de cascos de chocolate.</p>
        </section>
        
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y reconstruye</h2>
          <p className="mt-2 leading-7 text-stone-600">Compara una ganache anterior con una de esta lección. Registra qué ingredientes cambian, cuáles permanecen y en qué momento se incorporan. No conviertas la comparación en una regla universal.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Responde con evidencia de la fuente</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿En qué preparaciones aparecen trimolina o sorbitol?</p>
            <p>2. ¿Qué papel ocupa la emulsión dentro de los procedimientos documentados?</p>
            <p>3. ¿Qué diferencia de formulación puedes comprobar directamente en las recetas?</p>
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
