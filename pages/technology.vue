<template>
<div class="Technologies">
  <div class="technology">
    <div class="technologyName">
        Vue Et Nuxt
    </div>
    <div class="skill">
        Niveaux
    </div>
      <div class="skillLevel">
        <Skillbar :myProp=3 />
      </div>
    <p class="Pratique">
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

</style>