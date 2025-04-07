// nuxt.config.ts
import { config } from "dotenv";

config();

export default defineNuxtConfig({
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    public: {
      port: 3001,
      VITE_RESEND_API_KEY: process.env.VITE_RESEND_API_KEY,
      VITE_MAIL_RECIPIENT: process.env.VITE_MAIL_RECIPIENT,
    },
  },

  devtools: { enabled: true },
  modules: ["nuxt-icon"],
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
  },
});
