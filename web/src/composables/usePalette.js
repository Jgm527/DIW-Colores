/* ============================================================
   Estado global de la paleta (store reactivo sin Pinia).
   Método de construcción inspirado en la herramienta UI Colors
   de Sajid (vídeo visto y transcrito por nosotros): neutrales con
   matiz, acento con más croma, roles por función, tema claro/oscuro.
   ============================================================ */
import { computed, reactive } from 'vue'
import {
  contrastRatio,
  oklchToRgb,
  pickOnColor,
  rgbToHex,
  rgbToHsl,
} from './colorMath'

const state = reactive({
  hue: 264,
  vividness: 0.05, // croma base de neutrales (los fondos usan la mitad)
  accentChroma: 0.1, // croma del acento
  mode: 'dark', // oscuro | claro
  secondaryShift: 140, // 140 = cálido, 180 = complementario
})

/* Valores de L por tema (los de Sajid + alertas propias) */
const L = {
  dark: {
    bgDark: 0.1,
    bg: 0.15,
    bgLight: 0.2,
    text: 0.96,
    textMuted: 0.76,
    highlight: 0.48,
    border: 0.38,
    borderMuted: 0.29,
    primary: 0.62,
    secondary: 0.78,
    danger: 0.63,
    warning: 0.77,
    success: 0.72,
    info: 0.7,
  },
  light: {
    bgDark: 0.9,
    bg: 0.94,
    bgLight: 0.97,
    text: 0.25,
    textMuted: 0.45,
    highlight: 0.72,
    border: 0.8,
    borderMuted: 0.87,
    primary: 0.5,
    secondary: 0.76,
    danger: 0.56,
    warning: 0.67,
    success: 0.53,
    info: 0.56,
  },
}

/* Tonos semánticos fijos: las alertas no dependen del tono de marca */
const ALERT_HUES = { danger: 25, warning: 85, success: 145, info: 225 }

export function usePalette() {
  const roles = computed(() => {
    const { hue, vividness, accentChroma, mode, secondaryShift } = state
    const Ls = L[mode]
    const neutralC = vividness
    const bgC = vividness * 0.5
    const secondaryHue = (hue + secondaryShift) % 360
    const alertC = Math.min(0.17, Math.max(0.045, accentChroma * 0.7))

    const list = [
      { name: 'bg-dark', group: 'Fondo', label: 'Fondo hundido', l: Ls.bgDark, c: bgC, h: hue },
      { name: 'bg', group: 'Fondo', label: 'Fondo principal', l: Ls.bg, c: bgC, h: hue },
      { name: 'bg-light', group: 'Fondo', label: 'Superficie elevada', l: Ls.bgLight, c: bgC, h: hue },
      { name: 'text', group: 'Texto', label: 'Texto principal', l: Ls.text, c: neutralC, h: hue },
      { name: 'text-muted', group: 'Texto', label: 'Texto atenuado', l: Ls.textMuted, c: neutralC, h: hue },
      { name: 'highlight', group: 'Bordes', label: 'Luz superior', l: Ls.highlight, c: neutralC, h: hue },
      { name: 'border', group: 'Bordes', label: 'Borde', l: Ls.border, c: neutralC, h: hue },
      { name: 'border-muted', group: 'Bordes', label: 'Borde suave', l: Ls.borderMuted, c: neutralC, h: hue },
      { name: 'primary', group: 'Acción', label: 'Acento primario', l: Ls.primary, c: accentChroma, h: hue },
      { name: 'secondary', group: 'Acción', label: 'Acento secundario', l: Ls.secondary, c: accentChroma * 0.75, h: secondaryHue },
      { name: 'danger', group: 'Alertas', label: 'Peligro', l: Ls.danger, c: alertC, h: ALERT_HUES.danger },
      { name: 'warning', group: 'Alertas', label: 'Aviso', l: Ls.warning, c: alertC, h: ALERT_HUES.warning },
      { name: 'success', group: 'Alertas', label: 'Éxito', l: Ls.success, c: alertC, h: ALERT_HUES.success },
      { name: 'info', group: 'Alertas', label: 'Información', l: Ls.info, c: alertC, h: ALERT_HUES.info },
    ].map((r) => {
      const rgb = oklchToRgb(r)
      return { ...r, rgb, hex: rgbToHex(rgb), hsl: rgbToHsl(rgb) }
    })

    /* on-color automático para botones sólidos */
    for (const name of ['primary', 'secondary']) {
      const base = list.find((r) => r.name === name)
      const on = pickOnColor(base.rgb)
      base.onRgb = on.rgb
      base.onHex = rgbToHex(on.rgb)
      base.onRatio = on.ratio
      base.onIsLight = on.isLight
    }
    return list
  })

  const byName = computed(() => Object.fromEntries(roles.value.map((r) => [r.name, r])))

  /* Comprobaciones de contraste clave de la paleta generada */
  const checks = computed(() => {
    const r = byName.value
    return [
      { label: 'Texto principal sobre fondo', fg: r.text, bg: r.bg, target: 4.5 },
      { label: 'Texto atenuado sobre fondo', fg: r['text-muted'], bg: r.bg, target: 4.5 },
      { label: 'Texto sobre tarjeta (bg-light)', fg: r.text, bg: r['bg-light'], target: 4.5 },
      { label: 'Acento primario como enlace sobre fondo', fg: r.primary, bg: r.bg, target: 4.5 },
      { label: 'Texto on-primary sobre botón primario', fg: { rgb: r.primary.onRgb, hex: r.primary.onHex }, bg: r.primary, target: 4.5 },
      { label: 'Texto on-secondary sobre botón secundario', fg: { rgb: r.secondary.onRgb, hex: r.secondary.onHex }, bg: r.secondary, target: 4.5 },
    ].map((p) => {
      const ratio = contrastRatio(p.fg.rgb, p.bg.rgb)
      return { ...p, ratio, pass: ratio >= p.target }
    })
  })

  function setHue(h) {
    state.hue = ((h % 360) + 360) % 360
  }

  return { state, roles, byName, checks, setHue }
}
