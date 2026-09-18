import { createCourseServerClient } from '../../lib/course';

export default function LegacyCourseIndex() {
  return null;
}

export async function getServerSideProps({ req, res }) {
  const supabase = createCourseServerClient(req, res);
  const { data } = await supabase.auth.getClaims();

  return {
    redirect: {
      destination: data?.claims ? '/ruta' : '/acceso',
      permanent: false,
    },
  };
}
