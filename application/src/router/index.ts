import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/tabs/login",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "store",
        component: () => import("@/views/StorePage.vue"),
      },
      {
        path: "flows",
        component: () => import("@/views/FlowsPage.vue"),
      },
      {
        path: "profile",
        component: () => import("@/views/ProfilePage.vue"),
      },
      {
        path: "settings",
        component: () => import("@/views/SettingsPage.vue"),
      },
      {
        path: "forgotpassword",
        component: () => import("@/views/Account/ForgotPassword.vue"),
      },
      {
        path: "login",
        component: () => import("@/views/Account/Login.vue"),
      },
      {
        path: "signup",
        component: () => import("@/views/Account/SignUp.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
