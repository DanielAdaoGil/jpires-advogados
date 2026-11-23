import type { TranslationKey } from '../i18n/index.ts';

export type PrincipioId = 'rigor' | 'confianca' | 'proximidade' | 'responsabilidade';

export type Principio = {
  id: PrincipioId;
  titulo: TranslationKey;
  sub: TranslationKey;
  intro: TranslationKey;
  itens: TranslationKey[];
  nota: TranslationKey;
  assunto: TranslationKey;
};

// Correspondência feita pelo subtítulo, não pela posição dos cartões:
// Rigor técnico → Rigor | Confidencialidade → Confiança
// Proximidade → Parceria | Responsabilidade → Pragmatismo
// Conteúdo literal do legado (areas-modal.js, ATRIBUTOS).
export const principios: Principio[] = [
  {
    id: 'rigor',
    titulo: 'sobre.principios.rigor.titulo',
    sub: 'sobre.principios.rigor.sub',
    intro: 'sobre.principios.rigor.intro',
    itens: [
      'sobre.principios.rigor.itens.um',
      'sobre.principios.rigor.itens.dois',
      'sobre.principios.rigor.itens.tres',
      'sobre.principios.rigor.itens.quatro',
    ],
    nota: 'sobre.principios.rigor.nota',
    assunto: 'sobre.principios.rigor.assunto',
  },
  {
    id: 'confianca',
    titulo: 'sobre.principios.confianca.titulo',
    sub: 'sobre.principios.confianca.sub',
    intro: 'sobre.principios.confianca.intro',
    itens: [
      'sobre.principios.confianca.itens.um',
      'sobre.principios.confianca.itens.dois',
      'sobre.principios.confianca.itens.tres',
      'sobre.principios.confianca.itens.quatro',
    ],
    nota: 'sobre.principios.confianca.nota',
    assunto: 'sobre.principios.confianca.assunto',
  },
  {
    id: 'proximidade',
    titulo: 'sobre.principios.proximidade.titulo',
    sub: 'sobre.principios.proximidade.sub',
    intro: 'sobre.principios.proximidade.intro',
    itens: [
      'sobre.principios.proximidade.itens.um',
      'sobre.principios.proximidade.itens.dois',
      'sobre.principios.proximidade.itens.tres',
      'sobre.principios.proximidade.itens.quatro',
      'sobre.principios.proximidade.itens.cinco',
    ],
    nota: 'sobre.principios.proximidade.nota',
    assunto: 'sobre.principios.proximidade.assunto',
  },
  {
    id: 'responsabilidade',
    titulo: 'sobre.principios.responsabilidade.titulo',
    sub: 'sobre.principios.responsabilidade.sub',
    intro: 'sobre.principios.responsabilidade.intro',
    itens: [
      'sobre.principios.responsabilidade.itens.um',
      'sobre.principios.responsabilidade.itens.dois',
      'sobre.principios.responsabilidade.itens.tres',
      'sobre.principios.responsabilidade.itens.quatro',
      'sobre.principios.responsabilidade.itens.cinco',
    ],
    nota: 'sobre.principios.responsabilidade.nota',
    assunto: 'sobre.principios.responsabilidade.assunto',
  },
];
