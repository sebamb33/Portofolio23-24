<template>
  <div class="ProfilPictureComponent">
    <img
      src="/assets/LogoPortofolio.svg"
      alt="Logo ambona Sébastien"
      title="Logo reprsentant le A de ambona"
    />
    <div class="description">
      <p>Développeur Full-Stack</p>
      <p>{{ ageInfo }} ans - Bordeaux - Master Ynov</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "ProfilPictureComponent",
  data() {
    return {
      dateNaissance: new Date("2000-07-05"),
    };
  },
  computed: {
    ageInfo() {
      const diff = Date.now() - this.dateNaissance.getTime();
      const age = new Date(diff);
      return Math.abs(age.getUTCFullYear() - 1970);
    },
  },
});
</script>
<style scoped>
.ProfilPictureComponent {
  width: 25%;
  padding: 20px;
  text-align: center;
  margin: auto;
  margin-top: 5%;
  height: 80%;
  cursor: none;
  border-radius: 32px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;

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

.ProfilPictureComponent::before {
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
  border-radius: 32px 32px 0 0;
  pointer-events: none;
}

.ProfilPictureComponent:hover {
  transform: translateY(-5px);
  box-shadow:
    0 40px 80px rgba(0, 0, 0, 0.18),
    0 20px 40px rgba(0, 0, 0, 0.12),
    0 8px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.2),
    inset 0 2px 10px rgba(255, 255, 255, 0.3),
    inset 0 -2px 10px rgba(0, 0, 0, 0.04),
    0 0 0 1px rgba(255, 255, 255, 0.12),
    0 0 80px rgba(255, 255, 255, 0.15);
}

.ProfilPictureComponent img {
  width: 90%;
  height: 70%;
  margin-bottom: 20%;
}

.description p {
  margin: 5px 0;
  color: #3a3a3a;
  font-size: 18px;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

@media screen and (max-width: 1200px) {
  .ProfilPictureComponent {
    display: none;
  }
}
</style>
