<script setup lang="ts">
import { ref } from 'vue'
import { WordDetails } from 'src/interfaces'

export interface WordCardProps {
  word: WordDetails,
}

defineProps<WordCardProps>()

const pushPinIcon = ref('push_pin')
// const pushPinIcon = ref('o_push_pin')
</script>

<template>
  <q-card
    class="cursor-pointer"
  >
    <q-card-section
      class="q-mr-auto"
      @click="$router.push({ name: 'word-details', params: { word: word.text } })"
    >
      <div class="text-h6 text-capitalize ellipsis">
        {{ word.text }}
      </div>
      <div class="text-subtitle2">
        {{ $t('wordCard.foundCount', word.anagrams.length) }}
      </div>
    </q-card-section>
    <q-card-section horizontal>
      <q-btn
        flat
        color="yellow-9"
        :icon="pushPinIcon"
        @click="$q.notify('TODO pin')"
      />
      <q-btn
        flat
        color="green"
        icon="file_upload"
        @click="$q.notify('TODO export')"
      />
      <q-btn
        class="q-mr-auto"
        flat
        color="primary"
        icon="share"
        @click="$q.notify('TODO share')"
      />
      <q-btn
        flat
        color="red"
        icon="delete"
        @click="$q.notify('TODO delete')"
      />
    </q-card-section>
  </q-card>
</template>
