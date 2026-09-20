import CourseShell from '../components/course/CourseShell';

const module = {
  sort_order: 2,
  title: 'Cuando una masa no quiere gluten: masas friables',
  guiding_question: '¿Por qué algunas masas necesitan desarrollar estructura y otras necesitan evitarla?',
  expected_result: 'Reconocer qué busca una masa friable, entender el papel de la grasa y el reposo, y distinguir el método de arenado del acremado.',
};

const lessons = [
  ['7', 'Una masa que quiere lo contrario', 'Descubre por qué en una masa friable buscamos mantener el gluten lo más aislado posible.', '/leccion-masa-friable'],
  ['8', 'Sablée y sucrée', 'Conoce el método de arenado y compara dos pastas friables de la fuente.', '/leccion-sablee-y-sucree'],
  ['9', 'De la pasta a la tarta', 'Aplica la pasta, cocínala, impermeabilízala y entiende cómo se construye una tarta de frutas.', '/leccion-de-la-pasta-a-la-tarta'],
  ['10', 'Pay de limón', 'Integra una pasta sucrée con crema de limón y merengue suizo.', '/leccion-pay-de-limon'],
  ['11', 'Lo que cambia cuando cambia el objetivo', 'Cierra el módulo relacionando gluten, grasa, reposo y método.', '#'],
];

const sourceNote = 'La secuencia reorganiza los contenidos de la Clase 4 para que primero se entienda el principio técnico y después se practiquen sus aplicaciones.';

export default function ModuleTwoPage() {
  return (
    <CourseShell eyebrow="Módulo 2" title={module.title} backHref="/ruta" backLabel="Volver a la ruta">
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
            En las masas batidas aprendiste que trabajar de más la harina puede desarrollar gluten cuando no lo buscamos.
            Ahora vamos a ver una familia de masas en la que ese principio se vuelve todavía más importante.
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
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">
                  {number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-stone-900">{title}</span>
                  <span className="mt-1 block text-sm leading-6 text-stone-600">{description}</span>
                </span>
                <span className="shrink-0 text-sm text-stone-400">{href === '#' ? 'Próximamente' : 'Abrir →'}</span>
              </a>
            ))}
          </div>
        </section>

        <p className="text-sm leading-6 text-stone-500">{sourceNote}</p>
      </div>
    </CourseShell>
  );
}
