import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CourseShell from '../../components/course/CourseShell';
import { supabase } from '../../lib/supabase';

export default function NuevaRecetaPage() {
  const router = useRouter();
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
      setFormError('Debes iniciar sesión para compartir una receta.');
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

    const { data, error } = await supabase
      .from('community_recipes')
      .insert(payload)
      .select('id')
      .single();

    if (error) {
      console.error('Error al guardar la receta:', error);
      setFormError('No se pudo guardar la receta. Inténtalo de nuevo.');
      setSubmitting(false);
      return;
    }

    router.push(`/recetas/${data.id}`);
  }

  if (loadingSession) {
    return (
      <CourseShell eyebrow="Comunidad" title="Compartir receta">
        <p className="text-stone-600">Comprobando tu sesión...</p>
      </CourseShell>
    );
  }

  if (!session) {
    return (
      <CourseShell
        eyebrow="Comunidad"
        title="Compartir receta"
        description="Necesitas una cuenta para publicar una receta."
      >
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <Link
            href="/acceso"
            className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white"
          >
            Iniciar sesión
          </Link>
        </div>
      </CourseShell>
    );
  }

  return (
    <CourseShell
      eyebrow="Comunidad"
      title="Compartir receta"
      description="Publica una preparación para que otros usuarios puedan consultarla."
    >
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">Título</span>
            <input
              type="text"
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="Ej. Pan de elote"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-semibold text-stone-900">Descripción</span>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={3}
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="Una breve descripción de la preparación."
            />
          </label>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">Ingredientes</span>
            <span className="mt-1 block text-sm text-stone-500">Un ingrediente por línea.</span>
            <textarea
              required
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              rows={8}
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder={'500 g de harina\n250 ml de leche\n10 g de levadura'}
            />
          </label>
        </div>

        <div className="rounded-2xl border border-stone-200 bg-white p-6">
          <label className="block">
            <span className="text-sm font-semibold text-stone-900">Preparación</span>
            <span className="mt-1 block text-sm text-stone-500">Un paso por línea.</span>
            <textarea
              required
              value={steps}
              onChange={(event) => setSteps(event.target.value)}
              rows={10}
              className="mt-2 w-full rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder={'Mezcla los ingredientes.\nAmasa hasta obtener una masa lisa.\nHornea hasta que esté dorado.'}
            />
          </label>
        </div>

        {formError && (
          <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700">{formError}</p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/recetas"
            className="rounded-full border border-stone-300 px-5 py-3 text-center text-sm font-medium text-stone-700"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50"
          >
            {submitting ? 'Publicando...' : 'Publicar receta'}
          </button>
        </div>
      </form>
    </CourseShell>
  );
}
