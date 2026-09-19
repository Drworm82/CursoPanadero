export default function CourseIndex() {
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/ruta',
      permanent: false,
    },
  };
}
