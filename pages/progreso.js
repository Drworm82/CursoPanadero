import CourseShell from '../components/course/CourseShell';
import { requireCourseAuth } from '../lib/course';

export default function ProgressPage({ lessons, progress, recipeProgress }) {
  const completed = progress.filter((item) => item.status === 'completed').length;
  return (
    <CourseShell eyebrow="Seguimiento" title="Mi progreso" description="El progreso se irá construyendo a medida que completes lecciones y preparaciones.">
      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <p className="text-sm font-medium text-stone-500">Módulo 1</p>
        <p className="mt-2 text-4xl font-semibold text-stone-900">{completed} / {lessons.length}</p>
        <p className="mt-2 text-stone-600">Lecciones completadas</p>
      </div>
      <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
        <p className="text-sm font-medium text-stone-500">Preparaciones</p>
        <p className="mt-2 text-stone-600">{recipeProgress.length} receta(s) con progreso guardado.</p>
      </div>
      <div className="mt-6 space-y-3">
        {lessons.map((lesson) => {
          const item = progress.find((p) => p.lesson_id === lesson.id);
          return (
            <div key={lesson.id} className="flex items-center justify-between rounded-2xl border border-stone-200 bg-white p-5">
              <span className="font-medium text-stone-900">{lesson.title}</span>
              <span className="text-sm text-stone-500">{item?.status === 'completed' ? 'Completada' : 'Pendiente'}</span>
            </div>
          );
        })}
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps({ req, res }) {
  const { supabase, claims } = await requireCourseAuth(req, res);
  if (!claims) return { redirect: { destination: '/acceso', permanent: false } };

  const { data: module } = await supabase.from('modules').select('id').eq('slug', 'modulo-1-masas-batidas-pesadas').single();
  if (!module) return { props: { lessons: [], progress: [] } };

  const [{ data: lessons }, { data: progress }, { data: recipeProgress }] = await Promise.all([
    supabase.from('lessons').select('id, title, sort_order').eq('module_id', module.id).order('sort_order'),
    supabase.from('lesson_progress').select('lesson_id, status').eq('user_id', user.sub),
    supabase.from('recipe_progress').select('recipe_id, status, current_step').eq('user_id', user.sub),
  ]);

  return { props: { lessons: lessons || [], progress: progress || [], recipeProgress: recipeProgress || [] } };
}
