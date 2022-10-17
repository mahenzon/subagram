<script setup lang="ts">
import WordCardsList from 'components/words/WordCardsList.vue'
import { useWordsStore } from 'stores/words'

const wordsStore = useWordsStore()
</script>

<template>
  <q-page class="justify-evenly">
    <template v-if="wordsStore.hasWords">
      <div class="row">
        <div class="col q-pa-md text-h3">
          {{ $t('wordsList.continue') }}
        </div>
      </div>
      <div class="row">
        <WordCardsList class="col" />
      </div>
    </template>
    <template v-else>
      <div class="row">
        <div class="col q-pa-md text-h3">
          {{ $t('wordsList.noWords') }}
        </div>
      </div>
      <div class="row">
        <div class="col col q-px-md">
          <q-btn
            size="lg"
            color="accent"
            :to="{ name: 'create-word' }"
          >
            {{ $t('wordsList.createNew') }}
          </q-btn>
        </div>
      </div>
    </template>
  </q-page>
</template>
