import { NextResponse } from 'next/server';

// Authentication is handled by the protected Pages Router server functions.
// Keep middleware intentionally pass-through for now so auth failures are
// handled by the page-level SSR layer instead of failing the Edge middleware.
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/curso/:path*',
    '/ruta/:path*',
    '/modulos/:path*',
    '/lecciones/:path*',
    '/recetas/:path*',
    '/progreso',
  ],
};
