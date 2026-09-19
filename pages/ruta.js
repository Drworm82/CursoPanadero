import { createClient } from '@supabase/supabase-js';
import CourseShell from '../components/course/CourseShell';
import ModuleCard from '../components/course/ModuleCard';

export default function RutaPage({ course, modules }) {
  return (
    <CourseShell
      eyebrow="Tu ruta"
      title={course.title}
      description={course.description}
    >
      <div className="mb-8 rounded-2xl bg-amber-50 p-6">
        <p className="text-sm font-medium text-amber-900">Principio de la ruta</p>
        <p className="mt-2 max-w-3xl text-amber-950">
          Aprenderás a interpretar lo que ocurre en la masa, no solamente a repetir instrucciones.
        </p>
      </div>
      <div className="grid gap-5">
        {modules.map((module) => <ModuleCard key={module.id} module={module} />)}
      </div>
    </CourseShell>
  );
}

export async function getServerSideProps() {
  // Course structure is public/read-only. Do not involve the auth-cookie
  // layer here; auth is a separate concern from loading course content.
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  );

  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('id, slug, title, description')
    .eq('slug', 'curso-panaderia')
    .single();

  const { data: modules, error: modulesError } = await supabase
    .from('modules')
    .select('id, course_id, slug, title, sort_order, guiding_question, expected_result')
    .eq('course_id', course?.id)
    .order('sort_order');

  if (courseError || modulesError || !course) {
    console.error('Route content error:', courseError || modulesError);
    return { notFound: true };
  }

  return { props: { course, modules: modules || [] } };
}
