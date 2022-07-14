<template>
  <div class="logo">
    <img src="../../../assets/images/logo.png" alt="" data-v-6e24d36a="" />
  </div>
  <Menu mode="inline" theme="dark" :inline-collapsed="collapsed" @click="navigate">
    <template v-for="item in menus" :key="item.key">
      <template v-if="!item.children">
        <Menu.Item :key="item.key">
          <template #icon>
            <Component :is="item.icon" />
          </template>
          {{ item.name }}
        </Menu.Item>
      </template>
      <template v-else>
        <LayoutSubMenu :key="item.key" :menu-item="item" />
      </template>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Menu as IMenu } from './typing';
import { Menu } from 'ant-design-vue';
import { LayoutSubMenu } from './';
import { useRoute, useRouter } from 'vue-router';

defineProps({
  menus: {
    type: Array as PropType<IMenu[]>,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: false
  }
});
const currentRoute = useRoute();
const router = useRouter();
const navigate = (params) => {
  const { key } = params;

  if (key === currentRoute.name) return;
  if (/http(s)?:/.test(key)) {
    window.open(key);
  } else {
    router.push({ name: key });
  }
};
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  height: @header-height;
  line-height: @header-height;

  img {
    height: 100%;
    padding: 5px;
  }
}
</style>
