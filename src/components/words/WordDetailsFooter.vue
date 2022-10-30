<script setup lang="ts">
import AddAnagramInput from 'components/words/AddAnagramInput.vue'
import { WordDetails } from 'src/interfaces'

export interface WordDetailsFooter {
  word: WordDetails;
}

defineProps<WordDetailsFooter>()
</script>

<template>
  <q-footer
    reveal
    elevated
    :class="[$q.dark.isActive ? 'bg-dark' : 'bg-grey-1']"
  >
    <q-toolbar>
      <q-toolbar-title class="row">
        <AddAnagramInput :word="word" />
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>
