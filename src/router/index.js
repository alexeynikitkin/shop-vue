import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'products.index',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/categories',
      name: 'categories.index',
      component: () => import('../views/categories/Index.vue')
    },
    {
      path: '/categories/:id',
      name: 'categories.show',
      component: () => import('../views/categories/Show.vue')
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('../views/product/Show.vue')
    },
    {
      path: '/cart',
      name: 'cart.index',
      component: () => import('../views/cart/Index.vue')
    },
    {
      path: '/wishlist',
      name: 'wishlist.index',
      component: () => import('../views/wishlist/Index.vue')
    },
    {
      path: '/account',
      name: 'account.index',
      component: () => import('../views/account/Index.vue')
    },
    {
      path: '/register',
      name: 'auth.register',
      component: () => import('../views/auth/Register.vue')
    },
    {
      path: '/login',
      name: 'auth.login',
      component: () => import('../views/auth/Login.vue')
    },

  ]
})

export default router
