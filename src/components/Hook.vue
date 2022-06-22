<template>
  <div class="homePage">
    <p>count:{{ count }}</p>
    <p>倍数：{{ multiple }}</p>
    <div>
      <button style="margin-right: 10px" @click="increase()">加1</button>
      <button @click="decrease()">减一</button>
    </div>
  </div>
</template>
<script lang="ts">
import useCount from '@/hooks/useCount';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Hook',
  components: {},
  setup() {
    const { count, multiple, increase, decrease } = useCount(10);
    return {
      count,
      multiple,
      increase,
      decrease
    };
  }
});
</script>
