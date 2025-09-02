import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale ?? 'pt';
  try {
    return {
      locale: currentLocale,
      messages: (await import(`../../messages/${currentLocale}.json`)).default,
    };
  } catch (error) {
    return {
      locale: 'pt',
      messages: (await import('../../messages/pt.json')).default,
    };
  }
});
