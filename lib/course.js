import { createServerClient } from '@supabase/ssr';
import { parse, serialize } from 'cookie';

export function createCourseServerClient(req, res) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return Object.entries(parse(req.headers.cookie || '')).map(([name, value]) => ({
            name,
            value,
          }));
        },
        setAll(cookiesToSet, headers) {
          const existing = res.getHeader('Set-Cookie');
          const existingCookies = Array.isArray(existing)
            ? existing
            : existing
              ? [existing]
              : [];

          const serialized = cookiesToSet.map(({ name, value, options }) =>
            serialize(name, value, options)
          );

          res.setHeader('Set-Cookie', [...existingCookies, ...serialized]);

          Object.entries(headers).forEach(([key, value]) => {
            res.setHeader(key, value);
          });
        },
      },
    }
  );
}

export async function requireCourseAuth(req, res) {
  const supabase = createCourseServerClient(req, res);
  const { data: { claims } } = await supabase.auth.getClaims();
  return { supabase, claims: claims || null };
}

export async function requireCourseAccess(supabase) {
  const { data, error } = await supabase.rpc('has_active_course_access', {
    target_course_slug: 'curso-panaderia',
  });

  if (error) {
    console.error('Error checking course access:', error);
    return false;
  }

  return data === true;
}

export async function getCourseRouteData(supabase) {
  const { data: course, error: courseError } = await supabase
    .from('courses')
    .select('id, slug, title, description')
    .eq('slug', 'curso-panaderia')
    .single();

  if (courseError) throw courseError;

  const { data: modules, error: modulesError } = await supabase
    .from('modules')
    .select('id, course_id, slug, title, sort_order, guiding_question, expected_result')
    .eq('course_id', course.id)
    .order('sort_order');

  if (modulesError) throw modulesError;

  return { course, modules };
}
