import CourseShell from '../components/course/CourseShell';

const lesson = { number: '63', title: 'Tarta Tango', subtitle: 'Sucrée de ajonjolí, biscuit joconde, compota de frambuesa y pimiento, crema de parmesano, brillo y teja.' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 63" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Cómo se integran sabores y texturas distintos dentro de una tarta de corte contemporáneo?</h2></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 36</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">La estructura de Tarta Tango</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La fuente combina una sucrée de ajonjolí, un biscuit joconde, una compota de frambuesa y pimiento, una crema de parmesano, un brillo de frambuesa y una teja de parmesano.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Componentes</p><p className="mt-3 max-w-3xl leading-7 text-stone-700"><strong>Sucrée:</strong> mantequilla 75 g, polvo de almendra 18 g, azúcar glass 47 g, vainilla, huevo 30 g, sal, harina 125 g y ajonjolí 30 g. <strong>Joconde:</strong> polvo de almendras 83 g, azúcar glass 66 g, azúcar invertida 6 g, huevo 110 g, mantequilla 16 g, claras 73 g, azúcar 10 g y harina 22 g. <strong>Compota:</strong> puré de frambuesa 92 g, puré de pimiento 9 g, azúcar 22 g, vinagre de frambuesa 7 ml y grenetina 3 g. <strong>Crema:</strong> yemas 40 g, agua 55 g, azúcar 61 g, grenetina 5 g, crema 22 g, crema semimontada 188 g y parmesano 75 g.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Procedimiento y montaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">La sucrée se realiza por acremado, se refrigera, se extiende, se forra un aro y se cuece a 170 °C. El joconde se monta en etapas con almendra, azúcares, huevo, claras y harina; se incorpora la mantequilla y se hornea a 200 °C durante 7–8 minutos. La compota mezcla frambuesa, azúcar y vinagre y recibe el puré de pimiento con grenetina. La crema de parmesano se cocina a la inglesa, se monta y recibe grenetina, crema, parmesano y crema semimontada. El montaje documentado coloca compota sobre el casco de tarta, luego disco de joconde y crema de parmesano glaseada con brillo.</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6"><p className="text-sm font-medium text-amber-800">Práctica</p><p className="mt-2 max-w-3xl leading-7 text-stone-700">Haz un esquema de capas desde el casco de tarta hasta la crema final y señala dónde intervienen refrigeración y cocción.</p></section>
      </div>
    </CourseShell>
  );
}
