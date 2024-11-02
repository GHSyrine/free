import AboutView from '@/views/AboutView.vue'
import HomeView from '@/views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', component:HomeView },
    {path: '/about', component:AboutView},
    {path:'/user/:id', component:UserView}
  ]
})

export default router
