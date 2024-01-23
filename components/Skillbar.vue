<template>
  <div class="skillbar">
    <ul>
      <li v-for="n in 5" :key="n" :class="{ 'blink': n <= skillNumber }" :style="{ 'animation-delay': `${n-1}s` }"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  skillNumber: {
    type: Number,
    default: 5
  }
});
</script>

<style scoped>
html {
  min-height: 100%;
  background: white;
}

ul {
  display: flex;
  flex-direction: row;
  margin: auto;
  height: 10px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  list-style: none;
  padding: 0;
}

li {
  display: block;
  float: left;
  width: 50px;
  height: 5px;
  margin-right: 10px;
  background: lightgrey;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
}

.blink {
  animation: blink-animation 1s ease-out forwards;
}

@keyframes blink-animation {
  0% { background: lightgrey; }
  50% {
    background: black;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
  }
  100% { background: black; }
}
</style>
