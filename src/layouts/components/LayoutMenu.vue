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

<script lang="ts">
import { PieChartOutlined } from '@ant-design/icons-vue';
import { defineComponent, PropType } from 'vue';
import { Menu } from '../types';
import LayoutSubMenu from './LayoutSubMenu.vue';

export default defineComponent({
  name: 'LayoutMenu',
  components: {
    LayoutSubMenu,
    PieChartOutlined
  },
  props: {
    menus: {
      type: Array as PropType<Menu[]>,
      default: () => []
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    console.log(props.collapsed);

    return {};
  }
});
</script>
