<template>
  <Layout>
    <Layout.Sider :trigger="null" collapsible :collapsed="collapsed">
      <LayoutMenu :menus="menus"></LayoutMenu>
    </Layout.Sider>
    <Layout>
      <layout-header v-model:collapsed="collapsed"></layout-header>
      <Layout.Content>
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </Layout.Content>
    </Layout>
  </Layout>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { LayoutMenu } from '@/layouts/components/Menu';
import { LayoutHeader } from './components/Header';
import { Layout } from 'ant-design-vue';
import { useI18n } from '@/hooks/useI18n';

const collapsed = ref<boolean>(false);
const { t } = useI18n();
const menus = reactive([
  {
    key: 'dashboard',
    icon: 'PieChartOutlined',
    name: t('routes.dashboard.dashboard')
  },
  {
    key: 'user',
    name: t('routes.user.user'),
    icon: 'UserOutlined',
    children: [{ key: 'user-list', name: t('routes.user.userList') }]
  }
]);
</script>
<style lang="less">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: @header-height;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout {
  height: 100vh;
}
</style>
