import CourseShell from '../components/course/CourseShell';

const module = {
  sort_order: 3,
  title: 'Cuando el aire construye la estructura',
  guiding_question: '¿Cómo conseguimos que una preparación gane volumen y conserve ese volumen hasta convertirse en un producto terminado?',
  expected_result: 'Reconocer el papel del huevo como agente aireante, entender por qué la harina se incorpora suavemente y empezar a interpretar el volumen y la estructura de una masa batida ligera.',
};

const lessons = [
  ['12', 'El aire también construye la estructura', 'Entiende cómo el batido del huevo incorpora aire y por qué la mezcla posterior debe tratarse con cuidado.', '/leccion-el-aire-construye-la-estructura'],
  ['13', 'Cuando el huevo sostiene una masa', 'Aplicar el principio de las masas batidas ligeras y reconocer el punto de batido.', '/leccion-cuando-el-huevo-sostiene-una-masa'],
  ['14', 'El pionono: construir y conservar volumen', 'Llevar el principio a una masa flexible y en plancha.', '#'],
  ['15', 'Tres leches: cuando una masa recibe humedad', 'Observar cómo un bizcocho ligero absorbe un jarabe sin perder su estructura.', '#'],
  ['16', 'Merengues: aire + azúcar', 'Conectar el batido de claras con una nueva familia de estructuras aireadas.', '#'],
];

export default function ModuleThreePage() {
  return (
    <CourseShell eyebrow="Módulo 3" title={module.title} backHref="/ruta" backLabel="Volver a la ruta">
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
          <p className="text-sm font-medium text-amber-900">La idea que conecta con los módulos anteriores</p>
          <p className="mt-2 max-w-3xl leading-7 text-amber-950">
            Ya aprendiste que una masa puede necesitar desarrollar una estructura o, por el contrario, evitar el desarrollo del gluten.
            Ahora aparece otra posibilidad: construir volumen incorporando aire y después conservarlo durante la mezcla y la cocción.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">5 lecciones</span>
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
          Este módulo reorganiza y desarrolla los principios de las masas batidas ligeras presentes en la Clase 9 de la fuente.
        </p>
      </div>
    </CourseShell>
  );
}
