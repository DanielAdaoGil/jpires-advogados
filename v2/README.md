# JPires v2 — Astro

Site institucional estático da JPires – Sociedade de Advogados, RL.

## Comandos

```bash
npm install     # só na primeira vez (ou se o package.json mudar)
npm run dev     # ver no browser: http://localhost:4321
npm run build   # gerar v2/dist/ para publicar
```

A hospedagem recebe apenas o conteúdo de `v2/dist/` — HTML, CSS, JS e imagens.
Não é preciso instalar Astro no servidor.

## Estrutura

- `src/data/site.ts` — marca, contactos e metadados (fonte única)
- `src/i18n/` — textos por ID (`nav.areas`), nunca texto PT como chave
- `src/styles/global.css` — tokens de cor e tipografia (paleta da logo)
- `src/components/` — Navbar, Footer e StubPage
- `src/layouts/BaseLayout.astro` — cabeçalho, menu, rodapé e metadados
- `src/pages/` — rotas reais (uma pasta por página)
- `src/content/` — conteúdo Markdown das fases seguintes
- `public/` — `logo.png` e `favicon.ico` copiados da raiz do repositório

Regras completas em `docs/V2-REGRAS-CLINE.md`. Feedback visual em `docs/V2-DESIGN-NOTES.md`.
