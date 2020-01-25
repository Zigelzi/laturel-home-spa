import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/style.scss";
import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";

Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:5000/";

// Set Axios interceptor to inject the JWT to all requests
axios.interceptors.request.use(config => {
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  if (userToken) {
    config.headers.Authorization = "Bearer " + userToken;
  }
  return config;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
