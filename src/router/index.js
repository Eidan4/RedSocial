import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue';

import Login from '../components/Login.vue'
import registrarse from '../components/registrarse.vue'
import cuenta from '../components/cuenta.vue'
import buscar from '../components/buscar.vue'
import mensaje from '../components/mensaje.vue'




const routes = [
  {
    path: '/',
    name: 'Login',
    component : Login
  },
  {
    path:'/registrarse',
    name: 'registrarse',
    component: registrarse
  },
  {
    path: '/app',
    name: 'root',
    component: App
  },
  {
    path: '/cuenta',
    name:'cuenta',
    component:cuenta
  },
  {
    path: '/buscar',
    name: 'buscar',
    component: buscar
  },
  {
    path: '/mensaje',
    name: 'mensaje',
    component:mensaje
  }
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router




