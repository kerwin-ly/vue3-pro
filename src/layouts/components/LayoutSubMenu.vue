<template>
  <a-sub-menu :key="menuItem.key">
    <template #icon>
      <MailOutlined />
    </template>
    <template #title>{{ menuItem.title }}</template>
    <template v-for="item in menuItem.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <layout-sub-menu :menu-item="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { MailOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import { defineComponent, PropType } from 'vue';
import { Menu } from '../types';

export default defineComponent({
  name: 'LayoutSubMenu',
  components: {
    MailOutlined,
    PieChartOutlined
  },
  props: {
    menuItem: {
      type: Object as PropType<Menu>,
      default: () => ({})
    }
  }
});
</script>
