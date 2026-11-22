import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.15,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Remonte en haut à chaque changement de page et recalcule les triggers
  nuxtApp.hook("page:finish", () => {
    lenis.scrollTo(0, { immediate: true, force: true });
    // la nouvelle page n'a pas la même hauteur : on recalcule tout
    requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
  });

  // Fige le scroll quand le menu mobile est ouvert
  watch(
    () => useState<boolean>("menuOpen").value,
    (open) => (open ? lenis.stop() : lenis.start()),
  );

  return { provide: { lenis } };
});
