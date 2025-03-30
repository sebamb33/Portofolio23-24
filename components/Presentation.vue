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
    height: 10%;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-weight: 500;
    background: transparent;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:
        inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.3),
        4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    outline: none;
}
.buttonSend {
    border: none;
    color: #000;
    height: 3em;
}
.buttonSend:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow:
        -7px -7px 20px 0px rgba(255, 255, 255, 0.3),
        -4px -4px 5px 0px rgba(255, 255, 255, 0.3),
        7px 7px 20px 0px rgba(0, 0, 0, 0.5),
        4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}
.buttonSend:hover {
    color: #000;
}
.buttonSend:hover:after {
    left: auto;
    right: 0;
    width: 100%;
}
.buttonSend:active {
    top: 2px;
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
