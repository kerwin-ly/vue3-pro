<template>
  <Dropdown placement="topLeft">
    <div>
      <Avatar :src="avatar" :alt="userName" :size="24"></Avatar>
      <span class="username ml-sm">{{ userName }}</span>
    </div>

    <template #overlay>
      <Menu>
        <Menu.Item @click="$router.push({ name: 'account-about' })">
          {{ $t('routes.account.about') }}
        </Menu.Item>
        <Menu.Item @click="$router.push({ name: 'account-settings' })">
          {{ $t('routes.account.settings') }}
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <div @click.prevent="doLogout">
            <PoweroffOutlined />
            {{ $t('layout.header.dropdownItemLoginOut') }}
          </div>
        </Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>
<script lang="tsx" setup>
import { useUserStore } from '@/store/modules';
import { QuestionCircleOutlined, PoweroffOutlined } from '@ant-design/icons-vue';
import { computed } from '@vue/reactivity';
import { Dropdown, Avatar, Menu, Modal } from 'ant-design-vue';
// import { RouteRecordRaw, useRoute, useRouter } from 'vue-router';

// const emit = defineEmits(['update:collapsed']);
// const route = useRoute();
// const router = useRouter();
const userStore = useUserStore();
const userName = computed(() => userStore.name);
const avatar = computed(() => userStore.avatar);

const doLogout = () => {
  Modal.confirm({
    title: '您确定要退出登录吗？',
    icon: <QuestionCircleOutlined />,
    centered: true,
    onOk: async () => {
      // todo: redirect to login page
    }
  });
};
</script>
