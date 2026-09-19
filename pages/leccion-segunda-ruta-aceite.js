import LessonView from '../components/course/LessonView';
import { getPublicLesson } from '../lib/publicCourse';

export default function LessonPage(props) { return <LessonView {...props} />; }

export async function getServerSideProps() {
  const data = await getPublicLesson('segunda-ruta-aceite');
  if (!data) return { notFound: true };
  return { props: data };
}
