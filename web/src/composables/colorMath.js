/* ============================================================
   Motor de color — implementación propia basada en:
   - WCAG 2.2 / técnica G18: luminancia relativa y ratio
   - Björn Ottosson: espacio OKLab/OKLCH (CSS Color Module 4)
   Todas las funciones son puras; ninguna redondea el ratio.
   ============================================================ */

/* ---------- HEX ↔ RGB ---------- */

export function hexToRgb(hex) {
  if (typeof hex !== 'string') return null
  let h = hex.trim().replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  if (!/^[0-9a-fA-F]{6}$/.test(h)) return null
  const n = parseInt(h, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export function rgbToHex({ r, g, b }) {
  const c = (v) => Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, '0')
  return '#' + c(r) + c(g) + c(b)
}

/* ---------- RGB ↔ HSL ---------- */

export function rgbToHsl({ r, g, b }) {
  const rr = r / 255
  const gg = g / 255
  const bb = b / 255
  const max = Math.max(rr, gg, bb)
  const min = Math.min(rr, gg, bb)
  const d = max - min
  const l = (max + min) / 2
  let h = 0
  let s = 0
  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === rr) h = (gg - bb) / d + (gg < bb ? 6 : 0)
    else if (max === gg) h = (bb - rr) / d + 2
    else h = (rr - gg) / d + 4
    h *= 60
  }
  return { h, s: s * 100, l: l * 100 }
}

export function hslToRgb({ h, s, l }) {
  const ss = s / 100
  const ll = l / 100
  const k = (n) => (n + ((h % 360) + 360) / 30) % 12
  const a = ss * Math.min(ll, 1 - ll)
  const f = (n) => ll - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))
  return {
    r: Math.round(f(0) * 255),
    g: Math.round(f(8) * 255),
    b: Math.round(f(4) * 255),
  }
}

/* ---------- WCAG: luminancia relativa y contraste ---------- */

function srgbToLinearChannel(v) {
  // Umbral 0.03928 según la fórmula de WCAG 2.x (G18)
  const v01 = v / 255
  return v01 <= 0.03928 ? v01 / 12.92 : Math.pow((v01 + 0.055) / 1.055, 2.4)
}

export function relativeLuminance({ r, g, b }) {
  return (
    0.2126 * srgbToLinearChannel(r) +
    0.7152 * srgbToLinearChannel(g) +
    0.0722 * srgbToLinearChannel(b)
  )
}

export function contrastRatio(a, b) {
  const l1 = relativeLuminance(a)
  const l2 = relativeLuminance(b)
  const hi = Math.max(l1, l2)
  const lo = Math.min(l1, l2)
  return (hi + 0.05) / (lo + 0.05)
}

/** Umbrales WCAG: sin redondeo — 4,49 no cumple 4,5. */
export function checksFor(ratio) {
  return {
    normalAA: ratio >= 4.5,
    normalAAA: ratio >= 7,
    largeAA: ratio >= 3,
    largeAAA: ratio >= 4.5,
    ui: ratio >= 3,
  }
}

/* ---------- OKLab / OKLCH (Ottosson) ---------- */

function gammaEncode(v) {
  const c = v <= 0.0031308 ? 12.92 * v : 1.055 * Math.pow(v, 1 / 2.4) - 0.055
  return Math.round(Math.min(1, Math.max(0, c)) * 255)
}

function gammaDecode(v) {
  const v01 = v / 255
  return v01 <= 0.04045 ? v01 / 12.92 : Math.pow((v01 + 0.055) / 1.055, 2.4)
}

/** linear sRGB (0–1) → OKLab */
function linearToOklab(lr, lg, lb) {
  const l = Math.cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb)
  const m = Math.cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb)
  const s = Math.cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb)
  return {
    L: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  }
}

/** OKLab → linear sRGB (0–1) */
function oklabToLinear(L, a, b) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b
  const s_ = L - 0.0894841775 * a - 1.291485548 * b
  const l = l_ ** 3
  const m = m_ ** 3
  const s = s_ ** 3
  return [
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ]
}

/** RGB (0–255) → OKLCH { l: 0–1, c, h: 0–360 } */
export function rgbToOklch({ r, g, b }) {
  const { L, a: aLab, b: bLab } = linearToOklab(gammaDecode(r), gammaDecode(g), gammaDecode(b))
  const c = Math.sqrt(aLab * aLab + bLab * bLab)
  let h = (Math.atan2(bLab, aLab) * 180) / Math.PI
  if (h < 0) h += 360
  return { l: L, c, h }
}

/** OKLCH → RGB (0–255), recortado a la gama sRGB */
export function oklchToRgb({ l, c, h }) {
  const hr = (h * Math.PI) / 180
  const [lr, lg, lb] = oklabToLinear(l, c * Math.cos(hr), c * Math.sin(hr))
  return { r: gammaEncode(lr), g: gammaEncode(lg), b: gammaEncode(lb) }
}

/* ---------- Ayudas: on-color y autocorrección ---------- */

/**
 * Elige el texto (claro u oscuro, con el matiz del fondo) que más
 * contraste da sobre un color dado. Para botones sólidos y alertas.
 */
export function pickOnColor(bgRgb, opts = {}) {
  const { lightL = 0.97, darkL = 0.16 } = opts
  const bgOk = rgbToOklch(bgRgb)
  const c = Math.min(0.02, Math.max(bgOk.c * 0.15, 0.005))
  const light = oklchToRgb({ l: lightL, c, h: bgOk.h })
  const dark = oklchToRgb({ l: darkL, c, h: bgOk.h })
  const rl = contrastRatio(light, bgRgb)
  const rd = contrastRatio(dark, bgRgb)
  if (rl >= rd) return { rgb: light, isLight: true, ratio: rl }
  return { rgb: dark, isLight: false, ratio: rd }
}

/**
 * Busca (búsqueda binaria) la L de OKLCH más cercana a startL que alcance
 * el ratio objetivo sobre bgRgb, manteniendo el tono y el croma.
 * Devuelve { l, rgb } o null si no hay solución en gama.
 */
export function findPassingL(bgRgb, { c, h }, target = 4.5, startL = 0.62) {
  const bgLum = relativeLuminance(bgRgb)
  const lightBg = bgLum > 0.35
  let lo = lightBg ? 0.02 : startL
  let hi = lightBg ? startL : 0.98
  let best = null
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2
    const rgb = oklchToRgb({ l: mid, c, h })
    if (contrastRatio(rgb, bgRgb) >= target) {
      best = { l: mid, rgb }
      if (lightBg) lo = mid
      else hi = mid
    } else {
      if (lightBg) hi = mid
      else lo = mid
    }
  }
  return best
}

/* ---------- Formatos (español: coma decimal) ---------- */

export const formatRatio = (r) => r.toFixed(2).replace('.', ',') + ':1'
export const formatOklch = ({ l, c, h }) =>
  `oklch(${l.toFixed(2)} ${c.toFixed(3)} ${Math.round(h)})`
export const formatHsl = ({ h, s, l }) =>
  `hsl(${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%)`
