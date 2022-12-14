import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ProductsView from '../views/ProductsView.vue'
// import ContactsView from '../view/ContactsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    comments: () => import('../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
