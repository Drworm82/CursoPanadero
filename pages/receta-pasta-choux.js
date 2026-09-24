import { useRouter } from 'next/router';
import { requireCourseAuth, requireCourseAccess } from '../lib/course';
import CourseShell from '../components/course/CourseShell';

const content = {
  es: {
    eyebrow: 'Práctica · Lección 17',
    title: 'Pasta choux',
    backLabel: 'Volver a la lección',
    backHref: '/leccion-una-masa-que-se-cocina',
    classLabel: 'Clase 11',
    doughType: 'Masa de cocción mixta',
    sourceLabel: 'Demostración en la fuente',
    practiceTitle: 'Qué vas a practicar',
    practiceText: 'Reconocer la transformación de la pasta choux desde la cocción inicial en cacerola hasta una pasta manejable con duya y su posterior cocción en horno.',
    sourceTitle: 'Importante sobre la fuente',
    sourceText: <>El material original presenta la Pasta Choux como <strong>“Demostración con la mitad de la receta”</strong>. Las cantidades de abajo se reproducen tal como aparecen en la fuente, sin recalcularlas.</>,
    ingredientsTitle: 'Ingredientes',
    tableHeaders: ['Ingrediente', 'Cantidad', 'Observación'],
    ingredients: [
      ['Agua', '500 ml', '—'],
      ['Mantequilla', '200 g', '—'],
      ['Sal', '3 g', '—'],
      ['Azúcar', '5 g', '—'],
      ['Harina', '250 g', '—'],
      ['Huevos', '7 pzas', '—'],
    ],
    procedureTitle: 'Procedimiento',
    equipmentTitle: 'Equipo',
    needTitle: 'Necesitas',
    needText: 'Cacerola, pala o batidora con pala, manga pastelera, duya, charola, horno y rejilla.',
    laterTitle: 'Te servirá más adelante',
    laterText: 'La manga y las duyas reaparecerán en decoración y en otros productos. Aquí no son un accesorio: son parte del proceso porque la fuente utiliza la duya para formar las piezas.',
    closingLabel: 'Al terminar',
    closingTitle: 'Lo que debes llevarte',
    closing: [
      ['La masa se cocina antes del horno:', 'la harina se incorpora al líquido hirviendo y se seca en la cacerola.'],
      ['El huevo se incorpora después:', 'entra uno por uno cuando la masa ya se ha entibiado.'],
      ['La consistencia decide el siguiente paso:', 'debe quedar manejable con duya para poder formar las piezas.'],
      ['El horno también tiene una condición:', 'la fuente indica precalentarlo y no abrirlo durante la cocción porque las piezas pueden perder altura.'],
    ],
    steps: [
      ['1. Hervir y cocinar la harina', 'Hervir agua, mantequilla, sal y azúcar. Una vez que esté hirviendo, agregar la harina de un solo golpe y secar hasta que se vea el fondo de la cacerola.', 'Mira el cambio de una preparación líquida a una masa compacta y observa la señal indicada por la fuente: que se vea el fondo de la cacerola.'],
      ['2. Entibiar e incorporar el huevo', 'Retirar del fuego y dejar entibiar por unos minutos. Seguir batiendo con la pala y añadir los huevos uno por uno, batiendo sin dejar de mover, hasta integrarlos perfectamente y formar una pasta manejable con la duya. Con batidora, la fuente indica velocidad media durante 5 minutos.', 'Observa cómo cambia la consistencia con cada incorporación. El objetivo descrito por la fuente es llegar a una pasta que pueda manejarse con la duya.'],
      ['3. Pasar a la manga', 'Verter la pasta en la manga con la duya previamente preparada.', 'La pasta ya no debe estar en una consistencia que impida formarla; aquí debe poder pasar de la cacerola a la manga.'],
      ['4. Formar las piezas', 'Sobre la charola, formar las figuras una por una, presionando la manga hacia abajo, del centro hacia fuera, formando bolitas de un tamaño aproximado al de un huevo.', 'Observa que la presión y el movimiento de la manga producen una pieza definida. La fuente utiliza el tamaño aproximado de un huevo como referencia.'],
      ['5. Hornear', 'Introducir en el horno precalentado, de preferencia en las charolas del centro, y cocer a 185 °C durante 15 a 20 minutos, o hasta que estén doradas.', 'No abras el horno durante la cocción. La fuente advierte que pueden perder altura si se abre mientras se hornean.'],
      ['6. Enfriar', 'Sacar del horno y retirar las piezas de la charola hacia una rejilla para que se enfríen completamente.', 'Observa cómo la pieza pasa de la charola caliente a una rejilla donde puede enfriarse completamente antes del relleno.'],
      ['7. Cortar y rellenar', 'Cortar las figuras por la mitad con un cuchillo de pan y rellenar con la crema elegida. La fuente menciona chantilly, pastelera, chiboust, Paris Brest o mantequilla. Terminar con azúcar glass o preparar un glaseado.', 'Al abrir la pieza puedes observar el resultado de todo el proceso antes de incorporar el relleno: una pieza que puede cortarse y recibir una crema.'],
    ],
  },
  en: {
    eyebrow: 'Practice · Lesson 17',
    title: 'Choux pastry',
    backLabel: 'Back to lesson',
    backHref: '/en/leccion-una-masa-que-se-cocina',
    classLabel: 'Class 11',
    doughType: 'Mixed-cooking dough',
    sourceLabel: 'Demonstration in the source',
    practiceTitle: 'What you will practice',
    practiceText: 'Recognize how choux pastry transforms from the initial cooking in a saucepan into a pipeable dough and then completes its cooking in the oven.',
    sourceTitle: 'Important note about the source',
    sourceText: <>The original material presents Choux Pastry as a <strong>“Demonstration using half the recipe.”</strong> The quantities below are reproduced as they appear in the source, without recalculation.</>,
    ingredientsTitle: 'Ingredients',
    tableHeaders: ['Ingredient', 'Amount', 'Note'],
    ingredients: [
      ['Water', '500 ml', '—'],
      ['Butter', '200 g', '—'],
      ['Salt', '3 g', '—'],
      ['Sugar', '5 g', '—'],
      ['Flour', '250 g', '—'],
      ['Eggs', '7 pcs', '—'],
    ],
    procedureTitle: 'Procedure',
    equipmentTitle: 'Equipment',
    needTitle: 'You need',
    needText: 'Saucepan, paddle or stand mixer with paddle, piping bag, piping tip, baking sheet, oven, and cooling rack.',
    laterTitle: 'Useful later',
    laterText: 'The piping bag and tips will reappear in decoration and other products. Here they are not accessories: they are part of the process because the source uses a piping tip to shape the pieces.',
    closingLabel: 'At the end',
    closingTitle: 'What to take away',
    closing: [
      ['The dough is cooked before the oven:', 'flour is added to the boiling liquid and dried in the saucepan.'],
      ['The eggs are added afterward:', 'they go in one at a time once the dough has cooled slightly.'],
      ['Consistency determines the next step:', 'the dough must be pipeable so the pieces can be shaped.'],
      ['The oven also has a condition:', 'the source says to preheat it and not open it during baking because the pieces can lose height.'],
    ],
    steps: [
      ['1. Boil and cook the flour', 'Boil the water, butter, salt, and sugar. Once boiling, add the flour all at once and dry the mixture until the bottom of the saucepan becomes visible.', 'Watch the change from a liquid preparation to a compact dough and look for the signal given by the source: the bottom of the saucepan becomes visible.'],
      ['2. Cool slightly and add the eggs', 'Remove from the heat and let it cool slightly for a few minutes. Keep beating with the paddle and add the eggs one at a time, continuing to mix until fully incorporated and a pipeable dough forms. With a mixer, the source indicates medium speed for 5 minutes.', 'Observe how the consistency changes with each addition. The goal described by the source is a dough that can be handled with a piping tip.'],
      ['3. Transfer to the piping bag', 'Transfer the dough to the piping bag with the prepared piping tip.', 'The dough should now have a consistency that allows it to be shaped; it must be able to move from the saucepan to the piping bag.'],
      ['4. Shape the pieces', 'On the baking sheet, shape the pieces one by one, pressing the piping bag downward and moving from the center outward, forming balls approximately the size of an egg.', 'Observe how the pressure and movement of the piping bag produce a defined piece. The source uses approximately the size of an egg as a reference.'],
      ['5. Bake', 'Place in the preheated oven, preferably on the center racks, and bake at 185 °C for 15 to 20 minutes, or until golden.', 'Do not open the oven during baking. The source warns that the pieces can lose height if it is opened while they bake.'],
      ['6. Cool', 'Remove from the oven and transfer the pieces from the baking sheet to a cooling rack so they can cool completely.', 'Observe the piece moving from the hot baking sheet to a rack where it can cool completely before filling.'],
      ['7. Cut and fill', 'Cut the pieces in half with a bread knife and fill with the chosen cream. The source mentions chantilly, pastry cream, chiboust, Paris-Brest, or butter cream. Finish with powdered sugar or prepare a glaze.', 'Opening the piece lets you observe the result of the whole process before adding the filling: a piece that can be cut and receive a cream.'],
    ],
  },
};

export default function RecipePastaChouxPage() {
  const { locale = 'es' } = useRouter();
  const t = content[locale] || content.es;

  return (
    <CourseShell
      eyebrow={t.eyebrow}
      title={t.title}
      backHref={t.backHref}
      backLabel={t.backLabel}
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-sm text-stone-500">
            <span>{t.classLabel}</span><span>·</span><span>{t.doughType}</span><span>·</span><span>{t.sourceLabel}</span>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-stone-900">{t.practiceTitle}</h2>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-700">{t.practiceText}</p>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-sm font-medium text-amber-900">{t.sourceTitle}</p>
          <p className="mt-2 leading-7 text-amber-950">{t.sourceText}</p>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">{t.ingredientsTitle}</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead><tr className="border-b border-stone-200 text-stone-500">
                <th className="px-3 py-3 font-medium">{t.tableHeaders[0]}</th>
                <th className="px-3 py-3 font-medium">{t.tableHeaders[1]}</th>
                <th className="px-3 py-3 font-medium">{t.tableHeaders[2]}</th>
              </tr></thead>
              <tbody>
                {t.ingredients.map(([name, amount, note]) => (
                  <tr key={name} className="border-b border-stone-100 last:border-0">
                    <td className="px-3 py-3 font-medium text-stone-800">{name}</td>
                    <td className="px-3 py-3 text-stone-700">{amount}</td>
                    <td className="px-3 py-3 text-stone-600">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">{t.procedureTitle}</h2>
          <div className="mt-6 space-y-5">
            {t.steps.map(([title, text, observe]) => (
              <article key={title} className="rounded-2xl bg-stone-50 p-5">
                <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
                <p className="mt-3 leading-7 text-stone-700">{text}</p>
                <div className="mt-4 rounded-xl bg-amber-50 p-4">
                  <p className="text-sm font-semibold text-amber-900">{locale === 'en' ? 'Observe' : 'Observa'}</p>
                  <p className="mt-1 text-sm leading-6 text-amber-950">{observe}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-stone-900">{t.equipmentTitle}</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-stone-50 p-5">
              <p className="font-semibold text-stone-900">{t.needTitle}</p>
              <p className="mt-2 leading-7 text-stone-700">{t.needText}</p>
            </div>
            <div className="rounded-2xl bg-amber-50 p-5">
              <p className="font-semibold text-amber-900">{t.laterTitle}</p>
              <p className="mt-2 leading-7 text-amber-950">{t.laterText}</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-stone-900 p-6 text-white sm:p-8">
          <p className="text-sm font-medium text-stone-300">{t.closingLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold">{t.closingTitle}</h2>
          <div className="mt-5 space-y-4 text-stone-100">
            {t.closing.map(([lead, text]) => (
              <p key={lead} className="leading-7"><strong>{lead}</strong> {text}</p>
            ))}
          </div>
        </section>
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps({ req, res }) {
  const { supabase, claims } = await requireCourseAuth(req, res);

  if (!claims) return { redirect: { destination: '/acceso', permanent: false } };

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  return { props: {} };
}
