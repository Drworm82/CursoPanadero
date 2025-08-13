import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { getSession } from '../lib/supabaseAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Recetas() {
  const router = useRouter();
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  
  // Estados para el nuevo formulario de recetas
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [contenido, setContenido] = useState('');
  const [imagen, setImagen] = useState(null);
  const [formError, setFormError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchRecetas = async () => {
      setLoading(true);
      const currentSession = await getSession();
      setSession(currentSession);
      
      const { data, error } = await supabase
        .from('recetas_usuarios')
        .select('*')
        .eq('is_public', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching recipes:', error);
      } else {
        setRecetas(data);
      }
      setLoading(false);
    };

    fetchRecetas();
  }, []);

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);

    let imagenUrl = '';

    if (imagen) {
      const { data, error: uploadError } = await supabase.storage
        .from('recetas-publicas-fotos')
        .upload(`${Date.now()}_${imagen.name}`, imagen);

      if (uploadError) {
        setFormError('Error al subir la imagen. Inténtalo de nuevo.');
        setSubmitting(false);
        return;
      }
      
      const { data: { publicUrl } } = supabase.storage
        .from('recetas-publicas-fotos')
        .getPublicUrl(data.path);

      imagenUrl = publicUrl;
    }

    const { data: { user } } = await supabase.auth.getSession();
    if (!user) {
      setFormError('Debes iniciar sesión para compartir una receta.');
      setSubmitting(false);
      return;
    }

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
      setFormError('Hubo un error al guardar la receta. Inténtalo de nuevo.');
    } else {
      setTitulo('');
      setDescripcion('');
      setContenido('');
      setImagen(null);
      router.reload(); // Recarga la página para ver la nueva receta
    }
    setSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Recetas de la Comunidad</h1>
      
      {session ? (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center mb-4">Compartir Nueva Receta</h2>
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
            {formError && <p className="text-red-500 text-center">{formError}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors disabled:bg-blue-300"
            >
              {submitting ? 'Guardando...' : 'Guardar Receta'}
            </button>
          </form>
        </div>
      ) : (
        <p className="text-center text-gray-500 mb-6">Inicia sesión para compartir tus recetas.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recetas.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">Aún no hay recetas disponibles.</p>
        ) : (
          recetas.map((receta) => (
            <Link key={receta.id} href={`/recetas/${receta.id}`} className="block bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition-colors duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{receta.titulo}</h2>
              <p className="mt-2 text-gray-600">{receta.descripcion}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
