import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pt', 'en', 'es'],

  defaultLocale: 'pt',

  localeDetection: true,
});

export const config = {
  matcher: ['/', '/(pt|en|es)/:path*'],
};
