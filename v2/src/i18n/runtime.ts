// Motor de tradução em tempo real — sucessor do i18n.js do site legado.
// A chave de cada tradução é o texto original em português.
// Funciona em todas as páginas porque o idioma é escolhido no próprio ecrã
// (sem criar uma URL por idioma), tal como no site antigo.

import { traducoesLegado } from './traducoes-legado';
import { traducoesExtra } from './traducoes-extra';

export type LangSite = 'pt' | 'en' | 'fr' | 'de' | 'ar' | 'ru' | 'it' | 'zh';

export const IDIOMAS: Array<{ codigo: LangSite; nome: string; bandeira: string }> = [
  { codigo: 'pt', nome: 'Português', bandeira: 'ao' },
  { codigo: 'en', nome: 'English', bandeira: 'gb' },
  { codigo: 'fr', nome: 'Français', bandeira: 'fr' },
  { codigo: 'de', nome: 'Deutsch', bandeira: 'de' },
  { codigo: 'ar', nome: 'العربية', bandeira: 'ae' },
  { codigo: 'ru', nome: 'Русский', bandeira: 'ru' },
  { codigo: 'it', nome: 'Italiano', bandeira: 'it' },
  { codigo: 'zh', nome: '中文', bandeira: 'cn' },
];

export const INDICE: Record<LangSite, number> = {
  pt: -1,
  en: 0,
  fr: 1,
  de: 2,
  ar: 3,
  ru: 4,
  it: 5,
  zh: 6,
};

export const RTL: LangSite[] = ['ar'];
export const STORAGE_KEY = 'jpires-lang';

const DICIONARIO: Record<string, string[]> = { ...traducoesLegado, ...traducoesExtra };

// Guarda o texto original de cada nó para podermos voltar a PT sem perdas.
const textoOriginal = new WeakMap<Text, string>();
const atributosOriginais = new WeakMap<Element, Map<string, string>>();
let tituloOriginal: string | null = null;
let atual: LangSite = 'pt';

const norm = (s: string) => s.replace(/\s+/g, ' ').trim();
const IGNORAR = 'script, style, noscript, svg, textarea, [data-no-translate]';
const ATRIBUTOS = ['aria-label', 'placeholder', 'title'];

export function obterIdioma(): LangSite {
  return atual;
}

export function traduzir(texto: string, lang: LangSite = atual): string {
  if (lang === 'pt') return texto;
  const linha = DICIONARIO[norm(texto)];
  const indice = INDICE[lang];
  return linha && linha[indice] ? linha[indice] : texto;
}

/** Traduz um texto dentro de um elemento (e os seus atributos acessíveis). */
export function aplicar(root: ParentNode = document.body, lang: LangSite = atual): void {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(no) {
      const pai = (no as Text).parentElement;
      if (!pai || pai.closest(IGNORAR)) return NodeFilter.FILTER_REJECT;
      return no.nodeValue && no.nodeValue.trim()
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const nos: Text[] = [];
  while (walker.nextNode()) nos.push(walker.currentNode as Text);

  nos.forEach((no) => {
    let original = textoOriginal.get(no);
    if (original === undefined) {
      original = no.nodeValue ?? '';
      textoOriginal.set(no, original);
    }
    const partes = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (partes) no.nodeValue = partes[1] + traduzir(partes[2], lang) + partes[3];
  });

  root.querySelectorAll<Element>('[aria-label], [placeholder], [title]').forEach((el) => {
    if (el.closest('[data-no-translate]')) return;
    let mapa = atributosOriginais.get(el);
    if (!mapa) {
      mapa = new Map();
      atributosOriginais.set(el, mapa);
    }
    for (const atributo of ATRIBUTOS) {
      const valor = el.getAttribute(atributo);
      if (valor === null) continue;
      if (!mapa.has(atributo)) mapa.set(atributo, valor);
      el.setAttribute(atributo, traduzir(mapa.get(atributo)!, lang));
    }
  });
}

function traduzirTitulo(titulo: string, lang: LangSite): string {
  if (lang === 'pt') return titulo;
  const direto = traduzir(titulo, lang);
  if (direto !== titulo) return direto;
  // Os títulos são "Página — JPires": traduz-se só a primeira parte.
  const corte = titulo.lastIndexOf(' — ');
  return corte > 0 ? traduzir(titulo.slice(0, corte), lang) + titulo.slice(corte) : titulo;
}

export function definirIdioma(lang: LangSite): void {
  const proximo: LangSite = lang === 'pt' || lang in INDICE ? lang : 'pt';
  if (tituloOriginal === null) tituloOriginal = document.title;

  atual = proximo;
  document.documentElement.lang = proximo;
  document.documentElement.dir = RTL.includes(proximo) ? 'rtl' : 'ltr';
  document.title = traduzirTitulo(tituloOriginal, proximo);

  aplicar(document.body, proximo);

  try {
    localStorage.setItem(STORAGE_KEY, proximo);
  } catch {
    // Navegação privada pode bloquear o localStorage; o site continua a funcionar.
  }

  document.dispatchEvent(new CustomEvent('jp:lang', { detail: { lang: proximo } }));
}

/** Aplica o idioma guardado no browser. Seguro de chamar mais do que uma vez. */
export function iniciarIdioma(): void {
  const correr = () => {
    let salvo = 'pt';
    try {
      salvo = localStorage.getItem(STORAGE_KEY) || 'pt';
    } catch {
      salvo = 'pt';
    }
    const lang = IDIOMAS.some((i) => i.codigo === salvo) ? (salvo as LangSite) : 'pt';
    definirIdioma(lang);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', correr, { once: true });
  } else {
    correr();
  }
}
