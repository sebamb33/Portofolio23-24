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
.oneTechno {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  padding: 1.5rem;
  border-radius: 15px;
  background: white;
  box-shadow: 6px 6px 12px #e0e0e0, -6px -6px 12px #ffffff;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(50px);
  visibility: hidden;
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
  .skill {
    text-align: left;
  }
  .technologySection {
    padding: 1rem;
  }
  .technology {
    padding: 60px;
    gap: 4rem;
  }

  .oneTechno {
    max-width: 100%;
  }
}
</style>
