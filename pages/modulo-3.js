import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';

const data = {
  es: {
    title: 'Cuando el aire construye la estructura',
    question: '¿Cómo conseguimos que una preparación gane volumen y conserve ese volumen hasta convertirse en un producto terminado?',
    result: 'Aplicar y comparar los principios documentados para construir volumen, conservar aire, trabajar merengues y pasta choux, y relacionar esas estructuras con el montaje y el frío de productos terminados.',
    study: 'En este módulo no memorices solamente nombres de masas y productos. En cada preparación identifica qué construye la estructura, ejecuta la operación documentada, observa la señal que indica que puedes continuar y después explica qué relación existe entre esa operación y el resultado.',
    integrationTitle: 'Aprende a reconocer qué sostiene cada producto',
    integration: 'Antes de cerrar el módulo, compara al menos cinco preparaciones: una masa batida ligera, el Pionono, un merengue, la pasta choux y uno de los cheesecakes. Para cada una escribe qué construye la estructura, qué señal debes observar y qué ocurre después de la cocción o del montaje.',
    lessons: [
      ['13','El aire también construye la estructura','Entiende cómo el batido del huevo incorpora aire y por qué la mezcla posterior debe tratarse con cuidado.','/leccion-el-aire-construye-la-estructura'],
      ['14','El pionono: construir y conservar volumen','Lleva el principio a una masa flexible y en plancha que debe poder doblarse.','/leccion-el-pionono'],
      ['15','Merengues: aire + azúcar','Conecta el batido de claras y el azúcar con nuevas estructuras aireadas y conoce la entrada del merengue italiano.','/leccion-merengues'],
      ['16','Tres leches: cuando una masa recibe humedad','Observa cómo un bizcocho ligero recibe y absorbe un jarabe durante el montaje.','/leccion-tres-leches'],
      ['17','Una masa que se cocina antes de hornearse','Entiende por qué la pasta choux empieza su transformación en la cacerola y cómo el huevo completa la masa antes del formado.','/leccion-una-masa-que-se-cocina'],
      ['18','El huevo cambia la masa','Reconoce cómo cambia la consistencia al incorporar el huevo y cuándo la pasta queda manejable con duya.','/leccion-el-huevo-cambia-la-masa'],
      ['19','El vapor construye el interior','Entiende cómo el vapor impulsa el crecimiento y cómo el calor permite que la pieza conserve su estructura.','/leccion-el-vapor-construye-el-interior'],
      ['20','De una masa salen varios productos','Lleva la misma base técnica a profiteroles, éclairs, cisnes y religiosas y entiende qué cambia al convertir una masa en productos distintos.','/leccion-de-una-masa-salen-varios-productos'],
      ['21','Crema y relleno también construyen el producto','Integra las preparaciones de crema y relleno que acompañan a las piezas de choux.','/leccion-crema-y-relleno'],
      ['22','La consistencia también construye el acabado','Relaciona la consistencia de una preparación con su uso para rellenar, cubrir o decorar.','/leccion-montar-y-decorar'],
      ['23','Cuando una estructura necesita frío','Compara cómo un cheesecake horneado y uno frío llegan a una estructura estable mediante rutas distintas.','/leccion-cuando-una-estructura-necesita-frio'],
      ['24','Cerrar un pastel: estructura, humedad y acabado','Integra estructura, humedad, relleno, cobertura, frío y señales de finalización antes de pasar a la panadería fermentada.','/leccion-cerrar-un-pastel'],
    ],
  },
  en: {
    title: 'When Air Builds the Structure',
    question: 'How do we make a preparation gain volume and keep that volume until it becomes a finished product?',
    result: 'Apply and compare the documented principles for building volume, preserving air, working with meringues and choux pastry, and relating those structures to the assembly and chilling of finished products.',
    study: 'In this module, do not simply memorize names of doughs and products. In each preparation, identify what builds the structure, perform the documented operation, observe the signal that tells you when to continue, and then explain the relationship between that operation and the result.',
    integrationTitle: 'Learn to recognize what supports each product',
    integration: 'Before closing the module, compare at least five preparations: a light whipped batter, Pionono, a meringue, choux pastry, and one of the cheesecakes. For each one, write what builds the structure, what signal you should observe, and what happens after baking or assembly.',
    lessons: [
      ['13','Air Also Builds Structure','Understand how beating eggs incorporates air and why the following mixing must be handled carefully.','/leccion-el-aire-construye-la-estructura'],
      ['14','Pionono: Building and Preserving Volume','Apply the principle to a flexible sheet cake that must be able to bend.','/leccion-el-pionono'],
      ['15','Meringues: Air + Sugar','Connect whipping egg whites and sugar with new aerated structures and introduce Italian meringue.','/leccion-merengues'],
      ['16','Tres Leches: When a Cake Receives Moisture','Observe how a light cake receives and absorbs syrup during assembly.','/leccion-tres-leches'],
      ['17','A Dough That Is Cooked Before Baking','Understand why choux pastry begins its transformation in the saucepan and how egg completes the dough before piping.','/leccion-una-masa-que-se-cocina'],
      ['18','Egg Changes the Dough','Recognize how consistency changes as egg is incorporated and when the dough becomes workable with a piping bag.','/leccion-el-huevo-cambia-la-masa'],
      ['19','Steam Builds the Interior','Understand how steam drives expansion and how heat allows the piece to retain its structure.','/leccion-el-vapor-construye-el-interior'],
      ['20','One Dough Produces Several Products','Apply the same technical base to profiteroles, éclairs, swans, and religieuses and understand what changes when one dough becomes different products.','/leccion-de-una-masa-salen-varios-productos'],
      ['21','Cream and Filling Also Build the Product','Integrate the cream and filling preparations that accompany choux pieces.','/leccion-crema-y-relleno'],
      ['22','Consistency Also Builds the Finish','Relate preparation consistency to its use for filling, coating, or decorating.','/leccion-montar-y-decorar'],
      ['23','When a Structure Needs Cold','Compare how baked and chilled cheesecakes reach stable structure through different routes.','/leccion-cuando-una-estructura-necesita-frio'],
      ['24','Finishing a Cake: Structure, Moisture, and Finish','Integrate structure, moisture, filling, coating, chilling, and completion signals before moving to fermented baking.','/leccion-cerrar-un-pastel'],
    ],
  },
};

export default function ModuleThreePage() {
  const { locale = 'es' } = useRouter();
  const t = data[locale] || data.es;
  const en = locale === 'en';

  return (
    <CourseShell eyebrow={en ? 'Module 3' : 'Módulo 3'} title={t.title} backHref={en ? '/en/ruta' : '/ruta'} backLabel={en ? 'Back to course' : 'Volver a la ruta'}>
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{en ? 'Guiding question' : 'Pregunta guía'}</p><p className="mt-3 text-lg leading-8 text-stone-800">{t.question}</p></section>
          <section className="rounded-2xl border border-stone-200 bg-white p-6"><p className="text-sm font-medium text-stone-500">{en ? 'By the end' : 'Al terminar'}</p><p className="mt-3 leading-7 text-stone-700">{t.result}</p></section>
        </div>

        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">{en ? 'How to study this module' : 'Cómo estudiar este módulo'}</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">{en ? 'Understand → Do → Observe → Explain' : 'Comprende → Haz → Observa → Explica'}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.study}</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <div className="grid gap-3 md:grid-cols-4">
            {(en
              ? [['1. Understand','Identify what builds volume or consistency.'],['2. Do','Perform the preparation following the source sequence.'],['3. Observe','Look for visible changes in volume, consistency, baking, or assembly.'],['4. Explain','Reconstruct why an operation appears at that point.']]
              : [['1. Comprende','Identifica qué construye el volumen o la consistencia.'],['2. Haz','Ejecuta la preparación siguiendo la secuencia de la fuente.'],['3. Observa','Busca cambios visibles de volumen, consistencia, cocción o montaje.'],['4. Explica','Reconstruye por qué una operación aparece en ese momento.']]
            ).map(([title,text])=><div key={title}><p className="font-semibold text-stone-900">{title}</p><p className="mt-1 text-sm leading-6 text-stone-600">{text}</p></div>)}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-amber-900">{en ? 'Module integration' : 'Integración del módulo'}</p>
          <h2 className="mt-2 text-2xl font-semibold text-amber-950">{t.integrationTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.integration}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {(en
              ? [['Before','What needs to happen to build volume or consistency?'],['During','What concrete signal tells you that you can continue?'],['After','What operation finishes building the product?']]
              : [['Antes','¿Qué necesita ocurrir para construir volumen o consistencia?'],['Durante','¿Qué señal concreta te indica que puedes continuar?'],['Después','¿Qué operación termina de construir el producto?']]
            ).map(([title,text])=><div key={title} className="rounded-2xl bg-white p-5"><p className="font-semibold text-stone-900">{title}</p><p className="mt-1 text-sm leading-6 text-stone-600">{text}</p></div>)}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4"><div><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{en ? 'Learning path' : 'Ruta de aprendizaje'}</p><h2 className="mt-1 text-2xl font-semibold text-stone-900">{en ? 'Lessons' : 'Lecciones'}</h2></div><span className="text-sm text-stone-500">{en ? '12 lessons' : '12 lecciones'}</span></div>
          <div className="grid gap-3">{t.lessons.map(([number,title,description,href])=><a key={number} href={href} className="group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">{number}</span><span className="min-w-0 flex-1"><span className="block font-semibold text-stone-900">{title}</span><span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span></span><span className="shrink-0 text-sm text-stone-400">{en ? 'Open →' : 'Abrir →'}</span></a>)}</div>
        </section>
      </div>
    </CourseShell>
  );
}
