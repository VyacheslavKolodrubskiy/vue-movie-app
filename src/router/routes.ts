import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { beforeEachGuard } from './before-each-guard'
import { afterEachGuard } from './after-each-guard'
import { Pages } from '~/shared/enums'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Pages.Home,
    component: () => import('~/pages/Home.vue'),
  },
  {
    path: '/view/:type/:id',
    name: Pages.MovieView,
    component: () => import('~/pages/MovieView.vue'),
  },
  {
    path: '/view/actor/:id',
    name: Pages.ActorView,
    component: () => import('~/pages/ActorView.vue'),
  },
  {
    path: '/auth',
    name: Pages.Auth,
    component: () => import('~/pages/Auth.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: Pages.NotFound,
    component: () => import('~/pages/NotFound.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

beforeEachGuard(router)
afterEachGuard(router)
