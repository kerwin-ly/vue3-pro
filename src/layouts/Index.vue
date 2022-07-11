<template>
  <a-layout>
    <a-layout-sider :trigger="null" collapsible :collapsed="collapsed">
      <layout-menu :menus="menus"></layout-menu>
    </a-layout-sider>
    <a-layout>
      <layout-header v-model:collapsed="collapsed"></layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
import LayoutHeader from '@/layouts/components/LayoutHeader.vue';
import LayoutMenu from '@/layouts/components/LayoutMenu.vue';

export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LayoutHeader,
    LayoutMenu
  },
  setup() {
    // const { collapsed, toggleCollapsed } = useLayout();
    const collapsed = ref<boolean>(false);
    const menus = reactive([
      {
        key: '1',
        title: 'Dashboard'
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

    return {
      collapsed,
      menus
    };
  }
});
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
