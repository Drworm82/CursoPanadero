import CourseShell from '../components/course/CourseShell';

const lesson = { number: '69', title: 'Pastelería Contemporánea IV', subtitle: 'Clase 37 · Pastelería Contemporánea IV' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 69" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Objetivo del aprendizaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">El alumno aprenderá a ensamblar pasteles con distintas técnicas y texturas. Reforzará técnicas básicas de pastelería.</p></section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Idea central</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cerrar el bloque reconociendo patrones</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La preparación de naranja reúne biscuit, crema, gel y fruta deshidratada. Permite reconocer patrones que se repiten en las composiciones contemporáneas del módulo.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Síntesis</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Ahora descompón una preparación sin ayuda</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Sin mirar las lecciones anteriores, identifica base, crema, gel, fruta y acabado según lo que realmente documenta esta clase. Después compara tu mapa con el de otra preparación del módulo y señala una coincidencia y una diferencia.</p></section>

<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Observa y practica</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Antes de repetir la receta, explica su estructura</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Recupera bizcochos, cremas, gelatina y frutas deshidratadas. Observa cómo vuelven a aparecer en una composición diferente. Práctica: compara esta preparación con el pastel de yogurt y frutos rojos y señala tres técnicas o tipos de componente que se repiten.</p></section>
<section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Aprende mientras haces</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Convierte cada paso en una observación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Usa esta preparación para reconocer patrones acumulados del módulo. <strong>En el biscuit:</strong> identifica el método de acremado y la incorporación final de claras. <strong>En la crema:</strong> observa la secuencia mezcla → baño maría → grenetina → enfriado → crema batida. <strong>En el gel y las naranjas:</strong> identifica cómo la fuente reutiliza una base y un jarabe TPT. Antes de consultar el montaje, intenta ordenar biscuit, crema, gel y fruta; después contrasta tu secuencia con los únicos pasos documentados por la fuente.</p></section>

        <section className="rounded-2xl border border-sky-200 bg-sky-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-sky-700">Medios sugeridos</p>
          <div className="mt-4 space-y-4 leading-7 text-stone-700">
            <p><strong>[IMAGEN SUGERIDA — Componentes y formato]</strong><br />Esquema del biscuit, crema de naranja, gel de naranja y naranjas deshidratadas, incluyendo las dimensiones de montaje documentadas.</p>
            <p><strong>[VIDEO SUGERIDO — Preparación de la crema]</strong><br />Mostrar la cocción a baño María, incorporación de la grenetina y posterior integración de la crema batida.</p>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Ingredientes</h2>
          <div className="mt-5 space-y-5 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Para Biscuit de Naranja</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>mantequilla 85 g</li><li>azúcar 85 g</li><li>yemas de huevo 3 pzas</li><li>extracto de vainilla</li><li>sal 1 g</li><li>naranja, solo la ralladura, 1 pza</li><li>claras de huevo 3 pzas</li><li>harina 58 g</li><li>almendra en polvo 35 g</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Para la Crema de Naranja</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>azúcar 250 g</li><li>huevos 6 pzas</li><li>jugo de naranja 350 g</li><li>mantequilla 60 g</li><li>ralladura de naranja 5 g</li><li>crema para batir 800 g</li><li>hojas de grenetina 13 pzas</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Para el Gel de Naranja</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>base de la crema de naranja sin añadir crema, 150 g</li><li>colorante naranja 1 c/s</li></ul></div>
            <div><h3 className="font-semibold text-stone-900">Para las Naranjas Deshidratadas</h3><ul className="mt-3 list-disc space-y-1.5 pl-5 leading-7"><li>jarabe TPT 200 g (100 g azúcar + 100 g agua)</li><li>naranjas en rodajas delgadas 2 pzas</li><li>sal 1 g</li></ul></div>
          </div>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">Modo de elaboración</h2>
          <div className="mt-5 space-y-6 leading-7 text-stone-700">
            <div><h3 className="font-semibold text-stone-900">Biscuit de Naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Acremar el azúcar con la mantequilla.</li><li>Añadir las yemas, la vainilla y la sal.</li><li>Agregar la ralladura de naranja y los ingredientes secos restantes.</li><li>Al final mezclar las claras batidas a punto de nieve.</li><li>Extender en charolas con papel siliconado, cocer a 190 °C durante 8 a 10 min.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Crema de Naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Mezclar todos los ingredientes.</li><li>Cocer a baño maría hasta que la crema espese.</li><li>Añadir las hojas de grenetina previamente hidratadas.</li><li>Enfriar y doblarle la crema batida.</li><li>Usar inmediatamente.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Gel de Naranja</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Solo reservar la crema.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Naranjas Deshidratadas</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Pasar las rodajas de naranja por el jarabe y poner sobre silpat.</li><li>Secar en horno a 100 °C.</li></ol></div>
            <div><h3 className="font-semibold text-stone-900">Montaje</h3><ol className="mt-2 list-decimal space-y-1 pl-6"><li>Aro 22 cm.</li><li>Pastilla 18 cm.</li></ol><p className="mt-2 text-sm text-stone-500">La fuente recuperada termina aquí el apartado de montaje. No se agregan pasos posteriores.</p></div>
          </div>
        </section>
<section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Recupera antes de empezar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Conecta con lo que ya sabes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Bizcochos, cremas, gelatina y frutas deshidratadas ya aparecieron en las lecciones anteriores. Esta preparación permite reconocerlos en otra composición.</p></section>
<section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Qué debes poder explicar</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Cierra la lección con una explicación</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">Al terminar, debes poder identificar los patrones comunes entre esta preparación y otras piezas contemporáneas del módulo.</p></section>


        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Actividad guiada</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Reconoce los patrones acumulados</h2>
          <p className="mt-3 max-w-3xl leading-7 text-stone-700">Relaciona biscuit de naranja, crema de naranja, gel de naranja y naranjas deshidratadas con las técnicas que ya aparecieron en el módulo. Después reconstruye únicamente el montaje que la fuente documenta: aro de 22 cm y pastilla de 18 cm.</p>
        </section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-800">Comprueba tu aprendizaje</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Explica qué puedes reconstruir</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-stone-700">
            <li>Enumera los cuatro componentes documentados de la preparación.</li>
            <li>Explica cómo se prepara la crema de naranja y cuándo se incorpora la crema batida.</li>
            <li>Describe el procedimiento documentado para las naranjas deshidratadas.</li>
            <li>Indica qué información proporciona la fuente sobre el montaje y qué pasos no están documentados.</li>
          </ol>
        </section>

      </div>
    </CourseShell>
  );
}