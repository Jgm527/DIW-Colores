---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# WebAIM — Comprobador de contraste

## Overview
Herramienta web de WebAIM para calcular el ratio de contraste entre un color de primer plano y uno de fondo y comprobar los niveles WCAG. Leída el 2026-10-24.

## Core Context & Architectural Rules
- **URL:** <https://webaim.org/resources/contrastchecker/>
- **Tipo:** técnica (herramienta de una organización especializada en accesibilidad).
- **Apartados del Tema 3:** 4 (contraste), 8 (buenas y malas combinaciones), 9 (recomendaciones).
- **Estado de lectura:** leída.

### Hechos verificables
- La herramienta acepta colores en hexadecimal, con valor alfa opcional, o mediante selector de color.
- Comprueba texto normal, texto grande, objetos gráficos y componentes de interfaz.
- Resume los umbrales: WCAG 2.0 AA exige 4.5:1 para texto normal y 3:1 para texto grande; WCAG 2.1 añade 3:1 para gráficos y componentes de interfaz; AAA exige 7:1 para texto normal y 4.5:1 para texto grande.
- Define texto grande como 14 pt en negrita o más (unos 18.66 px) o 18 pt o más (unos 24 px).
- Permite ajustar la luminosidad de los colores para buscar combinaciones que cumplan.
- Ofrece una API básica añadiendo `&api` a un enlace permanente y un bookmarklet para usar la herramienta dentro de una página.
- Enlaza a un comprobador específico para enlaces identificados solo por color.

### Límites
- Es una calculadora de ratios; no evalúa por sí sola el contexto, las imágenes de fondo ni el cumplimiento completo de WCAG.
- La propia página no sustituye una auditoría manual.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Verificación de contraste]], [[Contraste WCAG]], [[Ratio de contraste]]
- Source History: [[2026-10-24]]
