import { type RouteRecordRaw } from 'vue-router';
import { defineStore } from 'pinia';
import { store } from '@/store';

import { ACCESS_TOKEN_KEY } from '@/enums/cacheEnum';

interface UserState {
  token: string;
  name: string;
  avatar: string;
  // like [ 'sys:user:add', 'sys:user:update' ]
  perms: string[];
  menus: RouteRecordRaw[];
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: localStorage.getItem(ACCESS_TOKEN_KEY) || '',
    name: 'amdin',
    avatar: 'https://qn.antdv.com/vue.png',
    perms: [],
    menus: []
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
    getAvatar(): string {
      return this.avatar;
    },
    getName(): string {
      return this.name;
    },
    getPerms(): string[] {
      return this.perms;
    }
  },
  actions: {
    /** 清空token及用户信息 */
    resetToken() {
      this.avatar = this.token = this.name = '';
      this.perms = [];
      this.menus = [];
      localStorage.clear();
    },
    /** 登录成功保存token */
    setToken(token: string) {
      this.token = token ?? '';
      localStorage.setItem(ACCESS_TOKEN_KEY, this.token);
    }
  }
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
