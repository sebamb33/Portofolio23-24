import type { Ref } from "vue";
import type { gsap as Gsap } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import type { SplitText as SplitTextType } from "gsap/SplitText";

export interface GsapApi {
  gsap: typeof Gsap;
  ScrollTrigger: typeof ScrollTriggerType;
  SplitText: typeof SplitTextType;
  /** Anime un titre : lignes masquées + caractères qui montent en cascade. */
  revealTitle: (el: Element | null, opts?: { scrollTrigger?: boolean }) => void;
  /** Fait apparaître des éléments en cascade au scroll. */
  revealStagger: (
    targets: Element[] | NodeListOf<Element>,
    opts?: { stagger?: number; y?: number; rotateX?: number },
  ) => void;
}

/**
 * Exécute `build` dans un contexte GSAP lié à `root` (nettoyé au démontage).
 * Si l'utilisateur préfère moins de mouvement, rien n'est animé et les
 * éléments `.reveal-pending` sont simplement affichés.
 */
export function useGsap(
  root: Ref<HTMLElement | null>,
  build: (api: GsapApi) => void,
) {
  let ctx: { revert: () => void } | undefined;

  onMounted(async () => {
    await nextTick();
    const el = root.value;
    if (!el) return;

    const showAll = () =>
      el
        .querySelectorAll(".reveal-pending")
        .forEach((node) => node.classList.remove("reveal-pending"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showAll();
      return;
    }

    const { $gsap, $ScrollTrigger, $SplitText } = useNuxtApp();
    const gsap = $gsap as typeof Gsap;
    const ScrollTrigger = $ScrollTrigger as typeof ScrollTriggerType;
    const SplitText = $SplitText as typeof SplitTextType;

    ctx = gsap.context(() => {
      const revealTitle: GsapApi["revealTitle"] = (target, opts = {}) => {
        if (!target) return;
        const split = SplitText.create(target, {
          type: "lines,chars",
          mask: "lines",
        });
        gsap.set(target, { opacity: 1 });
        gsap.from(split.chars, {
          yPercent: 110,
          rotate: 6,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.025,
          scrollTrigger:
            opts.scrollTrigger === false
              ? undefined
              : { trigger: target, start: "top 90%", once: true },
        });
      };

      const revealStagger: GsapApi["revealStagger"] = (targets, opts = {}) => {
        const list = Array.from(targets);
        if (!list.length) return;
        gsap.fromTo(
          list,
          {
            opacity: 0,
            y: opts.y ?? 50,
            rotateX: opts.rotateX ?? -8,
            transformPerspective: 900,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: opts.stagger ?? 0.1,
            clearProps: "transform",
            scrollTrigger: {
              trigger: list[0],
              start: "top 88%",
              once: true,
            },
          },
        );
      };

      build({ gsap, ScrollTrigger, SplitText, revealTitle, revealStagger });
      showAll();
    }, el);
  });

  onBeforeUnmount(() => ctx?.revert());
}
