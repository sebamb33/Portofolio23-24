<template>
  <div
    ref="container"
    class="coder"
    :class="{ ready }"
    role="img"
    aria-label="Petit personnage 3D blanc qui code sur un ordinateur portable"
    title="Cliquez-moi !"
    @pointerdown="onPointerDown"
  ></div>
</template>

<script setup lang="ts">
import { DirectionalLight, HemisphereLight, Raycaster, Vector2 } from "three";
import { buildCoder, type Coder } from "~/utils/three/coder";
import { createStage, type Stage } from "~/utils/three/stage";
import { prefersReducedMotion } from "~/utils/three/support";

const container = ref<HTMLElement | null>(null);
const ready = ref(false);

let stage: Stage | null = null;
let coder: Coder | null = null;
const input = { px: 0, py: 0 };
const raycaster = new Raycaster();

const onPointer = (e: PointerEvent) => {
  input.px = (e.clientX / window.innerWidth) * 2 - 1;
  input.py = (e.clientY / window.innerHeight) * 2 - 1;
};

const onPointerDown = (e: PointerEvent) => {
  if (!stage || !coder) return;
  const r = stage.canvas.getBoundingClientRect();
  const ndc = new Vector2(
    ((e.clientX - r.left) / r.width) * 2 - 1,
    -((e.clientY - r.top) / r.height) * 2 + 1,
  );
  raycaster.setFromCamera(ndc, stage.camera);
  if (raycaster.intersectObjects(coder.hitTargets, true).length) coder.wave();
};

onMounted(async () => {
  const el = container.value;
  if (!el) return;

  const small = window.matchMedia("(max-width: 768px)").matches;
  const still = prefersReducedMotion();

  coder = buildCoder({ particles: !small && !still });
  stage = createStage(el, {
    fov: 30,
    maxDpr: small ? 1 : 1.5,
    still,
    onFrame: (t, dt) => coder?.update(t, dt, input),
  });

  const { scene, camera } = stage;
  coder.root.rotation.y = 0.75;
  scene.add(coder.root);

  // Éclairage néomorphique : lumière douce en haut à gauche, ombres grises douces
  scene.add(new HemisphereLight(0xffffff, 0x8f949e, 0.9));
  const key = new DirectionalLight(0xffffff, 2.6);
  key.position.set(-3, 6, 5);
  scene.add(key);
  const rim = new DirectionalLight(0xffffff, 0.5);
  rim.position.set(4, 2, -3);
  scene.add(rim);

  camera.position.set(-0.3, 3.1, 8.6);
  camera.lookAt(0.15, 1.4, 0.5);

  await coder.attachLogos();
  if (!stage) return;

  stage.start();
  ready.value = true;
  if (!still) {
    // petit coucou d'arrivée
    window.setTimeout(() => coder?.wave(), 900);
    window.addEventListener("pointermove", onPointer, { passive: true });
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("pointermove", onPointer);
  stage?.dispose();
  stage = null;
  coder = null;
});
</script>

<style scoped>
.coder {
  width: 100%;
  height: 100%;
  /* fondu doux sur les bords : pas de coupure nette du socle ou de l'ombre */
  -webkit-mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}
.coder.ready {
  opacity: 1;
  transform: none;
}
</style>
