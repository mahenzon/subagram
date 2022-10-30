<script setup lang="ts">
import { ref, watch } from 'vue'
import { useWordsStore } from 'stores/words'

import type { QInput } from 'quasar'
import { textIsAnagram } from 'src/misc/utils'
import { WordDetails } from 'src/interfaces'
import { wordsCrud } from 'src/crud'

export interface IProps {
  word: WordDetails,
}

const props = defineProps<IProps>()

const newAnagram = ref<string | null>(null)
const newAnagramRef = ref(null)

const wordsStore = useWordsStore()

function resetAnagramInputValidation() {
  const inputRef: QInput = newAnagramRef.value
  inputRef.resetValidation()
}

watch(newAnagram, (newValue) => {
  if (!newValue) {
    resetAnagramInputValidation()
  }
})

function anagramNotExist(value: string): boolean {
  return !wordsStore.findAnagram(props.word, value)
}

function wordIsSame(value: string): boolean {
  if (!value) {
    return false
  }
  return props.word.text.toLowerCase() === value.toLowerCase()
}

function wordIsAnagram(value: string): boolean {
  if (!value) {
    return false
  }
  return textIsAnagram(props.word.text, value)
}

function handleClearInput() {
  newAnagram.value = null
  resetAnagramInputValidation()
}

function handleInputFocusOut() {
  if (!newAnagram.value) {
    resetAnagramInputValidation()
  }
}

async function actionAddAnagram() {
  if (!newAnagram.value) {
    return
  }
  const inputRef: QInput = newAnagramRef.value
  inputRef.validate()
  if (inputRef.hasError) {
    return
  }

  await wordsCrud.addAnagramToWord(props.word, newAnagram.value)

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
      val => !wordIsSame(val) || $t('anagramCreate.isSameWord'),
      val => wordIsAnagram(val) || $t('anagramCreate.isNotAnagram'),
      val => anagramNotExist(val) || $t('anagramCreate.alreadyExists'),
    ]"
    lazy-rules
    @keyup.enter="actionAddAnagram"
    @focusout="handleInputFocusOut"
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
