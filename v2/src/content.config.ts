import { defineCollection, z } from 'astro:content';

const areas = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    titulo: z.string(),
    resumo: z.string(),
    ordem: z.number(),
    icon: z.string(),
    advogados: z.array(z.string()),
    casos: z.array(z.string()).optional().default([]),
    citacoes: z.array(z.string()).optional().default([]),
  }),
});

const sectores = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    titulo: z.string(),
    resumo: z.string(),
    ordem: z.number(),
  }),
});

const equipa = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    nome: z.string(),
    cargo: z.string(),
    iniciais: z.string(),
    foto: z.string(),
    email: z.string(),
    telefone: z.string(),
    linkedin: z.string().optional(),
    formacao: z.array(z.string()).optional().default([]),
    oab: z.string().optional(),
    idiomas: z.array(z.string()).optional().default([]),
    areas: z.array(z.string()).optional().default([]),
    ordem: z.number(),
    bio: z.string().optional().default(''),
  }),
});

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    categoria: z.string(),
    autor: z.string(),
    resumo: z.string(),
    slug: z.string().optional(),
  }),
});

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    data: z.coerce.date(),
    area: z.string(),
    resumo: z.string(),
  }),
});

export const collections = { areas, sectores, equipa, insights, noticias };
