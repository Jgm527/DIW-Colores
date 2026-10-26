/* Webgrafía del Tema 3 — todas las fuentes consultadas durante la
   investigación (ver Hoja de Ruta). La propia web es elaboración propia. */

export const FECHA_CONSULTA = '24–26 de octubre de 2026'

export const NOTAS = [
  'No se ha copiado literalmente ningún texto: el contenido está redactado a partir de la lectura de estas fuentes y contrastado entre ellas.',
  'La IA generativa se usó solo como apoyo para estructurar y maquetar, verificando lo esencial contra las fuentes (W3C, MDN).',
  'Esta web y sus ejemplos son elaboración propia: los ratios de contraste se calculan en vivo con la fórmula de WCAG 2.2.',
]

export const FUENTES = [
  /* ---------- Oficiales / normas ---------- */
  {
    nombre: 'W3C — WCAG 2.2 (texto normativo)',
    url: 'https://www.w3.org/TR/WCAG22/',
    tipo: 'Oficial',
    uso: 'Criterios de contraste y uso del color: 1.4.1, 1.4.3, 1.4.6, 1.4.11.',
  },
  {
    nombre: 'W3C — Understanding SC 1.4.3 (Contrast Minimum)',
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html',
    tipo: 'Oficial',
    uso: 'Definición de texto grande, excepciones y advertencia de no redondear el ratio.',
  },
  {
    nombre: 'W3C — Understanding SC 1.4.1 (Use of Color)',
    url: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html',
    tipo: 'Oficial',
    uso: 'El color no puede ser el único canal; pista de luminancia ≥ 3:1.',
  },
  {
    nombre: 'W3C — What’s New in WCAG 2.2',
    url: 'https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/',
    tipo: 'Oficial',
    uso: 'Resumen oficial de la versión vigente para citar siempre la misma versión.',
  },
  {
    nombre: 'W3C — Técnica G18',
    url: 'https://www.w3.org/WAI/WCAG22/Techniques/general/G18.html',
    tipo: 'Oficial',
    uso: 'Algoritmo exacto de luminancia relativa y ratio (implementado en esta web).',
  },
  {
    nombre: 'W3C — CSS Color Module Level 4',
    url: 'https://www.w3.org/TR/css-color-4/',
    tipo: 'Oficial',
    uso: 'oklch(), espacios de color y gamas en CSS; gradients y conversión de color.',
  },
  {
    nombre: 'Material Design 3 — Color roles',
    url: 'https://m3.material.io/styles/color/roles',
    tipo: 'Oficial (sistema de diseño)',
    uso: 'Roles de color, emparejamientos y aviso de que los tonos exactos no son obligatorios.',
  },
  {
    nombre: 'Android — Color en Wear OS',
    url: 'https://developer.android.com/design/ui/wear/guides/styles/color?hl=es',
    tipo: 'Oficial',
    uso: 'Uso del color en pantallas pequeñas y fondo negro.',
  },
  {
    nombre: 'BOE — Real Decreto 1112/2018',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699',
    tipo: 'Oficial (legislación)',
    uso: 'Obligación de accesibilidad del sector público en España (nivel AA).',
  },
  {
    nombre: 'ETSI — EN 301 549',
    url: 'https://www.etsi.org/deliver/etsi_en/301500_301599/301549/',
    tipo: 'Oficial (norma)',
    uso: 'Norma armonizada europea: incorpora WCAG 2.1 AA por referencia.',
  },

  /* ---------- Documentación técnica ---------- */
  {
    nombre: 'MDN — oklch()',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch',
    tipo: 'Documentación técnica',
    uso: 'L de OKLCH = brillo percibido, distinta de la L de HSL; verificado con MDN.',
  },
  {
    nombre: 'MDN — <color>',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value',
    tipo: 'Documentación técnica',
    uso: 'Notaciones de color disponibles en CSS (sRGB por defecto; no hay CMYK).',
  },
  {
    nombre: 'Björn Ottosson — A perceptual color space for digital processing (OKLab)',
    url: 'https://bottosson.github.io/posts/oklab/',
    tipo: 'Técnica (autor del espacio)',
    uso: 'Origen y fórmulas de OKLab/OKLCH (las que usa el motor de esta web).',
  },

  /* ---------- Herramientas e informes ---------- */
  {
    nombre: 'WebAIM — Contrast Checker',
    url: 'https://webaim.org/resources/contrastchecker/',
    tipo: 'Herramienta',
    uso: 'Referencia para nuestra calculadora de contraste.',
  },
  {
    nombre: 'WebAIM — Evaluating Contrast and Color Use',
    url: 'https://webaim.org/articles/contrast/evaluating',
    tipo: 'Técnica',
    uso: 'Proceso de verificación manual y límites del escaneo automático.',
  },
  {
    nombre: 'WebAIM — The WebAIM Million (2026)',
    url: 'https://webaim.org/projects/million/',
    tipo: 'Técnica (informe)',
    uso: '83,9 % de portadas con texto de bajo contraste; magnitud real del problema.',
  },
  {
    nombre: 'UI Colors — iamsajid.com/ui-colors',
    url: 'https://www.iamsajid.com/ui-colors/',
    tipo: 'Herramienta',
    uso: 'Referencia de deslizadores Neutral–Vivido y Cálido–Frío para crear paletas.',
  },

  /* ---------- Divulgación ---------- */
  {
    nombre: 'Pope Tech — Color contrast tools',
    url: 'https://blog.pope.tech/?p=7791',
    tipo: 'Divulgación técnica',
    uso: 'Casos con ratio calculado para la galería de buenas y malas combinaciones.',
  },
  {
    nombre: 'InfoQ — Colors and the UI',
    url: 'https://www.infoq.com/articles/Colors-UI/',
    tipo: 'Técnica (2008)',
    uso: 'Percepción, contraste simultáneo e incidencia de las deficiencias de visión.',
  },
  {
    nombre: 'CareerFoundry — Color Theory for UI',
    url: 'https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/',
    tipo: 'Divulgación',
    uso: 'Esquemas cromáticos y teoría clásica de la rueda.',
  },
  {
    nombre: 'SeedProd — Teoría del color en diseño web',
    url: 'https://www.seedprod.com/es/web-design-color-theory/',
    tipo: 'Divulgación',
    uso: '60-30-10 y convenciones culturales del color (con cautelas).',
  },
  {
    nombre: 'Bootcamp (Medium) — The 60:30:10 Color Rule',
    url: 'https://bootcamp.uxdesign.cc/the-60-30-10-color-rule-for-ui-design-32695d04a7c2',
    tipo: 'Divulgación',
    uso: 'Origen y ejemplos de la regla; es una heurística, no una norma.',
  },

  /* ---------- Vídeos ---------- */
  {
    nombre: 'Sajid — The Easy Way to Pick UI Colors (YouTube)',
    url: 'https://youtu.be/vvPklRN0Tco',
    tipo: 'Vídeo',
    uso: 'Inspiración del generador de paletas. Vídeo visto y transcrito por nosotros.',
  },
]
