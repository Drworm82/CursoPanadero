import { useRouter } from 'next/router';
import CourseShell from '../components/course/CourseShell';
import { requireCourseAuth } from '../lib/course';

export default function ProgressPage({ lessons, progress, recipeProgress }) {
  const { locale = 'es' } = useRouter();
  const isEnglish = locale === 'en';
  const completed = progress.filter((item) => item.status === 'completed').length;

  return (
    <CourseShell
      eyebrow={isEnglish ? 'Progress' : 'Seguimiento'}
      title={isEnglish ? 'My progress' : 'Mi progreso'}
      description={isEnglish
        ? 'Your progress will build as you complete lessons and preparations.'
        : 'El progreso se irá construyendo a medida que completes lecciones y preparaciones.'}
      backHref={isEnglish ? '/en/ruta' : '/ruta'}
      backLabel={isEnglish ? 'Back to course' : 'Volver a la ruta'}
    >
      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <p className="text-sm font-medium text-stone-500">{isEnglish ? 'Module 1' : 'Módulo 1'}</p>
        <p className="mt-2 text-4xl font-semibold text-stone-900">{completed} / {lessons.length}</p>
        <p className="mt-2 text-stone-600">{isEnglish ? 'Lessons completed' : 'Lecciones completadas'}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
        <p className="text-sm font-medium text-stone-500">{isEnglish ? 'Preparations' : 'Preparaciones'}</p>
        <p className="mt-2 text-stone-600">
          {isEnglish
            ? `${recipeProgress.length} preparation(s) with saved progress.`
            : `${recipeProgress.length} receta(s) con progreso guardado.`}
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {lessons.map((lesson) => {
          const item = progress.find((p) => p.lesson_id === lesson.id);
          return (
            <div key={lesson.id} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5">
              <span className="font-medium text-stone-900">{lesson.title}</span>
              <span className="text-sm text-stone-500">
                {item?.status === 'completed'
                  ? (isEnglish ? 'Completed' : 'Completada')
                  : (isEnglish ? 'Pending' : 'Pendiente')}
              </span>
            </div>
          );
        })}
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps({ req, res, locale }) {
  const { supabase, claims } = await requireCourseAuth(req, res);
  if (!claims) return { redirect: { destination: locale === 'en' ? '/en/acceso' : '/acceso', permanent: false } };

  const { data: module } = await supabase.from('modules').select('id').eq('slug', 'modulo-1-masas-batidas-pesadas').single();
  if (!module) return { props: { lessons: [], progress: [], recipeProgress: [] } };

  const [{ data: lessons }, { data: progress }, { data: recipeProgress }] = await Promise.all([
    supabase.from('lessons').select('id, title, sort_order').eq('module_id', module.id).order('sort_order'),
    supabase.from('lesson_progress').select('lesson_id, status').eq('user_id', claims.sub),
    supabase.from('recipe_progress').select('recipe_id, status, current_step').eq('user_id', claims.sub),
  ]);

  let localizedLessons = lessons || [];
  if (locale === 'en' && localizedLessons.length) {
    const { data: translations } = await supabase
      .from('lesson_translations')
      .select('lesson_id, title')
      .in('lesson_id', localizedLessons.map((lesson) => lesson.id))
      .eq('locale', 'en');

    const translationMap = Object.fromEntries((translations || []).map((item) => [item.lesson_id, item.title]));
    localizedLessons = localizedLessons.map((lesson) => ({ ...lesson, title: translationMap[lesson.id] || lesson.title }));
  }

  return { props: { lessons: localizedLessons, progress: progress || [], recipeProgress: recipeProgress || [] } };
}
