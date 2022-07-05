import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { union } from 'lodash-es';
import Login from '@/modules/system/views/Login.vue';
import { dashboardRoutes } from './routes/dashboard';
import { App } from 'vue';

const routes: RouteRecordRaw[] = union([
  {
    path: '/',
    component: () => import('@/layouts/Index.vue'),
    children: union(dashboardRoutes),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'login' }
  }
]);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  strict: true, // '/' slash is not allowed at the end of URL.
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
