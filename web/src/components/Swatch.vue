<script setup>
import { ref } from 'vue'

const props = defineProps({
  color: { type: String, required: true }, // css background value
  name: { type: String, default: '' },
  value: { type: String, default: '' },
  tall: { type: Boolean, default: false },
})

const copied = ref(false)
let timer = null

async function copy() {
  try {
    await navigator.clipboard.writeText(props.value)
  } catch {
    /* sin permiso de portapapeles: seguimos con el feedback */
  }
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => (copied.value = false), 1300)
}
</script>

<template>
  <button
    type="button"
    class="swatch"
    :title="`Copiar ${value}`"
    @click="copy"
  >
    <span class="swatch-color" :class="{ tall }" :style="{ background: color }"></span>
    <span class="swatch-meta">
      <span class="swatch-name">{{ name }}</span>
      <span v-if="value" class="swatch-value">{{ copied ? '¡copiado!' : value }}</span>
    </span>
  </button>
</template>

<style scoped>
.swatch {
  display: block;
  width: 100%;
  text-align: left;
  font: inherit;
  padding: 0;
  border: 1px solid var(--border-muted);
  border-radius: 12px;
  overflow: hidden;
  background: var(--bg-dark);
  cursor: copy;
  transition: transform 0.12s;
}
.swatch:hover {
  transform: translateY(-2px);
  border-color: var(--border);
}
.swatch-color {
  display: block;
  height: 56px;
}
.swatch-color.tall {
  height: 88px;
}
.swatch-meta {
  display: block;
  padding: 8px 10px;
  border-top: 1px solid var(--border-muted);
  font-size: 0.72rem;
  line-height: 1.5;
}
.swatch-name {
  display: block;
  font-weight: 700;
  color: var(--text);
}
.swatch-value {
  display: block;
  font-family: var(--font-mono);
  color: var(--text-faint);
  word-break: break-all;
}
</style>
