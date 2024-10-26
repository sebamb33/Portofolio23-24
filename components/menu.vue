<template>
    <div class="menu_nav" v-if="menuOpen">
        <div class="menu_top" @click="closeMenu">
            <img
                src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
                heigh="50"
            />
        </div>
        <div class="menu_router">
            <div class="menu_link">
                <NuxtLink to="/" @click="closeMenu"> Accueil </NuxtLink>
            </div>
            <div class="menu_link">
                <NuxtLink to="/technology" @click="closeMenu"
                    >Technologies</NuxtLink
                >
            </div>
            <div class="menu_link" @click="closeMenu">
                <NuxtLink to="/experience">Experience</NuxtLink>
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
        };
    },
    methods: {
        closeMenu() {
            this.menuOpen = false;
            this.$emit("closeMenu");
        },
    },
};
</script>
<style>
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
}
.menu_top {
    display: flex;
    justify-content: flex-end;
    padding: 30px;
    margin-bottom: 50px;
    align-items: center;
}

.menu_router {
    height: 80vh;
}
.menu_link {
    padding-bottom: 20px;
    font-size: 50px;
    font-weight: 800;
}
.menu_link a {
    text-decoration: none;
    color: black;
    font-family: "Fira Code", monospace;
}
</style>
```
