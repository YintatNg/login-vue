import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Login from "@/pages/Login/Login";

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/",
    component: Login,
    name: "登录"
  }
];
export default new Router({
  routes: constantRouterMap
});
