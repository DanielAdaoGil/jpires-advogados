# Como colocar a v2 no ar — guia simples

## A ideia em uma frase

A pasta `v2/` é o **estúdio** (código). O que vai para o ar é o `v2/dist/`
(o site já montado). Nós não apagamos nem movemos os ficheiros antigos.

## 1. Fase de teste — GitHub Pages

Endereço do teste: **https://danieladaogil.github.io/jpires-advogados/**

Ao publicar, este endereço passa a mostrar a v2. Os ficheiros do site antigo
(`index.html`, `style.css`, `script.js`, `i18n.js`, `frames/`, ...) continuam
no repositório, intactos. Se for preciso voltar atrás, é só mudar uma opção
nas definições do GitHub (ver §4).

### Passo A — mudar a origem da publicação (1 minuto, no site do GitHub)

1. Abre https://github.com/DanielAdaoGil/jpires-advogados
2. Clica em **Settings** (Definições)
3. No menu da esquerda, clica em **Pages**
4. Em **Build and deployment** → **Source**, escolhe **GitHub Actions**
5. Guarda (nem todos os ecrãs pedem para guardar; a escolha fica gravada)

### Passo B — enviar as alterações para o GitHub

Está preparado um ficheiro automático em `.github/workflows/publicar-v2.yml`.
Depois de eu receber a tua autorização, faço commit e push. O GitHub apanha o
push, gera o site e publica-o sozinho.

Se preferires fazer tu, os comandos são:

```
git add .
git commit -m "Fase 06: publicar v2 no GitHub Pages"
git push
```

Para ver o andamento: GitHub → separador **Actions** → clicar na execução
mais recente «Publicar v2 no GitHub Pages».

### Passo C — conferir

Abre https://danieladaogil.github.io/jpires-advogados/ e confirma:
- as 7 fotos do hero aparecem;
- os botões «Áreas de Especialidade» e «Fale Conosco» abrem as páginas certas;
- o rodapé e os 8 idiomas funcionam;
- em telemóvel (390 px) não há deslocação horizontal.

**Nota:** a primeira publicação pode demorar 1–2 minutos a aparecer. Se
aparecer uma página antiga, espera um pouco e actualiza com Ctrl+F5.

## 2. Testar no computador antes de publicar

```
cd v2
npm run build
npm run preview
```

Com a nova configuração, o endereço local é:
**http://localhost:4321/jpires-advogados/**

## 3. Fase final — Angoweb

Ainda não publicámos aqui. Quando chegar a altura, preciso que me digas:

1. **Como envias ficheiros** para a Angoweb? (FTP, cPanel, gerenciador de ficheiros...)
2. **Qual é o domínio final?** (ex.: `jpiresadvogados.com`, `www.jpiresadvogados.com`)
3. **Qual é a pasta pública?** (ex.: `public_html`, `www`, `htdocs`)

Com esses dados, gero a versão para a raiz do domínio:

```
cd v2
$env:V2_BASE = "/"
npm run build
```

e envio só o conteúdo de `v2/dist` — nunca a pasta `v2/` inteira.

## 4. Se quiseres voltar atrás no GitHub Pages

GitHub → **Settings** → **Pages** → **Source** → escolher outra vez
**Deploy from a branch** e a branch que estava antes. O site antigo volta a
aparecer, porque os ficheiros dele nunca foram apagados.

## 5. Formulário de contacto

O envio real continua **desligado** até escolheres uma destas opções:
- `mailto:` (abre o programa de email — o mais simples);
- Formspree (serviço externo, precisa de conta);
- Netlify Forms (só se o site estiver na Netlify).
