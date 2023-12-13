<template>
  <div class="body">
    <div class="application">
      <NavBarComponent @show-component="changeComponent"/>
      <div class="letfPart">
        <SocialBarComponent/>
        <HeaderComponent/>
        <Nuxt/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {HeaderComponent, NavBarComponent,SocialBarComponent,} from "#components";
import TechnologiesComponent from "~/components/Technologie/TechnologiesComponent.vue";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavBarComponent,
    TechnologiesComponent
  },
  data() {
    return {
      currentComponent: 'Technologie'
    }
  },
  methods: {
    changeComponent(componentName: string) {
      this.currentComponent = componentName;
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
body {
  font-family: 'Fira Code', monospace;
}
.body .application {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.body .application .letfPart
{
  display: flex;
  flex-direction:row;
  justify-items: center;
}
.body .application .component-container {
  margin: auto;
  width: 70%;
}

</style>
