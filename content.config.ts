import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    index: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: 'index.md',
      }),
    ),
    cars: defineCollection({
      type: 'data',
      source: 'cars/**.json',
      schema: z.object({
        sources: z.array(z.string()).min(1),
        title: z.string(),
        description: z.string(),
      })
    }),
    carsInfo: defineCollection({
      type: 'page',
      source: 'cars/**.md',
    }),
    bicycles: defineCollection({
      type: 'data',
      source: 'bicycles/**.json',
      schema: z.object({
        sources: z.array(z.string()).min(1),
        title: z.string(),
        description: z.string(),
      })
    }),
    bicyclesInfo: defineCollection({
      type: 'page',
      source: 'bicycles/**.md',
    })
  },
})
