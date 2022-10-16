<template>
  <q-page padding>
    <h3>{{ $t('about.title') }}</h3>
    <h5>{{ $t('about.text') }}</h5>
    <q-btn
      size="lg"
      color="secondary"
      :to="{ name: 'create-word' }"
    >
      {{ $t('about.create') }}
    </q-btn>
  </q-page>
</template>
