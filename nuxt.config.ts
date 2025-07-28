// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/sitemap",
  ],

  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Andrii Hlushchenko",
      htmlAttrs: {
        lang: "cs",
      },
      meta: [
        {
          name: "autor",
          content: "Andrii Hlushchenko",
        },
        {
          name: "application-name",
          content: "Andrii Hlushchenko",
        },
        {
          name: "description",
          content:
            "Pronájem aut a kol za výhodné ceny. Nabízíme také pomoc s přestěhováním, úklidem a přípravou nemovitostí k prodeji. Profesionální a spolehlivé služby v celé České republice.",
        },
        {
          name: "keywords",
          content:
            "Andrii Hlushchenko, Auta, Kola, Vyklizení, Stehování, Pronájem, Vsýhodné ceny, Česká republika",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "alternate",
          hreflang: "cs",
          href: "https://andrii.devhost.uk",
        },
      ],
    },
  },

  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
});
