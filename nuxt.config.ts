// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon'],
  
  // Configuration du serveur pour changer le port
  server: {
    port: 3001 // Définit le port à 3001
  }
})
