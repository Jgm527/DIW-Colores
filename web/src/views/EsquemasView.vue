<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/PageHeader.vue'
import DemoCard from '../components/DemoCard.vue'
import Swatch from '../components/Swatch.vue'
import RatioPill from '../components/RatioPill.vue'
import { contrastRatio, hslToRgb, rgbToHex } from '../composables/colorMath'
import { usePalette } from '../composables/usePalette'

const router = useRouter()
const { setHue } = usePalette()

/* ---- rueda cromática interactiva ---- */
const wheelEl = ref(null)
const baseHue = ref(220)
let dragging = false

function pickFromPointer(e) {
  const rect = wheelEl.value.getBoundingClientRect()
  const x = e.clientX - rect.left - rect.width / 2
  const y = e.clientY - rect.top - rect.height / 2
  let deg = (Math.atan2(x, -y) * 180) / Math.PI
  baseHue.value = Math.round((deg + 360) % 360)
}
function onDown(e) {
  dragging = true
  pickFromPointer(e)
  wheelEl.value.setPointerCapture?.(e.pointerId)
}
function onMove(e) {
  if (dragging) pickFromPointer(e)
}
function onUp() {
  dragging = false
}

const wheelBg = computed(() => {
  const stops = []
  for (let d = 0; d <= 360; d += 15) {
    stops.push(`hsl(${d} 85% 55%) ${d}deg`)
  }
  return `conic-gradient(from 0deg, ${stops.join(', ')})`
})

function markerStyle(h) {
  const rad = (h * Math.PI) / 180
  const r = 42 // radio en % del contenedor
  const x = 50 + Math.sin(rad) * r
  const y = 50 - Math.cos(rad) * r
  return {
    left: `${x}%`,
    top: `${y}%`,
    background: `hsl(${h} 72% 55%)`,
  }
}

/* ---- esquemas ---- */
const HARMONIES = {
  monocromático: {
    offsets: [0],
    desc: 'Un solo tono con distintas L y cromas. Máxima coherencia; para que no resulte plano se apoya en neutros y en un acento con más croma.',
    uso: 'Diseños serios y editoriales; la paleta de esta web es casi monocromática + alertas.',
  },
  análogo: {
    offsets: [-30, 0, 30],
    desc: 'Tres vecinos en la rueda. Tranquilo y natural, fácil de combinar porque comparte «temperatura».',
    uso: 'Fondos y secciones con variación sutil; natureza, salud, estabilidad.',
  },
  complementario: {
    offsets: [0, 180],
    desc: 'El opuesto exacto. Máximo contraste de tono: imposible de ignorar.',
    uso: 'Detalles, CTA y notificaciones. En grandes cantidades vibra y cansa.',
  },
  'complementario dividido': {
    offsets: [0, 150, 210],
    desc: 'El opuesto y sus dos vecinos: contraste con menos tensión que el complementario puro.',
    uso: 'Ilustración y marketing; más margen de error que los opuestos exactos.',
  },
  triádico: {
    offsets: [0, 120, 240],
    desc: 'Tres tonos equidistantes. Vivo y equilibrado: haz dominar a uno (regla 60-30-10) o compite.',
    uso: 'Marcas juguetonas, datos multi-categoría, interfaces para niños.',
  },
  tetrádico: {
    offsets: [0, 90, 180, 270],
    desc: 'Dos pares complementarios. El más difícil: solo para casos muy controlados.',
    uso: 'Dashboards complejos con roles muy diferenciados. Casi siempre conviene simplificar.',
  },
}
const scheme = ref('análogo')
const swatches = computed(() =>
  HARMONIES[scheme.value].offsets.map((off) => {
    const h = (baseHue.value + off + 360) % 360
    const rgb = hslToRgb({ h, s: 72, l: 55 })
    const label = off === 0 ? 'base' : `${off > 0 ? '+' : ''}${off}°`
    return { h, label, hex: rgbToHex(rgb), css: `hsl(${h} 72% 55%)` }
  })
)

/* demostración: armonía ≠ contraste */
const pairRatio = computed(() => {
  const s = swatches.value
  if (s.length < 2) return null
  return contrastRatio(
    hslToRgb({ h: s[0].h, s: 72, l: 55 }),
    hslToRgb({ h: s[1].h, s: 72, l: 55 })
  )
})
const whiteRatio = computed(() =>
  contrastRatio(hslToRgb({ h: baseHue.value, s: 72, l: 55 }), { r: 255, g: 255, b: 255 })
)

function usarEnPaleta() {
  setHue(baseHue.value)
  router.push('/paleta')
}
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Fundamentos · 2"
      title="Esquemas cromáticos"
      lead="Los esquemas describen cómo se reparten los tonos en la rueda cromática. Son un punto de partida de diseño… pero no dicen nada del contraste: tonos armoniosos pueden tener luminancias casi iguales."
    />

    <section>
      <DemoCard>
        <div class="wheel-zone">
          <div
            ref="wheelEl"
            class="wheel"
            :style="{ background: wheelBg }"
            role="application"
            aria-label="Rueda cromática. Arrastra o haz clic para elegir el tono base."
            tabindex="0"
            @pointerdown="onDown"
            @pointermove="onMove"
            @pointerup="onUp"
            @keydown.arrow-left.prevent="baseHue = (baseHue + 359) % 360"
            @keydown.arrow-right.prevent="baseHue = (baseHue + 1) % 360"
          >
            <span class="wheel-center" aria-hidden="true"></span>
            <span
              class="wheel-marker base"
              :style="markerStyle(baseHue)"
              aria-hidden="true"
            ></span>
            <span
              v-for="s in swatches.filter((x) => x.label !== 'base')"
              :key="s.label"
              class="wheel-marker"
              :style="markerStyle(s.h)"
              aria-hidden="true"
            ></span>
          </div>

          <div class="wheel-info">
            <p class="muted">Tono base: <code>{{ baseHue }}°</code></p>
            <p class="muted">Arrastra sobre la rueda, usa ← → con el foco, o pega un tono:</p>
            <input
              v-model.number="baseHue"
              type="range"
              min="0"
              max="360"
              aria-label="Tono base"
            />
            <div class="chips">
              <button
                v-for="(h, name) in HARMONIES"
                :key="name"
                type="button"
                class="chip"
                :class="{ 'is-active': scheme === name }"
                @click="scheme = name"
              >
                {{ name }}
              </button>
            </div>
            <p class="scheme-desc">{{ HARMONIES[scheme].desc }}</p>
            <button type="button" class="btn btn-primary" @click="usarEnPaleta">
              Usar este tono en la generadora →
            </button>
          </div>
        </div>
      </DemoCard>
    </section>

    <section class="section-gap">
      <h2 class="block-title">El esquema «{{ scheme }}» en swatches</h2>
      <div class="swatch-row">
        <Swatch
          v-for="s in swatches"
          :key="s.label"
          :color="s.css"
          :name="`tono ${s.label}`"
          :value="s.hex"
        />
      </div>
      <div class="grid grid-2 section-gap">
        <div class="card">
          <h3>¿Cómo se usa?</h3>
          <p>{{ HARMONIES[scheme].uso }}</p>
          <p class="muted">
            En cualquier caso: un tono domina (fondo), otro apoya y el último acentúa.
            Mira la <RouterLink to="/proporciones">regla 60-30-10</RouterLink>.
          </p>
        </div>
        <div class="card">
          <span class="tag warn">armonía ≠ contraste</span>
          <h3>Cuidado con la trampa clásica</h3>
          <template v-if="pairRatio">
            <p>
              Dos swatches de este esquema, con la misma S y L, dan un ratio de
              <strong>{{ pairRatio.toFixed(2).replace('.', ',') }}:1</strong> entre sí.
              Y el tono base contra blanco:
            </p>
            <RatioPill :ratio="whiteRatio" label="tono base vs blanco" />
            <p class="muted">
              La armonía trabaja el <em>tono</em>; el contraste WCAG mide la
              <em>luminancia</em>. Son cosas distintas: siempre verifica con la
              <RouterLink to="/contraste">calculadora</RouterLink>.
            </p>
          </template>
          <p v-else class="muted">Elige un esquema con más de un tono para ver la comparación.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.wheel-zone {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  align-items: center;
}
.wheel {
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 1px solid var(--border);
  box-shadow: inset 0 1px 0 0 var(--highlight);
  touch-action: none;
  cursor: crosshair;
}
.wheel-center {
  position: absolute;
  inset: 34%;
  border-radius: 50%;
  background: var(--bg-dark);
  border: 1px solid var(--border-muted);
}
.wheel-marker {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid oklch(0.99 0 0);
  box-shadow: 0 0 0 1px oklch(0.1 0 0 / 0.6);
  pointer-events: none;
}
.wheel-marker.base {
  width: 20px;
  height: 20px;
  box-shadow: 0 0 0 2px oklch(0.1 0 0 / 0.7);
}
.wheel-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 520px;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 6px 0;
}
.scheme-desc {
  margin: 4px 0 2px;
  color: var(--text-muted);
  font-size: 0.95rem;
}
.muted {
  color: var(--text-muted);
  margin: 0;
}
.swatch-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 14px;
  max-width: 760px;
}
@media (max-width: 720px) {
  .wheel-zone {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}
</style>
