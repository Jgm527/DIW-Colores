# Tema 3. Color en interfaces web

## 1. Importancia del color en una interfaz

### 1.1. Las tres funciones: jerarquía, estado e identidad

El color en una interfaz web no es un elemento puramente decorativo, sino que cumple tres funciones fundamentales. En primer lugar, permite establecer **jerarquía y profundidad**, indicando qué elementos se encuentran por encima de otros o qué componentes son interactivos. En segundo lugar, comunica **estado y significado** (éxito, error, advertencia, selección o foco). En tercer lugar, contribuye a la **identidad** del producto a través del color de marca [[Color en interfaces web]].

### 1.2. Legibilidad y accesibilidad: el coste de un color mal elegido

La legibilidad depende, en gran medida, del contraste entre texto y fondo. Si este es insuficiente, la lectura se dificulta para cualquier usuario, pero especialmente para personas con deficiencias visuales o en condiciones de iluminación adversas. Además, el color nunca debe ser el único medio para transmitir información, tal y como establece el criterio 1.4.1 *Use of Color* de WCAG 2.2 [[Uso del color (WCAG 1.4.1)]].

### 1.3. Dato de partida: el texto de bajo contraste en WebAIM Million 2026

El informe primario *WebAIM Million 2026* analiza las portadas del millón de sitios más visitados. Los datos revelan que el 95,9 % de las portadas presentan algún fallo detectable de WCAG, con una media de 56,1 errores por página (+10,1 % respecto al año anterior). El error más frecuente es el texto de bajo contraste, presente en el 83,9 % de las portadas, con una media de 34 instancias por página. Estos datos ponen de manifiesto que el contraste es, hoy en día, uno de los principales problemas de accesibilidad en la web [[WebAIM Million 2026]].

## 2. Colores principales, secundarios y de apoyo

La diferencia entre un color y un rol no está en el formato, sino en la función. `#0B57D0` es un valor: no indica si puede llevar texto encima ni cómo debe comportarse en modo oscuro. Un rol sí: fija el propósito del color y el de su pareja de contraste, de modo que el par se verifica una sola vez y el tema se cambia sin repintar componente por componente [[Roles de color (Material Design 3)]][[Sistema de color en CSS]].

Material Design 3 define 26 roles estándar agrupados en seis familias (*primary*, *secondary*, *tertiary*, *error*, *surface* y *outline*), además de otros como *inverse* o *fixed*. Cada componente del catálogo tiene asignados los roles de su fondo, texto, icono y borde —un botón relleno usa *primary* con *on-primary*—, y los componentes propios deben mapearse a esos roles en lugar de inventar valores nuevos.

Conviene no confundir ambas clasificaciones: *primary*, *secondary* y *tertiary* indican énfasis funcional dentro de un componente; «principal, secundario y de apoyo» indica peso visual y proporción en la pantalla. Este apartado usa la segunda, con los roles de Material como referencia de implementación.

### 2.1. Color principal y de acento

El color *primary* se reserva a las acciones y elementos más importantes, como botones de alta prioridad o elementos activos. El color *tertiary* actúa como acento para elementos que requieren énfasis especial, pero sin competir con la acción principal. Ambos deben tener pares accesibles con sus correspondientes roles *on-primary* y *on-tertiary* [[Material Design 3 — Color roles]].

### 2.2. Color secundario

El color *secondary* se utiliza para elementos de menor prominencia, como chips de filtro o estados de selección secundarios. Su función es dar variedad sin restar protagonismo a la acción principal, manteniendo siempre la coherencia jerárquica del sistema [[Roles de color (Material Design 3)]].

### 2.3. Colores de apoyo, neutros y semánticos

Los colores neutros o de superficie (*surface*) constituyen la base de la interfaz, mientras que los roles *on-surface* se destinan al texto e iconos. Por su parte, los colores semánticos comunican significado funcional: *error* para errores, y, de forma equivalente, se definen roles para éxito, aviso o información. Estos colores nunca deben utilizarse como único canal de comunicación, debiendo ir siempre acompañados de texto, icono o forma [[Colores semánticos]][[Uso del color (WCAG 1.4.1)]].

Para terminar, los errores más frecuentes son asignar el color principal a demasiados elementos, usar roles *container* para texto o iconos —son rellenos, no superficies de lectura— y definir colores sueltos sin función documentada. Además, los emparejamientos de Material garantizan un mínimo de 3:1, pero ese valor no sustituye el 4,5:1 que WCAG 2.2 exige al texto normal [[Material Design 3 — Color roles]][[Contraste mínimo (WCAG 1.4.3)]].

## 3. Creación de paletas de colores

### 3.1. Definir funciones antes de elegir valores

Una paleta de colores útil no es una colección de tonos atractivos, sino un sistema con funciones bien definidas. Antes de elegir cualquier valor hexadecimal, es necesario identificar qué papel cumplirá cada color: fondo, superficie, texto principal/secundario, color de marca, acento o estado semántico [[Paleta de colores]].

### 3.2. Punto de partida y familias

El color de marca suele servir como punto de partida para generar el resto de la paleta. A partir de él se construyen familias con distintas luminosidades para cubrir todos los estados necesarios. Los esquemas cromáticos clásicos (*monocromático*, *análogo*, *complementario*, etc.) pueden servir como guía para las relaciones tonales, pero no garantizan accesibilidad ni legibilidad por sí mismos [[Esquemas de color]][[Color de marca]].

### 3.3. Escalas con un modelo perceptualmente uniforme (HSL frente a OKLCH)

Tradicionalmente, HSL se ha utilizado para generar variaciones de color, pero presenta limitaciones en cuanto a uniformidad perceptiva. Según el vídeo de divulgación *The Easy Way to Pick UI Colors* de Sajid, LCH/OKLCH ofrecen variaciones de luminosidad más uniformes frente a HSL, aunque esto es una afirmación del autor y **queda pendiente de verificar** con fuentes oficiales. Aun así, sea cual sea el modelo elegido, los valores resultantes deben verificarse con herramientas de contraste [[OKLCH]][[Paleta de colores]].

### 3.4. La proporción 60-30-10 como heurística, no como norma

La regla 60-30-10 propone repartir los colores en tres proporciones: un 60 % para el color base o neutro, un 30 % para el color secundario o de marca, y un 10 % para el color de acento. Esta es una **heurística de diseño** ampliamente difundida, pero no constituye un estándar, ni una norma WCAG, ni un requisito de accesibilidad. Su finalidad es lograr equilibrio visual, no cumplir umbrales de contraste [[Regla 60-30-10]].

### 3.5. Tokens, verificación y documentación

Una paleta profesional debe implementarse mediante *tokens* (variables CSS), nombrados por función en lugar de por apariencia. Cada par de colores que se utilice para texto o componentes debe verificarse antes de su uso. Además, es fundamental documentar las decisiones tomadas, incluyendo los ratios medidos y las excepciones justificadas [[Paleta de colores]][[Verificación de contraste]].

## 4. Contraste

### 4.1. ¿Qué es el contraste?

El **contraste** es la diferencia de luminosidad entre un elemento (como texto, un icono o un botón) y el color sobre el que aparece.

Cuanto mayor sea esa diferencia, más fácil será distinguirlo. Cuanta menor sea, más difícil resultará leerlo, sobre todo para personas con baja visión, daltonismo o al usar la pantalla con poca luz.

Un ejemplo claro: el negro (#000000) sobre blanco (#FFFFFF) tiene un contraste muy alto y se lee sin esfuerzo. En cambio, un gris claro sobre blanco apenas se distingue y se vuelve incómodo de leer.

### 4.2. El ratio de contraste

WCAG mide esa diferencia mediante el *ratio de contraste*. Se expresa con una proporción del tipo `4,5:1`, que significa: el color más claro es 4,5 veces más luminoso que el más oscuro.

La escala va de:

- **1:1** – Sin contraste. El elemento y el fondo son el mismo color, por lo que es imposible distinguirlo.
- **21:1** – Contraste máximo. El caso más claro es el negro sobre blanco.

Un detalle importante: **el resultado nunca se redondea**. Si un par da `4,49:1`, no cumple el requisito de `4,5:1`, aunque visualmente la diferencia parezca mínima [[Ratio de contraste]][[Luminancia relativa]].

### 4.3. ¿Cuánto contraste se necesita?

WCAG 2.2 establece unos umbrales mínimos en función del tipo de elemento. Estos son los que se aplican para alcanzar el nivel AA, el más utilizado en proyectos:

| Elemento                                                                                          | Nivel       | Ratio mínimo                    |
| ------------------------------------------------------------------------------------------------- | ----------- | ------------------------------- |
| Texto normal (menos de 18 pt / 24 px, o menos de 14 pt / 18,66 px si no está en negrita)          | AA (1.4.3)  | ≥ 4,5:1                         |
| Texto grande (igual o superior a 18 pt / 24 px, o igual o superior a 14 pt / 18,66 px en negrita) | AA (1.4.3)  | ≥ 3:1                           |
| Componentes de interfaz e iconos necesarios (botones, campos, indicadores, bordes...)             | AA (1.4.11) | ≥ 3:1 frente al color adyacente |
| Texto normal (nivel AAA)                                                                          | AAA (1.4.6) | ≥ 7:1                           |
| Texto grande (nivel AAA)                                                                          | AAA (1.4.6) | ≥ 4,5:1                         |

Para este trabajo se unifica la referencia a **WCAG 2.2**. Los criterios 1.4.1 y 1.4.3 se mantienen igual que en WCAG 2.1. Además, el criterio 4.1.1 *Parsing* queda obsoleto [[Contraste WCAG]][[Niveles de conformidad WCAG]][[W3C — What's New in WCAG 2.2]].

Para garantizar el contraste, conviene comprobar siempre el **color final que ve el usuario**, no el valor del *token*. Hay que prestar especial atención a textos sobre imágenes, degradados, transparencias o estados interactivos como *hover*, *focus* o *disabled* [[Verificación de contraste]][[Errores frecuentes de color]].

El modo más práctico es medir con el *WebAIM Contrast Checker* [[WebAIM — Comprobador de contraste]]. Como ejemplo, un texto gris `#7C7C7C` sobre blanco (`#FFFFFF`) solo alcanza 4,17:1, por debajo del 4,5:1 exigido para texto normal, mientras que `#6B6B6B` sobre blanco alcanza 5,36:1 y sí lo cumple [[Combinaciones de color (buenas y malas)]][[Pope Tech — Color contrast accessibility tools with examples]].

**Regla práctica:** *Si tienes que forzar la vista para leerlo, el contraste es insuficiente*. Compruébalo siempre con una herramienta.

## 5. Significado y uso de los colores

Los colores semánticos se utilizan para comunicar estados del sistema, como errores, avisos, éxito o información. Aunque existen convenciones muy extendidas (rojo para error, amarillo/naranja para aviso, verde para éxito y azul para información), estas asociaciones no son universales: son aprendidas, varían entre culturas y, en muchos casos, proceden de heurísticas y no de estudios interculturales. Por ello, InfoQ advierte de su predominio occidental, y las listas divulgativas, como las de SeedProd, deben tomarse con cautela [[Colores semánticos]][[Convenciones culturales del color]][[InfoQ — Colors and the UI]][[SeedProd — Teoría del color en diseño web]].

Para que estos significados resulten eficaces, es fundamental mantener la coherencia en toda la aplicación: el mismo estado debe usar siempre los mismos colores, iconos y mensajes. Además, **nunca debe usarse el color como único canal** para transmitir información. Debe ir siempre acompañado de texto, icono o forma, tal como exige el criterio 1.4.1 de WCAG 2.2. Esto no solo evita malentendidos, sino que también garantiza la accesibilidad para personas con deficiencias de visión al color. Asumir significados fijos o codificar estados únicamente con color es uno de los errores más frecuentes, especialmente en productos con alcance internacional [[Uso del color (WCAG 1.4.1)]][[Deficiencia de visión al color]].

## 6. Utilización del color para destacar información

Para guiar la atención, el color debe usarse con moderación. Lo más eficaz es **destacar una sola acción principal** por vista, reservando los tonos más llamativos para ella y manteniendo las superficies neutras para no competir con el contenido [[Jerarquía visual con color]][[Roles de color (Material Design 3)]].

Los estados interactivos (*hover*, *focus*, *active* o *disabled*) deben distinguirse claramente, especialmente el **foco de teclado**, que ha de ser visible y con contraste suficiente. Para comprobarlo, basta con una prueba en **escala de grises** o con herramientas de simulación: si la acción principal sigue siendo evidente y los elementos interactivos siguen identificándose, la jerarquía es correcta [[Deficiencia de visión al color]][[Verificación de contraste]].

## 7. Errores frecuentes

### 7.1. Qué dicen los datos primarios de WebAIM Million 2026

Los datos del informe primario son claros: el 95,9 % de las portadas analizadas presenta algún fallo de accesibilidad detectable automáticamente. La media es de 56,1 errores por página, un 10,1 % más que el año anterior. El texto de bajo contraste es, con diferencia, el fallo más común: aparece en el 83,9 % de las portadas, con una media de 34 instancias por página. Además, la complejidad de las páginas ha aumentado hasta los 1.437 elementos de media, lo que supone aproximadamente un error por cada 26 elementos. Estos porcentajes corresponden exclusivamente a portadas y a detección automática, por lo que la situación real es, con probabilidad, aún peor [[WebAIM Million 2026]].

### 7.2. Catálogo de errores de color

Los errores que se repiten con mayor frecuencia son los siguientes:

1. **Texto de bajo contraste**: grises claros sobre blanco o texto de marca insuficientemente oscuro.
2. **Significado solo por color**: estados, errores o campos obligatorios identificados únicamente por el tono.
3. **Dependencia de rojo/verde**: especialmente problemático para personas con deficiencias rojo-verde.
4. **Enlaces poco evidentes**: enlaces sin subrayado que solo se distinguen por color o con contraste insuficiente.
5. **Texto sobre imágenes o degradados**: contraste medido incorrectamente sobre el fondo real.
6. **Estados no verificados**: hover, foco, activo o deshabilitado quedan sin comprobar.
7. **Roles mal emparejados**: uso de roles *container* para texto o combinaciones de roles que rompen el contraste.
8. **Marca por encima de legibilidad**: mantener el color corporativo para texto aunque no alcance el umbral.
9. **Exceso de acentos**: demasiados colores destacados que eliminan la jerarquía.
10. **Valores hardcodeados**: hex repetidos sin sistema de tokens ni adaptación a modo oscuro.
11. **Confianza exclusiva en herramientas automáticas**: no se revisan transparencias, imágenes o degradados.
12. **Combinaciones con poca diferencia de luminancia**: tonos «armónicos» que, medidos, resultan ilegibles [[Errores frecuentes de color]].

### 7.3. Detección y prevención

Estos errores se repiten porque son fáciles de introducir, difíciles de detectar a simple vista y rara vez se comprueban manualmente. Aunque son los más corregibles, la tendencia a priorizar la estética o preservar el color de marca impide que se subsanen sistemáticamente [[WebAIM Million 2026]][[Errores frecuentes de color]].

Para detectarlos, conviene combinar automatización y revisión manual: medir los pares reales con un comprobador de contraste, revisar en escala de grises, simular deficiencias de visión al color, navegar con teclado y probar los estados y el modo oscuro. Si para entender un mensaje es imprescindible distinguir un tono, existe una dependencia cromática que debe corregirse [[Verificación de contraste]][[Errores frecuentes de color]].

## 8. Ejemplos de buenas y malas combinaciones

### 8.1. Criterio: función, ratio y segundo canal

Para juzgar una combinación, no basta con que sea visualmente atractiva. Es necesario seguir tres criterios: **función** (¿es texto, componente o decoración?), **ratio medible** (¿alcanza el umbral aplicable según WCAG 2.2?) y **segundo canal** (¿hay texto, icono, forma o patrón si el color transmite significado?). Un par puede cumplir el ratio y, aun así, fallar el criterio 1.4.1 si el significado depende exclusivamente del color [[Combinaciones de color (buenas y malas)]][[Uso del color (WCAG 1.4.1)]].

### 8.2. Tipos de combinación que fallan y por qué

Algunas combinaciones son sistemáticamente problemáticas. Los grises claros sobre blanco son los más frecuentes debido a su escasa diferencia de luminancia. Dos tonos saturados con luminancia similar pueden parecer distintos, pero tener un ratio insuficiente. Los esquemas complementarios no garantizan contraste. El texto sobre imágenes, degradados o transparencias es propenso a fallos. Por último, el uso de roles *container* para texto (tal como advierte Material Design 3) o la distinción de enlaces únicamente por color son errores recurrentes [[Esquemas de color]][[Material Design 3 — Color roles]][[Errores frecuentes de color]].

### 8.3. Tres ejemplos con ratio calculado

Tomando como referencia los ejemplos de Pope Tech, se pueden observar correcciones concretas:

| Caso                     | Combinación                       | Ratio  | Resultado                                                      | Corrección propuesta                               |
| ------------------------ | --------------------------------- | ------ | -------------------------------------------------------------- | -------------------------------------------------- |
| Texto gris sobre blanco  | `#7C7C7C` / `#FFFFFF`             | 4,17:1 | No cumple (texto normal requiere ≥ 4,5:1)                      | `#6B6B6B` / `#FFFFFF` → 5,36:1                     |
| Botón sobre fondo oscuro | `#1550ED` / `#112642`             | 2,46:1 | No cumple (componente no textual requiere ≥ 3:1)               | `#3365F0` / `#112642` → 3,08:1                     |
| Enlace sobre texto       | `#0070C9` sobre `#333333` (texto) | 2,5:1  | No cumple para distinguirse solo por color (se requiere ≥ 3:1) | Aumentar el contraste o añadir subrayado al enlace |

Estos valores son reproducibles con un comprobador de contraste y sirven como ejemplo didáctico [[Combinaciones de color (buenas y malas)]][[Pope Tech — Color contrast accessibility tools with examples]].

### 8.4. Qué convierte una combinación en buena

Una combinación es buena cuando cumple su función sin sacrificar legibilidad. Para texto, esto significa alcanzar el umbral correspondiente. Para componentes interactivos, el contraste debe ser suficiente en todos sus estados. Si transmite significado, debe haber un segundo canal. Además, debe seguir siendo distinguible en escala de grises y con simulación de daltonismo. Por último, la combinación debe integrarse en un sistema coherente de roles y tokens, no ser un caso aislado [[Verificación de contraste]][[Deficiencia de visión al color]][[Checklist de color para desarrolladores]].

## 9. Recomendaciones prácticas

Antes de dar por finalizado el trabajo con el color, conviene comprobar lo siguiente: cada color debe tener una función definida como *token*, el contraste debe medirse sobre el color final renderizado (≥ 4,5:1 para texto normal, ≥ 3:1 para texto grande y componentes), los estados interactivos y el modo oscuro deben verificarse, y los errores, enlaces o campos obligatorios deben tener siempre un segundo canal además del color. También es importante revisar en escala de grises, simular daltonismo, navegar con teclado y documentar los ratios obtenidos [[Checklist de color para desarrolladores]][[Verificación de contraste]].

Por último, **la marca se adapta a la accesibilidad, no al contrario**. Si el color corporativo no alcanza los umbrales exigidos, debe reservarse para elementos gráficos o ajustarse sin perder su reconocimiento. Un diseño accesible no es menos atractivo, sino más usable para todo el mundo [[Color de marca]][[Contraste WCAG]].

## Bibliografía y webgrafía

- Android Developers. *Color en Wear OS*. Google. Disponible en: [https://developer.android.com/design/ui/wear/guides/styles/color?hl=es](https://developer.android.com/design/ui/wear/guides/styles/color?hl=es)
- Bootcamp. *The 60-30-10 Color Rule for UI Design*. Medium. Disponible en: [https://bootcamp.uxdesign.cc/the-60-30-10-color-rule-for-ui-design-32695d04a7c2](https://bootcamp.uxdesign.cc/the-60-30-10-color-rule-for-ui-design-32695d04a7c2)
- CareerFoundry. *Introduction to Color Theory and Color Palettes*. Disponible en: [https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/](https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/)
- Google. *Material Design 3 — Color roles*. Disponible en: [https://m3.material.io/styles/color/roles](https://m3.material.io/styles/color/roles)
- InfoQ. *Colors and the UI*. Disponible en: [https://www.infoq.com/articles/Colors-UI/](https://www.infoq.com/articles/Colors-UI/)
- Pope Tech. *Color contrast accessibility tools with examples*. Disponible en: [https://blog.pope.tech/?p=7791](https://blog.pope.tech/?p=7791)
- Sajid. *The Easy Way to Pick UI Colors* [Vídeo]. YouTube. Disponible en: ([https://www.youtube.com/watch?v=vvPklRN0Tco](https://youtu.be/vvPklRN0Tco))
- Sajid. *UI Colors*. Disponible en: [https://www.iamsajid.com/ui-colors/](https://www.iamsajid.com/ui-colors/)
- SeedProd. *Teoría del color en diseño web*. Disponible en: [https://www.seedprod.com/es/web-design-color-theory/](https://www.seedprod.com/es/web-design-color-theory/)
- WebAIM. *Contrast Checker*. Disponible en: [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)
- WebAIM. *Evaluating Contrast and Color for Accessibility*. Disponible en: [https://webaim.org/articles/contrast/](https://webaim.org/articles/contrast/)
- WebAIM. *WebAIM Million 2026*. Disponible en: [https://webaim.org/projects/million/](https://webaim.org/projects/million/)
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. Disponible en: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)
- W3C/WAI. *Understanding Success Criterion 1.4.1: Use of Color*. Disponible en: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- W3C/WAI. *Understanding Success Criterion 1.4.3: Contrast (Minimum)*. Disponible en: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- W3C/WAI. *What's New in WCAG 2.2*. Disponible en: [https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- Ministerio de la Presidencia, Relaciones con las Cortes e Igualdad. *Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público*. BOE-A-2018-12699. Disponible en: [https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699](https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699)
