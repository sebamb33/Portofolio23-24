<template>
  <section class="project">
    <h1 class="projectTitle">Projets</h1>
  </section>
</template>

<script lang="ts">
export default {
  setup() {
    useHead({
      title: "Projets - Portfolio Ambona Sébastien",
      meta: [
        {
          name: "description",
          content: "Découvrez les projets réalisés par Ambona Sébastien, développeur full stack. Applications web, projets personnels et réalisations professionnelles.",
        },
        {
          name: "keywords",
          content: "projets, réalisations, applications web, portfolio, développeur, VueJs, React, Symfony",
        },
        {
          property: "og:title",
          content: "Projets - Portfolio Ambona Sébastien",
        },
        {
          property: "og:description",
          content: "Portfolio de projets web réalisés par Ambona Sébastien.",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    });
  },
};
</script>

<style scoped>
.project {
  padding: 5rem;
  text-align: center;
  margin: auto;
}

.projectTitle {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}
</style>