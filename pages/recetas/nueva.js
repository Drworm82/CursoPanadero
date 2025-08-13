import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import { getSession } from '../../lib/supabaseAuth';

export default function NuevaRecetaPage() {
  const [titulo, setTitulo] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [pasos, setPasos] = useState('');
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormError(null);

    const { data: { session } } = await supabase.auth.getSession();
    const user_id = session?.user?.id;

    if (!user_id) {
      setFormError('Debes iniciar sesión para añadir una receta.');
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from('recetas_usuarios') // Usamos el nombre de la tabla corregido
      .insert([
        {
          titulo,
          ingredientes: ingredientes.split('\n').filter(line => line.trim() !== ''),
          pasos: pasos.split('\n').filter(line => line.trim() !== ''),
          autor_id: user_id,
          is_public: true,
        },
      ]);

    if (error) {
      console.error('Error al guardar la receta:', error);
      setFormError('Hubo un error al guardar la receta. Inténtalo de nuevo.');
    } else {
      router.push('/recetas');
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Añadir Nueva Receta</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <label htmlFor="ingredientes" className="block text-sm font-medium text-gray-700">Ingredientes (uno por línea)</label>
          <textarea
            id="ingredientes"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            rows="6"
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
            rows="6"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>
        {formError && <p className="text-red-500 text-center">{formError}</p>}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          disabled={loading}
        >
          {loading ? 'Guardando...' : 'Guardar Receta'}
        </button>
      </form>
    </div>
  );
}
