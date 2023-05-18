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
import Search from "../views/search.vue"
import Forgot from "../views/forgotPassword.vue";
import axios from "axios";
var product = []
axios.get(`http://localhost:3000/product/`).then((res)=> {
  product = res.data
  console.log(product);
})
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: { products: product },
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
    props: { products: product },
  },
  {
    path: "/product/:sex/:category",
    name: "productCategory",
    component: Product,
    props: { products: product },
  },
  {
    path: "/productDetail/:title",
    name: "productDetail",
    component: productDetail,
    props: { products: product },
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: wishlist,
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
    props: { products: product },
  },
  {
    path: "/confirm",
    name: "confirm",
    component: confirmPayment,
  },
  {
    path: "/mypurchase",
    name: "mypurchase",
    component: Purchase,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: Forgot,
  },
  {
    path:"/search",
    name:"search",
    component: Search,
    props: { products: product },
  }
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
      console.log("moving to top of the page");
      window.scrollTo(0, 0);
    }
 }
});

export default router;
// https://router.vuejs.org/guide/essentials/dynamic-matching.html
