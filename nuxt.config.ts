// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    HCAPTCHA_SECRET: process.env.HCAPTCHA_SECRET,
    public: {
      port: 3777,
      hcaptchaSiteKey: process.env.VITE_HCAPTCHA_SITE_KEY,
    },
  },

  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@vueuse/motion/nuxt"],

  // Icônes embarquées dans le bundle (aucun appel à l'API Iconify au chargement)
  icon: {
    mode: "svg",
    serverBundle: { collections: ["simple-icons"] },
    clientBundle: { scan: true },
  },
  compatibilityDate: "2025-04-02",
  css: ["~/assets/css/main.css"],

  nitro: {
    // fichiers JS/CSS pré-compressés (gzip + brotli) au build
    compressPublicAssets: true,
    routeRules: {
      "/assets/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;800&display=swap",
        },
      ],
    },
  },
});
