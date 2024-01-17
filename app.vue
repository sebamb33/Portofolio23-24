<template>
  <div>
    <CustomCursor />
    <NuxtLayout>
      <nuxtPage />
    </NuxtLayout>
  </div>

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
  cursor: none;
  font-family: 'Fira Code', monospace;
  height: 70%;
  margin: 0;
  padding: 0;

}
*, button, a, input, textarea {
  cursor: none !important;
}
</style>
