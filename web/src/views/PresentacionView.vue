<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { contrastRatio, hexToRgb } from '../composables/colorMath'
import { usePalette } from '../composables/usePalette'

const router = useRouter()
const { byName } = usePalette()

const N = 13
const i = ref(0)
const next = () => (i.value = Math.min(N - 1, i.value + 1))
const prev = () => (i.value = Math.max(0, i.value - 1))

function onKey(e) {
  if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault()
    next()
  } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
    e.preventDefault()
    prev()
  } else if (e.key === 'Escape') {
    router.push('/')
  } else if (e.key.toLowerCase() === 'f') {
    toggleFullscreen()
  } else if (e.key === 'Home') {
    i.value = 0
  } else if (e.key === 'End') {
    i.value = N - 1
  }
}
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen?.()
  else document.documentElement.requestFullscreen?.()
}

const progress = computed(() => ((i.value + 1) / N) * 100 + '%')

/* ratios en vivo para las diapositivas de contraste */
const deckRatio = computed(() =>
  contrastRatio(hexToRgb('#F4F4FB') ?? {}, hexToRgb('#101022') ?? {})
)
const buenaRatio = computed(() =>
  contrastRatio(hexToRgb('#1B1B1F'), hexToRgb('#FFFFFF'))
)
const malaRatio = computed(() =>
  contrastRatio(hexToRgb('#7C7C7C'), hexToRgb('#FFFFFF'))
)

const STATS = [
  { n: '83,9 %', t: 'portadas con texto de bajo contraste' },
  { n: '34', t: 'casos por página de media' },
  { n: '95,9 %', t: 'con errores WCAG detectados' },
  { n: '56,1', t: 'fallos de media por portada' },
]

const FUNCIONES = [
  { t: 'Jerarquía', d: 'Guía el ojo: qué es un titular, qué es un botón, qué es secundario.', css: 'oklch(0.7 0.12 264)' },
  { t: 'Estado', d: 'Comunica éxito, error, aviso… siempre con un segundo canal.', css: 'oklch(0.72 0.13 150)' },
  { t: 'Identidad', d: 'Marca y personalidad: tono, croma y proporción.', css: 'oklch(0.78 0.12 44)' },
]

const ERRORES = [
  'Texto gris demasiado claro sobre blanco (el error nº 1 de la web real)',
  'Color como única señal: solo rojo para el error, solo verde para el éxito',
  'Enlaces que no se distinguen del texto (ni por color ni por subrayado)',
  'Verde y rojo puros enfrentados (idénticos con deuteranopía)',
  'Amarillo de marca con texto blanco «porque quedaba bien»',
  'Placeholders con contraste 2:1 como única etiqueta del campo',
]

const CHECKLIST = [
  'Contraste: texto ≥ 4,5:1; grande y componentes ≥ 3:1 (sin redondear)',
  'Nunca solo color: icono, texto o forma acompañan a cada señal',
  'Rampa y variantes en OKLCH, contraste en luminancia WCAG',
  'Paleta por roles: fondo, texto, bordes, acción, alertas',
  '60-30-10: neutros dominan, el acento es escaso y valioso',
  'Probar con simuladores… y validar con el Contrast Checker',
]
</script>

<template>
  <div class="deck" aria-label="Presentación del Tema 3">
    <div class="progress" aria-hidden="true">
      <div class="progress-fill" :style="{ width: progress }"></div>
    </div>

    <Transition name="slide" mode="out-in">
      <section :key="i" class="slide">
        <!-- 0 · Portada -->
        <template v-if="i === 0">
          <p class="s-kicker">Tema 3 · Diseño de Interfaces Web · 2º DAW</p>
          <h1 class="s-title xl">
            <span class="grad">El color</span> en las interfaces web
          </h1>
          <p class="s-lead">
            Qué significa, cómo se construye y cómo no debe usarse.
            Una recorrido con ejemplos que se calculan en vivo.
          </p>
          <p class="s-hint">Usa ← → o espacio para navegar · F pantalla completa · ESC para salir</p>
        </template>

        <!-- 1 · Por qué importa -->
        <template v-else-if="i === 1">
          <h1 class="s-title">¿Por qué importa el color?</h1>
          <div class="s-grid4">
            <div v-for="s in STATS" :key="s.n" class="s-stat">
              <span class="s-stat-n">{{ s.n }}</span>
              <span class="s-stat-t">{{ s.t }}</span>
            </div>
          </div>
          <p class="s-note">WebAIM Million 2026: un millón de portadas analizadas.</p>
        </template>

        <!-- 2 · Tres funciones -->
        <template v-else-if="i === 2">
          <h1 class="s-title">Tres funciones del color</h1>
          <div class="s-grid3">
            <div v-for="f in FUNCIONES" :key="f.t" class="s-func">
              <span class="s-func-dot" :style="{ background: f.css }"></span>
              <strong>{{ f.t }}</strong>
              <p>{{ f.d }}</p>
            </div>
          </div>
        </template>

        <!-- 3 · Modelos -->
        <template v-else-if="i === 3">
          <h1 class="s-title">Modelos: HSL engaña, OKLCH ilumina</h1>
          <p class="s-mini">Nueve pasos de luminosidad con HSL…</p>
          <div class="s-strip">
            <span v-for="l in [10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="'h' + l" :style="{ background: `hsl(264 85% ${l}%)` }"></span>
          </div>
          <p class="s-mini">…y los mismos nueve con OKLCH:</p>
          <div class="s-strip">
            <span v-for="l in [10, 20, 30, 40, 50, 60, 70, 80, 90]" :key="'o' + l" :style="{ background: `oklch(0.${l} 0.09 264)` }"></span>
          </div>
          <p class="s-note">La L de HSL no es el brillo percibido. La de OKLCH, sí (MDN, Ottosson).</p>
        </template>

        <!-- 4 · Esquemas -->
        <template v-else-if="i === 4">
          <h1 class="s-title">Esquemas cromáticos</h1>
          <div class="s-schemes">
            <div v-for="sch in [
              { n: 'Monocromático', hues: [264] },
              { n: 'Análogo', hues: [234, 264, 294] },
              { n: 'Complementario', hues: [84, 264] },
              { n: 'Triádico', hues: [24, 144, 264] },
            ]" :key="sch.n" class="s-scheme">
              <div class="s-scheme-dots">
                <span v-for="h in sch.hues" :key="h" :style="{ background: `hsl(${h} 72% 55%)` }"></span>
              </div>
              {{ sch.n }}
            </div>
          </div>
          <p class="s-note">Guían el reparto de tonos… pero armonía ≠ contraste: tonos armoniosos pueden tener luminancias casi iguales.</p>
        </template>

        <!-- 5 · Paleta y roles -->
        <template v-else-if="i === 5">
          <h1 class="s-title">Paleta = roles, no colores sueltos</h1>
          <div class="s-roles">
            <div v-for="g in [
              { t: 'Fondo', keys: ['bg-dark', 'bg', 'bg-light'] },
              { t: 'Texto', keys: ['text', 'text-muted'] },
              { t: 'Bordes', keys: ['border-muted', 'border', 'highlight'] },
              { t: 'Acción', keys: ['primary', 'secondary'] },
              { t: 'Alertas', keys: ['success', 'warning', 'danger', 'info'] },
            ]" :key="g.t" class="s-role">
              <span class="s-role-t">{{ g.t }}</span>
              <div class="s-role-sw">
                <span v-for="k in g.keys" :key="k" :style="{ background: byName[k].hex }" :title="k"></span>
              </div>
            </div>
          </div>
          <p class="s-note">Generados con el método de UI Colors (Sajid): neutrales con matiz, acento con croma.</p>
        </template>

        <!-- 6 · 60-30-10 -->
        <template v-else-if="i === 6">
          <h1 class="s-title">Regla 60-30-10</h1>
          <div class="s-bar">
            <span style="width: 60%; background: oklch(0.22 0.026 264)">60 % neutros</span>
            <span style="width: 30%; background: oklch(0.62 0.16 264)">30 % marca</span>
            <span style="width: 10%; background: oklch(0.78 0.12 44)">10 %</span>
          </div>
          <p class="s-note">
            Heurística de composición (no norma WCAG): cuando todo destaca, nada destaca.
            Demo completa en <RouterLink to="/proporciones">/proporciones</RouterLink>.
          </p>
        </template>

        <!-- 7 · Contraste -->
        <template v-else-if="i === 7">
          <h1 class="s-title">Contraste WCAG: la métrica que manda</h1>
          <div class="s-chips-row">
            <span class="chip is-static">Texto normal · AA ≥ 4,5:1</span>
            <span class="chip is-static">Grande y componentes · ≥ 3:1</span>
            <span class="chip is-static">Texto normal · AAA ≥ 7:1</span>
          </div>
          <p class="s-lead">
            Ratio = (L1 + 0,05) / (L2 + 0,05) con la luminancia relativa de sRGB.
            <strong>Sin redondeos</strong>: 4,49:1 no cumple.
          </p>
          <p class="s-note">Esta misma diapositiva: {{ deckRatio.toFixed(2).replace('.', ',') }}:1 de texto sobre fondo.</p>
        </template>

        <!-- 8 · 1.4.1 -->
        <template v-else-if="i === 8">
          <h1 class="s-title">1.4.1 · El color nunca va solo</h1>
          <div class="s-alerts">
            <span class="s-alert" style="background: color-mix(in oklab, oklch(0.72 0.13 150) 18%, #101022); color: oklch(0.72 0.13 150)">
              <b aria-hidden="true">✓</b> Guardado con éxito
            </span>
            <span class="s-alert" style="background: color-mix(in oklab, oklch(0.63 0.17 25) 18%, #101022); color: oklch(0.63 0.17 25)">
              <b aria-hidden="true">✕</b> No se pudo enviar
            </span>
          </div>
          <p class="s-lead">
            Icono + texto + borde: la señal sobrevive en grises, con daltonismo y sin color.
          </p>
        </template>

        <!-- 9 · Errores -->
        <template v-else-if="i === 9">
          <h1 class="s-title">Errores que vemos todos los días</h1>
          <ul class="s-list bad">
            <li v-for="e in ERRORES" :key="e">{{ e }}</li>
          </ul>
        </template>

        <!-- 10 · Buenas vs malas -->
        <template v-else-if="i === 10">
          <h1 class="s-title">La diferencia, en números</h1>
          <div class="s-grid2">
            <div class="s-pair good">
              <span>#1B1B1F sobre blanco</span>
              <strong>{{ buenaRatio.toFixed(2).replace('.', ',') }}:1</strong>
              <em>AAA con holgura</em>
            </div>
            <div class="s-pair bad">
              <span>#7C7C7C sobre blanco</span>
              <strong>{{ malaRatio.toFixed(2).replace('.', ',') }}:1</strong>
              <em>no llega a AA</em>
            </div>
          </div>
          <p class="s-note">Un gris más. Eso es todo lo que separa una interfaz accesible de una que excluye.</p>
        </template>

        <!-- 11 · Checklist -->
        <template v-else-if="i === 11">
          <h1 class="s-title">Checklist para llevar</h1>
          <ul class="s-list">
            <li v-for="c in CHECKLIST" :key="c">{{ c }}</li>
          </ul>
        </template>

        <!-- 12 · Cierre -->
        <template v-else>
          <h1 class="s-title xl"><span class="grad">Gracias</span></h1>
          <p class="s-lead">
            El contenido completo, con las fuentes y su aportación, está en la
            <RouterLink to="/webgrafia">webgrafía</RouterLink>.
            Los ejemplos interactivos siguen disponibles en cada sección.
          </p>
          <p class="s-note">Elaboración propia · Tema 3 DIW · fuentes oficiales: W3C/WCAG 2.2, MDN, WebAIM, BOE, ETSI.</p>
        </template>
      </section>
    </Transition>

    <footer class="chrome">
      <span class="counter">{{ i + 1 }} / {{ N }}</span>
      <div class="chrome-btns">
        <button type="button" class="btn" :disabled="i === 0" @click="prev">←</button>
        <button type="button" class="btn" :disabled="i === N - 1" @click="next">→</button>
        <button type="button" class="btn" @click="toggleFullscreen">Pantalla completa (F)</button>
        <RouterLink to="/" class="btn">Salir (ESC)</RouterLink>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.deck {
  position: fixed;
  inset: 0;
  background: var(--bg-dark);
  color: var(--text);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.progress {
  height: 4px;
  background: var(--border-muted);
}
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, oklch(0.62 0.16 264), oklch(0.78 0.12 44));
  transition: width 0.25s ease;
}
.slide {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vh 8vw;
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
}
.s-title {
  font-size: clamp(1.8rem, 4.5vw, 3rem);
  margin-bottom: 22px;
}
.s-title.xl {
  font-size: clamp(2.6rem, 7vw, 4.4rem);
}
.grad {
  background: linear-gradient(95deg, oklch(0.78 0.13 85), oklch(0.72 0.13 150) 40%, oklch(0.72 0.16 300));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.s-kicker {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.78rem;
  color: var(--text-faint);
  margin-bottom: 14px;
}
.s-lead {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: var(--text-muted);
  max-width: 62ch;
}
.s-hint,
.s-note {
  font-size: 0.86rem;
  color: var(--text-faint);
  margin-top: 26px;
}
.s-mini {
  font-size: 0.85rem;
  color: var(--text-faint);
  margin: 14px 0 6px;
}
.s-grid4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.s-stat {
  border: 1px solid var(--border-muted);
  border-radius: 12px;
  padding: 18px;
  background: var(--bg);
}
.s-stat-n {
  display: block;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  font-family: var(--font-mono);
  color: var(--secondary);
}
.s-stat-t {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.s-grid3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.s-func {
  border: 1px solid var(--border-muted);
  border-radius: 12px;
  padding: 18px;
  background: var(--bg);
}
.s-func-dot {
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 8px;
  margin-bottom: 12px;
}
.s-func strong {
  font-size: 1.05rem;
}
.s-func p {
  margin: 6px 0 0;
  color: var(--text-muted);
  font-size: 0.88rem;
}
.s-strip {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 6px;
}
.s-strip span {
  height: 44px;
  border-radius: 8px;
  border: 1px solid oklch(1 0 0 / 0.12);
}
.s-schemes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.s-scheme {
  border: 1px solid var(--border-muted);
  border-radius: 12px;
  padding: 16px;
  background: var(--bg);
  font-size: 0.9rem;
  text-align: center;
}
.s-scheme-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 10px;
}
.s-scheme-dots span {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid oklch(1 0 0 / 0.2);
}
.s-roles {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 560px;
}
.s-role {
  display: flex;
  align-items: center;
  gap: 14px;
}
.s-role-t {
  width: 70px;
  font-size: 0.8rem;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.s-role-sw {
  display: flex;
  gap: 8px;
}
.s-role-sw span {
  width: 40px;
  height: 26px;
  border-radius: 6px;
  border: 1px solid var(--border-muted);
}
.s-bar {
  display: flex;
  height: 54px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-muted);
  max-width: 680px;
}
.s-bar span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.78rem;
  font-weight: 700;
  color: oklch(0.98 0.005 264);
  text-shadow: 0 0 4px oklch(0.1 0 0 / 0.6);
  white-space: nowrap;
  overflow: hidden;
}
.s-chips-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}
.chip.is-static {
  cursor: default;
}
.s-alerts {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 8px;
}
.s-alert {
  padding: 12px 18px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  border: 1px solid transparent;
}
.s-list {
  margin: 0;
  padding-left: 22px;
  color: var(--text-muted);
  font-size: clamp(0.95rem, 1.6vw, 1.1rem);
}
.s-list li {
  margin-bottom: 12px;
}
.s-grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 680px;
}
.s-pair {
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.s-pair.good {
  background: #ffffff;
  color: #1b1b1f;
  border: 1px solid var(--border-muted);
}
.s-pair.bad {
  background: #ffffff;
  color: #7c7c7c;
  border: 1px solid var(--border-muted);
}
.s-pair strong {
  font-family: var(--font-mono);
  font-size: 1.6rem;
}
.s-pair em {
  font-size: 0.8rem;
}
.chrome {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 22px;
  border-top: 1px solid var(--border-muted);
  background: var(--bg);
}
.counter {
  font-family: var(--font-mono);
  color: var(--text-faint);
  font-size: 0.85rem;
}
.chrome-btns {
  display: flex;
  gap: 10px;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.22s ease, transform 0.22s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateX(26px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateX(-26px);
}
@media (max-width: 760px) {
  .s-grid4,
  .s-grid3,
  .s-schemes,
  .s-grid2 {
    grid-template-columns: 1fr 1fr;
  }
  .chrome {
    flex-wrap: wrap;
    gap: 10px;
  }
}
</style>
