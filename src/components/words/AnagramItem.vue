<script setup lang="ts">
import { Anagram } from 'stores/words'

export interface ISubwordItem {
  word: Anagram,
}

defineProps<ISubwordItem>()

interface IEmits {
  // eslint-disable-next-line no-unused-vars
  (e: 'delete', subwordText: string): void,
}
const emit = defineEmits<IEmits>()
</script>

<template>
  <!-- TODO: 'delete' button -->

  <q-item :clickable="false">
    <q-item-section>
      <q-item-label
        class="text-bold text-lowercase"
      >
        {{ word.text }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn
        dense
        color="red"
        icon="delete"
        @click="emit('delete', word.text)"
      />
    </q-item-section>
  </q-item>
</template>
