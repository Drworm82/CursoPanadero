import { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmail, signUpWithEmail } from '../lib/supabaseAuth';

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    let authResponse;
    if (isLogin) {
      authResponse = await signInWithEmail(email, password);
    } else {
      authResponse = await signUpWithEmail(email, password);
    }

    if (authResponse.error) {
      setError(authResponse.error.message);
    } else {
      router.push('/recetas-publicas'); // Redirige al usuario a las recetas públicas después de iniciar sesión
    }
    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 disabled:bg-blue-300 transition-colors"
        >
          {loading ? 'Cargando...' : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
        </button>
        {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
        <p className="mt-4 text-center text-sm">
          {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-blue-500 font-medium"
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </button>
        </p>
      </form>
    </div>
  );
}
