import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/Homepage.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Order from "../views/Order.vue";
import Product from "../views/Product.vue";
import Cart from "../views/Cart.vue";
import productDetail from "../views/ProductDetail.vue";
import confirmPayment from "../views/confirmPayment.vue";
import wishlist from "../views/wishlist.vue";
import Purchase from "../views/MyPurchase.vue";
import Profile from "../views/Profile.vue";
import Search from "../views/search.vue";
import Forgot from "../views/forgotPassword.vue";
import axios from "axios";
async function fetchData() {
  const response = await axios.get(`http://localhost:3000/product/`);
  return response.data;
}
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({ products: route.params.products }),
  },
  {
    path: "/signin",
    name: "signin",
    meta: { guess: true },
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    meta: { guess: true },
    component: SignUp,
  },
  {
    path: "/product/:sex",
    name: "productSex",
    component: Product,
    props: (route) => ({ products: route.params.products }),
  },
  {
    path: "/product/:sex/:category",
    name: "productCategory",
    component: Product,
    props: (route) => ({ products: route.params.products }),
  },
  {
    path: "/product/:sex/:category/:size",
    name: "productSize",
    component: Product,
    props: (route) => ({ products: route.params.products }),
  },
  {
    path: "/productDetail/:title",
    name: "productDetail",
    component: productDetail,
    props: (route) => ({ products: route.params.products }),
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    meta: { login: true },
    component: wishlist,
  },
  {
    path: "/order",
    name: "order",
    meta: { login: true },
    component: Order,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: { login: true },
    props: (route) => ({ products: route.params.products }),
  },
  {
    path: "/confirm/:order_id",
    name: "confirm",
    meta: { login: true },
    component: confirmPayment,
  },
  {
    path: "/mypurchase",
    name: "mypurchase",
    meta: { login: true },
    component: Purchase,
  },
  {
    path: "/profile",
    name: "profile",
    meta: { login: true },
    component: Profile,
  },
  {
    path: "/forgot",
    name: "forgot",
    meta: { guess: true },
    component: Forgot,
  },
  {
    path: "/search",
    name: "productSearch",
    component: Search,
    props: (route) => ({ products: route.params.products }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      window.scrollTo(0, 0);
    }
  },
});
router.beforeEach(async (to, from, next) => {
  const isLoggedIn = localStorage.getItem("user");
  if (to.meta.login && !isLoggedIn) {
    alert("Please login first!");
    next({ path: "/signin" });
  }
  if (to.meta.guess && isLoggedIn) {
    alert("You've already logged in");
    next({ path: "/" });
  }
  console.log(to.name);
  if (to.name === "home" || to.name.startsWith("product")) {
    const product = await fetchData();
    to.params.products = product;
    next();
  } else {
    next();
  }
});
export default router;
// https://router.vuejs.org/guide/essentials/dynamic-matching.html
