import en from './dictionaries/en.json';
import es from './dictionaries/es.json';
import fr from './dictionaries/fr.json';

const dictionaries = {
  en,
  es,
  fr,
};

export const getDictionary = (locale: 'en' | 'es' | 'fr') => {
  const dict = dictionaries[locale];
  if (!dict) {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }
  return dict;
};
