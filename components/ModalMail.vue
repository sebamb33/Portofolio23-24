<template>
    <div :class="['modal-overlay', show ? 'active' : '']" @click="close">
        <div class="modal meep-meep" @click.stop>
            <span class="close" @click="close">&times;</span>
            <h2>Contactez moi</h2>
            <form @submit.prevent="submitForm">
                <input
                    type="text"
                    v-model="email"
                    placeholder="Votre email"
                    class="input-email"
                />
                <textarea
                    v-model="message"
                    placeholder="Votre message"
                    required
                    class="textarea-message"
                />
                <vue-hcaptcha
                    class="hcaptcha"
                    :sitekey="hcaptchaKey"
                    @verify="onVerify"
                ></vue-hcaptcha>

                <button
                    v-if="verifyHcaptcha"
                    type="submit"
                    class="buttonSend"
                    @click="verifyEmail"
                >
                    Envoyer
                </button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import SendEmail from "../services/servicesMail";
import swal from "sweetalert";
export default defineComponent({
    components: {
        VueHcaptcha,
    },
    props: {
        show: {
            type: Boolean,
            required: true,
        },
    },
    emits: ["close"],
    setup(props, { emit }) {
        const email = ref("");
        const message = ref("");
        const verifyHcaptcha = ref(false);
        const captchaToken = ref("");
        const hcaptchaKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY;
        const submitForm = () => {
            if (!verifyHcaptcha.value) {
                swal(
                    "Attention",
                    "Veuillez compléter le captcha avant d'envoyer le formulaire.",
                    "warning",
                );
                return;
            }
            emit("close");
        };

        const onVerify = (token: string) => {
            captchaToken.value = token;
            verifyHcaptcha.value = true;
        };

        const onCaptchaError = () => {
            console.log("Erreur captcha");
            verifyHcaptcha.value = false;
        };

        const close = () => {
            emit("close");
        };

        const verifyEmail = async () => {
            //Verify if is a real mail adress
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value && message.value && emailRegex.test(email.value)) {
                try {
                    await SendEmail(email.value, message.value);
                    swal(
                        "Email envoyé",
                        "Votre e-mail a bien été envoyé, je vous répondrai dans les plus brefs délais.",
                        "success",
                    );
                } catch (error) {
                    alert("Erreur lors de l'envoi de l'email");
                }
            } else {
                swal(
                    "Email non expédié",
                    "Assurez-vous que tous les champs sont remplis et que l'adresse email est au bon format.",
                    "error",
                );
            }
        };

        return {
            email,
            message,
            submitForm,
            close,
            verifyHcaptcha,
            captchaToken,
            onVerify,
            onCaptchaError,
            hcaptchaKey,
            verifyEmail,
        };
    },
});
</script>
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transform: scale(0);
    transition: transform 0s 0.5s;
}

.modal-overlay.active {
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.modal {
    background: white;
    padding: 100px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    width: 500px;
    max-width: 100%;
    transform: translateX(-1500px);
    animation: roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.modal.out {
    animation: roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
}

.input-email,
.textarea-message {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 20px;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
    border-radius: 10px;
    background: white;
    box-shadow:
        12px 12px 24px #f3f0f0,
        -12px -12px 24px #f2f2f2;

    resize: none;
}

.textarea-message {
    height: 150px;
}
.buttonSend {
    width: 70%;
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
    width: 100%;
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
.buttonSend:disabled {
    background: gray;
}
*:onfocus {
    outline: none;
}

@keyframes roadRunnerIn {
    0% {
        transform: translateX(-1500px) skewX(30deg) scaleX(1.3);
    }
    70% {
        transform: translateX(30px) skewX(0deg) scaleX(0.9);
    }
    100% {
        transform: translateX(0px) skewX(0deg) scaleX(1);
    }
}

@keyframes roadRunnerOut {
    0% {
        transform: translateX(0px) skewX(0deg) scaleX(1);
    }
    30% {
        transform: translateX(-30px) skewX(-5deg) scaleX(0.9);
    }
    100% {
        transform: translateX(1500px) skewX(30deg) scaleX(1.3);
    }
}
.hcaptcha {
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
}
</style>
