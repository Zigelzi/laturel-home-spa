import Vue from "vue";
import VueRouter from "vue-router";
import Overview from "@/views/Overview";
import HousingAssociation from "@/views/HousingAssociation";
import Apartments from "@/views/Apartments";
import Services from "@/views/Services";
import Communications from "@/views/Communications";
import AllHousingAssociations from "@/views/AllHousingAssociations";
import Settings from "@/views/Settings";
import Login from "@/views/Login";
import CreateAccount from "@/views/CreateAccount";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "overview",
    component: Overview
  },
  {
    path: "/taloyhtio",
    name: "housingAssociation",
    component: HousingAssociation
  },
  {
    path: "/huoneistot",
    name: "apartments",
    component: Apartments
  },
  {
    path: "/huolto",
    name: "services",
    component: Services
  },
  {
    path: "/tiedotteet",
    name: "communications",
    component: Communications
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
    path: "/huolto",
    name: "repairs"
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
