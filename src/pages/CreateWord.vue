<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { QInput } from 'quasar'
import { wordsCrud } from 'src/crud'
import { useWordsStore } from 'stores/words'

const wordsStore = useWordsStore()
const route = useRoute()
const router = useRouter()

const suggestedWord = computed(() => route.query.word as string | undefined)
const word = ref<string>(suggestedWord.value ?? '')
const wordRef = ref(null)

async function onWordCreateClicked() {
  const inputRef: QInput = wordRef.value
  const canProceed = inputRef.validate()
  if (!canProceed) {
    return
  }
  const wordText = await wordsCrud.createWord(word.value)
  await router.push({ name: 'word-details', params: { word: wordText } })
}
</script>

<template>
  <q-page padding>
    <div class="text-h3">
      {{ $t('wordCreate.title') }}
    </div>
    <q-banner class="bg-light-blue q-my-sm">
      <h6 class="q-ma-sm">
        <q-icon
          name="info"
          size="lg"
        />
        {{ $t('wordCreate.description') }}
      </h6>
    </q-banner>

    <q-banner
      v-if="suggestedWord"
      class="bg-warning q-my-sm"
    >
      <h6 class="q-ma-sm">
        {{ $t('wordCreate.suggestedWord', [suggestedWord]) }}
      </h6>
    </q-banner>

    <div
      class="row"
    >
      <q-input
        ref="wordRef"
        v-model="word"
        color="secondary"
        class="col-12 col-md-4"
        :label="$t('wordCreate.newWordInputLabel')"
        :hint="$t('wordCreate.inputHint')"
        :rules="[
          val => !!val || $t('wordCreate.required'),
          val => val.length > 2 || $t('wordCreate.minLength'),
          val => !wordsStore.words.hasOwnProperty(val) || $t('wordCreate.alreadyExists'),
        ]"
        lazy-rules
        @keyup.enter="onWordCreateClicked"
      />
    </div>

    <q-btn
      class="q-my-lg"
      color="secondary"
      size="lg"
      @click="onWordCreateClicked"
    >
      {{ $t('wordCreate.create') }}
    </q-btn>
  </q-page>
</template>
