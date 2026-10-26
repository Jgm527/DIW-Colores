import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'inicio', component: () => import('../views/HomeView.vue') },
  { path: '/modelos', name: 'modelos', component: () => import('../views/ModelosView.vue') },
  { path: '/esquemas', name: 'esquemas', component: () => import('../views/EsquemasView.vue') },
  { path: '/paleta', name: 'paleta', component: () => import('../views/PaletaView.vue') },
  { path: '/proporciones', name: 'proporciones', component: () => import('../views/ProporcionesView.vue') },
  { path: '/contraste', name: 'contraste', component: () => import('../views/ContrasteView.vue') },
  { path: '/semantica', name: 'semantica', component: () => import('../views/SemanticaView.vue') },
  { path: '/combinaciones', name: 'combinaciones', component: () => import('../views/CombinacionesView.vue') },
  { path: '/vision', name: 'vision', component: () => import('../views/VisionView.vue') },
  { path: '/webgrafia', name: 'webgrafia', component: () => import('../views/WebgrafiaView.vue') },
  { path: '/presentacion', name: 'presentacion', component: () => import('../views/PresentacionView.vue'), meta: { zen: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
