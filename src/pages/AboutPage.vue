<template>
  <q-page padding>
    <div class="text-h3 q-mb-md">
      {{ $t('about.title') }}
    </div>
    <p
      v-for="(text, index) in $t('about.text').split('\n\n')"
      :key="index"
      class="text-h5"
    >
      {{ text }}
    </p>
    <q-btn
      size="lg"
      color="secondary"
      :to="{ name: 'create-word' }"
    >
      {{ $t('about.create') }}
    </q-btn>
  </q-page>
</template>
