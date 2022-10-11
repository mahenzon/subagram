<script setup lang="ts">
import { computed, ref } from 'vue'
import { Todo, Meta } from './models'

interface Props {
  title: string;
  todos?: Todo[];
  meta: Meta;
  active: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  todos: () => [],
})

const clickCount = ref(0)
function increment() {
  clickCount.value += 1
  return clickCount.value
}

const todoCount = computed(() => props.todos.length)

const knownColors = ref<string[]>([
  'primary',
  'secondary',
  'accent',
  'dark',
  // 'dark-page',
  'positive',
  'negative',
  'info',
  'warning',
])
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
        @click="increment"
      >
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>
    <h1>This is an about page</h1>
    <div>
      <q-btn
        color="primary"
        label="Show a notification"
        @click="$q.notify('Some message')"
      />
      <div

        v-for="color in knownColors"
        :key="color"
      >
        <q-btn
          class="q-my-sm"
          :color="color"
        >
          Button {{ color }}
        </q-btn>
        <q-btn
          class="q-ml-sm"
          outline
          :color="color"
        >
          Button {{ color }}
        </q-btn>
      </div>
    </div>
  </div>
</template>
