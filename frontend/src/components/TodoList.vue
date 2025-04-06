
<script lang="ts">

/** Todoリスト */
interface TodoList {
  id: number;
  text: string;
  completed: boolean;
}

</script>
<template>
  <div>
    <v-list v-if="todos.length > 0">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-todo="$emit('delete-todo', todo.id)"
        @toggle-todo="$emit('toggle-todo', todo.id)"
      />
    </v-list>
    <v-alert v-else type="info" text class="mt-3">
      TODOがありません。新しいTODOを追加してください。
    </v-alert>
  </div>
</template>
