import CourseShell from '../components/course/CourseShell';

const module = {
  sort_order: 3,
  title: 'Cuando el aire construye la estructura',
  guiding_question: '¿Cómo conseguimos que una preparación gane volumen y conserve ese volumen hasta convertirse en un producto terminado?',
  expected_result: 'Reconocer el papel del huevo como agente aireante, entender por qué la harina se incorpora suavemente y relacionar después ese principio con merengues, montaje y pasta choux.',
};

const lessons = [
  ['13', 'El aire también construye la estructura', 'Entiende cómo el batido del huevo incorpora aire y por qué la mezcla posterior debe tratarse con cuidado.', '/leccion-el-aire-construye-la-estructura'],
  ['14', 'El pionono: construir y conservar volumen', 'Lleva el principio a una masa flexible y en plancha que debe poder doblarse.', '/leccion-el-pionono'],
  ['15', 'Merengues: aire + azúcar', 'Conecta el batido de claras y el azúcar con nuevas estructuras aireadas y conoce la entrada del merengue italiano.', '/leccion-merengues'],
  ['16', 'Tres leches: cuando una masa recibe humedad', 'Observa cómo un bizcocho ligero recibe y absorbe un jarabe durante el montaje.', '/leccion-tres-leches'],
  ['17', 'Una masa que se cocina antes de hornearse', 'Entiende por qué la pasta choux empieza su transformación en la cacerola y cómo el huevo completa la masa antes del formado.', '/leccion-una-masa-que-se-cocina'],
  ['18', 'El huevo cambia la masa', 'Reconoce cómo cambia la consistencia al incorporar el huevo y cuándo la pasta queda manejable con duya.', '/leccion-el-huevo-cambia-la-masa'],
  ['19', 'El vapor construye el interior', 'Entiende cómo el vapor impulsa el crecimiento y cómo el calor permite que la pieza conserve su estructura.', '/leccion-el-vapor-construye-el-interior'],
  ['20', 'De una masa salen varios productos', 'Lleva la misma base técnica a profiteroles, éclairs, cisnes y religiosas y entiende qué cambia al convertir una masa en productos distintos.', '/leccion-de-una-masa-salen-varios-productos'],
  ['21', 'Crema y relleno también construyen el producto', 'Integra las preparaciones de crema y relleno que acompañan a las piezas de choux.', '/leccion-crema-y-relleno'],
  ['22', 'La consistencia también construye el acabado', 'Relaciona la consistencia de una preparación con su uso para rellenar, cubrir o decorar.', '/leccion-montar-y-decorar'],
  ['23', 'Cuando una estructura necesita frío', 'Compara cómo un cheesecake horneado y uno frío llegan a una estructura estable mediante rutas distintas.', '/leccion-cuando-una-estructura-necesita-frio'],
  ['24', 'Cerrar un pastel: estructura, humedad y acabado', 'Integra estructura, humedad, relleno, cobertura, frío y señales de finalización antes de pasar a la panadería fermentada.', '/leccion-cerrar-un-pastel'],
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
            Ya aprendiste que una masa puede necesitar desarrollar estructura o, por el contrario, evitar el desarrollo del gluten.
            Ahora aparece otra posibilidad: construir volumen incorporando aire y después conservarlo durante la mezcla, la cocción y el montaje.
          </p>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Ruta de aprendizaje</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">Lecciones</h2>
            </div>
            <span className="text-sm text-stone-500">12 lecciones</span>
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
                <span className="shrink-0 text-sm text-stone-400">{href === '#' ? 'En preparación' : 'Abrir →'}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </CourseShell>
  );
}
