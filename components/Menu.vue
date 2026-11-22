<template>
  <div
    class="menu_nav glass-effect-heavy"
    :class="{ 'slide-in': menuOpen }"
    role="dialog"
    aria-label="Menu de navigation"
    @animationend="onMenuAnimationEnd"
  >
<div class="menu_top" @click="closeMenu">
      <div>&times;</div>
    </div>
    <div class="menu_router">
      <div
        class="menu_link"
        v-for="(link, index) in links"
        :key="index"
        :class="{ 'slide-in-link': menuOpen && linksAnimated }"
        :style="{ transitionDelay: `${index * 0.08}s` }"
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
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Redirection vers mon LinkedIn"
      >
        <Icon name="simple-icons:linkedin" color="black" class="menu_icon" />
      </a>
      <a
        href="https://github.com/sebamb33"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="Redirection vers mon GitHub"
      >
        <Icon name="simple-icons:github" color="black" class="menu_icon" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  emits: ["closeMenu", "opened"],
  data() {
    return {
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
    },
    onMenuAnimationEnd() {
      if (this.menuOpen) {
        this.linksAnimated = true;
        this.$emit("opened");
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
  transform: translateX(-100%);
  animation: slide-out 0.5s forwards;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.02) 50%,
    rgba(255, 255, 255, 0.05) 75%,
    rgba(255, 255, 255, 0.08) 100%
  );
  backdrop-filter: blur(50px) saturate(200%) contrast(130%) brightness(110%);
  -webkit-backdrop-filter: blur(50px) saturate(200%) contrast(130%) brightness(110%);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.15),
    0 15px 30px rgba(0, 0, 0, 0.1),
    0 6px 18px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(255, 255, 255, 0.15),
    inset 0 2px 8px rgba(255, 255, 255, 0.25),
    inset 0 -2px 8px rgba(0, 0, 0, 0.03),
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 0 60px rgba(255, 255, 255, 0.1);
}

.menu_nav::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 100%
  );
  pointer-events: none;
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
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-in-link {
  opacity: 1;
  transform: translateX(0);
  transition-delay: 0.1s;
}

.menu_link a {
  text-decoration: none;
  color: var(--text-color);
  font-family: "Fira Code", monospace;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.menu_link:hover a {
  color: var(--text-color-hover);
  transform: translateY(-2px);
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
}

.menu_top {
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  margin-bottom: 50px;
  align-items: center;
  position: relative;
}

.menu_top > div {
    position: absolute;
    top: 20px;
    right: 80px;
    font-size: 28px;
    cursor: none;
    color: var(--text-color);
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 10;

    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0.08) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.25);

    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.menu_top > div:hover {
    color: var(--text-color-hover);
    transform: scale(1.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.12) 50%,
      rgba(255, 255, 255, 0.18) 100%
    );
}

.menu_logo {
  display: flex;
  gap: 20px;
  padding: 0 30px;
}
.menu_icon {
  width: 32px;
  height: 32px;
  transition: transform 0.3s ease;
}
.menu_logo a:hover .menu_icon {
  transform: translateY(-3px) scale(1.1);
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

@media screen and (max-width: 768px) {
  .menu_nav {
    padding: 0 15px;
  }
  .menu_link {
    font-size: 26px;
    padding-bottom: 25px;
  }
  .menu_router {
    height: 50vh;
  }
  .menu_top {
    padding: 20px;
    margin-bottom: 30px;
  }
  .menu_top > div {
    width: 55px;
    height: 55px;
    font-size: 32px;
    top: 25px;
    right: 70px;
  }
}

@media screen and (max-width: 480px) {
  .menu_link {
    font-size: 22px;
    padding-bottom: 20px;
  }
  .menu_router {
    height: 60vh;
    justify-content: flex-start;
    padding-top: 40px;
  }
  .menu_nav {
    padding: 0 10px;
  }
  .menu_top {
    padding: 15px;
    margin-bottom: 20px;
  }
  .menu_top > div {
    width: 50px;
    height: 50px;
    font-size: 28px;
    top: 20px;
    right: 60px;
  }
}
</style>
