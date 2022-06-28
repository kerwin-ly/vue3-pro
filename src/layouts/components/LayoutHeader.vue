<template>
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed(collapsed)" />
    <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed(collapsed)" />
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useLayout from '../useLayout';

export default defineComponent({
  name: 'LayoutHeader',
  setup() {
    const { collapsed } = useLayout();
    return {
      collapsed
    };
  }
});
</script>
