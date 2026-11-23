# JPires v2 — Modelo de conteúdo e dados canónicos

> Regras para estruturar o conteúdo no Astro. Fonte de verdade para factos da JPires.
> **`⚠️ CONFIRMAR` = não publicar sem aprovação escrita do Dr. Pires.**

---

## 1. Estrutura de ficheiros prevista (criada na Fase 2)

```
v2/
├── astro.config.mjs
├── package.json                 ← apenas aqui, NUNCA na raiz
├── src/
│   ├── data/
│   │   └── site.ts              ← marca, contactos, navegação, redes, metadados
│   ├── content.config.ts        ← content collections do Astro
│   ├── content/
│   │   ├── areas/*.md
│   │   ├── sectores/*.md
│   │   ├── equipa/*.md
│   │   ├── insights/*.md
│   │   └── noticias/*.md
│   ├── i18n/
│   │   ├── pt.ts
│   │   └── en.ts
│   ├── layouts/
│   ├── components/
│   └── pages/
└── public/
    ├── images/
    └── favicon.svg
```

---

## 2. Convenção de identificadores (obrigatória)

**Nunca usar texto em português como chave de tradução.** O legado faz isso e já quebrou
uma tradução para chinês numa edição trivial. Usar IDs estáveis:

```ts
// ✅ correto
t('nav.areas')
t('home.hero.title')
t('fees.disclaimer')

// ❌ proibido
t('Áreas de Especialidade')
t('Onde o direito serve o negócio.')
```

IDs: `kebab-case`, prefixo por secção (`nav.`, `home.`, `area.`, `footer.`, `legal.`).

---

## 3. Modelos de dados

### `site.ts` — fonte única de contactos e marca

```ts
export const site = {
  nome: 'JPires – Sociedade de Advogados, RL',
  nomeCurto: 'JPires',
  slogan: 'Onde o direito serve o negócio.',
  endereco: 'Loanda Towers, 11º Andar, Sala 04, Luanda, Angola',
  mapsUrl: 'https://maps.app.goo.gl/5nbpGcAmgWva6rXJA',
  email: '⚠️ CONFIRMAR',        // ver §5
  telefones: ['⚠️ CONFIRMAR'],
  whatsapp: '+244 931 092 703',
  redes: { linkedin: '⚠️ CONFIRMAR' },
  idiomas: ['pt', 'en']         // Fase 1
};
```

### `areas/*.md` — 6 áreas de especialidade

```yaml
---
id: fusoes-aquisicoes
titulo: Fusões, Aquisições & Privatizações
resumo: Texto de 2-3 frases sobre o que fazemos e para quem.
ordem: 2
icon: git-merge
advogados: [jose-pires, isaac-gil]
casos: [⚠️ CONFIRMAR — 1 caso anonimizado por área]
citacoes: []       # só com fonte real; vazio é preferível a inventar
---
```

IDs e títulos canónicos do legado (`src/content.ts`):

| id | título |
|---|---|
| `direito-societario` | Direito Societário & Governance |
| `fusoes-aquisicoes` | Fusões, Aquisições & Privatizações |
| `investimento-estrangeiro` | Investimento Estrangeiro & JV |
| `contratos-comerciais` | Contratos Comerciais & Regulação |
| `financiamento-reestruturacao` | Financiamento & Reestruturação |
| `resolucao-conflitos` | Resolução de Conflitos |

### `sectores/*.md` — 8 sectores

`01 Oil & Gás e Energia` · `02 Mineração e Recursos Naturais` · `03 Banca e Serviços Financeiros` ·
`04 Seguros e Resseguros` · `05 Instituições Públicas e Estado` · `06 Recursos Humanos e Laboral` ·
`07 Segurança Privada` · `08 Imobiliário e Construção`

### `equipa/*.md` — directório

```yaml
---
id: jose-pires
nome: Dr. José Pires
cargo: CEO · Managing Partner
iniciais: JP
foto: ⚠️ CONFIRMAR — necessária fotografia real
email: ⚠️ CONFIRMAR
telefone: ⚠️ CONFIRMAR
linkedin: ⚠️ CONFIRMAR
formacao: []
oab: ⚠️ CONFIRMAR
idiomas: [pt, en]
areas: [todos]
ordem: 1
bio: 3-5 frases. Formação, anos de actuação, tipo de mandatos, especialização.
---
```

Equipa publicada (3 pessoas — usar esta lista, não os 2 do repo local):

| nome | cargo |
|---|---|
| Dr. José Pires | CEO · Managing Partner |
| Dr. Mauro Albuquerque | Senior Lawyer |
| Dr. Isaac Gil | Associate Partner |

### `insights/*.md` — cadência editorial

```yaml
---
titulo: Título claro e informativo
data: 2026-11-23
categoria: regulacao        # regulacao | societario | fiscal | laboral | arbitagem
autor: jose-pires
resumo: 1-2 frases
slug: kebab-case
---
```

Regra: **2 publicações por mês**, com data e autor visíveis. É o sinal mais forte de
que o escritório está activo.

### `noticias/*.md` — casos anonimizados

```yaml
---
titulo: Assessoria a investidor europeu em aquisição no sector energético
data: 2026-10-15
area: fusoes-aquisicoes
resumo: Sem nomes de clientes, sem valores. Descrever o tipo de mandato e o resultado.
---
```

---

## 4. Valores e missão (reutilizáveis do legado)

Valores: **RIGOR** (excelência técnica em cada mandato) · **CONFIANÇA** (confidencialidade e integridade) ·
**PRAGMATISMO** (soluções práticas e accionáveis) · **PARCERIA** (relações de longo prazo).

Missão (texto publicado, reutilizável):
> Prestar serviços jurídicos de excelência, com rigor, independência e confidencialidade,
> criando relações duradouras de confiança e contribuindo para decisões seguras,
> negócios sustentáveis e instituições mais fortes.

Posicionamento sugerido para o hero (factual, não slogan de marketing):
> Título: Assessoria jurídica corporativa

> Nota (Nov 2026): "em Angola" foi removido — a JPires tem parcerias globais
> e não se limita ao mercado angolano.
> Subtítulo: Sociedade de Advogados, RL

> ⚠️ A frase "Para grupos empresariais e investidores internacionais." foi removida
> por decisão do cliente (Nov 2026). Não a reintroduzir em `pt.ts`, `en.ts` nem nas páginas.

---

## 5. Conflitos a resolver antes da Fase 4

| # | Campo | Publicado | Repo local | Dono da decisão |
|---|---|---|---|---|
| 1 | Email geral | `geral@jpiresadvogados.com` | `jpires@jpires-advogados.ao` | Dr. Pires |
| 2 | Equipa | 3 advogados | 2 advogados | Dr. Pires (usar 3) |
| 3 | Honorários | "não negociáveis; formas de pagamento sim" | "definidos em função do perfil..." | Dr. Pires |
| 4 | Navegação | "Áreas de Especialidade" | "Áreas de Especialidade" + Sectores (v2) | Daniel Gil |
| 5 | CTA | "Solicitar Proposta" | "Consultar Condições" | Definido: "Contactar" na v2 |
| 6 | Telefones | `+244 222 740 715` | `+244 933 364 301` / `+244 923 514 369` | Dr. Pires |
| 7 | WhatsApp | `+244 931 092 703` | `+244 931 092 703` | ✅ Consistente |

Enquanto não resolvidos, o Cline deve manter `⚠️ CONFIRMAR` no código e reportar a pendência.
**Nunca inventar um valor para "completar" o site.**
