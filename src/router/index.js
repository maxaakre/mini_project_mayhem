import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";
import Staff from "../views/Staff.vue";
import Admin from "../views/Admin.vue";

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
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
