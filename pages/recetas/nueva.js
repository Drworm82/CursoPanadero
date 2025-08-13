import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/router';
import { getSession } from '../../lib/supabaseAuth';

export default function NuevaRecetaPage() {
  const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const [formError, setFormError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);

    const { data: { session } } = await supabase.auth.getSession();
    const user_id = session?.user?.id;

    if (!user_id) {
      setFormError('Debes iniciar sesión para añadir una receta.');
      setSubmitting(false);
      return;
    }

    let imagenUrl = '';
    if (imagen) {
      const { data, error: uploadError } = await supabase.storage
        .from('recetas-publicas-fotos') // Reemplaza con el nombre de tu bucket
        .upload(`${Date.now()}_${imagen.name}`, imagen);

      if (uploadError) {
        setFormError('Error al subir la imagen. Inténtalo de nuevo.');
        setSubmitting(false);
        return;
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('recetas-publicas-fotos') // Reemplaza con el nombre de tu bucket
        .getPublicUrl(data.path);

      imagenUrl = publicUrl;
    }

    const { error: insertError } = await supabase
      .from('recetas_usuarios')
      .insert([
        {
          titulo,
          descripcion,
          contenido: contenido.split('\n').filter(line => line.trim() !== ''),
          imagen_url: imagenUrl,
          autor_id: user_id,
          is_public: true, // Todas las recetas añadidas por el usuario son públicas por defecto
        },
      ]);

    if (insertError) {
      console.error('Error al guardar la receta:', insertError);
      setFormError('Hubo un error al guardar la receta. Inténtalo de nuevo.');
    } else {
      router.push('/recetas');
    }
    setSubmitting(false);
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
          <label htmlFor="contenido" className="block text-sm font-medium text-gray-700">Contenido de la receta (uno por línea)</label>
          <textarea
            id="contenido"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            rows="6"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">Subir una foto</label>
          <input
            type="file"
            id="imagen"
            onChange={handleFileChange}
            className="mt-1 block w-full"
            accept="image/*"
          />
        </div>
        {formError && <p className="text-red-500 text-center">{formError}</p>}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          disabled={submitting}
        >
          {submitting ? 'Guardando...' : 'Guardar Receta'}
        </button>
      </form>
    </div>
  );
}
