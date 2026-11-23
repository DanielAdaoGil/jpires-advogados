import { defineConfig } from 'astro/config';

// Endereço onde o site vai "viver".
// GitHub Pages (project site): /jpires-advogados/  <-- teste actual
// Angoweb (domínio próprio):   /                  <-- fase final
// Para gerar a versão da Angoweb: V2_BASE=/ npm run build
const base = process.env.V2_BASE || '/jpires-advogados/';

export default defineConfig({
  output: 'static',
  base,
  server: { host: true },
});
