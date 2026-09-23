import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';
import ModuleCard from '../components/course/ModuleCard';

const content = {
  es: {
    course: { title: 'Curso de Panadería y Repostería', description: 'Ruta progresiva de aprendizaje basada en técnicas, recetas, observación y diagnóstico.' },
    studyLabel: 'Cómo estudiar este curso',
    studyTitle: 'Aprende haciendo, observando y explicando',
    studyText: 'Las recetas no son solamente instrucciones: son oportunidades para practicar las técnicas del curso. Antes de empezar una preparación, recupera lo que ya sabes. Durante el proceso, observa los cambios indicados y comprueba si puedes reconocerlos. Al terminar, intenta explicar qué hiciste y qué relación tiene con otras preparaciones.',
    steps: [['1. Comprende', 'Identifica qué vas a aprender.'], ['2. Haz', 'Ejecuta la preparación con la fuente como guía.'], ['3. Observa', 'Reconoce cambios y señales durante el proceso.'], ['4. Explica', 'Comprueba si puedes reconstruir lo aprendido.']],
    modules: [
      ['modulo-1', 'Entrar a la panadería: masas batidas pesadas', '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?', 'Ejecutar las preparaciones del módulo aplicando y comparando métodos de masas batidas pesadas, y explicar qué se observa durante la mezcla y la cocción.'],
      ['modulo-2', 'Cuando una masa no quiere gluten: masas friables', '¿Por qué algunas masas necesitan desarrollar estructura y otras necesitan evitarla?', 'Aplicar los métodos documentados para masas friables, comparar sus efectos sobre la pasta y explicar cómo el trabajo, la grasa y el reposo se relacionan con el resultado.'],
      ['modulo-3', 'Cuando el aire construye la estructura', '¿Cómo conseguimos que una preparación gane volumen y conserve ese volumen hasta convertirse en un producto terminado?', 'Aplicar y comparar los principios documentados para construir volumen, conservar aire, trabajar merengues y pasta choux, y relacionar esas estructuras con el montaje y el frío de productos terminados.'],
      ['modulo-4', 'Fermentación y panadería', '¿Cómo pasa una masa de ingredientes mezclados a una pieza de pan con volumen, estructura y características propias?', 'Ejecutar y comparar las etapas documentadas de masas fermentadas, reconocer señales de fermentación, amasado, formado y horneado, y explicar cómo cambian los procesos según la receta.'],
      ['modulo-5', 'Pan mexicano: fórmulas, procesos y acabados', '¿Cómo se traducen las técnicas de panificación en productos mexicanos con identidad propia?', 'Comparar las preparaciones mexicanas documentadas y explicar cómo sus ingredientes, proceso, formado y acabado construyen diferencias observables entre las piezas.'],
      ['modulo-6', 'Laminados y pastelería clásica', '¿Cómo se construyen capas, masas y preparaciones clásicas hasta convertirse en piezas terminadas?', 'Reconstruir y comparar las secuencias documentadas de laminado, pastelería internacional, pasteles de fiesta y postres mexicanos, identificando las operaciones y señales que aparecen en cada receta.'],
      ['modulo-7', 'Chocolatería', '¿Qué cambia cuando controlamos la cristalización del chocolate?', 'Reconstruir la secuencia documentada del temperado y aplicarla al análisis de piezas moldeadas, rellenas y decorativas, comparando las operaciones de cada preparación.'],
      ['modulo-8', 'Pastelería contemporánea', '¿Cómo se combinan técnicas conocidas para construir postres de varias capas y texturas?', 'Interpretar montajes contemporáneos mediante bases, cremosos, mousses, insertos y glaseados, a partir de las preparaciones documentadas en la fuente.'],
      ['modulo-9', 'Pasteles a gran escala', '¿Cómo se organizan pasteles a gran escala mediante sistemas de producción en serie?', 'Reconstruir y comparar la organización de las preparaciones, la secuencia de producción y el montaje de los pasteles a gran escala documentados en la Clase 38.'],
    ],
  },
  en: {
    course: { title: 'Baking and Pastry Course', description: 'A progressive learning path based on techniques, recipes, observation, and diagnosis.' },
    studyLabel: 'How to study this course',
    studyTitle: 'Learn by doing, observing, and explaining',
    studyText: 'Recipes are not only instructions: they are opportunities to practice the techniques in the course. Before starting a preparation, recall what you already know. During the process, observe the indicated changes and check whether you can recognize them. At the end, try to explain what you did and how it relates to other preparations.',
    steps: [['1. Understand', 'Identify what you are going to learn.'], ['2. Do', 'Execute the preparation using the source as your guide.'], ['3. Observe', 'Recognize changes and signals during the process.'], ['4. Explain', 'Check whether you can reconstruct what you learned.']],
    modules: [
      ['modulo-1', 'Entering baking: heavy batters', 'What am I doing when I mix a batter, and how do I know when to stop working it?', 'Execute the module preparations using and comparing heavy-batter methods, and explain what you observe during mixing and baking.'],
      ['modulo-2', 'When a dough does not want gluten: shortcrusts', 'Why do some doughs need to develop structure while others need to avoid it?', 'Apply the documented methods for shortcrusts, compare their effects on the dough, and explain how working, fat, and resting relate to the result.'],
      ['modulo-3', 'When air builds structure', 'How do we make a preparation gain volume and retain it until it becomes a finished product?', 'Apply and compare the documented principles for building volume, retaining air, working with meringues and choux pastry, and relating those structures to assembly and chilling.'],
      ['modulo-4', 'Fermentation and baking', 'How does a dough move from mixed ingredients to bread with volume, structure, and distinctive characteristics?', 'Execute and compare the documented stages of fermented doughs, recognize fermentation, kneading, shaping, and baking signals, and explain how processes change according to the recipe.'],
      ['modulo-5', 'Mexican bread: formulas, processes, and finishes', 'How are baking techniques translated into Mexican products with their own identity?', 'Compare the documented Mexican preparations and explain how their ingredients, process, shaping, and finish create observable differences.'],
      ['modulo-6', 'Laminated doughs and classical pastry', 'How are layers, doughs, and classical preparations built into finished pieces?', 'Reconstruct and compare the documented sequences for lamination, international pastry, celebration cakes, and Mexican desserts, identifying the operations and signals in each recipe.'],
      ['modulo-7', 'Chocolate work', 'What changes when we control chocolate crystallization?', 'Reconstruct the documented tempering sequence and apply it to the analysis of molded, filled, and decorative pieces, comparing the operations in each preparation.'],
      ['modulo-8', 'Contemporary pastry', 'How are known techniques combined to build desserts with multiple layers and textures?', 'Interpret contemporary assemblies through bases, crémeux, mousses, inserts, and glazes, using the preparations documented in the source.'],
      ['modulo-9', 'Large-scale cakes', 'How are large-scale cakes organized through production systems?', 'Reconstruct and compare the organization, production sequence, and assembly of the large-scale cakes documented in Class 38.'],
    ],
  },
};

export default function RutaPage() {
  const { locale = 'es' } = useRouter();
  const t = content[locale] || content.es;
  const modules = t.modules.map(([id, title, guiding_question, expected_result], index) => ({ id, sort_order: index + 1, href: `/${id}`, title, guiding_question, expected_result }));

  return (
    <CourseShell eyebrow={locale === 'en' ? 'Your course' : 'Tu ruta'} title={t.course.title} description={t.course.description}>
      <div className="mb-8 space-y-4">
        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">{t.studyLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">{t.studyTitle}</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">{t.studyText}</p>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <div className="grid gap-3 md:grid-cols-4">
            {t.steps.map(([title, text]) => <div key={title}><p className="font-semibold text-stone-900">{title}</p><p className="mt-1 text-sm leading-6 text-stone-600">{text}</p></div>)}
          </div>
        </section>
      </div>
      <div className="grid gap-5">
        {modules.map((module) => <ModuleCard key={module.id} module={module} />)}
      </div>
    </CourseShell>
  );
}
