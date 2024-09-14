<template>
  <div class="Navbar">
    <NuxtLink to="/">
      <img :src="logoUrl" alt="Logo" width="70" height="70" />
    </NuxtLink>
    <div class="button-container" onclick="menu=!menu">
      <div class="lien"><NuxtLink to="/technology">Technologies</NuxtLink></div>
      <div class="lien"><NuxtLink to="/experience">Experience</NuxtLink></div>
      <div class="lien"><NuxtLink to="/project">Projets</NuxtLink></div>
    </div>
    <button id="burger-icon" class="burger-icon" aria-label="Menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav id="menu" class="menu" v-if="menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
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
  outline: none;
  color: black;
  transition: color 0.3s;
}
.lien a {
  text-decoration: none;
  color: black;
}

.Navbar {
  display: flex;
  align-content: baseline;
  position: relative;
  width: 100%;
  height: 15%;
  margin-top: 1em;
}
.burger-icon {
  display: none;
  background: none;
  border: none;
}
.burger-icon span {
  display: block;
  width: 30px;
  height: 3px;
  background: black;
  margin: 5px;
  transition: 0.4s;
}
.menu {
  display: none;
}
.menu ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1080px) {
  .button-container {
    display: none;
  }
  .burger-icon {
    display: block;
  }
}
</style>
<script>
export default {
  name: "NavBarComponent",
  methods: {
    showComponent(componentName) {
      this.$emit("showComponent", componentName);
    },
  },
  data() {
    return {
      logoUrl: "/assets/LogoPortofolio.svg",
      menu: false,
    };
  },
};
</script>
