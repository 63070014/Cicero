import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
// import Vuelidate from 'vuelidate'
createApp(App).use(router).mount("#app");
