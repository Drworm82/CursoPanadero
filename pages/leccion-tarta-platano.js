import CourseShell from '../components/course/CourseShell';

const lesson = { number: '59', title: 'Tarta de plátano', subtitle: 'Masa sable, ganache, plátano salteado y chiboust reunidos en una tarta de corte contemporáneo.' };

export default function LessonPage() {
  return (
    <CourseShell eyebrow="Módulo 8 · Lección 59" title={lesson.title} subtitle={lesson.subtitle} backHref="/modulo-8" backLabel="Volver al módulo">
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">¿Cómo se apilan preparaciones de distinta textura dentro de una misma tarta?</h2></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Clase 34</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">Una secuencia de cuatro componentes</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">La receta documenta masa sable, ganache de plátano, plátano salteado y chiboust de plátano. El montaje termina con azúcar caramelizada y decoración de chocolate y plátano.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Composición</p><p className="mt-3 max-w-3xl leading-7 text-stone-700"><strong>Sable:</strong> harina 250 g, mantequilla 125 g, azúcar glass 100 g, yemas 40 g, huevo 50 g y sal 1 g. <strong>Ganache:</strong> crema 125 g, chocolate semiamargo 150 g, plátano 120 g, trimoline 12 g y mantequilla 15 g. <strong>Plátano salteado:</strong> 2 piezas, mantequilla 15 g, miel 30 g y ron 20 g. <strong>Chiboust:</strong> puré de plátano 170 g, jugo de limón 15 g, yemas 40 g, azúcar 30 g, crema 200 g, fécula 15 g, grenetina 8 g, claras 70 g y azúcar 140 g.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Procedimiento</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">La masa se realiza por arenado, se enfría, se forra un molde de 20 cm y se da cocción a fondo. Para la ganache se lleva la crema a ebullición con azúcar invertido y se agregan puré de plátano y mantequilla. Los plátanos se cortan en rodajas, se saltean con mantequilla y miel y finalmente se agrega el ron. Para el chiboust se realiza una crema pastelera, se incorpora el puré de plátano con limón, después grenetina y merengue italiano.</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Montaje</p><p className="mt-3 max-w-3xl leading-7 text-stone-700">Dentro de la tarta se colocan los plátanos salteados y se cubren con ganache. Una cinta de acetato permite completar con chiboust. Después se da frío, se espolvorea azúcar sobre la superficie y se carameliza con soplete; se termina con chocolate y plátano.</p></section>
        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6"><p className="text-sm font-medium text-amber-800">Práctica</p><p className="mt-2 max-w-3xl leading-7 text-stone-700">Distingue qué componente aporta la base, cuál funciona como ganache y cuál ocupa la parte superior del montaje.</p></section>
      </div>
    </CourseShell>
  );
}
