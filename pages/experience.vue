<template>
  <div class="experience">
    <div class="date">Sept 2022 - Dec 2024</div>
    <div class="date">Sept 2021 - Sept 2022</div>
    <div class="experienceItem">
      <p class="experienceText">
        Lors de mon alternance chez AgenceGW, j’ai évolué dans un environnement
        centré sur des technologies modernes, principalement Symfony et Vue.js,
        pour la maintenance et le développement d’applications web. En
        parallèle, j’ai enrichi mes compétences en autodidacte et durant mes
        études avec des frameworks avancés comme Nuxt.js, Next.js et NestJS,
        élargissant mon champ d’expertise en développement full-stack. J’ai
        également approfondi mes connaissances en Jest pour les tests unitaires
        et en Cypress pour les tests end-to-end, utilisé en entreprise. Chez
        AgenceGW, j’ai contribué à des projets éco-conçus avec Kirby (PHP), en
        intégrant des pratiques de développement durable et performantes. Cette
        expérience m’a permis de développer de solides compétences techniques en
        back-end avec Symfony, en front-end avec Vue.js et React, ainsi qu’en
        gestion de projet et en collaboration d’équipe, renforcées par des
        bonnes pratiques de développement pour assurer la stabilité et
        l’évolutivité des applications.
      </p>
      <div class="experienceTech">
        <div class="technologie">Symfony</div>
        <div class="technologie">VueJs</div>
        <div class="technologie">Nuxt</div>
        <div class="technologie">Next</div>
        <div class="technologie">Nest</div>
        <div class="technologie">Jest</div>
        <div class="technologie">Kirby</div>
        <div class="technologie">Docker</div>
      </div>
    </div>
    <div class="experienceItem">
      <p class="experienceText">
        Durant mon alternance chez IDCSOFT, j’ai travaillé sur la maintenance
        applicative d’une solution pour les gens du voyage, développée avec
        WinDev. Cette mission m’a permis de m’adapter à un environnement client
        diversifié avec des besoins spécifiques et variés. En parallèle, mes
        cours m’ont permis d’approfondir mes compétences techniques en utilisant
        des technologies telles que Laravel, Vue.js, React et Docker. Cette
        année d’alternance a consolidé mes compétences en gestion de projet,
        notamment dans la planification et la communication avec les clients,
        tout en renforçant ma capacité à cerner les attentes des utilisateurs et
        à leur fournir des solutions sur mesure.
      </p>
      <div class="experienceTech">
        <div class="technologie">Windev</div>
        <div class="technologie">Laravel</div>
        <div class="technologie">React</div>
        <div class="technologie">Vue</div>
        <div class="technologie">Docker</div>
      </div>
    </div>
  </div>
  <div class="experienceResponsive" v-if="!isDesktop">
    <hr />
    <div class="oneExprienceResponsive">
      <div class="dateResponsive">Septembre/2022-Decembre/2024</div>
      <div class="exprienceTextResponsive">
        <p>
          Lors de mon alternance chez AgenceGW, j’ai évolué dans un
          environnement centré sur des technologies modernes, principalement
          Symfony et Vue.js, pour la maintenance et le développement
          d’applications web. En parallèle, j’ai enrichi mes compétences en
          autodidacte et durant mes études avec des frameworks avancés comme
          Nuxt.js, Next.js et NestJS, élargissant mon champ d’expertise en
          développement full-stack. J’ai également approfondi mes connaissances
          en Jest pour les tests unitaires et en Cypress pour les tests
          end-to-end, utilisé en entreprise. Chez AgenceGW, j’ai contribué à des
          projets éco-conçus avec Kirby (PHP), en intégrant des pratiques de
          développement durable et performantes. Cette expérience m’a permis de
          développer de solides compétences techniques en back-end avec Symfony,
          en front-end avec Vue.js et React, ainsi qu’en gestion de projet et en
          collaboration d’équipe, renforcées par des bonnes pratiques de
          développement pour assurer la stabilité et l’évolutivité des
          applications.
        </p>
      </div>
      <ul>
        <li>Symfony</li>
        <li>VueJs</li>
        <li>Nuxt</li>
        <li>Next</li>
        <li>Nest</li>
        <li>Jest</li>
        <li>Kirby</li>
        <li>Docker</li>
      </ul>
    </div>

    <hr />
    <div class="oneExprienceResponsive">
      <div class="dateResponsive">Septembre/2021-Septembre/2022</div>
      <div class="exprienceTextResponsive">
        <p>
          Durant mon alternance chez IDCSOFT, j’ai travaillé sur la maintenance
          applicative d’une solution pour les gens du voyage, développée avec
          WinDev. Cette mission m’a permis de m’adapter à un environnement
          client diversifié avec des besoins spécifiques et variés. En
          parallèle, mes cours m’ont permis d’approfondir mes compétences
          techniques en utilisant des technologies telles que Laravel, Vue.js,
          React et Docker. Cette année d’alternance a consolidé mes compétences
          en gestion de projet, notamment dans la planification et la
          communication avec les clients, tout en renforçant ma capacité à
          cerner les attentes des utilisateurs et à leur fournir des solutions
          sur mesure.
        </p>
      </div>
      <div class="exprienceTechResponsive">
        <ul>
          <li>Windev</li>
          <li>Laravel</li>
          <li>React</li>
          <li>Vue</li>
          <li>Docker</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  ref,
  computed,
} from "vue";

export default defineComponent({
  setup() {
    const screenWidth = ref(0);
    const handleResize = () => {
      if (typeof window !== "undefined") {
        screenWidth.value = window.innerWidth;
      }
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    const isDesktop = computed(() => screenWidth.value >= 1000);

    return {
      isDesktop,
    };
  },
});
</script>
<style>
.experience {
  position: relative;
  display: grid;
  grid-template-columns: 20rem 50rem;
  row-gap: 2rem;
  align-items: stretch;
  margin: 10px auto;
  max-height: 50vh;
  border-radius: 10px;
  padding: 10px;
  background: white;
  box-shadow: 12px 12px 24px #f3f0f0, -12px -12px 24px #f2f2f2;
}
hr {
  border: 3px solid black;
  width: 100%;
}

@keyframes slideDown {
  0% {
    transform: translateY(-150px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.date {
  font-weight: bold;
  font-size: 1.2em;
  grid-column: 1;
  border-top: 2px solid;
  animation: slideDown 500ms ease-out forwards, blurIn 1s ease-out forwards;
}

.experienceItem {
  height: 90%;
  border-top: 2px solid;
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 4rem;

  animation: slideUp 500ms ease-out forwards, blurIn 1s ease-out forwards;
}
.experienceItem:last-child {
  grid-row: 2;
}

@keyframes slideUp {
  0% {
    transform: translateY(150px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes blurIn {
  0% {
    filter: blur(5px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}

.experienceData:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.experienceData::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background: linear-gradient(to right, #4e54c8, #8f94fb);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
  z-index: 1;
}

.experienceData:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.experienceData .experienceTech {
  will-change: transform, opacity;
}

.experienceData .experienceTech {
  animation: fadeIn 0.5s ease forwards;
  animation-delay: var(--animation-delay, 0s) + 0.6s;
}

.experienceData .experienceTech {
  animation: fadeIn 0.5s ease forwards;
  animation-delay: var(--animation-delay, 0s) + 0.7s;
}

@keyframes fadeIn {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.experienceData:hover {
  background-color: grey;
}

.experienceTech {
  display: flex;
  justify-content: space-around;
}

.experienceHistory {
  display: grid;
}

.stop {
  border: 2px solid black;
  background: white;
  z-index: 2;
  width: 0.7rem;
  height: 0.7rem;
  position: absolute;
  left: 0%;
}
.dateResponsive {
  font-weight: bold;
  font-size: 35px;
}
.experienceResponsive {
  margin-left: 5%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  justify-content: space-between;
}
.exprienceTechResponsive li {
  list-style: square;
}
@media screen and (max-width: 1000px) {
  .experience {
    display: none;
  }
}
@media screen and (max-width: 1200px) {
  .experienceText {
    width: 700px;
  }
  .experienceTech {
    display: flex;
    flex-wrap: wrap;
    width: 500px;
  }
  .experience {
    row-gap: 0px;
    grid-template-columns: none;
  }
  .date {
    width: 200px;
  }
}

@media screen and (min-width: 1000px) {
  .experienceResponsive {
    display: none;
  }
}
.experienceTech .technologie {
  color: black;
  padding: 1em 2em;
  font-size: 12px;
  border-radius: 0.5em;
  background: #e8e8e8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #efefef, -6px -6px 12px #ffffff;
}
</style>
