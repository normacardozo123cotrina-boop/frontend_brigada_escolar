<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const estudiantes = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8000/api/estudiantes"); // Ajusta tu endpoint
    estudiantes.value = response.data;
  } catch (err) {
    console.error("Error al cargar los estudiantes:", err);
  }
});
</script>

<template>
  <div class="container">
    <h1>Estudiantes</h1>
    <div class="cards-container">
      <div v-for="estudiante in estudiantes" :key="estudiante.id" class="card">
        <h2>{{ estudiante.nombre }} {{ estudiante.apellido }}</h2>
        <p><strong>Curso:</strong> {{ estudiante.curso.nombre }}</p>
        <p><strong>Padre:</strong> {{ estudiante.padre.nombre }} {{ estudiante.padre.apellido }}</p>
        <p><strong>Contacto:</strong> {{ estudiante.numero }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #1e3c72;
  margin-bottom: 30px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  width: 280px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.card h2 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.card p {
  font-size: 0.95rem;
  color: #555;
  margin: 5px 0;
}
</style>
