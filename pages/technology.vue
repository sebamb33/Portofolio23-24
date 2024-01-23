<template>
<div class="technology">
  <div class="oneTechno">
    <div class="technoData">
    <div class="technologyHeader">
      <div class="technologyLogo">
        <Icon name="uil:vuejs" color="black" class="technologyIcon" />
      </div>
      <div class="technologyName">
          VueJs
      </div>
    </div>

    <div class="skill">
        Niveaux :
    </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=4 />
      </div>
    <p class="technologyDetails">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
    </p>
  </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
    <div class="technologyHeader">
      <div class="technologyLogo">
        <Icon name="uil:react" color="black" class="technologyIcon" />
      </div>
      <div class="technologyName">
        React
      </div>
    </div>

    <div class="skill">
      Niveaux :
    </div>
    <div class="skillLevel">
      <Skillbar :skillNumber=3 />
    </div>
    <p class="technologyDetails">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
    </p>
  </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
      <div class="technologyHeader">
        <div class="technologyLogo">
          <Icon name="devicon:express" color="black" class="technologyIcon" />
        </div>
        <div class="technologyName">
          Express
        </div>
      </div>

      <div class="skill">
        Niveaux :
      </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=3 />
      </div>
      <p class="technologyDetails">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
      </p>
    </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
      <div class="technologyHeader">
        <div class="technologyLogo">
          <Icon name="tabler:brand-prisma" color="black" class="technologyIcon" />
        </div>
        <div class="technologyName">
          Prisma
        </div>
      </div>

      <div class="skill">
        Niveaux :
      </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=3 />
      </div>
      <p class="technologyDetails">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
      </p>
    </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
      <div class="technologyHeader">
        <div class="technologyLogo">
          <Icon name="simple-icons:jest" color="black" class="technologyIcon" />
        </div>
        <div class="technologyName">
          Jest
        </div>
      </div>

      <div class="skill">
        Niveaux :
      </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=5 />
      </div>
      <p class="technologyDetails">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
      </p>
    </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
      <div class="technologyHeader">
        <div class="technologyLogo">
          <Icon name="logos:symfony" color="black" class="technologyIcon" />
        </div>
        <div class="technologyName">
          Symfony
        </div>
      </div>

      <div class="skill">
        Niveaux :
      </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=2 />
      </div>
      <p class="technologyDetails">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
      </p>
    </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
      <div class="technologyHeader">
        <div class="technologyLogo">
          <Icon name="devicon-plain:cypressio-wordmark" color="black" class="technologyIcon" />
        </div>
        <div class="technologyName">
          Cypress
        </div>
      </div>

      <div class="skill">
        Niveaux :
      </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=4 />
      </div>
      <p class="technologyDetails">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
      </p>
    </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
      <div class="technologyHeader">
        <div class="technologyLogo">
          <Icon name="la:docker" color="black" class="technologyIcon" />
        </div>
        <div class="technologyName">
          Docker
        </div>
      </div>

      <div class="skill">
        Niveaux :
      </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=4 />
      </div>
      <p class="technologyDetails">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
      </p>
    </div>
  </div>
  <div class="oneTechno">
    <div class="technoData">
      <div class="technologyHeader">
        <div class="technologyLogo">
          <Icon name="logos:kirby-icon" color="black" class="technologyIcon" />
        </div>
        <div class="technologyName">
          Kirby
        </div>
      </div>

      <div class="skill">
        Niveaux :
      </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=4 />
      </div>
      <p class="technologyDetails">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
      </p>
    </div>
  </div>
</div>
</template>
<script lang='ts'>
import Skillbar from "~/components/Skillbar.vue";

export default {
  components: {Skillbar},
  mounted() {
    const technologies = this.$el.querySelectorAll('.oneTechno');
    technologies.forEach((techno, index) => {
      techno.style.animationDelay = `${index * 0.3}s`;
    });
    this.addHoverEffect();
  },
  methods: {
    addHoverEffect() {
      const oneTechnos = this.$el.querySelectorAll('.oneTechno');
      oneTechnos.forEach(techno => {
        techno.addEventListener('mousemove', (e) => {
          const rect = techno.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateY = (x / rect.width) * 40;
          const rotateX = -(y / rect.height) * 40;
          techno.style.transform = `scale(1.2) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });
        techno.addEventListener('mouseleave', () => {
          techno.style.transform = 'none';
        });
      });
    }
  }
};

</script>
<style scoped>
.technology{
  padding: 2rem;
  height: 80vh;
  overflow-y: scroll;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  -ms-overflow-style: none;
}
.technology::-webkit-scrollbar{
  display: none;
}
.technologyHeader{
  margin: 3px;
  display: flex;
  align-items: flex-end;
  border-bottom:2px solid black ;
  padding-bottom:1rem;
}
.technologyName{
  font-size: 2rem;
  margin-left: 1rem;
}
.skill{
  margin:1rem 0rem;
}
.oneTechno{
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  height: 40%;
  margin-bottom: 5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  animation: slideIn 0.7s ease-out forwards;
  transform: translateY(500px);
  filter: blur(10px);
}
.oneTechno:hover {
  transform: scale(1.2) rotateY(-10deg);
}
.technoData{
  margin: 1rem;
}
.technologyIcon{
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
</style>