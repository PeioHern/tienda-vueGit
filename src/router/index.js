import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomeView.vue'
import Login from '../views/LoginView.vue'
import About from '../views/AboutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    
  ]
})

export default router
