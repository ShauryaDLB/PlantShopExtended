import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Forum from "../views/Forum.vue";
import ForumPostContent from "../views/ForumPostContent.vue";
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
        path: "forum",
        name: "forum",
        component: Forum
      },
      {
        path: "forum/post/:id",
        name: "forumPostContent",
        component: ForumPostContent
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
