<template>
    <div
        class="menu_nav"
        :class="{ 'slide-in': menuOpen }"
        @animationend="onMenuAnimationEnd"
    >
        <div class="menu_top" @click="closeMenu">
            <img
                src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
                heigh="50"
            />
        </div>
        <div class="menu_router">
            <div
                class="menu_link"
                v-for="(link, index) in links"
                :key="index"
                :class="{ 'slide-in-link': menuOpen && linksAnimated }"
            >
                <NuxtLink :to="link.to" @click="closeMenu">
                    {{ link.label }}
                </NuxtLink>
            </div>
        </div>
        <div class="menu_logo">
            <a
                href="https://www.linkedin.com/in/s%C3%A9bastien-ambona-6b1b3a1b0/"
                target="_blank"
            >
                <img src="https://img.icons8.com/50/000000/linkedin.png" />
            </a>
            <a href="https://github.com/sebamb33" target="_blank">
                <img src="https://img.icons8.com/50/000000/github--v1.png" />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            logoUrl: "/assets/LogoPortofolio.svg",
            menuOpen: true,
            linksAnimated: false,
            links: [
                { to: "/", label: "Accueil" },
                { to: "/technology", label: "Technologies" },
                { to: "/experience", label: "Experience" },
            ],
        };
    },
    methods: {
        closeMenu() {
            this.menuOpen = false;
            this.linksAnimated = false;
            this.$emit("closeMenu");
        },
        onMenuAnimationEnd() {
            // Déclenche l'animation des liens après la fin de l'animation du menu
            if (this.menuOpen) {
                this.linksAnimated = true;
            }
        },
    },
};
</script>

<style scoped>
.menu_nav {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-bottom: 20px;
    position: absolute;
    z-index: 300;
    left: 0px;
    top: 0px;
    background: white;
    transform: translateX(-100%);
    animation: slide-out 0.3s forwards; /* Animation pour la fermeture */
}

.slide-in {
    animation: slide-in 0.3s forwards; /* Animation pour l'ouverture */
}

@keyframes slide-in {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.menu_router {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.menu_link {
    opacity: 0;
    padding-bottom: 20px;
    font-size: 50px;
    font-weight: 800;
    transform: translateX(-50px);
    transition:
        transform 0.3s ease-out,
        opacity 0.3s ease-out;
}

.slide-in-link {
    opacity: 1;
    transform: translateX(0);
    transition-delay: 0.1s; /* Délai pour l'apparition des liens */
}

.menu_link a {
    text-decoration: none;
    color: black;
    font-family: "Fira Code", monospace;
}

.menu_top {
    display: flex;
    justify-content: flex-end;
    padding: 30px;
    margin-bottom: 50px;
    align-items: center;
}
</style>
