<script setup lang="ts">
import WordCard from './WordCard.vue'

</script>

<template>
  <div class="q-px-md row items-start q-gutter-md">
    <WordCard
      v-for="n in 26"
      :key="n"
      class="col-xs-12 col-md-3"
      :word="'Hello ' + n"
      :words-count="n"
    />

    <!-- Navigation below -->
    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
    >
      <q-btn
        fab
        :to="{ name: 'create-word' }"
        size="lg"
        color="accent"
        icon="create"
      />
    </q-page-sticky>

    <q-page-scroller position="bottom">
      <q-btn
        fab
        icon="keyboard_arrow_up"
        color="secondary"
      />
    </q-page-scroller>
  </div>
</template>
