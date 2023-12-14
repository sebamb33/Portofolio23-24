<template>
  <NuxtLayout>
    <nuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">

export default {
  name: 'App',

  data() {
    return {
      currentComponent: 'Techno'
    }
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
body {
  font-family: 'Fira Code', monospace;
  height: 70%;
  margin: 0;
  padding: 0;

}
</style>
