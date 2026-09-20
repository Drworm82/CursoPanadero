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
    slug: 'modulo-1-masas-batidas-pesadas',
    title: 'Entrar a la panadería: masas batidas pesadas',
    guiding_question: '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?',
    expected_result: 'Ejecutar tres masas batidas pesadas con distintos métodos y describir lo observado.',
  },
  {
    id: 'modulo-2',
    sort_order: 2,
    slug: 'modulo-2-masas-friables',
    title: 'Cuando una masa no quiere gluten: masas friables',
    guiding_question: '¿Por qué algunas masas necesitan desarrollar estructura y otras necesitan evitarla?',
    expected_result: 'Reconocer qué busca una masa friable, entender el papel de la grasa y el reposo, y distinguir el método de arenado del acremado.',
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
        {modules.map((module) => <ModuleCard key={module.id} module={module} />)}
      </div>
    </CourseShell>
  );
}
