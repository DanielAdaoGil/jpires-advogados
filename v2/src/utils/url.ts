/**
 * Caminhos internos com o prefixo do site (`base` do Astro).
 *
 * O GitHub Pages serve este projecto em /jpires-advogados/ e a Angoweb
 * servirá em /. Em vez de espalhar esse prefixo por todos os componentes,
 * todas as URLs internas passam por aqui.
 *
 * Exemplos:
 *   withBase('/')            -> '/jpires-advogados/'
 *   withBase('/contactos/')  -> '/jpires-advogados/contactos/'
 *   Com V2_BASE=/            -> '/' e '/contactos/'
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\/+/, '')}`;
}
