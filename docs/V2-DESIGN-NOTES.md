# JPires v2 — Notas de design e revisão visual

> Ficheiro do **cliente**. É aqui que escreves o que vês na tela e o queres mudar.
> O Cline lê este ficheiro antes de cada fase de design. Não é preciso saberes código.

---

## 1. Quando é que aparece algo na tela?

| Fase | O que vês em `npm run dev` | Dá para corrigir design? |
|---|---|---|
| 2 — Setup | Estrutura Astro a correr, sem publicar | Só cores/tipografia base |
| **3 — Design system** | Menu, rodapé, botões, cartões, cores — **o site ganhou cara** | ✅ **Estás aqui** |
| **4 — Páginas** | Home, Sobre, 7 áreas (+ sectores dentro de áreas), equipa, contactos completos | ✅ **Revisão principal** |
| 5 — Conteúdo | Artigos, notícias, formulário | Ajustes pontuais |
| 6 — SEO/i18n | Versão inglesa, metadados | Ajustes pontuais |
| 7 — Deploy | Site no ar | Ajustes finais |

**Resposta curta:** entraste na Fase 3. O site já está visível em `http://localhost:4321`.

---

## 2. Como ver o site

```bash
cd v2
npm run dev
```

Abre no browser: **http://localhost:4321**

- O site actualiza sozinho quando um ficheiro muda.
- Para parar: `Ctrl + C` no terminal.
- Testa sempre em 3 larguras: **1440 px** (desktop), **768 px** (tablet), **390 px** (telemóvel).
  No Chrome: `F12` → ícone de telemóvel/tablet.

---

## 3. Como dar feedback (formato simples)

Escreve no log da §5 com **3 partes**:

1. **Onde** — página e secção (ex.: "Home → hero" ou "Menu → mobile")
2. **O quê** — o que viste (ex.: "o título está pequeno", "o botão desaparece no telemóvel")
3. **Para quê** — a intenção (ex.: "quero que pareça mais institucional / mais legível")

Exemplo pronto:

> **Home → hero · 390 px**: o título ocupa 4 linhas e o botão fica cortado.
> Quero que caibam 3 linhas e que o botão apareça inteiro sem scroll.

### Regra de ouro para o Cline

> Corrigir **no componente ou no token**, nunca página a página.
> Se o problema é a cor dos botões, muda `--gold` — não edita 20 botões.

Se uma correção tiver de se repetir em mais de um sítio, o Cline deve parar e dizer:
"isto é um token/componente, vou corrigir na origem".

---

## 4. Checklist de revisão por fase

### Fase 3 — Design system
- [x] Cores institucionais correctas (ouro da logo + fundo escuro quente; sem azul-céu)
- [x] Subtítulo da marca é `Sociedade de Advogados, RL` (sem ponto e vírgula)
- [x] Ícone da navbar é `logo.png`; favicon é `favicon.ico`
- [x] Tipografia: Source Serif 4 nos títulos, Source Sans 3 no corpo
- [x] Menu desktop com todos os links
- [ ] Menu mobile abre/fecha e não sobrepõe conteúdo — **validar no telemóvel**
- [x] Rodapé com avisos legais
- [x] Foco visível ao navegar com Tab
- [ ] Contraste legível no telemóvel — **validar no telemóvel**

### Fase 4 — Páginas
- [ ] Home parece um painel institucional (não um folheto)
- [ ] 7 páginas de área com descrição (conteúdo do PDF institucional)
- [ ] Sectores visíveis dentro de Áreas de Especialidade (home e `/areas/`)
- [ ] 3 bios com foto, credenciais e contacto
- [ ] Nenhuma tabela de honorários
- [ ] Nenhuma animação de 600 frames
- [ ] Espaçamento consistente entre secções
- [ ] Animações suaves: menu da sidebar, hero, títulos e cartões

### Fase 5 — Conteúdo
- [ ] Artigos com data e autor visíveis
- [ ] Formulário funciona e confirma envio
- [ ] Casos anonimizados (sem nomes de clientes)

### Fase 6 — SEO/i18n
- [ ] Versão inglesa sem texto por traduzir
- [ ] Títulos de página diferentes uns dos outros
- [ ] Políticas de privacidade/cookies/disclaimer no rodapé

### Fase 7 — Deploy
- [ ] Site no ar carrega em 4G
- [ ] Menu mobile no telemóvel real
- [ ] Domínio e CNAME correctos

---

## 5. Log de correções (preencher à medida)

| Data | Fase | Onde | Observação | Decisão | Estado |
|---|---|---|---|---|---|
| 2026-11-23 | 3 | Global | Um revert deixou `v2/` vazio; reconstruído em frente, sem `git checkout` | Fases 2 + 3 reaplicadas directamente | ✅ |
| 2026-11-23 | 3 | Navbar / Hero | Subtítulo antigo removido | Usar `Sociedade de Advogados, RL` em `pt.ts`, `en.ts` e navbar | ✅ |
| 2026-11-23 | 3 | Marca | `logo.png` e `favicon.ico` copiados para `v2/public/` | Originais na raiz intactos | ✅ |
| 2026-11-23 | 3 | Tokens | Azul-céu removido; paleta âmbar da logo aplicada | `npm run build` limpo, 12 páginas | ✅ |
| 2026-11-23 | 3 | Tipografia | Syne/Inter não combinam com as referências | Source Serif 4 + Source Sans 3 | ✅ |
| 2026-11-23 | 3 | Hero | "em Angola" removido do título | `Assessoria jurídica corporativa` (parcerias globais) | ✅ |
| 2026-11-23 | 3 | Navbar | Fundo escuro trocado por branco | `--surface` + texto `--ink`, régua `--gold` | ✅ |
| 2026-11-23 | 3 | Mobile | Botão com texto "Abrir menu" substituído | Ícone hambúrguer de 3 barras com `aria-label` | ✅ |
| 2026-11-23 | 3 | Navbar | Fundo branco não agradou | Voltou ao `--ink` escuro anterior | ✅ |
| 2026-11-23 | 3 | Navbar | Links apertavam antes do menu comutar | Breakpoint 900 → 1200 px; só marca + hambúrguer | ✅ |
| 2026-11-23 | 3 | Navbar | Sublinhado no item selecionado | Removido; item activo só muda de cor | ✅ |
| 2026-11-23 | 3 | Rodapé | WhatsApp faltava no rodapé | Link `wa.me` com `+244 931 092 703` adicionado | ✅ |
| 2026-11-23 | 4 | Navegação / todo o projecto | Termo anterior da navegação não era o pretendido | Padronizado como "Áreas de Especialidade" em `v2/` e `docs/` | ✅ |
| 2026-11-23 | 4 | Conteúdo das secções | Resumos inventados pela Fase 4 | Substituídos por frases exactas do legado (`i18n.js`) | ✅ |
| 2026-11-23 | 4 | CSS | Componentes usavam tokens inexistentes (`--space-*`, `--font-heading`) | Tokens definidos em `:root` como aliases | ✅ |
| 2026-11-23 | 4 | Animações | Pedido para reaproveitar as animações | Scroll-reveal leve + entrada do hero + sombra no header; sem 600 frames | ✅ |
| 2026-11-23 | 4 | Links internos | `entry.id` do Astro 5 inclui `.md` e gerava 404 | Helper `toSlug()` aplicado em todas as listagens e detalhes | ✅ |
| 2026-11-23 | 4 | Páginas de detalhe | O resumo do frontmatter não aparecia | Renderizado explicitamente em áreas e sectores | ✅ |
| 2026-11-23 | 4 | Áreas de Especialidade | 6 áreas antigas não correspondiam ao PDF institucional | Substituídas pelas 7 áreas do PDF (ver §10) | ✅ |
| 2026-11-23 | 4 | Sectores | Secção autónoma e item de navbar | Sectores passam para dentro de Áreas de Especialidade | ✅ |
| 2026-11-23 | 4 | Animações | Sidebar e restantes elementos entravam de forma abrupta | Transições mais longas, regra dourada animada e stagger suave | ✅ |
| 2026-11-23 | 4 | Títulos de secção | A classe usada fora do componente perdia a tipografia | Base `.section-heading__title` movida para `global.css`; `/areas/` usa `h1` | ✅ |

---

## 6. Paleta final — âmbar institucional (validada)

> Extraída de `logo.png` (1254×1254, fundo transparente; ouro médio `#DAAB55`)
> cruzada com o estilo editorial dos 15 firmas de referência.
> **Substitui a paleta provisória azul/castanho.** O azul-céu `#3BB4F2` não existe na marca.

| Token CSS | Valor | Origem | Contraste | Uso |
|---|---|---|---|---|
| `--gold` | `#C08030` | traço dominante da logo (7,1%) | 5,78:1 sobre `--ink` | cor primária: links, botões, régua |
| `--gold-mid` | `#E0A040` | transição quente (2,4%) | 8,41:1 sobre `--ink` | detalhes, bordas, hover |
| `--gold-light` | `#F8C050` | realce da logo (1,7%) | 11,47:1 sobre `--ink` | texto sobre fundo escuro |
| `--ink` | `#140F0A` | preto quente da logo (`#100D06`) | 17,82:1 sobre `--paper` | fundo do header/hero + texto principal |
| `--brown-dark` | `#583000` | sombra da logo (6,7%) | 10,69:1 sobre `--paper` | títulos secundários, texto |
| `--brown-medium` | `#704010` | sombra da logo (9,3%) | 8,09:1 sobre `--paper` | divisórias, ícones, bordas |
| `--paper` | `#FAF7F2` | neutro editorial dos firmas | — | fundo claro |
| `--brown-soft` | `#D9C3B0` | legado, neutro quente | 11,23:1 sobre `--ink` | texto secundário |

Regras de uso:
- Fundo escuro (`--ink`) + texto `--paper`/`--gold-light` no header e no hero.
- Fundo claro (`--paper`) + texto `--ink`/`--brown-dark` no corpo.
- `--gold` só em acentos, links e botões — nunca em blocos grandes.
- **Não usar** `--sky` `#3BB4F2` nem `--sky-bg` `#EAF6FD` — foram removidos.

### Substituições em relação à Fase 2

| Token provisório | Token final |
|---|---|
| `--sky` `#3BB4F2` | `--gold` `#C08030` |
| `--sky-bg` `#EAF6FD` | `--paper` `#FAF7F2` |
| `--brown-darkest` `#1F120B` | `--ink` `#140F0A` |
| `--brown-dark` `#2E1B12` | `--brown-dark` `#583000` |
| `--brown-medium` `#4A2C1B` | `--brown-medium` `#704010` |
| Títulos | Syne 600–800 → **Source Serif 4** 400/600/700 |
| Corpo | Inter 300–700 → **Source Sans 3** 300–700 |

## 7. Marca e ficheiros de ícone (decisão do cliente · Nov 2026)

- **Subtítulo:** `Sociedade de Advogados, RL` (sem ponto e vírgula — o `;` no pedido
  era separador entre instruções).
  A frase `Para grupos empresariais e investidores internacionais.` foi removida
  de `pt.ts`, `en.ts` e de todas as páginas.
- **Ícone da navbar:** `v2/public/logo.png`, copiado da raiz sem editar o original.
- **Favicon:** `v2/public/favicon.ico`, copiado da raiz sem editar o original.
  A referência antiga a `/favicon.svg` foi removida do layout.

## 8. Ajustes decididos na revisão de 2026-11-23

- **Tipografia:** trocar Syne/Inter por **Source Serif 4** (títulos) e
  **Source Sans 3** (corpo). Motivo: as firmas de referência usam serif clássica;
  Syne é uma fonte geométrica de estúdio criativo.
- **Título do hero:** `Assessoria jurídica corporativa` — sem ", em Angola".
  Motivo: a JPires trabalha com parcerias globais e não se limita a Angola.
- **Navbar:** voltou ao fundo escuro `--ink` com texto `--paper` — a cor anterior.
  A experiência com fundo branco foi rejeitada na revisão visual.
- **Responsividade:** o breakpoint subiu de **900 px para 1200 px**. Abaixo disso
  ficam visíveis apenas a marca (logo + nome da empresa) e o botão hambúrguer.
  Acima de 1200 px aparece a lista completa de links.
- **Mobile:** o botão de texto "Abrir menu" foi substituído por um ícone
  hambúrguer de 3 barras. Continua a abrir/fechar o painel e transforma-se em X
  quando aberto. `aria-label` muda entre "Abrir menu" e "Fechar menu".

## 9. Ajustes de conteúdo e animação (pedido de 2026-11-23)

### 9.1 Terminologia

- Navbar, home, página `/areas/` e todos os documentos passam a dizer
  **"Áreas de Especialidade"** (`nav.areas`, `home.areas.title`, `areas.titulo`).
- Inglês alinhado: **"Practice Areas"** em `nav.areas`, com os restantes títulos
  já nesse valor.
- Os ficheiros da versão anterior (`i18n.js`, `areas-modal.js`, `src/`) **não
  foram editados** — são a fonte original e fazem parte da zona sagrada.

### 9.2 Conteúdo conciso vindo da versão anterior

Os resumos inventados na Fase 4 foram substituídos por frases **literais** de
`i18n.js` (linhas 459–486 e 406–627), sem número, cliente, prémio ou ano:

| Secção | Origem do texto no legado |
|---|---|
| Direito Societário & Governance | "Constituição de sociedades e acordos de accionistas. Governação societária e responsabilidade dos administradores." |
| Fusões, Aquisições & Privatizações | "Reorganizações societárias, fusões, aquisições e due diligence." |
| Investimento Estrangeiro & JV | "Investimento estrangeiro, parcerias e joint ventures." |
| Contratos Comerciais & Regulação | "Contratos comerciais, de fornecimento e de prestação de serviços." |
| Financiamento & Reestruturação | "Financiamento, garantias e reestruturação de dívida." |
| Resolução de Conflitos | "Contencioso comercial, arbitragem e mediação." |
| Oil & Gás e Energia / Mineração / Banca / Seguros / Imobiliário | descrições literais do modal de áreas do legado |

Três sectores (`Instituições Públicas e Estado`, `Recursos Humanos e Laboral`,
`Segurança Privada`) não têm descrição no legado — mantiveram o resumo curto e
factual da Fase 4, sem inventar nada.

O intro do hero passou a ser um excerto do legado, sem a cauda "em Angola":
"Rigor, independência e confidencialidade ao serviço de empresas, instituições
e particulares."

### 9.3 Animações e CSS

- **Reaproveitado:** a ideia de progressão suave com scroll do `script.js`
  (`computeScrollProgress` + `LERP_FACTOR`) foi traduzida para
  `IntersectionObserver` com transição CSS — leve, sem `requestAnimationFrame`
  permanente.
- **Não reaproveitado:** a sequência de 600 frames neon, os preços e o
  "★ RECOMENDADO" — ficam de fora por decisão anterior.
- **Entrada do hero:** `hero-in` com escalonamento de 80 ms (só quando há JS).
- **Cartões:** elevação de 4 px + régua dourada no topo ao passar o rato.
- **Header:** sombra discreta ao descer 24 px (equivalente ao `onScroll` legado).
- **`prefers-reduced-motion`:** todas as animações desligadas.
- **Sem JS:** conteúdo visível — a classe `.js` só é adicionada pelo script.
- **Correção técnica:** os tokens `--space-1..6`, `--font-heading`,
  `--container-max-width`, `--radius`, `--shadow-card` e `--ease` estavam a ser
  usados pelos componentes mas não existiam — agora estão definidos em `:root`.

---

## 10. Conteúdo oficial do PDF institucional (revisão de 2026-11-23)

Fonte: `Apresentacao_Institucional_JPires_Sociedade_Advogados_RL_Revista.pdf`
(11 páginas, fornecido pelo cliente). O texto foi extraído e usado **apenas** como
fonte de conteúdos; a apresentação visual da v2 manteve-se.

### 10.1 Sete áreas de especialidade

As 6 áreas anteriores foram substituídas pelas 7 do PDF, por esta ordem:

| # | Área | Resumo (base: PDF) |
|---|---|---|
| 1 | Banca e Seguros | Operações bancárias e de crédito, garantias, financiamento, regulação, contratos de seguro, sinistros e litígios |
| 2 | Direito Empresarial | Ciclo de vida das empresas: constituição, governação, contratos, investimento, reorganizações e conflitos |
| 3 | Direito Imobiliário | Transacções e projectos imobiliários, due diligence, registo, arrendamento, empreitadas, urbanismo e contencioso |
| 4 | Direito dos Valores Mobiliários | Mercado de capitais, ofertas, emissão e negociação de valores mobiliários, deveres de informação e regulação |
| 5 | Direito Marítimo | Transporte marítimo, operações portuárias, afretamento, carga, seguros marítimos, responsabilidade e litígios |
| 6 | Direito do Petróleo e Gás | Projectos e contratos do sector energético, operações, serviços, cadeia de fornecimento e gestão de riscos |
| 7 | Direito Mineiro | Projectos mineiros, títulos e licenças, contratos de exploração, relações institucionais e conformidade |

Ficheiros em `v2/src/content/areas/`; os 6 `.md` antigos foram removidos.
O termo visível continua **"Áreas de Especialidade"** (inglês: *Practice Areas*).

### 10.2 Sectores dentro de Áreas de Especialidade

- O item **"Sectores"** saiu da navbar.
- Em `/areas/`, os 8 sectores aparecem numa subsecção (`id="sectores"`) da mesma
  página, com o mesmo cartão da versão anterior.
- Na home, os sectores ficam dentro da secção de Áreas de Especialidade, sob o
  título secundário `home.sectores.title`.
- As páginas de detalhe `/sectores/<slug>/` continuam a existir.

### 10.3 Texto institucional reaproveitado

- Novo intro de áreas (`areas.intro`): "Competência jurídica especializada, com
  compreensão dos sectores, dos negócios e dos desafios dos nossos clientes."
- Princípios da página Sobre alinhados ao PDF: **Rigor técnico**,
  **Confidencialidade**, **Proximidade**, **Responsabilidade** (PT e EN).
- Continua sem tabela de honorários, sem preços, sem "★ RECOMENDADO" e sem a
  animação neon de 600 frames.
- Dados por confirmar (`⚠️ CONFIRMAR`) continuam apenas em `site.ts`, nunca no HTML.

### 10.4 Animações mais suaves

| Elemento | Antes | Agora |
|---|---|---|
| Sidebar / menu mobile | `display: none` ↔ `block` (salto) | `grid-template-rows: 0fr → 1fr` + fade + subida suave (0,55 s) |
| Links do menu mobile | apareciam todos de uma vez | entrada escalonada de 40 em 40 ms |
| Hero | 0,8 s, deslocamento 1 rem | 1,05 s, deslocamento 0,75 rem, escalonamento 100 ms |
| Scroll-reveal | 0,7 s, 1,5 rem | 1 s, 1 rem, stagger de 70 ms nos cartões |
| Régua dourada dos títulos | aparecia fixa | cresce de 0 para 3 rem ao entrar no ecrã |
| `prefers-reduced-motion` | — | desliga transições do menu e da régua |

Validação: `npm run build` → **30 páginas**; sem links `.md`, sem `⚠️ CONFIRMAR`
renderizado, sem "em Angola" e sem "Áreas de Prática".
