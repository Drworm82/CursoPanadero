import CourseShell from '../components/course/CourseShell';
import ModuleCard from '../components/course/ModuleCard';
import { getCourseRouteData, createCourseServerClient } from '../lib/course';

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

export async function getServerSideProps({ req, res }) {
  // Course content is public/read-only. Authentication is handled by the
  // browser client after sign-in; keeping this data request independent of
  // SSR auth prevents a client/SSR session redirect loop.
  const supabase = createCourseServerClient(req, res);

  try {
    const { course, modules } = await getCourseRouteData(supabase);
    return { props: { course, modules } };
  } catch (error) {
    console.error('Route data error:', error);
    return { notFound: true };
  }
}
