import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/projects",
    name: "projects",
    component: () => import("../views/ProjectBookView.vue"),
  },
  {
    path: "/internship/euphron",
    name: "euphron-internship",
    component: () => import("../views/Internship-Euphron.vue"),
  },
  {
    path: "/internship/ani",
    name: "ani-internship",
    component: () => import("../views/Internship-ANI.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
