import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function RecipeProgress({ recipeId, stepCount, initialProgress }) {
  const [status, setStatus] = useState(initialProgress?.status || 'not_started');
  const [currentStep, setCurrentStep] = useState(initialProgress?.current_step || 0);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  async function save(nextStatus, nextStep) {
    setSaving(true);
    setMessage('');
    const { data: auth } = await supabase.auth.getUser();
    const user = auth?.user;
    if (!user) {
      setMessage('Necesitas iniciar sesión para guardar el progreso.');
      setSaving(false);
      return;
    }

    const payload = {
      user_id: user.id,
      recipe_id: recipeId,
      status: nextStatus,
      current_step: nextStep,
      completed_at: nextStatus === 'completed' ? new Date().toISOString() : null,
    };

    const { error } = await supabase.from('recipe_progress').upsert(payload, { onConflict: 'user_id,recipe_id' });

    if (error) {
      setMessage('No se pudo guardar el progreso.');
    } else {
      setStatus(nextStatus);
      setCurrentStep(nextStep);
      setMessage(nextStatus === 'completed' ? 'Receta completada.' : 'Progreso guardado.');
    }
    setSaving(false);
  }

  function next() {
    const nextStep = Math.min(currentStep + 1, stepCount);
    save(nextStep >= stepCount ? 'completed' : 'in_progress', nextStep);
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-stone-500">Tu preparación</p>
          <p className="mt-1 text-2xl font-semibold text-stone-900">{currentStep} / {stepCount} pasos</p>
        </div>
        <span className="text-sm text-stone-500">{status === 'completed' ? 'Completada' : status === 'in_progress' ? 'En curso' : 'Sin comenzar'}</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-stone-100">
        <div className="h-full bg-stone-900 transition-all" style={{ width: `${stepCount ? (currentStep / stepCount) * 100 : 0}%` }} />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {status !== 'completed' && (
          <button type="button" disabled={saving} onClick={next} className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white disabled:opacity-50">
            {currentStep === 0 ? 'Empezar receta' : currentStep >= stepCount ? 'Completar' : 'Marcar siguiente paso'}
          </button>
        )}
        {status === 'completed' && (
          <button type="button" disabled={saving} onClick={() => save('in_progress', Math.max(stepCount - 1, 0))} className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 disabled:opacity-50">
            Reabrir preparación
          </button>
        )}
      </div>
      {message && <p className="mt-3 text-sm text-stone-600" role="status">{message}</p>}
    </div>
  );
}
