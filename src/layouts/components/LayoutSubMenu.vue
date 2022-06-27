<template>
  <a-sub-menu :key="menuInfo.key">
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="!item.children">
        <a-menu-item :key="item.key">
          <template #icon>
            <PieChartOutlined />
          </template>
          {{ item.title }}
        </a-menu-item>
      </template>
      <template v-else>
        <layout-sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { MailOutlined, PieChartOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutSubMenu',
  components: {
    MailOutlined,
    PieChartOutlined
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
});
</script>
