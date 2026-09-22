import CourseShell from '../components/course/CourseShell';

const lesson = { number: '49', title: 'Pasteles de fiesta', subtitle: 'Panqué de aceite, fondant, betún de manteca y royal icing · Clase 17' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 6 · Lección 49" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-6" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo de la clase</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-800">Trabajar un batido para pastel de fiesta y las preparaciones de cobertura y decoración documentadas: fondant, betún de manteca y royal icing. La clase también aborda la técnica para crear flores y hojas.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Panqué de aceite</h2>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 leading-7 text-stone-700">
            <li>Huevos 3</li><li>Azúcar 90 g</li><li>Aceite de maíz 70 ml</li><li>Harina 130 g</li><li>Polvo para hornear 1 g</li><li>Leche 70 ml</li><li>Ralladura de cítrico 1 pieza</li>
          </ul>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Batir huevos y azúcar hasta blanquear.</li>
            <li>Agregar el aceite lentamente.</li>
            <li>Cernir harina y polvo para hornear e incorporarlos.</li>
            <li>Añadir leche y ralladura.</li>
            <li>Llenar un molde engrasado hasta 3/4 de su capacidad.</li>
            <li>Hornear a 200 °C durante 25 minutos.</li>
          </ol>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-stone-900">Fondant</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Gelatina en polvo 6 g</li><li>Agua fría 30 g</li><li>Jarabe de maíz 80 g</li><li>Glicerina 8 g</li><li>Azúcar glass 500 g</li><li>Tylos 10 g, opcional</li></ul>
            <p className="mt-4 leading-7 text-stone-700">Hidratar la gelatina. Preparar el jarabe con gelatina, jarabe de maíz y glicerina. Añadir al azúcar glass, amasar, dejar reposar y colorear. Añadir tylos si se desea endurecer.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-stone-900">Betún de manteca</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Manteca vegetal 115 g</li><li>Saborizante 1 cucharadita</li><li>Agua 1 cucharada</li><li>Azúcar glass 250 g</li><li>Merengue en polvo 1 cucharada</li><li>Sal 1/4 cucharadita</li><li>Glicerina 1 cucharadita</li></ul>
            <p className="mt-4 leading-7 text-stone-700">Mezclar todos los ingredientes hasta obtener una preparación homogénea y reservar.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-stone-900">Royal icing</h2>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Azúcar glass 250 g</li><li>Merengue en polvo 25 g</li><li>Agua 70 g (50–70 g)</li></ul>
            <p className="mt-4 leading-7 text-stone-700">Batir a velocidad media aproximadamente 10 minutos, hasta alcanzar una preparación media y totalmente blanca.</p>
          </article>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Decoración</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Flores y hojas</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente señala la técnica para crear flores y hojas, pero remite a la demostración. No se añade aquí un procedimiento externo para sustituir esa demostración.</p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-stone-700">
            <li>¿Qué temperatura y tiempo se documentan para el panqué de aceite?</li>
            <li>¿Qué ingredientes forman el fondant?</li>
            <li>¿Qué ingrediente aparece como opcional en el fondant?</li>
            <li>¿Qué diferencia de preparación se documenta entre betún de manteca y royal icing?</li>
            <li>¿Qué parte de la decoración depende de la demostración?</li>
          </ol>
        </section>
      </div>
    </CourseShell>
  );
}
