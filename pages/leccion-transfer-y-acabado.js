import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '56',
  title: 'Transfer y acabado',
  subtitle: 'Observar cómo el acabado se integra al chocolate después del baño y antes del desmolde o presentación.',
};

export default function LessonPage() {
  return (
    <CourseShell
      eyebrow="Módulo 7 · Lección 56"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-7"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">¿En qué momento entra un transfer y qué relación tiene con la cobertura?</h2>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">El acabado ocupa un momento preciso del proceso</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">En la trufa de vainilla, el transfer aparece después del baño y antes del enfriado final. Esa posición permite estudiar el acabado como parte de la secuencia, no como un adorno separado.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera la diferencia entre cobertura y acabado. Sigue la secuencia película → trufa → película → corte → baño → transfer. Práctica: ordena esos pasos sin mirar la receta y compáralos con las guarniciones y decoraciones documentadas en la Clase 19.</p></section>


        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Qué documenta la Clase 21</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">El transfer aparece como una etapa de acabado</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El objetivo de la Clase 21 es elaborar chocolates de corte, aprender el uso de transfer y aplicar la técnica para chocolates de tipo trufa.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">En la trufa de vainilla, el transfer no sustituye la cobertura: aparece después del baño del bombón y antes del enfriado final y retiro del transfer.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Secuencia</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Película → trufa → película → corte → baño → transfer</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Primero se realiza una película fina de cobertura amarga sobre acetato. Sobre ella se coloca la preparación de trufa de 1 cm de altura. Después se enfría, se realiza otra película fina de chocolate amargo y se corta en cuadrados en primera cristalización.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Los cuadrados se bañan, se coloca el transfer sobre los bombones, se enfrían y finalmente se retira el transfer.</p>
          
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Otros acabados de la Clase 19</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">El acabado no siempre es transfer</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Los Mendiants terminan con guarniciones colocadas antes de la cristalización. Las fresas cubiertas utilizan chocolate blanco y chocolate obscuro para decorar. Los enjambres reciben líneas de cobertura de otro color después de refrigerarse.</p>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Estos ejemplos permiten comparar acabados sin convertirlos en una sola técnica: guarnición, decoración con otra cobertura y transfer aparecen en momentos diferentes del proceso.</p>
          
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Marca el momento exacto</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">En la receta de trufa de vainilla, identifica en qué paso se corta, en qué paso se baña y en qué paso se coloca el transfer.</p>
        </section>
        
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y reconstruye</h2>
          <p className="mt-2 leading-7 text-stone-600">Ordena de memoria la secuencia película → trufa → película → corte → baño → transfer. Después localiza en qué punto aparece el transfer y qué ocurre después.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Responde con evidencia de la fuente</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿En qué momento entra el transfer?</p>
            <p>2. ¿Qué operaciones ocurren antes del transfer?</p>
            <p>3. ¿Qué otros acabados documenta la fuente además del transfer?</p>
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
