# JPires v2 — Leia-me (fonte da verdade do workflow)

> Este documento é o ponto de entrada para qualquer agente (Cline, OpenCode, humano)
> que vá trabalhar na **versão 2 institucional** do site da JPires.
> Atualizado: 2026-11-23 · Branch de trabalho: `daniel`

---

## 1. Estado atual do repositório ( IMPORTANTE )

O projeto é um **mix de duas camadas**, e as duas estão vivas:

| Camada | Ficheiros | Papel hoje |
|---|---|---|
| **Site legado (produção)** | `index.html`, `style.css`, `script.js`, `i18n.js`, `areas-modal.js`, `frames.json`, `frames/`, `logo.png`, `favicon.ico`, `server.mjs`, `iniciar.bat` | É o que está publicado em `https://danieladaogil.github.io/jpires-advogados`. **Não tocar.** |
| **React órfão** | `src/App.tsx`, `src/components/*.tsx`, `src/content.ts`, `src/index.css`, `src/main.tsx` | Código React/TSX **sem `package.json`, sem lockfile, sem build**. Referência de conteúdo, não é executável. **Não tocar.** |
| **v2 (novo)** | `v2/` (a criar na Parte 2) | Site institucional novo. **É aqui que todo o trabalho novo acontece.** |
| **Docs (este workflow)** | `docs/V2-*.md` | Regras, estratégia, modelo de conteúdo. |

### Zona sagrada — NUNCA editar, mover ou apagar nas Fases 1 e 2

```
index.html   style.css   script.js   i18n.js   areas-modal.js
frames.json  frames/     logo.png    favicon.ico
server.mjs   iniciar.bat
src/**       (todo o diretório)
```

Motivo: o site legado continua no ar enquanto a v2 é construída. Qualquer alteração
acidental aqui quebra a produção e mistura as duas versões — precisamente o problema
que estamos a resolver.

### Regra de ouro

> **Nenhum ficheiro novo fora de `docs/` e `v2/`. Nenhum `package.json` na raiz.**

---

## 2. Divergência conhecida entre produção e repo (resolver na Fase 0)

O site publicado e o código local **não são iguais**. Não escolher uma versão arbitariamente:

| Campo | Publicado (GitHub Pages) | Repo local (`src/content.ts`) |
|---|---|---|
| Email geral | `geral@jpiresadvogados.com` | `jpires@jpires-advogados.ao` |
| Equipa | 3 advogados (inclui Dr. Mauro Albuquerque) | 2 advogados |
| Honorários | "não são negociáveis, mas as formas de pagamento são" | "definidos em função do perfil do cliente..." |
| Navegação | "Áreas de Especialidade" (sem Sectores) | "Áreas de Prática" + "Sectores" |
| CTA | "Solicitar Proposta" | "Consultar Condições" |
| Rodapé | "Directório de Sócios" | — |

**Ação:** o Dr. Pires confirma os valores canónicos antes de migrarem para `v2/src/data/site.ts`.
Até lá, todos os campos em conflito ficam marcados `⚠️ CONFIRMAR` em `V2-CONTEUDO.md`.

Além disso: o histórico do git contém `Delete CNAME`. Em GitHub Pages, domínio próprio
exige ficheiro `CNAME`. Verificar DNS/domínio na Fase 6.

---

## 3. Decisões técnicas já tomadas

| Decisão | Valor | Porquê |
|---|---|---|
| Output final | **HTML estático** | GitHub Pages e AngoWeb servem ficheiros; sem Node, sem SSR, sem rewrites |
| Framework | **Astro** (componentes → HTML estático) | Sintaxe de componentes como React, mas sem runtime React em produção; corrige o problema do one-pager sem introduzir build complexo |
| Conteúdo | **Markdown + ficheiros de dados tipados** | O cliente atualiza pelo GitHub; sem CMS pago na Fase 1 |
| Localização | `v2/` | Isola a v2 do legado |
| Idioma base | `pt` (Angola) | `en` na Fase 5; `fr/de/ar/ru/it/zh` depois, com URLs próprias |
| SEO | URLs reais por página (não âncoras `#`) | É a diferença fundamental entre folheto e site institucional |
| Nomes | `kebab-case` para ficheiros e slugs | Estabilidade de URLs |

Se o Cline considerar Astro inviável no ambiente, **deve parar e reportar** — não substituir
por React SPA nem por HTML puro sem aprovação.

---

## 4. Fases (uma de cada vez — combinado)

| Fase | Nome | Entrega | Estado |
|---|---|---|---|
| **1** | Fundação documental | Este conjunto de 4 documentos | ✅ Concluída |
| **2** | Setup técnico | `v2/` com Astro, build a correr, nada publicado | ⬜ Por fazer |
| **3** | Design system | Layout, tokens visuais, navegação, rodapé legal | ⬜ |
| **4** | Páginas estruturais | Home, Sobre, 6 áreas, 8 sectores, Equipa, Contactos | ⬜ |
| **5** | Motor de conteúdo | `/insights/`, `/noticias/`, casos anonimizados, formulário | ⬜ |
| **6** | Credibilidade e SEO | Reconhecimentos, pro bono, carreiras, metadados, JSON-LD, i18n, privacidade | ⬜ |
| **7** | Deploy e validação | Publicar v2, Lighthouse, DNS/CNAME, rollback plan | ⬜ |

**Regra de fluxo:** só avançar para a fase seguinte quando a anterior estiver aceite.
O Cline deve trabalhar **uma fase por vez** e entregar um relatório no fim de cada uma.

---

## 5. Definição de "pronto" (aplica-se a todas as fases)

- [ ] Ficheiros alterados estão apenas dentro do âmbito da fase
- [ ] Zona sagrada intacta (`git status` não mostra nenhum ficheiro legado)
- [ ] `npm run build` corre sem erros dentro de `v2/`
- [ ] Nenhum facto inventado (prémios, clientes, valores, números)
- [ ] Campos em conflito mantidos com `⚠️ CONFIRMAR`
- [ ] Relatório final: o que foi feito, ficheiros tocados, decisões tomadas, pendências

---

## 6. Documentos de apoio

- `docs/V2-ESTRATEGIA.md` — o que copiar dos 15 top firms, o que não copiar, sitemap alvo
- `docs/V2-CONTEUDO.md` — modelos de dados e conteúdo canónico da JPires
- `docs/V2-REGRAS-CLINE.md` — regras operacionais e checklist por tarefa
