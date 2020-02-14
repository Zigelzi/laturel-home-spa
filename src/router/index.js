import Vue from "vue";
import VueRouter from "vue-router";

// Apartments views
import Apartments from "@/views/apartments/Apartments";

// Auth views
import Login from "@/views/auth/Login";
import CreateAccount from "@/views/auth/CreateAccount";

// Communication views
import Communication from "@/views/communication/Communication";

// Housing Association views
import HousingAssociation from "@/views/housing-association/HousingAssociation";

// Overview views
import Overview from "@/views/overview/Overview";

// Service views
import Service from "@/views/service/Service";
import CreateCategory from "@/views/service/CreateCategory";
import CreateRepair from "@/views/service/CreateRepair";

// General views
import AllHousingAssociations from "@/views/AllHousingAssociations";
import Settings from "@/views/Settings";

Vue.use(VueRouter);

const routes = [
  {
    path: "/yleiskatsaus",
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
    name: "service",
    component: Service
  },
  {
    path: "/tiedotteet",
    name: "communication",
    component: Communication
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
    name: "repair",
    component: Service,
    children: [
      {
        path: "luo_kategoria",
        name: "createCategory",
        component: CreateCategory
      },
      {
        path: "luo_korjaus",
        name: "createRepair",
        component: CreateRepair
      }
    ]
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
