<script setup>
import { computed } from 'vue'
import { formatRatio } from '../composables/colorMath'

const props = defineProps({
  ratio: { type: Number, required: true },
  label: { type: String, default: '' }, // p. ej. "AA texto normal"
  target: { type: Number, default: 4.5 },
})

const level = computed(() => {
  const r = props.ratio
  if (r >= 7) return { cls: 'pass', txt: 'AAA' }
  if (r >= 4.5) return { cls: 'pass', txt: 'AA' }
  if (r >= 3) return { cls: 'mid', txt: 'solo grande / no textual' }
  return { cls: 'fail', txt: 'falla' }
})
</script>

<template>
  <span class="ratio-pill">
    <span class="ratio-pill-value" :class="level.cls">{{ formatRatio(ratio) }}</span>
    <span class="badge" :class="level.cls">{{ level.txt }}</span>
    <span v-if="label" class="ratio-pill-label">{{ label }}</span>
  </span>
</template>

<style scoped>
.ratio-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.ratio-pill-value {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.05rem;
}
.ratio-pill-value.pass {
  color: var(--success);
}
.ratio-pill-value.mid {
  color: var(--warning);
}
.ratio-pill-value.fail {
  color: var(--danger);
}
.ratio-pill-label {
  font-size: 0.8rem;
  color: var(--text-faint);
}
</style>
