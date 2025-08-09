import { useRouter } from 'next/router';
import { modulos } from '../../data/curso';

export default function LeccionPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Cargando...</p>;

  // Buscar la lección con ese slug
  let leccionEncontrada = null;
  for (const modulo of modulos) {
    const leccion = modulo.lecciones.find(l => l.slug === slug);
    if (leccion) {
      leccionEncontrada = {
        ...leccion,
        moduloTitulo: modulo.titulo,
      };
      break;
    }
  }

  if (!leccionEncontrada) {
    return <p>Lección no encontrada.</p>;
  }

  // Mostrar contenido si existe (en tu data algunos tienen contenido, otros no)
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{leccionEncontrada.titulo}</h1>
      <h2 className="text-xl font-semibold mb-4">{leccionEncontrada.moduloTitulo}</h2>
      {leccionEncontrada.contenido ? (
        <div className="space-y-2">
          {leccionEncontrada.contenido.map((item, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </div>
      ) : (
        <p>Contenido no disponible todavía.</p>
      )}
    </div>
  );
}
