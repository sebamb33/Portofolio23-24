// nuxt.config.ts
import { config } from "dotenv";

config();

export default defineNuxtConfig({
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    public: {
      port: 3777,
    },
  },

  devtools: { enabled: true },
  modules: ["nuxt-icon", "@vueuse/motion/nuxt"],
  compatibilityDate: "2025-04-02",

  nitro: {
    routeRules: {
      "/assets/**": {
        headers: {
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
          media: "print",
          onload: "this.media='all'",
        },
      ],
    },
    css: ["~/assets/css/main.css"],
  },
});
