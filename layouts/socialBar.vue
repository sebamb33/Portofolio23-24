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
  color: white;
  padding: 5px;
  font-size: 12px;
  border-radius: 0.5em;
  background: #f9f8f8;
  cursor: pointer;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #f2f2f2, -6px -6px 12px #ffffff;
}
</style>
