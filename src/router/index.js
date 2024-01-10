import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeViewVue from '@/views/RecipeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe-detail',
    name: 'recipe-detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailOfRecipeView.vue')
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipeViewVue
    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
