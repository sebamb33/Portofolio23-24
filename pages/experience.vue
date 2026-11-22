<template>
  <section ref="root" class="experience">
    <header class="experience-hero">
      <div class="hero-text">
        <p class="eyebrow reveal-pending">Parcours</p>
        <h1 ref="title" class="experienceTitle reveal-pending">Expériences</h1>
        <p class="intro reveal-pending">
          Du développement d'applications métiers à la mise en production,
          voici les étapes qui m'ont construit en tant que développeur.
        </p>
        <ul class="stats reveal-pending">
          <li class="stat glass-button">
            <strong>{{ yearsOfExperience }}+</strong>
            <span>ans d'expérience</span>
          </li>
          <li class="stat glass-button">
            <strong>{{ experiences.length }}</strong>
            <span>entreprises</span>
          </li>
        </ul>
      </div>
      <CoderStage class="hero-coder" />
    </header>

    <div class="timeline-wrap">
    <span class="timeline-line" aria-hidden="true"></span>
    <ol class="timeline">
      <li
        v-for="exp in experiences"
        :key="exp.company"
        class="timeline-item reveal-pending"
      >
        <span class="timeline-dot" :class="{ current: !exp.end }" aria-hidden="true"></span>
        <article class="experience-card glass-button">
          <div class="card-head">
            <div>
              <h2 class="role">{{ exp.role }}</h2>
              <p class="company">
                {{ exp.company }} <span aria-hidden="true">·</span> {{ exp.type }}
              </p>
            </div>
            <div class="period">
              <span class="date">{{ formatPeriod(exp) }}</span>
              <span class="duration">{{ formatDuration(exp) }}</span>
            </div>
          </div>

          <ul class="highlights">
            <li v-for="point in exp.highlights" :key="point">{{ point }}</li>
          </ul>

          <div class="experienceTech">
            <span v-for="tech in exp.technologies" :key="tech" class="technologie">
              {{ tech }}
            </span>
          </div>
        </article>
      </li>
    </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: "Expériences - Portfolio Ambona Sébastien",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les expériences professionnelles d'Ambona Sébastien, développeur full stack. Poste actuel à l'IRTS (Azure, Flutter, Python, PostgreSQL), alternances chez AgenceGW et IDCSOFT, expertise Symfony, Vue.js, Nuxt, Next.js, NestJS.",
    },
    {
      name: "keywords",
      content:
        "expériences, IRTS, Azure, Flutter, Python, PostgreSQL, alternance, AgenceGW, IDCSOFT, Symfony, Vue.js, Nuxt, Next.js, NestJS, développeur, portfolio",
    },
    { property: "og:title", content: "Expériences - Portfolio Ambona Sébastien" },
    {
      property: "og:description",
      content: "Parcours professionnel d'Ambona Sébastien, développeur full stack basé à Bordeaux.",
    },
    { property: "og:type", content: "website" },
  ],
});

interface Experience {
  role: string;
  company: string;
  type: string;
  /** Format AAAA-MM */
  start: string;
  /** Absent = poste actuel */
  end?: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    role: "Développeur",
    company: "IRTS",
    type: "Poste actuel",
    start: "2025-09",
    highlights: [
      "Mise en œuvre de solutions pour accompagner au mieux les équipes pédagogiques.",
      "Lien entre l'établissement et ses prestataires.",
      "Conception d'interfaces numériques pensées pour les usagers et leurs nouveaux besoins.",
      "Mise en production des outils que je développe.",
    ],
    technologies: ["Azure", "Flutter", "Python", "PostgreSQL"],
  },
  {
    role: "Développeur web",
    company: "AgenceGW",
    type: "Alternance",
    start: "2022-09",
    end: "2024-12",
    highlights: [
      "Maintenance et développement d'applications web, principalement en Symfony et Vue.js.",
      "Montée en compétences sur Nuxt.js, Next.js et NestJS, en autodidacte et durant mes études.",
    ],
    technologies: ["Symfony", "Vue.js", "Nuxt", "Next.js", "NestJS", "Jest", "Kirby", "Docker"],
  },
  {
    role: "Développeur",
    company: "IDCSOFT",
    type: "Alternance",
    start: "2021-09",
    end: "2022-09",
    highlights: [
      "Maintenance applicative d'une solution pour les gens du voyage, développée avec WinDev.",
      "Adaptation à un environnement client diversifié, aux besoins spécifiques et variés.",
    ],
    technologies: ["WinDev", "Laravel", "React", "Vue.js", "Docker"],
  },
];

const MONTHS = ["Janv.", "Févr.", "Mars", "Avr.", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."];

const parse = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return { y: y!, m: m! };
};
const label = (ym: string) => {
  const { y, m } = parse(ym);
  return `${MONTHS[m - 1]} ${y}`;
};
const nowYm = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
};
const monthsBetween = (a: string, b: string) => {
  const s = parse(a);
  const e = parse(b);
  return (e.y - s.y) * 12 + (e.m - s.m);
};

const formatPeriod = (exp: Experience) =>
  `${label(exp.start)} – ${exp.end ? label(exp.end) : "Aujourd'hui"}`;

const formatDuration = (exp: Experience) => {
  const total = Math.max(1, monthsBetween(exp.start, exp.end ?? nowYm()));
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} an${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mois`);
  return parts.join(" ");
};

const yearsOfExperience = computed(() =>
  Math.floor(monthsBetween(experiences.at(-1)!.start, nowYm()) / 12),
);

const root = ref<HTMLElement | null>(null);
const title = ref<HTMLElement | null>(null);

useGsap(root, ({ gsap, revealTitle, revealStagger }) => {
  const el = root.value!;
  revealTitle(title.value, { scrollTrigger: false });
  gsap.fromTo(
    el.querySelectorAll(".eyebrow, .intro, .stats"),
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1, delay: 0.2 },
  );
  revealStagger(el.querySelectorAll(".timeline-item"), { stagger: 0.12, y: 50, rotateX: 0 });

  // La ligne de timeline se dessine au fil du scroll
  gsap.fromTo(
    el.querySelector(".timeline-line"),
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: "none",
      transformOrigin: "top center",
      scrollTrigger: {
        trigger: el.querySelector(".timeline-wrap"),
        start: "top 75%",
        end: "bottom 75%",
        scrub: 0.5,
      },
    },
  );
});
</script>

<style scoped>
.reveal-pending {
  opacity: 0;
}

.experience {
  max-width: 1100px;
  margin: 3rem auto 0;
  padding: 0 1.5rem 6rem;
  width: 100%;
  box-sizing: border-box;
}

/* ---------- En-tête ---------- */
.experience-hero {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #8a8d93;
}

.experienceTitle {
  font-size: 3rem;
  margin: 0 0 1rem;
  color: #2f2f2f;
}

.intro {
  margin: 0 0 2rem;
  max-width: 34ch;
  line-height: 1.7;
  color: #5a5d63;
}

.stats {
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.stat {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 1rem 1.4rem;
  border-radius: 20px;
}

.stat strong {
  font-size: 1.8rem;
  color: #2f2f2f;
}

.stat span {
  font-size: 0.8rem;
  color: #6a6d73;
}

.experience-hero .hero-coder {
  margin: 0;
  max-width: none;
  height: 380px;
}

/* ---------- Timeline ---------- */
.timeline-wrap {
  position: relative;
}

.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.timeline-line {
  position: absolute;
  top: 1.6rem;
  bottom: 1.6rem;
  left: 0.55rem;
  width: 2px;
  border-radius: 2px;
  background: linear-gradient(180deg, rgba(58, 58, 58, 0.35), rgba(58, 58, 58, 0.08));
}

.timeline-item {
  position: relative;
}

.timeline-dot {
  position: absolute;
  left: -2.5rem;
  top: 1.6rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background: #f4f5f8;
  box-shadow:
    3px 3px 6px rgba(0, 0, 0, 0.12),
    -3px -3px 6px rgba(255, 255, 255, 0.9);
}

.timeline-dot.current::after {
  content: "";
  position: absolute;
  inset: 0.32rem;
  border-radius: 50%;
  background: #3a3a3a;
}

/* ---------- Carte ---------- */
.experience-card {
  position: relative;
  padding: 1.75rem 2rem;
  border-radius: 24px;
  overflow: hidden;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.1rem;
}

.role {
  margin: 0 0 0.3rem;
  font-size: 1.3rem;
  color: #2f2f2f;
}

.company {
  margin: 0;
  font-size: 0.95rem;
  color: #6a6d73;
}

.period {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  flex-shrink: 0;
  text-align: right;
}

.date {
  font-size: 0.9rem;
  font-weight: 600;
  color: #3a3a3a;
}

.duration {
  font-size: 0.8rem;
  color: #8a8d93;
}

.highlights {
  margin: 0 0 1.25rem;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: #4a4a4a;
  line-height: 1.6;
  font-size: 0.95rem;
}

.highlights li::marker {
  color: #a0a3a9;
}

.experienceTech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.technologie {
  border-radius: 12px;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  color: var(--text-color);
  /* pas de « transition: all » : elle se battait avec les animations GSAP */
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
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.technologie:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 16px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .experience-hero {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
  .intro {
    margin-left: auto;
    margin-right: auto;
  }
  .stats {
    justify-content: center;
  }
  .experience-hero .hero-coder {
    height: 320px;
  }
}

@media (max-width: 600px) {
  .experience {
    margin-top: 1.5rem;
    padding: 0 0.75rem 4rem;
  }
  .experienceTitle {
    font-size: 2.2rem;
  }
  .timeline {
    padding-left: 1.6rem;
  }
  .timeline-line {
    left: 0.3rem;
  }
  .timeline-dot {
    left: -1.6rem;
    width: 0.9rem;
    height: 0.9rem;
  }
  .experience-card {
    padding: 1.25rem;
  }
  .card-head {
    flex-direction: column;
  }
  .period {
    align-items: flex-start;
    text-align: left;
    flex-direction: row;
    gap: 0.6rem;
  }
  .experience-hero .hero-coder {
    height: 260px;
  }
}
</style>
