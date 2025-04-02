<script setup lang="ts">
import { onMounted } from 'vue';
import { UseTodoList } from './composables/useTodoList';
const { fetchTodoList } = UseTodoList();

// コンポーネントがマウントされたときにTodoリストを取得
onMounted(async () => {
  try {
    await fetchTodoList();
    console.log('Todoリストの取得に成功しました');
  } catch (error) {
    console.error('App.vueでのTodoリスト取得に失敗しました');
  }
});
</script>

<template>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>