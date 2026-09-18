import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function LessonProgress({ lessonId, initialProgress }) {
  const [status, setStatus] = useState(initialProgress?.status || 'not_started');
  const [saving, setSaving] = useState(false);

  async function updateStatus(nextStatus) {
    setSaving(true);
    const { data: auth } = await supabase.auth.getUser();
    if (!auth?.user) {
      setSaving(false);
      return;
    }

    const now = new Date().toISOString();
    const payload = {
      user_id: auth.user.id,
      lesson_id: lessonId,
      status: nextStatus,
      started_at: initialProgress?.started_at || now,
      completed_at: nextStatus === 'completed' ? now : null,
    };

    const { error } = await supabase.from('lesson_progress').upsert(payload, { onConflict: 'user_id,lesson_id' });
    if (!error) setStatus(nextStatus);
    setSaving(false);
  }

  return (
    <div className="rounded-2xl bg-stone-900 p-6 text-white">
      <p className="text-sm font-medium text-stone-300">Estado de la lección</p>
      <p className="mt-2 text-lg font-semibold">
        {status === 'completed' ? 'Completada' : status === 'in_progress' ? 'En curso' : 'Sin comenzar'}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {status === 'not_started' && (
          <button type="button" disabled={saving} onClick={() => updateStatus('in_progress')} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-900 disabled:opacity-50">
            Empezar lección
          </button>
        )}
        {status !== 'completed' && status !== 'not_started' && (
          <button type="button" disabled={saving} onClick={() => updateStatus('completed')} className="rounded-full bg-white px-4 py-2 text-sm font-medium text-stone-900 disabled:opacity-50">
            Marcar como completada
          </button>
        )}
        {status === 'completed' && (
          <button type="button" disabled={saving} onClick={() => updateStatus('in_progress')} className="rounded-full border border-stone-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
            Reabrir
          </button>
        )}
      </div>
    </div>
  );
}
