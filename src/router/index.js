// 增加注释
import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/home";
import City from "@/components/city/city";
import Detail from "@/components/Detail/detail";
import week from "@/components/week/week";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/city",
      component: City,
    },
    {
      path: "/detail:id",
      name: "detailLink",
      component: Detail,
    },
    {
      path: "/week:id",
      name: "weekLink",
      component: week,
    },
  ],
});
