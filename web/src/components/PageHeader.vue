<script setup>
defineProps({
  kicker: { type: String, default: '' },
  title: { type: String, required: true },
  lead: { type: String, default: '' },
})
</script>

<template>
  <header class="page-header">
    <span v-if="kicker" class="kicker">{{ kicker }}</span>
    <h1 class="page-title">{{ title }}</h1>
    <p v-if="lead" class="lead">{{ lead }}</p>
    <slot />
  </header>
</template>
