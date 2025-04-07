<template>
  <section class="experience">
    <h1 class="experienceTitle">Expériences</h1>
    <div class="experienceContainer">
      <article
        class="experienceItem"
        v-for="(exp, index) in experiences"
        :key="index"
        :style="{ animationDelay: `${index * 0.3}s` }"
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
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  setup() {
    const experiences = ref([
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

    onMounted(() => {
      const items = document.querySelectorAll(".experienceItem");
      items.forEach((item) => {
        const element = item as HTMLElement; // Cast explicit
        element.style.opacity = "0";
        element.style.transform = "translateY(50px)";
        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, 300);
      });
    });

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
}

/* Experience Item */
.experienceItem {
  background: white;
  box-shadow: 12px 12px 24px #f3f0f0, -12px -12px 24px #f2f2f2;
  border-radius: 15px;
  padding: 1.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: fadeIn 0.6s ease forwards;
}

.date {
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555;
}

.experienceText {
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1rem;
}

.experienceTech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.technologie {
  background: #f9f8f8;
  border: 1px solid #f7f5f5;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #333;
  box-shadow: 6px 6px 12px #efefef, -6px -6px 12px #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.technologie:hover {
  transform: translateY(-3px);
  box-shadow: 8px 8px 16px #e0e0e0, -8px -8px 16px #ffffff;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .experienceTitle {
    font-size: 2rem;
  }

  .experienceItem {
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
