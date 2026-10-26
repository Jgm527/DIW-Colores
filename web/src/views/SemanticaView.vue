<script setup>
import { computed, ref } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import DemoCard from '../components/DemoCard.vue'
import { contrastRatio, pickOnColor, rgbToHex } from '../composables/colorMath'
import { usePalette } from '../composables/usePalette'

const { byName } = usePalette()

/* --------- alertas semánticas --------- */
const solo = ref(false) // «solo color»: sin icono ni texto

const ALERTS = [
  { key: 'success', icon: '✓', titulo: 'Guardado', msg: 'Los cambios se han guardado.' },
  { key: 'warning', icon: '⚠', titulo: 'Aviso', msg: 'Tu sesión caduca en 5 minutos.' },
  { key: 'danger', icon: '✕', titulo: 'Error', msg: 'No se pudo enviar el formulario.' },
  { key: 'info', icon: 'ℹ', titulo: 'Info', msg: 'Hay una versión nueva disponible.' },
]

function mixHex(a, b, t) {
  const mix = (x, y) => Math.round(x + (y - x) * t)
  const c = (v) => v.toString(16).padStart(2, '0')
  return `#${c(mix(a.r, b.r))}${c(mix(a.g, b.g))}${c(mix(a.b, b.b))}`
}

const alertData = computed(() =>
  ALERTS.map((a) => {
    const role = byName.value[a.key]
    const bgHex = byName.value.bg.hex
    // fondo suave: 16 % del color semántico sobre el fondo de la página
    const softRgb = {
      r: Math.round(role.rgb.r * 0.16 + byName.value.bg.rgb.r * 0.84),
      g: Math.round(role.rgb.g * 0.16 + byName.value.bg.rgb.g * 0.84),
      b: Math.round(role.rgb.b * 0.16 + byName.value.bg.rgb.b * 0.84),
    }
    const iconRatio = contrastRatio(role.rgb, softRgb)
    const textRatio = contrastRatio(byName.value.text.rgb, softRgb)
    return {
      ...a,
      hex: role.hex,
      softHex: rgbToHex(softRgb),
      iconRatio,
      textRatio,
      style: {
        background: `color-mix(in oklab, ${role.hex} 16%, ${bgHex})`,
        borderColor: `color-mix(in oklab, ${role.hex} 45%, transparent)`,
        color: role.hex,
      },
    }
  })
)

/* --------- botón con on-color automático --------- */
const primary = computed(() => byName.value.primary)
const onPrimary = computed(() => pickOnColor(primary.value.rgb))

/* --------- estados de formulario --------- */
const email = ref('usuario@correo')
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="Accesibilidad · 2"
      title="Semántica y estados"
      lead="Éxito, aviso, peligro, información: el color significa, pero nunca basta. WCAG 1.4.1 lo exige: si el color es la única señal, un daltonismo rojo-verde (muy común) no distingue un error de un éxito."
    />

    <section>
      <DemoCard>
        <div class="control-row">
          <label>Vista de las alertas</label>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': !solo }"
            @click="solo = false"
          >
            Color + icono + texto
          </button>
          <button
            type="button"
            class="chip"
            :class="{ 'is-active': solo }"
            @click="solo = true"
          >
            Solo color (falla 1.4.1)
          </button>
        </div>
        <div class="grid grid-2">
          <div v-for="a in alertData" :key="a.key" class="alert" :style="a.style">
            <span v-if="!solo" class="alert-icon" aria-hidden="true">{{ a.icon }}</span>
            <span v-else class="alert-icon ghost" aria-hidden="true">?</span>
            <div>
              <strong v-if="!solo">{{ a.titulo }}</strong>
              <p v-if="!solo" class="alert-msg">{{ a.msg }}</p>
              <p v-if="solo" class="alert-msg">—</p>
            </div>
          </div>
        </div>
        <p class="demo-note" v-if="!solo">
          Fondo suave (16 % del semántico) + borde + icono + texto: la señal sobrevive en escala de
          grises. Fíjate en los ratios: icono ≥ 3:1 (no textual) y texto ≥ 4,5:1 — calculados en
          vivo. Colores de la <RouterLink to="/paleta">paleta</RouterLink>.
        </p>
        <p class="demo-note" v-else>
          ¿Cuál es un error y cuál un éxito? Sin leer el orden, solo queda adivinar. Con
          deuteranopía, el rojo y el verde se vuelven casi idénticos además.
          <button type="button" class="chip" @click="solo = false">Volver a la versión correcta</button>
        </p>
      </DemoCard>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Ratios de cada alerta (calculados en vivo)</h2>
      <div class="card">
        <table class="table">
          <thead>
            <tr>
              <th>Alerta</th>
              <th>Icono vs fondo suave</th>
              <th>Texto vs fondo suave</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="a in alertData" :key="a.key">
              <td><span class="alert-dot" :style="{ background: a.hex }"></span> {{ a.titulo }}</td>
              <td>
                <span class="badge" :class="a.iconRatio >= 3 ? 'pass' : 'fail'">
                  {{ a.iconRatio.toFixed(2).replace('.', ',') }}:1 (mín. 3)
                </span>
              </td>
              <td>
                <span class="badge" :class="a.textRatio >= 4.5 ? 'pass' : 'fail'">
                  {{ a.textRatio.toFixed(2).replace('.', ',') }}:1 (mín. 4,5)
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Estados de formulario</h2>
      <div class="grid grid-2">
        <DemoCard title="Solo el borde rojo" tone="bad" tag="mal">
          <div class="field">
            <label>Correo electrónico</label>
            <input
              v-model="email"
              type="text"
              class="text-input border-bad"
              :style="{ borderColor: byName.danger.hex }"
            />
          </div>
          <p class="demo-note">
            ¿Campo vacío, error de formato o servidor caído? Sin mensaje, un borde rojo es una
            corazonada. Además, para algunos usuarios el borde ni siquiera «se nota».
          </p>
        </DemoCard>
        <DemoCard title="Borde + icono + mensaje" tone="good" tag="bien">
          <div class="field">
            <label for="mail-ok">Correo electrónico</label>
            <input
              id="mail-ok"
              v-model="email"
              type="text"
              class="text-input border-bad"
              :style="{ borderColor: byName.danger.hex }"
              aria-describedby="mail-err"
            />
            <p id="mail-err" class="field-msg" :style="{ color: byName.danger.hex }">
              <span aria-hidden="true">✕</span> Falta la @ en la dirección.
            </p>
          </div>
          <p class="demo-note">
            El mensaje explica qué pasa y cómo arreglarlo; el color solo acompaña.
            <code>aria-describedby</code> lo asocia para lectores de pantalla.
          </p>
        </DemoCard>
      </div>
    </section>

    <section class="section-gap">
      <h2 class="block-title">Estados de un botón</h2>
      <div class="card">
        <div class="btn-states">
          <button
            type="button"
            class="btn state-btn"
            :style="{ background: primary.hex, color: onPrimary.hex, borderColor: 'transparent' }"
          >
            Normal · {{ onPrimary.ratio.toFixed(2).replace('.', ',') }}:1
          </button>
          <button
            type="button"
            class="btn state-btn is-hover"
            :style="{ background: primary.hex, color: onPrimary.hex, borderColor: 'transparent' }"
          >
            Hover
          </button>
          <button
            type="button"
            class="btn state-btn"
            :style="{ background: primary.hex, color: onPrimary.hex, borderColor: 'transparent', boxShadow: '0 0 0 2px var(--bg), 0 0 0 4px var(--focus-ring)' }"
          >
            Foco visible
          </button>
          <button
            type="button"
            class="btn state-btn is-disabled"
            :style="{ background: primary.hex, color: onPrimary.hex, borderColor: 'transparent' }"
            disabled
          >
            Deshabilitado
          </button>
        </div>
        <p class="demo-note">
          El texto del botón usa el <strong>on-color automático</strong> (claro u oscuro, el que más
          contraste da — calculado con <code>pickOnColor</code>). El foco nunca se elimina: WCAG 2.2
          añade 2.4.11 «foco no oscurecido» por una razón. Los deshabilitados están exentos de
          contraste, pero no deben desaparecer.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.alert {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid;
}
.alert-icon {
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1;
  margin-top: 2px;
}
.alert-icon.ghost {
  opacity: 0.55;
}
.alert-msg {
  margin: 2px 0 0;
  font-size: 0.88rem;
  color: var(--text-muted);
}
.alert-dot {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  vertical-align: -2px;
  margin-right: 6px;
}
.field {
  margin-bottom: 4px;
}
.field label {
  display: block;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-muted);
  margin-bottom: 6px;
}
.text-input {
  width: 100%;
  font: inherit;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--bg-dark);
  color: var(--text);
}
.border-bad {
  border-width: 2px;
}
.field-msg {
  margin: 8px 0 0;
  font-size: 0.86rem;
  font-weight: 600;
}
.btn-states {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 8px;
}
.state-btn.is-hover {
  filter: brightness(1.18);
}
.state-btn.is-disabled {
  opacity: 0.45;
  cursor: not-allowed;
}
</style>
