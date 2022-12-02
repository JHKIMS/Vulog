import { createWebHistory, createRouter } from "vue-router";
import ListVue from './components/ListVue.vue'
import HomeVue from './components/HomeVue.vue'
import DetailVue from './components/DetailVue.vue'

const routes = [
  {
    path: "/list",
    component: ListVue,
  },
  {
    path: "/",
    component: HomeVue,
  },
  {
    path: "/detail/:myCustom",
    component: DetailVue,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 