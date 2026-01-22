<template>
  <div class="error-container">
    <CustomCursor />
    <div class="error-content glass-effect">
      <h1 class="error-title">404</h1>
      <p class="error-message">Oups ! Page non trouvée</p>
      <p class="error-description">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <NuxtLink to="/" class="buttonHome glass-button">
        Retour à l'accueil
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomCursor from "~/components/CustomCursor.vue";

const props = defineProps({
  error: Object as () => { statusCode: number; message: string; url: string },
});

const errorTitle = computed(() => props.error?.statusCode || "Erreur");
const errorMessage = computed(() => props.error?.message || "Une erreur est survenue");
</script>

<style scoped>
.error-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.error-content {
  padding: 60px;
  border-radius: var(--glass-border-radius-lg);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.error-title {
  font-size: 8rem;
  font-weight: bold;
  margin: 0 0 1rem 0;
  color: var(--text-color);
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.8);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.error-message {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-color);
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
  font-weight: 600;
}

.error-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #4a4a4a;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.buttonHome {
  display: inline-block;
  padding: 15px 40px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 22px;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .error-title {
    font-size: 6rem;
  }
  .error-message {
    font-size: 1.5rem;
  }
  .error-description {
    font-size: 1rem;
  }
  .error-content {
    padding: 40px 30px;
  }
}

@media (max-width: 480px) {
  .error-title {
    font-size: 4rem;
  }
  .error-message {
    font-size: 1.2rem;
  }
  .error-content {
    padding: 30px 20px;
  }
  .buttonHome {
    padding: 12px 30px;
    font-size: 1rem;
  }
}
</style>
