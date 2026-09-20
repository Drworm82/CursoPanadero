import CourseShell from '../components/course/CourseShell';

const module = {
  sort_order: 4,
  title: 'Cuando el vapor construye la estructura',
  guiding_question: '¿Cómo una masa que primero se cocina en la cacerola termina creciendo y formando un interior hueco en el horno?',
  expected_result: 'Reconocer la lógica de una masa de cocción mixta, interpretar sus cambios durante la cocción inicial y relacionar la consistencia final con el formado y la cocción.',
};

const lessons = [
  ['17', 'Una masa que se cocina antes de hornearse', 'Entiende por qué la pasta choux empieza su transformación en la cacerola y cómo el huevo completa la masa antes del formado.', '/leccion-una-masa-que-se-cocina'],
  ['18', 'El huevo cambia la masa', 'Reconoce cómo cambia la consistencia al incorporar el huevo y cuándo la pasta queda manejable con duya.', '/leccion-el-huevo-cambia-la-masa'],
  ['19', 'El vapor construye el interior', 'Entiende cómo el vapor impulsa el crecimiento y cómo el calor permite que la pieza conserve su estructura.', '/leccion-el-vapor-construye-el-interior'],
  ['20', 'De una masa salen varios productos', 'Lleva la misma base técnica a profiteroles, éclairs, cisnes y religiosas y entiende qué cambia al convertir una masa en productos distintos.', '/leccion-de-una-masa-salen-varios-productos'],
];

export default function ModuleFourPage() {
  return (
    <CourseShell eyebrow="Módulo 4" title={module.title} backHref="/ruta" backLabel="Volver a la ruta">
      <div className="space-y-8">
        <div className="grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Pregunta guía</p>
            <p className="mt-3 text-lg leading-8 text-stone-800">{module.guiding_question}</p>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Al terminar</p>
            <p className="mt-3 leading-7 text-stone-700">{module.expected_result}</p>
          </section>
        </div>

        <section className="rounded-2xl bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">La idea que conecta con el módulo anterior</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            Ya viste cómo el huevo puede construir volumen cuando se bate y cómo una masa ligera debe proteger ese volumen.
            Ahora cambia el mecanismo: la pasta choux empieza con una cocción en cacerola y después termina de transformarse en el horno.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">4 lecciones</span>
          </div>

          <div className="grid gap-3">
            {lessons.map(([number, title, description, href]) => (
              <a
                key={number}
                href={href}
                className={`group flex items-center gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition ${href === '#' ? 'cursor-default opacity-65' : 'hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md'}`}
                onClick={(event) => href === '#' && event.preventDefault()}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">{number}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-stone-900">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                </span>
                <span className="shrink-0 text-sm text-stone-400">{href === '#' ? 'Próximamente' : 'Abrir →'}</span>
              </a>
            ))}
          </div>
        </section>

        <p className="text-sm leading-6 text-stone-500">
          Este módulo reorganiza y desarrolla la Pasta Choux de la Clase 11 como una progresión técnica: cocción inicial, incorporación del huevo, expansión en horno y aplicaciones.
        </p>
      </div>
    </CourseShell>
  );
}
