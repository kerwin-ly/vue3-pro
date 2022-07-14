<template>
  <Menu.SubMenu :key="menuItem.key">
    <template #icon>
      <Component :is="menuItem.icon" />
    </template>
    <template #title>{{ menuItem.name }}</template>
    <template v-for="subItem in menuItem.children" :key="subItem.key">
      <template v-if="!subItem.children">
        <Menu.Item :key="subItem.key">
          {{ subItem.name }}
        </Menu.Item>
      </template>
      <template v-else>
        <LayoutSubMenu :menu-item="subItem" :key="subItem.key" />
      </template>
    </template>
  </Menu.SubMenu>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Menu as IMenu } from '../typing';
import { Menu } from 'ant-design-vue';

defineProps({
  menuItem: {
    type: Object as PropType<IMenu>,
    default: () => ({})
  }
});
</script>
