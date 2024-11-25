<template>
  <div
    class="menu_nav"
    :class="{ 'slide-in': menuOpen }"
    @animationend="onMenuAnimationEnd"
  >
    <div class="menu_top" @click="closeMenu">
      <img
        src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
        height="50"
        alt="close menu"
        title="Cross to close menu"
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
        href="https://www.linkedin.com/in/s%C3%A9bastien-ambona-931306218/"
        target="_blank"
      >
        <img
          src="https://img.icons8.com/50/000000/linkedin.png"
          alt="logo linkedin"
          title="Redirection vers mon linkedin"
        />
      </a>
      <a href="https://github.com/sebamb33" target="_blank">
        <img
          src="https://img.icons8.com/50/000000/github--v1.png"
          alt="Logo Github"
          title="Redirection vers mon Github"
        />
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
        { to: "/experience", label: "Expériences" },
      ],
    };
  },
  methods: {
    closeMenu() {
      this.menuOpen = false;
      this.linksAnimated = false;
      this.$emit("closeMenu");
      document.querySelector(".app").style.display = "flex";
    },
    onMenuAnimationEnd() {
      if (this.menuOpen) {
        this.linksAnimated = true;
        document.querySelector(".app").style.display = "none";
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
  animation: slide-out 0.5s forwards;
}

.slide-in {
  animation: slide-in 0.2s forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
    height: 100vh;
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
  font-size: 45px;
  font-weight: 800;
  transform: translateX(-50px);
  transition:
    transform 0.3s ease-out,
    opacity 0.3s ease-out;
}

.slide-in-link {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.1s;
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
@media screen and (max-width: 1000px) {
  .menu_link {
    font-size: 30px;
  }
  .menu_router {
    height: 40vh;
  }
  .menu_nav {
    height: 70vh;
  }
}
</style>
