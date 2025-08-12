import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { getSession, signOut } from '../../lib/supabaseAuth'; // Importa las funciones de auth
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CursoPage() {
  const router = useRouter();
  const [modulos, setModulos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Nuevo estado para el usuario logueado

  useEffect(() => {
    // Función para obtener la sesión del usuario
    const fetchSession = async () => {
      const session = await getSession();
      setUser(session ? session.user : null); // Guarda la sesión del usuario en el estado
    };

    // Obtenemos los módulos del curso
    const fetchModulos = async () => {
      const { data, error } = await supabase.from('modulos_curso').select('*').order('orden');
      if (error) {
        console.error('Error fetching modules:', error);
      } else {
        setModulos(data);
      }
      setLoading(false);
    };

    fetchSession();
    fetchModulos();
  }, []);

  const handleLogout = async () => {
    await signOut();
    setUser(null);
    router.push('/login'); // Redirige al usuario a la página de login
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Cargando temario...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Botón de login/logout condicional */}
      <div className="flex justify-end mb-4">
        {user ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
            Cerrar sesión ({user.email})
          </button>
        ) : (
          <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Iniciar sesión
          </Link>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-8 text-center">Temario del Curso</h1>
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6" role="alert">
        <p className="font-bold">Acceso a contenido restringido</p>
        <p>Puedes ver los módulos, pero solo los usuarios con acceso podrán ver las clases.</p>
      </div>
      <div className="space-y-6">
        {modulos.length === 0 ? (
          <p className="text-center text-gray-500">No hay módulos disponibles.</p>
        ) : (
          modulos.map((modulo) => (
            <Link key={modulo.id} href={`/curso/${modulo.id}`} className="block bg-white shadow-lg rounded-lg p-6 hover:bg-gray-50 transition-colors duration-300">
              <h2 className="text-2xl font-semibold text-gray-800">{modulo.titulo}</h2>
              <p className="mt-2 text-gray-600">{modulo.descripcion}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
