import { createServerClient } from '@supabase/ssr';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            supabaseResponse.cookies.set(name, value, options);
          });
          Object.entries(headers).forEach(([key, value]) => supabaseResponse.headers.set(key, value));
        },
      },
    }
  );

  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  const protectedPath =
    request.nextUrl.pathname.startsWith('/curso') ||
    request.nextUrl.pathname.startsWith('/ruta') ||
    request.nextUrl.pathname.startsWith('/modulos') ||
    request.nextUrl.pathname.startsWith('/lecciones') ||
    request.nextUrl.pathname.startsWith('/recetas') ||
    request.nextUrl.pathname.startsWith('/progreso');

  if (protectedPath && !user) {
    const url = request.nextUrl.clone();
    url.pathname = '/acceso';
    url.searchParams.set('redirectedFrom', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    '/curso/:path*',
    '/ruta/:path*',
    '/modulos/:path*',
    '/lecciones/:path*',
    '/recetas/:path*',
    '/progreso',
    '/acceso',
  ],
};
