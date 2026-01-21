<template>
  <div>
    <div 
      class="Navbar" 
      v-if="!menuDisplay"
      v-motion
      :initial="{ opacity: 0, y: -50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, type: 'spring' } }"
    >
      <NuxtLink 
        to="/"
        v-motion
        :initial="{ scale: 0 }"
        :enter="{ scale: 1, transition: { duration: 600, delay: 200, type: 'spring' } }"
        :hover="{ scale: 1.1, transition: { duration: 300 } }"
      >
        <img
          :src="logoUrl"
          alt="Logo de ambona sébastien"
          title="Logo du A de ambona"
          width="70"
          height="70"
        />
      </NuxtLink>
      <div class="button-container" onclick="menu=!menu">
        <div 
          class="lien"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 400, type: 'spring' } }"
          :hover="{ scale: 1.05, transition: { duration: 200 } }"
        >
          <NuxtLink to="/technology">Technologies</NuxtLink>
        </div>
        <div 
          class="lien"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 600, delay: 600, type: 'spring' } }"
          :hover="{ scale: 1.05, transition: { duration: 200 } }"
        >
          <NuxtLink to="/experience">Expériences</NuxtLink>
        </div>
      </div>
      <button
        id="burger-icon"
        class="burger-icon"
        aria-label="Menu"
        @click="menuDisplay = !menuDisplay"
        v-motion
        :initial="{ opacity: 0, rotate: -180 }"
        :enter="{ opacity: 1, rotate: 0, transition: { duration: 600, delay: 800, type: 'spring' } }"
        :hover="{ scale: 1.1, transition: { duration: 200 } }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <Menu v-if="menuDisplay" @closeMenu="closeMenu" />
  </div>
</template>

<style scoped>
.button-container {
  width: 30%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
.lien {
  background: none;
  border: none;
  font-size: 1em;
  margin: 0;
  padding: 0;
  outline: none;
  color: #3a3a3a;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 10px 18px;
  border-radius: 16px;
}

.lien::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.12) 50%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: -1;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.lien:hover::before {
  opacity: 1;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.28) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.28) 100%
  );
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
}

.lien a {
  text-decoration: none;
  color: #3a3a3a;
  font-weight: 500;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.lien:hover a {
  color: #2a2a2a;
  transform: translateY(-1px);
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
}

.Navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  position: relative;
  width: 95%;
  height: 80px;
  margin-top: 1em;
  border-radius: 28px;
  overflow: hidden;
  
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.08) 25%,
    rgba(255, 255, 255, 0.05) 50%,
    rgba(255, 255, 255, 0.08) 75%,
    rgba(255, 255, 255, 0.12) 100%
  );
  backdrop-filter: blur(40px) contrast(120%) brightness(108%);
  -webkit-backdrop-filter: blur(40px) contrast(120%) brightness(108%);
  
  border: 1px solid rgba(255, 255, 255, 0.25);
  
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.08),
    0 8px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.6),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2),
    inset 0 2px 6px rgba(255, 255, 255, 0.35),
    inset 0 -2px 6px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 0 40px rgba(255, 255, 255, 0.06);
  
  position: relative;
}

.Navbar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.15),
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 1.2s ease;
}

.Navbar::after {
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
  border-radius: 28px 28px 0 0;
  pointer-events: none;
}

.Navbar:hover::before {
  left: 100%;
}

.Navbar:hover {
  transform: translateY(-2px) scale(1.005);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.09),
    0 10px 20px rgba(0, 0, 0, 0.06),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(255, 255, 255, 0.25),
    inset 0 2px 8px rgba(255, 255, 255, 0.4),
    inset 0 -2px 8px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 0 60px rgba(255, 255, 255, 0.08);
}
.burger-icon {
  display: none;
  background: none;
  border: none;
  padding: 10px;
}
.burger-icon span {
  display: block;
  width: 30px;
  height: 3px;
  background: black;
  margin: 5px;
  transition: 0.4s;
}
.menu {
  display: none;
}
.menu ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  background: white;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1080px) {
  .button-container {
    display: none;
  }
  .Navbar {
    justify-content: space-between;
    position: sticky;
    top: 0px;
    z-index: 100;
    border-radius: 20px;
    
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.06) 100%
  );
    backdrop-filter: blur(35px) contrast(115%) brightness(108%);
    -webkit-backdrop-filter: blur(35px) contrast(115%) brightness(108%);
    border: 1px solid rgba(255, 255, 255, 0.22);
    box-shadow: 
      0 15px 30px rgba(0, 0, 0, 0.07),
      0 6px 12px rgba(0, 0, 0, 0.04),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.08),
      0 0 20px rgba(255, 255, 255, 0.05);
  }
  .burger-icon {
    display: block;
  }
}
</style>
<script>
import Menu from "../components/Menu.vue";
export default {
  name: "NavBarComponent",
  methods: {
    showComponent(componentName) {
      this.$emit("showComponent", componentName);
    },
    showMenu() {
      this.menuDisplay = true;
    },
    closeMenu() {
      this.menuDisplay = false;
    },
  },
  data() {
    return {
      logoUrl: "/assets/LogoPortofolio.svg",
      menu: false,
      menuDisplay: false,
    };
  },
};
</script>
