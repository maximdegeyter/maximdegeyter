import { z, defineCollection } from 'astro:content';

const experience = defineCollection({
  schema: z.object({
    year: z.number(),
    title: z.string(),
    detail: z.string(),
  }),
});

export const collections = { experience };