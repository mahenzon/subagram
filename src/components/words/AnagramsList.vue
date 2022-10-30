<script setup lang="ts">
import { useQuasar } from 'quasar'
import { Anagram, WordDetails } from 'src/interfaces'
import { wordsCrud } from 'src/crud'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useWordsStore } from 'stores/words'
import AnagramItem from './AnagramItem.vue'

export interface IAnagramListProps {
  word: WordDetails,
}

const $q = useQuasar()
const props = defineProps<IAnagramListProps>()
const { t } = useI18n({ useScope: 'global' })
const wordsStore = useWordsStore()

const sortedAnagrams = computed(() => {
  const word = wordsStore.words[props.word.text]
  return word.anagrams.sort(
    (a, b) => a.text.localeCompare(b.text),
  )
})

function deleteAnagram(anagram: Anagram) {
  wordsCrud.deleteAnagram(props.word, anagram)
  $q.notify({
    message: t('wordDetails.anagramDeleted', { word: anagram.text }),
    actions: [
      {
        label: t('wordDetails.anagramDeletedUndo'),
        async handler() {
          await wordsCrud.addAnagramToWord(props.word, anagram.text)
        },
      },
    ],
  })
}
</script>
<template>
  <div class="q-my-sm text-h5">
    {{ $t('wordDetails.wordsCount') }}
    {{ word.anagrams.length }}
  </div>
  <q-list
    bordered
    separator
  >
    <AnagramItem
      v-for="(anagram, index) in sortedAnagrams"
      :key="index"
      :anagram="anagram"
      @delete="deleteAnagram"
    />
  </q-list>
</template>
