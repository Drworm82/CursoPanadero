import { modulos } from '../../data/curso';

export default function CursoPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Curso de Panadería</h1>
      {modulos.map((modulo) => (
        <div key={modulo.id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-semibold">{modulo.titulo}</h2>
          <p className="mb-2">{modulo.descripcion}</p>
          <ul className="list-disc pl-6">
            {modulo.lecciones.map((lec, idx) => (
              <li key={idx}>{lec.titulo}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
