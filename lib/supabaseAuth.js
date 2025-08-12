import { supabase } from './supabase';

// Iniciar sesión con email y contraseña
export const signInWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Registrar un nuevo usuario
export const signUpWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

// Cerrar la sesión
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Obtener la sesión actual del usuario
export const getSession = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
};
