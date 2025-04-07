<template>
  <section class="technologySection">
    <h1 class="technologyTitle">Technologies</h1>
    <div class="technology">
      <div
        class="oneTechno"
        v-for="(tech, index) in technologies"
        :key="index"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <div class="technoData">
          <div class="technologyHeader">
            <div class="technologyLogo">
              <Icon :name="tech.icon" color="black" class="technologyIcon" />
            </div>
            <div class="technologyName">{{ tech.name }}</div>
          </div>
          <div class="skill">Niveaux :</div>
          <div class="skillLevel">
            <Skillbar :skillNumber="tech.skillLevel" />
          </div>
          <p class="technologyDetails">{{ tech.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Skillbar from "~/components/Skillbar.vue";

export default {
  components: { Skillbar },
  data() {
    return {
      technologies: [
        {
          name: "VueJs",
          icon: "uil:vuejs",
          skillLevel: 4,
          details:
            "Utilisé chez AgenceGW et personnellement pour des applications. VueJs m'a permis de renforcer mes compétences en développement front-end.",
        },
        {
          name: "React",
          icon: "uil:react",
          skillLevel: 3,
          details:
            "Utilisé dans de nombreux projets durant mes études et dans quelques projet personnelle.",
        },
        {
          name: "Express",
          icon: "devicon:express",
          skillLevel: 3,
          details:
            "Utilisé en autodidacte pour comprendre le développement backend en Node.js, renforçant ma maîtrise des API.",
        },
        {
          name: "Prisma",
          icon: "tabler:brand-prisma",
          skillLevel: 3,
          details:
            "Appris en autodidacte pour simplifier l'interaction avec les bases de données en TS.",
        },
        {
          name: "Jest",
          icon: "simple-icons:jest",
          skillLevel: 3,
          details:
            "Utilisé durant mes études pour les tests unitaires, Jest m’a permis d’améliorer la qualité et la fiabilité de mes applications.",
        },
        {
          name: "Symfony",
          icon: "logos:symfony",
          skillLevel: 3,
          details:
            "Principalement utilisé chez AgenceGW pour le backend, Symfony m'a permis de renforcer mes compétences en architecture MVC.",
        },
        {
          name: "Cypress",
          icon: "logos:cypress",
          skillLevel: 4,
          details:
            "Utilisé en entreprise pour les tests end-to-end, Cypress m’a permis d'automatiser et de fiabiliser le processus de test.",
        },
        {
          name: "Docker",
          icon: "la:docker",
          skillLevel: 4,
          details:
            "Utilisé pour la virtualisation des environnements, Docker m'a permis d'assurer la portabilité et la cohérence des applications.",
        },
        {
          name: "Kirby",
          icon: "logos:kirby-icon",
          skillLevel: 4,
          details:
            "Utilisé chez AgenceGW pour des sites éco-conçus, Kirby m’a permis de créer des solutions légères et optimisées.",
        },
        {
          name: "Hono",
          icon: "simple-icons:hono",
          skillLevel: 3,
          details:
            "Technologie moderne et performante pour le backend. Utilisé en autodidacte pour créer des solutions légères et optimisées.",
        },
        {
          name: "Drizzle",
          icon: "lineicons:drizzle",
          skillLevel: 2,
          details:
            "ORM avec une approche différente de celle de Prisma, permettant une gestion plus fine des requêtes et des relations. Drizzle est conçu pour être rapide et léger, avec une syntaxe sql.",
        },
      ],
    };
  },
  head() {
    return {
      title: "Technologies - Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Découvrez les technologies que j'ai utilisées et maîtrisées, comme VueJs, React, Docker, et bien d'autres.",
        },
        {
          name: "keywords",
          content:
            "VueJs, React, Docker, Cypress, Prisma, Symfony, Jest, Hono, Drizzle, Portfolio",
        },
        { name: "author", content: "Seb" },
      ],
    };
  },
};
</script>

<style scoped>
/* General Styles */
.technologySection {
  padding: 5rem;
  text-align: center;
  margin: auto;
}

.technologyTitle {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.technology {
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* Space between cards */
  overflow-y: initial;
  overflow-x: hidden; /* Prevent horizontal overflow */
  scrollbar-width: none; /* Firefox */
}

.technology::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Card Styles */
.oneTechno {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding: 1.5rem;
  border-radius: 15px;
  background: white;
  box-shadow: 6px 6px 12px #e0e0e0, -6px -6px 12px #ffffff; /* Adjusted shadow */
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(50px);
  visibility: hidden; /* Ensure the card is hidden initially */
}

.technologyHeader {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.technologyLogo {
  flex-shrink: 0;
}

.technologyName {
  font-size: 1.5rem;
  margin-left: 1rem;
  color: #333;
}

.skill {
  margin: 1rem 0;
  font-weight: bold;
}

.technologyDetails {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
}

/* Icon Styles */
.technologyIcon {
  width: 3rem;
  height: 3rem;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
    visibility: hidden; /* Ensure the card remains hidden */
  }
  to {
    opacity: 1;
    transform: translateY(0);
    visibility: visible; /* Make the card visible at the end */
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .technologyTitle {
    font-size: 2rem;
  }

  .oneTechno {
    max-width: 100%;
  }
}
</style>
