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
    avatar: 'https://p9-passport.byteacctimg.com/img/user-avatar/96216b36a0912cddd0719b7c551b7c25~300x300.image',
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
    clearUserInfo() {
      this.avatar = this.token = this.name = '';
      this.perms = [];
      this.menus = [];
      localStorage.clear();
    },
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
