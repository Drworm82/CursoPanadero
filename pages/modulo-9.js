import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const moduleInfo = {"title":["Pasteles a gran escala","Large-Scale Cakes"],"q":["¿Cómo se organizan pasteles a gran escala mediante sistemas de producción en serie?","How are large-scale cakes organized through serial production systems?"],"result":["Reconstruir y comparar la organización de las preparaciones, la secuencia de producción y el montaje de los pasteles a gran escala documentados en la Clase 38.","Reconstruct and compare preparation organization, production sequence, and assembly for the large-scale cakes documented in Class 38."],"lessons":[["70","Framboisier","Clase 38 · Pasteles a Gran Escala · Modelo guiado","Class 38 · Large-Scale Cakes · Guided model","/leccion-framboisier"],["71","Gimont","Clase 38 · Pasteles a Gran Escala · Transferencia y comparación","Class 38 · Large-Scale Cakes · Transfer and comparison","/leccion-gimont"]]};

export default function Module9Page() {
  const { locale = 'es' } = useRouter();
  const en = locale === 'en';
  const t = {
    title: moduleInfo.title[en ? 1 : 0],
    question: moduleInfo.q[en ? 1 : 0],
    result: moduleInfo.result[en ? 1 : 0],
    next: ["La Lección 70 funciona como caso modelo: descompón Framboisier y reconstruye su secuencia documentada. En la Lección 71 cambia la tarea: usa lo aprendido para comparar Gimont con Framboisier y reconstruir un segundo sistema sin depender de la misma guía.","Lesson 70 works as the model case: break down Framboisier and reconstruct its documented sequence. In Lesson 71 the task changes: use what you learned to compare Gimont with Framboisier and reconstruct a second system without relying on the same guide."][en ? 1 : 0],
    study: ["Construye una tabla con Framboisier y Gimont. Para cada pastel, separa preparaciones base, derivados, componentes de relleno, etapas de frío y acabados. Después reconstruye la secuencia de producción de cada uno y señala qué tienen en común y qué cambia. Usa únicamente las operaciones documentadas en las lecciones.","Build a table with Framboisier and Gimont. For each cake, separate base preparations, derivatives, filling components, chilling stages, and finishes. Then reconstruct each production sequence and identify what they have in common and what changes. Use only the operations documented in the lessons."][en ? 1 : 0],
    integration: [][en ? 1 : 0],
  };
  const lessons = moduleInfo.lessons.map(([number, title, es, english, href]) => [number, en ? english : title, en ? english : es, href]);

  return (
    <CourseShell eyebrow={en ? 'Module 9' : 'Módulo 9'} title={t.title} backHref={en ? '/en/ruta' : '/ruta'} backLabel={en ? 'Back to course' : 'Volver a la ruta'}>
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{en ? 'Guiding question' : 'Pregunta guía'}</p><p className="mt-3 text-lg leading-8 text-stone-800">{t.question}</p></section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{en ? 'By the end' : 'Al terminar'}</p><p className="mt-3 leading-7 text-stone-700">{t.result}</p></section>
        </div>
        <section className="rounded-2xl bg-amber-50 p-6"><p className="text-sm font-medium text-amber-900">{en ? 'The next change' : 'El siguiente cambio'}</p><p className="mt-2 max-w-3xl leading-7 text-amber-950">{t.next}</p></section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{en ? 'How to study this module' : 'Cómo estudiar este módulo'}</p><h2 className="mt-2 text-2xl font-semibold text-stone-900">{en ? 'Understand → Do → Observe → Explain' : 'Comprende → Haz → Observa → Explica'}</h2><p className="mt-3 max-w-3xl leading-7 text-stone-700">{t.study}</p><div className="mt-5 grid gap-3 md:grid-cols-4">{(en ? [['1. Understand','Identify the stage, objective, or component.'],['2. Do','Follow the documented sequence.'],['3. Observe','Record visible signals, consistency, temperature, or structure.'],['4. Explain','Relate the signal to the operation.']] : [['1. Comprende','Identifica la etapa, objetivo o componente.'],['2. Haz','Sigue la secuencia documentada.'],['3. Observa','Registra señales visibles, consistencia, temperatura o estructura.'],['4. Explica','Relaciona la señal con la operación.']]).map(([a,b]) => <div key={a}><p className="font-semibold text-stone-900">{a}</p><p className="mt-1 text-sm leading-6 text-stone-600">{b}</p></div>)}</div></section>
        <section><div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{en ? 'Learning path' : 'Ruta de aprendizaje'}</p><h2 className="mt-1 text-2xl font-semibold text-stone-900">{en ? 'Lessons' : 'Lecciones'}</h2></div><span className="text-sm text-stone-500">{lessons.length} {en ? 'lessons' : 'lecciones'}</span></div><div className="grid gap-3">{lessons.map(([number,title,description,href]) => <a key={number} href={(en ? '/en' : '') + href} className="flex items-center gap-4 rounded-2xl border border-amber-300 bg-white p-5 shadow-sm transition hover:border-amber-500 hover:shadow-md"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">{number}</span><span className="min-w-0 flex-1"><span className="block font-semibold text-stone-900">{title}</span><span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span></span><span className="shrink-0 text-sm font-medium text-amber-800">{en ? 'Open lesson →' : 'Abrir lección →'}</span></a>)}</div></section>
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8"><p className="text-sm font-medium text-amber-900">{en ? 'Module integration' : 'Integración del módulo'}</p><h2 className="mt-2 text-2xl font-semibold text-amber-950">{en ? 'Classify → reconstruct → explain' : 'Clasifica → reconstruye → explica'}</h2><p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.integration}</p></section>
      </div>
    </CourseShell>
  );
}
