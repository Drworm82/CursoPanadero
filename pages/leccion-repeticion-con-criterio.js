import LessonView from '../components/course/LessonView';
import { getPublicLesson } from '../lib/publicCourse';
import { requireCourseAuth, requireCourseAccess } from '../lib/course';

export default function LessonPage(props) { return <LessonView {...props} />; }

export async function getServerSideProps({ req, res, locale }) {
  const { supabase, claims } = await requireCourseAuth(req, res);
  if (!claims) return { redirect: { destination: '/acceso', permanent: false } };
  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };
  const data = await getPublicLesson('repeticion-con-criterio', supabase, locale);
  if (!data) return { notFound: true };
  return { props: { ...data, locale: locale || 'es' } };
}
