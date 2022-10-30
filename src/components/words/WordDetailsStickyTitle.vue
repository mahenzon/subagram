<script setup lang="ts">
export interface WordDetailsStickyTitle {
  text: string;
}

defineProps<WordDetailsStickyTitle>()
</script>

<template>
  <q-page-sticky
    expand
    position="top"
  >
    <q-toolbar class="bg-accent text-white">
      <q-toolbar-title>
        <div class="q-my-sm text-bold fit text-capitalize">
          {{ text }}
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-page-sticky>
</template>
