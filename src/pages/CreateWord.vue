<script setup lang="ts">
import { ref } from 'vue'

const word = ref<string>('')
</script>

<template>
  <q-page padding>
    <h3>{{ $t('wordCreate.title') }}</h3>
    <q-banner class="bg-light-blue">
      <h6 class="q-ma-sm">
        <q-icon
          name="info"
          size="lg"
        />
        {{ $t('wordCreate.description') }}
      </h6>
    </q-banner>
    <div
      class="q-gutter-md row"
    >
      <q-input
        v-model="word"
        color="secondary"
        class="col-12 col-md-4"
        :label="$t('wordCreate.newWordInputLabel')"
      />
    </div>
  </q-page>
</template>
