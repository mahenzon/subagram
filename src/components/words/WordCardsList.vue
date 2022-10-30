<script setup lang="ts">
import { ref } from 'vue'

import { useWordsStore } from 'stores/words'
import PageUpScroller from 'components/common/PageUpScroller.vue'
import AddWordFAB from 'components/common/AddWordFAB.vue'
import WordCard from './WordCard.vue'

const wordsStore = useWordsStore()

const confirmDelete = ref(false)
</script>

<template>
  <div class="q-mb-xl q-px-md row items-start q-gutter-md">
    <WordCard
      v-for="word in wordsStore.words"
      :key="word.text"
      class="col-xs-12 col-md-3"
      :word="word"
    />

    <!-- modal dialog -->

    <q-dialog
      v-model="confirmDelete"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="signal_wifi_off"
            color="primary"
            text-color="white"
          />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            label="Cancel"
            color="primary"
          />
          <q-btn
            v-close-popup
            flat
            label="Turn on Wifi"
            color="primary"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Navigation below -->
    <AddWordFAB />
    <PageUpScroller />
  </div>
</template>
