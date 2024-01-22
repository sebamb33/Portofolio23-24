<template>
  <div class="skillbar">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  skillNumber: Number
});
</script>
<style scoped>
html {
  min-height: 100%;
  background: white;
}

ul {
  margin: auto;
  height: 10px;
  width: 500px;
  position: absolute;
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
  width: 90px;
  height: 10px;
  margin-right: 10px;
  background: lightgrey;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  animation: blink 1s ease-out forwards;
}


li:nth-child(1) {
  animation-delay: 1s;
}

li:nth-child(2) {
  animation-delay: 2s;
}

li:nth-child(3) {
  animation-delay: 3s;
}

li:nth-child(4) {
  animation-delay: 4s;
}

li:nth-child(5) {
  animation-delay: 5s;
}

@keyframes blink {
  0% { background: lightgrey; }
  50% {
    background: black;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.5);
  }
  100% { background: black; }
}
</style>