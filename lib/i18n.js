export const locales = ['es', 'en'];
export const defaultLocale = 'es';

export const ui = {
  es: {
    route: 'Ruta',
    progress: 'Progreso',
    backToRoute: 'Volver a la ruta',
    backToModule: 'Volver al módulo',
    viewModule: 'Ver módulo',
    available: 'Disponible',
    module: 'Módulo',
    lessons: 'Lecciones',
    lesson: 'Lección',
    preparation: 'Preparación',
    practice: 'Práctica',
    open: 'Abrir',
    guidedActivity: 'Actividad guiada',
    checkLearning: 'Comprueba tu aprendizaje',
    practiceTitle: 'Preparaciones',
    noPreparation: 'Esta lección no tiene una preparación asociada. Aquí el trabajo principal es observar, comparar y sacar conclusiones.',
    centralIdea: 'La idea central',
    centralIdeaText: 'No memorices solamente los pasos. Intenta relacionar cada cambio que ves con lo que acabas de hacer.',
    beforeStarting: 'Antes de empezar',
    whatToObserve: 'Qué vas a observar',
    nextIdea: 'La idea que llevas al siguiente módulo',
    spanish: 'Español',
    english: 'English',
  },
  en: {
    route: 'Course',
    progress: 'Progress',
    backToRoute: 'Back to course',
    backToModule: 'Back to module',
    viewModule: 'View module',
    available: 'Available',
    module: 'Module',
    lessons: 'Lessons',
    lesson: 'Lesson',
    preparation: 'Preparation',
    practice: 'Practice',
    open: 'Open',
    guidedActivity: 'Guided activity',
    checkLearning: 'Check your learning',
    practiceTitle: 'Preparations',
    noPreparation: 'This lesson has no associated preparation. The main work here is to observe, compare, and draw conclusions.',
    centralIdea: 'The central idea',
    centralIdeaText: 'Do not only memorize the steps. Try to connect each change you see with what you just did.',
    beforeStarting: 'Before you start',
    whatToObserve: 'What you will observe',
    nextIdea: 'The idea you take into the next module',
    spanish: 'Español',
    english: 'English',
  },
};

export function getUi(locale = defaultLocale) {
  return ui[locale] || ui[defaultLocale];
}
