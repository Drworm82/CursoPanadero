import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; // Ruta corregida
import { useRouter } from 'next/router';
import Image from 'next/image';

// Función para validar si una cadena es un UUID válido.
const isUUID = (uuid) => {
  if (typeof uuid !== 'string') return false;
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

export default function HomePage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('recetas_usuario') // Asumo que esta es la tabla principal que quieres mostrar
        .select('*');

      if (error) {
        console.error('Error fetching items:', error);
        setError('No se pudieron cargar los elementos.');
        setItems([]);
      } else {
        const validItems = data.filter(item => isUUID(item.id));
        setItems(validItems);
      }
      setLoading(false);
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div className="max-w-4xl mx-auto p-6 text-center">Cargando elementos...</div>;
  }

  if (error) {
    return <div className="max-w-4xl mx-auto p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Últimas recetas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.length === 0 ? (
          <p>No hay elementos disponibles.</p>
        ) : (
          items.map((item) => (
            <div 
              key={item.id} 
              className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => router.push(`/recetas/${item.id}`)}
            >
              {item.imagen_url && (
                <div className="w-full h-40 relative mb-4">
                  <Image 
                    src={item.imagen_url} 
                    alt={item.titulo} 
                    layout="fill" 
                    objectFit="cover" 
                    className="rounded-lg"
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold">{item.titulo}</h2>
              <p className="text-gray-600 mt-2">{item.descripcion}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
