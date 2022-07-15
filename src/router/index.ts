import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { union } from 'lodash-es';
import Login from '@/views/system/pages/Login.vue';
import { dashboardRoutes } from './routes/dashboard';
import { App } from 'vue';
import { userRoutes } from './routes/user';
import { useI18n } from '@/hooks/useI18n';

const { t } = useI18n();

const routes: RouteRecordRaw[] = union([
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    children: union(dashboardRoutes, userRoutes),
    meta: {
      title: t('routes.dashboard.home')
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
