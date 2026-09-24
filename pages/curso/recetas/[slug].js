export default function LegacyRecipePage() {
  return null;
}

export async function getServerSideProps({ params, locale }) {
  if (locale === 'en') {
    return { redirect: { destination: `/en/recetas/${params.slug}`, permanent: false } };
  }

  return { redirect: { destination: `/recetas/${params.slug}`, permanent: false } };
}
