<template>
  <Menu mode="inline" theme="dark" :inline-collapsed="collapsed">
    <template v-for="item in menus" :key="item.key">
      <template v-if="!item.children">
        <Menu.Item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </Menu.Item>
      </template>
      <template v-else>
        <LayoutSubMenu :key="item.key" :menu-item="item" />
      </template>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { PieChartOutlined } from '@ant-design/icons-vue';
import type { PropType } from 'vue';
import type { Menu as IMenu } from './typing';
import { Menu } from 'ant-design-vue';
import { LayoutSubMenu } from './';

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
</script>
