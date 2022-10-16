<script setup lang="ts">
import WordCardsList from 'components/words/WordCardsList.vue'

</script>

<template>
  <q-page class="justify-evenly">
    <div class="row">
      <h3 class="col q-px-md">
        {{ $t('wordsList.continue') }}
      </h3>
    </div>
    <div class="row">
      <WordCardsList class="col" />
    </div>
  </q-page>
</template>
