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
      <Dropdown placement="topLeft" class="layout-header-right-item">
        <div>
          <Avatar :src="avatar" :alt="userName" :size="24"></Avatar>
          <span class="username ml-sm">{{ userName }}</span>
        </div>

        <template #overlay>
          <Menu>
            123
            <!-- <Menu.Item @click="$router.push({ name: 'account-about' })">
              {{ $t('routes.account.about') }}
            </Menu.Item>
            <Menu.Item @click="$router.push({ name: 'account-settings' })">
              {{ $t('routes.account.settings') }}
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
              <div @click.prevent="doLogout">
                <poweroff-outlined />
                {{ $t('layout.header.dropdownItemLoginOut') }}
              </div>
            </Menu.Item> -->
          </Menu>
        </template>
      </Dropdown>
    </Space>
  </Layout.Header>
</template>

<script lang="tsx" setup>
import { useUserStore } from '@/store/modules';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { computed } from '@vue/reactivity';
import { Breadcrumb, Layout, Space, Dropdown, Avatar } from 'ant-design-vue';
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';

const props = defineProps({
  collapsed: {
    type: Boolean
  }
});
const emit = defineEmits(['update:collapsed']);
const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const userName = computed(() => userStore.name);
const avatar = computed(() => userStore.avatar);

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
