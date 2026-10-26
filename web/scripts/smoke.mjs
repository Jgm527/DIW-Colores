/* Prueba de humo: renderiza las 11 rutas con SSR para detectar errores
   de runtime. Uso: node scripts/smoke.mjs */
import { createServer } from 'vite'
import { renderToString } from 'vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const ROUTES = [
  '/',
  '/modelos',
  '/esquemas',
  '/paleta',
  '/proporciones',
  '/contraste',
  '/semantica',
  '/combinaciones',
  '/vision',
  '/webgrafia',
  '/presentacion',
]

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

const { default: App } = await server.ssrLoadModule('/src/App.vue')

/* reconstruir el router con historial en memoria para SSR
   (el router real usa createWebHistory, que necesita window) */
const routes = [
  { path: '/', name: 'inicio' },
  { path: '/modelos', name: 'modelos' },
  { path: '/esquemas', name: 'esquemas' },
  { path: '/paleta', name: 'paleta' },
  { path: '/proporciones', name: 'proporciones' },
  { path: '/contraste', name: 'contraste' },
  { path: '/semantica', name: 'semantica' },
  { path: '/combinaciones', name: 'combinaciones' },
  { path: '/vision', name: 'vision' },
  { path: '/webgrafia', name: 'webgrafia' },
  { path: '/presentacion', name: 'presentacion', meta: { zen: true } },
]

/* cargar los módulos de cada vista */
const views = {}
for (const r of routes) {
  const file =
    r.name === 'inicio'
      ? 'HomeView'
      : r.name === 'presentacion'
        ? 'PresentacionView'
        : r.name.charAt(0).toUpperCase() + r.name.slice(1) + 'View'
  views[r.path] = (await server.ssrLoadModule(`/src/views/${file}.vue`)).default
}

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes.map((r) => ({ ...r, component: views[r.path] })),
})

let failed = 0
for (const path of ROUTES) {
  try {
    const app = createSSRApp({
      render: () => h(App),
    })
    app.use(router)
    await router.push(path)
    await router.isReady()
    const html = await renderToString(app)
    const ok = html.length > 500
    console.log(`${ok ? '✓' : '✗'} ${path} — ${html.length} bytes`)
    if (!ok) failed++
  } catch (err) {
    failed++
    console.error(`✗ ${path} — ${err.message}`)
  }
}

await server.close()
process.exit(failed ? 1 : 0)
