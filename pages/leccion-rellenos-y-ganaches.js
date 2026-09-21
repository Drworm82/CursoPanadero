import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '54',
  title: 'Rellenos y ganaches',
  subtitle: 'Entender la transición de una cobertura exterior a una preparación que vive dentro de un chocolate relleno.',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 54"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Cómo se construye un relleno cuando el chocolate ya no es solamente la cobertura?</h2>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Un chocolate relleno tiene más de una estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Las preparaciones de bombonería permiten distinguir una cobertura exterior de un relleno interior. La lección busca que puedas leer ambos como componentes de una misma pieza.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera el temperado y el trabajo de coberturas. Después observa cómo la preparación del relleno y su incorporación se relacionan con el cierre del conjunto. Práctica: dibuja el corte de un bombón y etiqueta cobertura, relleno y cierre; después reconstruye el orden de trabajo.</p></section>


        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 20</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">El relleno aparece como una segunda preparación</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La Clase 20 trabaja chocolates rellenos y refuerza la elaboración de ganache. La estructura se repite en varios ejercicios: preparar un relleno, disponer una cobertura previamente temperada en el molde y después rellenar.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">En los bombones de caramelo y naranja, el relleno comienza con un caramelo y termina incorporando chocolate de leche y chocolate amargo.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Bombones de caramelo y naranja</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Caramelo → crema infusionada → chocolate</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Ingredientes principales del relleno: 25 g de azúcar, 37 g de glucosa, 175 g de crema para batir, 85 g de chocolate de leche, 62 g de chocolate semi amargo, ralladura de una naranja y una rama de canela. Los cascos utilizan 500 g de chocolate amargo.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El procedimiento indica fundir azúcar y glucosa hasta caramelo ámbar, añadir la crema caliente infusionada con canela y cáscara de naranja, mezclar y enfriar. Después se funden los chocolates y se incorporan a la preparación; se coloca en manga y se rellenan los moldes previamente decorados con chocolate temperado.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Fruta de la pasión</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Ganache y cascos de chocolate blanco</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente utiliza 50 g de pulpa de maracuyá, 5 g de manteca de cacao, 25 g de glucosa, 140 g de chocolate semi amargo y 25 g de fondant para la mezcla; los cascos utilizan 500 g de chocolate blanco, con color amarillo liposoluble y manteca de cacao para la decoración.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Se prepara la ganache, se tempera el chocolate blanco y se rellenan moldes de policarbonato. La fuente indica dejar solidificar, rellenar, tapar, dejar enfriar a temperatura ambiente y desmoldar.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Trufa de café</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una ganache que termina en emulsión</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fórmula utiliza 320 g de chocolate semi amargo, 100 g de crema para batir, 30 g de trimoline, 40 g de mantequilla y 2 g de café.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El procedimiento indica infusionar la crema con el café, calentar la crema con la trimoline, vaciar sobre el chocolate y emulsionar; después se incorpora la mantequilla con ayuda del mixer.</p>
          
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Separa casco y relleno</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">En uno de los ejercicios de la Clase 20 identifica qué ingredientes pertenecen al casco y cuáles al relleno. Después escribe la secuencia hasta llegar al molde relleno.</p>
        </section>
        
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y reconstruye</h2>
          <p className="mt-2 leading-7 text-stone-600">Dibuja un bombón en corte y separa cobertura, relleno y cierre. Después reconstruye el orden de trabajo de una de las preparaciones documentadas.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Responde con evidencia de la fuente</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué diferencia existe entre la cobertura exterior y el relleno interior?</p>
            <p>2. ¿Qué operaciones aparecen antes de incorporar el relleno?</p>
            <p>3. ¿Qué parte de la secuencia corresponde al cierre del conjunto?</p>
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
