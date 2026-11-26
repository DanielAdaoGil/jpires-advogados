// Campo de telefone internacional — mesma biblioteca usada pela DIO
// (intl-tel-input): bandeira do país, máscara automática e validação por país.
import intlTelInput, { type Iti, type UiTranslations } from 'intl-tel-input';
import 'intl-tel-input/styles';
import '../styles/telefone.css';
import { ar, de, en, fr, it, pt as ptLocale, ru, zh } from 'intl-tel-input/locale';
import { obterIdioma, type LangSite } from '../i18n/runtime.ts';

// Os 22 países do formulário, na ordem em que aparecem (Angola primeiro).
const PAISES = [
  'ao', 'pt', 'br', 'mz', 'cv', 'gw', 'st', 'cd', 'cg', 'zm', 'zw',
  'bw', 'gh', 'gb', 'us', 'es', 'fr', 'de', 'ae', 'ru', 'cn', 'it',
] as const;

const UI: Record<LangSite, UiTranslations> = {
  pt: ptLocale, en, fr, de, ar, ru, it, zh,
};

const LOCALES: Record<LangSite, string> = {
  pt: 'pt', en: 'en', fr: 'fr', de: 'de', ar: 'ar', ru: 'ru', it: 'it', zh: 'zh',
};

const instancias = new Map<HTMLInputElement, Iti>();
let aOuvirIdioma = false;

function criar(input: HTMLInputElement, numero = ''): Iti {
  const lang = obterIdioma();
  const iti = intlTelInput(input, {
    initialCountry: 'ao',
    onlyCountries: [...PAISES],
    countryOrder: [...PAISES],
    countrySearch: true,
    separateDialCode: true,
    placeholderNumberPolicy: 'AGGRESSIVE',
    formatAsYouType: true,
    strictMode: true,
    loadUtils: () => import('intl-tel-input/utils'),
    uiTranslations: UI[lang] ?? ptLocale,
    countryNameLocale: LOCALES[lang] ?? 'pt',
  });

  instancias.set(input, iti);
  if (numero) iti.setNumber(numero);
  return iti;
}

function numeroAtual(input: HTMLInputElement): string {
  const iti = instancias.get(input);
  if (!iti) return '';
  try {
    return iti.getNumber();
  } catch {
    // Os utils ainda não carregaram; o valor escrito serve como aproximação.
    return input.value;
  }
}

/** Inicializa o campo. Seguro de chamar mais do que uma vez. */
export function iniciarTelefone(input: HTMLInputElement | null): void {
  if (!input || instancias.has(input)) return;
  criar(input);

  if (!aOuvirIdioma) {
    aOuvirIdioma = true;
    document.addEventListener('jp:lang', () => {
      for (const [campo, iti] of instancias) {
        const numero = numeroAtual(campo);
        iti.destroy();
        criar(campo, numero);
      }
    });
  }
}

/** Validação real por país (libphonenumber). */
export async function telefoneValido(input: HTMLInputElement | null): Promise<boolean> {
  const iti = input ? instancias.get(input) : null;
  if (!iti || !input.value.trim()) return false;
  try {
    await iti.promise;
    return iti.isValidNumber();
  } catch {
    return false;
  }
}

/** Número em formato internacional E.164 (+244…), para o email. */
export async function numeroTelefone(input: HTMLInputElement | null): Promise<string> {
  const iti = input ? instancias.get(input) : null;
  if (!iti || !input?.value.trim()) return '';
  try {
    await iti.promise;
    return iti.getNumber() || input.value;
  } catch {
    return input.value;
  }
}

/** ISO do país seleccionado (ao, pt, br…). */
export function paisTelefone(input: HTMLInputElement | null): string {
  const iti = input ? instancias.get(input) : null;
  return iti?.getSelectedCountry()?.iso2 ?? '';
}

/** Limpa o campo e volta ao país inicial depois de um envio bem sucedido. */
export function limparTelefone(input: HTMLInputElement | null): void {
  const iti = input ? instancias.get(input) : null;
  if (!iti) return;
  iti.setNumber('');
  iti.setSelectedCountry('ao');
}
