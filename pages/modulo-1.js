import CourseShell from '../components/course/CourseShell';

const module = {
  sort_order: 1,
  title: 'Entrar a la panadería: masas batidas pesadas',
  guiding_question: '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?',
  expected_result: 'Ejecutar tres masas batidas pesadas con distintos métodos y describir lo observado.',
};

const lessons = [
  ['1', 'Entrar a la panadería'],
  ['2', 'Primer panqué: acremado'],
  ['3', 'Segunda ruta: aceite'],
  ['4', 'Repetición con criterio'],
  ['5', 'El horno también es parte'],
  ['6', 'Mini reto: ¿qué cambió?'],
];

export default function ModuleOnePage() {
  return (
    <CourseShell eyebrow="Módulo 1" title={module.title}>
      <div className="space-y-5">
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Pregunta guía</p>
          <p className="mt-2 text-lg leading-8 text-stone-800">{module.guiding_question}</p>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Al terminar</p>
          <p className="mt-2 leading-7 text-stone-700">{module.expected_result}</p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-stone-900">Lecciones</h2>
          <div className="space-y-3">
            {lessons.map(([number, title]) => (
              <div key={number} className="rounded-2xl border border-stone-200 bg-white p-5">
                <span className="text-sm font-medium text-stone-400">{number}</span>
                <h3 className="mt-1 font-semibold text-stone-900">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CourseShell>
  );
}
