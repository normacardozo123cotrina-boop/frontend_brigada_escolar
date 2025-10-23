import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '../views/Home.vue' // mejor usar una vista específica para home
import Login from '../views/Login.vue'
import PadresView from '../views/PadresView.vue' 
import CursosView from '../views/Cursos.vue'
import FaltasSanciones from '../views/FaltasSanciones.vue'
import EstudiantesView from '../views/Estudiantes.vue'

const routes = [
  { path: '/', component: AppHome, meta: { layout: 'main' } },
  { path: '/login', component: Login, meta: { layout: 'login' } },
  { path: '/padres', component: PadresView, meta: { layout: 'main' } }, 
  { path: '/estudiantes', component: EstudiantesView, meta: { layout: 'main' } }, 
  { path: '/cursos', component: CursosView, meta: { layout: 'main' } },
  { path: '/sancionesFaltas', component: FaltasSanciones, meta: { layout: 'main' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
