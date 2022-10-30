<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { useQuasar } from 'quasar'
import { wordsCrud } from 'src/crud'

onMounted(async () => {
  const $q = useQuasar()

  $q.loadingBar.start()

  // show interface with skeletons (to do skeletons)
  await nextTick()

  // load data from db and fill storage
  await wordsCrud.loadWordsToStore()

  // let interface update after storage is filled
  await nextTick()

  // fill with anagrams (subwords)
  await wordsCrud.loadAnagramsForWords()

  $q.loadingBar.stop()
})
</script>
<template>
  <router-view />
</template>
