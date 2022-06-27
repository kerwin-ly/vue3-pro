<template>
  <a-menu mode="inline" theme="dark" :inline-collapsed="collapsed">
    <template v-for="item in list" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <layout-sub-menu :key="item.key" :menu-info="item" />
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import { PieChartOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import useLayout from '../useLayout';
import LayoutSubMenu from './LayoutSubMenu.vue';

export default defineComponent({
  name: 'LayoutMenu',
  components: {
    LayoutSubMenu,
    PieChartOutlined
  },
  setup() {
    const { collapsed } = useLayout();
    return {
      list: [
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
      ],
      collapsed
    };
  }
});
</script>
