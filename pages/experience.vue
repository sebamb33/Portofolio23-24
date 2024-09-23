<template>
   <div class="experience">
      <div class="date">Sept 2021 - Sept 2022</div>
      <div class="date">Sept 2021 - Sept 2022</div>
    
       <div class="experienceItem">
         <p class="experienceText">Durant mon année d'alternance, j'ai travaillé sur la maintenance applicative d'une application pour les gens du voyage avec Windev, une expérience riche en diversité client. Cette mission m'a confronté à des besoins variés, stimulant ma capacité d'adaptation et d'innovation. J'ai développé des compétences clés en planification de tâches, acquérant une compréhension pratique de la gestion de projet. La relation directe avec les clients a aiguisé mes aptitudes en communication et en gestion des attentes. Chaque interaction a renforcé ma compréhension des besoins spécifiques des utilisateurs,</p>
         <div class="experienceTech">
           <div class="technologie">Windev</div>
           <div class="technologie">Laravel</div>
           <div class="technologie">React</div>
           <div class="technologie">Vue</div>
           <div class="technologie">Docker</div>
         </div>
        </div>
       <div class="experienceItem">
         <p class="experienceText">Durant mon année d'alternance, j'ai travaillé sur la maintenance applicative d'une application pour les gens du voyage avec Windev, une expérience riche en diversité client. Cette mission m'a confronté à des besoins variés, stimulant ma capacité d'adaptation et d'innovation. J'ai développé des compétences clés en planification de tâches, acquérant une compréhension pratique de la gestion de projet. La relation directe avec les clients a aiguisé mes aptitudes en communication et en gestion des attentes. Chaque interaction a renforcé ma compréhension des besoins spécifiques des utilisateurs,</p>
         <div class="experienceTech">
           <div class="technologie">Windev</div>
           <div class="technologie">Laravel</div>
           <div class="technologie">React</div>
           <div class="technologie">Vue</div>
           <div class="technologie">Docker</div>
         </div>
       </div>
   </div>
  <div class="experienceResponsive"v-if="!isDesktop">
    <div class="oneExprienceResponsive">
      <div class="dateResponsive">
          Sept/2021-Septembre/2022
      </div>
      <div class="exprienceTextResponsive">
        <p>Durant mon année d'alternance, j'ai travaillé sur la maintenance applicative d'une application pour les gens du voyage avec Windev, une expérience riche en diversité client. Cette mission m'a confronté à des besoins variés, stimulant ma capacité d'adaptation et d'innovation. J'ai développé des compétences clés en planification de tâches, acquérant une compréhension pratique de la gestion de projet. La relation directe avec les clients a aiguisé mes aptitudes en communication et en gestion des attentes. Chaque interaction a renforcé ma compréhension des besoins spécifiques des utilisateurs,</p>
      </div>
    </div>
    <div class="oneExprienceResponsive">
      <div class="dateResponsive">
          Sept/2021-Septembre/2022
      </div>
      <div class="exprienceTextResponsive">
        <p>Durant mon année d'alternance, j'ai travaillé sur la maintenance applicative d'une application pour les gens du voyage avec Windev, une expérience riche en diversité client. Cette mission m'a confronté à des besoins variés, stimulant ma capacité d'adaptation et d'innovation. J'ai développé des compétences clés en planification de tâches, acquérant une compréhension pratique de la gestion de projet. La relation directe avec les clients a aiguisé mes aptitudes en communication et en gestion des attentes. Chaque interaction a renforcé ma compréhension des besoins spécifiques des utilisateurs,</p>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref, computed } from "vue";

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
  margin: auto;
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
  animation: slideDown 2s ease-out forwards,blurIn 3s ease-out forwards;
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
    //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slideUp 2s ease-out forwards, blurIn 3s ease-out forwards;

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
  content: '';
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
  width: 60%;
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
.dateResponsive{
  font-weight: bold;
  font-size: 35px;
}
.experienceResponsive{
  margin-left: 5%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  margin-top:2%;
  justify-content: space-between;
}
@media screen and (max-width: 1000px) {
  .experience{
    display: none;
  }

}
</style>
