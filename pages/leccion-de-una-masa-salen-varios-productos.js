import CourseShell from '../components/course/CourseShell';

const products = [
  {
    name: 'Profiteroles',
    idea: 'La fuente los presenta como una de las aplicaciones de la pasta choux y los acompaña con rellenos y coberturas.',
    finish: 'Relleno y cobertura según la preparación.',
  },
  {
    name: 'Éclairs',
    idea: 'La misma pasta se utiliza para formar una pieza alargada.',
    finish: 'Relleno y cobertura.',
  },
  {
    name: 'Cisnes',
    idea: 'La fuente incluye los cisnes entre las aplicaciones de la pasta choux.',
    finish: 'Relleno y montaje de la pieza.',
  },
  {
    name: 'Religiosas',
    idea: 'También aparecen como una aplicación de la misma pasta.',
    finish: 'Relleno y cobertura.',
  },
];

export default function LessonTwentyPage() {
  return (
    <CourseShell
      eyebrow="Lección 20"
      title="De una masa salen varios productos"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Una técnica no termina cuando sale del horno
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            La pasta choux puede convertirse en productos diferentes sin cambiar la lógica fundamental de la masa.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            La Clase 11 reúne bajo una misma sección cuatro aplicaciones: <strong>profiteroles, cisnes, éclairs y religiosas</strong>.
            La enseñanza importante en este punto no es memorizar cuatro recetas aisladas, sino reconocer que ya dominamos
            una masa y ahora podemos cambiar su formado, relleno y acabado.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-stone-600">
            La frase anterior sobre cambiar formado, relleno y acabado es una organización pedagógica del curso. La fuente
            confirma las cuatro aplicaciones y proporciona rellenos y coberturas para ellas, pero no desarrolla en el texto
            recuperado una ficha técnica completa de cada formado.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Lo que ya sabes</p>
          <h2 className="mt-2 text-2xl font-semibold">La masa sigue siendo la misma protagonista</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            Ya entendiste tres transformaciones: la harina se cocina en la cacerola, el huevo ajusta la pasta y el agua
            aporta el vapor que impulsa el crecimiento. Ahora esa misma base puede llevar a diferentes productos.
          </p>
        </section>

        <section>
          <div className="mb-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Aplicaciones de la Clase 11</p>
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">Cuatro productos, una base técnica</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((product) => (
              <article key={product.name} className="rounded-2xl border border-stone-200 bg-white p-6">
                <p className="text-sm font-medium text-amber-700">{product.name}</p>
                <h3 className="mt-2 text-xl font-semibold text-stone-900">{product.idea}</h3>
                <p className="mt-4 border-t border-stone-100 pt-4 text-sm leading-6 text-stone-600">
                  <strong>Acabado en la fuente:</strong> {product.finish}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">El relleno también cambia la experiencia</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La fuente propone una crema pastelera que se divide en tres partes y se saboriza con vainilla, chocolate y café.
            También incluye una crema de relleno hecha con crema para batir natural y vegetal.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ['Vainilla', 'Una de las tres variantes de crema pastelera indicadas.'],
              ['Chocolate', 'Se obtiene saborizando otra parte de la crema pastelera con chocolate amargo.'],
              ['Café', 'La tercera parte se saboriza con café soluble.'],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl bg-stone-100 p-5">
                <h3 className="font-semibold text-stone-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-2xl bg-amber-50 p-5">
            <p className="font-semibold text-amber-950">Una misma crema, tres perfiles</p>
            <p className="mt-2 leading-7 text-amber-950">
              Aquí aparece una idea que volverá a ser útil en el curso: una preparación base puede generar distintas
              variantes sin tener que aprender desde cero una receta completamente diferente.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Coberturas que completan la pieza</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">
            La Clase 11 también incluye una ganache de chocolate y un glaseado de café. La ganache se prepara calentando
            la crema, la leche y la glucosa, vertiéndolas sobre el chocolate picado y mezclando hasta obtener una mezcla homogénea.
            El glaseado de café utiliza fondant, almíbar y café soluble.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold text-stone-900">Ganache</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                La fuente la presenta como cobertura y señala que debe quedar homogénea, cuidando de no incorporar aire.
              </p>
            </article>
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="font-semibold text-stone-900">Glaseado de café</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                La fuente lo marca como demostración y utiliza fondant, almíbar y café soluble.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-amber-950">¿Qué debes observar?</h2>
          <div className="mt-5 space-y-4">
            <div>
              <p className="font-semibold text-amber-950">1. La base no cambia de identidad</p>
              <p className="mt-1 leading-7 text-amber-950">
                Aunque el producto final tenga otro aspecto, sigue partiendo de la misma lógica de pasta choux que acabas de estudiar.
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-950">2. El formado determina la apariencia</p>
              <p className="mt-1 leading-7 text-amber-950">
                Compara una pieza redonda con una pieza alargada y observa cómo el mismo tipo de masa puede dar productos visualmente diferentes.
                Esta es una lectura pedagógica del ejercicio; la fuente no proporciona aquí un diagrama de formado detallado.
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-950">3. El interior tiene una función</p>
              <p className="mt-1 leading-7 text-amber-950">
                La cavidad que construyó el vapor permite cortar y rellenar las piezas después del horneado.
              </p>
            </div>
            <div>
              <p className="font-semibold text-amber-950">4. El acabado completa el producto</p>
              <p className="mt-1 leading-7 text-amber-950">
                La fuente combina la pasta horneada con rellenos, ganache, glaseado o azúcar glass. No estás aprendiendo solo una masa:
                estás aprendiendo una base que puede convertirse en distintos productos terminados.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>Una técnica puede producir varios productos:</strong> la Clase 11 aplica la pasta choux a profiteroles, cisnes, éclairs y religiosas.</p>
            <p className="leading-7"><strong>El relleno y el acabado amplían las variantes:</strong> la fuente incluye crema pastelera de vainilla, chocolate y café, además de ganache y glaseado de café.</p>
            <p className="leading-7"><strong>La cavidad interior es parte de la lógica de la choux:</strong> el crecimiento producido por el vapor deja el espacio que después permite rellenar las piezas.</p>
            <p className="leading-7"><strong>Ya no estás siguiendo una receta aislada:</strong> estás empezando a reconocer una familia de productos construida a partir de una misma base técnica.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La Clase 11 confirma las cuatro aplicaciones, los rellenos y las coberturas descritos en esta lección.
            La organización como “una base técnica → diferentes productos” y algunas observaciones comparativas son desarrollo pedagógico del curso.
            La fuente recuperada no contiene en esta sección una ficha técnica completa de cada formado individual.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
