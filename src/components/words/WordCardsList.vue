<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useWordsStore } from 'stores/words'
import PageUpScroller from 'components/common/PageUpScroller.vue'
import AddWordFAB from 'components/common/AddWordFAB.vue'
import WordCard from './WordCard.vue'

const wordsStore = useWordsStore()

const $q = useQuasar()

$q.loadingBar.start()
$q.loadingBar.stop()
</script>

<template>
  <div class="q-px-md row items-start q-gutter-md">
    <WordCard
      v-for="word in wordsStore.words"
      :key="word.text"
      class="col-xs-12 col-md-3"
      :word="word"
    />

    <!-- Navigation below -->
    <AddWordFAB />
    <PageUpScroller />
  </div>
</template>
