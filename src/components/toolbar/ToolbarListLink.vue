<script setup lang="ts">
export interface ToolbarListLink {
  title: string;
  caption?: string;
  to: { name: string };
  icon?: string;
  target?: string;
}
withDefaults(defineProps<ToolbarListLink>(), {
  caption: '',
  link: '#',
  icon: '',
  target: undefined,
})
</script>

<template>
  <q-item
    clickable
    tag="a"
    :target="target"
    :to="to"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ $t(title) }}</q-item-label>
      <q-item-label caption>
        {{ $t(caption) }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>
