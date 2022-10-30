<script setup lang="ts">
import { useWordsStore } from 'stores/words'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import AnagramsList from 'components/words/AnagramsList.vue'
import PageUpScroller from 'components/common/PageUpScroller.vue'
import { computed } from 'vue'
import WordDetailsStickyTitle from 'components/words/WordDetailsStickyTitle.vue'
import WordDetailsFooter from 'components/words/WordDetailsFooter.vue'

const wordsStore = useWordsStore()
const route = useRoute()

const word = computed(() => wordsStore.words[route.params.word as string])

onBeforeRouteUpdate((to, from, next) => {
  const wordText = to.params.word as string
  if (wordsStore.words[wordText]) {
    next()
  } else {
    next({ name: 'create-word', query: { word: wordText } })
  }
})
</script>

<template>
  <q-page
    padding
    style="padding-top: 60px"
  >
    <AnagramsList :word="word" />

    <WordDetailsFooter :word="word" />

    <PageUpScroller />

    <!-- place QPageSticky at end of page -->
    <WordDetailsStickyTitle :text="word.text" />
  </q-page>
</template>
