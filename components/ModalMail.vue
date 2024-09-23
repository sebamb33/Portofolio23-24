<template>
  <div :class="['modal-overlay', show ? 'active' : '']" @click="close">
    <div class="modal meep-meep" @click.stop>
      <span class="close" @click="close">&times;</span>
      <h2>Contactez moi</h2>
      <form
        name="contact"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <p>
          <label> Email: <input type="text" name="name" /> </label>
        </p>
        <p>
          <label> Message: <textarea name="message"></textarea></label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
export default defineComponent({
  modules: ["@nuxtjs/recaptcha"],
  recaptcha: {
    hideBadge: false,
    siteKey: process.env.SITE_RECAPTCHA_KEY,
    size: "normal",
    version: 2,
  },
  head() {
    return {
      script: [
        {
          src: "https://www.google.com/recaptcha/api.js",
          async: true,
          defer: true,
        },
      ],
    };
  },
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
    const form = ref({
      name: "",
      email: "",
      message: "",
    });
    const submited = ref(false);
    const message = ref("");

    const close = () => {
      emit("close");
    };

    return {
      submited,
      form,
      close,
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
  padding: 20px;
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
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 2px;
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
.hidden {
  display: none;
}
.hcaptcha {
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
}
</style>
