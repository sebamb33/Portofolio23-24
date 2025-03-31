export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon"],

  // Utilisation des variables d'environnement pour configurer le port
  runtimeConfig: {
    public: {
      port: 3001, // Port par défaut : 3000
    },
  },
});
