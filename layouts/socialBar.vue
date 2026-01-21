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

@media screen and (max-width: 1000px) {
  .social-bar {
    display: none;
  }
}
img {
  color: white;
  padding: 8px;
  font-size: 12px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 45px;
  height: 45px;
  
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.05) 100%
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

img::before {
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
  border-radius: 16px 16px 0 0;
  pointer-events: none;
}

img:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.12),
    0 10px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    inset 0 -1px 0 rgba(255, 255, 255, 0.25),
    inset 0 2px 8px rgba(255, 255, 255, 0.4),
    inset 0 -2px 8px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 0 60px rgba(255, 255, 255, 0.08);
}
</style>
