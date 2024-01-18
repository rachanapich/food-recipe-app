import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RecipeDetail from "../components/RecipeDetail.vue";
import CreateRecipe from "../components/CreateRecipe.vue";
import LandingPageVue from "@/components/LandingPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/recipes",
    name: "recipes",
    component: LandingPageVue,
  },
  {
    path: "/recipe/:recipeId",
    name: "recipeDetail",
    component: RecipeDetail,
  },
  {
    path: "/create",
    name: "createRecipe",
    component: CreateRecipe,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
