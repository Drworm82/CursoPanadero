import RecipeView from '../components/course/RecipeView';
import { getPublicRecipe } from '../lib/publicCourse';

export default function RecipePage(props) { return <RecipeView {...props} />; }

export async function getServerSideProps() {
  const data = await getPublicRecipe('marmoleado-intenso-cafe');
  if (!data) return { notFound: true };
  return { props: data };
}
