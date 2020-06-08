import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";
import Staff from "../views/Staff.vue";
import Admin from "../views/Admin.vue";
import Buy from "../views/Buy.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Events",
    component: Events,
  },
  {
    path: "/Staff",
    name: "Staff",
    component: Staff,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },


  {
    path: "/Buy",
    name: "Buy",
    component: Buy,

 }  
];

const router = new VueRouter({
  routes,
});

export default router;
