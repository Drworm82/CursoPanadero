import CourseShell from './CourseShell';

const contentByLocale = {
  es: {
    notes: [
      ['Antes de empezar', 'Esta primera lección te presenta la ruta. No necesitas dominar técnicas ni equipo especializado para comenzar; la idea es aprender a mirar lo que ocurre mientras trabajas.'],
      ['Qué vas a observar', 'La receta introduce la técnica de acremado. Fíjate en el cambio de la mantequilla con el azúcar, en la incorporación de los huevos y en el momento en que dejamos de trabajar la mezcla.'],
      ['Qué cambia', 'Aquí vas a trabajar una masa batida pesada con un método distinto al acremado. La comparación con la lección anterior es parte del aprendizaje.'],
      ['Repetir no es hacer lo mismo', 'Vuelve a encontrarte con el acremado, pero ahora con criterio: observa sus etapas y presta especial atención a no sobrebatir al incorporar los secos.'],
      ['El horno también enseña', 'La cocción no es un paso separado del proceso. Observa la temperatura y el tiempo indicados y compara el resultado con lo que esperabas.'],
      ['Cierra el ciclo', 'Ahora reúne lo que has visto en las cuatro preparaciones. No necesitas memorizar una lista de respuestas: aquí encontrarás las relaciones que conviene llevarte antes de continuar.'],
    ],
    activities: [
      ['Construye tu punto de partida', 'Antes de abrir una receta, escribe qué crees que cambia durante una masa batida pesada cuando se mezcla, se incorporan los ingredientes y se hornea.', ['¿Qué cambio de textura esperarías observar durante la mezcla?', '¿En qué momento crees que conviene dejar de trabajar la preparación?']],
      ['Observa el acremado', 'Mientras elaboras la Rosca de Piña Colada, detente en cada etapa de la mezcla y anota qué cambia antes de pasar a la siguiente incorporación.', ['¿Cómo cambia la mantequilla con el azúcar glass durante el acremado?', '¿Qué observas cuando incorporas los huevos uno a uno?', '¿Qué señal te indica que ya no debes sobre batir al incorporar los secos?']],
      ['Compara el método', 'Mientras elaboras el Panqué de Plátano y Streusel de Canela, compara el método con el acremado de la lección anterior. Concéntrate en el orden de incorporación y en la textura de la mezcla.', ['¿Qué diferencia observas entre trabajar con aceite y trabajar con mantequilla mediante acremado?', '¿Qué indica la fuente sobre la textura que debe tener el licuado de plátano?', '¿Qué debes evitar al unir el licuado con los secos?']],
      ['Repite con intención', 'En el Marmoleado Intenso de Café, reconstruye mentalmente el acremado antes de ejecutarlo y comprueba si puedes reconocer cada etapa mientras trabajas.', ['¿Qué ocurre con la mantequilla, el azúcar moscabado y la miel antes de incorporar los huevos?', '¿Por qué se incorporan la leche y los secos de manera intercalada?', '¿Qué cambia cuando divides la mezcla y preparas la parte de café?']],
      ['Lee el horno como parte del proceso', 'Durante el Panqué de Cítricos, registra la temperatura y el tiempo indicados y, al terminar, relaciona esas condiciones con el color, volumen y firmeza que observes.', ['¿Qué temperatura y tiempo indica la fuente para la cocción?', '¿Qué señales observas al retirar y desmoldar el panqué?', '¿Qué diferencia hay entre seguir un tiempo indicado y observar el resultado real de la cocción?']],
      ['Explica qué cambió', 'Sin volver a mirar las recetas, compara las preparaciones del módulo y reconstruye las diferencias de método, textura y cocción que recuerdes.', ['¿Qué preparación utilizó un método distinto al acremado?', '¿Qué señales de textura te ayudaron a decidir cuándo continuar o detenerte?', '¿Qué relación puedes establecer entre el método utilizado y el resultado observado?']],
    ],
    recap: [
      ['Mantequilla y acremado', 'En la Rosca, el Marmoleado y el Panqué de Cítricos trabajaste mantequilla con azúcar mediante acremado. El batido modifica la textura de la mantequilla y favorece la incorporación de aire. Por eso buscas una mezcla más suave, pálida y esponjosa.'],
      ['Aceite y otra forma de trabajar', 'En el Panqué de Plátano utilizaste aceite. Al ser una grasa líquida, no se trabaja mediante el mismo acremado que la mantequilla. En esta preparación se busca una miga húmeda y suave, y la elección de la grasa cambia tanto el método como el resultado.'],
      ['La harina y el momento de detenerse', 'En todas estas masas batidas pesadas, la harina se incorpora sin sobrebatir. Cuando recibe líquido y trabajo mecánico, sus proteínas pueden empezar a formar gluten. Aquí buscamos integrar la mezcla, no desarrollar una estructura de pan.'],
      ['La textura también da información', 'Ya viste que la textura sirve para saber cuándo continuar y cuándo detenerse: una crema esponjosa durante el acremado, una mezcla integrada después de los secos y una consistencia concreta en el glaseado o en la mezcla de café.'],
      ['El horno forma parte del proceso', 'El calor transforma la masa: se expanden gases y vapor, actúa el polvo para hornear y la estructura termina fijándose. El volumen, el color y la firmeza que observas al final son señales de lo que ocurrió durante la preparación y la cocción.'],
    ],
    recapTitle: 'Cuatro preparaciones, varias ideas conectadas',
    recapIntro: 'Las cuatro preparaciones no estaban ahí solamente para practicar recetas distintas. Cada una añadió una pieza que ayuda a entender la siguiente.',
    nextText: 'No solo sabes seguir una receta: ya puedes empezar a relacionar una textura o un cambio en la masa con lo que acabas de hacer.',
  },
  en: {
    notes: [
      ['Before you start', 'This first lesson introduces the learning path. You do not need to master techniques or specialized equipment to begin; the idea is to learn to look at what happens while you work.'],
      ['What you will observe', 'The recipe introduces the creaming method. Pay attention to how the butter changes with the sugar, how the eggs are incorporated, and when we stop working the mixture.'],
      ['What changes', 'Here you will work a heavy batter using a method different from creaming. Comparing it with the previous lesson is part of the learning.'],
      ['Repeating is not doing the same thing', 'You meet the creaming method again, but now with intention: observe its stages and pay special attention to avoiding overmixing when adding the dry ingredients.'],
      ['The oven teaches too', 'Baking is not a separate step from the process. Observe the indicated temperature and time and compare the result with what you expected.'],
      ['Close the cycle', 'Now bring together what you have seen in the preparations. You do not need to memorize a list of answers: focus on the relationships worth carrying forward.'],
    ],
    activities: [
      ['Build your starting point', 'Before opening a recipe, write down what you think changes in a heavy batter as it is mixed, the ingredients are incorporated, and it is baked.', ['What texture change would you expect to observe during mixing?', 'When do you think it is appropriate to stop working the preparation?']],
      ['Observe the creaming method', 'While making the Piña Colada Ring Cake, pause at each mixing stage and note what changes before moving to the next incorporation.', ['How does the butter change with powdered sugar during creaming?', 'What do you observe when adding the eggs one at a time?', 'What signal tells you that you should stop overmixing when adding the dry ingredients?']],
      ['Compare the method', 'While making the Banana Pound Cake with Cinnamon Streusel, compare its method with the creaming method from the previous lesson. Focus on the order of incorporation and the texture of the mixture.', ['What difference do you observe between working with oil and working with butter through creaming?', 'What does the source indicate about the texture of the blended banana?', 'What should you avoid when combining the banana mixture with the dry ingredients?']],
      ['Repeat with intention', 'In the Intense Coffee Marble Cake, reconstruct the creaming method mentally before executing it and check whether you can recognize each stage while working.', ['What happens to the butter, brown sugar, and honey before adding the eggs?', 'Why are the milk and dry ingredients incorporated alternately?', 'What changes when you divide the mixture and prepare the coffee portion?']],
      ['Read the oven as part of the process', 'During the Citrus Pound Cake, record the indicated temperature and time and, afterward, relate those conditions to the color, volume, and firmness you observe.', ['What temperature and time does the source indicate for baking?', 'What signals do you observe when removing and unmolding the cake?', 'What is the difference between following an indicated time and observing the actual baking result?']],
      ['Explain what changed', 'Without looking at the recipes again, compare the module preparations and reconstruct the differences in method, texture, and baking that you remember.', ['Which preparation used a method different from creaming?', 'Which texture signals helped you decide when to continue or stop?', 'What relationship can you establish between the method used and the observed result?']],
    ],
    recap: [
      ['Butter and creaming', 'In the Ring Cake, Marble Cake, and Citrus Pound Cake, you worked butter with sugar through creaming. Mixing changes the butter texture and helps incorporate air. That is why you look for a softer, paler, and lighter mixture.'],
      ['Oil and another way of working', 'In the Banana Pound Cake you used oil. As a liquid fat, it is not worked through the same creaming method as butter. This preparation aims for a moist, soft crumb, and the choice of fat changes both the method and the result.'],
      ['Flour and the moment to stop', 'In these heavy batters, flour is incorporated without overmixing. When it receives liquid and mechanical work, its proteins can begin forming gluten. Here we want to integrate the mixture, not develop a bread-like structure.'],
      ['Texture also provides information', 'You have seen that texture helps you know when to continue and when to stop: a light cream during creaming, an integrated mixture after adding the dry ingredients, and a specific consistency in the glaze or coffee mixture.'],
      ['The oven is part of the process', 'Heat transforms the batter: gases and steam expand, baking powder acts, and the structure becomes fixed. The final volume, color, and firmness are signals of what happened during preparation and baking.'],
    ],
    recapTitle: 'Four preparations, several connected ideas',
    recapIntro: 'The four preparations were not there only to practice different recipes. Each one added a piece that helps you understand the next.',
    nextText: 'You do more than follow a recipe: you can now begin to connect a texture or change in the batter with what you just did.',
  },
};

export default function LessonView({ lesson, recipes, locale = 'es' }) {
  const content = contentByLocale[locale] || contentByLocale.es;
  const index = Math.max(0, Math.min(content.notes.length - 1, lesson.sort_order - 1));
  const [noteLabel, noteText] = content.notes[index];
  const [activityTitle, activityInstruction, questions] = content.activities[index];
  const localizeHref = (href) => locale === 'en' ? `/en${href}` : href;

  return (
    <CourseShell
      eyebrow={`${locale === 'en' ? 'Lesson' : 'Lección'} ${lesson.sort_order}`}
      title={lesson.title}
      description={lesson.objective}
      backHref={locale === 'en' ? '/en/modulo-1' : '/modulo-1'}
      backLabel={locale === 'en' ? 'Back to module' : 'Volver al módulo'}
    >
      <div className="space-y-8">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
          <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{noteLabel}</p>
          <p className="mt-3 max-w-3xl text-lg leading-8 text-stone-800">{noteText}</p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-7">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{locale === 'en' ? 'Guided activity' : 'Actividad guiada'}</p>
            <h2 className="mt-1 text-2xl font-semibold text-stone-900">{activityTitle}</h2>
            <p className="mt-3 leading-7 text-stone-600">{activityInstruction}</p>
          </div>
          <div className="rounded-2xl bg-stone-900 p-6 text-white sm:p-7">
            <p className="text-sm font-medium text-stone-300">{locale === 'en' ? 'Check your learning' : 'Comprueba tu aprendizaje'}</p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-stone-100">
              {questions.map((question) => <li key={question}>• {question}</li>)}
            </ul>
          </div>
        </section>

        {lesson.sort_order === 6 ? (
          <section>
            <div className="mb-5">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{locale === 'en' ? 'What you have just learned' : 'Lo que acabas de aprender'}</p>
              <h2 className="mt-1 text-2xl font-semibold text-stone-900">{content.recapTitle}</h2>
              <p className="mt-3 max-w-3xl leading-7 text-stone-600">{content.recapIntro}</p>
            </div>
            <div className="grid gap-3">
              {content.recap.map(([title, text], itemIndex) => (
                <article key={title} className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6">
                  <div className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-semibold text-stone-700">{itemIndex + 1}</span>
                    <div><h3 className="font-semibold text-stone-900">{title}</h3><p className="mt-2 leading-7 text-stone-600">{text}</p></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-stone-900 p-6 text-white sm:p-7">
              <p className="text-sm font-medium text-stone-300">{locale === 'en' ? 'The idea you take into the next module' : 'La idea que llevas al siguiente módulo'}</p>
              <p className="mt-3 text-xl leading-8 text-stone-100">{content.nextText}</p>
            </div>
          </section>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.35fr_.65fr]">
            <section>
              <div className="mb-4"><p className="text-sm font-medium uppercase tracking-[0.14em] text-amber-700">{locale === 'en' ? 'Practice' : 'Práctica'}</p><h2 className="mt-1 text-2xl font-semibold text-stone-900">{locale === 'en' ? 'Preparations' : 'Preparaciones'}</h2></div>
              <div className="space-y-3">
                {recipes.length ? recipes.map((recipe) => (
                  <a key={recipe.id} href={localizeHref(`/receta-${recipe.slug}`)} className="group block rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-stone-300 hover:shadow-md">
                    <div className="flex items-center gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-900">→</span><span className="min-w-0 flex-1"><span className="block font-semibold text-stone-900">{recipe.title}</span>{recipe.pedagogical_role && <span className="mt-1 block text-sm leading-6 text-stone-600">{recipe.pedagogical_role}</span>}</span><span className="text-sm text-stone-400">{locale === 'en' ? 'Open' : 'Abrir'}</span></div>
                  </a>
                )) : <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-6 text-stone-600">{locale === 'en' ? 'This lesson has no associated preparation. The main work here is to observe, compare, and draw conclusions.' : 'Esta lección no tiene una preparación asociada. Aquí el trabajo principal es observar, comparar y sacar conclusiones.'}</div>}
              </div>
            </section>
            <aside className="rounded-2xl bg-stone-900 p-6 text-white"><p className="text-sm font-medium text-stone-300">{locale === 'en' ? 'The central idea' : 'La idea central'}</p><p className="mt-3 leading-7 text-stone-100">{locale === 'en' ? 'Do not only memorize the steps. Try to connect each change you see with what you just did.' : 'No memorices solamente los pasos. Intenta relacionar cada cambio que ves con lo que acabas de hacer.'}</p></aside>
          </div>
        )}
      </div>
    </CourseShell>
  );
}
