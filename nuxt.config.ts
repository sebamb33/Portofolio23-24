// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  fontawesome: {
    icons: {
      // Vous pouvez ajouter les icônes que vous souhaitez utiliser ici.
      solid: ['faCoffee', 'faStar'], // Exemple : icônes solides
      regular: ['faAddressCard'], // Exemple : icônes régulières
      brands: ['faFontAwesome'] // Exemple : icônes de marques
    }
  }
})
