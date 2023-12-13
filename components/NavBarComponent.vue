<template>
  <div class="Navbar">
    <img :src="logoUrl" alt="Logo" width="70" height="70">
    <div class="button-container">
      <button @click="showComponent('TechnologiesComponent')">Technologies</button>
      <button @click="showComponent('Experience')">Expérience</button>
      <button @click="showComponent('Projets')"> Mes Projets</button>
    </div>
  </div>
</template>

<style>
.button-container {
  width: 30%;
  margin-left: 60%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
button {
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

li {
  margin-bottom: 2em;
  transition: background-color 0.3s, border-color 0.3s; 
}

ul:first-child {
  margin-top: 2em;
}

.Navbar {
  display: flex;
  align-content: baseline ;
  position: relative;
  width: 100%;
  height: 15%;
  margin-top: 2em;
  padding: 1em;
}

li:hover {
  background-color: #ccc;
  border-color: #888;
  cursor: pointer;
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