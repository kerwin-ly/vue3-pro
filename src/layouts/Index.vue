<template>
  <Layout>
    <Layout.Sider :trigger="null" collapsible :collapsed="collapsed">
      <LayoutMenu :menus="menus"></LayoutMenu>
    </Layout.Sider>
    <Layout>
      <layout-header v-model:collapsed="collapsed"></layout-header>
      <Layout.Content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
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
    key: '1',
    title: t('routes.dashboard.dashboard')
  },
  {
    key: '2',
    title: 'User',
    children: [
      {
        key: '2.1',
        title: 'User Info',
        children: [{ key: '2.1.1', title: 'User List' }]
      }
    ]
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
