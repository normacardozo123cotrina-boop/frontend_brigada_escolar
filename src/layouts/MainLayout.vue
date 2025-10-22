<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const drawerOpen = ref(false)

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value
}

const handleLogout = () => {
  router.push('/login')
}
</script>

<template>
  <div id="app-layout">
    <header class="header">
      <button class="menu-btn" @click="toggleDrawer">☰</button>
      <h1 class="title">Brigada Escolar</h1>
      <button class="logout-btn" @click="handleLogout">Logout</button>
    </header>

    <div class="layout-body">
      <aside :class="['drawer', { open: drawerOpen }]">
        <h3>Menú Principal</h3>
        <ul>
          <li><router-link to="/registros">Registros Faltas</router-link></li>
          <li><router-link to="/estudiantes">Estudiantes</router-link></li>
          <li><router-link to="/padres">Padres</router-link></li>
        </ul>
      </aside>

      <main :class="{ 'drawer-open': drawerOpen }">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
#app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--background-main);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e3c72;
  color: white;
  padding: 0.5rem 1rem;
  height: 3.5rem;
  flex-shrink: 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 10;
}

.header .title {
  font-family: 'Old English Text MT', serif;
  font-size: 2em;
  text-shadow: 3px 3px 5px rgba(0,0,0,0.5);
  font-weight: bold;
  letter-spacing: 3px;
}

.menu-btn, .logout-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.layout-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.drawer {
  width: 220px;
  background-color: #f3f4f6;
  color: #333;
  padding: 1rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.drawer.open {
  transform: translateX(0);
}

.drawer h3 {
  margin-bottom: 1rem;
  font-weight: bold;
  color: #1e3c72;
}

.drawer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.drawer li {
  margin: 1rem 0;
}

.drawer a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.drawer a:hover {
  color: #1e3c72;
}

main {
  flex: 1;
  padding: 1.5rem;
  background-color: white;
  overflow-y: auto;
  transition: margin-left 0.3s ease;
}

main.drawer-open {
  margin-left: 0;
}
</style>
