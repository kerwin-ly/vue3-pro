<template>
  <div class="about">
    <bv-header />
    <bv-sidebar />
    <div class="content-box">
      <!-- <v-tags></v-tags> -->
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition name="move" mode="out-in">
            <!-- <keep-alive :include="tagsList"> -->
            <component :is="Component" />
            <!-- </keep-alive> -->
          </transition>
        </router-view>
        <!-- <el-backtop target=".content"></el-backtop> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
// import { useStore } from 'vuex';
import BvHeader from '../components/Header.vue';
import BvSidebar from '../components/Sidebar.vue';
// import vTags from '../components/Tags.vue';

export default defineComponent({
  components: {
    BvHeader,
    BvSidebar
  },
  setup() {
    // const store = useStore();
    // const tagsList = computed(() => store.state.tagsList.map((item) => item.name));
    // const collapse = computed(() => store.state.collapse);
    // return {
    //   tagsList,
    //   collapse
    // };
  }
});
</script>
