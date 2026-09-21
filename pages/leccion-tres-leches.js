import CourseShell from '../components/course/CourseShell';

export default function LessonFifteenPage() {
  return (
    <CourseShell
      eyebrow="Lección 16"
      title="Tres leches: cuando una masa recibe humedad"
      backHref="/modulo-3"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ahora cambia lo que recibe el bizcocho</p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Primero construimos una masa ligera. Ahora vamos a darle humedad.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Ya viste cómo el huevo puede construir volumen y cómo una plancha puede conservar flexibilidad.
            En el pastel de tres leches aparece otra característica de las masas batidas ligeras que señala la fuente:
            <strong> absorben perfectamente los jarabes</strong>.
          </p>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">La idea central</p>
          <h2 className="mt-2 text-2xl font-semibold">Una masa ligera también puede recibir humedad</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-100">
            El genoise se hornea primero y después se corta en tres partes. El jarabe de tres leches se prepara aparte
            y se aplica sobre cada capa; la fuente indica esperar a que se absorba antes de continuar con la crema y la fruta.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">1 · Construir</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Genoise</h3>
            <p className="mt-3 leading-7 text-stone-700">
              Se parte del mismo principio trabajado en las lecciones anteriores: huevos + azúcar hasta punto listón y harina incorporada suavemente.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-sm font-medium text-amber-800">2 · Transformar</p>
            <h3 className="mt-2 text-xl font-semibold text-amber-950">Tres leches</h3>
            <p className="mt-3 leading-7 text-amber-950">
              Leche evaporada, media crema y leche condensada se mezclan y licúan para formar el jarabe que recibirá el bizcocho.
            </p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">3 · Montar</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">Absorber y repetir</h3>
            <p className="mt-3 leading-7 text-stone-700">
              Cada capa se moja, se espera a que absorba y después recibe crema y fruta. La operación se repite tres veces.
            </p>
          </article>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">¿Qué debes observar?</h2>
          <div className="mt-5 space-y-5">
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">1. El bizcocho antes del jarabe</p>
              <p className="mt-2 leading-7 text-amber-950">
                Observa la estructura del genoise ya horneado y cortado. Esta es la base seca y ligera que va a recibir el jarabe.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">2. Qué ocurre cuando agregas las tres leches</p>
              <p className="mt-2 leading-7 text-stone-700">
                Mira cómo desaparece progresivamente el líquido de la superficie mientras la capa lo absorbe.
                La fuente indica expresamente esperar a que se absorban antes de poner la crema y la fruta.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">3. La diferencia entre mojar y montar</p>
              <p className="mt-2 leading-7 text-stone-700">
                El montaje no consiste en poner todos los componentes de una sola vez. La fuente establece una secuencia:
                capa de bizcocho → tres leches → esperar absorción → crema y fruta → repetir.
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-5">
              <p className="font-semibold text-stone-900">4. La repetición construye el pastel</p>
              <p className="mt-2 leading-7 text-stone-700">
                Después de la primera capa, la misma operación se repite dos veces más y finalmente se cubre por completo.
                Observa cómo una preparación sencilla se convierte en un producto terminado mediante una secuencia de capas.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Lo que esta lección añade al módulo</p>
          <p className="mt-3 leading-7 text-amber-950">
            Hasta ahora el foco estaba en <strong>construir y conservar volumen</strong>. Aquí aparece una segunda capacidad:
            reconocer que una masa batida ligera puede diseñarse para recibir un jarabe después de la cocción.
            La fuente describe precisamente estas masas como esponjosas, muy ligeras y capaces de absorber perfectamente cualquier jarabe.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6">
          <p className="text-sm font-medium text-amber-800">Práctica guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Tres leches: construir, mojar y montar</h2>
          <p className="mt-2 leading-7 text-stone-600">
            La fuente presenta el pastel de tres leches completo como DEMO. Esta práctica conserva la preparación completa
            para que puedas estudiar la relación entre el genoise, el jarabe y el montaje.
          </p>
          <a
            href="/receta-tres-leches"
            className="mt-5 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white hover:bg-stone-800"
          >
            Abrir práctica →
          </a>
        </section>

        
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica y reconstruye</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. 1. ¿Qué preparación recibe el jarabe de tres leches y en qué momento?</p>
            <p>2. 2. ¿Qué señal indica que puedes continuar después de aplicar el jarabe?</p>
            <p>3. 3. Reconstruye la secuencia desde el genoise hasta la incorporación de crema y fruta.</p>
          </div>
        </section>
<section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Al terminar</p>
          <h2 className="mt-2 text-2xl font-semibold">Lo que debes llevarte</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            <p className="leading-7"><strong>El genoise se construye primero:</strong> el volumen se consigue con el batido y se fija durante la cocción.</p>
            <p className="leading-7"><strong>El jarabe llega después:</strong> las tres leches se mezclan aparte y se aplican al bizcocho ya horneado.</p>
            <p className="leading-7"><strong>La absorción forma parte del proceso:</strong> la fuente indica esperar antes de añadir crema y fruta.</p>
            <p className="leading-7"><strong>El montaje tiene una lógica:</strong> repetir la secuencia de capa, jarabe, absorción, crema y fruta construye el pastel.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            El material original marca el pastel de tres leches como <strong>“DEMO DE TODO EL PASTEL”</strong>.
            La práctica del curso conserva esa condición y la utiliza aquí como aplicación de los principios estudiados en las lecciones 12 a 14.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
