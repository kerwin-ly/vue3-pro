<template>
  <a-layout-sider :trigger="null" collapsible>
    <div class="logo" />
    <layout-menu :collapsed="collapsed"></layout-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLayout from '../useLayout';
import LayoutMenu from './LayoutMenu.vue';

export default defineComponent({
  name: 'LayoutSidebar',
  components: {
    LayoutMenu
  },
  setup() {
    const { collapsed } = useLayout();
    return {
      collapsed
    };
  }
});
</script>
