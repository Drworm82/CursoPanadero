import Link from 'next/link';
import CourseShell from '../../components/course/CourseShell';
import { requireCourseAuth } from '../../lib/course';

export default function ModulePage({ module, lessons }) {
  return (
    <CourseShell eyebrow={`Módulo ${module.sort_order}`} title={module.title}>
      <div className="grid gap-5 lg:grid-cols-[1.4fr_.6fr]">
        <section className="space-y-5">
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Pregunta guía</p>
            <p className="mt-2 text-lg leading-8 text-stone-800">{module.guiding_question}</p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="text-sm font-medium text-stone-500">Al terminar</p>
            <p className="mt-2 leading-7 text-stone-700">{module.expected_result}</p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-stone-900">Lecciones</h2>
            <div className="space-y-3">
              {lessons.map((lesson) => (
                <Link key={lesson.id} href={`/lecciones/${lesson.slug}`} className="block rounded-2xl border border-stone-200 bg-white p-5 hover:border-stone-400">
                  <div className="flex gap-4">
                    <span className="text-sm font-medium text-stone-400">{lesson.sort_order}</span>
                    <div>
                      <h3 className="font-semibold text-stone-900">{lesson.title}</h3>
                      {lesson.objective && <p className="mt-1 text-sm leading-6 text-stone-600">{lesson.objective}</p>}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <aside className="rounded-2xl bg-stone-900 p-6 text-white">
          <p className="text-sm font-medium text-stone-300">Progreso</p>
          <p className="mt-2 text-3xl font-semibold">0 / {lessons.length}</p>
          <p className="mt-2 text-sm leading-6 text-stone-300">Todavía no hay progreso registrado para este módulo.</p>
        </aside>
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps({ req, res, params }) {
  const { supabase, user } = await requireCourseAuth(req, res);
  if (!user) return { redirect: { destination: '/acceso', permanent: false } };

  const { data: module, error } = await supabase
    .from('modules')
    .select('id, slug, title, sort_order, guiding_question, expected_result')
    .eq('slug', params.slug)
    .single();

  if (error || !module) return { notFound: true };

  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('id, module_id, slug, title, sort_order, lesson_type, objective')
    .eq('module_id', module.id)
    .order('sort_order');

  if (lessonsError) return { notFound: true };

  return { props: { module, lessons } };
}
