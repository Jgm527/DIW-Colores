<script setup>
import { ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import DemoCard from '../components/DemoCard.vue'
import { usePalette } from '../composables/usePalette'

const { byName } = usePalette()

const FILTROS = [
  { id: 'normal', name: 'Normal', css: 'none' },
  { id: 'grises', name: 'Escala de grises', css: 'grayscale(1)' },
  { id: 'protanopia', name: 'Protanopía', css: 'url(#f-protanopia)' },
  { id: 'deuteranopia', name: 'Deuteranopía', css: 'url(#f-deuteranopia)' },
  { id: 'tritanopia', name: 'Tritanopía', css: 'url(#f-tritanopia)' },
]
const filtro = ref(FILTROS[0])
const señales = ref(true) // iconos y etiquetas ON/OFF

function styleOf(key) {
  return { background: byName.value[key].hex }
}
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Accesibilidad · 4"
      title="Simulación de visión"
      lead="Aproximadamente 8 de cada 100 hombres y 4 de cada 1.000 mujeres tienen alguna deficiencia de visión del color (InfoQ, 2008). Estos filtros aplican matrices feColorMatrix de simulación (aproximaciones de Machado et al.) a una mini-interfaz real."
    />

    <!-- filtros SVG (ocultos) -->
    <svg width="0" height="0" style="position: absolute" aria-hidden="true" focusable="false">
      <defs>
        <filter id="f-protanopia">
          <feColorMatrix
            type="matrix"
            values="0.567 0.433 0 0 0
                    0.558 0.442 0 0 0
                    0     0.242 0.758 0 0
                    0 0 0 1 0"
          />
        </filter>
        <filter id="f-deuteranopia">
          <feColorMatrix
            type="matrix"
            values="0.625 0.375 0 0 0
                    0.7   0.3   0 0 0
                    0     0.3   0.7 0 0
                    0 0 0 1 0"
          />
        </filter>
        <filter id="f-tritanopia">
          <feColorMatrix
            type="matrix"
            values="0.95  0.05  0     0 0
                    0     0.433 0.567 0 0
                    0     0.475 0.525 0 0
                    0 0 0 1 0"
          />
        </filter>
      </defs>
    </svg>

    <section>
      <DemoCard>
        <div class="controls">
          <div class="chips" role="group" aria-label="Filtro de simulación">
            <button
              v-for="f in FILTROS"
              :key="f.id"
              type="button"
              class="chip"
              :class="{ 'is-active': filtro.id === f.id }"
              @click="filtro = f"
            >
              {{ f.name }}
            </button>
          </div>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': señales }"
            @click="señales = !señales"
          >
            Iconos y etiquetas: {{ señales ? 'ON' : 'OFF' }}
          </button>
        </div>

        <div
          class="panel"
          :style="{ filter: filtro.css }"
          :aria-label="`Mini interfaz con filtro ${filtro.name}`"
        >
          <div class="panel-col">
            <div class="mini-alert success">
              <span class="mini-dot" :style="styleOf('success')" aria-hidden="true"></span>
              <template v-if="señales"><span aria-hidden="true">✓</span> Guardado con éxito</template>
              <template v-else>···</template>
            </div>
            <div class="mini-alert danger">
              <span class="mini-dot" :style="styleOf('danger')" aria-hidden="true"></span>
              <template v-if="señales"><span aria-hidden="true">✕</span> Error al enviar</template>
              <template v-else>···</template>
            </div>
            <div class="mini-alert warning">
              <span class="mini-dot" :style="styleOf('warning')" aria-hidden="true"></span>
              <template v-if="señales"><span aria-hidden="true">⚠</span> Sesión por caducar</template>
              <template v-else>···</template>
            </div>
          </div>

          <div class="panel-col">
            <div class="mini-btns">
              <span class="mini-btn" :style="styleOf('primary')">Acción</span>
              <span class="mini-btn" :style="styleOf('secondary')">Acción</span>
            </div>
            <p class="mini-cap">
              {{ señales ? 'Dos botones, mismo texto: solo cambia el color' : 'Sin etiquetas: ¿cuál es la acción principal?' }}
            </p>
            <div class="legend">
              <span v-for="(k, i) in ['primary', 'success', 'warning', 'danger']" :key="k" class="legend-item">
                <span class="mini-dot" :style="styleOf(k)" aria-hidden="true"></span>
                <span v-if="señales">{{ ['Ventas', 'Beneficio', 'Gastos', 'Pérdidas'][i] }}</span>
                <span v-else>···</span>
              </span>
            </div>
            <p class="mini-cap">Leyenda de un gráfico {{ señales ? 'con etiquetas' : 'solo con puntos' }}</p>
          </div>
        </div>

        <p class="demo-note" v-if="!señales">
          Con las señales OFF, en <strong>escala de grises</strong> o con
          <strong>deuteranopía</strong>, los puntos de la leyenda y las alertas se vuelven
          indistinguibles: esto es exactamente el fallo del criterio 1.4.1 (color como único canal).
          Actívalas y la señal sobrevive a cualquier filtro.
        </p>
        <p class="demo-note" v-else>
          Cambia a «Escala de grises» o a «Deuteranopía» y prueba a apagar las señales: la
          diferencia entre «éxito» y «error» desaparece si el color era la única pista.
        </p>
      </DemoCard>
    </section>

    <section class="section-gap">
      <div class="grid grid-3">
        <div class="card">
          <h3>Segundo canal obligatorio</h3>
          <p>
            WCAG 1.4.1: el color no puede ser el único medio visual de comunicar información,
            indicar una acción o responder a un input. Compañeros válidos: iconos, texto,
            formas, patrones, posición.
          </p>
        </div>
        <div class="card">
          <h3>Pista de luminancia</h3>
          <p>
            1.4.11 pide ≥ 3:1 entre componentes y su fondo: aunque el tono se pierda, la
            luminancia conserva la forma. Diseñar con L contrastadas blinda la interfaz.
          </p>
        </div>
        <div class="card">
          <h3>Cautela honesta</h3>
          <p>
            Estos filtros son <strong>aproximaciones</strong>: cada persona ve distinto y ningún
            simulador sustituye a pruebas con usuarios reales. Úsalo para detectar, no para
            certificar.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  margin-bottom: 18px;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  border: 1px solid var(--border-muted);
  border-radius: 12px;
  background: var(--bg-dark);
  padding: 22px;
  transition: filter 0.2s;
}
.panel-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.mini-alert {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 14px;
  border-radius: 10px;
  border: 1px solid var(--border-muted);
  background: var(--bg);
  font-size: 0.9rem;
  font-weight: 600;
}
.mini-dot {
  width: 13px;
  height: 13px;
  border-radius: 50%;
  flex: none;
  display: inline-block;
}
.mini-btns {
  display: flex;
  gap: 10px;
}
.mini-btn {
  padding: 9px 16px;
  border-radius: 9px;
  color: oklch(0.98 0.01 264);
  font-weight: 700;
  font-size: 0.88rem;
}
.mini-cap {
  font-size: 0.78rem;
  color: var(--text-faint);
  margin: 2px 0 8px;
}
.legend {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
}
@media (max-width: 720px) {
  .panel {
    grid-template-columns: 1fr;
  }
}
</style>
