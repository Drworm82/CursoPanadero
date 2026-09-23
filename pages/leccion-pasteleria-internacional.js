import CourseShell from '../components/course/CourseShell';

const lesson = { number: '47', title: 'Pastelería Internacional', subtitle: 'Pâte à Bombe, biscuit, tiramisú y pastel de zanahoria · Clase 14' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 6 · Lección 47" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-6" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo de la clase</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-800">Reconocer Pâte à Bombe y biscuit como operaciones centrales de la clase y compararlos mediante dos preparaciones documentadas. Las recetas funcionan como casos de aplicación, no como dos contenidos independientes que debas memorizar por separado.</p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Cambia de familia</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Del laminado al batido</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Antes de entrar en las recetas, recupera el trabajo del laminado y cambia la pregunta: ¿qué operación nueva organiza esta clase? Identifica Pâte à Bombe y los dos tipos de biscuit como el foco. Después usa tiramisú y pastel de zanahoria como casos para observar dónde aparecen esas operaciones y qué cambia entre ellos.</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Tiramisú</h2>
          <p className="mt-2 text-sm text-stone-500">Rinde para un pastel de 30 × 20 cm · 2 h</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div><h3 className="font-semibold">Biscuit</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Yemas 4</li><li>Claras 4</li><li>Azúcar 120 g</li><li>Harina 120 g</li></ul></div>
            <div><h3 className="font-semibold">Crema de mascarpone</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Mascarpone 125 g</li><li>Queso crema 125 g</li><li>Azúcar 100 g</li><li>Agua 30 ml</li><li>Huevos 2</li><li>Yema 1</li><li>Gelatina en polvo 10 g</li><li>Crema para batir 125 g</li></ul></div>
          </div>
          <div className="mt-5"><h3 className="font-semibold">Humedecer y decorar</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Espresso 300 ml, preparado con 300 ml de agua y 20 g de café</li><li>Amaretto 50 ml</li><li>Cocoa 100 g</li></ul></div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Montar las claras con la mitad del azúcar hasta punto firme.</li>
            <li>Montar las yemas con la otra mitad del azúcar hasta obtener punto de listón.</li>
            <li>Incorporar la harina cernida con movimientos envolventes.</li>
            <li>Colocar en charola engrasada y enharinada y hornear a 180 °C durante 7–8 minutos, hasta que esté cocido pero suave.</li>
            <li>Trabajar el mascarpone y el queso crema a temperatura ambiente.</li>
            <li>Preparar la Pâte à Bombe con azúcar, agua, huevo y yema.</li>
            <li>Semibatir la crema e integrar queso, Pâte à Bombe, gelatina hidratada y disuelta y crema semibatida.</li>
            <li>Cubrir con película un molde cuadrado de acero, cortar el biscuit en dos placas y humedecer con café y amaretto.</li>
            <li>Montar biscuit, crema de mascarpone y cocoa; repetir las capas y refrigerar al menos 1 hora.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Pastel de zanahoria</h2>
          <p className="mt-2 text-sm text-stone-500">Molde de 24 cm · 1 h</p>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <div><h3 className="font-semibold">Biscuit</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Claras 6</li><li>Azúcar 250 g</li><li>Yemas 6</li><li>Limón 1</li><li>Harina 60 g</li><li>Almendra en polvo 270 g</li><li>Fécula de maíz 35 g</li><li>Canela 6 g</li><li>Jengibre 2 g</li><li>Polvo para hornear 4 g</li><li>Bicarbonato 2 g</li><li>Sal 1 g</li><li>Zanahoria rallada 300 g</li></ul></div>
            <div><h3 className="font-semibold">Icing</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Queso crema 270 g</li><li>Mantequilla 95 g</li><li>Azúcar glass 140 g</li></ul></div>
            <div><h3 className="font-semibold">Decoración</h3><ul className="mt-2 list-disc pl-5 leading-7 text-stone-700"><li>Azúcar glass 70 g</li><li>Almendra en polvo 70 g</li><li>Claras c/s</li><li>Colorante verde y naranja</li><li>Nuez 100 g</li></ul></div>
          </div>
          <ol className="mt-6 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Montar claras con azúcar hasta punto firme.</li>
            <li>Agregar las yemas una por una.</li>
            <li>Incorporar los polvos cernidos con movimientos envolventes.</li>
            <li>Añadir la zanahoria al final.</li>
            <li>Colocar en molde engrasado y enharinado y hornear a 170 °C aproximadamente 50 minutos.</li>
            <li>Preparar el icing con queso crema, mantequilla y azúcar glass.</li>
            <li>Para la decoración, formar una pasta de almendra con los primeros ingredientes indicados, colorear y formar las zanahorias según la demostración.</li>
            <li>Enfriar, partir, rellenar con parte del icing y cubrir con el resto. Terminar con nuez alrededor y encima y las zanahorias de almendra.</li>
          </ol>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Compara los dos casos a partir de las técnicas centrales</h2>
          <p className="mt-3 leading-7 text-stone-700">Compara el biscuit del tiramisú con el del pastel de zanahoria. Después identifica qué preparación usa Pâte à Bombe, en qué momento aparece y qué parte de la clase corresponde a esa técnica. Finalmente señala una diferencia entre los dos casos que puedas demostrar directamente con las recetas.</p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Comprueba tu aprendizaje</p>
          <ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-stone-700">
            <li>¿Cómo se construye el biscuit del tiramisú?</li>
            <li>¿Qué ingredientes forman la Pâte à Bombe documentada para el tiramisú?</li>
            <li>¿A qué temperatura se hornea el pastel de zanahoria y durante cuánto tiempo aproximadamente?</li>
            <li>¿En qué momento se incorpora la zanahoria rallada?</li>
          </ol>
        </section>
      </div>
    </CourseShell>
  );
}
