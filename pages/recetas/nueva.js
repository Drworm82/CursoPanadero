import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CourseShell from '../../components/course/CourseShell';
import { supabase } from '../../lib/supabase';

export default function NuevaRecetaPage() {
  const router = useRouter();
  const isEnglish = router.locale === 'en';
  const [session, setSession] = useState(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoadingSession(false);
    });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!session?.user?.id) {
      setFormError(isEnglish ? 'You must sign in to share a recipe.' : 'Debes iniciar sesión para compartir una receta.');
      return;
    }

    setSubmitting(true);
    setFormError('');

    const payload = {
      author_id: session.user.id,
      title: title.trim(),
      description: description.trim() || null,
      ingredients: ingredients.split('\n').map((item) => item.trim()).filter(Boolean),
      steps: steps.split('\n').map((item) => item.trim()).filter(Boolean),
      is_public: true,
    };

    const { data, error } = await supabase.from('community_recipes').insert(payload).select('id').single();

    if (error) {
      console.error('Error saving recipe:', error);
      setFormError(isEnglish ? 'The recipe could not be saved. Please try again.' : 'No se pudo guardar la receta. Inténtalo de nuevo.');
      setSubmitting(false);
      return;
    }

    router.push(`/recetas/${data.id}`);
  }

  if (loadingSession) {
    return <CourseShell eyebrow={isEnglish ? 'Community' : 'Comunidad'} title={isEnglish ? 'Share recipe' : 'Compartir receta'}><p className="text-stone-600">{isEnglish ? 'Checking your session...' : 'Comprobando tu sesión...'}</p></CourseShell>;
  }

  if (!session) {
    return (
      <CourseShell eyebrow={isEnglish ? 'Community' : 'Comunidad'} title={isEnglish ? 'Share recipe' : 'Compartir receta'} description={isEnglish ? 'You need an account to publish a recipe.' : 'Necesitas una cuenta para publicar una receta.'}>
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <Link href="/acceso" className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white">
            {isEnglish ? 'Sign in' : 'Iniciar sesión'}
          </Link>
        </div>
      </CourseShell>
    );
  }

  return (
    <CourseShell
      eyebrow={isEnglish ? 'Community' : 'Comunidad'}
      title={isEnglish ? 'Share recipe' : 'Compartir receta'}
      description={isEnglish ? 'Publish a preparation so other users can view it.' : 'Publica una preparación para que otros usuarios puedan consultarla.'}
    >
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 space-y-5">
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">{isEnglish ? 'Title' : 'Título'}</span>
            <input type="text" required value={title} onChange={(event) => setTitle(event.target.value)} className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" placeholder={isEnglish ? 'e.g. Sweet corn bread' : 'Ej. Pan de elote'} />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">{isEnglish ? 'Description' : 'Descripción'}</span>
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={3} className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" placeholder={isEnglish ? 'Brief description...' : 'Breve descripción...'} />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">{isEnglish ? 'Ingredients' : 'Ingredientes'}</span>
            <textarea required value={ingredients} onChange={(event) => setIngredients(event.target.value)} rows={7} className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" placeholder={isEnglish ? 'One ingredient per line' : 'Un ingrediente por línea'} />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">{isEnglish ? 'Preparation steps' : 'Pasos de preparación'}</span>
            <textarea required value={steps} onChange={(event) => setSteps(event.target.value)} rows={9} className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100" placeholder={isEnglish ? 'One step per line' : 'Un paso por línea'} />
          </label>
        </div>

        {formError && <p className="rounded-xl bg-red-50 p-4 text-sm text-red-800">{formError}</p>}

        <div className="flex flex-wrap gap-3">
          <button type="submit" disabled={submitting} className="rounded-full bg-stone-900 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50">
            {submitting ? (isEnglish ? 'Publishing...' : 'Publicando...') : (isEnglish ? 'Publish recipe' : 'Publicar receta')}
          </button>
          <Link href="/recetas" className="rounded-full border border-stone-300 px-6 py-3 font-medium text-stone-700">
            {isEnglish ? 'Cancel' : 'Cancelar'}
          </Link>
        </div>
      </form>
    </CourseShell>
  );
}
