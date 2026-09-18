import CourseShell from '../components/course/CourseShell';
import ModuleCard from '../components/course/ModuleCard';
import { getCourseRouteData, requireCourseAuth } from '../lib/course';

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
  const { supabase, user } = await requireCourseAuth(req, res);
  if (!user) return { redirect: { destination: '/acceso', permanent: false } };

  try {
    const { course, modules } = await getCourseRouteData(supabase);
    return { props: { course, modules } };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
}
