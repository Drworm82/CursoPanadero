import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { modulos } from '../../data/curso';
import Link from 'next/link';

export default function LeccionDetallePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [leccion, setLeccion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Busca la lección en todos los módulos
      let foundLeccion = null;
      for (const modulo of modulos) {
        foundLeccion = modulo.lecciones.find(leccion => leccion.slug === slug);
        if (foundLeccion) {
          break; // Sal del bucle si encuentras la lección
        }
      }
      setLeccion(foundLeccion);
      setLoading(false);
    }
  }, [slug]);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-gray-500">Cargando lección...</div>;
  }

  if (!leccion) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-red-500">Lección no encontrada.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link href="/curso" className="text-orange-600 hover:underline mb-4 inline-block">
        &larr; Volver al Curso
      </Link>
      <h1 className="text-4xl font-bold mb-4">{leccion.titulo}</h1>
      <p className="text-xl text-gray-600 mb-6">{leccion.descripcion}</p>

      {/* Verificación crucial para evitar el error 'map' */}
      {leccion.contenido && leccion.contenido.length > 0 && (
        <div className="prose max-w-none">
          {leccion.contenido.map((parrafo, index) => (
            <p key={index} className="text-lg leading-relaxed mb-4">{parrafo}</p>
          ))}
        </div>
      )}
    </div>
  );
}
