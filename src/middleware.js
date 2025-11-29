import { NextResponse } from 'next/server';

const locales = ['en', 'es', 'pt'];
const defaultLocale = 'en';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect to default locale
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)'],
};
