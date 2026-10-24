---
tags: [ai-memory, state/active, type/source]
last_sync: 2026-10-24
---
# WebAIM Million 2026

## Overview
Informe primario de WebAIM sobre la accesibilidad de las 1.000.000 de portadas más visitadas, edición 2026. Es la fuente que citan Priority Pixels y Horlix. Leído el 2026-10-24.

## Core Context & Architectural Rules
- **URL:** <https://webaim.org/projects/million/>
- **Tipo:** técnica (informe de una organización especializada, con metodología propia).
- **Apartados del Tema 3:** 1 (importancia), 4 (contraste), 7 (errores), 9 (recomendaciones).
- **Estado de lectura:** leída (página del informe; no se ha descargado el PDF completo si lo hubiera).

### Metodología
- Analiza con WAVE las portadas de los primeros millones de sitios según la lista de dominios más visitados.
- Solo detecta errores comprobables automáticamente; el propio informe advierte que la conformidad real es peor que la medida.

### Datos clave
- **56.114.377** errores distintos detectados; **56,1** por página; **+10,1 %** respecto al año anterior.
- **95,9 %** de las portadas presentan fallos detectables de WCAG.
- Complejidad media: **1.437 elementos** por página, **+14,3 %**; aproximadamente **un error por cada 26 elementos**.
- **Texto de bajo contraste:** presente en **83,9 %** de las portadas, con una media de **34 instancias** por página. Es el fallo más común.
- Otros fallos frecuentes: falta de texto alternativo, falta de etiquetas en formularios, enlaces vacíos, botones vacíos y falta de declaración de idioma.
- El uso de ARIA ha crecido y las páginas con ARIA tienden a acumular más errores, lo que sugiere mal uso.

### Lectura para el Tema 3
- El contraste es el problema de color dominante en la web real, no un detalle teórico.
- La mejora de la accesibilidad no depende solo de conocer la norma: los mismos errores se repiten año tras año.
- Los datos son una foto de portadas, no de sitios completos ni de aplicaciones.

### Precauciones
- Las cifras son de detección automática; no equivalen al número total de barreras.
- No se debe convertir la media de errores en una predicción por página concreta.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Priority Pixels — WebAIM Million 2026]], [[Horlix — WebAIM Million 2026]], [[Contraste WCAG]], [[Verificación de contraste]]
- Source History: [[2026-10-24]]
