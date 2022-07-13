<template>
  <SubMenu :key="menuItem.key">
    <template #icon>
      <MailOutlined />
    </template>
    <template #title>{{ menuItem.title }}</template>
    <template v-for="item in menuItem.children" :key="item.key">
      <template v-if="!item.children">
        <Menu.Item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </Menu.Item>
      </template>
      <template v-else>
        <LayoutSubMenu :menu-item="item" :key="item.key" />
      </template>
    </template>
  </SubMenu>
</template>

<script lang="ts" setup>
import { MailOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import type { PropType } from 'vue';
import type { Menu as IMenu } from '../typing';
import { Menu, SubMenu } from 'ant-design-vue';

defineProps({
  menuItem: {
    type: Object as PropType<IMenu>,
    default: () => ({})
  }
});
</script>
