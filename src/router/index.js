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
import Purchase from "../views/MyPurchase.vue"
import Profile from "../views/Profile.vue"
const product = [
  {
      id: '001',
      title: 'CELESTIAL SPHERE SEQUIN JACKET',
      price: '1290',
      color: 'blue',
      sex: 'kids',
      categories: 'Tops',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_0.jpg'),
          require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_1.jpg'),
          require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_2.jpg'),
          require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_3.jpg'),
          require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_4.jpg'),
          require('../assets/products/CELESTIAL_SPHERE_SEQUIN_JACKET_5.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '002',
      title: 'GLW PINK SKIRT',
      price: '890',
      color: 'pink',
      sex: 'kids',
      categories: 'Skirts',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/GLW_PINK_SKIRT_0.jpg'),
          require('../assets/products/GLW_PINK_SKIRT_1.jpg'),
          require('../assets/products/GLW_PINK_SKIRT_2.jpg'),
          require('../assets/products/GLW_PINK_SKIRT_3.jpg'),
          require('../assets/products/GLW_PINK_SKIRT_4.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '003',
      title: 'GENTLE LITTLEWOMAN RABBIT T-SHIRT',
      price: '790',
      color: 'black',
      sex: 'kids',
      categories: 'Tops',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_0.jpg'),
          require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_1.jpg'),
          require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_3.jpg'),
          require('../assets/products/GENTLE_LITTLEWOMAN_RABBIT_T-SHIRT_4.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '004',
      title: 'GLW PINK TROUSERS',
      price: '990',
      color: 'pink',
      sex: 'kids',
      categories: 'Trousers',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/GLW_PINK_TROUSERS_0.jpg'),
          require('../assets/products/GLW_PINK_TROUSERS_1.jpg'),
          require('../assets/products/GLW_PINK_TROUSERS_3.jpg'),
          require('../assets/products/GLW_PINK_TROUSERS_4.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '005',
      title: 'PAPER PLANE SEQUIN JACKET',
      price: '1290',
      color: 'blue',
      sex: 'kids',
      categories: 'Tops',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_0.jpg'),
          require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_1.jpg'),
          require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_3.jpg'),
          require('../assets/products/PAPER_PLANE_SEQUIN_JACKET_4.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '006',
      title: 'PAPER PLANE SEQUIN SHORTS',
      price: '990',
      color: 'blue',
      sex: 'kids',
      categories: 'Shorts',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_0.jpg'),
          require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_1.jpg'),
          require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_3.jpg'),
          require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_4.jpg'),
          require('../assets/products/PAPER_PLANE_SEQUIN_SHORTS_5.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '007',
      title: 'ALL THAT I AN DO TOP',
      price: '1290',
      color: 'pink',
      sex: 'women',
      categories: 'Tops',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/ALL_THAT_I_AN_DO_TOP_0.jpg'),
          require('../assets/products/ALL_THAT_I_AN_DO_TOP_1.jpg'),
          require('../assets/products/ALL_THAT_I_AN_DO_TOP_2.jpg'),
          require('../assets/products/ALL_THAT_I_AN_DO_TOP_3.jpg'),
          require('../assets/products/ALL_THAT_I_AN_DO_TOP_4.jpg'),
          require('../assets/products/ALL_THAT_I_AN_DO_TOP_5.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '008',
      title: 'GLISTEN TWEED STRAIGHT TROUSERS',
      price: '2290',
      color: 'white',
      sex: 'women',
      categories: 'Trousers',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_0.jpg'),
          require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_1.jpg'),
          require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_2.jpg'),
          require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_3.jpg'),
          require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_4.jpg'),
          require('../assets/products/GLISTEN_TWEED_STRAIGHT_TROUSERS_5.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '009',
      title: 'MATTER TANK TOP',
      price: '990',
      color: 'orange',
      sex: 'women',
      categories: 'Tops',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/MATTER_TANK_TOP_0.jpg'),
          require('../assets/products/MATTER_TANK_TOP_1.jpg'),
          require('../assets/products/MATTER_TANK_TOP_2.jpg'),
          require('../assets/products/MATTER_TANK_TOP_3.jpg'),
          require('../assets/products/MATTER_TANK_TOP_4.jpg')
      ],
      is_favourite: false,
  },
  {
      id: '010',
      title: 'THIS TIME MINI SKIRT',
      price: '1290',
      color: 'pink',
      sex: 'women',
      categories: 'Skirts',
      detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
      listImg: [
          require('../assets/products/THIS_TIME_MINI_SKIRT_0.jpg'),
          require('../assets/products/THIS_TIME_MINI_SKIRT_1.jpg'),
          require('../assets/products/THIS_TIME_MINI_SKIRT_2.jpg'),
          require('../assets/products/THIS_TIME_MINI_SKIRT_3.jpg'),
          require('../assets/products/THIS_TIME_MINI_SKIRT_4.jpg'),
          require('../assets/products/THIS_TIME_MINI_SKIRT_5.jpg')
      ],
      is_favourite: false,
  },
  {
    id: '011',
    title: 'GRAPHIC PRINT HOODIE',
    price: '4290',
    color: 'brown',
    sex: 'men',
    categories: 'Hoodies & Sweatshirts',
    detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
    listImg: [
        require('../assets/products/GRAPHIC_PRINT_HOODIE_0.jpg'),
        require('../assets/products/GRAPHIC_PRINT_HOODIE_1.jpg'),
        require('../assets/products/GRAPHIC_PRINT_HOODIE_2.jpg'),
        require('../assets/products/GRAPHIC_PRINT_HOODIE_3.jpg'),
        require('../assets/products/GRAPHIC_PRINT_HOODIE_4.jpg'),
        require('../assets/products/GRAPHIC_PRINT_HOODIE_5.jpg')
    ],
    is_favourite: false,
},
{
  id: '012',
  title: 'GRAPHIC T-SHIRT',
  price: '2290',
  color: 'purple',
  sex: 'men',
  categories: 'T-Shirts & Tops',
  detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
  listImg: [
      require('../assets/products/GRAPHIC_TSHIRT_0.jpg'),
      require('../assets/products/GRAPHIC_TSHIRT_1.jpg'),
      require('../assets/products/GRAPHIC_TSHIRT_2.jpg'),
      require('../assets/products/GRAPHIC_TSHIRT_3.jpg'),
      require('../assets/products/GRAPHIC_TSHIRT_4.jpg'),
      require('../assets/products/GRAPHIC_TSHIRT_5.jpg')
  ],
  is_favourite: false,
},
{
  id: '013',
  title: 'PRINTED TRAINING SHORTS',
  price: '1990',
  color: 'white',
  sex: 'men',
  categories: 'Shorts',
  detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
  listImg: [
      require('../assets/products/PRINTED_TRAINING_SHORTS_0.jpg'),
      require('../assets/products/PRINTED_TRAINING_SHORTS_1.jpg'),
      require('../assets/products/PRINTED_TRAINING_SHORTS_2.jpg'),
      require('../assets/products/PRINTED_TRAINING_SHORTS_3.jpg'),
      require('../assets/products/PRINTED_TRAINING_SHORTS_4.jpg'),
      require('../assets/products/PRINTED_TRAINING_SHORTS_5.jpg')
  ],
  is_favourite: false,
},
{
  id: '014',
  title: 'SUIT BLAZER',
  price: '5490',
  color: 'blue',
  sex: 'men',
  categories: 'T-Shirts & Tops',
  detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
  listImg: [
      require('../assets/products/SUIT_BLAZER_0.jpg'),
      require('../assets/products/SUIT_BLAZER_1.jpg'),
      require('../assets/products/SUIT_BLAZER_2.jpg'),
      require('../assets/products/SUIT_BLAZER_3.jpg'),
      require('../assets/products/SUIT_BLAZER_4.jpg'),
      require('../assets/products/SUIT_BLAZER_5.jpg')
  ],
  is_favourite: false,
},
{
  id: '015',
  title: 'TECHNICAL WINDBREAKER JACKET',
  price: '3790',
  color: 'blue',
  sex: 'men',
  categories: 'Jackets',
  detail: 'Lorem Ipsum is simply dummy text of the printing setting industry',
  listImg: [
      require('../assets/products/TECHNICAL_WINDBREAKER_JACKET_0.jpg'),
      require('../assets/products/TECHNICAL_WINDBREAKER_JACKET_1.jpg'),
      require('../assets/products/TECHNICAL_WINDBREAKER_JACKET_2.jpg'),
      require('../assets/products/TECHNICAL_WINDBREAKER_JACKET_3.jpg'),
      require('../assets/products/TECHNICAL_WINDBREAKER_JACKET_4.jpg')
  ],
  is_favourite: false,
},
]
import Forgot from "../views/forgotPassword.vue"
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
    props:{ products: product},
  },
  {
    path:"/product/:sex/:category",
    name: "productCategory",
    component: Product,
    props:{ products: product},
  },
  {
    path:'/productDetail/:title',
    name: "productDetail",
    component: productDetail,
    props:{ products : product },
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
  {
    path: "/mypurchase",
    name: "mypurchase",
    component: Purchase
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
// https://router.vuejs.org/guide/essentials/dynamic-matching.html