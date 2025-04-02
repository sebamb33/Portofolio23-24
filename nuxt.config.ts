// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      port: 3001,
      VITE_RESEND_API_KEY: process.env.VITE_RESEND_API_KEY,
      VITE_MAIL_RECIPIENT: process.env.VITE_MAIL_RECIPIENT,
    },
  },

  devtools: { enabled: true },
  modules: ["nuxt-icon"],
  compatibilityDate: "2025-04-02",
});
