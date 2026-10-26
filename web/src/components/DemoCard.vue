<script setup>
defineProps({
  title: { type: String, default: '' },
  tag: { type: String, default: '' },
  tone: { type: String, default: '' }, // good | bad | warn | ''
  note: { type: String, default: '' },
})
</script>

<template>
  <div class="card demo-card">
    <span v-if="tag" class="tag" :class="tone">{{ tag }}</span>
    <h3 v-if="title">{{ title }}</h3>
    <slot />
    <p v-if="note" class="demo-note">{{ note }}</p>
  </div>
</template>

<style scoped>
.demo-card h3 {
  margin-top: 2px;
}
.demo-note {
  margin: 12px 0 0;
  font-size: 0.88rem;
  color: var(--text-faint);
}
</style>
