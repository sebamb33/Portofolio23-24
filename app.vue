<template>
  <div class="body">
    <HeaderComponent/>
    <NavBarComponent @show-component="changeComponent"/>
    </div>
</template>
<script lang="ts">
import {HeaderComponent, NavBarComponent} from "#components";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavBarComponent
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

</style>
