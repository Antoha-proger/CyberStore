import { createRouter, createWebHistory } from 'vue-router'
// import Navigation from '@/components/Navigation/Navigation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/views/Home.vue')
    },
    
  ]
})

export default router
