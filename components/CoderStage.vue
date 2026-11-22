<template>
  <div class="coder-stage">
    <LazyThreeCoderCharacter v-if="show3d" />
  </div>
</template>

<script setup lang="ts">
import { supportsWebGL, whenIdle } from "~/utils/three/support";

// Monté quand le navigateur est au repos : le contenu de la page s'affiche d'abord.
const show3d = ref(false);
let cancelIdle: (() => void) | null = null;
onMounted(() => {
  if (supportsWebGL()) cancelIdle = whenIdle(() => (show3d.value = true));
});
onBeforeUnmount(() => cancelIdle?.());
</script>

<style scoped>
.coder-stage {
  width: 100%;
  max-width: 560px;
  height: clamp(300px, 42vh, 440px);
  margin: 0 auto 3rem;
}

@media screen and (max-width: 480px) {
  .coder-stage {
    height: 280px;
    margin-bottom: 2rem;
  }
}
</style>
