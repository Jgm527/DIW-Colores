---
tags: [ai-memory, state/active, type/schema]
last_sync: 2026-10-24
---
# Esquema del Trabajo

## Overview
Esquema del trabajo escrito del **Tema 3 — Color en interfaces web**. Fija el índice, el reparto orientativo de palabras para 4–8 folios y qué notas y fuentes alimentan cada apartado. **No contiene el texto final**: es el plano de redacción y la lista de figuras pendientes.

## Core Context & Architectural Rules

### Formato que condiciona el esquema
- Extensión: **4 a 8 folios**.
- Fuente principal: **Arial 12**, interlineado **1,5**.
- Títulos y subtítulos pueden usar otros tamaños.
- Estructura clara mediante títulos y subtítulos.
- Imágenes, capturas y gráficos permitidos si aportan información; **cada imagen de Internet debe indicar su procedencia**.
- Texto con palabras propias; nada copiado literalmente.
- Las 8 preguntas tipo test y el vídeo son entregables aparte; este esquema cubre solo el documento escrito.

Fuente de las condiciones: `04_Sources/PROYECTO_PRINCIPIOS_DEL_DISENHO_DE_INTERFACES.pdf` ([[Hoja de Ruta]]).

### Presupuesto de extensión
Se toma como referencia **350 palabras por folio** (rango 300–400), Arial 12 e interlineado 1,5. El objetivo es **6 folios**, dentro del intervalo exigido y con margen para recortar o ampliar.

| # | Apartado | Palabras | Folios aprox. |
| --- | --- | --- | --- |
| 1 | Importancia del color en una interfaz | 160 | 0,45 |
| 2 | Colores principales, secundarios y de apoyo | 190 | 0,55 |
| 3 | Creación de paletas de colores | 210 | 0,60 |
| 4 | Contraste | 240 | 0,70 |
| 5 | Significado y uso de los colores | 170 | 0,50 |
| 6 | Utilización del color para destacar información | 190 | 0,55 |
| 7 | Errores frecuentes | 180 | 0,50 |
| 8 | Ejemplos de buenas y malas combinaciones | 180 | 0,50 |
| 9 | Recomendaciones prácticas | 150 | 0,45 |
| — | **Subtotal de texto** | **1.670** | **≈ 4,8** |
| — | Bibliografía/webgrafía | 100 | 0,30 |
| — | 5 figuras con pie | — | ≈ 1,1 |
| — | **Total estimado** | — | **≈ 6,2** |

- Con 300 palabras/folio el conjunto se acerca a 7 folios; con 400, a 5,5. Ambos caben en el límite.
- Si el documento se acerca a 8 folios, recortar primero los ejemplos repetidos del apartado 8, no las recomendaciones.
- Las tablas y los pies de figura cuentan como texto; las figuras no deben usarse para saltarse el límite.

### Índice y subapartados
1. **Importancia del color en una interfaz**
   1.1. Las tres funciones: jerarquía, estado e identidad.
   1.2. Legibilidad y accesibilidad: el coste de un color mal elegido.
   1.3. Dato de partida: el texto de bajo contraste en WebAIM Million 2026.
2. **Colores principales, secundarios y de apoyo**
   2.1. Rol frente a valor hexadecimal.
   2.2. Color principal y de acento.
   2.3. Color secundario.
   2.4. Colores de apoyo, neutros y semánticos.
   2.5. Errores típicos al repartir funciones.
3. **Creación de paletas de colores**
   3.1. Definir funciones antes de elegir valores.
   3.2. Punto de partida y familias.
   3.3. Escalas con un modelo perceptualmente uniforme (HSL frente a OKLCH).
   3.4. La proporción 60-30-10 como heurística, no como norma.
   3.5. Tokens, verificación y documentación.
4. **Contraste**
   4.1. Luminancia relativa y ratio.
   4.2. Umbrales de WCAG 2.2 (texto normal, grande y no textual).
   4.3. Texto sobre imágenes, degradados y transparencias.
   4.4. Herramientas y proceso de verificación.
   4.5. Casos que fallan y cómo corregirlos.
5. **Significado y uso de los colores**
   5.1. Semántica funcional: error, éxito, aviso, información.
   5.2. Convenciones culturales: ejemplos y cautelas.
   5.3. Estabilidad del significado y contexto de uso.
   5.4. Errores: universalizar asociaciones y depender solo del tono.
6. **Utilización del color para destacar información**
   6.1. Jerarquía y énfasis: una acción principal.
   6.2. Acento, llamadas a la acción y superficies.
   6.3. Estados interactivos y foco visible.
   6.4. La regla de no usar solo color.
   6.5. Cómo comprobar que el énfasis funciona.
7. **Errores frecuentes**
   7.1. Qué dicen los datos primarios de WebAIM Million 2026.
   7.2. Catálogo de errores de color.
   7.3. Por qué se repiten.
   7.4. Cómo detectarlos antes de publicar.
8. **Ejemplos de buenas y malas combinaciones**
   8.1. Criterio: función, ratio y segundo canal.
   8.2. Tipos de combinación que fallan y por qué.
   8.3. Tres ejemplos con ratio calculado.
   8.4. Qué convierte una combinación en buena.
9. **Recomendaciones prácticas**
   9.1. Checklist para el desarrollador.
   9.2. Proceso mínimo antes de publicar.
   9.3. Cierre: la marca se adapta al contraste.

### Qué alimenta cada apartado
| # | Notas de la bóveda | Fuentes que se citan | Figura necesaria |
| --- | --- | --- | --- |
| 1 | [[Color en interfaces web]], [[Percepción del color]], [[WebAIM Million 2026]] | WebAIM Million 2026; InfoQ; W3C 1.4.3 | Ninguna o detalle de la figura 3 |
| 2 | [[Color de marca]], [[Roles de color (Material Design 3)]], [[Colores semánticos]], [[Paleta de colores]] | Material Design 3 — Color roles; Android Wear; CareerFoundry | Fig. 1 (paleta con roles) |
| 3 | [[Paleta de colores]], [[Esquemas de color]], [[Regla 60-30-10]], [[OKLCH]], [[Modelos de color]] | CareerFoundry; SeedProd; Bootcamp; Material 3 | Fig. 1 (paleta propia 60-30-10) |
| 4 | [[Contraste WCAG]], [[Ratio de contraste]], [[Luminancia relativa]], [[Contraste mínimo (WCAG 1.4.3)]], [[Contraste de elementos no textuales (WCAG 1.4.11)]], [[Verificación de contraste]] | W3C 1.4.3 y 1.4.11; WebAIM checker; WebAIM evaluating | Fig. 2 (WebAIM) |
| 5 | [[Colores semánticos]], [[Convenciones culturales del color]], [[Percepción del color]] | InfoQ; SeedProd; CareerFoundry; W3C 1.4.1 | Fig. 3 (estados con icono y texto) |
| 6 | [[Jerarquía visual con color]], [[Uso del color (WCAG 1.4.1)]], [[Roles de color (Material Design 3)]], [[Deficiencia de visión al color]] | W3C 1.4.1; Material 3; InfoQ | Fig. 3 y Fig. 5 (daltonismo) |
| 7 | [[Errores frecuentes de color]], [[WebAIM Million 2026]], [[Verificación de contraste]] | WebAIM Million 2026 (informe primario); Pope Tech; Material 3 | Fig. 4 (interfaz mala) |
| 8 | [[Combinaciones de color (buenas y malas)]], [[Ratio de contraste]], [[Esquemas de color]], [[Deficiencia de visión al color]] | Pope Tech (ratios); WebAIM; W3C 1.4.1 | Fig. 4 y Fig. 5 |
| 9 | [[Checklist de color para desarrolladores]], [[Niveles de conformidad WCAG]], [[Verificación de contraste]] | WCAG 2.2; WebAIM evaluating; Material 3 | Ninguna; puede reutilizar la Fig. 2 |

### Ejemplos visuales pendientes y procedencia
Los elabora el autor con capturas reales. En cada pie de figura hay que anotar **qué es, cómo se obtuvo y de dónde sale**.

1. **Paleta propia aplicando 60-30-10.**
   - Contenido: color base/neutro, color de marca y acento, con los roles etiquetados.
   - Procedencia: **elaboración propia**. Anotar herramienta (Figma, CSS/OKLCH, etc.), fecha y que los porcentajes son una heurística, no una medición exacta.
2. **Verificación de contraste con WebAIM.**
   - Contenido: captura de <https://webaim.org/resources/contrastchecker/> con un par texto/fondo y el ratio devuelto.
   - Procedencia: **captura propia** de WebAIM; indicar URL, fecha de consulta, colores introducidos y resultado. No incluir datos personales.
3. **Interfaz con buena combinación.**
   - Contenido: pantalla real o maqueta propia con jerarquía clara, texto legible y estados diferenciados.
   - Procedencia: si es un sitio real, **URL, fecha y navegador**; si es maqueta, **elaboración propia**. Anotar si se recortó o se modificó.
4. **Interfaz con mala combinación.**
   - Contenido: caso con texto de bajo contraste o significado dependiente solo del color.
   - Procedencia: misma regla que la figura 3. Si se recrea para evitar señalar a un sitio real, indicarlo como **recreación propia basada en un patrón observado**.
5. **Simulación de daltonismo.**
   - Contenido: la interfaz de la figura 3 o 4 vista con un simulador de deuteranopia/protanopia.
   - Procedencia: **captura propia** generada con la herramienta X (anotar nombre y URL); indicar de qué figura es la simulación y que el resultado depende del simulador.

### Orden de redacción recomendado
1. Apartados 1 y 4: fijan el marco y los umbrales.
2. Apartados 2 y 3: construyen la paleta.
3. Apartados 5 y 6: significado y énfasis.
4. Apartados 7 y 8: diagnóstico y ejemplos.
5. Apartado 9: cierre operativo.
6. Bibliografía y revisión final de extensión.

### Controles antes de cerrar
- [ ] Los nueve apartados están presentes y en el orden del PDF.
- [ ] Cada apartado responde a qué es, por qué importa, reglas, errores, buena/mala aplicación y aplicación real.
- [ ] Cada afirmación técnica tiene fuente; las heurísticas se presentan como tales.
- [ ] Todas las fuentes están en la bibliografía/webgrafía con URL.
- [ ] Cada figura tiene pie y procedencia.
- [ ] El texto no copia párrafos literales.
- [ ] Extensión final entre 4 y 8 folios.
- [ ] Citas unificadas a WCAG 2.2.

## Linked Nodes
- Related: [[Index]], [[Hoja de Ruta]], [[Color en interfaces web]], [[Niveles de conformidad WCAG]], [[Checklist de color para desarrolladores]], [[Errores frecuentes de color]], [[Combinaciones de color (buenas y malas)]], [[Convenciones culturales del color]], [[Jerarquía visual con color]]
- Source History: [[2026-10-24]]
