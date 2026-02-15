import en from './en.json';
import tr from './tr.json';

const translations: Record<string, typeof tr> = { en, tr };

export function getTranslations(locale: string = 'tr') {
  return translations[locale] || translations['tr'];
}

export function localizeNavItems(
  items: typeof tr.nav.items,
  locale: string,
  defaultLocale: string = 'tr'
) {
  const prefix = locale !== defaultLocale ? `/${locale}` : '';
  return items.map((item) => ({
    ...item,
    href: item.href === '/' ? `${prefix}/` : `${prefix}${item.href}`,
    children: item.children?.map((child) => ({
      ...child,
      href: `${prefix}${child.href}`,
    })),
  }));
}
