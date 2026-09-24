import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CourseShell from '../../components/course/CourseShell';
import { supabase } from '../../lib/supabase';

export default function RecetasPage() {
  const { locale = 'es' } = useRouter();
  const isEnglish = locale === 'en';
  const [recetas, setRecetas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchRecetas = async () => {
      setLoading(true);
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      setSession(currentSession);

      const { data: publicData, error: publicError } = await supabase
        .from('community_recipes')
        .select('id, title, description, image_url, created_at')
        .eq('is_public', true)
        .order('created_at', { ascending: false });

      if (publicError) console.error('Error fetching public recipes:', publicError);
      setRecetas(publicData || []);
      setLoading(false);
    };

    fetchRecetas();
  }, []);

  const filteredRecetas = useMemo(() => {
    if (!searchTerm) return recetas;
    return recetas.filter((receta) => (receta.title || '').toLowerCase().includes(searchTerm.toLowerCase()));
  }, [recetas, searchTerm]);

  return (
    <CourseShell
      eyebrow={isEnglish ? 'Community' : 'Comunidad'}
      title={isEnglish ? 'Shared recipes' : 'Recetas compartidas'}
      description={isEnglish
        ? 'Discover recipes published by other community members and share your own preparations.'
        : 'Descubre recetas publicadas por otros usuarios de la comunidad y comparte tus propias preparaciones.'}
    >
      <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-stone-900">{isEnglish ? 'Search recipes' : 'Buscar recetas'}</h2>
          <p className="mt-1 text-sm leading-6 text-stone-600">
            {isEnglish ? 'Search by title among shared recipes.' : 'Busca por título entre las recetas compartidas.'}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder={isEnglish ? 'Search by title...' : 'Buscar por título...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="rounded-lg border border-stone-300 px-4 py-2.5 text-sm shadow-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
          />
          {session && (
            <Link href="/recetas/nueva" className="rounded-lg bg-amber-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-amber-700">
              {isEnglish ? 'Share recipe' : 'Compartir receta'}
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p className="col-span-full py-10 text-center text-stone-500">{isEnglish ? 'Loading recipes...' : 'Cargando recetas...'}</p>
        ) : filteredRecetas.length === 0 ? (
          <div className="col-span-full rounded-2xl border border-dashed border-stone-300 p-10 text-center">
            <h2 className="text-xl font-semibold text-stone-900">{isEnglish ? 'No shared recipes yet' : 'Todavía no hay recetas compartidas'}</h2>
            <p className="mt-2 text-stone-600">{isEnglish ? 'Recipes published by the community will appear here.' : 'Cuando la comunidad publique recetas, aparecerán aquí.'}</p>
          </div>
        ) : (
          filteredRecetas.map((receta) => (
            <Link key={receta.id} href={`/recetas/${receta.id}`} className="block rounded-2xl border border-stone-200 bg-white p-6 transition hover:border-stone-400 hover:shadow-sm">
              <h2 className="text-xl font-semibold text-stone-900">{receta.title}</h2>
              <p className="mt-2 line-clamp-3 leading-7 text-stone-600">{receta.description || (isEnglish ? 'No description.' : 'Sin descripción.')}</p>
              <p className="mt-4 text-sm font-medium text-amber-700">{isEnglish ? 'View recipe →' : 'Ver receta →'}</p>
            </Link>
          ))
        )}
      </div>
    </CourseShell>
  );
}
