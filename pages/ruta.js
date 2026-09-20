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
    expected_result: 'Ejecutar tres masas batidas pesadas con distintos métodos y describir lo observado.',
  },
  {
    id: 'modulo-2',
    sort_order: 2,
    href: '/modulo-2',
    title: 'Cuando una masa no quiere gluten: masas friables',
    guiding_question: '¿Por qué algunas masas necesitan desarrollar estructura y otras necesitan evitarla?',
    expected_result: 'Reconocer qué busca una masa friable, entender el papel de la grasa y el reposo, y distinguir el método de arenado del acremado.',
  },
  {
    id: 'modulo-3',
    sort_order: 3,
    href: '/modulo-3',
    title: 'Cuando el aire construye la estructura',
    guiding_question: '¿Cómo conseguimos que una preparación gane volumen y conserve ese volumen hasta convertirse en un producto terminado?',
    expected_result: 'Reconocer el papel del huevo como agente aireante y relacionarlo con merengues, montaje y pasta choux.',
  },
  {
    id: 'modulo-4',
    sort_order: 4,
    href: '/modulo-4',
    title: 'Fermentación y panadería',
    guiding_question: '¿Cómo pasa una masa de ingredientes mezclados a una pieza de pan con volumen, estructura y características propias?',
    expected_result: 'Interpretar el proceso de una masa fermentada y comenzar a comparar diferentes familias de pan.',
  },
  {
    id: 'modulo-5',
    sort_order: 5,
    href: '/modulo-5',
    title: 'Pan mexicano y tradición',
    guiding_question: '¿Cómo se traducen las técnicas de panificación en productos mexicanos con identidad propia?',
    expected_result: 'Relacionar técnicas de masa, formado, fermentación y acabado con piezas tradicionales documentadas en la fuente.',
  },
  {
    id: 'modulo-6',
    sort_order: 6,
    href: '#',
    title: 'Laminados',
    guiding_question: '¿Cómo se construyen capas de masa y grasa y qué hace que se separen durante el horneado?',
    expected_result: 'Comprender el principio de laminación y reconocer sus aplicaciones en hojaldre, croissant y piezas danesas.',
    comingSoon: true,
  },
  {
    id: 'modulo-7',
    sort_order: 7,
    href: '#',
    title: 'Chocolatería',
    guiding_question: '¿Qué cambia cuando controlamos la cristalización del chocolate?',
    expected_result: 'Comprender el temperado y sus aplicaciones en piezas moldeadas, rellenas y decorativas.',
    comingSoon: true,
  },
  {
    id: 'modulo-8',
    sort_order: 8,
    href: '#',
    title: 'Pastelería contemporánea',
    guiding_question: '¿Cómo se combinan técnicas conocidas para construir postres de varias capas y texturas?',
    expected_result: 'Interpretar montajes contemporáneos mediante bases, cremosos, mousses, insertos y glaseados.',
    comingSoon: true,
  },
  {
    id: 'modulo-9',
    sort_order: 9,
    href: '#',
    title: 'Producción y cierre',
    guiding_question: '¿Cómo convertir la técnica aprendida en repetición controlada y criterio de producción?',
    expected_result: 'Repetir, comparar y organizar procesos con mayor consistencia.',
    comingSoon: true,
  },
];

export default function RutaPage() {
  return (
    <CourseShell eyebrow="Tu ruta" title={course.title} description={course.description}>
      <div className="mb-8 rounded-2xl bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">Principio de la ruta</p>
        <p className="mt-2 max-w-3xl text-amber-950">
          Aprenderás a interpretar lo que ocurre en la masa, no solamente a repetir instrucciones.
        </p>
      </div>

      <div className="grid gap-5">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </CourseShell>
  );
}
