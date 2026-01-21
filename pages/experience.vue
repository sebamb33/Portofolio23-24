<template>
  <section class="experience">
    <h1 class="experienceTitle">Expériences</h1>
    <div class="experienceContainer">
      <article
        class="experience-card"
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
      const items = document.querySelectorAll(".experience-card");
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
.experience-card {
  padding: 1.5rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: fadeIn 0.6s ease forwards;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(40px) contrast(120%) brightness(108%);
  -webkit-backdrop-filter: blur(40px) contrast(120%) brightness(108%);
  
  border: 1px solid rgba(255, 255, 255, 0.25);
  
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2),
    inset 0 2px 6px rgba(255, 255, 255, 0.35),
    inset 0 -2px 6px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 0 40px rgba(255, 255, 255, 0.06);
}

.experience-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 100%
  );
  border-radius: 24px 24px 0 0;
  pointer-events: none;
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
  color: #3a3a3a;
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

.technologie::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 100%
  );
  border-radius: 12px 12px 0 0;
  pointer-events: none;
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
