<template>
  <div class="Navbar">
    <div class="button-container">
      <button @click="showComponent('TechnologiesComponent')">Technologie</button>
      <button @click="showComponent('Experience')">Expérience</button>
      <button @click="showComponent('Projets')">Projets</button>
      <button @click="showComponent('Contact')">Contact</button>
    </div>
  </div>
</template>

<style>
.button-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
button {
  background: none;
  border: none;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
  cursor: pointer;
  outline: none;
  color: #999;
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
  position: relative;
  border: 1px solid #ccc;
  width: 12em;
  margin-top: 7em;
  border-radius: 1em;
  background: #f5f5f5;
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
  }
}
</script>