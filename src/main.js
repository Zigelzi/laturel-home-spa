import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/style.scss";
import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:5000/";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
