import CourseShell from '../components/course/CourseShell';

const lesson = { number: '45', title: 'Masas Laminadas I', subtitle: 'Hojaldre clásico, mil hojas, orejas y rehiletes · Clase 12' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 6 · Lección 45" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-6" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo de la clase</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-800">Construir y reconstruir el hojaldre clásico mediante amasijo, empaste, vueltas y reposos; después reconocer cómo esa misma preparación aparece en mil hojas, orejas y rehiletes documentados.</p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Recupera</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de trabajar, identifica la estructura</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">El hojaldre clásico es el caso principal de esta lección. Sin mirar la receta, reconstruye sus etapas a partir de lo que ya sabes del laminado. Después verifica con la fuente qué es nuevo. Las otras tres preparaciones funcionan como aplicaciones para reconocer cómo una misma base cambia de formato y acabado.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Hojaldre clásico</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La clase separa la preparación en amasijo y empaste. Conservamos las cantidades y la secuencia documentadas.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-5"><h3 className="font-semibold text-stone-900">Amasijo</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Agua: 180 ml</li><li>Harina: 300 g</li><li>Sal: 6 g</li></ul></div>
            <div className="rounded-2xl bg-amber-50 p-5"><h3 className="font-semibold text-amber-950">Empaste</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7 text-amber-950"><li>Margarina para hojaldre: 250 g</li></ul></div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Procedimiento documentado</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Hacer una masa suave.</li>
            <li>Dejar reposar 15 minutos.</li>
            <li>Ablandar la grasa y formar un cuadrado.</li>
            <li>Formar una bola con la masa, hacer un corte en cruz, extender cuatro lados y dejar el centro más grueso.</li>
            <li>Colocar el empaste en el centro y cerrar formando un paquete.</li>
            <li>Extender en forma rectangular y dar 6 vueltas sencillas o 4 vueltas dobles, dejando reposar 10 minutos entre cada vuelta.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Construye la base y reconoce sus aplicaciones</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Dibuja el recorrido del hojaldre clásico desde el amasijo hasta las vueltas. Marca los reposos y distingue una vuelta sencilla de una doble según la fuente. Después elige dos aplicaciones —mil hojas, orejas o rehiletes— y señala qué cambia respecto de la base.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Mil hojas con crema pastelera y fresas</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div><h3 className="font-semibold text-stone-900">Crema pastelera</h3><ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Leche 350 g</li><li>Azúcar 150 g</li><li>Yemas 3</li><li>Fécula de maíz 40 g</li><li>Ron 50 ml</li><li>Crema para batir 350 g</li><li>Gelatina 12 g, hidratada con 60 g de agua</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Decoración</h3><ul className="mt-2 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Hojaldre clásico: 1 receta</li><li>Fresas 200 g</li><li>Almendras fileteadas 60 g</li><li>Azúcar glass 100 g</li></ul></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Extender el hojaldre delgado y formar placas rectangulares de 20 × 12 cm.</li>
            <li>Hornear a 200 °C hasta que esté dorado y enfriar sobre rejilla.</li>
            <li>Preparar la crema pastelera; incorporar la crema semibatida, la gelatina y el ron.</li>
            <li>Montar alternando crema pastelera, fresas fileteadas y placas crujientes de hojaldre.</li>
            <li>Terminar con almendras fileteadas y azúcar glass.</li>
          </ol>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-stone-900">Orejas</h2>
            <p className="mt-3 leading-7 text-stone-700">Hojaldre y 300 g de azúcar. Extender a 0.5 cm, colocar azúcar sobre mesa y masa, enrollar suavemente desde dos lados, cortar y congelar. Rebanar a 0.5 cm, colocar sobre charola azucarada y hornear a 200 °C hasta tomar color. Dar vuelta y terminar; retirar inmediatamente.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-stone-900">Rehiletes</h2>
            <p className="mt-3 leading-7 text-stone-700">Hojaldre, 50 g de azúcar glass y 10 g de crema pastelera opcional. Extender a 1 cm, cortar cuadrados de aproximadamente 8 × 8 cm, cortar las esquinas y formar el rehilete. Hornear a 200 °C; después añadir azúcar glass y, si se desea según la receta, crema pastelera.</p>
          </article>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica la secuencia</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-stone-700">
            <li>¿Qué cantidades forman el amasijo y cuáles forman el empaste?</li>
            <li>¿Cuánto reposo se documenta entre las vueltas?</li>
            <li>¿Qué cambia entre el formado de dos aplicaciones y qué permanece igual de la base de hojaldre?</li>
            <li>¿Qué temperatura de horneado aparece en las preparaciones de esta clase?</li>
          </ol>
        </section>
      </div>
    </CourseShell>
  );
}
