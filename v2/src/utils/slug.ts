/**
 * No Astro 5, `entry.id` das content collections inclui a extensão `.md`.
 * As rotas públicas não a incluem — normalizar aqui evita links 404.
 */
export const toSlug = (id: string): string => id.replace(/\.md$/, '');
