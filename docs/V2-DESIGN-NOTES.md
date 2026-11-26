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
| 2026-11-23 | 5 | Contactos | Formulário e dados empilhados | Duas colunas a partir de 900 px; título "Envie-nos uma SMS" | ✅ |
| 2026-11-23 | 5 | Navbar | "Contactos" e "Contactar" com o mesmo destino | Botão "Contactar" removido da navbar | ✅ |
| 2026-11-23 | 5 | Detalhe de área | Botão branco ilegível e sem caminho de regresso | Botão âmbar + seta de regresso no topo | ✅ |
| 2026-11-23 | 5 | Sobre | Faltavam Método de Trabalho e Alianças do legado | 5 passos literais + mapa Leaflet com 9 países (decisão: Sobre) | ✅ |
| 2026-11-23 | 5 | Contactos | Formato 0,9/1,1 e campos apertados | 50/50, painel escuro, paleta clara e inputs maiores | ✅ |
| 2026-11-23 | 5 | Navbar | Item "Contactos" pretendido como botão | Botão "Fale Conosco" para `/contactos/` | ✅ |
| 2026-11-23 | 5 | Detalhe de área | Texto "Voltar" ocupava espaço | Seta circular com `aria-label`, no lugar do breadcrumb | ✅ |
| 2026-11-23 | 5 | Animações | Cartões de áreas/sectores não animavam | `@keyframes reveal-in` com stagger partilhado | ✅ |
| 2026-11-23 | 5 | Sobre | Cards dos princípios não abriam o conteúdo do legado | Modal único com os 4 ATRIBUTOS literais, na paleta âmbar | ✅ |

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

---

## 11. Ajustes pedidos pelo cliente (2026-11-23, 11:00)

### 11.1 Contactos — duas colunas

- À esquerda: dados de contacto (`ContactDetails.astro`); à direita: título
  **"Envie-nos uma SMS"** + campos do formulário (`ContactForm.astro`).
- Grelha `.contactos-layout` a partir de **900 px** (`0,9fr / 1,1fr`); abaixo disso
  os blocos empilham-se na mesma ordem. Sem perda de conteúdo.
- O título da página passou a `h1` (antes era `h2`).
- O envio do formulário continua desligado até o cliente escolher mailto:,
  Formspree ou Netlify Forms (decisão pendente da Fase 5).

### 11.2 Navbar sem duplicação

- Removido o botão **"Contactar"** da navbar — apontava para `/contactos/`, o mesmo
  destino do item "Contactos". Ficam 7 links no menu.
- Botões "Contactar" do hero, do rodapé e das páginas de detalhe mantêm-se.

### 11.3 Detalhe de área de especialidade

- Botão de contacto passou de `.btn-ghost` (branco, ilegal sobre fundo claro)
  para **`.btn-primary`** — âmbar com texto escuro.
- No topo da página ficou apenas a **seta de regresso** (o breadcrumb textual
  "Áreas de Especialidade / <área>" foi removido a pedido do cliente).

### 11.4 Sobre — Método de trabalho e Alianças

- **Método de trabalho** (do `areas-modal.js` e `index.html` legados): os 5 passos
  literais — Conhecimento, Verificação, Proposta, Execução, Conclusão — com o
  subtítulo "Do primeiro contacto ao encerramento" e "Um fluxo de trabalho claro
  e acompanhado." Secção com fundo alternativo `#f3ede4`.
- **Alianças internacionais** decididas para a secção **Sobre** (não Equipa), com
  **mapa interativo Leaflet** (decisão do cliente) — 9 países do legado, mais
  Luanda como sede. Todos os marcadores e rótulos usam a paleta âmbar; o azul-céu
  do legado não foi trazido.
- O mapa usa mosaicos externos do ArcGIS (Canvas Dark Gray), `scrollWheelZoom`
  desligado e uma lista textual por continente como alternativa acessível e
  para o caso de os mosaicos não carregarem.
- Dependência `leaflet` + `@types/leaflet` instalada **dentro de `v2/`**.

Validação após estes ajustes: `npm run build` → 30 páginas; breadcrumb, botão
âmbar (`rgb(192, 128, 48)`), 5 passos, 9 países, mapa inicializado, sem erros de
consola e sem `⚠️ CONFIRMAR` no HTML.

---

## 12. Segunda ronda de ajustes (2026-11-23, 11:40)

- **Contactos 50/50:** as duas colunas passaram a `1fr / 1fr` a partir de 900 px
  (460 px + 460 px em viewport de 1000 px). Corrigido o `margin: 0 auto` do
  `ContactDetails.astro` que fazia a coluna esquerda ficar mais estreita.
- **Quadro "Envie-nos uma SMS" escuro:** fundo `--ink` (mesmo da navbar), título
  `--gold-light`, etiquetas `--brown-soft`, inputs com fundo translúcido claro,
  texto `--paper`, foco `--gold-light` e mensagens de erro/sucesso adaptadas.
- **Mais espaço:** inputs com altura mínima de 52 px, padding 14/16 px, 32 px
  entre campos e textarea de 144 px.
- **Navbar:** o item "Contactos" foi substituído pelo botão **"Fale Conosco"**
  (chave `nav.faleConosco`), com o mesmo destino `/contactos/`. Continua a haver
  apenas um link para contactos no menu.
- **Voltar nas áreas:** o breadcrumb foi removido e a **seta circular** passou a
  ocupar o espaço no topo da página, com `aria-label`/`title` "Voltar a Áreas de
  Especialidade" (acessibilidade mantida). No fim ficou só o botão "Contactar".
- **Animação unificada:** Método de Trabalho, Áreas de Especialidade e Sectores
  usam agora a mesma entrada `reveal-in` (1 s, stagger de 70 ms). Causa raiz
  corrigida: o `transition` scoped dos cartões sobrescrevia o `.reveal`; a entrada
  passou a `@keyframes` para não roubar a transição do hover (0,35 s).

Validação: `npm run build` → 30 páginas; colunas iguais, fundo `rgb(20,15,10)`,
título `rgb(248,192,80)`, seta com aria-label, delays 0/70/140/210/280 ms nos
passos e cartões, sem erros de consola.

---

## 13. Modal dos princípios no Sobre (2026-11-23, 12:05)

### Dinâmica

- Recriado o **modal único e reutilizável** do legado (`areas-modal.js`): um só
  `role="dialog"` no fim da página, preenchido por `data-principio` de cada card.
- Os 4 cartões passaram de `<div>` a `<button type="button">`, com `aria-haspopup="dialog"`
  e o link "Saber mais →" que o legado inseria.
- Abertura por clique; fecho por **botão Fechar**, **clique no fundo** e **Escape**.
  O `body.modal-open` bloqueia o scroll; o foco entra no botão Fechar e regressa
  ao card de origem ao fechar.

### Correspondência dos conteúdos

Feita pelo **subtítulo**, não pela posição dos cartões (a ordem no Sobre é diferente
do array `ATRIBUTOS` do legado):

| Card no Sobre | Atributo legado | Título no modal | Subtítulo |
| --- | --- | --- | --- |
| Rigor técnico | `ATRIBUTOS[0]` | Rigor | Rigor técnico |
| Confidencialidade | `ATRIBUTOS[1]` | Confiança | Confidencialidade |
| Proximidade | `ATRIBUTOS[3]` | Parceria | Proximidade |
| Responsabilidade | `ATRIBUTOS[2]` | Pragmatismo | Responsabilidade e método |

- Textos **literais** do legado: intro, lista de itens (com o ícone `✓`) e nota final.
- Estrutura conservada: eyebrow → título → subtítulo → intro → divisória →
  etiqueta "Como se traduz no nosso trabalho" → lista → nota → CTA "Falar com a JPires".
- O CTA aponta para `mailto:` com assunto por princípio, como no legado.

### Paleta e ficheiros

- Fundo do diálogo `--ink`, borda âmbar, eyebrow `--gold`, título `--paper`,
  subtítulo `--gold-light`, etc. Nenhum azul-céu do legado.
- Mobile: folha inferior (bottom sheet) abaixo de 640 px, como no legado.
- Novos ficheiros: `v2/src/components/PrincipioModal.astro` e
  `v2/src/data/principios.ts`; chaves em `sobre.principios.*` em `pt.ts`/`en.ts`.

Validação: `npm run build` → 30 páginas; 4 cards, 4/4/5/5 itens com `✓`, textos
literais presentes no HTML, foco no botão Fechar, fecho pelas 3 vias com regresso
do foco ao card, sem erros de consola e sem `⚠️ CONFIRMAR` renderizado.

---

## 14. Ícones de contacto no rodapé (2026-11-23, 12:12)

- `Footer.astro` passou a apresentar uma lista com ícone âmbar em cada contacto:
  **WhatsApp**, **telefone**, **email** e **localização (GPS)**.
- Os links mantêm-se os mesmos (`wa.me`, `tel:`, `mailto:` e Google Maps); os
  ícones são SVG inline, sem dependências externas e com `aria-hidden="true"`.
- Validação: build com 30 páginas, 4 ícones presentes, cor `rgb(192,128,48)`,
  sem erros de consola.

---

## 15. Seletor de 8 idiomas (2026-11-23, 12:25)

Decisão do cliente: manter o comportamento do site antigo — **8 idiomas,
escolhidos no próprio ecrã**, sem criar uma URL por idioma.

- Idiomas/códigos: `pt/ao`, `en/gb`, `fr/fr`, `de/de`, `ar/ae`, `ru/ru`,
  `it/it`, `zh/cn`. Bandeiras do flagcdn, como no legado.
- Árabe é RTL: `definirIdioma()` actualiza `<html lang>` e `<html dir="rtl">`.
- Preferência guardada em `localStorage['jpires-lang']` e aplicada ao carregar
  qualquer página; o `<title>` também é traduzido.
- O motor `v2/src/i18n/runtime.ts` reaproveita as **207 entradas** copiadas de
  `i18n.js` (`traducoes-legado.ts`) e acrescenta **80 entradas**
  (`traducoes-extra.ts`) para textos novos do PDF. Cobertura: 142/142 textos da
  interface e 75/75 textos de conteúdo.
- `aplicar()` usa `WeakMap` para guardar os originais, percorre nós de texto e
  os atributos `aria-label`, `placeholder` e `title`, e ignora
  `script, style, svg, textarea, [data-no-translate]`.
- Evento `jp:lang` avisa o modal dos princípios (que se renderiza de novo se
  estiver aberto), o formulário de contacto e o botão do menu móvel.
- `LanguageSwitcher.astro` fica na navbar (desktop e móvel), com
  `aria-haspopup="listbox"`, `aria-selected`, fecho por clique fora/Escape e
  navegação pelas setas do teclado.
- `Notícias` e `Insights` mantêm-se separadas: Notícias = novidades da firma;
  Insights = artigos técnicos e opiniões dos advogados. Não foi criado ficheiro
  de exemplo, a pedido do cliente.

Validação: build com 30 páginas; PT→FR→AR→ZH→PT sem erros de consola; `dir="rtl"`
no árabe; `localStorage` persistente entre páginas; modal e mensagens do
formulário traduzidos a quente; 0 páginas com `⚠️ CONFIRMAR` ou links `.md`.

---

## 16. Sistema de cores unificado (2026-11-23, 12:37)

Pedido do cliente: varredura das cores usadas e criação de um padrão único para
botões, texto e todos os elementos, evitando problemas de identidade visual.

### Varredura

- `logo.png` (1254×1254, fundo transparente) tem como cores dominantes
  `#E0A040` (8,0%), `#C08030` (7,7%), `#D09040`, `#F0B050` e `#F0C050` —
  confirmam as primitivas já definidas em §6.
- Inventário de 43 ficheiros do v2 encontrou **33 cores literais dispersas**
  (hex e `rgba`) em 20 componentes/páginas, além das 8 primitivas. Exemplos:
  `#f3ede4` em Sobre, `#ff9f8a/#ffb4a2/#ffd7cf` no formulário, e 25 variantes
  de `rgba()` para sombras, overlays e transparências.

### Padrão criado

Novo ficheiro `v2/src/styles/tokens.css`, importado por `global.css`, com 3 camadas:

1. **Primitivas** — as 8 cores da marca + `--paper-alt` + 4 cores de erro.
2. **Canais RGB** — `--rgb-gold`, `--rgb-ink`, `--rgb-paper`, etc., para
   transparências escritas sempre como `rgb(var(--rgb-…) / 0,16)`.
3. **Semânticos** — `84 tokens` agrupados em `--surface-*`, `--text-*`,
   `--border-*`, `--focus-ring*`, `--overlay-*`, `--shadow-*` e `--scrollbar-thumb`.

**Regra de ouro:** nenhum componente escreve hex/rgba — só tokens semânticos.
Foram convertidas **204 declarações** em 20 ficheiros.

### Validação

- `npm run build` → 30 páginas, sem erros.
- 0 cores literais fora de `tokens.css` (restam apenas `currentColor`,
  `inherit`, `none`, `transparent`).
- 0 tokens usados sem definição; 0 primitivas usadas directamente nos componentes.
- Cores calculadas no browser idênticas às anteriores: fundo `#FAF7F2`, texto
  `#140F0A`, botão `#C08030` com texto `#140F0A`, ícones do rodapé `#C08030`,
  overlay do modal `rgba(20,15,10,0.78)`, erros `#FF9F8A/#FFB4A2/#FFD7CF`.
- Mapa, modal, formulário e seletor de idiomas continuam sem erros de consola.

---

## 17. Hero com fotografias, CTA final e rodapé (2026-11-23, 13:00)

Pedido do cliente: realçar o botão **Contactar do fim da página inicial** (não o
do hero), colocar fotografias das 7 áreas no fundo do hero e retirar a palavra
"WhatsApp" do rodapé.

### Botão Contactar (fundo da página)

- Antes: `.section--cta` não tinha estilos; o botão ficava alinhado à esquerda.
- Agora: `.section--cta { text-align: center; }` e o botão tem `cta-pulse`
  (anel âmbar discreto de 3,4 s), mais a entrada `.reveal` já usada no site.
- A animação usa apenas `--cta-glow-start` / `--cta-glow-end`, definidos em
  `tokens.css`. Respeita `prefers-reduced-motion`.

### Fotografias do hero

- Origem escolhida pelo cliente: **stock online**. Foram descarregadas 7 fotos
  da **Pexels** (licença Pexels, uso livre), uma por área, em 1600×900,
  guardadas localmente em `v2/public/images/hero/`.
- Créditos em `v2/public/images/hero/CREDITOS.md`.
- `HeroSlideshow.astro` recebe a lista directamente de `getCollection('areas')` — a ordem
  é a mesma das áreas (`ordem`), pelo que adicionar/remover uma área actualiza
  o slideshow sem editar outro ficheiro.
- Crossfade só com CSS: 5 s por foto, 35 s o ciclo completo. Cada foto aparece
  a `--hero-image-opacity: 0.46` e por cima há o véu `--overlay-hero`
  (gradiente `--ink` de 94% à esquerda, 64% à direita) — o texto continua
  legível e as imagens continuam visíveis.
- Sem JavaScript: as fotos estão no HTML. Com `prefers-reduced-motion`: fica
  apenas a primeira, parada. Todas carregam com `loading="eager"` (as 6 seguintes
  com `fetchpriority="low"`) para não haver slides vazios.

### Rodapé

- Removido o `<span class="footer-contacts__label">WhatsApp:</span>`.
- Mantidos o ícone, o link `wa.me` e o número. Acessibilidade preservada com
  `aria-label` (traduzido pelo motor de idiomas).

### Validação

- `npm run build` → 30 páginas, sem erros.
- 7/7 fotos carregadas; animação `hero-slide-fade` a correr (35 s); CTA com
  `cta-pulse`; botão alinhado ao centro em 1440, 768 e 390 px.
- Sem overflow horizontal em 1440/768/390 px; sem "WhatsApp" visível no rodapé
  em PT→FR→AR→ZH→PT; `dir="rtl"` no árabe; 0 erros de consola; 0 `⚠️ CONFIRMAR`.
- Continuam 0 cores literais fora de `tokens.css` e 0 tokens sem definição.

---

## 18. Fundo do Método de Trabalho — aplicação final (2026-11-23, 16:32)

Pedido do cliente: usar o mesmo fundo do "Método de Trabalho" **apenas na secção
Sectores da página Áreas**.

- A regra `.section--alt { background: var(--surface-alt); }` estava isolada no
  `<style>` de `pages/sobre/index.astro`. Foi movida para `global.css` para ser
  reutilizável, sem alterar a cor (`#F3EDE4`).
- Aplicação final: secção `#sectores` em `pages/areas/index.astro` (8 cartões)
  e secção `#sectores` em `pages/index.astro` (8 cartões). As secções de Áreas
  mantêm o fundo normal, tal como a listagem `/sectores/` e as páginas de detalhe.
- Na inicial os sectores têm secção própria (`id="sectores"`); `.sectores-title`
  anula a margem superior extra.

Durante o trabalho foram testadas aplicações mais amplas (inicial e `/sectores/`),
mas o cliente pediu explicitamente para as anular — ficou só o local acima.

Validação final: build com 30 páginas; fundo `rgb(243,237,228)` no Método
(5 passos), em `/ #sectores` (8 cartões) e em `/areas/ #sectores` (8 cartões);
fundo transparente nas secções de Áreas, em `/sectores/` e nas páginas de
detalhe; CTA final centrado; 0 erros de consola; 0 cores soltas e 0 tokens sem
definição.

---

## 19. Preparação da publicação (2026-11-23, 18:10)

Decisão do cliente: fazer o teste **substituindo o GitHub Pages actual** (`/jpires-advogados/`)
e, só depois, publicar na Angoweb. Os ficheiros legados na raiz **não** são
apagados nem deslocados — continuam no repositório e no histórico do Git.

- `astro.config.mjs`: `base` configurável por `V2_BASE`, com valor por omissão
  `/jpires-advogados/`. Para a Angoweb: `V2_BASE=/ npm run build`.
- Criado `src/utils/url.ts` com `withBase()`. Todas as URLs internas (navbar,
  rodapé, favicon, logótipo, cartões, fotos do hero e links legais) passam por
  esta função. O Astro já prefixa sozinho os assets `_astro/`; o `.nojekyll`
  em `public/` impede que o GitHub Pages ignore essa pasta.
- Criado `.github/workflows/publicar-v2.yml`: faz build de `v2/` e publica
  apenas `v2/dist` via `actions/deploy-pages`. Não mexe na raiz do repo.
  O cliente escolheu "substituir o Pages actual", pelo que é necessário mudar
  em Settings → Pages → Source para **GitHub Actions**.
- Guia simples em `docs/V2-PUBLICACAO.md`.

Validação: build com 30 páginas; 0 URLs internas sem prefixo nos 30 HTML;
`.nojekyll` presente no `dist`; preview local em `/jpires-advogados/` com
7/7 fotos, CSS carregado, links internos prefixados e 0 erros de consola.

**Ainda por fazer:** recolha dos dados de acesso da Angoweb.

---

## 20. Publicação concluída no GitHub Pages (2026-11-23, 17:30 UTC)

- Cliente autorizou commit e push. Commits `0c3dfa0` (preparação) e `1644f2e`
  (correcção do ambiente de deploy).
- O primeiro deploy falhou: o ambiente `github-pages` criado por defeito só
  permite publicar a branch `main`, e o trabalho está na branch `daniel`.
  Solução: usar o ambiente `github-pages-v2`, sem essa regra. Não foi preciso
  mexer nas definições do GitHub além de escolher Source = GitHub Actions.
- Execução final: build e deploy com sucesso
  (https://github.com/DanielAdaoGil/jpires-advogados/actions/runs/45227936348).
- Site publicado verificado em https://danieladaogil.github.io/jpires-advogados/:
  título «Início — JPires», H1 «Assessoria jurídica corporativa», 7/7 fotos do
  hero, links internos com prefixo `/jpires-advogados/`, 0 erros de consola.
  Páginas `/areas/`, `/contactos/`, `/sobre/` e detalhe de área também abrem
  corretamente.

**Fase seguinte:** Angoweb, depois de receber método de upload, domínio e pasta
pública. Nessa fase o build será gerado com `V2_BASE=/`.

---

## 21. Formulário de contacto com envio real (2026-11-23)

- Cliente escolheu **Formsubmit.co** e confirmou o destinatário
  `geral@jpiresadvogados.com`.
- `ContactForm.astro` envia por `fetch` com `FormData` para
  `https://formsubmit.co/ajax/<email>`. O `action` POST normal foi mantido
  como alternativa se o JavaScript não correr. Campos ocultos: `_subject`,
  `_template=table`, `_url` (preenchido por JS) e o honeypot `_honey`.
  Não se desactivou o reCAPTCHA.
- Estados truthful: «A enviar mensagem...» com botão desactivado; sucesso só
  quando a resposta HTTP é ok **e** `success: "true"` (o serviço pode devolver
  200 com `success: "false"`); erro com o botão reactivado. As mensagens são
  textos PT do dicionário runtime e actualizam-se no evento `jp:lang`.
- `privacidade/index.astro` deixou de ser `StubPage`: agora explica que dados
  são recolhidos, para quê, que passam pelo Formsubmit.co (30 dias de retenção,
  reCAPTCHA) e como pedir acesso/correcção/eliminação. Novas chaves em
  `traducoes-extra.ts`, incluindo os quatro títulos de secção.
- Nenhuma cor literal nova: todos os estilos usam `tokens.css`.
- Validação: build com 30 páginas; `fetch` interceptado no browser para testar
  sucesso, recusa com `success:"false"`, campos obrigatórios e mudança PT→FR;
  0 erros de consola; medição em iframes de 1440/768/390 px sem deslocação
  horizontal (contactos: 2 colunas em 1440, 1 coluna em 768 e 390).
- Teste real autorizado pelo cliente (19-11-2026): o Formsubmit devolveu
  HTTP 200 com `success:"false"` e a mensagem
  `This form needs Activation. We've sent you an email containing an 'Activate Form' link`.
  O código já escreve essa frase no console (`[JPires] Formsubmit recusou o envio:`).
  Cada tentativa gera um novo email de activação para `geral@jpiresadvogados.com`.
- O envio só funciona depois de clicar nesse link. Depois da activação, testar
  também no domínio publicado (alguns relatos indicam activação por página).
- Sem commit/push — é necessária autorização explícita.

---

## 22. Páginas legais: Disclaimer, Aviso legal e Cookies (2026-11-24)

- As três páginas deixaram de ser `StubPage` e passaram a usar `BaseLayout`
  com texto real, no mesmo padrão da página de Privacidade.
- O estilo `.legal-content` foi movido de `privacidade/index.astro` para
  `global.css`; as quatro páginas legais partilham agora o mesmo limite de
  largura, títulos, parágrafos e links.
- **Aviso legal:** usa apenas dados confirmados em `site.ts` (nome da sociedade,
  morada e email). Inclui ligações para Privacidade e Cookies. Não inventámos
  NIF, número de registo comercial, inscrição na Ordem dos Advogados,
  responsável pelo site nem entidade de alojamento — estes dados devem ser
  fornecidos pelo cliente antes de a página estar completa.
- **Disclaimer:** informação geral, inexistência de relação de cliente só pela
  leitura, possibilidade de desactualização e ligações externas.
- **Cookies:** declara a ausência de cookies próprios de publicidade/audiência,
  explica o `localStorage['jpires-lang']` (não é cookie), o reCAPTCHA do
  Formsubmit.co e os pedidos externos ao Google Fonts e aos mosaicos Esri do
  mapa em `/sobre/`.
- Todas as frases novas foram acrescentadas a `traducoes-extra.ts` nas sete
  línguas não-PT; o motor runtime traduz também as frases com dados de `site.ts`
  porque estas são geradas como uma única cadeia no frontmatter.
- Validação: build com 30 páginas, 0 erros de consola nas três páginas, 8/8
  idiomas verificados (com RTL em árabe), 0 ocorrências de `⚠️ CONFIRMAR` no
  HTML gerado, 0 cores literais fora de `tokens.css`, e iframes de
  1440/768/390 px sem deslocação horizontal.
- Sem commit/push — é necessária autorização explícita.

---

## 23. Agendamento de consultas (2026-11-26)

Pedido do cliente: botão **Agendar consulta** abaixo dos dados em Fale Conosco,
levando a uma página nova com formulário de dados do cliente e da consulta.

### Decisões confirmadas pelo cliente

- **Pagamento:** só geração de referência. Não há gateway, nem detecção
  automática de pagamento, nem notificação de «pago».
- **Consulta online:** o link da sala é enviado por email após confirmação.
  Não inventámos URLs do Teams/Meet/Zoom/WhatsApp nem redirect automático.
- **Telefone:** selector de país com bandeira (22 países) e validação do formato
  nacional por país. Não se mostra nome de operadora.
- **Datas:** segunda a sexta, das 08:00 às 18:00, em blocos de 30 minutos;
  data mínima = hoje no fuso do visitante.

### Implementação

- `ContactDetails.astro`: botão com `withBase('/agendar-consulta/')`, traduzido
  nas 8 línguas (`contactos.agendarConsulta` em `pt.ts`/`en.ts` + runtime).
- `pages/agendar-consulta/index.astro`: H1, introdução, `BackLink` para
  Contactos e lista de advogados lida de `src/content/equipa` por `ordem`.
- `BookingForm.astro`: BI com `pattern="[0-9]{9}[A-Z]{2}[0-9]{3}"` e conversão
  automática de minúsculas para maiúsculas; telefone com DDI visível e campo
  oculto `telefoneCompleto` (`+DDI número`); tipo de consulta condiciona
  plataforma (Online) ou data/hora/advogado (Presencial) e as opções de
  pagamento; pagamento é sempre obrigatório (referência em Online; quatro
  opções em Presencial). Botão final «Solicitar Consulta».
- Referência `JP-CONS-YYYYMMDD-XXXX` (4 caracteres de
  `ABCDEFGHJKLMNPQRSTUVWXYZ23456789`), gerada no browser e enviada em campo
  oculto. Formsubmit.co para `geral@jpiresadvogados.com`, com `_subject`,
  `_template=table`, `_url`, honeypot e tratamento explícito de
  `success:"false"`. Mensagens de estado actualizadas no evento `jp:lang`.
- 28 novas frases em `traducoes-extra.ts` nas sete línguas não-PT.

### Validação

- `npm run build` → **31 páginas**, sem erros (avisos esperados das colecções
  vazias `insights`/`noticias`).
- `fetch` interceptado no browser — nenhum pedido real ao Formsubmit: sucesso
  Online (BI em maiúsculas, telefone completo, referência válida no FormData e
  na mensagem), recusa com `success:"false"` (mensagem de erro), ausência de
  pagamento (bloqueio sem chamada), Presencial sem pagamento (bloqueio) e
  Presencial com pagamento (dados e nota correctos no email/mensagem).
- 8/8 idiomas no formulário e na mensagem de sucesso; `dir="rtl"` em árabe.
- Iframes de 1440/768/390 px: 2 colunas em 1440/768 e 1 coluna em 390, sem
  deslocação horizontal. 0 erros de consola, 0 `⚠️ CONFIRMAR` no HTML gerado,
  0 cores literais fora de `tokens.css`, 0 tokens sem definição.

### Limitações (comunicadas ao cliente)

- O site é estático: não sabe quando o pagamento é feito. A referência serve
  para o cliente pagar e para a firma confirmar manualmente.
- A plataforma escolhida é apenas informativa; a sala e o link são enviados
  depois pelo advogado.
- O Formsubmit continua **por activar** — é preciso clicar no link
  «Activate Form» no email enviado para `geral@jpiresadvogados.com`.
- Sem commit/push — é necessária autorização explícita.
