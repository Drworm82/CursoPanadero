import CourseShell from '../components/course/CourseShell';
import ModuleCard from '../components/course/ModuleCard';

const course = {
  title: 'Curso de Panadería y Repostería',
  description: 'Ruta progresiva de aprendizaje basada en técnicas, recetas, observación y diagnóstico.',
};

const modules = [
  {
    id: 'modulo-1',
    sort_order: 1,
    href: '/modulo-1',
    title: 'Entrar a la panadería: masas batidas pesadas',
    guiding_question: '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?',
    expected_result: 'Ejecutar las preparaciones del módulo aplicando y comparando métodos de masas batidas pesadas, y explicar qué se observa durante la mezcla y la cocción.',
  },
  {
    id: 'modulo-2',
    sort_order: 2,
    href: '/modulo-2',
    title: 'Cuando una masa no quiere gluten: masas friables',
    guiding_question: '¿Por qué algunas masas necesitan desarrollar estructura y otras necesitan evitarla?',
    expected_result: 'Aplicar los métodos documentados para masas friables, comparar sus efectos sobre la pasta y explicar cómo el trabajo, la grasa y el reposo se relacionan con el resultado.',
  },
  {
    id: 'modulo-3',
    sort_order: 3,
    href: '/modulo-3',
    title: 'Cuando el aire construye la estructura',
    guiding_question: '¿Cómo conseguimos que una preparación gane volumen y conserve ese volumen hasta convertirse en un producto terminado?',
    expected_result: 'Aplicar y comparar los principios documentados para construir volumen, conservar aire, trabajar merengues y pasta choux, y relacionar esas estructuras con el montaje y el frío de productos terminados.',
  },
  {
    id: 'modulo-4',
    sort_order: 4,
    href: '/modulo-4',
    title: 'Fermentación y panadería',
    guiding_question: '¿Cómo pasa una masa de ingredientes mezclados a una pieza de pan con volumen, estructura y características propias?',
    expected_result: 'Ejecutar y comparar las etapas documentadas de masas fermentadas, reconocer señales de fermentación, amasado, formado y horneado, y explicar cómo cambian los procesos según la receta.',
  },
  {
    id: 'modulo-5',
    sort_order: 5,
    href: '/modulo-5',
    title: 'Pan mexicano y tradición',
    guiding_question: '¿Cómo se traducen las técnicas de panificación en productos mexicanos con identidad propia?',
    expected_result: 'Comparar las preparaciones mexicanas documentadas y explicar cómo sus ingredientes, proceso, formado y acabado construyen diferencias observables entre las piezas.'
  },
  {
    id: 'modulo-6',
    sort_order: 6,
    href: '/modulo-6',
    title: 'Laminados',
    guiding_question: '¿Cómo se construyen capas de masa y grasa y qué hace que se separen durante el horneado?',
    expected_result: 'Reconstruir y comparar las secuencias documentadas de croissant y pan danés, identificando empaste, refrigeración, vueltas y formado en cada receta.'
  },
  {
    id: 'modulo-7',
    sort_order: 7,
    href: '/modulo-7',
    title: 'Chocolatería',
    guiding_question: '¿Qué cambia cuando controlamos la cristalización del chocolate?',
    expected_result: 'Reconstruir la secuencia documentada del temperado y aplicarla al análisis de piezas moldeadas, rellenas y decorativas, comparando las operaciones de cada preparación.',
  },
  {
    id: 'modulo-8',
    sort_order: 8,
    href: '/modulo-8',
    title: 'Pastelería contemporánea',
    guiding_question: '¿Cómo se combinan técnicas conocidas para construir postres de varias capas y texturas?',
    expected_result: 'Interpretar montajes contemporáneos mediante bases, cremosos, mousses, insertos y glaseados, a partir de las preparaciones documentadas en la fuente.',
  },
  {
    id: 'modulo-9',
    sort_order: 9,
    href: '/modulo-9',
    title: 'Pasteles a gran escala',
    guiding_question: '¿Cómo se organizan pasteles a gran escala mediante sistemas de producción en serie?',
    expected_result: 'Reconstruir y comparar la organización de las preparaciones, la secuencia de producción y el montaje de los pasteles a gran escala documentados en la Clase 38.',
  },
];

export default function RutaPage() {
  return (
    <CourseShell eyebrow="Tu ruta" title={course.title} description={course.description}>
      <div className="mb-8 space-y-4">
        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">Cómo estudiar este curso</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Aprende haciendo, observando y explicando</h2>
          <p className="mt-3 max-w-3xl leading-7 text-amber-950">
            Las recetas no son solamente instrucciones: son oportunidades para practicar las técnicas del curso.
            Antes de empezar una preparación, recupera lo que ya sabes. Durante el proceso, observa los cambios
            indicados y comprueba si puedes reconocerlos. Al terminar, intenta explicar qué hiciste y qué relación
            tiene con otras preparaciones.
          </p>
        </section>
        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <div className="grid gap-3 md:grid-cols-4">
            <div><p className="font-semibold text-stone-900">1. Comprende</p><p className="mt-1 text-sm leading-6 text-stone-600">Identifica qué vas a aprender.</p></div>
            <div><p className="font-semibold text-stone-900">2. Haz</p><p className="mt-1 text-sm leading-6 text-stone-600">Ejecuta la preparación con la fuente como guía.</p></div>
            <div><p className="font-semibold text-stone-900">3. Observa</p><p className="mt-1 text-sm leading-6 text-stone-600">Reconoce cambios y señales durante el proceso.</p></div>
            <div><p className="font-semibold text-stone-900">4. Explica</p><p className="mt-1 text-sm leading-6 text-stone-600">Comprueba si puedes reconstruir lo aprendido.</p></div>
          </div>
        </section>
      </div>

      <div className="grid gap-5">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </CourseShell>
  );
}
