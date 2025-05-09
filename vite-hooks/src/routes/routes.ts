import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import Alertas from '../components/Alertas.vue';
import DimensionComponente from '../components/DimensionComponente.vue';
import Tareas from '../components/Tareas.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },

  {
    path: '/alertas',
    name: 'Alertas',
    component: Alertas,
  },

  {
    path: '/tareas',
    name: 'Tareas',
    component: Tareas,
  },

  {
    path: '/dimension',
    name: 'Dimension',
    component: DimensionComponente,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
