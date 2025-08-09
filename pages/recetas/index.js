import Link from 'next/link';
import { recetas } from '../../data/recetas';

export default function RecetasPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Recetario</h1>
        <Link href="/recetas/nueva">
          <a className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
            Añadir Receta
          </a>
        </Link>
      </div>
      <p className="mb-4 text-gray-600">
        Explora y comparte tus recetas favoritas de panadería y pastelería.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recetas.map((receta) => (
          <Link key={receta.id} href={`/recetas/${receta.id}`}>
            <a className="border p-4 rounded hover:shadow-lg transition-shadow duration-300">
              <h2 className="font-semibold text-xl mb-2">{receta.titulo}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
