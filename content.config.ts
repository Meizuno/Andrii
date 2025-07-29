import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSitemapCollection({
        type: "page",
        source: "**/**.md",
      })
    ),
    cars: defineCollection({
      type: "data",
      source: "cars/**.json",
      schema: z.object({
        title: z.string(),
        sources: z.array(z.string()).min(1),
      }),
    }),
    carsInfo: defineCollection({
      type: "page",
      source: "cars/**.md",
    }),
    bicycles: defineCollection({
      type: "data",
      source: "bicycles/**.json",
      schema: z.object({
        title: z.string(),
        sources: z.array(z.string()).min(1),
      }),
    }),
    bicyclesInfo: defineCollection({
      type: "page",
      source: "bicycles/**.md",
    }),
  },
});
