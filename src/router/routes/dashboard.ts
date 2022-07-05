import { RouteRecordRaw } from 'vue-router';

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: { name: 'dashboard' },
    meta: {
      title: 'Home'
    }
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    meta: {
      title: 'Dashboard'
    },
    component: () => import('@/modules/dashboard/views/Index.vue')
  }
];
