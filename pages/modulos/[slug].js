import CourseShell from '../../components/course/CourseShell';

const module = {
  sort_order: 1,
  title: 'Entrar a la panadería: masas batidas pesadas',
  guiding_question: '¿Qué estoy haciendo cuando mezclo una masa y cómo sé cuándo dejar de trabajarla?',
  expected_result: 'Ejecutar tres masas batidas pesadas con distintos métodos y describir lo observado.',
};

const lessons = [
  { id: '1', sort_order: 1, slug: 'entrar-a-la-panaderia', title: 'Entrar a la panadería', objective: 'Conocer la lógica de la ruta y perder el miedo a empezar.' },
  { id: '2', sort_order: 2, slug: 'primer-panque-acremado', title: 'Primer panqué: acremado', objective: 'Observar qué ocurre al trabajar una masa batida pesada.' },
  { id: '3', sort_order: 3, slug: 'segunda-ruta-aceite', title: 'Segunda ruta: aceite', objective: 'Comparar otro método de mezcla.' },
  { id: '4', sort_order: 4, slug: 'repeticion-con-criterio', title: 'Repetición con criterio', objective: 'Repetir con atención a los cambios.' },
  { id: '5', sort_order: 5, slug: 'el-horno-tambien-es-parte', title: 'El horno también es parte', objective: 'Entender que el horneado también forma parte del proceso.' },
  { id: '6', sort_order: 6, slug: 'mini-reto-que-cambio', title: 'Mini reto: ¿qué cambió?', objective: 'Comparar resultados y describir lo observado.' },
];

export default function ModulePage() {
  return (
    <CourseShell eyebrow="Módulo 1" title={module.title}>
      <div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
        <section className="space-y-5">
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
              {lessons.map((lesson) => (
                <a key={lesson.id} href={`/lecciones/${lesson.slug}`} className="block rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">
                  <div className="flex gap-4">
                    <span className="text-sm font-medium text-stone-400">{lesson.sort_order}</span>
                    <div>
                      <h3 className="font-semibold text-stone-900">{lesson.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-stone-600">{lesson.objective}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <aside className="rounded-2xl bg-stone-900 p-6 text-white">
          <p className="text-sm font-medium text-stone-300">Progreso</p>
          <p className="mt-2 text-3xl font-semibold">0 / {lessons.length}</p>
        </aside>
      </div>
    </CourseShell>
  );
}
