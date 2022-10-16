<script setup lang="ts">
export interface WordCardProps {
  word: string,
  wordsCount: number,
}
withDefaults(defineProps<WordCardProps>(), {
  word: '',
  wordsCount: 0,
})
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">
        {{ word }}
      </div>
      <div class="text-subtitle2">
        {{ $t('wordCard.foundCount', wordsCount) }}
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn flat>
        {{ $t('wordCard.continue') }}
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
