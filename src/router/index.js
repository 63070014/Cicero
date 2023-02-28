import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Homepage.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Order from "../views/Order.vue"
import Men from "../views/Product.vue"
import Cart from "../views/Cart.vue"
import productDetail from "../views/ProductDetail.vue"
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/men",
    name: "men",
    component: Men,
  },
  {
    path:'/productDetail',
    name: "productDetail",
    component: productDetail,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: Order,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
// https://router.vuejs.org/guide/essentials/dynamic-matching.html