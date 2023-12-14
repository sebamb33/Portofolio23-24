<template>
  <div class="Navbar">
    <NuxtLink to="/">
    <img :src="logoUrl" alt="Logo" width="70" height="70">
    </NuxtLink>
    <div class="button-container">
      <div class="lien"><NuxtLink to="/technology">Technologies</NuxtLink></div>
      <div class="lien"><NuxtLink to="/experience">Experience</NuxtLink></div>
      <div class="lien"><NuxtLink to="/project">Projets</NuxtLink></div>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  width: 30%;
  margin-left: 60%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

}
.lien {
  background: none;
  border: none;
  font-size: 1em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  color:black;
  transition: color 0.3s;
}
.lien a{
  text-decoration: none;
  color:black;
}

.Navbar {
  display: flex;
  align-content: baseline ;
  position: relative;
  width: 100%;
  height: 15%;
  margin-top: 1em;
  padding: 1em;
}

</style>
<script>
export default {
  name: 'NavBarComponent',
  methods: {
    showComponent(componentName) {
      this.$emit('showComponent', componentName);
    }
  },
  data() {
    return {
      logoUrl: '/assets/LogoPortofolio.svg'
    }
  },
}
</script>