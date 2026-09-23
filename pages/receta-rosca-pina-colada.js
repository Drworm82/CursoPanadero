import RecipeView from '../components/course/RecipeView';
import { requireCourseAuth, requireCourseAccess } from '../lib/course';
import { getPublicRecipe } from '../lib/publicCourse';

export default function RecipePage(props) { return <RecipeView {...props} />; }

export async function getServerSideProps({ req, res, locale }) {
  const { supabase, claims } = await requireCourseAuth(req, res);

  if (!claims) return { redirect: { destination: '/acceso', permanent: false } };

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  const data = await getPublicRecipe('rosca-pina-colada', supabase, locale || 'es');
  if (!data) return { notFound: true };

  return { props: { ...data, locale: locale || 'es' } };
}
