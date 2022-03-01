import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/account",
    name: "Account",

    component: () => import("../views/Account.vue"),
  },
  {
    path: "/submitdata",
    name: "SubmitData",

    component: () => import("../views/SubmitData.vue"),
  },
  {
    path: "/querydata",
    name: "QueryData",

    component: () => import("../views/QueryData.vue"),
  },
  {
    path: "/help",
    name: "Help",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Help.vue"),
  },
  {
    path: "/login",
    name: "Login",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/explore",
    name: "Explore",

    component: () => import("../views/Explore.vue"),
  },
  {
    path: "/queryData",
    name: "QueryData",
    component: () => import("../views/QueryData.vue"),
  },
  {
    path: "/resetpassword",
    name: "RestPassword",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "shush" */ "../views/ResetPassword.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",

    component: () => import("../views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
