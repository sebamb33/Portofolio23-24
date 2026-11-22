import { gsap } from "gsap";

const canHover = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Cleanup = () => void;
const cleanups = new WeakMap<HTMLElement, Cleanup>();

/** v-magnetic : l'élément est légèrement attiré par le curseur. */
function setupMagnetic(el: HTMLElement, strength = 0.35): Cleanup {
  const x = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
  const y = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.5)" });
  const onMove = (e: PointerEvent) => {
    const r = el.getBoundingClientRect();
    x((e.clientX - (r.left + r.width / 2)) * strength);
    y((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x(0);
    y(0);
  };
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
  return () => {
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
    gsap.killTweensOf(el);
  };
}

export default defineNuxtPlugin((nuxtApp) => {
  const make = (setup: (el: HTMLElement, value?: number) => Cleanup) => ({
    mounted(el: HTMLElement, binding: { value?: number }) {
      if (!canHover()) return;
      cleanups.set(el, setup(el, binding.value));
    },
    unmounted(el: HTMLElement) {
      cleanups.get(el)?.();
      cleanups.delete(el);
    },
    getSSRProps: () => ({}),
  });

  nuxtApp.vueApp.directive("magnetic", make(setupMagnetic));
});
