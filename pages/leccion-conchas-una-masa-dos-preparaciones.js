import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '36',
  title: 'Conchas: una masa, dos preparaciones',
  eyebrow: 'Módulo 5 · Lección 36',
  backHref: '/modulo-5',
};

const doughIngredients = [
  '550 g Harina',
  '130 g Azúcar',
  '5 g Sal',
  '15 g Levadura fresca',
  '200 g Huevo',
  '80 g Mantequilla',
  '80 a 130 ml Agua',
];

const whiteTopping = [
  '100 g Manteca vegetal',
  '100 g Azúcar',
  '100 g Harina',
  '20 g Huevo',
];

const darkTopping = [
  '100 g Manteca vegetal',
  '100 g Azúcar',
  '90 g Harina',
  '10 g Cocoa',
  '20 g Huevo',
];

export default function LessonThirtySixPage() {
  return (
    <CourseShell eyebrow={lesson.eyebrow} title={lesson.title} backHref={lesson.backHref} backLabel="Volver al Módulo 5">
      <div className="space-y-8">
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Haz, observa y compara</h2>
          <p className="mt-2 leading-7 text-stone-600">Separa la receta en dos columnas: masa y tapa. Reconstruye qué ocurre con cada preparación antes de que se junten y qué señales debes observar durante el proceso.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica con evidencia de la receta</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué ingredientes pertenecen exclusivamente a la tapa?</p>
            <p>2. ¿Cuántas fermentaciones documenta la secuencia de la masa?</p>
            <p>3. ¿Qué operación convierte las dos preparaciones en una pieza de concha?</p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La pregunta de esta lección</p>
          <h2 className="mt-2 text-2xl font-semibold">
            ¿Qué cambia cuando una misma pieza se construye con una masa fermentada y una preparación de cobertura?
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La receta de <strong>Conchas Tradicionales Mexicanas</strong> separa claramente dos preparaciones:
            la masa y la tapa. La masa se fermenta y se porciona; la tapa se prepara aparte, se coloca sobre la pieza,
            se marca y acompaña al producto hasta el horneado.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Primero: la masa</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">La parte que fermenta</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La fórmula principal contiene harina, azúcar, sal, levadura fresca, huevo, mantequilla y agua.
            La fuente indica que el agua se añade poco a poco hasta obtener una masa suave y lisa.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {doughIngredients.map((item) => (
              <div key={item} className="rounded-xl bg-stone-50 p-4">
                <span className="text-sm font-medium text-stone-500">Masa</span>
                <p className="mt-1 font-semibold text-stone-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">La secuencia de la masa</p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {[
              ['01', 'Mezclar', 'Harina, azúcar, sal, levadura y huevos; después se incorpora la mantequilla.'],
              ['02', 'Ajustar', 'El agua se añade poco a poco hasta obtener una masa suave y lisa.'],
              ['03', 'Fermentar', 'La masa fermenta durante 1 hora.'],
              ['04', 'Porcionar y fermentar', 'Se poncha, se porciona en piezas de 60 g y vuelve a fermentar durante 1 hora.'],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-white p-4">
                <span className="text-sm font-semibold text-amber-700">{number}</span>
                <h3 className="mt-1 font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-700">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Después: la tapa</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una segunda preparación para la misma pieza</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La tapa no se mezcla dentro de la masa principal. Se prepara por separado: primero se acrema la manteca
            con el azúcar y después se agregan los ingredientes secos y el huevo hasta obtener una pasta.
            La fuente indica que se reserva a temperatura ambiente.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm font-medium text-stone-500">Tapa blanca</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">La fórmula documentada</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                {whiteTopping.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </article>

            <article className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
              <p className="text-sm font-medium text-stone-500">Tapa oscura</p>
              <h3 className="mt-2 text-xl font-semibold text-stone-900">La variante con cocoa</h3>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-700">
                {darkTopping.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </article>
          </div>

          <div className="mt-5 rounded-xl border border-dashed border-stone-300 bg-white p-5">
            <p className="text-sm font-medium text-amber-800">Lo que sí podemos comparar</p>
            <p className="mt-2 leading-7 text-stone-700">
              Las dos tapas comparten manteca vegetal, azúcar y huevo. La tapa oscura sustituye parte de la harina
              por cocoa: 90 g de harina y 10 g de cocoa, frente a 100 g de harina en la tapa blanca.
            </p>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">El cierre de la pieza</p>
          <h2 className="mt-2 text-2xl font-semibold">Cubrir, marcar y hornear</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            Una vez preparada la tapa, la fuente indica cubrir las conchas con la pasta, marcar y hornear a
            <strong> 180 °C durante 15 minutos</strong>.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ['1', 'Cubrir', 'La pasta de tapa se coloca sobre las piezas.'],
              ['2', 'Marcar', 'La tapa se marca antes de entrar al horno.'],
              ['3', 'Hornear', '180 °C durante 15 minutos.'],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-white/10 p-4">
                <span className="text-sm font-semibold text-stone-300">{number}</span>
                <h3 className="mt-1 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-200">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Qué debes reconocer</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una pieza, dos preparaciones</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Masa principal</p>
              <p className="mt-2 leading-7 text-stone-700">
                Tiene levadura, fermenta, se poncha, se porciona en piezas de 60 g y vuelve a fermentar.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">Tapa</p>
              <p className="mt-2 leading-7 text-stone-700">
                Se prepara aparte como una pasta, puede ser blanca u oscura, se reserva a temperatura ambiente y
                después cubre y marca las piezas.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Límite de la fuente</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">La receta no explica por qué la tapa toma esa forma.</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            Podemos describir la fórmula, la preparación, el marcado, la fermentación y el horneado documentados.
            La fuente no desarrolla una explicación técnica sobre la función de la tapa, el patrón de marcado o los
            cambios físicos que ocurren durante el horneado, así que esos aspectos no se presentan como hechos
            derivados de esta receta.
          </p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">Reconstruye la receta en dos columnas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Divide una hoja en dos partes: <strong>masa principal</strong> y <strong>tapa</strong>. En la primera,
            escribe ingredientes y etapas de fermentación. En la segunda, registra los ingredientes de la tapa blanca
            y de la tapa oscura, su preparación y el momento en que se incorpora a la pieza.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Puedes leer una concha como una construcción de dos preparaciones.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-100">
            La receta no presenta una sola mezcla: presenta una masa fermentada y una tapa preparada aparte.
            Reconocer esa separación permite seguir el proceso completo sin confundir los ingredientes ni las etapas
            de cada parte.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Fuente de esta lección</p>
          <p className="mt-2 leading-7 text-stone-700">
            Datos de <strong>Conchas Tradicionales Mexicanas</strong> contenidos en <code>data/recetas.js</code>.
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
