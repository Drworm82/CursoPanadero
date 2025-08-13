import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/router';

export default function CompartirReceta() {
  const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let imagenUrl = '';

    if (imagen) {
      const { data, error: uploadError } = await supabase.storage
        .from('recetas-publicas-fotos')
        .upload(`${Date.now()}_${imagen.name}`, imagen);

      if (uploadError) {
        setError('Error al subir la imagen. Inténtalo de nuevo.');
        setLoading(false);
        return;
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('recetas-publicas-fotos')
        .getPublicUrl(data.path);

      imagenUrl = publicUrl;
    }

    const { data: { user } } = await supabase.auth.getSession();

    const { error: insertError } = await supabase
      .from('recetas_usuarios')
      .insert([
        {
          titulo,
          descripcion,
          contenido,
          imagen_url: imagenUrl,
          user_id: user.id,
          is_public: true,
        },
      ]);

    if (insertError) {
      setError('Hubo un error al guardar la receta. Inténtalo de nuevo.');
    } else {
      router.push('/recetas-publicas');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Compartir Nueva Receta</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Título de la Receta</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="w-full p-3 border rounded-lg"
            rows="3"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Contenido de la Receta</label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="w-full p-3 border rounded-lg"
            rows="8"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Subir una foto</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-3 border rounded-lg"
            accept="image/*"
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {loading ? 'Guardando...' : 'Guardar Receta'}
        </button>
      </form>
    </div>
  );
}
