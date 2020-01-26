import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import AllHousingAssociations from "@/views/AllHousingAssociations.vue";
import Settings from "@/views/Settings.vue";
import Login from "@/views/Login.vue";
import CreateAccount from "@/views/CreateAccount";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/kaikki_taloyhtiot",
    name: "allHa",
    component: AllHousingAssociations
  },
  {
    path: "/asetukset",
    name: "settings",
    component: Settings
  },
  {
    path: "/kirjaudu",
    name: "login",
    component: Login
  },
  {
    path: "/rekisteroidy",
    name: "createAccount",
    component: CreateAccount
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
