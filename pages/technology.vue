<template>
<div class="technology">
  <div class="oneTechno">
    <div class="technologyName">
        Vue Et Nuxt
    </div>
    <div class="skill">
        Niveaux
    </div>
      <div class="skillLevel">
        <Skillbar :skillNumber=3 />
      </div>
    <p class="technologyDetails">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aperiam commodi
    </p>
  </div>
</div>
</template>
<script lang = 'ts'>
import Skillbar from "~/components/Skillbar.vue";

export default {
  components: {Skillbar}
};
</script>
<style scoped>
.technology{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
}
.oneTechno{
  display: flex;
  flex-direction: column;
}
</style>