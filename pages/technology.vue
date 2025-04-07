<template>
  <div class="technology">
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon name="uil:vuejs" color="black" class="technologyIcon" />
          </div>
          <div class="technologyName">VueJs</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="4" />
        </div>
        <p class="technologyDetails">
          Utilisé chez AgenceGW et personnellement pour des applications. VueJs
          m'a permis de renforcer mes compétences en développement front-end.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon name="uil:react" color="black" class="technologyIcon" />
          </div>
          <div class="technologyName">React</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="3" />
        </div>
        <p class="technologyDetails">
          Utilisé dans de nombreux projets durant mes études et dans quelques
          projet personnelle
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon name="devicon:express" color="black" class="technologyIcon" />
          </div>
          <div class="technologyName">Express</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="3" />
        </div>
        <p class="technologyDetails">
          Utilisé en autodidacte pour comprendre le développement backend en
          Node.js, renforçant ma maîtrise des API.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon
              name="tabler:brand-prisma"
              color="black"
              class="technologyIcon"
            />
          </div>
          <div class="technologyName">Prisma</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="3" />
        </div>
        <p class="technologyDetails">
          Appris en autodidacte pour simplifier l'interaction avec les bases de
          données en TS.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon
              name="simple-icons:jest"
              color="black"
              class="technologyIcon"
            />
          </div>
          <div class="technologyName">Jest</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="3" />
        </div>
        <p class="technologyDetails">
          Utilisé durant mes études pour les tests unitaires, Jest m’a permis
          d’améliorer la qualité et la fiabilité de mes applications.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon name="logos:symfony" color="black" class="technologyIcon" />
          </div>
          <div class="technologyName">Symfony</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="3" />
        </div>
        <p class="technologyDetails">
          Principalement utilisé chez AgenceGW pour le backend, Symfony m'a
          permis de renforcer mes compétences en architecture MVC.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon
              name="devicon-plain:cypressio-wordmark"
              color="black"
              class="technologyIcon"
            />
          </div>
          <div class="technologyName">Cypress</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="4" />
        </div>
        <p class="technologyDetails">
          Utilisé en entreprise pour les tests end-to-end, Cypress m’a permis
          d'automatiser et de fiabiliser le processus de test.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon name="la:docker" color="black" class="technologyIcon" />
          </div>
          <div class="technologyName">Docker</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="4" />
        </div>
        <p class="technologyDetails">
          Utilisé pour la virtualisation des environnements, Docker m'a permis
          d'assurer la portabilité et la cohérence des applications.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon
              name="logos:kirby-icon"
              color="black"
              class="technologyIcon"
            />
          </div>
          <div class="technologyName">Kirby</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="4" />
        </div>
        <p class="technologyDetails">
          Utilisé chez AgenceGW pour des sites éco-conçus, Kirby m’a permis de
          créer des solutions légères et optimisées.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon
              name="simple-icons:hono"
              color="black"
              class="technologyIcon"
            />
          </div>
          <div class="technologyName">Hono</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="3" />
        </div>
        <p class="technologyDetails">
          Technologie moderne et performante pour le backend. Utilisé en
          autodidacte pour créer des solutions légères et optimisées.
        </p>
      </div>
    </div>
    <div class="oneTechno">
      <div class="technoData">
        <div class="technologyHeader">
          <div class="technologyLogo">
            <Icon
              name="lineicons:drizzle"
              color="black"
              class="technologyIcon"
            />
          </div>
          <div class="technologyName">Drizzle</div>
        </div>

        <div class="skill">Niveaux :</div>
        <div class="skillLevel">
          <Skillbar :skillNumber="2" />
        </div>
        <p class="technologyDetails">
          ORM avec une approche différente de celle de Prisma, permettant une
          gestion plus fine des requêtes et des relations. Drizzle est conçu
          pour être rapide et léger, avec une syntaxe sql.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Skillbar from "~/components/Skillbar.vue";

export default {
  components: { Skillbar },
  mounted() {
    const technologies = this.$el.querySelectorAll(".oneTechno");
    technologies.forEach((techno, index) => {
      techno.style.animationDelay = `${index * 0.3}s`;
    });
  },
};
</script>
<style scoped>
.technology {
  padding: 2rem;
  height: 80vh;
  overflow-y: auto; /* Changed to auto for better control */
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
  margin: auto;
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}
.technology::-webkit-scrollbar {
  width: 0; /* For Chrome, Safari, and Opera */
  height: 0;
}
.technologyHeader {
  margin: 3px;
  display: flex;
  align-items: flex-end;
  border-bottom: 2px solid black;
  padding-bottom: 1rem;
}
.technologyName {
  font-size: 2rem;
  margin-left: 1rem;
}
.skill {
  margin: 1rem 0rem;
}
.oneTechno {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  height: 40%;
  margin-bottom: 5rem;
  transition: transform 0.5s ease;
  animation: slideIn 450ms ease-out forwards;
  transform: translateY(200px);
  filter: blur(10px);
  min-height: 350px;
  border-radius: 10px;
  background: white;
  box-shadow: 12px 12px 24px #f3f0f0, -12px -12px 24px #f2f2f2;
}

.technoData {
  margin: 1rem;
}
.technologyIcon {
  height: 3rem;
  width: 3rem;
}
@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}
@media (max-width: 815px) {
  .technology {
    justify-content: center;
  }
}
</style>
