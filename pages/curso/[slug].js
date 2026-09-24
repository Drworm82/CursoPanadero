export default function LegacyLessonPage() {
  return null;
}

export async function getServerSideProps({ params, locale }) {
  if (locale === 'en') {
    return { redirect: { destination: `/en/lecciones/${params.slug}`, permanent: false } };
  }

  return { redirect: { destination: `/lecciones/${params.slug}`, permanent: false } };
}
