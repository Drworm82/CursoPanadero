import CourseShell from '../components/course/CourseShell';

const lesson = { number: '46', title: 'Masas Laminadas II', subtitle: 'Hojaldre con empaste de harina, Tarta Tatin y Pithiviers · Clase 13' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 6 · Lección 46" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-6" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo de la clase</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-800">Reforzar la técnica de hojaldre y utilizarla en dos preparaciones clásicas: Tarta Tatin y Pithiviers.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Hojaldre</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-5"><h3 className="font-semibold">Amasijo</h3><ul className="mt-2 list-disc pl-5 leading-7"><li>Agua 180 g</li><li>Harina 300 g</li><li>Sal 6 g</li></ul></div>
            <div className="rounded-2xl bg-amber-50 p-5"><h3 className="font-semibold">Empaste</h3><ul className="mt-2 list-disc pl-5 leading-7"><li>Margarina 250 g</li><li>Harina 50 g</li></ul></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Hacer una masa suave y dejar reposar 15 minutos.</li>
            <li>Ablandar la grasa, formar un rectángulo y añadir harina si es necesario.</li>
            <li>Extender el amasijo del mismo tamaño que el empaste y colocarlo sobre éste.</li>
            <li>Dar 6 vueltas sencillas o 4 dobles, con 10 minutos de reposo entre vueltas.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Tarta Tatin</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div><h3 className="font-semibold">Ingredientes</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Hojaldre: 1 receta</li><li>Manzanas Golden: 8</li><li>Mantequilla: 50 g</li><li>Azúcar: 200 g</li></ul></div>
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold text-stone-900">Punto de observación</p><p className="mt-2 leading-7 text-stone-700">La masa se trabaja por separado, se congela y entra al montaje después de la cocción inicial de las manzanas.</p></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Pelar, descorazonar y partir las manzanas por la mitad.</li>
            <li>Hacer un caramelo claro; retirar del fuego y añadir la mantequilla.</li>
            <li>Colocar las manzanas sobre el caramelo con la mitad cortada hacia arriba, cubrir con aluminio y llevar al horno a 200 °C durante 8–10 minutos.</li>
            <li>Extender el hojaldre a 3 mm, picar y cortar un círculo del diámetro del molde. Congelar.</li>
            <li>Retirar las manzanas y reservar el exceso de líquido.</li>
            <li>Colocar el círculo de masa sobre las manzanas y hornear aproximadamente 15 minutos o hasta dorar.</li>
            <li>Retirar con cuidado el caramelo inclinando el molde, desmoldar y pincelar las manzanas con el caramelo reservado.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Pithiviers</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div><h3 className="font-semibold">Hojaldre</h3><p className="mt-2 leading-7 text-stone-700">1 receta.</p></div>
            <div><h3 className="font-semibold">Frangipane</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Esencia de almendra 3 ml</li><li>Mantequilla 50 g</li><li>Azúcar 50 g</li><li>Huevo 1</li><li>Harina 50 g</li><li>Almendra en polvo 50 g</li><li>Amaretto 25 ml</li></ul></div>
          </div>
          <div className="mt-5"><h3 className="font-semibold">Terminado</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Huevo 1</li><li>Azúcar glass 30 g</li></ul></div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Pesar e identificar los ingredientes. Extender el hojaldre a 5 mm y dejar reposar 20 minutos.</li>
            <li>Cortar dos círculos de 22 cm. Colocar uno sobre papel siliconado en charola y disponer la frangipane en el centro.</li>
            <li>Pincelar el borde con huevo y cubrir con el segundo círculo.</li>
            <li>Pincelar la superficie con huevo.</li>
            <li>Hornear a 210 °C durante 30–35 minutos.</li>
            <li>A mitad de cocción espolvorear azúcar glass y terminar hasta que esté dorado.</li>
          </ol>
          <div className="mt-6 rounded-2xl bg-stone-50 p-5"><h3 className="font-semibold">Frangipane</h3><p className="mt-2 leading-7 text-stone-700">Acremar mantequilla con azúcar, incorporar el huevo gradualmente, añadir esencia y licor y terminar con los ingredientes secos, sin sobrebatir.</p></div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Compara el uso del hojaldre</h2>
          <p className="mt-3 leading-7 text-stone-700">Haz una secuencia para Tatin y otra para Pithiviers. Señala cuándo se prepara la masa, cuándo se enfría o congela y en qué momento entra en contacto con el resto del producto.</p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-stone-700">
            <li>¿Qué diferencia hay entre el empaste de la Clase 12 y el de esta clase?</li>
            <li>¿Qué ocurre con la manzana antes de colocar el hojaldre en la Tatin?</li>
            <li>¿Qué tamaño deben tener los círculos del Pithiviers?</li>
            <li>¿A qué temperatura y durante cuánto tiempo se hornea el Pithiviers?</li>
          </ol>
        </section>
      </div>
    </CourseShell>
  );
}
