<template>
  <a-layout-header class="layout-header">
    <!-- <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => emit('update:collapsed', !collapsed)" />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed(collapsed)" /> -->
    <span class="menu-fold" @click="toggle()">
      <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
    </span>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: 'LayoutHeader',
  components: { MenuFoldOutlined, MenuUnfoldOutlined },
  props: {
    collapsed: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    function toggle(): void {
      emit('update:collapsed', !props.collapsed);
    }

    return {
      toggle,
      MenuFoldOutlined,
      MenuUnfoldOutlined
    };
  }
});
</script>

<style lang="less" scoped>
.layout-header {
  background: #fff;
  padding: 0;
}
</style>
