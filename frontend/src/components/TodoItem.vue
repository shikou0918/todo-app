<template>
  <v-list-item>
    <v-list-item-action>
      <v-checkbox
        :input-value="todo.completed"
        @change="$emit('toggle-todo', todo.id)"
        color="primary"
      ></v-checkbox>
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title
        :class="{ 'text-decoration-line-through': todo.completed }"
      >
        {{ todo.text }}
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn icon @click="$emit('delete-todo', todo.id)">
        <v-icon color="red lighten-1">mdi-delete</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component
export default class TodoItem extends Vue {
  @Prop({ required: true }) todo!: Todo;
}
</script>
