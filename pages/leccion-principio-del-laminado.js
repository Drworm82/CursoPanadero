import CourseShell from '../components/course/CourseShell';

const lesson = {
  number: '40',
  title: 'El principio del laminado',
  subtitle: 'Empaste, refrigeración y vueltas: las operaciones que la fuente sí permite observar.',
};

const documented = [
  {
    name: 'Croissant',
    detail: 'La receta separa la masa del empaste: la masa lleva 100 g de mantequilla y el empaste 250 g de margarina Flex Azul.',
    sequence: 'Fermenta 45 minutos, se poncha y se refrigera 20 minutos. Después se extiende, se envuelve la margarina, se refrigera, se da una vuelta doble, se refrigera de nuevo y se da una vuelta sencilla.',
  },
  {
    name: 'Pan danés',
    detail: 'La masa lleva 45 g de mantequilla y la receta incorpora 225 g de margarina Flex azul para el empaste.',
    sequence: 'Fermenta 30 minutos, se poncha, se extiende en forma rectangular y se refrigera. Después se empasta con la margarina y se dan tres vueltas sencillas.',
  },
];

export default function LessonPrincipioDelLaminadoPage() {
  return (
    <CourseShell
      eyebrow="Módulo 6 · Lección 40"
      title={lesson.title}
      subtitle={lesson.subtitle}
      backHref="/modulo-6"
      backLabel="Volver al módulo"
    >
      <div className="space-y-8">
        <section className="rounded-2xl bg-amber-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Pregunta de la lección</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">
            ¿Qué operaciones aparecen cuando una receta trabaja una masa con un empaste?
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">
            Las dos recetas laminadas documentadas tienen una masa y una grasa destinada al empaste. También
            incorporan refrigeración y vueltas antes del formado. La comparación permite reconocer la secuencia
            sin atribuirle a la fuente una explicación técnica que no está escrita.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {documented.map((item) => (
            <article key={item.name} className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Receta documentada</p>
              <h2 className="mt-2 text-2xl font-semibold text-stone-900">{item.name}</h2>
              <p className="mt-4 leading-7 text-stone-700">{item.detail}</p>
              <div className="mt-5 rounded-xl bg-stone-50 p-4">
                <p className="text-sm font-semibold text-stone-500">Secuencia de laminado</p>
                <p className="mt-2 leading-7 text-stone-700">{item.sequence}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Qué tienen en común</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Una secuencia que se puede seguir</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {[
              ['1', 'Masa', 'Se prepara la masa base antes del empaste.'],
              ['2', 'Refrigeración', 'Ambas recetas documentan refrigeración antes o durante el trabajo del empaste.'],
              ['3', 'Empaste y vueltas', 'La grasa se incorpora como empaste y la masa pasa por vueltas.'],
              ['4', 'Formado', 'Después del trabajo de laminado, cada receta continúa hacia su propio formato.'],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-xl bg-stone-50 p-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-sm font-semibold text-amber-900">{number}</span>
                <p className="mt-3 font-semibold text-stone-900">{title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">Observación clave</p>
          <h2 className="mt-2 text-2xl font-semibold">El número y tipo de vueltas no son iguales.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-200">
            El croissant documenta una vuelta doble y después una vuelta sencilla. El pan danés documenta tres
            vueltas sencillas. La fuente permite comparar esas secuencias, pero no explica técnicamente por qué
            cada receta utiliza esa combinación.
          </p>
        </section>

        <section className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">Práctica</p>
          <h2 className="mt-2 text-2xl font-semibold text-stone-900">Dibuja la secuencia</h2>
          <p className="mt-3 leading-7 text-stone-700">
            En una hoja, representa cada receta como una línea de pasos. Marca con un símbolo diferente la
            fermentación, la refrigeración, el empaste y cada vuelta. Después compara las dos líneas y señala dónde
            dejan de coincidir.
          </p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Límite de la fuente</p>
          <p className="mt-2 leading-7 text-stone-700">
            La fuente documenta las operaciones de empaste, refrigeración y vueltas, pero no define de forma
            teórica la laminación ni explica el mecanismo físico de separación de capas durante el horneado.
            Tampoco aporta una receta de hojaldre.
          </p>
        </section>

        <section className="border-t border-stone-200 pt-6">
          <p className="text-xs leading-6 text-stone-500">
            Fuente de esta lección: <code>data/recetas.js</code>, recetas «Croissant Casero» y «Pan Danés Varios Sabores».
          </p>
        </section>
      </div>
    </CourseShell>
  );
}
