<template>
  <ConfigProvider :locale="getAntdLocale">
    <router-view #="{ Component }">
      <component :is="Component" />
    </router-view>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { ConfigProvider } from 'ant-design-vue';
import { transformI18n } from './hooks/useI18n';
import { useLocale } from '@/locales/useLocale';

const route = useRoute();
const { getAntdLocale } = useLocale();

watchEffect(() => {
  if (route.meta?.title) {
    document.title = transformI18n(route.meta.title as string);
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
