<template>
    <div class="menu_nav">
        <div class="menu_link">
            <NuxtLink to="/technology">Technologies</NuxtLink>
        </div>
        <div class="menu_link">
            <NuxtLink to="/experience">Experience</NuxtLink>
        </div>
    </div>
    <div class="menu_logo">
        <a
            href="https://www.linkedin.com/in/s%C3%A9bastien-ambona-6b1b3a1b0/"
            target="_blank"
        >
            <NuxtLink to="/">
                <img :src="logoUrl" alt="Logo" width="70" height="70" />
            </NuxtLink>
            <img src="https://img.icons8.com/50/000000/linkedin.png" />
        </a>
        <a href="https://github.com/sebamb33" target="_blank">
            <img src="https://img.icons8.com/50/000000/github--v1.png" />
        </a>
    </div>
</template>
<script lang="ts">
export default {
    data() {
        return {
            logoUrl: "/assets/LogoPortofolio.svg",
        };
    },
};
</script>
