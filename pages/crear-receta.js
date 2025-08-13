import { useState } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabase';

export default function CrearRecetaPage() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [pasos, setPasos] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Split the ingredients and steps strings into arrays
      // Dividimos las cadenas de texto de ingredientes y pasos en arrays,
      // separando por cada nueva línea para que el formato sea el correcto para la base de datos.
      const ingredientesArray = ingredientes.split('\n').filter(line => line.trim() !== '');
      const pasosArray = pasos.split('\n').filter(line => line.trim() !== '');

      const { data, error } = await supabase
        .from('recetas_usuario')
        .insert([
          {
            titulo: titulo,
            descripcion: descripcion,
            ingredientes: ingredientesArray,
            pasos: pasosArray,
            imagen_url: imagenUrl,
            // You might need to add an autor_id here if your table requires it
            // Puedes necesitar agregar un autor_id aquí si tu tabla lo requiere
            // autor_id: 'algún_id_de_usuario_aquí', 
          }
        ]);

      if (error) {
        throw error;
      }

      console.log('Receta creada con éxito:', data);
      router.push('/recetas');
    } catch (error) {
      console.error('Error creating recipe:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Crear una nueva receta</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
          <input 
            type="text" 
            id="titulo" 
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea 
            id="descripcion" 
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows="3"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="ingredientes" className="block text-sm font-medium text-gray-700">Ingredientes (uno por línea)</label>
          <textarea 
            id="ingredientes" 
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            rows="5"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="pasos" className="block text-sm font-medium text-gray-700">Pasos (uno por línea)</label>
          <textarea 
            id="pasos" 
            value={pasos}
            onChange={(e) => setPasos(e.target.value)}
            rows="5"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="imagenUrl" className="block text-sm font-medium text-gray-700">URL de la imagen</label>
          <input 
            type="url" 
            id="imagenUrl" 
            value={imagenUrl}
            onChange={(e) => setImagenUrl(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
          disabled={loading}
        >
          {loading ? 'Creando...' : 'Crear Receta'}
        </button>
      </form>
    </div>
  );
}
