import Link from 'next/link';
import CourseShell from '../../components/course/CourseShell';
import { requireCourseAuth } from '../../lib/course';
import LessonProgress from '../../components/course/LessonProgress';

export default function LessonPage({ lesson, recipes }) {
  return (
    <CourseShell eyebrow={`Lección ${lesson.sort_order}`} title={lesson.title} description={lesson.objective}>
      <div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-stone-900">Preparaciones</h2>
          <div className="space-y-3">
            {recipes.length === 0 && (
              <div className="rounded-2xl border border-dashed border-stone-300 p-6 text-stone-600">
                Esta lección todavía no tiene una preparación asociada.
              </div>
            )}
            {recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recetas/${recipe.slug}`} className="block rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-stone-900">{recipe.title}</h3>
                    {recipe.pedagogical_role && <p className="mt-1 text-sm text-stone-600">{recipe.pedagogical_role}</p>}
                  </div>
                  <span className="text-sm text-stone-400">Abrir</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <aside className="space-y-5">
          <LessonProgress lessonId={lesson.id} initialProgress={progress} />
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <p className="text-sm font-medium text-stone-500">Aprendizaje</p>
          <p className="mt-2 leading-7 text-stone-700">{lesson.objective || 'Esta lección prepara el siguiente paso de la ruta.'}</p>
          </div>
        </aside>
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps({ req, res, params }) {
  const { supabase, user } = await requireCourseAuth(req, res);
  if (!user) return { redirect: { destination: '/acceso', permanent: false } };

  const { data: lesson, error } = await supabase
    .from('lessons')
    .select('id, module_id, slug, title, sort_order, lesson_type, objective')
    .eq('slug', params.slug)
    .single();

  if (error || !lesson) return { notFound: true };

  const [{ data: links, error: linksError }, { data: progress }] = await Promise.all([
    supabase
    .from('lesson_recipes')
    .select('sort_order, recipes (id, slug, title, pedagogical_role)')
    .eq('lesson_id', lesson.id)
    .order('sort_order'),
    supabase.from('lesson_progress').select('status, started_at, completed_at').eq('lesson_id', lesson.id).eq('user_id', user.sub).maybeSingle(),
  ]);

  if (linksError) return { notFound: true };

  return { props: { lesson, recipes: (links || []).map((link) => link.recipes).filter(Boolean), progress: progress || null } };
}
