import CourseShell from '../components/course/CourseShell';

export default function LessonTwelvePage() {
  return (
    <CourseShell
      eyebrow="Lección 12"
      title="Petit fours secos: precisión, concentración y acabado"
      backHref="/modulo-2"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">
            Clases 5 y 8 · Petit four
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Varias piezas pequeñas pueden exigir técnicas muy diferentes.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-700">
            Las Clases 5 y 8 reúnen preparaciones de petit four con rutas distintas: macaron de almendra,
            galletas integrales con miel, cocadas, sablé diamante, bolitas de nuez y brigadeiro. Esta lección
            conserva sus fórmulas y procedimientos y los organiza para que puedas comparar qué cambia cuando
            el objetivo pasa de formar una pieza aireada a concentrar una preparación por cocción.
          </p>
        </section>

        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">Cómo estudiar</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Comprende → Haz → Observa → Explica</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            En cada preparación identifica primero el método. Después reconstruye la secuencia exactamente como
            aparece en la fuente, observa la señal que permite continuar y explica qué diferencia encuentras
            frente a otra pieza.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            <div className="rounded-xl bg-white/70 p-4">
              <p className="font-semibold text-stone-900">1. Comprende</p>
              <p className="mt-1 text-sm leading-6 text-stone-600">Identifica método, fórmula y objetivo.</p>
            </div>
            <div className="rounded-xl bg-white/70 p-4">
              <p className="font-semibold text-stone-900">2. Haz</p>
              <p className="mt-1 text-sm leading-6 text-stone-600">Sigue la secuencia documentada.</p>
            </div>
            <div className="rounded-xl bg-white/70 p-4">
              <p className="font-semibold text-stone-900">3. Observa</p>
              <p className="mt-1 text-sm leading-6 text-stone-600">Busca las señales de consistencia, cocción y acabado.</p>
            </div>
            <div className="rounded-xl bg-white/70 p-4">
              <p className="font-semibold text-stone-900">4. Explica</p>
              <p className="mt-1 text-sm leading-6 text-stone-600">Compara el proceso sin convertirlo en una regla no documentada.</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 5</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Macaron de almendra</h2>
          <p className="mt-3 leading-7 text-stone-700">
            La fuente lo presenta como una preparación de demostración y especifica elaborar dos partidas.
            La fórmula combina un TpT de almendra con merengue italiano.
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl bg-stone-100 p-5">
              <h3 className="text-xl font-semibold text-stone-900">Ingredientes</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
                <li><strong>TpT de almendra:</strong> 600 g (300 g polvo de almendra + 300 g azúcar glass).</li>
                <li><strong>Clara de huevo:</strong> 110 g para la primera mezcla.</li>
                <li><strong>Azúcar:</strong> 300 g.</li>
                <li><strong>Agua:</strong> 100 g.</li>
                <li><strong>Clara de huevo:</strong> 110 g para el merengue italiano.</li>
              </ul>
            </article>
            <article className="rounded-2xl bg-amber-50 p-5">
              <h3 className="text-xl font-semibold text-amber-950">Relleno</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-950">
                <li>Crema para batir: 150 g.</li>
                <li>Chocolate semi amargo: 200 g.</li>
                <li>Mantequilla: 50 g.</li>
              </ul>
            </article>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Procedimiento documentado</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-stone-700">
              <li>Mezclar el TpT con la primera cantidad de clara y la cantidad necesaria de colorante.</li>
              <li>Elaborar un merengue italiano con azúcar, agua y clara.</li>
              <li>Integrar ambas mezclas.</li>
              <li>Dar forma según demostración del chef.</li>
              <li>Hornear a 150 °C y reservar.</li>
            </ol>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="text-xl font-semibold text-amber-950">Relleno</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-amber-950">
              <li>Realizar una ganache.</li>
              <li>Incorporar la mantequilla.</li>
              <li>Procesar y rellenar los macarons.</li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 5</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Galletas integrales con miel</h2>

          <div className="mt-5 rounded-2xl bg-stone-100 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Ingredientes</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm leading-6 text-stone-700">
              <li>Mantequilla: 150 g.</li>
              <li>Azúcar mascabado: 200 g.</li>
              <li>Huevo: 2 piezas.</li>
              <li>Miel: 10 g.</li>
              <li>Avena: 50 g.</li>
              <li>Harina integral: 200 g.</li>
              <li>Harina: 120 g.</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Procedimiento</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-stone-700">
              <li>Realizar un cremage con la mantequilla y el azúcar mascabado.</li>
              <li>Incorporar los huevos y la miel y mezclar bien.</li>
              <li>Agregar los ingredientes secos.</li>
              <li>Hacer bolitas sobre una charola con papel estrella y aplastarlas con un tenedor.</li>
              <li>Cocinarlas a 170 °C durante 10 a 15 minutos.</li>
            </ol>
          </div>

          <div className="mt-5 rounded-2xl bg-amber-50 p-5">
            <h3 className="text-xl font-semibold text-amber-950">Relleno para formar sándwiches</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-950">
              <li>Chocolate blanco: 150 g.</li>
              <li>Crema para batir: 80 g.</li>
              <li>Glucosa: 10 g.</li>
              <li>Mantequilla: 20 g.</li>
              <li>Chocolate vegetal: 140 g, para decorar.</li>
            </ul>
            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-amber-950">
              <li>Hervir la crema y la glucosa.</li>
              <li>Volcar sobre el chocolate derretido.</li>
              <li>Incorporar la mantequilla.</li>
              <li>Bajar la temperatura sobre baño María invertido y batir.</li>
              <li>Rellenar las galletas para formar sándwiches.</li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 8</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Cocadas</h2>
          <p className="mt-3 leading-7 text-stone-700">
            La fuente plantea esta preparación como un dulce a base de claras.
          </p>

          <div className="mt-5 rounded-2xl bg-stone-100 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Ingredientes</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
              <li>Coco rallado: 300 g.</li>
              <li>Azúcar: 80 g.</li>
              <li>Clara: 90 g.</li>
              <li>Colorante amarillo: 2 gotas, opcional.</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Procedimiento</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-stone-700">
              <li>Unir todos los ingredientes y llevar a baño María hasta los 50 °C, mezclando continuamente.</li>
              <li>Con una cuchara o manga, poner porciones pequeñas en una charola sobre papel estrella.</li>
              <li>Llevar al horno a 180 °C durante 10 a 15 minutos aproximadamente.</li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 8</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Sablé diamante</h2>

          <div className="mt-5 rounded-2xl bg-stone-100 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Ingredientes</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm leading-6 text-stone-700">
              <li>Azúcar glass: 100 g.</li>
              <li>Mantequilla pomada: 190 g.</li>
              <li>Esencia de vainilla: 5 ml.</li>
              <li>Harina: 250 g.</li>
              <li>Huevo: 1 pieza, para barnizar.</li>
              <li>Azúcar candi blanca: 200 g.</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Procedimiento</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-stone-700">
              <li>Realizar una masa friable por el método de cremage o acremado.</li>
              <li>Formar un tubo de 2 cm de grosor, cubrir con film plástico y llevar al refrigerador.</li>
              <li>Con el huevo, barnizar el tubo de masa fría y rodarlo por el azúcar para cubrirlo bien.</li>
              <li>Si es necesario, volver a dar frío a la masa.</li>
              <li>Cortar en rodajas de 1 cm de grosor y acomodar en una charola enharinada.</li>
              <li>Llevar al horno a 180 °C durante 10 a 12 minutos.</li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 8</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Bolitas de nuez</h2>

          <div className="mt-5 rounded-2xl bg-stone-100 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Ingredientes</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm leading-6 text-stone-700">
              <li>Mantequilla: 180 g.</li>
              <li>Azúcar: 50 g.</li>
              <li>Nuez molida: 100 g.</li>
              <li>Harina: 240 g.</li>
              <li>Azúcar glass: 75 g, para revolcar.</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Procedimiento</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-stone-700">
              <li>Precalentar el horno a 180 °C.</li>
              <li>Acremar la mantequilla y el azúcar; agregar las nueces hasta que esté suave y por último agregar la harina.</li>
              <li>Hacer bolitas pequeñas para formar una especie de cuernitos.</li>
              <li>Hornear durante 10 a 15 minutos hasta que estén doraditos.</li>
              <li>Sacar y revolcar en azúcar glass.</li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 8</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Brigadeiro</h2>
          <p className="mt-3 leading-7 text-stone-700">
            La fuente lo presenta como un dulce típico brasileño a base de chocolate y azúcar y señala que
            permite comprender la concentración de azúcar por medio de la cocción y sus efectos.
          </p>

          <div className="mt-5 rounded-2xl bg-stone-100 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Ingredientes</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm leading-6 text-stone-700">
              <li>Leche condensada: 300 g.</li>
              <li>Mantequilla: 45 g.</li>
              <li>Cocoa: 20 g.</li>
              <li>Chocolate amargo: 30 g.</li>
              <li>Granillo fino de chocolate: 150 g, para revolcar.</li>
              <li>Capacillos chicos: c/s piezas.</li>
            </ul>
          </div>

          <div className="mt-5 rounded-2xl border border-stone-200 p-5">
            <h3 className="text-xl font-semibold text-stone-900">Procedimiento</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7 text-stone-700">
              <li>Poner la leche condensada, mantequilla derretida, cocoa y la cobertura rallada en una cacerola.</li>
              <li>Llevar a fuego medio mezclando continuamente y asegurándose de que no se pegue.</li>
              <li>Una vez que se despega de las paredes, retirar del fuego.</li>
              <li>Con ayuda de una cucharita, volcar sobre las chispas de chocolate.</li>
              <li>Poner en los capacillos.</li>
            </ol>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Compara las rutas</p>
          <h2 className="mt-2 text-2xl font-semibold">La técnica cambia aunque todas sean piezas pequeñas.</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">Aire y merengue</p>
              <p className="mt-2 text-sm leading-6 text-stone-200">
                El macaron integra un merengue italiano con el TpT antes del formado y horneado.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">Masa friable</p>
              <p className="mt-2 text-sm leading-6 text-stone-200">
                El sablé diamante y las bolitas de nuez parten de preparaciones trabajadas por acremado.
              </p>
            </article>
            <article className="rounded-2xl bg-white/10 p-5">
              <p className="font-semibold">Concentración por cocción</p>
              <p className="mt-2 text-sm leading-6 text-stone-200">
                En el brigadeiro, la fuente señala explícitamente la concentración de azúcar por medio de la cocción.
              </p>
            </article>
          </div>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Construye una tabla de observación</h2>
          <p className="mt-2 leading-7 text-stone-600">
            Elige cuatro preparaciones de esta lección. Para cada una registra: método inicial, señal que permite
            continuar, temperatura o tiempo documentado y acabado final. Después compara qué operación distingue
            a cada pieza.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-stone-500">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-xl font-semibold text-stone-900">Explica sin mirar</h2>
          <div className="mt-4 space-y-3 text-stone-700">
            <p>1. ¿Qué combinación de preparaciones forma el macaron de almendra?</p>
            <p>2. ¿Qué método utiliza el sablé diamante y qué operación se hace antes de cortar las piezas?</p>
            <p>3. ¿Qué señal indica en el brigadeiro que debe retirarse del fuego?</p>
            <p>4. ¿Qué diferencias de proceso puedes demostrar entre una preparación friable, una preparación con merengue y una preparación concentrada por cocción?</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Nota sobre la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            Esta lección agrupa las Clases 5 y 8 porque ambas están dedicadas a petit four secos y permiten una
            práctica comparativa dentro de la ruta de masas friables. La agrupación y la explicación comparativa
            son organización pedagógica del curso. Las cantidades, temperaturas, tiempos y secuencias de cada
            preparación se conservan de las clases correspondientes.
          </p>
          <p className="mt-3 leading-7 text-stone-700">
            En el macaron, la fuente remite el formado a la demostración del chef y no aporta aquí el detalle
            del formado. Ese punto se mantiene como demostración, sin completarlo por inferencia.
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
