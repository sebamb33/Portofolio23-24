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
                    type="submit"
                    class="buttonSend"
                    @click="verifyEmail"
                    v-if="verifyHcaptcha"
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
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    transform: scale(0);
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    opacity: 0;
}

.modal-overlay.active {
    transform: scale(1);
    opacity: 1;
}

.modal-overlay.active {
    transform: scale(1);
    transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.modal {
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
    padding: 60px;
    border-radius: 32px;
    position: relative;
    width: 500px;
    max-width: 90%;
    transform: scale(0.8) translateY(50px);
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    
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

.modal-overlay.active .modal {
    transform: scale(1) translateY(0);
    opacity: 1;
}

@media (max-width: 768px) {
    .modal {
        width: calc(100% - 40px);
        height: 85vh;
        max-height: 700px;
        padding: 50px 35px;
        border-radius: 24px;
        margin: 20px auto;
        max-width: none;
        backdrop-filter: blur(60px) saturate(220%) contrast(140%) brightness(115%);
        -webkit-backdrop-filter: blur(60px) saturate(220%) contrast(140%) brightness(115%);
        
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.06) 0%,
          rgba(255, 255, 255, 0.03) 25%,
          rgba(255, 255, 255, 0.01) 50%,
          rgba(255, 255, 255, 0.03) 75%,
          rgba(255, 255, 255, 0.06) 100%
        );
        
        box-shadow: 
          0 30px 60px rgba(0, 0, 0, 0.15),
          0 15px 30px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          inset 0 -1px 0 rgba(255, 255, 255, 0.1),
          inset 0 2px 8px rgba(255, 255, 255, 0.2),
          0 0 0 1px rgba(255, 255, 255, 0.05);
    }
    .close {
        top: 30px;
        right: 30px;
        width: 55px;
        height: 55px;
        font-size: 30px;
        z-index: 1000;
        position: fixed;
    }
    .input-email,
    .textarea-message {
        width: calc(100% - 20px);
        margin: 15px 10px;
        padding: 16px 20px;
        font-size: 16px;
        border-radius: 20px;
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        box-sizing: border-box;
    }
    .textarea-message {
        height: 120px;
    }
    .buttonSend {
        width: calc(100% - 20px);
        margin: 20px 10px;
        height: 3.2em;
        font-size: 1.1em;
        border-radius: 22px;
        box-sizing: border-box;
    }
}

@media (max-width: 480px) {
    .modal {
        width: calc(100% - 30px);
        height: 80vh;
        max-height: 600px;
        padding: 40px 20px;
        border-radius: 20px;
        margin: 15px auto;
        backdrop-filter: blur(60px) saturate(220%) contrast(140%) brightness(115%);
        -webkit-backdrop-filter: blur(60px) saturate(220%) contrast(140%) brightness(115%);
        
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.06) 0%,
          rgba(255, 255, 255, 0.03) 25%,
          rgba(255, 255, 255, 0.01) 50%,
          rgba(255, 255, 255, 0.03) 75%,
          rgba(255, 255, 255, 0.06) 100%
        );
        
        box-shadow: 
          0 30px 60px rgba(0, 0, 0, 0.15),
          0 15px 30px rgba(0, 0, 0, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          inset 0 -1px 0 rgba(255, 255, 255, 0.1),
          inset 0 2px 8px rgba(255, 255, 255, 0.2),
          0 0 0 1px rgba(255, 255, 255, 0.05);
    }
    .close {
        top: 25px;
        right: 25px;
        width: 50px;
        height: 50px;
        font-size: 28px;
        z-index: 1000;
        position: fixed;
    }
    .input-email,
    .textarea-message {
        width: calc(100% - 20px);
        margin: 12px 10px;
        padding: 14px 15px;
        font-size: 15px;
        border-radius: 18px;
        backdrop-filter: blur(40px) saturate(180%);
        -webkit-backdrop-filter: blur(40px) saturate(180%);
        box-sizing: border-box;
    }
    .textarea-message {
        height: 100px;
    }
    .buttonSend {
        width: calc(100% - 20px);
        margin: 15px 10px;
        height: 3em;
        font-size: 1em;
        border-radius: 20px;
        box-sizing: border-box;
    }
}

.modal.out {
    animation: roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 28px;
    cursor: none;
    color: #3a3a3a;
    text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
    transition: all 0.3s ease;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    
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

.close:hover {
    color: #2a2a2a;
    transform: scale(1.1);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.12) 50%,
      rgba(255, 255, 255, 0.18) 100%
    );
}

.input-email,
.textarea-message {
    width: 100%;
    padding: 16px 20px;
    margin: 15px 0;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition: all 0.3s ease;
    resize: none;
    font-family: "Fira Code", monospace;
    font-size: 14px;
    color: #3a3a3a;
    
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.18) 0%,
      rgba(255, 255, 255, 0.12) 50%,
      rgba(255, 255, 255, 0.08) 100%
    );
    backdrop-filter: blur(30px) saturate(150%);
    -webkit-backdrop-filter: blur(30px) saturate(150%);
    
    box-shadow: 
      0 15px 30px rgba(0, 0, 0, 0.08),
      0 6px 12px rgba(0, 0, 0, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.18),
      inset 0 2px 6px rgba(255, 255, 255, 0.3),
      inset 0 -2px 6px rgba(0, 0, 0, 0.03),
      0 0 0 1px rgba(255, 255, 255, 0.08);
}

.input-email::placeholder,
.textarea-message::placeholder {
    color: rgba(58, 58, 58, 0.5);
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
}

.input-email:focus,
.textarea-message:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.4);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.22) 0%,
      rgba(255, 255, 255, 0.16) 50%,
      rgba(255, 255, 255, 0.12) 100%
    );
    transform: translateY(-2px);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.12),
      0 8px 16px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.6),
      inset 0 -1px 0 rgba(255, 255, 255, 0.22),
      inset 0 2px 8px rgba(255, 255, 255, 0.35),
      inset 0 -2px 8px rgba(0, 0, 0, 0.04),
      0 0 0 1px rgba(255, 255, 255, 0.12);
}

.textarea-message {
    height: 150px;
}
.buttonSend {
    width: 100%;
    height: 3.5em;
    color: #3a3a3a;
    border-radius: 22px;
    padding: 12px 25px;
    font-weight: 600;
    font-size: 1.1em;
    font-family: "Fira Code", monospace;
    border: none;
    cursor: none;
    position: relative;
    display: inline-block;
    outline: none;
    
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.15) 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    backdrop-filter: blur(35px) saturate(180%);
    -webkit-backdrop-filter: blur(35px) saturate(180%);
    
    border: 1px solid rgba(255, 255, 255, 0.3);
    
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.12),
      0 8px 16px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.6),
      inset 0 -1px 0 rgba(255, 255, 255, 0.25),
      inset 0 2px 8px rgba(255, 255, 255, 0.4),
      inset 0 -2px 8px rgba(0, 0, 0, 0.05),
      0 0 0 1px rgba(255, 255, 255, 0.15),
      0 0 40px rgba(255, 255, 255, 0.12);
    
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
    rgba(255, 255, 255, 0.15) 0%,
    transparent 100%
  );
  border-radius: 22px 22px 0 0;
  pointer-events: none;
}

.buttonSend::after {
    display: none;
}

.buttonSend:hover {
    color: #2a2a2a;
    transform: translateY(-3px) scale(1.02);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.15) 100%
    );
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.18),
      0 12px 25px rgba(0, 0, 0, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.7),
      inset 0 -1px 0 rgba(255, 255, 255, 0.3),
      inset 0 2px 10px rgba(255, 255, 255, 0.45),
      inset 0 -2px 10px rgba(0, 0, 0, 0.06),
      0 0 0 1px rgba(255, 255, 255, 0.2),
      0 0 60px rgba(255, 255, 255, 0.18);
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.9);
}

.buttonSend:active {
    transform: translateY(-1px);
}

.buttonSend:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
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
