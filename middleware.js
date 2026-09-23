import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  let claims = null;
  try {
    const { data, error } = await supabase.auth.getClaims();
    if (!error) claims = data?.claims || null;
  } catch (error) {
    console.error('Error reading auth claims in middleware:', error);
  }

  if (!claims) {
    const url = request.nextUrl.clone();
    url.pathname = '/acceso';

    const redirect = NextResponse.redirect(url);

    response.cookies.getAll().forEach((cookie) => {
      redirect.cookies.set(cookie);
    });

    return redirect;
  }

  const { data: hasAccess, error } = await supabase.rpc('has_active_course_access', {
    target_course_slug: 'curso-panaderia',
  });

  if (error || hasAccess !== true) {
    const notFound = new NextResponse(null, {
      status: 404,
    });

    response.cookies.getAll().forEach((cookie) => {
      notFound.cookies.set(cookie);
    });

    return notFound;
  }

  return response;
}

export const config = {
  matcher: [
    '/curso/:path+',
    '/ruta/:path*',
    '/modulos/:path*',
    '/modulo-:path*',
    '/lecciones/:path*',
    '/leccion-:path*',
    '/receta-:path*',
    '/progreso',
    '/en/curso/:path+',
    '/en/ruta/:path*',
    '/en/modulos/:path*',
    '/en/modulo-:path*',
    '/en/lecciones/:path*',
    '/en/leccion-:path*',
    '/en/recetas/:path*',
    '/en/receta-:path*',
    '/en/progreso',
  ],
};
