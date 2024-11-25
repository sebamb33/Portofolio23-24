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
  background-color: white;
  border: 10px solid black;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: auto;
  margin-top: 5%;
  height: 80%;
}

.ProfilPictureComponent img {
  width: 90%;
  height: 70%;
  //height: auto; /* garde les proportions de l'image */
  margin-bottom: 20%;
}

.description p {
  margin: 5px 0;
  color: black;
  font-size: 18px;
}

@media screen and (max-width: 1200px) {
  .ProfilPictureComponent {
    display: none;
  }
}
</style>
