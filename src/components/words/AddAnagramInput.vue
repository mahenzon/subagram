<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWordsStore, WordDetails } from 'stores/words'

import type { QInput } from 'quasar'
import { textIsAnagram } from 'src/misc/utils'

export interface IProps {
  word: WordDetails,
}

const props = defineProps<IProps>()

const newAnagram = ref<string | null>(null)
const newAnagramRef = ref(null)

const wordsStore = useWordsStore()

watch(newAnagram, (newValue) => {
  if (!newValue) {
    (newAnagramRef.value as QInput).resetValidation()
  }
})

function anagramNotExist(value: string): boolean {
  return !wordsStore.findAnagram(props.word, value)
}

function wordIsAnagram(value: string): boolean {
  if (!value) {
    return false
  }
  return textIsAnagram(props.word.text, value)
}

function handleClearInput() {
  newAnagram.value = null;
  // reset
  (newAnagramRef.value as QInput).resetValidation()
}

function actionAddAnagram() {
  if (!newAnagram.value) {
    return
  }
  const inputRef: QInput = newAnagramRef.value
  inputRef.validate()
  if (inputRef.hasError) {
    return
  }

  wordsStore.addAnagram(props.word.text, newAnagram.value)
  newAnagram.value = null
  inputRef.resetValidation()
  inputRef.focus()
}
</script>

<template>
  <q-input
    ref="newAnagramRef"
    v-model="newAnagram"
    class="q-my-md col-all"
    color="secondary"
    dense
    bottom-slots
    :label="$t('anagramCreate.inputLabel')"
    counter
    :rules="[
      val => (!val || (val.length > 1)) || $t('anagramCreate.minLength'),
      val => wordIsAnagram(val) || $t('anagramCreate.isNotAnagram'),
      val => anagramNotExist(val) || $t('anagramCreate.alreadyExists'),
    ]"
    lazy-rules
    @keyup.enter="actionAddAnagram"
  >
    <template #append>
      <q-icon
        v-if="newAnagram"
        name="close"
        class="cursor-pointer"
        @click="handleClearInput"
      />
    </template>

    <template #hint>
      {{ $t('anagramCreate.inputHint') }}
    </template>

    <template #after>
      <q-btn
        round
        dense
        flat
        icon="add_circle"
        @click="actionAddAnagram"
      />
    </template>
  </q-input>
</template>
