import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useUserStore } from '../stores/user'



const requireAuth = async(to, from, next )=>{
  const userStore = useUserStore()

   const user = await userStore.CurrentUser()

   if(user){
    next()
   }else {
    next('/registro')
   }
}

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
      path: '/BlogView',
      name: 'BlogView',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: () => import('../views/LogIn.vue')
    },
    {
      path: '/registro',
      name: 'Registro',
      component: () =>import('../views/RegistroView.vue')
    },
    {
      path: '/intranet',
      name: 'intranetview',
      component: () => import('../views/IntranetView.vue'),
      beforeEnter:requireAuth
    }
  ]
})

export default router
