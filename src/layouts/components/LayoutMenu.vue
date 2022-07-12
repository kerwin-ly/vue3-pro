<template>
  <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed">
    <template v-for="item in menus" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <layout-sub-menu :key="item.key" :menu-item="item" />
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts" setup>
import { PieChartOutlined } from '@ant-design/icons-vue';
import { PropType } from 'vue';
import { Menu } from '../types';
import LayoutSubMenu from './LayoutSubMenu.vue';

defineProps({
  menus: {
    type: Array as PropType<Menu[]>,
    default: () => []
  },
  collapsed: {
    type: Boolean,
    default: false
  }
});
</script>
