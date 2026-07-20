<template>
  <section class="experience">
    <h1 class="experienceTitle">Expériences</h1>
    <div class="experienceContainer">
      <article
        class="experience-card glass-button"
        v-for="(exp, index) in experiences"
        :key="index"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100, type: 'spring' } }"
      >
        <h2 class="date">{{ exp.date }}</h2>
        <p class="experienceText">{{ exp.description }}</p>
        <div class="experienceTech">
          <div v-for="tech in exp.technologies" :key="tech" class="technologie">
            {{ tech }}
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    useHead({
      title: "Expériences - Portfolio Ambona Sébastien",
      meta: [
        {
          name: "description",
          content: "Découvrez les expériences professionnelles d'Ambona Sébastien, développeur full stack. Poste actuel à l'IRTS (Azure, Flutter, Python, PostgreSQL), alternances chez AgenceGW et IDCSOFT, expertise Symfony, Vue.js, Nuxt, Next.js, NestJS.",
        },
        {
          name: "keywords",
          content: "expériences, IRTS, Azure, Flutter, Python, PostgreSQL, alternance, AgenceGW, IDCSOFT, Symfony, VueJs, Nuxt, Next, Nest, développeur, portfolio",
        },
        {
          property: "og:title",
          content: "Expériences - Portfolio Ambona Sébastien",
        },
        {
          property: "og:description",
          content: "Parcours professionnel d'Ambona Sébastien, développeur full stack basé à Bordeaux.",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    });

    const experiences = ref([
      {
        date: "Sept 2025 - Présent",
        description:
          "Depuis septembre 2025, j'occupe un poste de développeur au sein de l'IRTS, où je participe à la mise en œuvre de solutions permettant d'accompagner au mieux les équipes pédagogiques et de faire le lien entre l'établissement et ses prestataires. Je conçois des interfaces numériques pensées pour accompagner les usagers et s'adapter à leurs nouveaux besoins, et j'assure la mise en production des outils que je développe.",
        technologies: ["Azure", "Flutter", "Python", "PostgreSQL"],
      },
      {
        date: "Sept 2022 - Dec 2024",
        description:
          "Lors de mon alternance chez AgenceGW, j’ai évolué dans un environnement centré sur des technologies modernes, principalement Symfony et Vue.js, pour la maintenance et le développement d’applications web. En parallèle, j’ai enrichi mes compétences en autodidacte et durant mes études avec des frameworks avancés comme Nuxt.js, Next.js et NestJS, élargissant mon champ d’expertise en développement full-stack.",
        technologies: [
          "Symfony",
          "VueJs",
          "Nuxt",
          "Next",
          "Nest",
          "Jest",
          "Kirby",
          "Docker",
        ],
      },
      {
        date: "Sept 2021 - Sept 2022",
        description:
          "Durant mon alternance chez IDCSOFT, j’ai travaillé sur la maintenance applicative d’une solution pour les gens du voyage, développée avec WinDev. Cette mission m’a permis de m’adapter à un environnement client diversifié avec des besoins spécifiques et variés.",
        technologies: ["Windev", "Laravel", "React", "Vue", "Docker"],
      },
    ]);

    return {
      experiences,
    };
  },
});
</script>

<style scoped>
/* General Styles */
.experience {
  padding: 0.5rem;
  padding-bottom: 5rem;
  max-width: 1200px;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.experienceTitle {
  font-size: 2.5rem;
  margin-bottom: 5rem;
  text-align: center;
  color: #333;
}

.experienceContainer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding-bottom: 50px;
}

/* Experience Item */
.experience-card {
  padding: 1.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
}

.experience-card:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.12),
    0 10px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(255, 255, 255, 0.25),
    inset 0 2px 8px rgba(255, 255, 255, 0.4),
    inset 0 -2px 8px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 0 60px rgba(255, 255, 255, 0.08);
}

.date {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #3a3a3a;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
}

.experienceText {
  font-size: 1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 1rem;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
}

.experienceTech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.technologie {
  border-radius: 12px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: var(--text-color);
  transition: all 0.3s ease;
  cursor: none;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.technologie:hover {
  transform: translateY(-2px) scale(1.05);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.28) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.28) 100%
  );
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
}

/* Responsive Design */
@media (max-width: 768px) {
  .experienceTitle {
    font-size: 2rem;
  }

  .experience-card {
    padding: 1rem;
    width: 75%;
    margin: auto;
    gap: 4rem;
  }

  .date {
    font-size: 1rem;
  }

  .experienceText {
    font-size: 0.9rem;
  }

  .technologie {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>
