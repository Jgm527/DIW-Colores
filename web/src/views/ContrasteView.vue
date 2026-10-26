<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import DemoCard from '../components/DemoCard.vue'
import RatioPill from '../components/RatioPill.vue'
import { CASES } from '../data/combinaciones'
import {
  checksFor,
  contrastRatio,
  findPassingL,
  formatRatio,
  hexToRgb,
  rgbToHex,
  rgbToOklch,
} from '../composables/colorMath'

const fg = ref('#777777')
const bg = ref('#FFFFFF')

const fgRgb = computed(() => hexToRgb(fg.value))
const bgRgb = computed(() => hexToRgb(bg.value))
const valid = computed(() => !!fgRgb.value && !!bgRgb.value)
const ratio = computed(() =>
  valid.value ? contrastRatio(fgRgb.value, bgRgb.value) : null
)
const checks = computed(() => (ratio.value ? checksFor(ratio.value) : null))

const CHECK_ROWS = [
  { key: 'normalAA', label: 'Texto normal · AA', target: '4,5:1' },
  { key: 'normalAAA', label: 'Texto normal · AAA', target: '7:1' },
  { key: 'largeAA', label: 'Texto grande · AA', target: '3:1' },
  { key: 'largeAAA', label: 'Texto grande · AAA', target: '4,5:1' },
  { key: 'ui', label: 'Componentes y gráficos · AA', target: '3:1' },
]

function fixFg() {
  if (!valid.value) return
  const ok = rgbToOklch(fgRgb.value)
  const res = findPassingL(bgRgb.value, { c: ok.c, h: ok.h }, 4.5, ok.l)
  if (res) fg.value = rgbToHex(res.rgb)
}

function loadCase(c) {
  fg.value = c.fg
  bg.value = c.bg
}

const onPrimary = computed(() => {
  if (!valid.value) return null
  const ok = rgbToOklch(fgRgb.value)
  const res = findPassingL(fgRgb.value, { c: Math.max(0.04, ok.c * 0.5), h: ok.h }, 4.5, 0.95)
  return res ? rgbToHex(res.rgb) : null
})
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Accesibilidad · 1"
      title="Contraste WCAG"
      lead="El contraste se mide con la luminancia relativa (no con la L de HSL ni de OKLCH): ratio = (L1 + 0,05) / (L2 + 0,05). WCAG no redondea: un 4,49:1 es un 4,49:1, no vale como 4,5."
    />

    <section>
      <DemoCard>
        <div class="calc">
          <div class="calc-inputs">
            <div class="calc-field">
              <label for="c-fg">Primer plano (texto)</label>
              <div class="field-row">
                <input id="c-fg" v-model="fg" type="color" aria-label="Color del texto" />
                <input v-model="fg" type="text" class="hex-input" spellcheck="false" aria-label="Texto en hexadecimal" />
              </div>
            </div>
            <div class="calc-swap" aria-hidden="true">vs</div>
            <div class="calc-field">
              <label for="c-bg">Fondo</label>
              <div class="field-row">
                <input id="c-bg" v-model="bg" type="color" aria-label="Color del fondo" />
                <input v-model="bg" type="text" class="hex-input" spellcheck="false" aria-label="Fondo en hexadecimal" />
              </div>
            </div>
          </div>

          <div class="calc-result">
            <template v-if="valid">
              <div>
                <span class="ratio-big" :class="ratio >= 4.5 ? 'ok' : 'ko'">{{ formatRatio(ratio) }}</span>
                <p class="calc-verdict">
                  {{ ratio >= 4.5 ? 'Cumple AA para texto normal' : 'No cumple AA para texto normal' }}
                  <template v-if="ratio >= 7"> · también AAA</template>
                </p>
                <button type="button" class="btn" @click="fixFg" :disabled="ratio >= 4.5">
                  {{ ratio >= 4.5 ? 'Ya cumple 4,5:1' : 'Corregir texto (mismo tono y croma)' }}
                </button>
              </div>
              <ul class="check-list">
                <li v-for="row in CHECK_ROWS" :key="row.key">
                  <span class="check-label">{{ row.label }}</span>
                  <span class="check-target">{{ row.target }}</span>
                  <span class="badge" :class="checks[row.key] ? 'pass' : 'fail'">
                    {{ checks[row.key] ? 'cumple' : 'no cumple' }}
                  </span>
                </li>
              </ul>
            </template>
            <p v-else class="note">Escribe un color válido en formato #RRGGBB.</p>
          </div>
        </div>
      </DemoCard>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Muestras en vivo</h2>
      <div class="grid grid-3" v-if="valid">
        <div class="card sample" :style="{ background: bg }">
          <p class="sample-normal" :style="{ color: fg }">
            Texto normal (16 px): «El color nunca debe ser la única señal.»
          </p>
          <p class="sample-large" :style="{ color: fg }">
            Texto grande (24 px)
          </p>
          <p class="sample-small" :style="{ color: fg }">
            14 px en negrita también cuenta como «grande»
          </p>
        </div>
        <div class="card">
          <h3>Texto grande según WCAG</h3>
          <p>
            Es <strong>18 pt (≈ 24 px)</strong> o <strong>14 pt en negrita (≈ 18,5 px)</strong>.
            A partir de ahí el umbral baja a 3:1 porque el ojo lee mejor lo grande.
          </p>
        </div>
        <div class="card">
          <h3>Componentes (1.4.11)</h3>
          <div class="sample-btns">
            <button
              type="button"
              class="btn"
              :style="{ background: fg, color: onPrimary ?? '#fff', borderColor: 'transparent' }"
            >
              Botón
            </button>
            <span class="dot" :style="{ background: fg }" aria-hidden="true"></span>
            <span class="sample-hint">El botón y el icono son «no textual»: les vale 3:1 con su fondo.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Casos reales</h2>
      <div class="chips">
        <button
          v-for="cse in CASES"
          :key="cse.id"
          type="button"
          class="chip"
          :title="`${cse.fg} sobre ${cse.bg}`"
          @click="loadCase(cse)"
        >
          {{ cse.titulo }}
        </button>
      </div>
      <p class="note">
        La fórmula exacta está en la técnica <strong>G18</strong> de W3C y la verificación práctica
        en el Contrast Checker de WebAIM (fuentes en la
        <RouterLink to="/webgrafia">webgrafía</RouterLink>). Recuerda: el valor no se redondea y las
        excepciones (logotipos, decoración, inactivos) están en el texto oficial de 1.4.3.
      </p>
    </section>
  </div>
</template>

<style scoped>
.calc {
  display: grid;
  gap: 24px;
}
.calc-inputs {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 16px;
  align-items: end;
}
.calc-field label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 6px;
}
.field-row {
  display: flex;
  gap: 8px;
  align-items: center;
}
.calc-swap {
  font-family: var(--font-mono);
  color: var(--text-faint);
  padding-bottom: 12px;
}
.calc-result {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  align-items: start;
}
.calc-verdict {
  color: var(--text-muted);
  margin: 8px 0 14px;
}
.ratio-big.ok {
  color: var(--success);
}
.ratio-big.ko {
  color: var(--danger);
}
.check-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.check-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 0;
  border-bottom: 1px solid var(--border-muted);
}
.check-label {
  flex: 1;
  font-size: 0.92rem;
  color: var(--text-muted);
}
.check-target {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-faint);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}
.sample {
  min-height: 180px;
}
.sample-normal {
  font-size: 1rem;
  margin-bottom: 12px;
}
.sample-large {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.sample-small {
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0;
}
.sample-btns {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
.dot {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: inline-block;
}
.sample-hint {
  font-size: 0.84rem;
  color: var(--text-muted);
}
@media (max-width: 760px) {
  .calc-inputs {
    grid-template-columns: 1fr;
  }
  .calc-swap {
    display: none;
  }
  .calc-result {
    grid-template-columns: 1fr;
  }
}
</style>
