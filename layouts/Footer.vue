<template>
  <div class="footer">
    <p class="footerText">Ambona Sebastien || {{ currentYear }}</p>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      currentYear: null,
    }
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  }
}
</script >
<style scoped>
.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5%;
  background: white;
  z-index: 10;
  text-align: center;
}
</style>

