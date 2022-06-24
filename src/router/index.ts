import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { union } from 'lodash-es';
import Login from '@/modules/system/views/Login.vue';
import { dashboardRoutes } from './routes/dashboard';

const routes: RouteRecordRaw[] = union([
  {
    path: '/',
    name: 'home',
    component: () => import('@/modules/home/views/Home.vue'),
    children: union(dashboardRoutes)
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
  routes
});

export default router;
