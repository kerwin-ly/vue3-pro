<template>
  <Layout.Header class="layout-header">
    <Space :size="20" class="layout-header-left">
      <span @click="toggle()">
        <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined" />
      </span>
      <Breadcrumb class="ml-sm">
        <template v-for="routeItem in route.matched" :key="routeItem?.name">
          <Breadcrumb.Item @click="navigate(routeItem)">
            <span>{{ routeItem.meta?.title }}</span>
          </Breadcrumb.Item>
        </template>
      </Breadcrumb>
    </Space>

    <Space :size="20">
      <div class="layout-header-right-item">
        <LocalePicker />
      </div>
      <div class="layout-header-right-item">
        <PersonalSettings />
      </div>
    </Space>
  </Layout.Header>
</template>

<script lang="tsx" setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { Breadcrumb, Layout, Space } from 'ant-design-vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';
import LocalePicker from './components/LocalePicker.vue';
import PersonalSettings from './components/PersonalSettings.vue';

const props = defineProps({
  collapsed: {
    type: Boolean
  }
});
const emit = defineEmits(['update:collapsed']);
const route = useRoute();
const router = useRouter();

function toggle(): void {
  emit('update:collapsed', !props.collapsed);
}

function navigate(routeItem: RouteRecordRaw): void {
  router.push({ name: routeItem.name });
}
</script>

<style lang="less" scoped>
.layout-header {
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  height: @header-height;
  line-height: @header-height;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  &-left {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &-right {
    &-item {
      padding: 0 10px;

      &:hover {
        background-color: #f6f6f6;
      }
    }
  }

  .username {
    color: #000000d9;
  }

  * {
    cursor: pointer;
  }
}
</style>
