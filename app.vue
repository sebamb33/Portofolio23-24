<template>
  <div class="principal">
    <CustomCursor />
    <NuxtLayout>
      <nuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",

  data() {
    return {
      currentComponent: "Techno",
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
body {
  cursor: none;
  font-family: "Fira Code", monospace;
  height: 70%;
  padding: 0;
}
.principal {
  margin: auto;

  .navbar {
    position: absolute;
    top: 40%;
    left: 0;
  }
}
*,
button,
a,
input,
textarea {
  cursor: none !important;
}
.application {
  max-width: 2000px;
}
.technology {
  max-width: 1900px;
}
</style>
