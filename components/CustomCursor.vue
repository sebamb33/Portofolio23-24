<template>
    <div ref="customCursor" class="custom-cursor" aria-hidden="true">
        <div class="ring"></div>
    </div>
</template>

<script lang="ts">
import { gsap } from "gsap";

const INTERACTIVE = "a, button, input, textarea, select, [role='button']";

export default {
    data() {
        return {
            moveX: null as ((value: number) => void) | null,
            moveY: null as ((value: number) => void) | null,
        };
    },
    methods: {
        moveCursor(e: MouseEvent) {
            this.moveX?.(e.clientX);
            this.moveY?.(e.clientY);
        },
        clickCursor() {
            const cursor = this.$refs.customCursor as HTMLElement;
            cursor.classList.add("clicked");
            setTimeout(() => cursor.classList.remove("clicked"), 200);
        },
        overCursor(e: MouseEvent) {
            const cursor = this.$refs.customCursor as HTMLElement;
            const target = e.target as Element | null;
            cursor.classList.toggle("hovering", !!target?.closest(INTERACTIVE));
        },
    },
    mounted() {
        const cursor = this.$refs.customCursor as HTMLElement;
        gsap.set(cursor, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
        this.moveX = gsap.quickTo(cursor, "x", { duration: 0.18, ease: "power3.out" });
        this.moveY = gsap.quickTo(cursor, "y", { duration: 0.18, ease: "power3.out" });
        window.addEventListener("mousemove", this.moveCursor);
        window.addEventListener("mouseover", this.overCursor);
        window.addEventListener("click", this.clickCursor);
    },
    beforeUnmount() {
        window.removeEventListener("mousemove", this.moveCursor);
        window.removeEventListener("mouseover", this.overCursor);
        window.removeEventListener("click", this.clickCursor);
        gsap.killTweensOf(this.$refs.customCursor);
    },
};
</script>

<style scoped>
.custom-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    pointer-events: none;
    z-index: 10000000;
}

.ring {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 2px solid black;
    background-color: transparent;
    border-radius: 10px;
    transition:
        transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
        border-width 0.3s ease-in-out,
        background-color 0.3s ease;
}

.custom-cursor::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background-color: black;
    border-radius: 55%;
    transform: translate(-50%, -50%);
}

.custom-cursor.hovering .ring {
    transform: scale(1.9);
    border-width: 1px;
    background-color: rgba(255, 255, 255, 0.25);
}

.custom-cursor.clicked .ring {
    border-width: 0px;
    transform: scale(0.8);
}
@media (hover: none) {
    .custom-cursor {
        display: none;
    }
}
</style>
