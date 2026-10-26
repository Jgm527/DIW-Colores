# Color en la web · DIW

Frontend educativo (Vue 3 + Vite) con ejemplos vivos sobre el uso del color en interfaces web:
modelos de color, esquemas cromáticos, generación de paletas, regla 60-30-10, contraste WCAG,
semántica, buenas/malas combinaciones y simulación de deficiencias de visión.

Incluye un **modo presentación** (`/presentacion`) con diapositivas y navegación por teclado,
y la **webgrafía** completa del Tema 3.

Elaboración propia para el Tema 3 de Diseño de Interfaces Web (2º DAW).
El contenido se basa en las fuentes listadas en la propia web (sección «Webgrafía»).

## Arranque

```bash
cd web
npm install
npm run dev      # http://localhost:5173
npm run build    # producción en dist/
npm run preview
```

## Despliegue en Vercel

- Root del proyecto: `web/`
- Build: `npm run build` · Output: `dist/`
- Incluye `vercel.json` con rewrites para SPA (history mode del router).

## Notas técnicas

- Los cálculos de contraste implementan la fórmula de luminancia relativa de WCAG 2.2
  (técnica G18). No se redondea: 4,49:1 no cumple 4,5:1.
- Las conversiones OKLCH implementan el espacio OKLab de Björn Ottosson (especificado en
  CSS Color Module Level 4).
- Los filtros de simulación de visión usan matrices feColorMatrix aproximadas
  (protanopía/deuteranopía/tritanopía); el resultado depende del simulador.
