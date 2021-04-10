import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/button',
    name: 'button',
    component:  () => import ('../views/Button.vue')
  },
  {
    path: '/',
    name: 'carousel',
    component: () => import('../views/Carousel.vue')
  },
  {
    path: '/magnifier',
    name: 'magnifier',
    component: () => import("../views/Magnifier.vue")
  },
  {
    path: '/star',
    name: 'Stars',
    component: () => import('../views/Stars.vue')
  },
  {
    path: '/selector',
    name: 'Selector',
    component: () => import('../views/Selector.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
