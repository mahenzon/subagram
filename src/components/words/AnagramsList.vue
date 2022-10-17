<script setup lang="ts">
import { useWordsStore, WordDetails } from 'stores/words'
import { useQuasar } from 'quasar'
import AnagramItem from './AnagramItem.vue'

export interface IAnagramListProps {
  word: WordDetails,
}

const $q = useQuasar()
const props = defineProps<IAnagramListProps>()

const wordsStore = useWordsStore()
function deleteSubword(subwordText: string) {
  wordsStore.removeAnagram(props.word, subwordText)
  $q.notify({
    message: `Deleted word '${subwordText}'`,
    actions: [
      {
        label: 'Undo',
        handler() {
          wordsStore.addAnagram(props.word.text, subwordText)
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
      v-for="(anagramWord, index) in word.anagrams"
      :key="index"
      :word="anagramWord"
      @delete="deleteSubword"
    />
  </q-list>
</template>
