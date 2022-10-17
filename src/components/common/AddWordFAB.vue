<template>
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
</template>
