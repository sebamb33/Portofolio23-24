<template>
  <section ref="root" class="tech-page">
    <header class="tech-hero">
      <p class="eyebrow reveal-pending">Stack</p>
      <h1 ref="title" class="tech-title reveal-pending">Technologies</h1>
      <p class="intro reveal-pending">
        Développeur full-stack, je prends un projet de bout en bout : de
        l'interface à l'API, de la base de données jusqu'à la mise en
        production, avec l'IA comme accélérateur au quotidien.
      </p>
    </header>

    <!-- Du code à la prod -->
    <ol class="flow">
      <li v-for="(step, i) in flow" :key="step.title" class="flow-step reveal-pending">
        <article class="pillar glass-button">
          <span class="pillar-index">0{{ i + 1 }}</span>
          <h2 class="pillar-title">{{ step.title }}</h2>
          <p class="pillar-text">{{ step.text }}</p>
          <div class="pillar-icons">
            <Icon
              v-for="icon in step.icons"
              :key="icon"
              :name="icon"
              color="black"
              class="pillar-icon"
            />
          </div>
        </article>
        <span v-if="i < flow.length - 1" class="flow-arrow" aria-hidden="true">→</span>
      </li>
    </ol>

    <!-- La stack détaillée -->
    <h2 class="section-title reveal-pending">Ma stack</h2>
    <div class="categories">
      <article
        v-for="cat in categories"
        :key="cat.title"
        class="category glass-button reveal-pending"
        :class="{ wide: cat.wide }"
      >
        <h3 class="category-title">{{ cat.title }}</h3>
        <p v-if="cat.text" class="category-text">{{ cat.text }}</p>
        <ul class="chips">
          <li v-for="tech in cat.items" :key="tech.name" class="chip">
            <Icon v-if="tech.icon" :name="tech.icon" color="black" class="chip-icon" />
            <img
              v-else-if="tech.img"
              :src="tech.img"
              alt=""
              width="18"
              height="18"
              loading="lazy"
              class="chip-icon chip-img"
            />
            <span v-else class="chip-dot" aria-hidden="true"></span>
            <span>{{ tech.name }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Technologies - Portfolio Ambona Sébastien",
  meta: [
    {
      name: "description",
      content:
        "Développeur full-stack, du front-end à la mise en production : Vue.js, Nuxt, React, Next.js, SvelteKit, NestJS, PostgreSQL, Supabase, Docker, Dokploy, Azure, Flutter, Python, et l'IA avec Claude Code, Codex et Mistral.",
    },
    {
      name: "keywords",
      content:
        "développeur full-stack, mise en production, IA, Claude Code, Codex, Mistral, agents, Vue.js, Nuxt, React, Next.js, SvelteKit, Supabase, Dokploy, NestJS, TypeScript, Docker, Azure, Cypress, Prisma, Jest, Flutter, Python, PostgreSQL, Portfolio",
    },
    { name: "author", content: "Ambona Sébastien" },
  ],
});

const flow = [
  {
    title: "Front-end",
    text: "Des interfaces claires, réactives et pensées pour les utilisateurs.",
    icons: ["simple-icons:vuedotjs", "simple-icons:nuxtdotjs", "simple-icons:react", "simple-icons:svelte"],
  },
  {
    title: "Back-end",
    text: "API, logique métier et bases de données solides.",
    icons: ["simple-icons:nestjs", "simple-icons:express", "simple-icons:python", "simple-icons:supabase"],
  },
  {
    title: "Mise en production",
    text: "Conteneurisation, cloud et déploiement des outils que je développe.",
    icons: ["simple-icons:docker", "simple-icons:microsoftazure"],
  },
];

interface Tech {
  name: string;
  /** Icône de la collection simple-icons */
  icon?: string;
  /** Logo officiel stocké dans public/icons (absent des collections d'icônes) */
  img?: string;
}

interface Category {
  title: string;
  text?: string;
  wide?: boolean;
  items: Tech[];
}

const categories: Category[] = [
  {
    title: "Front-end",
    items: [
      { name: "Vue.js", icon: "simple-icons:vuedotjs" },
      { name: "Nuxt", icon: "simple-icons:nuxtdotjs" },
      { name: "React", icon: "simple-icons:react" },
      { name: "Next.js", icon: "simple-icons:nextdotjs" },
      { name: "SvelteKit", icon: "simple-icons:svelte" },
      { name: "TypeScript", icon: "simple-icons:typescript" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "NestJS", icon: "simple-icons:nestjs" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "Python", icon: "simple-icons:python" },
    ],
  },
  {
    title: "Données",
    items: [
      { name: "PostgreSQL", icon: "simple-icons:postgresql" },
      { name: "Supabase", icon: "simple-icons:supabase" },
      { name: "Prisma", icon: "simple-icons:prisma" },
    ],
  },
  {
    title: "Mobile",
    items: [{ name: "Flutter", icon: "simple-icons:flutter" }],
  },
  {
    title: "Tests & qualité",
    items: [
      { name: "Jest", icon: "simple-icons:jest" },
      { name: "Cypress", icon: "simple-icons:cypress" },
    ],
  },
  {
    title: "Mise en production",
    items: [
      { name: "Docker", icon: "simple-icons:docker" },
      { name: "Dokploy", img: "/icons/dokploy.svg" },
      { name: "Azure", icon: "simple-icons:microsoftazure" },
    ],
  },
  {
    title: "IA & agents",
    text: "Je travaille au quotidien avec des agents IA : je crée des skills sur mesure et j'orchestre des agents (Claude Code, Codex, Mistral, Hermes Agent) pour aller plus vite, sans sacrifier la qualité.",
    wide: true,
    items: [
      { name: "Claude Code", icon: "simple-icons:claudecode" },
      { name: "Codex", icon: "simple-icons:openai" },
      { name: "Mistral", icon: "simple-icons:mistralai" },
      { name: "Hermes Agent", img: "/icons/hermes-agent.png" },
      { name: "Skills", icon: "simple-icons:claude" },
      { name: "Agents & sous-agents", icon: "simple-icons:anthropic" },
    ],
  },
];

const root = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);

useGsap(root, ({ gsap, revealTitle, revealStagger }) => {
  const el = root.value!;
  revealTitle(title.value, { scrollTrigger: false });
  gsap.fromTo(
    el.querySelectorAll(".eyebrow, .intro"),
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.2 },
  );
  revealStagger(el.querySelectorAll(".flow-step"), { stagger: 0.15, y: 40, rotateX: 0 });
  revealStagger(el.querySelectorAll(".section-title"), { y: 20, rotateX: 0 });
  revealStagger(el.querySelectorAll(".category"), { stagger: 0.08, y: 40, rotateX: 0 });
});
</script>

<style scoped>
.reveal-pending {
  opacity: 0;
}

.tech-page {
  max-width: 1100px;
  width: 100%;
  box-sizing: border-box;
  margin: 3rem auto 0;
  padding: 0 1.5rem 6rem;
}

/* ---------- En-tête ---------- */
.tech-hero {
  text-align: center;
  margin-bottom: 3rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8a8d93;
}

.tech-title {
  font-size: 3rem;
  margin: 0 0 1rem;
  color: #2f2f2f;
}

.intro {
  max-width: 52ch;
  margin: 0 auto;
  line-height: 1.7;
  color: #5a5d63;
}

/* ---------- Front → Back → Prod ---------- */
.flow {
  list-style: none;
  padding: 0;
  margin: 0 0 4.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.flow-step {
  position: relative;
  display: flex;
}

.pillar {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  border-radius: 24px;
  overflow: hidden;
}

.pillar-index {
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: #a0a3a9;
  margin-bottom: 0.75rem;
}

.pillar-title {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  color: #2f2f2f;
}

.pillar-text {
  margin: 0 0 1.5rem;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #5a5d63;
  flex: 1;
}

.pillar-icons {
  display: flex;
  gap: 0.9rem;
}

.pillar-icon {
  width: 1.6rem;
  height: 1.6rem;
  opacity: 0.85;
}

.flow-arrow {
  position: absolute;
  right: -1.85rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.4rem;
  color: #a0a3a9;
}

/* ---------- Catégories ---------- */
.section-title {
  font-size: 1.6rem;
  margin: 0 0 1.5rem;
  color: #2f2f2f;
}

.categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.category {
  position: relative;
  padding: 1.5rem;
  border-radius: 24px;
  overflow: hidden;
}

.category.wide {
  grid-column: 1 / -1;
}

.category-text {
  margin: -0.25rem 0 1rem;
  max-width: 70ch;
  font-size: 0.92rem;
  line-height: 1.6;
  color: #5a5d63;
}

.chip-img {
  object-fit: contain;
}

.chip-dot {
  width: 0.55rem;
  height: 0.55rem;
  margin: 0 0.3rem;
  border-radius: 50%;
  background: #3a3a3a;
}

.category-title {
  margin: 0 0 1rem;
  font-size: 0.85rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #6a6d73;
}

.chips {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.85rem;
  border-radius: 14px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-color);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
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
}

.chip:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.chip-icon {
  width: 1.15rem;
  height: 1.15rem;
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .flow {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
  .flow-arrow {
    right: auto;
    left: 50%;
    top: auto;
    bottom: -1.95rem;
    transform: translateX(-50%) rotate(90deg);
  }
  .categories {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .tech-page {
    margin-top: 1.5rem;
    padding: 0 0.75rem 4rem;
  }
  .tech-title {
    font-size: 2.2rem;
  }
  .categories {
    grid-template-columns: 1fr;
  }
}
</style>
