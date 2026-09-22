import CourseShell from '../components/course/CourseShell';

const lesson = { number: '50', title: 'Postres Mexicanos', subtitle: 'Buñuelos de viento, Torta de Cielo, Gaznates y Rompope de Santa Clara · Clase 18' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 6 · Lección 50" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-6" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-800">Reconocer cuatro preparaciones de postres mexicanos y seguir sus diferentes rutas: fritura, horneado, formado de una masa y cocción de una preparación de leche y yemas.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Buñuelos de viento / de molde</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div><h3 className="font-semibold">Masa</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Huevos 2</li><li>Agua 15 ml</li><li>Aceite vegetal 30 ml</li><li>Vainilla 5 ml</li><li>Leche 250 ml</li><li>Harina cernida 125 g</li><li>Sal 3 g</li><li>Polvo para hornear 3 g</li><li>Azúcar 25 g</li><li>Azúcar para espolvorear 100 g</li><li>Aceite para freír 1 L</li><li>Molde</li></ul></div>
            <div><h3 className="font-semibold">Miel de piloncillo y guayaba</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Piloncillo 1 pieza</li><li>Guayaba 1 pieza</li><li>Canela 5 g</li><li>Anís estrella 5 g</li><li>Agua 500 ml</li></ul></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Dejar reposar el batido durante media hora.</li>
            <li>Calentar el molde y el aceite.</li>
            <li>Introducir el molde en el batido y después en el aceite para freír.</li>
            <li>No dorar en exceso; sacudir el exceso y escurrir.</li>
            <li>Espolvorear con azúcar.</li>
            <li>Para la miel, colocar todos los ingredientes y reducir.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Torta de Cielo</h2>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Almendra en polvo 250 g</li><li>Harina 30 g</li><li>Huevos 5</li><li>Azúcar 250 g</li><li>Fécula de maíz 15 g</li><li>Azúcar glass 20 g</li><li>Amaretto 15 ml</li></ul>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Mezclar los ingredientes secos.</li>
            <li>Batir las yemas con la mitad del azúcar hasta punto de listón y añadir el licor.</li>
            <li>Incorporar la mezcla de almendra.</li>
            <li>Montar las claras a punto firme con la otra mitad del azúcar e incorporar.</li>
            <li>Colocar en molde con papel, engrasado y enharinado.</li>
            <li>Hornear aproximadamente 45 minutos a 160 °C.</li>
          </ol>
          <div className="mt-6 rounded-2xl bg-amber-50 p-5"><p className="font-semibold text-stone-900">Señal de cocción documentada</p><p className="mt-2 leading-7 text-stone-700">La clase indica observar un dorado uniforme y que la preparación sea pegajosa en las manos. Indica no insertar un palillo porque el aire escapa y no secar la preparación debido a la humedad de la almendra.</p></div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Gaznates</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div><h3 className="font-semibold">Masa</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Harina 250 g</li><li>Sal, una pizca</li><li>Azúcar 20 g</li><li>Mantequilla suave 40 g</li><li>Vino blanco 130 ml</li><li>Aceite 1 L</li></ul></div>
            <div><h3 className="font-semibold">Merengue suizo</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Claras 150 g</li><li>Azúcar 300 g</li><li>Ralladura de limón 1 pieza</li></ul></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Mezclar la masa, amasar hasta obtener elasticidad y dejar reposar 20 minutos.</li>
            <li>Extender delgada, cortar cuadrados y envolver los moldes de caña.</li>
            <li>Sellar con agua o clara de huevo.</li>
            <li>Freír, desmoldar, escurrir y enfriar.</li>
            <li>Preparar el merengue: llevar claras y azúcar a baño María hasta 45 °C; después batir hasta que esté firme y frío.</li>
            <li>Rellenar los gaznates con el merengue.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Rompope de Santa Clara</h2>
          <ul className="mt-5 list-disc space-y-1.5 pl-5 leading-7 text-stone-700"><li>Leche 1 L</li><li>Clavos 2</li><li>Canela 1 raja</li><li>Nuez moscada 1/4 cucharadita</li><li>Azúcar 350 g</li><li>Yemas 10</li><li>Licor de caña o ron blanco 100 ml</li></ul>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Cocer a fuego suave la leche con especias y la mitad del azúcar.</li>
            <li>Mezclar las yemas con la otra mitad del azúcar.</li>
            <li>Temperar con la leche caliente.</li>
            <li>Regresar al fuego y mover hasta espesar; la señal indicada es poder marcar un camino con el dedo sobre la cuchara.</li>
            <li>Colar, enfriar y almacenar.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Clasifica por ruta de elaboración</h2>
          <p className="mt-3 leading-7 text-stone-700">Coloca las cuatro preparaciones en una tabla con estas columnas: fritura, horneado, cocción sobre fuego, formado, relleno y señal de finalización. Completa solamente con lo que aparece en la clase.</p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-stone-700">
            <li>¿Cuánto reposa el batido de los buñuelos?</li>
            <li>¿A qué temperatura se hornea la Torta de Cielo?</li>
            <li>¿Qué señal utiliza la clase para decidir el punto del Rompope?</li>
            <li>¿A qué temperatura llega el merengue de los gaznates antes de batirse?</li>
            <li>¿Qué operación permite convertir la masa de los gaznates en piezas antes del relleno?</li>
          </ol>
        </section>
      </div>
    </CourseShell>
  );
}
