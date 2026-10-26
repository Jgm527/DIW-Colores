<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import DemoCard from '../components/DemoCard.vue'
import Swatch from '../components/Swatch.vue'
import RatioPill from '../components/RatioPill.vue'
import { usePalette } from '../composables/usePalette'
import {
  formatHsl,
  formatOklch,
  formatRatio,
  rgbToHsl,
  rgbToOklch,
} from '../composables/colorMath'

const { state, roles, checks } = usePalette()

const GROUPS = ['Fondo', 'Texto', 'Bordes', 'Acción', 'Alertas']
const groupRoles = computed(() => {
  const list = roles.value
  const result = []
  for (const g of GROUPS) {
    const items = list.filter((r) => r.group === g)
    if (g === 'Acción') {
      // incluir los on-color junto a su base
      const flat = []
      for (const r of items) {
        flat.push({ ...r, css: rgbToHexSafe(r.rgb) })
        flat.push({
          name: `on-${r.name}`,
          group: 'Acción',
          label: `Texto sobre ${r.name} (auto)`,
          hex: r.onHex,
          css: rgbToHexSafe(r.onRgb),
        })
      }
      result.push({ title: g, items: flat })
    } else {
      result.push({ title: g, items: items.map((r) => ({ ...r, css: rgbToHexSafe(r.rgb) })) })
    }
  }
  return result
})

function rgbToHexSafe(rgb) {
  const c = (v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0')
  return '#' + c(rgb.r) + c(rgb.g) + c(rgb.b)
}

/* ---------- panel «show code» ---------- */
const format = ref('oklch')
const copied = ref(false)
let timer = null

const code = computed(() => {
  const lines = []
  for (const r of roles.value) {
    if (r.name === 'primary' || r.name === 'secondary') {
      lines.push(`  --${r.name}: ${val(r)};`)
      lines.push(`  --on-${r.name}: ${val(r, r.onRgb)}; /* texto, ratio ${formatRatio(r.onRatio)} */`)
    } else {
      lines.push(`  --${r.name}: ${val(r)};`)
    }
  }
  return `:root {\n${lines.join('\n')}\n}`
})

function val(r, rgb = null) {
  return format.value === 'hsl'
    ? formatHsl(rgbToHsl(rgb ?? r.rgb))
    : formatOklch(rgbToOklch(rgb ?? r.rgb))
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(code.value)
  } catch {
    /* seguimos con el feedback visual */
  }
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => (copied.value = false), 1300)
}
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Construcción · 1"
      title="Paleta y roles"
      lead="Una buena paleta no es una lista de colores bonitos: son papeles con función — fondo, texto, bordes, acción y alertas. Este generador crea una completa a partir de tres deslizadores, y comprueba su contraste en vivo."
    />

    <section>
      <DemoCard>
        <div class="control-row">
          <label for="c-hue">Tono (Cálido ↔ Frío)</label>
          <input id="c-hue" v-model.number="state.hue" type="range" min="0" max="360" />
          <output>{{ state.hue }}°</output>
        </div>
        <div class="control-row">
          <label for="c-viv">Neutral ↔ Vivido</label>
          <input id="c-viv" v-model.number="state.vividness" type="range" min="0" max="0.08" step="0.005" />
          <output>{{ state.vividness.toFixed(3) }}</output>
        </div>
        <div class="control-row">
          <label for="c-acc">Croma del acento</label>
          <input id="c-acc" v-model.number="state.accentChroma" type="range" min="0.05" max="0.25" step="0.005" />
          <output>{{ state.accentChroma.toFixed(3) }}</output>
        </div>
        <div class="control-row">
          <label>Tema de la paleta</label>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': state.mode === 'dark' }"
            @click="state.mode = 'dark'"
          >
            Oscuro
          </button>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': state.mode === 'light' }"
            @click="state.mode = 'light'"
          >
            Claro
          </button>
          <span class="control-sep"></span>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': state.secondaryShift === 140 }"
            @click="state.secondaryShift = 140"
          >
            Secundario cálido (+140°)
          </button>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': state.secondaryShift === 180 }"
            @click="state.secondaryShift = 180"
          >
            Complementario (+180°)
          </button>
        </div>
        <p class="demo-note">
          Los neutrales llevan el tono de marca muy diluido (por eso «se sienten» de la marca sin
          saturarse) y el acento lleva mucho más croma. Es el método de la herramienta UI Colors de
          Sajid (vídeo visto y transcrito por nosotros; fuente en la
          <RouterLink to="/webgrafia">webgrafía</RouterLink>).
        </p>
      </DemoCard>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Los roles generados</h2>
      <div v-for="g in groupRoles" :key="g.title" class="role-group">
        <h3>{{ g.title }}</h3>
        <div class="swatch-row">
          <Swatch
            v-for="r in g.items"
            :key="r.name"
            :color="r.css"
            :name="r.name"
            :value="r.hex"
          />
        </div>
      </div>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Comprobación de contraste (en vivo)</h2>
      <div class="card">
        <table class="table">
          <thead>
            <tr>
              <th>Combinación</th>
              <th>Muestra</th>
              <th>Ratio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in checks" :key="c.label">
              <td>{{ c.label }}</td>
              <td>
                <span
                  class="mini-sample"
                  :style="{ background: c.bg.hex, color: c.fg.hex }"
                >
                  Aa
                </span>
              </td>
              <td>
                <RatioPill :ratio="c.ratio" :target="c.target" label="objetivo 4,5" />
              </td>
            </tr>
          </tbody>
        </table>
        <p class="demo-note">
          Si algo falla, no descartes la paleta: ajusta la L del rol en conflicto y vuelve a medir
          en <RouterLink to="/contraste">Contraste WCAG</RouterLink>. Las alertas usan el tono
          semántico fijo (peligro ~25°, aviso ~85°, éxito ~145°, info ~225°): su «nombre» es
          cultural, no cambia con tu marca.
        </p>
      </div>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Código generado</h2>
      <div class="card">
        <div class="control-row">
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': format === 'oklch' }"
            @click="format = 'oklch'"
          >
            OKLCH (recomendado)
          </button>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': format === 'hsl' }"
            @click="format = 'hsl'"
          >
            HSL (compatibilidad)
          </button>
          <span class="control-sep"></span>
          <button type="button" class="btn btn-primary" @click="copyCode">
            {{ copied ? '¡Copiado!' : 'Copiar CSS' }}
          </button>
        </div>
        <pre class="code">{{ code }}</pre>
      </div>
    </section>
  </div>
</template>

<style scoped>
.role-group {
  margin-bottom: 22px;
}
.role-group h3 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-faint);
  margin-bottom: 10px;
}
.swatch-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
  gap: 12px;
}
.control-sep {
  flex: 1;
}
.mini-sample {
  display: inline-block;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid var(--border-muted);
}
</style>
