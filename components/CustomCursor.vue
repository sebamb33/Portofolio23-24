<template>
    <div ref="customCursor" class="custom-cursor"></div>
</template>

<script lang="ts">
export default {
    methods: {
        clickCursor() {
            const cursor = this.$refs.customCursor as HTMLElement;
            cursor.classList.add("clicked");
            setTimeout(() => cursor.classList.remove("clicked"), 200);
        },
    },
    mounted() {
        window.addEventListener("mousemove", this.moveCursor);
        window.addEventListener("click", this.clickCursor);
    },
    beforeDestroy() {
        window.removeEventListener("mousemove", this.moveCursor);
        window.removeEventListener("click", this.clickCursor);
    },
    methods: {
        moveCursor(e) {
            const cursor = this.$refs.customCursor as HTMLElement;
            cursor.style.left = `${e.clientX - cursor.clientWidth / 2}px`;
            cursor.style.top = `${e.clientY - cursor.clientHeight / 2}px`;
        },
        clickCursor() {
            const cursor = this.$refs.customCursor as HTMLElement;
            cursor.classList.add("clicked");
            setTimeout(() => cursor.classList.remove("clicked"), 200);
        },
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
    border: 2px solid black;
    background-color: transparent;
    pointer-events: none;
    border-radius: 10px;
    z-index: 10000000;
    transition: border-width 0.3s ease-in-out;
}

.custom-cursor::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 4px;
    height: 4px;
    background-color: black;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.custom-cursor.clicked {
    border-width: 0px;
}
@media (hover: none) {
    .custom-cursor {
        display: none;
    }
}
</style>
