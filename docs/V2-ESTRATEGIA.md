# JPires v2 — Estratégia institucional

> Base: análise de Cravath, WLRK, Skadden, Latham & Watkins, Sullivan & Cromwell,
> Kirkland & Ellis, Davis Polk, Gibson Dunn, Milbank, Simpson Thacher, Sidley,
> Cooley, Paul Weiss, Quinn Emanuel e Weil (lista fornecida pelo cliente, Nov 2026),
> mais o site publicado da JPires.

---

## 1. O padrão que se repete nos 15

Todos têm a mesma espinha de informação:

```
People/Lawyers · Practices/Capabilities · Insights · Offices · About · Careers · Search
```

E a home **não é um folheto**: é um painel de atividade recente.

| Sinal | Evidência observada |
|---|---|
| Conteúdo datado e fresco | Kirkland: ~20 entradas entre 16 e 20 Nov 2026. Latham: insights de 20 Nov 2026. |
| Casos com resultado concreto | "Latham Advises DoorDash on US$17 Billion Acquisition of Instacart" |
| Prova externa | Gibson Dunn: "146 Top-Tier Rankings, Chambers USA 2026" |
| Citações de terceiros | Cravath (página de M&A): citações da Chambers, Legal 500, Best Lawyers, Law360 |
| Números verificáveis | Paul Weiss: 150 anos · 11 escritórios · 45 áreas |
| Directório pesquisável | Gibson Dunn: 2.317 advogados, filtros por prática, indústria, local, idioma, faculdade, barra |
| Bio individual com contacto directo | email e telefone próprios em cada perfil |
| Rodapé legal robusto | Attorney Advertising, Disclaimer, Privacy, Cookies, Scam Warning, Terms of Use |
| Estética editorial | muito espaço em branco, tipografia grande, fotografia de arquitetura/abstrata, **sem animações vistosas** |

**Conclusão:** a magnitude destes sites vem da **disciplina de publicar**, não do orçamento
de design. O JPires não precisa de 2.200 advogados; precisa de 3 advogados a publicar
com regularidade e de uma arquitetura que mostre isso.

---

## 2. O que o JPires tem hoje

| Dimensão | JPires (publicado) | Padrão dos 15 |
|---|---|---|
| Arquitetura | 1 página, 8 âncoras | 25–200 páginas com URLs semânticas |
| Home | Slogan + cartões de honorários | Notícias, insights, rankings, casos |
| Equipa | 3 nomes com iniciais | Perfis com foto, bio, credenciais, contacto directo |
| Áreas | 6 títulos, sem descrição | Página por área: texto, números, casos, advogados, citações |
| Prova | Mapa com nomes de países | Rankings, prémios, valores, citações |
| Atualização | Estática desde o deploy | Várias publicações por semana |
| Captação | `mailto:` | Formulário + subscrição de insights |
| Legal | Uma linha no rodapé | 6–8 políticas formais |
| Idiomas | 8 traduções sem URLs próprias | Rotas por idioma + `hreflang` |

---

## 3. O que NÃO copiar

1. **Tabela de honorários.** Nenhum dos 15 publica preços nem "ESSENCIAL / ★ RECOMENDADO / PREMIUM".
   Isto é linguagem de SaaS. Na v2: secção "Formas de Colaboração", descritiva,
   **sem preços, sem etiqueta de recomendado, sem "sob consulta" repetido 3 vezes**.
2. **Animação de 600 frames e brilho azul-neon.** Comunica estúdio criativo, não autoridade
   jurídica. Na v2: hero editorial com tipografia forte e uma fotografia sóbria de Luanda/arquitetura.
   A animação legada fica no site antigo, intacta.
3. **"Sessão de diagnóstico gratuita — 60 minutos" como slogan.** Manter a captação, mas de forma
   discreta: um botão "Contactar" para formulário, não uma promessa de marketing no hero.
4. **Volumes falsos.** Cravath diz 800 transações/$4 triliões; Gibson Dunn diz 2.200 advogados.
   O JPires tem 3. Ser pequeno e exacto é melhor que grande e inventado.
   Nunca preencher prémios, clientes ou valores sem confirmação escrita do Dr. Pires.

> Nota de mercado: esta é a lista do topo americano. O benchmark de escala mais próximo
> de Angola é ENSafrica, Webber Wentzel, Bowmans ou Dentons África. A arquitetura é idêntica.

---

## 4. Os 5 movimentos de transformação

| # | Movimento | O que muda na prática |
|---|---|---|
| I | **De folheto a publicador** | Criar `/insights/` com 2 artigos/mês, datados e com autor. É o maior salto. |
| II | **De títulos a prova** | Cada área ganha 1 caso anonimizado: "Assessoria a investidor europeu na aquisição de participação em empresa angolana do sector X (2025)". Sem nomes, sem valores inventados. |
| III | **De nomes a perfis** | Fotos reais, formação, admissão na OAB, idiomas, área, email directo. |
| IV | **De `mailto:` a captação** | Formulário com validação + backend sem servidor (Formspree/Formsubmit) + resposta automática + privacidade. |
| V | **De one-pager a arquitetura SEO** | URLs reais, meta única por página, JSON-LD `LegalService`, sitemap, `hreflang`, chaves de tradução estáveis. |

---

## 5. Sitemap alvo (~25 páginas)

```
/                                  Home = painel institucional
/sobre/                            História, missão, valores, método
/areas/                            Índice das 6 áreas
  /areas/direito-societario/
  /areas/fusoes-aquisicoes/
  /areas/investimento-estrangeiro/
  /areas/contratos-comerciais/
  /areas/financiamento-reestruturacao/
  /areas/resolucao-conflitos/
/sectores/                         Índice dos 8 sectores
  /sectores/<slug>/                Página curta por sector (Fase 4, opcional)
/equipa/                           Directório
  /equipa/jose-pires/
  /equipa/mauro-albuquerque/
  /equipa/isaac-gil/
/insights/                         Lista com data, categoria, autor
  /insights/<slug>/
/noticias/                         Client highlights anonimizados
/reconhecimentos/                  Só se houver prémios reais
/carreiras/
/pro-bono/
/contactos/
/privacidade/
/cookies/
/aviso-legal/
/disclaimer/
```

Modelo de página de área (seguindo Cravath/M&A):
**descrição → números verificáveis → citações de terceiros → casos recentes → advogados da área → CTA discreto.**

---

## 6. Princípios visuais

- Tipografia editorial: Syne para títulos, Inter para corpo (herdadas do legado).
- Paleta institucional herdada: `#1F120B`, `#2E1B12`, `#4A2C1B`, `#D9C3B0`, `#3BB4F2` (uso pontual), `#EAF6FD`.
- Muito espaço em branco; nada de `backdrop-blur` generalizado.
- Fotografia: arquitetura, cidade, ambiente de trabalho. Sem stock photos genéricas de "advogado de terno".
- Acessibilidade WCAG 2.2 AA e Core Web Vitals verdes em telemóvel são requisitos, não extras.
