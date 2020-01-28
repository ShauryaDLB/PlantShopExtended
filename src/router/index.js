import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import SocialMedia from "../views/SocialMedia.vue";
import Success from "../views/Success.vue";
import i18n from "@/i18n";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
  },
  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      }
    },
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "product/:id",
        name: "product",
        component: Product
      },
      {
        path: "login",
        name: "login",
        component: Login
      },
      {
        path: "social",
        name: "social",
        component: SocialMedia
      },
      {
        path: "success",
        name: "success",
        component: Success
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
