import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string().default('Admin'),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};
