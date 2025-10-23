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
          <li><router-link to="/cursos">Cursos</router-link></li>
          <li><router-link to="/estudiantes">Estudiantes</router-link></li>
          <li><router-link to="/padres">Padres</router-link></li>
          <li><router-link to="/sancionesFaltas">Sanciones y Faltas</router-link></li>
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
  background-color: #f9fafb;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #4b6cb7, #182848);
  color: #f0f4f8;
  padding: 0.6rem 1.2rem;
  height: 3.8rem;
  flex-shrink: 0;
  box-shadow: 0 4px 8px rgba(24, 40, 72, 0.3);
  z-index: 20;
  user-select: none;
  font-weight: 600;
  letter-spacing: 0.05em;
}

.header .title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.3rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.menu-btn, .logout-btn {
  background: transparent;
  border: none;
  color: #f0f4f8;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.menu-btn:hover, .logout-btn:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #dbe9ff;
  outline: none;
}

.layout-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.drawer {
  width: 240px;
  background: #ffffff;
  color: #1f2937;
  padding: 2rem 1.5rem;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: auto;
  border-radius: 0 12px 12px 0;
  border-right: 1px solid #e5e7eb;
  user-select: none;
  position: relative;
  z-index: 15;
}

.drawer.open {
  transform: translateX(0);
}

.drawer h3 {
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: #2563eb; 
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-bottom: 2px solid #2563eb;
  padding-bottom: 0.5rem;
}

.drawer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.drawer li {
  margin: 1.4rem 0;
}

.drawer a {
  text-decoration: none;
  color: #374151;
  font-weight: 600;
  font-size: 1.05rem;
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
  box-shadow: inset 0 0 0 0 transparent;
}

.drawer a:hover,
.drawer a.router-link-exact-active {
  color: #2563eb;
  background-color: #e0e7ff;
  box-shadow: inset 5px 0 0 0 #2563eb;
  transform: translateX(6px);
}

.drawer::-webkit-scrollbar {
  width: 8px;
}

.drawer::-webkit-scrollbar-track {
  background: #f3f4f6;
  border-radius: 10px;
}

.drawer::-webkit-scrollbar-thumb {
  background: #9ca3af;
  border-radius: 10px;
}

.drawer::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

main {
  flex: 1;
  padding: 2rem 2.5rem;
  background-color: #f9fafb;
  overflow-y: auto;
  transition: margin-left 0.35s ease;
  min-width: 0;
}

main.drawer-open {
  margin-left: 0;
}
</style>
