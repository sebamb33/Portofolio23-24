<template>
  <div>
    <div class="Navbar" v-if="!menuDisplay">
      <NuxtLink to="/">
        <img
          :src="logoUrl"
          alt="Logo de ambona sébastien"
          title="Logo du A de ambona"
          width="70"
          height="70"
        />
      </NuxtLink>
      <div class="button-container" onclick="menu=!menu">
        <div class="lien">
          <NuxtLink to="/technology">Technologies</NuxtLink>
        </div>
        <div class="lien">
          <NuxtLink to="/experience">Expériences</NuxtLink>
        </div>
      </div>
      <button
        id="burger-icon"
        class="burger-icon"
        aria-label="Menu"
        @click="menuDisplay = !menuDisplay"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <Menu v-if="menuDisplay" @closeMenu="closeMenu" />
  </div>
</template>

<style scoped>
.button-container {
  width: 30%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
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

/* Ajout de l'alignement vertical au centre pour le texte dans la navbar */
.Navbar {
  display: flex;
  align-items: center; /* Alignement vertical au centre */
  justify-content: space-between;
  margin: auto;
  position: relative;
  width: 95%;
  height: 15%;
  margin-top: 1em;
  border: 1px solid #e8e8e8;
  box-shadow: 12px 12px 24px #f3f0f0, -12px -12px 24px #f2f2f2;
  border-radius: 1em;
}
.burger-icon {
  display: none;
  background: none;
  border: none;
  padding: 10px;
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
  .Navbar {
    justify-content: space-between;
    position: sticky;
    top: 0px;
    background: white;
    z-index: 100;
  }
  .burger-icon {
    display: block;
  }
}
</style>
<script>
import Menu from "../components/Menu.vue";
export default {
  name: "NavBarComponent",
  methods: {
    showComponent(componentName) {
      this.$emit("showComponent", componentName);
    },
    showMenu() {
      this.menuDisplay = true;
    },
    closeMenu() {
      this.menuDisplay = false;
    },
  },
  data() {
    return {
      logoUrl: "/assets/LogoPortofolio.svg",
      menu: false,
      menuDisplay: false,
    };
  },
};
</script>
