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
  </div>
</template>
