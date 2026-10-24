---
tags: [ai-memory, state/active, type/concept]
last_sync: 2026-10-22
---
# Niveles de conformidad WCAG

## Overview
WCAG 2 define tres niveles de criterios de éxito (A, AA, AAA) y cinco requisitos de conformidad. La conformidad se declara por **página web completa** (y por proceso completo), no por componente suelto. El W3C **no revisa ni certifica** las declaraciones.

## Core Context & Architectural Rules

### Niveles
- **A**: mínimo. Hay que satisfacer todos los criterios A.
- **AA**: todos los A + todos los AA. Es el nivel que citan las políticas públicas y [[EN 301 549]] para web.
- **AAA**: todos los A + AA + AAA. Understanding *Conformance* indica que no se recomienda exigir AAA como política general de sitios enteros.

Fuente de niveles y requisitos: <https://www.w3.org/TR/WCAG22/#conformance>
Understanding: <https://www.w3.org/WAI/WCAG22/Understanding/conformance>
Resumen WAI: <https://www.w3.org/WAI/standards-guidelines/wcag/>

### Cinco requisitos (WCAG 2.2)
1. Nivel de conformidad completo (A / AA / AAA).
2. Páginas enteras, incluidas las variantes responsive automáticas.
3. Procesos completos (p. ej. compra de principio a fin).
4. Solo se confía en usos de tecnología con *accessibility support*.
5. No interferencia (criterios que aplican a todo el contenido de la página).

### Declaración de conformidad
Es **opcional**. Si se hace, WCAG lista los datos mínimos (fecha, nivel, título de las directrices, alcance, tecnologías de las que se depende). Los iconos de conformidad WAI no implican que el W3C haya validado el sitio.

Fuente: <https://www.w3.org/WAI/Conformance>

### W3C no certifica
«The appearance of a conformance icon does not imply that W3C has reviewed or validated the claim.»
Un sello de una empresa auditora es un servicio de terceros, no un certificado W3C. La metodología oficial de evaluación por muestreo es [[WCAG-EM]].

### Compatibilidad entre versiones
WCAG 2.2 no deroga 2.1 ni 2.0. Contenido conforme a 2.2 también lo es a 2.1 y 2.0. W3C recomienda usar la versión más reciente.

Fuente: <https://www.w3.org/WAI/standards-guidelines/wcag/>

### Versión adoptada en este proyecto: WCAG 2.2
- **Decisión (2026-10-24):** todas las citas del Tema 3 se unifican a **WCAG 2.2**, publicada como Recommendation el 5 de octubre de 2023.
- **Por qué:** es la versión vigente recomendada por el W3C y la que se alinea con la norma armonizada europea [[EN 301 549]].
- **Efecto sobre los criterios de color:** WCAG 2.2 añade nueve criterios nuevos respecto a 2.1, pero los criterios **1.4.1 *Use of Color* y 1.4.3 *Contrast (Minimum)* no cambian**. El único criterio eliminado de 2.0/2.1 es 4.1.1 *Parsing*, que no afecta al color.
- Fuente: W3C, *What's New in WCAG 2.2*: <https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/>
- Fuente normativa: <https://www.w3.org/TR/WCAG22/>

### ISO
WCAG 2.2 (texto de octubre de 2023) es [[ISO/IEC 40500]] :2025.

## Linked Nodes
- Related: [[Index]], [[Contraste WCAG]], [[Contraste mínimo (WCAG 1.4.3)]], [[WCAG-EM]], [[EN 301 549]], [[ISO/IEC 40500]], [[Declaración de accesibilidad]], [[WCAG 3.0 (borrador)]], [[Checklist de color para desarrolladores]]
- Source History: [[2026-10-22]], [[2026-10-24]]

## Evolution / Updates
- 2026-10-24 · Enlazado con [[Contraste WCAG]] para situar los umbrales de color dentro de los niveles A/AA/AAA.
- 2026-10-24 · **Versión unificada a WCAG 2.2.** Se documenta la decisión y se verifica que 1.4.1 y 1.4.3 no cambian respecto a 2.1; se cita *What's New in WCAG 2.2*. Se enlaza el [[Checklist de color para desarrolladores]].
