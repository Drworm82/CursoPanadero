import CourseShell from '../components/course/CourseShell';

export default function LessonTwentyOnePage() {
  return (
    <CourseShell
      eyebrow="Lección 21"
      title="Crema y relleno también construyen el producto"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            La masa ya hizo su parte
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Una pieza de choux no termina cuando sale del horno.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Ya viste cómo la pasta choux se transforma en una pieza hueca y cómo una misma masa puede tomar
            distintas formas. La fuente da el siguiente paso: cortar las piezas ya frías y rellenarlas con una
            crema elegida. El relleno no es un añadido aislado; es parte de cómo se convierte una pieza técnica
            en un producto terminado.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">La estructura y el relleno trabajan juntos</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            La fuente propone varias posibilidades para una misma pieza de choux: chantilly, crema pastelera,
            chiboust, Paris Brest o mantequilla. En la misma clase desarrolla una crema pastelera que puede
            dividirse y aromatizarse en vainilla, chocolate o café.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · La pieza</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Choux horneada</h3>
            <p className="mt-3 leading-7 text-stone-700">
              Debe enfriarse completamente antes de cortarla. La fuente indica utilizar un cuchillo de pan
              para abrir las figuras por la mitad.
            </p>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">2 · El relleno</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Crema pastelera</h3>
            <p className="mt-3 leading-7 text-amber-950">
              La clase desarrolla una crema a base de leche, azúcar, yemas y fécula de maíz, que después
              se divide en tres partes para dar sabor a vainilla, chocolate y café.
            </p>
          </article>

          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · El acabado</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Cobertura</h3>
            <p className="mt-3 leading-7 text-stone-700">
              La fuente contempla azúcar glass o un glaseado. Para estas aplicaciones también presenta
              ganache y un glaseado de café como preparaciones de la clase.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>

          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El interior de la pieza</p>
              <p className="mt-2 leading-7 text-amber-950">
                Abre una pieza ya fría y observa el espacio interior que produjo la cocción.
                Ese espacio es el que permite introducir el relleno después del horneado.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. La consistencia de la crema</p>
              <p className="mt-2 leading-7 text-stone-700">
                En la crema pastelera, observa el cambio desde una mezcla líquida hasta una crema que,
                después de hervir durante el tiempo indicado por la fuente, puede enfriarse y utilizarse
                como relleno.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. El mismo relleno puede cambiar de sabor</p>
              <p className="mt-2 leading-7 text-stone-700">
                La fuente separa la crema pastelera en tres partes y las saboriza con vainilla, chocolate
                y café. Observa que no hace falta cambiar la base completa para obtener las tres variantes.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. El acabado llega al final</p>
              <p className="mt-2 leading-7 text-stone-700">
                Después del relleno, la fuente propone azúcar glass o un glaseado. Observa la diferencia
                entre una pieza simplemente rellena y una pieza que además recibe un acabado exterior.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Una misma base, distintas decisiones</p>
          <p className="mt-3 leading-7 text-amber-950">
            La clase presenta una relación sencilla: <strong>una masa → distintas formas → distintos rellenos y acabados</strong>.
            La pasta choux puede rellenarse con varias cremas y terminarse con azúcar glass o glaseado.
            Esto permite entender que el producto final no depende únicamente de la masa que se hornea.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Práctica guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Crema pastelera para rellenar choux</h2>
          <p className="mt-2 leading-7 text-stone-600">
            La fuente incluye la crema pastelera dentro de la preparación de rellenos y coberturas de la Clase 11.
            Puedes volver a la práctica de pasta choux para relacionar el relleno con la pieza que acabas de estudiar.
          </p>
          <a
            href="/receta-pasta-choux"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Abrir práctica de choux →
          </a>
        </section>

        
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica y reconstruye</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. 1. ¿Qué condición debe cumplir la pieza de choux antes de cortarla y rellenarla?</p>
            <p>2. 2. ¿Qué tres variantes de crema pastelera presenta la fuente?</p>
            <p>3. 3. Ordena: enfriar la pieza → cortar → rellenar → aplicar el acabado.</p>
          </div>
        </section>
<section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>La pieza no termina en el horno:</strong> primero se enfría, después se corta y se rellena.</p>
            <p className="leading-7"><strong>La crema también tiene estructura:</strong> la crema pastelera pasa de una mezcla líquida a una preparación que puede utilizarse como relleno.</p>
            <p className="leading-7"><strong>Una misma base admite variantes:</strong> la crema pastelera de la fuente se divide para obtener versiones de vainilla, chocolate y café.</p>
            <p className="leading-7"><strong>El acabado completa la pieza:</strong> azúcar glass o glaseado cambian su presentación final.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La Clase 11 especifica las cantidades y el procedimiento de la crema pastelera. También enumera
            chantilly, chiboust, Paris Brest y mantequilla como opciones de relleno, pero no desarrolla en esta
            sección el procedimiento completo de cada una. La lección conserva esa distinción y no añade procesos
            que la fuente no presenta.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
