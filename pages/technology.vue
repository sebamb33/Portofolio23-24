<template>
  <section class="technologySection">
    <h1 class="technologyTitle">Technologies</h1>
    <div class="technology">
      <div
        class="tech-card"
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
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      technologies: [
        {
          name: "VueJs",
          icon: "uil:vuejs",
        },
        {
          name: "React",
          icon: "uil:react",
        },
        {
          name: "Express",
          icon: "devicon:express",
        },
        {
          name: "Prisma",
          icon: "tabler:brand-prisma",
        },
        {
          name: "Jest",
          icon: "simple-icons:jest",
        },
        {
          name: "Symfony",
          icon: "logos:symfony",
        },
        {
          name: "Cypress",
          icon: "logos:cypress",
        },
        {
          name: "Docker",
          icon: "la:docker",
        },
        {
          name: "Kirby",
          icon: "logos:kirby-icon",
        },
        {
          name: "Hono",
          icon: "simple-icons:hono",
        },
        {
          name: "Drizzle",
          icon: "lineicons:drizzle",
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
  gap: 2rem;
  overflow-y: initial;
  overflow-x: hidden; /* Prevent horizontal overflow */
  scrollbar-width: none; /* Firefox */
}

.technology::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

/* Card Styles */
.tech-card {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding: 1.5rem;
  border-radius: 24px;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(50px);
  visibility: hidden;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

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

.tech-card::before {
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

.tech-card:hover {
  transform: translateY(-2px) scale(1.02);
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
  color: #3a3a3a;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
  font-weight: 500;
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
    visibility: visible;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .technologyTitle {
    font-size: 2rem;
  }
  .technologySection {
    padding: 1rem;
  }
  .technology {
    padding: 60px;
    gap: 4rem;
  }

  .tech-card {
    max-width: 100%;
  }
}
</style>
