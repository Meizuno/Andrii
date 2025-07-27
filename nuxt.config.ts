// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/image", "@nuxt/ui"],

  css: ["~/assets/css/main.css"],
  app: {
    head: {
      meta: [
        {
          name: "description",
          content:
            "Pronájem aut a kol za výhodné ceny. Nabízíme také pomoc s přestěhováním, úklidem a přípravou nemovitostí k prodeji. Profesionální a spolehlivé služby v celé České republice.",
        },
        { name: "keywords", content: "Auta, Kola, Vyklizení, Stehování" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
});
