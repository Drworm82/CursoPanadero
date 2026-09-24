import Link from 'next/link';
import { useRouter } from 'next/router';
import CourseShell from '../../components/course/CourseShell';
import { requireCourseAuth, requireCourseAccess, createCourseServerClient } from '../../lib/course';
import { getPublicLesson } from '../../lib/publicCourse';
import LessonProgress from '../../components/course/LessonProgress';

export default function LessonPage({ lesson, recipes, progress }) {
  const { locale = 'es' } = useRouter();
  const isEnglish = locale === 'en';

  return (
    <CourseShell
      eyebrow={isEnglish ? `Lesson ${lesson.sort_order}` : `Lección ${lesson.sort_order}`}
      title={lesson.title}
      description={lesson.objective}
    >
      <div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-stone-900">
            {isEnglish ? 'Preparations' : 'Preparaciones'}
          </h2>
          <div className="space-y-3">
            {recipes.length === 0 && (
              <div className="rounded-2xl border border-dashed border-stone-300 p-6 text-stone-600">
                {isEnglish
                  ? 'This lesson does not have an associated preparation yet.'
                  : 'Esta lección todavía no tiene una preparación asociada.'}
              </div>
            )}
            {recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recetas/${recipe.slug}`} className="block rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-stone-900">{recipe.title}</h3>
                    {recipe.pedagogical_role && <p className="mt-1 text-sm text-stone-600">{recipe.pedagogical_role}</p>}
                  </div>
                  <span className="text-sm text-stone-400">{isEnglish ? 'Open' : 'Abrir'}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <aside className="space-y-5">
          <LessonProgress lessonId={lesson.id} initialProgress={progress} />
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">{isEnglish ? 'Learning' : 'Aprendizaje'}</p>
            <p className="mt-2 leading-7 text-stone-700">
              {lesson.objective || (isEnglish
                ? 'This lesson prepares the next step in the course.'
                : 'Esta lección prepara el siguiente paso de la ruta.')}
            </p>
          </div>
        </aside>
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps({ req, res, params, locale }) {
  const { supabase, claims } = await requireCourseAuth(req, res);
  if (!claims) return { redirect: { destination: locale === 'en' ? '/en/acceso' : '/acceso', permanent: false } };

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  const publicLesson = await getPublicLesson(params.slug, supabase, locale || 'es');
  if (!publicLesson) return { notFound: true };

  const { data: progress } = await supabase
    .from('lesson_progress')
    .select('status, started_at, completed_at')
    .eq('lesson_id', publicLesson.lesson.id)
    .eq('user_id', claims.sub)
    .maybeSingle();

  return {
    props: {
      lesson: publicLesson.lesson,
      recipes: publicLesson.recipes,
      progress: progress || null,
    },
  };
}
