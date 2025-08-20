import { useContext } from 'react';
import { fr } from '../locales/fr';
import { en } from '../locales/en';
import { pt } from '../locales/pt';
import { LocaleContext } from '../app/[locale]/providers';


type Locale = 'fr' | 'en' | 'pt';
const translations: Record<Locale, any> = { fr, en, pt };

export function useTranslations() {
  const locale = useContext(LocaleContext) as Locale;
  const t = translations[locale] || translations.fr;
  return { t, locale };
}
