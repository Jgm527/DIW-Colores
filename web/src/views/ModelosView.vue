<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import DemoCard from '../components/DemoCard.vue'
import {
  hexToRgb,
  rgbToHsl,
  rgbToOklch,
  formatHsl,
  formatOklch,
} from '../composables/colorMath'

/* Bloque 1: el mismo color, tres notaciones */
const hex = ref('#7C5CFF')
const rgb = computed(() => hexToRgb(hex.value) ?? { r: 0, g: 0, b: 0 })
const hsl = computed(() => rgbToHsl(rgb.value))
const ok = computed(() => rgbToOklch(rgb.value))
const notations = computed(() => [
  { name: 'HEX', value: hex.value.toUpperCase(), note: 'Compacto, pero opaco: nada humano.' },
  { name: 'RGB', value: `rgb(${rgb.value.r}, ${rgb.value.g}, ${rgb.value.b})`, note: 'Cómo "pinta" la pantalla: tres luces aditivas.' },
  { name: 'HSL', value: formatHsl(hsl.value), note: 'Tono / saturación / luminosidad. Intuitivo… pero su L no es el brillo real.' },
  { name: 'OKLCH', value: formatOklch(ok.value), note: 'L = brillo percibido uniforme. Es la L que crees que es.' },
])

/* Bloque 2: escalas de luminosidad (HSL vs OKLCH) */
const hue = ref(264)
const steps = [10, 20, 30, 40, 50, 60, 70, 80, 90]
const hslScale = computed(() =>
  steps.map((l) => ({ label: `L ${l}%`, css: `hsl(${hue.value} 85% ${l}%)` }))
)
const okScale = computed(() =>
  steps.map((l) => ({ label: `L 0,${l}`, css: `oklch(0.${l} 0.09 ${hue.value})` }))
)

/* Bloque 3: misma L, distintos tonos */
const hueSteps = [0, 40, 80, 120, 160, 200, 240, 280, 320]
const sameLOk = hueSteps.map((h) => ({ label: `${h}°`, css: `oklch(0.72 0.12 ${h})` }))
const sameLHsl = hueSteps.map((h) => ({ label: `${h}°`, css: `hsl(${h} 85% 55%)` }))
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Fundamentos · 1"
      title="Modelos de color"
      lead="La luz de un monitor es aditiva (RGB); el color que ves es la suma de tres fósforos. Sobre eso se construyen notaciones «humanas» como HSL y OKLCH. Los tres describen el mismo color: lo que cambia es lo fácil que es razonar con cada uno."
    />

    <section>
      <h2 class="block-title">El mismo color, tres (cuatro) notaciones</h2>
      <DemoCard>
        <div class="control-row">
          <label for="pick">Elige un color</label>
          <input id="pick" v-model="hex" type="color" />
          <input v-model="hex" type="text" class="hex-input" spellcheck="false" aria-label="Color en hexadecimal" />
        </div>
        <div class="grid grid-2">
          <div v-for="n in notations" :key="n.name" class="notation">
            <span class="notation-name">{{ n.name }}</span>
            <code class="notation-value">{{ n.value }}</code>
            <p class="notation-note">{{ n.note }}</p>
          </div>
        </div>
        <p class="demo-note">
          Cambia el color y comprueba que los cuatro valores describen la misma luz.
          En CSS, sRGB es el espacio por defecto; CMYK no existe (es subtractivo, de impresión).
          Fuente: MDN, «&lt;color&gt;».
        </p>
      </DemoCard>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Crear rampas: HSL no ilumina por igual</h2>
      <DemoCard>
        <div class="control-row">
          <label for="hue">Tono de las rampas</label>
          <input id="hue" v-model.number="hue" type="range" min="0" max="360" />
          <output>{{ hue }}°</output>
        </div>

        <p class="strip-title">Rampa HSL — <code>hsl(H 85% L%)</code>, L de 10 a 90</p>
        <div class="strip">
          <div v-for="s in hslScale" :key="s.label" class="strip-cell">
            <span class="strip-swatch" :style="{ background: s.css }"></span>
            <span class="strip-label">{{ s.label }}</span>
          </div>
        </div>
        <p class="strip-title">Rampa OKLCH — <code>oklch(L 0.09 H)</code>, L de 0,10 a 0,90</p>
        <div class="strip">
          <div v-for="s in okScale" :key="s.label" class="strip-cell">
            <span class="strip-swatch" :style="{ background: s.css }"></span>
            <span class="strip-label">{{ s.label }}</span>
          </div>
        </div>
        <p class="demo-note">
          Los saltos de HSL se sienten irregulares (los verdes/cianes se «escandalizan»,
          el azul se apaga antes): su L no es el brillo que percibes. La L de OKLCH sí es
          uniforme, por eso sus escalas se ven regulares. Fuente: MDN «oklch()» y Ottosson.
        </p>
      </DemoCard>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Misma L, distintos tonos</h2>
      <div class="grid grid-2">
        <DemoCard title="Con OKLCH: brillo equivalente" tone="good" tag="bien">
          <div class="strip strip-wrap">
            <div v-for="s in sameLOk" :key="s.label" class="strip-cell">
              <span class="strip-swatch" :style="{ background: s.css }"></span>
              <span class="strip-label">{{ s.label }}</span>
            </div>
          </div>
          <p class="demo-note">
            Todos comparten <code>oklch(0.72 …)</code>: parecen igual de luminosos aunque el tono cambie.
            Ideal para estados, categorías y gráficos.
          </p>
        </DemoCard>
        <DemoCard title="Con HSL: cada tono tira para su lado" tone="bad" tag="trampa">
          <div class="strip strip-wrap">
            <div v-for="s in sameLHsl" :key="s.label" class="strip-cell">
              <span class="strip-swatch" :style="{ background: s.css }"></span>
              <span class="strip-label">{{ s.label }}</span>
            </div>
          </div>
          <p class="demo-note">
            Todos comparten <code>hsl(H 85% 55%)</code>… y el amarillo «brilla» frente al azul.
            Con la L de HSL el brillo nunca es lo que dice el número.
          </p>
        </DemoCard>
      </div>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Reglas rápidas</h2>
      <div class="grid grid-2">
        <div class="card">
          <h3>Para crear variantes y rampas</h3>
          <p>Usa <strong>OKLCH</strong>: sus L y C se comportan como esperas y los degradados no ensucian.</p>
        </div>
        <div class="card">
          <h3>Para medir accesibilidad</h3>
          <p>Ni la L de HSL ni la de OKLCH valen: el contraste WCAG se calcula con la <strong>luminancia relativa</strong> de sRGB. Lo hacemos en <RouterLink to="/contraste">Contraste</RouterLink>.</p>
        </div>
        <div class="card">
          <h3>Para comunicar con la máquina</h3>
          <p><strong>HEX/RGB</strong>: son exactos y compactos; perfectos en código final.</p>
        </div>
        <div class="card">
          <h3>¿Y CMYK?</h3>
          <p>No existe en CSS: es un modelo <em>subtractivo</em> de impresión, no del monitor.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.notation {
  border: 1px solid var(--border-muted);
  border-radius: var(--radius-sm);
  padding: 14px 16px;
  background: var(--bg-dark);
}
.notation-name {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-faint);
  margin-bottom: 4px;
}
.notation-value {
  display: block;
  font-size: 0.92rem;
  padding: 6px 10px;
}
.notation-note {
  margin: 8px 0 0;
  font-size: 0.84rem;
  color: var(--text-muted);
}
.strip-title {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin: 14px 0 8px;
}
.strip {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
}
.strip-wrap {
  grid-template-columns: repeat(9, 1fr);
}
.strip-cell {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}
.strip-swatch {
  display: block;
  height: 52px;
  border-radius: 10px;
  border: 1px solid oklch(1 0 0 / 0.14);
}
.strip-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--text-faint);
  text-align: center;
  white-space: nowrap;
}
@media (max-width: 720px) {
  .strip {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
