import { RouteRecordRaw } from 'vue-router';

export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: { name: 'dashboard' }
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    meta: {
      name: '首页'
    },
    component: () => import('@/modules/dashboard/views/Index.vue')
  }
];
