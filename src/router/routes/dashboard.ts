import { RouteRecordRaw } from 'vue-router';
import { useI18n } from '@/hooks/useI18n';

const { t } = useI18n();
export const dashboardRoutes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: { name: 'dashboard' },
    meta: {
      title: t('routes.dashboard.dashboard')
    }
  },
  {
    path: 'dashboard',
    name: 'dashboard',
    meta: {
      title: t('routes.dashboard.dashboard')
    },
    component: () => import('@/modules/dashboard/views/Index.vue')
  }
];
