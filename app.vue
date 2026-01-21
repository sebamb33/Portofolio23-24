<template>
  <div class="principal">
    <CustomCursor />
    <NuxtLayout>
      <nuxt-page />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "App",

  setup() {
    useHead({
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "x-robots-tag",
          content: "index, follow, max-image-preview:large, notranslate",
        },
        {
          name: "description",
          content:
            "Ambona Sébastien, développeur full stack de 24 ans, je fournis des solutions web de qualité, alliant innovation et performance pour répondre aux besoins.",
        },
        {
          name: "keywords",
          content:
            "développeur full stack, portofolio, Ambona Sébastien, développement web,Bordeaux, technologie,Ambona,Sebastien,Sébastien",
        },
        {
          name: "publisher",
          content: "Ambona Sébastien",
        },
      ],
      title: "Portofolio de Ambona Sébastien Développeur web Full Stack",
    });

    return {
      currentComponent: "Techno",
    };
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
body {
  cursor: none;
  font-family: "Fira Code", monospace;
  height: 70%;
  padding: 0;
  background: linear-gradient(145deg, #f8f9fa 0%, #f5f6fa 50%, #f7f8f9 100%);
  min-height: 100vh;
}
.principal {
  margin: auto;
  max-width: 2000px;
  padding: 0 20px;
}

@media (max-width: 1200px) {
  .principal {
    padding: 0 15px;
  }
}

@media (max-width: 768px) {
  .principal {
    padding: 0 10px;
  }
}

@media (max-width: 480px) {
  .principal {
    padding: 0 5px;
  }
}

.navbar {
  position: absolute;
  top: 40%;
  left: 0;
}

*,
button,
a,
input,
textarea {
  cursor: none !important;
}
.application {
  max-width: 2000px;
}
.technology {
  max-width: 1900px;
}
</style>
