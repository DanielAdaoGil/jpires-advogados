import { en } from './en';
import { pt } from './pt';

export type Lang = 'pt' | 'en';

type Path<T> = T extends string
  ? never
  : {
      [K in keyof T & string]: T[K] extends string ? K : `${K}.${Path<T[K]>}`;
    }[keyof T & string];

export type TranslationKey = Path<typeof pt>;

const dictionaries: Record<Lang, typeof pt> = { pt, en };

export function t(lang: Lang, key: TranslationKey): string {
  const parts = key.split('.');
  let node: unknown = dictionaries[lang];

  for (const part of parts) {
    if (typeof node !== 'object' || node === null || !(part in node)) return key;
    node = (node as Record<string, unknown>)[part];
  }

  return typeof node === 'string' ? node : key;
}
