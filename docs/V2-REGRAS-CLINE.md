# JPires v2 — Regras operacionais para o Cline

> Objetivo: permitir que o Cline altere o projeto com segurança, sem misturar a v2
> com o site legado e sem inventar informação institucional.

---

## 1. Antes de qualquer alteração

1. Ler `docs/V2-LEIA-ME.md`, `docs/V2-ESTRATEGIA.md` e `docs/V2-CONTEUDO.md`.
2. Confirmar a fase atual com o utilizador. **Trabalhar apenas uma fase de cada vez.**
3. Verificar `git status --short` no início: nenhum ficheiro da zona sagrada pode estar modificado.

## 2. Permissões de escrita

| Caminho | Fases 1–2 | Fases 3–7 |
|---|---|---|
| `docs/**` | ✅ permitido | ✅ permitido |
| `v2/**` | ✅ permitido | ✅ permitido |
| `index.html`, `style.css`, `script.js`, `i18n.js`, `areas-modal.js` | ❌ proibido | ❌ proibido |
| `frames/`, `frames.json`, `logo.png`, `favicon.ico` | ❌ proibido | ❌ proibido |
| `server.mjs`, `iniciar.bat` | ❌ proibido | ❌ proibido |
| `src/**` (React órfão) | ❌ proibido | ❌ proibido (só leitura) |
| `package.json` na raiz | ❌ proibido | ❌ proibido |

Se uma tarefa parecer exigir mexer na zona proibida: **parar e perguntar.**

## 3. Convenções de código

- Astro + TypeScript. `package.json` **dentro de `v2/`**.
- Ficheiros e slugs em `kebab-case`. IDs estáveis (`fusoes-aquisicoes`, não "Fusões").
- Chaves de i18n em IDs (`nav.areas`, `home.hero.title`). **Nunca texto PT como chave.**
- Conteúdo em Markdown com frontmatter tipado via content collections do Astro.
- Um único `v2/src/data/site.ts` para marca, contactos, navegação e redes. Sem duplicação.
- Nada de `any` sem justificação. Nada de `// @ts-ignore`.
- Comentários no código apenas quando explicam uma decisão não óbvia (ex.: por que
  um upload de formulário não usa servidor próprio).

## 4. Conteúdo — regras duras

- **Não inventar:** prémios, rankings, clientes, valores de transações, números de advogados,
  anos de actuação, fotos, links do LinkedIn, credenciais.
- Campo sem fonte confirmada → manter literalmente `⚠️ CONFIRMAR` no ficheiro e listar na pendência.
- Casos de clientes só anonimizados. Nunca nomear cliente sem autorização escrita.
- Secção de honorários na v2: **sem tabela de preços, sem "★ RECOMENDADO", sem "sob consulta" repetido.**
- Sem animação scroll-driven de 600 frames na v2.
- Textos institucionais em **português de Angola** ("actuação", "directo", "Sociedade", "RL").

## 5. Fluxo por tarefa

Para cada tarefa que o utilizador pedir:

1. **Ler** os documentos aplicáveis e os ficheiros existentes em `v2/`.
2. **Implementar** o mínimo necessário — sem refactors não pedidos.
3. **Validar**:
   - `cd v2 && npm run build` (deve terminar sem erros)
   - `git status --short` (confirmar que só `docs/` e `v2/` aparecem)
   - verificar links internos e `alt` de imagens
4. **Reportar** no fim:
   - o que foi feito
   - ficheiros criados/alterados
   - decisões tomadas e porquê
   - pendências `⚠️ CONFIRMAR`
   - o que vem a seguir

## 6. Git

- **Não fazer commit** sem pedido explícito.
- Nunca usar `git add -A` / `git add .`. Adicionar apenas ficheiros das pastas permitidas.
- Nunca fazer `git push`, `git reset --hard`, `git clean -fd` ou `--force`.
- Se um ficheiro legado aparecer modificado, **não o revert automaticamente**: reportar.
  Pode ser trabalho do utilizador.

## 7. Checklist de aceitação de cada fase

- [ ] Build limpo em `v2/`
- [ ] `git status` sem ficheiros da zona sagrada
- [ ] Nenhum facto inventado
- [ ] `⚠️ CONFIRMAR` preservado onde aplicável
- [ ] Sem dependências novas fora de `v2/`
- [ ] Acessibilidade: `alt`, contraste, foco visível, `lang`
- [ ] Performance: nenhuma imagem > 200 KB sem WebP/AVIF equivalente
- [ ] Relatório entregue ao utilizador

## 8. Frase de segurança

> Se houver dúvida entre "avançar" e "perguntar", **perguntar**.
> O custo de parar 30 segundos é sempre menor que o custo de sobrescrever o site em produção.
