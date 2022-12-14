<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

import ToolbarListLink, { ToolbarListLinkProps } from 'components/toolbar/ToolbarListLink.vue'

const toolbarLinks: ToolbarListLinkProps[] = [
  {
    title: 'nav.createWord.title',
    caption: 'nav.createWord.caption',
    icon: 'create',
    to: { name: 'create-word' },
  },
  {
    title: 'nav.about.title',
    caption: 'nav.about.caption',
    icon: 'help',
    to: { name: 'about' },
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const { locale } = useI18n({ useScope: 'global' })
const localeOptions = reactive([
  { value: 'en-US', label: '🇬🇧 English' },
  { value: 'ru-RU', label: '🇷🇺 Русский' },
])
</script>

<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-btn
            flat
            :to="{ name: 'index' }"
          >
            {{ $t('app.title') }}
          </q-btn>
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="account_circle"
          @click="$q.notify($t('WIP'))"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label header>
          {{ $t('nav.title') }}
        </q-item-label>

        <ToolbarListLink
          v-for="link in toolbarLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-select
          v-model="locale"
          :options="localeOptions"
          dense
          emit-value
          map-options
          options-dense
          :label="$t('languageSelector.title')"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
