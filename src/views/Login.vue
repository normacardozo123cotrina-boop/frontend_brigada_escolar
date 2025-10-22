<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginLayout from "../layouts/LoginLayout.vue";

const router = useRouter();
const error = ref("");
const form = ref({
  username: "",
  password: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    router.push("/");
  } catch (err) {
    error.value = "Usuario o contraseña incorrectos";
  }
};
</script>

<template>
  <LoginLayout>
    <div class="login-container">
      <div class="login-card">
        <h2 class="title">Bienvenido</h2>
        <p class="subtitle">Inicia sesión para continuar</p>

        <p v-if="error" class="error-message">{{ error }}</p>

        <form @submit.prevent="handleSubmit" class="login-form">
          <div class="input-group">
            <label for="username">Usuario</label>
            <input
              id="username"
              type="text"
              v-model="form.username"
              placeholder="ejemplo123"
              required
            />
          </div>

          <div class="input-group">
            <label for="password">Contraseña</label>
            <input
              id="password"
              type="password"
              v-model="form.password"
              placeholder="********"
              required
            />
          </div>

          <button class="login-button">Ingresar</button>
        </form>

        <div class="extra-links">
          <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
          <p class="no-account">¿No tienes cuenta? <a href="#">Regístrate</a></p>
        </div>
      </div>
    </div>
  </LoginLayout>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  /* background: linear-gradient(135deg, #1e3c72, #2a5298); */
}

.login-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 3rem 2.5rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3c72; 
  margin-bottom: 0.25rem;
}

.subtitle {
  color: #555555;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.error-message {
  color: #d32f2f;
  background-color: #fdecea;
  border-radius: 8px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;
}

.input-group label {
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333333;
}

.input-group input {
  padding: 12px 16px;
  border: 2px solid #ccc;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input-group input:focus {
  border-color: #1e3c72;
  box-shadow: 0 0 0 3px rgba(30, 60, 114, 0.15);
  outline: none;
}

.login-button {
  background-color: #1e3c72;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 14px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.login-button:hover {
  background-color: #16315c;
  transform: translateY(-2px);
}

.login-button:active {
  transform: scale(0.98);
}

.extra-links {
  margin-top: 1.5rem;
  font-size: 14px;
  color: #555555;
}

.extra-links a {
  color: #1e3c72;
  text-decoration: none;
  font-weight: 500;
}

.extra-links a:hover {
  text-decoration: underline;
}
</style>
