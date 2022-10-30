<script setup lang="ts">
import { Anagram } from 'src/interfaces'

export interface IAnagramItemProps {
  anagram: Anagram,
}

defineProps<IAnagramItemProps>()

interface IEmits {
  // eslint-disable-next-line no-unused-vars
  (e: 'delete', anagram: Anagram): void,
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
        {{ anagram.text }}
      </q-item-label>
    </q-item-section>
    <q-item-section side>
      <q-btn
        flat
        dense
        color="red"
        icon="delete"
        @click="emit('delete', anagram)"
      />
    </q-item-section>
  </q-item>
</template>
