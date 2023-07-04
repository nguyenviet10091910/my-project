import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Tour from "@/views/Tour.vue";
import Main from "@/views/Main.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: "/app/trang-chu"
    },
    {
      path: '/app',
      component: Main,
      children:[
        {
          path: "trang-chu",
          component: HomePage
        },
        {
          path: "tour",
          component: Tour
        }
      ]
    }
  ]
})

export default router
