---
tags: [diw, color, evaluacion, type/source]
last_sync: 2026-10-28
---
# Preguntas Test — Color en interfaces web

## Overview
Banco de 8 preguntas tipo test sobre el tema **Color**, elaboradas a partir del proyecto *Color en Interfaces Web* (Javier Guisande Moreira y Ángel Enrique Caballero Alonso) y ajustadas a las condiciones del documento de pautas del proyecto: cuatro opciones (A–D), una única respuesta correcta, distractores plausibles y preguntas centradas en conceptos importantes, no en detalles anecdóticos.

## Core Context & Architectural Rules
- **Base de las preguntas:** `Javier_Guisande-Enrique_Caballero-Proyecto_Color_Interfaces.pdf`.
- **Pautas seguidas:** `wiki/04_Sources/PROYECTO_PRINCIPIOS_DEL_DISENHO_DE_INTERFACES.pdf` (apartado «Preguntas tipo test»).
- **Tipos combinados:** concepto fundamental, aplicación práctica, identificación de un problema, situación concreta y comparación de soluciones.
- **Formato de cada pregunta:** enunciado, opciones A–D, respuesta correcta y explicación breve.

---

### 1. Las tres funciones del color

**¿Qué tres funciones fundamentales debe cumplir el color en una interfaz web?**

- A. Decorar los elementos, separar secciones y aumentar la saturación de la pantalla.
- B. Establecer jerarquía y profundidad, comunicar estado y significado, y contribuir a la identidad del producto.
- C. Sustituir el texto de las etiquetas, marcar los errores y definir la tipografía del sistema.
- D. Reducir el número de componentes, evitar el modo oscuro y simplificar la navegación.

**Respuesta correcta: B**

**Explicación:** El color no es un elemento decorativo: sirve para ordenar la jerarquía visual, para comunicar estados (éxito, error, aviso, foco) y para reforzar la identidad de marca. Las demás opciones confunden el color con funciones que corresponden a la estructura, la tipografía o la propia arquitectura de la interfaz.

---

### 2. Umbral de contraste para texto normal

**Un párrafo de 16 px sin negrita se muestra sobre una superficie clara. Para cumplir el nivel AA de WCAG 2.2, ¿qué ratio debe alcanzar como mínimo?**

- A. Bastar con un ratio de 3:1, porque el texto no llega a 18 pt.
- B. Superar un ratio de 7:1, ya que es el umbral que exige el nivel AA.
- C. Llegar a un ratio de 2:1 si el color de marca se mantiene intacto.
- D. Alcanzar un ratio mínimo de 4,5:1 entre el texto y el fondo.

**Respuesta correcta: D**

**Explicación:** El criterio 1.4.3 (nivel AA) exige ≥ 4,5:1 para texto normal. El 3:1 se reserva al texto grande y a los componentes de interfaz; el 7:1 corresponde al nivel AAA (1.4.6). Además, el resultado no se redondea: un 4,49:1 no cumple.

---

### 3. Campos obligatorios marcados solo en rojo

**En un formulario, los campos obligatorios se señalan únicamente con un borde rojo. ¿Qué problema de accesibilidad presenta?**

- A. Emplea el color como único canal de información e incumple el criterio 1.4.1.
- B. Incumple el criterio 1.4.11 porque un borde nunca puede superar 3:1.
- C. Vulnera el criterio 1.4.6 porque el rojo no alcanza 7:1.
- D. No presenta ningún problema si el rojo tiene contraste suficiente con el fondo.

**Respuesta correcta: A**

**Explicación:** El criterio 1.4.1 (Uso del color) prohíbe que el color sea el único medio de transmitir información. Un borde rojo debe ir acompañado de texto, icono o forma. Tener contraste suficiente no resuelve la dependencia cromática, y los criterios 1.4.11 y 1.4.6 regulan otras cuestiones (contraste de componentes y nivel AAA).

---

### 4. Un botón que no llega al mínimo

**Un botón con fondo #1550ED se coloca sobre una superficie #112642 y la medición da 2,47:1. ¿Cómo debe interpretarse el resultado?**

- A. Es correcto, porque los componentes de interfaz solo necesitan 2:1.
- B. Es correcto, porque el ratio se redondea a 3:1 y cumple.
- C. Incumple el mínimo de 3:1 exigido a los componentes de interfaz.
- D. Incumple el 7:1 del nivel AAA, que también se aplica a los botones.

**Respuesta correcta: C**

**Explicación:** Los componentes de interfaz y los iconos necesarios deben alcanzar ≥ 3:1 frente al color adyacente (1.4.11). Con 2,47:1 el botón no cumple, y el valor no se redondea. El 7:1 es el umbral de texto normal en AAA, no el requisito aplicable aquí.

---

### 5. Qué es realmente la regla 60-30-10

**¿Qué afirmación describe correctamente la regla 60-30-10?**

- A. Obliga a que el color de acento ocupe al menos el 30 % de la pantalla.
- B. Es una pauta de equilibrio visual: 60 % base, 30 % secundario y 10 % acento.
- C. Se trata de una norma WCAG obligatoria para cualquier paleta accesible.
- D. Consiste en repartir tres colores con el mismo peso visual por toda la interfaz.

**Respuesta correcta: B**

**Explicación:** La proporción 60-30-10 es una recomendación práctica de diseño, no un estándar ni un requisito de accesibilidad. Su objetivo es equilibrar base, color secundario o de marca y acento; las demás opciones invierten los porcentajes o le atribuyen un valor normativo que no tiene.

---

### 6. Rol de color frente a valor de color

**Según Material Design 3, ¿qué diferencia a un rol de color de un valor como #0B57D0?**

- A. Un rol define el propósito del color y su pareja de contraste; el valor solo indica un tono concreto.
- B. El rol es un formato de color y el valor es una variable CSS equivalente.
- C. El rol solo existe en modo oscuro y el valor solo se usa en modo claro.
- D. No existe diferencia: ambos se comportan igual al cambiar de tema.

**Respuesta correcta: A**

**Explicación:** Un valor hexadecimal no dice si puede llevar texto encima ni cómo debe comportarse en modo oscuro. El rol fija la función (fondo, texto, icono, borde) y su pareja accesible —por ejemplo, `primary` con `on-primary`—, de modo que el par se verifica una vez y el tema puede cambiarse sin repintar cada componente.

---

### 7. Comprobar que la jerarquía no depende del color

**¿Qué comprobación permite verificar que la jerarquía y los estados de una interfaz no dependen únicamente del color?**

- A. Aumentar la saturación de la acción principal hasta que destaque.
- B. Medir solo el color de marca con el cuentagotas del navegador.
- C. Cambiar el tema claro por el oscuro y comparar capturas.
- D. Ejecutar una revisión en escala de grises y una simulación de daltonismo.

**Respuesta correcta: D**

**Explicación:** Si al pasar la interfaz a escala de grises la acción principal sigue siendo evidente y los elementos interactivos se siguen identificando, la jerarquía no descansa en el tono. Aumentar la saturación o medir un único color no prueba nada sobre la dependencia cromática, y comparar temas claro y oscuro no sustituye esa prueba.

---

### 8. El fallo más frecuente según WebAIM Million 2026

**Según el informe WebAIM Million 2026 citado en el trabajo, ¿cuál es el fallo de accesibilidad más común en las portadas analizadas?**

- A. La falta de texto alternativo, presente en el 95,9 % de las portadas.
- B. La ausencia de etiquetas en formularios, presente en el 45 % de los casos.
- C. El texto de bajo contraste, presente en el 83,9 % de las portadas.
- D. Los enlaces sin subrayado, presentes en el 60 % de las portadas.

**Respuesta correcta: C**

**Explicación:** El informe detecta algún fallo WCAG en el 95,9 % de las portadas, pero el problema concreto más extendido es el texto de bajo contraste, con una media de 34 instancias por página. Las demás cifras no aparecen en el informe con ese significado.

---

## Clave de respuestas

| Pregunta | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Correcta | B | D | A | C | B | A | D | C |

## Linked Nodes
- Related: [[Index]], [[Contraste WCAG]], [[Regla 60-30-10]], [[Roles de color (Material Design 3)]], [[Uso del color (WCAG 1.4.1)]]
- Source History: [[2026-10-28]]
