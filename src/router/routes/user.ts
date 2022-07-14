import { RouteRecordRaw } from 'vue-router';
import { useI18n } from '@/hooks/useI18n';

const { t } = useI18n();
export const userRoutes: RouteRecordRaw[] = [
  {
    path: '',
    redirect: { name: 'user-list' },
    meta: {
      title: t('routes.user.userList')
    }
  },
  {
    path: 'user-list',
    name: 'user-list',
    meta: {
      title: t('routes.user.userList')
    },
    component: () => import('@/modules/user/views/UserList.vue')
  }
];
