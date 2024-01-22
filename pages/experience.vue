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
</template>
<script>

</script>
<style>
.experience {
  margin-left: 5rem;
  position: relative;
  display: grid;
  grid-template-columns: 20rem 60rem;
  grid-template-rows: 50vh 50vh;
}

.date {
  font-weight: bold; /* Rend le texte en gras */
  font-size: 1.2em; /* Augmente la taille de la police */
  border-bottom: solid 2px;
  grid-column: 1;
}

.experienceItem {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    height: 70%;
    border: solid 6px;
    width: 90%;
    margin: auto;
    background: #f0f0f0;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    animation: slideUp 2s ease-out forwards, blurIn 4s ease-out forwards;
    animation-delay: var(--animation-delay, 0s);
    
}
 .experienceItem:nth-of-type(1) {
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

.experienceData .date,
.experienceData .experienceText,
.experienceData .experienceTech {
  will-change: transform, opacity;
}

.experienceData .date {
  animation: fadeIn 0.5s ease forwards;
  animation-delay: var(--animation-delay, 0s) + 0.5s;
}

.experienceData .experienceText {
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
</style>
