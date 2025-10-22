<script setup>
import { ref, onMounted } from 'vue'

const padres = ref([])

onMounted(() => {
  padres.value = [
    {
      id: 1,
      nombre: 'Carlos Pérez',
      telefono: '64576543',
      correo: 'carlos.perez@gmail.com',
      foto: 'https://static.vecteezy.com/system/resources/previews/009/749/885/non_2x/man-teacher-or-father-avatar-icon-cartoon-guy-wear-glasses-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg'
    },
    {
      id: 2,
      nombre: 'Ana López',
      telefono: '64576543',
      correo: 'ana.lopez@gmail.com',
      foto: 'https://static.vecteezy.com/system/resources/previews/009/749/885/non_2x/man-teacher-or-father-avatar-icon-cartoon-guy-wear-glasses-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg'
    },
    {
      id: 3,
      nombre: 'José Gómez',
      telefono: '64576543',
      correo: 'jose.gomez@gmail.com',
      foto: 'https://static.vecteezy.com/system/resources/previews/009/749/885/non_2x/man-teacher-or-father-avatar-icon-cartoon-guy-wear-glasses-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg'
    }
  ]
})
</script>

<template>
  <div class="padres-container">
    <h2 class="titulo">Lista de Padres</h2>

    <div class="cards-grid">
      <div v-for="padre in padres" :key="padre.id" class="card">
        <img :src="padre.foto" alt="Foto del padre" class="card-img" />
        <div class="card-content">
          <h3 class="card-title">{{ padre.nombre }}</h3>
          <p class="card-text">{{ padre.telefono }}</p>
          <p class="card-text">{{ padre.correo }}</p>
          <button class="card-btn">Ver Detalles</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.padres-container {
  padding: 2rem;
  background-color: #f4f6f8;
  min-height: 100vh;
}

.titulo {
  text-align: center;
  color: #1e3c72;
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
  text-align: center;
}

.card-title {
  color: #1e3c72;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #555;
  font-size: 0.95rem;
  margin: 0.25rem 0;
}

.card-btn {
  margin-top: 1rem;
  width: 100%;
  background-color: #1e3c72;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.card-btn:hover {
  background-color: #2e5599;
}
</style>
