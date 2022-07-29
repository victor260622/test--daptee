import { createWebHistory, createRouter } from "vue-router";
import HomePage from "./views/home-page.vue";
import LoginPage from "./views/login-page.vue";

const routes = [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/login",
      component: LoginPage,
    }
  ];
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;