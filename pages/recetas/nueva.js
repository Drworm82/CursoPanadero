import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function NuevaRecetaPage() {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [pasos, setPasos] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('');

    // Preparamos los arrays de ingredientes y pasos
    const ingredientesArray = ingredientes.split('\n').filter(line => line.trim() !== '');
    const pasosArray = pasos.split('\n').filter(line => line.trim() !== '');

    // Insertar la receta en Supabase
    const { data, error } = await supabase
      .from('recetas_usuario')
      .insert([
        { titulo: titulo, ingredientes: ingredientesArray, pasos: pasosArray }
      ]);

    if (error) {
      setMensaje('Error al guardar la receta: ' + error.message);
    } else {
      setTitulo('');
      setIngredientes('');
      setPasos('');
      setMensaje('¡Receta guardada con éxito! Gracias por colaborar.');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Añade tu propia receta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título de la receta</label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="ingredientes" className="block text-sm font-medium text-gray-700">Ingredientes (uno por línea)</label>
          <textarea
            id="ingredientes"
            rows="5"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <div>
          <label htmlFor="pasos" className="block text-sm font-medium text-gray-700">Pasos de preparación (uno por línea)</label>
          <textarea
            id="pasos"
            rows="8"
            value={pasos}
            onChange={(e) => setPasos(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Guardar Receta
        </button>
      </form>
      {mensaje && (
        <p className="mt-4 text-center text-sm font-medium text-green-600">{mensaje}</p>
      )}
    </div>
  );
}
