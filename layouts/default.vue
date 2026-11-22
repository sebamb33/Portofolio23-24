<template>
  <NavBarComponent />

  <div class="app" :class="{ 'app--hidden': menuOpen }">
    <SocialBarComponent />
    <slot />
  </div>
</template>

<script setup>
import SocialBarComponent from "~/layouts/socialBar.vue";
import NavBarComponent from "~/layouts/navbar.vue";

const menuOpen = useState("menuOpen", () => false);
</script>
<style>
.app {
  display: flex;
  flex-direction: row;
  /* min-height (et non height) : la page peut grandir, sinon le scroll
     se bloquait avant le bas sur les pages longues */
  min-height: 80vh;
}
.app--hidden {
  display: none;
}
</style>
