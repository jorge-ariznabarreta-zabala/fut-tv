import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Noticias',
      name: 'Noticias',
      component: () => import('../views/NoticiasView.vue')
    },
    {
      path: '/About',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/Pdivision',
      name: 'Pdivision',
      component: () => import('../views/PdivisionView.vue')
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/BlogView',
      name: 'BlogView',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/login/intranet',
      name: 'intranetview',
      component: () => import('../views/IntranetView.vue')
    }
  ]
})

export default router
