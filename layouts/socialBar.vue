<template>
  <div class="social-bar">
    <a
      href="https://www.linkedin.com/in/s%C3%A9bastien-ambona-931306218/"
      target="_blank"
    >
      <img
        src="https://img.icons8.com/50/000000/linkedin.png"
        alt="Logo linkedin"
        title="Redirection vers mon Linkedin"
      />
    </a>
    <a href="https://github.com/sebamb33" target="_blank">
      <img
        src="https://img.icons8.com/50/000000/github--v1.png"
        alt="logo github"
        title="Redirection vers mon github"
      />
    </a>
  </div>
</template>
<style scoped>
.social-bar {
  display: flex;
  flex-direction: column;
  margin: auto 0;
  margin-left: 13px;
}
.social-bar a {
  margin-top: 5%;
}
.social-bar img:hover {
  scale: 1.15;
  transition: scale 0.25s;
}
@media screen and (max-width: 1000px) {
  .social-bar {
    display: none;
  }
}
img {
  border-radius: 10px;
  background: white;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
  padding: 5px;
}
</style>
