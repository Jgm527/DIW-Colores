<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { CASES } from '../data/combinaciones'
import { contrastRatio, hexToRgb } from '../composables/colorMath'

const filtros = [
  { id: 'todos', label: 'Todos' },
  { id: 'fallan', label: 'Solo los que fallan' },
  { id: 'cumplen', label: 'Solo los que cumplen' },
]
const filtro = ref('todos')

function ratioOf(c, fgOverride = null) {
  const fg = hexToRgb(fgOverride ?? c.fg)
  const bg = hexToRgb(c.bg)
  return contrastRatio(fg, bg)
}
function targetOf(c) {
  return c.contexto === 'componente' || c.contexto === 'par' ? 3 : 4.5
}

const list = computed(() =>
  CASES.map((c) => ({
    ...c,
    ratio: ratioOf(c),
    fixRatio: c.fix ? ratioOf({ ...c, fg: c.fix.fg }) : null,
    target: targetOf(c),
  })).filter((c) => {
    if (filtro.value === 'todos') return true
    const ok = c.ratio >= c.target
    return filtro.value === 'fallan' ? !ok : ok
  })
)

function sampleStyle(c) {
  if (c.contexto === 'par') return { background: 'var(--bg-dark)' }
  return { background: c.bg }
}
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Accesibilidad · 3"
      title="Buenas y malas combinaciones"
      lead="Galería de pares reales — los tres primeros son casos documentados por Pope Tech. Cada tarjeta muestra el par, calcula su ratio en vivo con la fórmula WCAG y, si existe, propone la corrección."
    />

    <section>
      <div class="chips">
        <button
          v-for="f in filtros"
          :key="f.id"
          type="button"
          class="chip"
          :class="{ 'is-active': filtro === f.id }"
          @click="filtro = f.id"
        >
          {{ f.label }}
        </button>
      </div>

      <div class="grid grid-2">
        <article v-for="c in list" :key="c.id" class="card case">
          <header class="case-head">
            <h3>{{ c.titulo }}</h3>
            <span class="badge" :class="c.good ? 'pass' : 'mid'">{{ c.fuente }}</span>
          </header>
          <span class="tag">{{ c.contexto }}</span>

          <div class="sample" :style="sampleStyle(c)">
            <template v-if="c.contexto === 'texto'">
              <p class="sample-text" :style="{ color: c.fg }">Texto de ejemplo en 16 px</p>
            </template>
            <template v-else-if="c.contexto === 'componente'">
              <span class="sample-btn" :style="{ background: c.fg }">Botón</span>
            </template>
            <template v-else-if="c.contexto === 'enlace'">
              <p class="sample-text" :style="{ color: c.fg }">
                Un <span class="fake-link">enlace</span> dentro del texto
              </p>
            </template>
            <template v-else>
              <span class="sample-half" :style="{ background: c.fg }"></span>
              <span class="sample-half" :style="{ background: c.bg }"></span>
            </template>
          </div>

          <p class="case-ratio">
            Ratio: <strong>{{ c.ratio.toFixed(2).replace('.', ',') }}:1</strong>
            <span class="badge" :class="c.ratio >= c.target ? 'pass' : 'fail'">
              {{ c.ratio >= c.target ? `cumple (≥ ${c.target === 4.5 ? '4,5' : '3'})` : 'no cumple' }}
            </span>
          </p>

          <p class="case-nota">{{ c.nota }}</p>

          <div v-if="c.fix" class="case-fix">
            <div class="sample" :style="sampleStyle(c, c.fix.fg)">
              <template v-if="c.contexto === 'texto'">
                <p class="sample-text" :style="{ color: c.fix.fg }">Texto corregido</p>
              </template>
              <template v-else-if="c.contexto === 'componente'">
                <span class="sample-btn" :style="{ background: c.fix.fg }">Botón</span>
              </template>
              <template v-else>
                <p class="sample-text" :style="{ color: c.fix.fg }">
                  Un <span class="fake-link">enlace</span> corregido
                </p>
              </template>
            </div>
            <p class="case-ratio">
              Corregido (<code>{{ c.fix.fg }}</code>):
              <strong>{{ c.fixRatio.toFixed(2).replace('.', ',') }}:1</strong>
              <span class="badge" :class="c.fixRatio >= c.target ? 'pass' : 'fail'">
                {{ c.fixRatio >= c.target ? 'cumple' : 'aún no' }}
              </span>
            </p>
          </div>
        </article>
      </div>

      <p class="note">
        Fíjate en el caso «verde y rojo puros»: tonos muy distintos pero luminancias casi iguales.
        La lección: el contraste de <em>tono</em> no es el contraste de <em>luminancia</em> que mide
        WCAG. Abre <RouterLink to="/vision">Simulación de visión</RouterLink> para verlo con
        deuteranopía.
      </p>
    </section>
  </div>
</template>

<style scoped>
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}
.case-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}
.case-head h3 {
  margin: 0;
  font-size: 1.02rem;
}
.sample {
  display: flex;
  align-items: center;
  min-height: 92px;
  border-radius: 10px;
  border: 1px solid var(--border-muted);
  padding: 14px 16px;
  margin: 12px 0 10px;
  overflow: hidden;
}
.sample-text {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}
.fake-link {
  text-decoration: underline;
}
.sample-btn {
  padding: 9px 18px;
  border-radius: 9px;
  color: #fff;
  font-weight: 700;
  font-size: 0.92rem;
}
.sample-half {
  flex: 1;
  height: 60px;
}
.case-ratio {
  margin: 0 0 8px;
  font-size: 0.94rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.case-nota {
  margin: 0;
  font-size: 0.88rem;
  color: var(--text-faint);
}
.case-fix {
  margin-top: 14px;
  border-top: 1px dashed var(--border);
  padding-top: 12px;
}
.case-fix .sample {
  min-height: 74px;
  margin: 0 0 10px;
}
</style>
