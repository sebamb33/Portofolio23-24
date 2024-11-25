<template>
  <NavBarComponent />

  <div class="app">
    <socialBarComponent />
    <slot />
  </div>
</template>

<script>
import SocialBarComponent from "~/layouts/socialBar.vue";
import NavBarComponent from "~/layouts/navbar.vue";

export default {
  components: { NavBarComponent, SocialBarComponent },
};
</script>
<style>
.app {
  display: flex;
  flex-direction: row;
  height: 80vh;
}
</style>
