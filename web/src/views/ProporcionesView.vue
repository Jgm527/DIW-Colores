<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import DemoCard from '../components/DemoCard.vue'
import { usePalette } from '../composables/usePalette'

const { byName } = usePalette()
const c = byName

/* ---------- demo 60-30-10 ---------- */
const ACCENT_ITEMS = [
  'Botón principal (CTA)',
  'Enlace «Ver demo»',
  'Insignia «Nuevo»',
  'Subrayado del titular',
  'Punto activo del menú',
]
const accentCount = ref(2)
const verdict = computed(() => {
  if (accentCount.value <= 2)
    return { cls: 'good', txt: 'El acento dirige la vista: el ojo sabe dónde ir.' }
  if (accentCount.value === 3)
    return { cls: 'warn', txt: 'Empieza a diluirse: dos elementos compiten por la atención.' }
  return { cls: 'bad', txt: 'Demasiado acento: ya no destaca nada y el 10 % se ha convertido en un 40 %.' }
})
const accent = (i) => i < accentCount.value

/* ---------- barras de proporción ---------- */
const BARS = [
  {
    title: 'Distribución 60-30-10 (correcta)',
    cls: 'good',
    tag: 'bien',
    segments: [
      { pct: 60, label: '60 % neutros', color: c.value['bg-light'].hex },
      { pct: 30, label: '30 % marca', color: c.value.primary.hex },
      { pct: 10, label: '10 % acento', color: c.value.secondary.hex },
    ],
  },
  {
    title: 'Todo compite (33-33-33 saturados)',
    cls: 'bad',
    tag: 'mal',
    segments: [
      { pct: 34, label: '34 %', color: c.value.primary.hex },
      { pct: 33, label: '33 %', color: c.value.secondary.hex },
      { pct: 33, label: '33 %', color: c.value.danger.hex },
    ],
  },
]
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Construcción · 2"
      title="Regla 60-30-10"
      lead="Reparto visual clásico: ~60 % de color dominante (neutros), ~30 % de color de marca y ~10 % de acento. No es una norma oficial ni una regla de accesibilidad: es una heurística de composición que evita que todo grite a la vez."
    />

    <section>
      <DemoCard>
        <div class="bars">
          <div v-for="b in BARS" :key="b.title" class="bar-block">
            <span class="tag" :class="b.cls">{{ b.tag }}</span>
            <p class="bar-title">{{ b.title }}</p>
            <div class="bar">
              <div
                v-for="s in b.segments"
                :key="s.label"
                class="bar-seg"
                :style="{ width: s.pct + '%', background: s.color }"
              >
                <span>{{ s.label }}</span>
              </div>
            </div>
          </div>
        </div>
        <p class="demo-note">
          La proporción es de <em>superficie visual</em>, no de píxeles exactos: un texto grande
          «pesa» más que un botón pequeño. Fuente: Bootcamp (Medium) y SeedProd — heurística, no norma.
        </p>
      </DemoCard>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Demo en vivo: la misma interfaz, dos repartos</h2>
      <div class="grid grid-2">
        <DemoCard title="Reparto 60-30-10" tone="good" tag="bien">
          <div class="mock" :style="{ background: c['bg-dark'].hex }">
            <div
              class="mock-nav"
              :style="{ background: c.bg.hex, borderBottom: `1px solid ${c['border-muted'].hex}` }"
            >
              <span class="mock-logo" :style="{ color: c.primary.hex }">◆ Sitio</span>
              <span class="mock-links" :style="{ color: c['text-muted'].hex }">
                <span
                  v-for="i in 3"
                  :key="i"
                  class="mock-link"
                  :class="{ 'is-accent': i === 1 && accent(4) }"
                  :style="i === 1 && accent(4) ? { color: c.secondary.hex } : {}"
                  >{{ ['Inicio', 'Producto', 'Precios'][i - 1] }}</span
                >
              </span>
            </div>
            <div class="mock-body">
              <h4 :style="{ color: c.text.hex }">
                Una interfaz que respira
                <span
                  v-if="accent(3)"
                  class="mock-underline"
                  :style="{ background: c.secondary.hex }"
                ></span>
              </h4>
              <p :style="{ color: c['text-muted'].hex }">
                Los neutros dominan, la marca apoya y el acento solo aparece donde importa.
              </p>
              <div class="mock-ctas">
                <span
                  class="mock-btn"
                  :style="{ background: c.primary.hex, color: c.primary.onHex }"
                  >Empezar</span
                >
                <span
                  v-if="accent(1)"
                  class="mock-link"
                  :style="{ color: c.secondary.hex }"
                  >Ver demo →</span
                >
                <span
                  v-if="accent(2)"
                  class="mock-badge"
                  :style="{
                    background: c.secondary.hex,
                    color: c.secondary.onHex,
                  }"
                  >Nuevo</span
                >
              </div>
            </div>
          </div>
          <p class="demo-note">
            Neutros: fondo, tarjetas, texto y bordes. Marca: botones y logo. Acento: 1–2 detalles
            secundarios. La vista siempre encuentra «el siguiente paso».
          </p>
        </DemoCard>

        <DemoCard title="Todo compite a la vez" tone="bad" tag="mal">
          <div class="mock" :style="{ background: c.danger.hex }">
            <div class="mock-nav" :style="{ background: c.secondary.hex }">
              <span class="mock-logo" :style="{ color: c.danger.hex }">◆ Sitio</span>
              <span class="mock-links" :style="{ color: c.text.hex }">
                <span class="mock-link">Inicio</span>
                <span class="mock-link">Producto</span>
                <span class="mock-link">Precios</span>
              </span>
            </div>
            <div class="mock-body">
              <h4 :style="{ color: c.text.hex }">¡Todo es importante!</h4>
              <p :style="{ color: c.text.hex }">
                Cuatro colores saturados compiten: no hay jerarquía ni descanso visual.
              </p>
              <div class="mock-ctas">
                <span
                  class="mock-btn"
                  :style="{ background: c.primary.hex, color: c.primary.onHex }"
                  >Empezar</span
                >
                <span
                  class="mock-btn"
                  :style="{ background: c.success.hex, color: c.success.onHex ?? '#fff' }"
                  >Ver demo</span
                >
                <span
                  class="mock-btn"
                  :style="{ background: c.info.hex, color: c.info.onHex ?? '#fff' }"
                  >Nuevo</span
                >
              </div>
            </div>
          </div>
          <p class="demo-note">
            Mismo contenido, más colores (y más «caros» de mirar). El acento perdió su poder:
            cuando todo destaca, nada destaca.
          </p>
        </DemoCard>
      </div>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Juega con la cantidad de acento</h2>
      <DemoCard>
        <div class="control-row">
          <label for="acc-n">Elementos con acento</label>
          <input
            id="acc-n"
            v-model.number="accentCount"
            type="range"
            min="1"
            max="5"
            aria-valuetext="`${accentCount} elementos`"
          />
          <output>{{ accentCount }}/5</output>
        </div>
        <ul class="acc-list">
          <li v-for="(item, i) in ACCENT_ITEMS" :key="item" :class="{ on: accent(i) }">
            {{ item }}
          </li>
        </ul>
        <p class="demo-note">
          <span class="tag" :class="verdict.cls">{{ verdict.txt }}</span>
        </p>
        <p class="demo-note">
          Los colores vienen de la
          <RouterLink to="/paleta">generadora de paletas</RouterLink>: cambia el tono allí y esta
          demo seguirá coherente (roles, no colores sueltos).
        </p>
      </DemoCard>
    </section>
  </div>
</template>

<style scoped>
.bars {
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.bar-title {
  margin: 0 0 8px;
  font-size: 0.92rem;
  color: var(--text-muted);
}
.bar {
  display: flex;
  height: 44px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border-muted);
}
.bar-seg {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}
.bar-seg span {
  font-size: 0.72rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 6px;
  color: oklch(0.98 0.005 264);
  mix-blend-mode: normal;
  text-shadow: 0 0 4px oklch(0.1 0 0 / 0.5);
}

.mock {
  border-radius: 12px;
  border: 1px solid var(--border-muted);
  overflow: hidden;
  font-size: 0.8rem;
}
.mock-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
}
.mock-logo {
  font-weight: 800;
}
.mock-links {
  display: flex;
  gap: 12px;
}
.mock-link {
  cursor: pointer;
}
.mock-body {
  padding: 18px 14px 20px;
}
.mock-body h4 {
  position: relative;
  display: inline-block;
  margin: 0 0 6px;
  font-size: 1rem;
}
.mock-underline {
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 60%;
  height: 3px;
  border-radius: 2px;
}
.mock-body p {
  margin: 0 0 12px;
}
.mock-ctas {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.mock-btn {
  padding: 7px 14px;
  border-radius: 8px;
  font-weight: 700;
}
.mock-badge {
  padding: 3px 10px;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.7rem;
}
.acc-list {
  list-style: none;
  margin: 0 0 6px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.acc-list li {
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 99px;
  border: 1px dashed var(--border-muted);
  color: var(--text-faint);
}
.acc-list li.on {
  border-style: solid;
  border-color: color-mix(in oklab, var(--secondary) 55%, transparent);
  color: var(--secondary);
  background: color-mix(in oklab, var(--secondary) 12%, var(--bg));
}
</style>
