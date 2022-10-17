<script setup lang="ts">
import { useWordsStore } from 'stores/words'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import AnagramsList from 'components/words/AnagramsList.vue'
import AddAnagramInput from 'components/words/AddAnagramInput.vue'
import PageUpScroller from 'components/common/PageUpScroller.vue'
import { computed } from 'vue'

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
    <AnagramsList
      :word="word"
    />

    <PageUpScroller />

    <!-- place QPageSticky at end of page -->
    <q-page-sticky
      expand
      position="top"
    >
      <q-toolbar class="bg-accent text-white">
        <q-toolbar-title>
          <div class="q-my-sm text-bold fit text-capitalize">
            {{ word.text }}
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>

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
  </q-page>
</template>
