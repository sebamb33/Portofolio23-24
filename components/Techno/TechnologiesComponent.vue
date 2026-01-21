<template>
  <div class="technologies-container">

  </div>
</template>
<script>

export default {
  name: 'TechnologiesComponent',
  methods: {
    showComponent(componentName) {
      this.$emit('showComponent', componentName);
    }
  }
}
</script>
<style scoped>
.technologies-container {
  position: relative;
  width: 80%;
  margin: 7em auto 0;
  border-radius: 1em;
  padding: 1em;
  display: flex;
  flex-direction: row;
}
</style>