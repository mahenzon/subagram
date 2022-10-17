<script setup lang="ts">
import { WordDetails } from 'stores/words'

export interface WordCardProps {
  word: WordDetails,
}
defineProps<WordCardProps>()
</script>

<template>
  <q-card
    class="cursor-pointer"
    @click="$router.push({ name: 'word-details', params: { word: word.text } })"
  >
    <q-card-section>
      <div class="text-h6 text-capitalize">
        {{ word.text }}
      </div>
      <div class="text-subtitle2">
        {{ $t('wordCard.foundCount', word.anagrams.length) }}
      </div>
    </q-card-section>
  </q-card>
</template>
