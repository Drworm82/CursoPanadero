import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '37',
  title: 'Pan de pulque: otra ruta de fermentación',
  eyebrow: 'Módulo 5 · Lección 37',
  backHref: '/modulo-5',
};

const ingredients = [
  '7 pzas Huevo',
  '150 ml Pulque natural',
  '250 g Azúcar moscabado',
  '500 g Harina (cernida 3 veces)',
  '300 g Mantequilla fundida (fría)',
  '15 g Levadura fresca',
];

export default function LessonThirtySevenPage() {
  return (
    <CourseShell eyebrow={lesson.eyebrow} title={lesson.title} backHref={lesson.backHref} backLabel="Volver al Módulo 5">
      <div className="space-y-8">
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y compara</h2>
          <p className="mt-2 leading-7 text-stone-600">Reconstruye la receta en cuatro momentos: batido, incorporación, fermentación y horneado. Después compárala con la secuencia de las conchas.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica con evidencia de la receta</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué ingrediente líquido se incorpora en forma de hilo durante el batido?</p>
            <p>2. ¿Qué señal indica que la fermentación terminó según la fuente?</p>
            <p>3. ¿Qué diferencia de secuencia puedes demostrar frente a las conchas?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La pregunta de esta lección</p>
          <h2 className="mt-2 text-2xl font-semibold">
            ¿Qué podemos reconocer cuando una masa fermentada cambia su fórmula y su secuencia de preparación?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            El <strong>Pan de Pulque con Sabor Tradicional</strong> presenta una fórmula diferente a la de las
            conchas y una secuencia propia de mezcla, fermentación y horneado. Aquí vamos a leer esa receta paso
            a paso, sin añadir procesos que la fuente no documenta.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">La fórmula</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una preparación con seis componentes documentados</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ingredients.map((item) => (
              <div key={item} className="rounded-xl bg-stone-50 p-4">
                <p className="text-sm font-medium text-stone-500">Ingrediente</p>
                <p className="mt-1 font-semibold text-stone-900">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">Dos elementos llaman especialmente la atención en la lectura de la receta.</p>
            <p className="mt-2 leading-7 text-amber-950">
              La fórmula incorpora <strong>pulque natural</strong> y <strong>mantequilla fundida y fría</strong>,
              además de huevo, azúcar moscabado, harina y levadura fresca. Esta observación describe la fórmula;
              no implica por sí sola una explicación sobre la función técnica de cada ingrediente.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">La secuencia</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">La receta empieza con las claras y el pulque</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ['01', 'Batir las claras', 'La receta indica batir las claras y agregar el pulque en forma de hilo durante 5–8 minutos.'],
              ['02', 'Incorporar el resto', 'Después se añaden poco a poco las yemas, el azúcar, la harina, la mantequilla y la levadura disuelta.'],
              ['03', 'Fermentar', 'La mezcla se deja fermentar hasta que duplique su tamaño.'],
              ['04', 'Hornear', 'Se vierte en un molde engrasado y enharinado y se hornea a 200 °C durante 25–30 minutos.'],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-2xl bg-white p-5">
                <span className="text-sm font-semibold text-amber-700">{number}</span>
                <h3 className="mt-1 text-lg font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 leading-7 text-stone-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Un punto de comparación</p>
          <h2 className="mt-2 text-2xl font-semibold">La fermentación aparece, pero la receta no se organiza como las conchas.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            En las conchas documentadas en la lección anterior, la masa fermenta una hora, se poncha, se porciona
            en piezas de 60 g y vuelve a fermentar antes de cubrirse y marcarse. En el pan de pulque, la fuente
            indica dejar fermentar la <strong>mezcla</strong> hasta que duplique su tamaño y después pasarla al
            molde para hornear.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            La comparación permite reconocer una diferencia de secuencia documentada: aquí no aparece un paso de
            porcionado ni una segunda fermentación antes del horneado.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Qué observar</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">No confundir fórmula con explicación</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Lo que sí sabemos</p>
              <p className="mt-2 leading-7 text-stone-700">
                Qué ingredientes contiene la receta, en qué orden se incorporan, que fermenta hasta duplicar su
                tamaño y las condiciones de horneado indicadas.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Lo que podemos comparar</p>
              <p className="mt-2 leading-7 text-stone-700">
                La secuencia del pan de pulque frente a la secuencia documentada de las conchas.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Lo que la receta no explica</p>
              <p className="mt-2 leading-7 text-stone-700">
                No desarrolla el origen del pulque, la razón histórica de la fórmula ni una explicación técnica
                detallada de cómo cada ingrediente modifica la masa.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Haz una comparación de secuencias</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            En una hoja, coloca dos columnas: <strong>Conchas</strong> y <strong>Pan de pulque</strong>.
            En cada columna registra mezcla, fermentación, formado y horneado únicamente cuando la receta lo
            documente. Después marca qué etapa aparece en una receta y no aparece en la otra.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">El nombre tradicional no sustituye la evidencia de la receta.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Esta lección trabaja con la fórmula y el procedimiento de <strong>Pan de Pulque con Sabor Tradicional</strong>.
            La fuente no aporta aquí una explicación histórica o cultural amplia sobre el producto, ni detalla por qué
            la receta utiliza exactamente esta secuencia. Por eso esas cuestiones no se presentan como conclusiones.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Puedes leer el pan de pulque como otra organización del proceso fermentado.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            La receta combina sus ingredientes mediante una secuencia específica, deja fermentar la mezcla hasta
            duplicarla y termina en un molde antes del horneado. Compararla con las conchas permite observar que
            dos productos documentados con levadura pueden presentar secuencias distintas.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">
            Datos de <strong>Pan de Pulque con Sabor Tradicional</strong> contenidos en <code>data/recetas.js</code>.
            La comparación con Conchas Tradicionales Mexicanas utiliza también la receta documentada en ese mismo archivo.
            La organización pedagógica de la lección es propia de esta ruta.
          </p>
          <a
            href="/modulo-5"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Volver al Módulo 5 →
          </a>
        </section>
      </div>
    </CourseShell>
  );
}
