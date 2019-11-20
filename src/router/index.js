import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portafolio',
    name: 'portafolio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Portafolio.vue')
  },
  {
    path: '/detalle/:id',
    name: 'detalle',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detalle.vue')
  },
  {
    path: '/sobreMi',
    name: 'sobreMi',
    component: () => import(/* webpackChunkName: "about" */ '../views/SobreMi.vue')
  },
  {
    path: '/habilidades',
    name: 'habilidades',
    component: () => import(/* webpackChunkName: "about" */ '../views/Habilidades.vue')
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
