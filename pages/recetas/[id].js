import { useRouter } from 'next/router';
import { recetas } from '../../data/recetas';

export default function RecetaPage() {
  const router = useRouter();
  const { id } = router.query;
  const receta = recetas.find((r) => r.id === id);

  if (!receta) return <p>Cargando...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{receta.titulo}</h1>
      <img src={receta.imagen} alt={receta.titulo} className="mb-4 rounded" />
      <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
      <ul className="list-disc pl-6 mb-4">
        {receta.ingredientes.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Pasos</h2>
      <ol className="list-decimal pl-6 mb-4">
        {receta.pasos.map((paso, idx) => (
          <li key={idx}>{paso}</li>
        ))}
      </ol>
      {receta.fuente && (
        <p className="mt-4 text-sm">
          Fuente: <a href={receta.fuente} target="_blank" rel="noreferrer" className="text-blue-600 underline">{receta.fuente}</a>
        </p>
      )}
    </div>
  );
}
