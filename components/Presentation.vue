<template>
    <div class="description">
        <h1>Ambona Sébastien</h1>
        <p class="typedText">Développeur web.</p>
        <p class="presentation">
            Je suis un développeur web et passionné par les nouvelles
            technologies et l'innovation. Diplômé du campus Ynov de Bordeaux.
        </p>
        <button class="buttonSend" @click="mailToModal">Me contacter</button>
    </div>
    <ModalMail v-if="modalOpen" :show="modalOpen" @close="modalOpen = false" />
</template>
<style scoped>
.description {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 10%;
}
h1 {
    font-size: 3em;
    margin-top: 2.5em;
}
.typedText {
    width: 10em;
    min-height: 30px;
    animation:
        typing 1s steps(15, end) 1s forwards,
        blink 0.6s step-end infinite 3s;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-size: 1.5em;
}
.presentation {
    margin-top: 2em;
}

@keyframes typing {
    from {
        width: 0;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}
.buttonSend {
    width: 300px;
    height: 3em;
    color: #3a3a3a;
    border-radius: 18px;
    padding: 10px 25px;
    font-weight: 600;
    font-size: 1.1em;
    position: relative;
    display: inline-block;
    outline: none;
    border: none;
    cursor: none;
    
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
    
    transition: all 0.3s ease;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
}

.buttonSend::before {
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
  border-radius: 18px 18px 0 0;
  pointer-events: none;
}

.buttonSend::after {
    display: none;
}

.buttonSend:hover {
    color: #2a2a2a;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.12),
      0 10px 20px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      inset 0 -1px 0 rgba(255, 255, 255, 0.25),
      inset 0 2px 8px rgba(255, 255, 255, 0.4),
      inset 0 -2px 8px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(255, 255, 255, 0.15),
      0 0 60px rgba(255, 255, 255, 0.08);
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
}

.buttonSend:active {
    transform: translateY(0px);
}
@media screen and (max-width: 1200px) {
    .description {
        margin: auto;
        width: 80%;
        .presentation {
            margin: 5%;
            margin-left: 0px;
        }
    }
}
</style>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const modalOpen = ref(false);
const mailToModal = () => {
    modalOpen.value = true;
};
</script>
