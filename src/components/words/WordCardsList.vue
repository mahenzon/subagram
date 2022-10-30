<script setup lang="ts">
import { ref } from 'vue'

import { useWordsStore } from 'stores/words'
import PageUpScroller from 'components/common/PageUpScroller.vue'
import AddWordFAB from 'components/common/AddWordFAB.vue'
import { WordDetails } from 'src/interfaces'
import { wordsCrud } from 'src/crud'
import WordCard from './WordCard.vue'

const wordsStore = useWordsStore()

const showModalConfirmDelete = ref<boolean>(false)
const confirmDeleteWord = ref<WordDetails | null>(null)

function handleDeleteClicked(word: WordDetails) {
  showModalConfirmDelete.value = true
  confirmDeleteWord.value = word
}

function handleDeleteWord() {
  if (confirmDeleteWord.value) {
    wordsCrud.deleteWord(confirmDeleteWord.value)
  }
  confirmDeleteWord.value = null
}
</script>

<template>
  <div class="q-mb-xl q-px-md row items-start q-gutter-md">
    <WordCard
      v-for="word in wordsStore.words"
      :key="word.text"
      class="col-xs-12 col-md-3"
      :word="word"
      @delete="handleDeleteClicked"
    />

    <!-- modal dialog -->

    <q-dialog
      v-model="showModalConfirmDelete"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-m-sm text-h6">
            {{ $t('wordConfirmDelete.q', { word: confirmDeleteWord?.text }) }}
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            :label="$t('wordConfirmDelete.cancel')"
            color="primary"
            @click="confirmDeleteWord = null"
          />
          <q-btn
            v-close-popup
            flat
            :label="$t('wordConfirmDelete.confirm')"
            color="negative"
            @click="handleDeleteWord"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Navigation below -->
    <AddWordFAB />
    <PageUpScroller />
  </div>
</template>
