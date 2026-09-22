import CourseShell from '../components/course/CourseShell';

const lesson = { number: '48', title: 'Pastelería Internacional II', subtitle: 'Cheesecake de frutos rojos y cheesecake frío de Baileys · Clase 15' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 6 · Lección 48" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-6" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aplicación práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Dos recetas, dos rutas de construcción</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">La comparación conceptual ya se trabajó en la Lección 23. Aquí no se repite esa explicación: se reconstruyen las dos recetas de la Clase 15 con sus cantidades, temperaturas, montaje y terminación.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Cheesecake de frutos rojos</h2>
          <p className="mt-2 text-sm text-stone-500">24 cm · 3 h</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <div><h3 className="font-semibold">Pasta Sablée</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Mantequilla 75 g</li><li>Azúcar glass 45 g</li><li>Huevo 30 g</li><li>Almendra en polvo 15 g</li><li>Una pizca de sal</li><li>Harina 125 g</li></ul></div>
            <div><h3 className="font-semibold">Base y mezcla</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Pasta sablée cocida 200 g</li><li>Mantequilla 120 g</li><li>Queso crema 800 g</li><li>Azúcar 240 g</li><li>Ralladura de limón 1 pieza</li><li>Huevos 190 g</li><li>Yemas 60 g</li><li>Crema para batir 55 g</li><li>Harina 35 g</li></ul></div>
            <div><h3 className="font-semibold">Fruta</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Frutos rojos congelados 300 g</li><li>Azúcar 120 g</li><li>Jugo de 2 limones</li></ul></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Procesar la pasta sucre cocida hasta obtener polvo y mezclar con la mantequilla.</li>
            <li>Colocar 300 g de la mezcla en un molde de 22 cm. Hornear a 170 °C durante 15–20 minutos y enfriar.</li>
            <li>Trabajar la mezcla de cheesecake con pala a velocidad media. Incorporar huevos, yemas, crema y harina.</li>
            <li>Hornear a baño María, cubierto con aluminio, durante 40 minutos a 180 °C.</li>
            <li>Descubrir y continuar 15 minutos o hasta obtener la consistencia indicada.</li>
            <li>Macerar los frutos rojos con el azúcar durante 1 hora. Añadir el limón y cocinar 5 minutos.</li>
            <li>Colar, reducir el jugo a la mitad, volver a añadir la fruta y enfriar.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Cheese Cake Frío de Baileys</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <div><h3 className="font-semibold">Mousse</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Queso crema 330 g</li><li>Azúcar 100 g</li><li>Gelatina en polvo 10 g</li><li>Crema para batir 330 g</li><li>Baileys 100 ml</li></ul></div>
            <div><h3 className="font-semibold">Streusel</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Harina 100 g</li><li>Mantequilla 100 g</li><li>Azúcar 100 g</li><li>Almendra en polvo 100 g</li></ul></div>
            <div><h3 className="font-semibold">Decoración</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Avellanas enteras 50 g</li><li>Azúcar 200 g</li><li>Glaseado neutro 100 g</li><li>Frambuesa 50 g</li><li>Menta 5 piezas</li></ul></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Preparar el streusel por sablage y hornear a 170 °C hasta que tome una coloración ligera.</li>
            <li>Batir queso crema, azúcar y Baileys.</li>
            <li>Hidratar y disolver la gelatina.</li>
            <li>Semibatir la crema e incorporarla a la preparación.</li>
            <li>Preparar pequeños aros con acetato y película. Colocar una capa de streusel y después la mousse.</li>
            <li>Refrigerar. Una vez frío, aplicar glaseado neutro y desmoldar.</li>
            <li>Terminar con avellanas caramelizadas, frutos rojos y menta.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Práctica: dos hojas de producción</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Haz una hoja para cada cheesecake. En la primera columna coloca ingredientes y cantidades; en la segunda, la operación; en la tercera, temperatura o tiempo cuando la fuente lo indique. No mezcles las dos recetas.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-stone-50 p-4"><p className="font-semibold">Horneado</p><p className="mt-2 text-sm leading-6 text-stone-600">Base → mezcla → baño María → 180 °C cubierto → 15 min descubiertos → topping.</p></div>
            <div className="rounded-xl bg-amber-50 p-4"><p className="font-semibold">Frío</p><p className="mt-2 text-sm leading-6 text-stone-700">Streusel → mousse → aros + acetato + película → refrigeración → glaseado → desmolde → decoración.</p></div>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-stone-700">
            <li>¿Cuánto tiempo y a qué temperatura se hornea la base del cheesecake de frutos rojos?</li>
            <li>¿Qué secuencia de cocción recibe la mezcla del cheesecake de frutos rojos?</li>
            <li>¿Qué cantidades forman la mousse del cheesecake frío de Baileys?</li>
            <li>¿Qué componentes se colocan en el aro antes de refrigerar?</li>
            <li>¿Qué ocurre una vez que el cheesecake frío está frío?</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">Se conserva la terminología de la clase, incluida la denominación “Pasta Sablée”, la referencia a “pasta sucre cocida” dentro del procedimiento y “Cheese Cake Frio de Baileys” en el encabezado de la preparación.</p>
        </section>
      </div>
    </CourseShell>
  );
}
