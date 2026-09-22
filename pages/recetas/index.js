import CourseShell from '../../components/course/CourseShell';

const recipes = [
  { href: '/receta-genoise-punto-liston', title: 'Genoise punto listón', description: 'Preparación guiada del genoise y reconocimiento del punto de batido.' },
  { href: '/receta-honguitos-merengue', title: 'Honguitos de merengue', description: 'Preparación y formado de merengue para una pieza decorativa.' },
  { href: '/receta-marmoleado-intenso-cafe', title: 'Marmoleado intenso de café', description: 'Receta disponible mediante el sistema público de recetas.' },
  { href: '/receta-panque-citricos', title: 'Panqué de cítricos', description: 'Receta disponible mediante el sistema público de recetas.' },
  { href: '/receta-panque-platano-streusel-canela', title: 'Panqué de plátano, streusel y canela', description: 'Receta disponible mediante el sistema público de recetas.' },
  { href: '/receta-pasta-choux', title: 'Pasta choux', description: 'Preparación de la masa cocida y su incorporación de huevo.' },
  { href: '/receta-pasta-sablee', title: 'Pasta sablée', description: 'Masa friable trabajada mediante el método de arenado.' },
  { href: '/receta-pasta-sucree', title: 'Pasta sucrée', description: 'Comparación de otra formulación de pasta friable.' },
  { href: '/receta-pay-de-limon', title: 'Pay de limón', description: 'Base de pasta, crema de limón y merengue suizo.' },
  { href: '/receta-pionono', title: 'Pionono', description: 'Batido aireado, incorporación envolvente y horneado.' },
  { href: '/receta-rosca-pina-colada', title: 'Rosca piña colada', description: 'Receta disponible mediante el sistema público de recetas.' },
  { href: '/receta-tarta-de-frutas', title: 'Tarta de frutas', description: 'Base de pasta, crema pastelera y acabado con fruta.' },
  { href: '/receta-tres-leches', title: 'Tres leches', description: 'Genoise, jarabe de tres leches y acabado.' },
];

export default function RecetasPage() {
  return (
    <CourseShell
      eyebrow="Preparaciones"
      title="Recetas del curso"
      description="Accede directamente a las preparaciones disponibles desde la ruta actual del curso."
    >
      <section className="mb-8 rounded-2xl bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">Cómo usar esta sección</p>
        <p className="mt-2 max-w-3xl leading-7 text-amber-950">
          Usa las recetas como espacio de práctica. La lección correspondiente aporta el contexto
          y la receta concentra los ingredientes, pasos y señales que están documentados para cada preparación.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {recipes.map((recipe) => (
          <a
            key={recipe.href}
            href={recipe.href}
            className="block rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-stone-400 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold text-stone-900">{recipe.title}</h2>
            <p className="mt-2 leading-7 text-stone-600">{recipe.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-amber-700">Abrir receta →</span>
          </a>
        ))}
      </div>
    </CourseShell>
  );
}
