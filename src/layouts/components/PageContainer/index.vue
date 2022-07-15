<template>
  <div class="layout-page-container">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  class: {
    type: String
  }
});
</script>

<style lang="less">
@container-margin-height: 24px;
@container-margin-width: 16px;

.layout-page-container {
  margin: @container-margin-height @container-margin-width;
  background: #fff;
  min-height: calc(100vh - @header-height - @container-margin-height * 2);
}
</style>
