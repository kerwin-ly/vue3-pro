<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <hook-view></hook-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import HookView from '@/components/Hook.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    HookView
  },
  beforeCreate() {
    console.log('----beforeCreate----');
  },
  created() {
    console.log('----created----');
  },
  setup() {
    console.log('----setup----');
  }
});
</script>
