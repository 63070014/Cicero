import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Homepage.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Order from "../views/Order.vue"
import Product from "../views/Product.vue"
import Cart from "../views/Cart.vue"
import productDetail from "../views/ProductDetail.vue"
import confirmPayment from "../views/confirmPayment.vue"
import wishlist from "../views/wishlist.vue"
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
    path: "/product/:sex",
    name: "productSex",
    component: Product,
  },
  {
    path:"/product/:sex/:category",
    name: "productCategory",
    component: Product,
  },
  {
    path:'/productDetail/:title',
    name: "productDetail",
    component: productDetail,
  },
  {
    path:'/wishlist',
    name:'Wishlist',
    component: wishlist
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
  {
    path: "/confirm",
    name: "confirm",
    component: confirmPayment,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
// https://router.vuejs.org/guide/essentials/dynamic-matching.html