import { createApp } from 'vue'
import VueRouter from 'vue-router'

import Forside from '@/components/Forside.vue';
// Importer andre komponenter, som du vil have som ruter

Vue.use(VueRouter)

const routes = [
  {
    path: '/Forside.vue',
    name: 'Forside',
    component: Forside
  },
  // Definer andre ruter her
]

