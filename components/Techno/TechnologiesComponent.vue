<template>
  <div class="TechnologiesPart">

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
<style>
.TechnologiesPart{
  position: relative;
  border: 1px solid black;
  width: 12em;
  margin-top: 7em;
  border-radius: 1em;
  background: #f5f5f5;
  padding: 1em;
  width: 80%;
  display: flex;
  flex-direction: row;

}
</style>