<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-for="item in state.list" :key="item.id">{{ item.id }}{{ item.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props, context) {
    console.log('props is ', props.msg);
    console.log('context is ', context);

    const count = ref(0);
    const state = reactive({
      age: 27,
      name: 'kerwin',
      list: [
        {
          id: 1,
          name: 'bob'
        },
        {
          id: 2,
          name: 'kerwin'
        }
      ]
    });

    setTimeout(() => {
      count.value = 1000;
      state.age = 28;
      // state.list.push({ id: 3, name: 'jim' });
      state.list = [...state.list, { id: 3, name: 'jim' }];
    }, 1000);

    // watch某个基本类型
    watch(
      () => count.value,
      (cur: number, pre: number) => {
        console.log('watch ', cur, pre);
      }
    );
    const stopWatch = watch([() => state.age, () => state.name], ([curAge, preAge], [curName, preName]) => {
      console.log('watch age', curAge, preAge);
      console.log('watch name', curName, preName);
    });
    setTimeout(() => {
      stopWatch(); // 手动销毁监听（如果不手动销毁，组件销毁时也会自动销毁它）
    }, 3000);

    return {
      state
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
