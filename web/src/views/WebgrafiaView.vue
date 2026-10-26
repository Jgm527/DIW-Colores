<script setup>
import { computed } from 'vue'
import PageHeader from '../components/PageHeader.vue'
import { FUENTES, FECHA_CONSULTA, NOTAS } from '../data/fuentes'

const GROUPS = [
  { match: (t) => t.startsWith('Oficial'), title: 'Fuentes oficiales y normas', cls: 'g-oficial' },
  { match: (t) => t.startsWith('Documentación') || t.startsWith('Técnica'), title: 'Documentación e informes técnicos', cls: 'g-tecnica' },
  { match: (t) => t.startsWith('Herramienta'), title: 'Herramientas', cls: 'g-herr' },
  { match: (t) => t.startsWith('Divulgación'), title: 'Divulgación', cls: 'g-divulga' },
  { match: (t) => t.startsWith('Vídeo'), title: 'Vídeos', cls: 'g-video' },
]

const grupos = computed(() =>
  GROUPS.map((g) => ({
    ...g,
    items: FUENTES.filter((f) => g.match(f.tipo)),
  })).filter((g) => g.items.length)
)
</script>

<template>
  <div class="page">
    <PageHeader
      kicker="El trabajo"
      title="Webgrafía"
      :lead="`Todas las fuentes consultadas para el Tema 3, con lo que aportó cada una. Consultas realizadas entre el ${FECHA_CONSULTA}.`"
    />

    <section class="section-gap">
      <div v-for="g in grupos" :key="g.title" class="fgroup">
        <h2 class="block-title">
          <span class="fdot" :class="g.cls" aria-hidden="true"></span>
          {{ g.title }}
          <span class="fcount">{{ g.items.length }}</span>
        </h2>
        <div class="grid grid-2">
          <article v-for="f in g.items" :key="f.url" class="card fuente">
            <header class="fuente-head">
              <h3>
                <a :href="f.url" target="_blank" rel="noopener noreferrer">{{ f.nombre }}</a>
              </h3>
              <span class="ftag" :class="g.cls">{{ f.tipo }}</span>
            </header>
            <p class="fuente-uso">{{ f.uso }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-gap">
      <div class="card">
        <h2 class="block-title">Notas sobre el uso de las fuentes</h2>
        <ul class="notes-list">
          <li v-for="n in NOTAS" :key="n">{{ n }}</li>
        </ul>
        <p class="demo-note">
          Esta web y todos sus ejemplos son <strong>elaboración propia</strong> para el Tema 3 de
          DIW. Los textos se basan en las fuentes anteriores; los ratios de contraste se calculan
          aquí mismo con la fórmula de WCAG 2.2 (técnica G18).
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.fgroup {
  margin-bottom: 30px;
}
.fdot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 4px;
  margin-right: 8px;
  vertical-align: -1px;
}
.fdot.g-oficial {
  background: var(--success);
}
.fdot.g-tecnica {
  background: var(--info);
}
.fdot.g-herr {
  background: var(--secondary);
}
.fdot.g-divulga {
  background: oklch(0.62 0.15 300);
}
.fdot.g-video {
  background: var(--danger);
}
.fcount {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-faint);
  font-weight: 400;
}
.fuente-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
}
.fuente-head h3 {
  margin: 0;
  font-size: 0.98rem;
}
.fuente-head a {
  color: var(--text);
  text-decoration: none;
}
.fuente-head a:hover {
  color: var(--primary);
}
.ftag {
  font-size: 0.66rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 3px 9px;
  border-radius: 99px;
  white-space: nowrap;
}
.ftag.g-oficial {
  color: var(--success);
  background: color-mix(in oklab, var(--success) 13%, var(--bg));
}
.ftag.g-tecnica {
  color: var(--info);
  background: color-mix(in oklab, var(--info) 13%, var(--bg));
}
.ftag.g-herr {
  color: var(--secondary);
  background: color-mix(in oklab, var(--secondary) 13%, var(--bg));
}
.ftag.g-divulga {
  color: oklch(0.72 0.13 300);
  background: color-mix(in oklab, oklch(0.62 0.15 300) 13%, var(--bg));
}
.ftag.g-video {
  color: var(--danger);
  background: color-mix(in oklab, var(--danger) 13%, var(--bg));
}
.fuente-uso {
  margin: 8px 0 0;
  font-size: 0.88rem;
  color: var(--text-muted);
}
.notes-list {
  margin: 0 0 10px;
  padding-left: 20px;
  color: var(--text-muted);
}
.notes-list li {
  margin-bottom: 6px;
}
</style>
