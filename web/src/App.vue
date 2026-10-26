<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const zen = computed(() => route.meta.zen === true)
const menuOpen = ref(false)
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  }
)

const groups = [
  {
    title: null,
    items: [{ to: '/', label: 'Inicio' }],
  },
  {
    title: 'Fundamentos',
    items: [
      { to: '/modelos', label: 'Modelos de color' },
      { to: '/esquemas', label: 'Esquemas cromáticos' },
    ],
  },
  {
    title: 'Construcción',
    items: [
      { to: '/paleta', label: 'Paleta y roles' },
      { to: '/proporciones', label: 'Regla 60-30-10' },
    ],
  },
  {
    title: 'Accesibilidad',
    items: [
      { to: '/contraste', label: 'Contraste WCAG' },
      { to: '/semantica', label: 'Semántica y estados' },
      { to: '/combinaciones', label: 'Buenas y malas' },
      { to: '/vision', label: 'Simulación de visión' },
    ],
  },
  {
    title: 'El trabajo',
    items: [
      { to: '/presentacion', label: 'Modo presentación' },
      { to: '/webgrafia', label: 'Webgrafía' },
    ],
  },
]
</script>

<template>
  <div class="app" :class="{ 'app-zen': zen }">
    <template v-if="!zen">
      <header class="mobile-bar">
        <RouterLink to="/" class="brand">
          <span class="brand-mark" aria-hidden="true"></span>
          <strong>Color en la web</strong>
        </RouterLink>
        <button class="btn" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
          {{ menuOpen ? 'Cerrar' : 'Menú' }}
        </button>
      </header>

      <aside :class="['sidebar', { open: menuOpen }]">
        <RouterLink to="/" class="brand">
          <span class="brand-mark" aria-hidden="true"></span>
          <span class="brand-text">
            <strong>Color en la web</strong>
            <small>Tema 3 · DIW · 2º DAW</small>
          </span>
        </RouterLink>

        <nav aria-label="Secciones">
          <div v-for="(g, i) in groups" :key="i" class="nav-group">
            <div v-if="g.title" class="nav-title">{{ g.title }}</div>
            <RouterLink
              v-for="item in g.items"
              :key="item.to"
              :to="item.to"
              class="nav-link"
            >
              {{ item.label }}
            </RouterLink>
          </div>
        </nav>

        <footer class="sidebar-foot">
          <p>
            Elaboración propia.<br />
            Fuentes en la <RouterLink to="/webgrafia">webgrafía</RouterLink>.
          </p>
        </footer>
      </aside>
      <div
        v-if="menuOpen"
        class="backdrop"
        aria-hidden="true"
        @click="menuOpen = false"
      ></div>
    </template>

    <main class="content" :class="{ 'content-zen': zen }">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}
.sidebar {
  position: fixed;
  inset: 0 auto 0 0;
  width: 256px;
  padding: 22px 16px;
  background: var(--bg-dark);
  border-right: 1px solid var(--border-muted);
  box-shadow: inset -1px 0 0 0 var(--bg-dark);
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: auto;
  z-index: 40;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none !important;
  color: var(--text);
  padding: 4px 6px;
}
.brand-mark {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  flex: none;
  background: conic-gradient(
    from 40deg,
    oklch(0.72 0.14 25),
    oklch(0.78 0.13 85),
    oklch(0.72 0.13 150),
    oklch(0.7 0.1 230),
    oklch(0.62 0.16 264),
    oklch(0.72 0.14 25)
  );
  box-shadow: 0 0 0 1px var(--border);
}
.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}
.brand-text small {
  color: var(--text-faint);
  font-size: 0.72rem;
  letter-spacing: 0.04em;
}
.nav-group {
  margin-bottom: 14px;
}
.nav-title {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-faint);
  padding: 0 10px 6px;
}
.nav-link {
  display: block;
  padding: 7px 10px;
  border-radius: 9px;
  color: var(--text-muted);
  text-decoration: none !important;
  font-size: 0.92rem;
  font-weight: 500;
  border: 1px solid transparent;
  transition: background 0.12s, color 0.12s;
}
.nav-link:hover {
  color: var(--text);
  background: var(--bg-light);
}
.nav-link.router-link-exact-active {
  background: var(--primary-soft);
  color: var(--text);
  border-color: color-mix(in oklab, var(--primary) 45%, transparent);
}
.sidebar-foot {
  margin-top: auto;
  font-size: 0.76rem;
  color: var(--text-faint);
  border-top: 1px solid var(--border-muted);
  padding: 12px 6px 0;
}
.sidebar-foot a {
  color: var(--text-muted);
}

.mobile-bar {
  display: none;
}
.backdrop {
  display: none;
}
.content {
  margin-left: 256px;
}
.content-zen {
  margin-left: 0;
}

@media (max-width: 940px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    width: min(300px, 84vw);
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .backdrop {
    display: block;
    position: fixed;
    inset: 0;
    background: oklch(0.05 0.01 264 / 0.6);
    z-index: 30;
  }
  .mobile-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    position: sticky;
    top: 0;
    z-index: 20;
    background: oklch(0.13 0.02 264 / 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-muted);
    padding: 10px 16px;
  }
  .mobile-bar .brand strong {
    font-size: 0.95rem;
  }
  .content {
    margin-left: 0;
  }
}
</style>
