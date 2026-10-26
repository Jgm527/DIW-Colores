<script setup>
import PageHeader from '../components/PageHeader.vue'

const STATS = [
  { n: '83,9 %', t: 'de las portadas analizadas en el WebAIM Million (2026) tienen texto con contraste insuficiente' },
  { n: '34', t: 'casos de bajo contraste por página de media' },
  { n: '95,9 %', t: 'de las portadas tienen errores WCAG 2 detectados automáticamente' },
  { n: '56,1', t: 'fallos de media por portada' },
]

const MODULES = [
  { to: '/modelos', dot: 'oklch(0.7 0.12 264)', title: 'Modelos de color', text: 'RGB, HSL y OKLCH: la misma luz contada de tres maneras, y por qué OKLCH es mejor para crear variantes.' },
  { to: '/esquemas', dot: 'oklch(0.75 0.13 150)', title: 'Esquemas cromáticos', text: 'Rueda interactiva: monocromático, análogo, complementario, triádico… y por qué armonía ≠ contraste.' },
  { to: '/paleta', dot: 'oklch(0.78 0.12 44)', title: 'Paleta y roles', text: 'Generador tipo UI Colors: deslizadores y variables CSS por función (fondo, texto, bordes, acción, alertas).' },
  { to: '/proporciones', dot: 'oklch(0.63 0.17 25)', title: 'Regla 60-30-10', text: 'Neutros, marca y acento sobre una interfaz de ejemplo — y qué pasa cuando todo compite.' },
  { to: '/contraste', dot: 'oklch(0.7 0.1 230)', title: 'Contraste WCAG', text: 'Calculadora real con niveles AA/AAA y autocorrección. Sin redondeos: 4,49 no cumple 4,5.' },
  { to: '/semantica', dot: 'oklch(0.77 0.13 85)', title: 'Semántica y estados', text: 'Éxito, aviso, peligro e info: color + icono + texto. Nunca el color como única señal (WCAG 1.4.1).' },
  { to: '/combinaciones', dot: 'oklch(0.62 0.15 300)', title: 'Buenas y malas combinaciones', text: 'Galería de pares reales con su ratio calculado en vivo y su corrección propuesta.' },
  { to: '/vision', dot: 'oklch(0.6 0.05 250)', title: 'Simulación de visión', text: 'Filtros de protanopía, deuteranopía, tritanopía y escala de grises aplicados a los demos.' },
]
</script>

<template>
  <div class="page">
    <header class="hero">
      <span class="kicker">Tema 3 · Diseño de Interfaces Web</span>
      <h1 class="hero-title">El color en las interfaces web</h1>
      <p class="lead">
        Una guía viva: cada explicación viene con ejemplos interactivos que puedes tocar,
        medir y romper. Los ratios de contraste se calculan en tu navegador con la fórmula
        oficial de WCAG 2.2.
      </p>
      <div class="hero-chips">
        <span class="chip is-static">4,5:1 — texto normal (AA)</span>
        <span class="chip is-static">3:1 — texto grande y componentes (AA)</span>
        <span class="chip is-static">7:1 — texto normal (AAA)</span>
      </div>
      <div class="hero-ctas">
        <RouterLink to="/presentacion" class="btn btn-primary">Modo presentación</RouterLink>
        <RouterLink to="/contraste" class="btn">Abrir la calculadora</RouterLink>
        <RouterLink to="/webgrafia" class="btn">Webgrafía</RouterLink>
      </div>
    </header>

    <section class="section-gap" aria-label="Por qué importa">
      <div class="grid grid-4 stats">
        <div v-for="s in STATS" :key="s.n" class="card stat">
          <span class="stat-n">{{ s.n }}</span>
          <span class="stat-t">{{ s.t }}</span>
        </div>
      </div>
      <p class="note">
        Datos del informe <strong>The WebAIM Million (2026)</strong>, que analiza un millón de
        portadas. El bajo contraste lleva años siendo el error de accesibilidad más común de la web:
        es la mejor razón para aprender a usar el color bien. Fuente en la
        <RouterLink to="/webgrafia">webgrafía</RouterLink>.
      </p>
    </section>

    <section class="section-gap">
      <h2 class="block-title">El mapa de esta web</h2>
      <div class="grid grid-2">
        <RouterLink v-for="m in MODULES" :key="m.to" :to="m.to" class="card module-card">
          <span class="module-dot" :style="{ background: m.dot }" aria-hidden="true"></span>
          <span class="module-body">
            <strong>{{ m.title }}</strong>
            <span>{{ m.text }}</span>
          </span>
        </RouterLink>
      </div>
    </section>

    <section class="section-gap">
      <div class="card">
        <h3>¿Cómo leerla?</h3>
        <p>
          Cada módulo es independiente, pero el orden recomendado va de la teoría
          (<RouterLink to="/modelos">modelos</RouterLink>,
          <RouterLink to="/esquemas">esquemas</RouterLink>) a la construcción
          (<RouterLink to="/paleta">paleta</RouterLink>,
          <RouterLink to="/proporciones">proporciones</RouterLink>) y de ahí a la accesibilidad
          (<RouterLink to="/contraste">contraste</RouterLink>,
          <RouterLink to="/semantica">semántica</RouterLink>,
          <RouterLink to="/combinaciones">combinaciones</RouterLink>,
          <RouterLink to="/vision">visión</RouterLink>).
        </p>
        <p class="muted">
          Y, como detalle: esta propia web practica lo que explica — tema oscuro con matiz azul
          (tono 264), tokens <code>oklch()</code>, acento reservado, foco visible y compatibilidad
          con «prefiere reducir el movimiento».
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 26px 0 8px;
  max-width: 760px;
}
.hero-title {
  font-size: clamp(2.2rem, 6vw, 3.6rem);
  background: linear-gradient(
    95deg,
    oklch(0.78 0.13 85),
    oklch(0.72 0.13 150) 35%,
    oklch(0.7 0.1 230) 70%,
    oklch(0.72 0.16 300)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 14px;
}
.hero-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 18px 0;
}
.chip.is-static {
  cursor: default;
  color: var(--text-muted);
}
.chip.is-static:hover {
  border-color: var(--border);
  color: var(--text-muted);
}
.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 6px;
}
.stats {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px;
}
.stat-n {
  font-size: 2rem;
  font-weight: 800;
  font-family: var(--font-mono);
  color: var(--secondary);
}
.stat-t {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}
.module-card {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  text-decoration: none !important;
  color: inherit;
  transition: transform 0.12s, border-color 0.12s;
}
.module-card:hover {
  transform: translateY(-2px);
  border-color: var(--border);
}
.module-dot {
  flex: none;
  width: 18px;
  height: 18px;
  border-radius: 6px;
  margin-top: 3px;
  box-shadow: inset 0 0 0 1px oklch(1 0 0 / 0.18);
}
.module-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 0.94rem;
}
.module-body strong {
  font-size: 1.02rem;
}
.module-body span {
  color: var(--text-muted);
}
.muted {
  color: var(--text-muted);
}
</style>
