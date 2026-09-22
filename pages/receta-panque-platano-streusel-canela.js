import RecipeView from '../components/course/RecipeView';
import { createCourseServerClient, requireCourseAccess } from '../lib/course';
import { getPublicRecipe } from '../lib/publicCourse';

export default function RecipePage(props) { return <RecipeView {...props} />; }

export async function getServerSideProps({ req, res }) {
  const supabase = createCourseServerClient(req, res);
  const { data: { claims } } = await supabase.auth.getClaims();

  if (!claims) return { redirect: { destination: '/acceso', permanent: false } };

  const hasAccess = await requireCourseAccess(supabase);
  if (!hasAccess) return { notFound: true };

  const data = await getPublicRecipe('panque-platano-streusel-canela', supabase);
  if (!data) return { notFound: true };

  return { props: data };
}
