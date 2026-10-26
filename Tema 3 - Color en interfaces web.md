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

### 4.1. Luminancia relativa y ratio

El contraste entre dos colores se calcula mediante el *ratio de contraste* definido por WCAG 2.2. Para ello se utiliza la luminancia relativa de cada color, aplicando la fórmula `(L1 + 0.05) / (L2 + 0.05)`, donde `L1` corresponde al color más claro y `L2` al más oscuro. El valor resultante oscila entre 1:1 y 21:1, y **no debe redondearse**: 4,49:1 no cumple con el umbral de 4,5:1 [[Ratio de contraste]][[Luminancia relativa]].

### 4.2. Umbrales de WCAG 2.2 (texto normal, grande y no textual)

WCAG 2.2 establece los siguientes umbrales, que se mantienen sin cambios respecto a 2.1 para los criterios relacionados con el color:

| Uso | Nivel | Umbral |
| --- | --- | --- |
| Texto normal e imágenes de texto | AA (1.4.3) | ≥ 4.5:1 |
| Texto grande (≥ 18 pt / 24 px o ≥ 14 pt / 18,66 px en negrita) | AA (1.4.3) | ≥ 3:1 |
| Texto normal | AAA (1.4.6) | ≥ 7:1 |
| Texto grande | AAA (1.4.6) | ≥ 4.5:1 |
| Componentes de interfaz y gráficos necesarios | AA (1.4.11) | ≥ 3:1 frente al color adyacente |

Es importante destacar que todas las citas de este trabajo se unifican a **WCAG 2.2**. Aunque esta versión añade nueve nuevos criterios, los criterios 1.4.1 y 1.4.3 no cambian respecto a 2.1. Además, el criterio 4.1.1 *Parsing* queda obsoleto [[Contraste WCAG]][[Niveles de conformidad WCAG]][[W3C — What's New in WCAG 2.2]].

### 4.3. Texto sobre imágenes, degradados y transparencias

Uno de los errores más habituales es medir el contraste sobre el color del token, en lugar de hacerlo sobre el color final renderizado. Cuando el texto se sitúa sobre una imagen, un degradado o una capa con transparencia, el color de fondo visible puede variar en distintas zonas. En estos casos, es necesario medir la zona con menor contraste o garantizar que se cumple el umbral en todas las áreas donde aparece el texto [[Verificación de contraste]][[Errores frecuentes de color]].

### 4.4. Herramientas y proceso de verificación

El proceso recomendado por WebAIM consiste en: localizar los elementos dependientes del color, realizar un escaneo automatizado, llevar a cabo una revisión manual con herramientas de medición, corregir en los tokens o en el CSS y volver a verificar tras los cambios. Herramientas como el *WebAIM Contrast Checker* permiten calcular el ratio con precisión, mientras que extensiones como WAVE ayudan a detectar casos evidentes [[Verificación de contraste]][[WebAIM — Comprobador de contraste]].

### 4.5. Casos que fallan y cómo corregirlos

El artículo de Pope Tech ofrece ejemplos prácticos. Un texto gris `#7C7C7C` sobre blanco presenta un ratio de 4,17:1, inferior al 4,5:1 exigido, que puede corregirse con `#6B6B6B` para alcanzar 5,36:1. Un botón azul `#1550ED` sobre un fondo oscuro `#112642` alcanza solo 2,46:1 (inferior al 3:1 exigido para componentes), que puede ajustarse a `#3365F0` para conseguir 3,08:1. Por último, un enlace `#0070C9` sobre texto `#333333` presenta 2,5:1, insuficiente para distinguirlo únicamente por color, por lo que se debe aumentar el contraste o añadir un subrayado [[Combinaciones de color (buenas y malas)]][[Pope Tech — Color contrast accessibility tools with examples]].

## 5. Significado y uso de los colores

### 5.1. Semántica funcional: error, éxito, aviso, información

Los colores semánticos asignan un significado estable a los estados del sistema. Tradicionalmente, el rojo se asocia a errores, el verde al éxito, el amarillo/naranja a advertencias y el azul a información. Sin embargo, este significado no proviene del color en sí, sino de una convención aprendida. Por este motivo, **nunca debe usarse el color como único canal**: todo estado semántico debe ir acompañado de texto, icono o forma para cumplir con el criterio 1.4.1 [[Colores semánticos]][[Uso del color (WCAG 1.4.1)]].

### 5.2. Convenciones culturales: ejemplos y cautelas

Las asociaciones culturales del color son aprendidas y varían según el contexto. Mientras que en muchas culturas occidentales el rojo se asocia al peligro, en China puede asociarse a la suerte. InfoQ advierte explícitamente que muchas de estas asociaciones son occidentales y que cambian entre culturas. Por su parte, SeedProd ofrece ejemplos divulgativos, pero no estudios interculturales. Dado que **no se ha consultado una fuente primaria de investigación intercultural**, las listas de significados que circulan en blogs se consideran **heurísticas**, no hechos universales [[Convenciones culturales del color]][[InfoQ — Colors and the UI]][[SeedProd — Teoría del color en diseño web]].

### 5.3. Estabilidad del significado y contexto de uso

Para que un color semántico sea eficaz, debe ser coherente en toda la aplicación. El usuario debe poder aprender que, por ejemplo, cualquier mensaje de error utiliza el mismo par de colores y el mismo tipo de icono. Además, el significado debe estar reforzado por el texto: un mensaje como «No se pudo guardar los cambios» es comprensible independientemente de la connotación cultural del tono utilizado [[Colores semánticos]][[Convenciones culturales del color]].

### 5.4. Errores: universalizar asociaciones y depender solo del tono

El principal error en este apartado es asumir que «el rojo siempre significa peligro» o que «el verde siempre significa éxito». Esto resulta especialmente problemático en productos con alcance internacional. También es incorrecto codificar estados únicamente con color, ya que esto excluye a personas con deficiencias de visión al color y no cumple con WCAG 1.4.1. La solución pasa por combinar color con otros elementos visuales, independientemente de las convenciones culturales [[Uso del color (WCAG 1.4.1)]][[Deficiencia de visión al color]].

## 6. Utilización del color para destacar información

### 6.1. Jerarquía y énfasis: una acción principal

El color es una de las herramientas más eficaces para guiar la atención, pero debe usarse con moderación. En cualquier vista debe existir, idealmente, **una única acción principal**. Material Design 3 refleja esta idea con sus roles de énfasis: *primary* para la acción más importante, *secondary* para acciones secundarias y *tertiary* para acentos puntuales. Esta asignación debe reforzarse con otros recursos como el tamaño, la posición o el espacio [[Jerarquía visual con color]][[Roles de color (Material Design 3)]].

### 6.2. Acento, llamadas a la acción y superficies

Los colores de acento deben reservarse para aquello que realmente requiere atención: un botón de llamada a la acción, una notificación importante o un indicador clave. Los colores de superficie, por el contrario, deben mantenerse neutros para no competir con el contenido. Como guía práctica, la regla 60-30-10 puede ayudar a mantener este equilibrio, siempre entendida como heurística y no como norma obligatoria [[Regla 60-30-10]][[Jerarquía visual con color]].

### 6.3. Estados interactivos y foco visible

Los estados interactivos (hover, activo, enfocado, deshabilitado) deben diferenciarse claramente del estado por defecto. Especial atención merece el **foco de teclado**: debe ser visible, tener suficiente contraste con el fondo y distinguirse del resto de estados. El hecho de que un elemento esté enfocado debe ser perceptible incluso para personas que naveguen únicamente con teclado [[Jerarquía visual con color]][[Uso del color (WCAG 1.4.1)]].

### 6.4. La regla de no usar solo color

El criterio 1.4.1 de WCAG 2.2 es fundamental en este apartado: el color no puede ser el único medio visual para transmitir información, indicar una acción, pedir una respuesta o distinguir un elemento. En la práctica, esto significa que un enlace debe distinguirse del texto no solo por color (idealmente con subrayado), que un error debe mostrar un mensaje de texto, y que los estados de los campos deben ir acompañados de indicaciones explícitas [[Uso del color (WCAG 1.4.1)]].

### 6.5. Cómo comprobar que el énfasis funciona

Para verificar la jerarquía, se recomienda hacer una prueba en **escala de grises**: si, al eliminar el color, sigue quedando claro cuál es la acción principal, la jerarquía es correcta. También conviene simular deficiencias de visión al color y comprobar que los elementos interactivos mantienen su distinción. Por último, debe verificarse el contraste tanto del estado por defecto como de los estados interactivos y del foco [[Deficiencia de visión al color]][[Verificación de contraste]].

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

### 7.3. Por qué se repiten

Estos errores se repiten año tras año porque son fáciles de introducir durante el desarrollo, difíciles de detectar a simple vista y, con frecuencia, no se incluyen en las comprobaciones manuales. Además, existe una tendencia a priorizar la estética sobre la legibilidad, o a asumir que el color de marca debe preservarse a toda costa. El hecho de que sean los errores más corregibles no implica que se corrijan sistemáticamente [[WebAIM Million 2026]][[Errores frecuentes de color]].

### 7.4. Cómo detectarlos antes de publicar

La detección eficaz requiere combinar automatización y revisión manual. Es necesario medir los pares reales con un comprobador de contraste, revisar la interfaz en escala de grises, simular deficiencias de visión al color, navegar con teclado para comprobar el foco y probar los estados y el modo oscuro. Además, conviene leer el mensaje sin fijarse en el color: si para entenderlo es imprescindible distinguir un tono, existe una dependencia cromática que debe corregirse [[Verificación de contraste]][[Errores frecuentes de color]].

## 8. Ejemplos de buenas y malas combinaciones

### 8.1. Criterio: función, ratio y segundo canal

Para juzgar una combinación, no basta con que sea visualmente atractiva. Es necesario seguir tres criterios: **función** (¿es texto, componente o decoración?), **ratio medible** (¿alcanza el umbral aplicable según WCAG 2.2?) y **segundo canal** (¿hay texto, icono, forma o patrón si el color transmite significado?). Un par puede cumplir el ratio y, aun así, fallar el criterio 1.4.1 si el significado depende exclusivamente del color [[Combinaciones de color (buenas y malas)]][[Uso del color (WCAG 1.4.1)]].

### 8.2. Tipos de combinación que fallan y por qué

Algunas combinaciones son sistemáticamente problemáticas. Los grises claros sobre blanco son los más frecuentes debido a su escasa diferencia de luminancia. Dos tonos saturados con luminancia similar pueden parecer distintos, pero tener un ratio insuficiente. Los esquemas complementarios no garantizan contraste. El texto sobre imágenes, degradados o transparencias es propenso a fallos. Por último, el uso de roles *container* para texto (tal como advierte Material Design 3) o la distinción de enlaces únicamente por color son errores recurrentes [[Esquemas de color]][[Material Design 3 — Color roles]][[Errores frecuentes de color]].

### 8.3. Tres ejemplos con ratio calculado

Tomando como referencia los ejemplos de Pope Tech, se pueden observar correcciones concretas:

| Caso | Combinación | Ratio | Resultado | Corrección propuesta |
| --- | --- | --- | --- | --- |
| Texto gris sobre blanco | `#7C7C7C` / `#FFFFFF` | 4,17:1 | No cumple (texto normal requiere ≥ 4,5:1) | `#6B6B6B` / `#FFFFFF` → 5,36:1 |
| Botón sobre fondo oscuro | `#1550ED` / `#112642` | 2,46:1 | No cumple (componente no textual requiere ≥ 3:1) | `#3365F0` / `#112642` → 3,08:1 |
| Enlace sobre texto | `#0070C9` sobre `#333333` (texto) | 2,5:1 | No cumple para distinguirse solo por color (se requiere ≥ 3:1) | Aumentar el contraste o añadir subrayado al enlace |

Estos valores son reproducibles con un comprobador de contraste y sirven como ejemplo didáctico [[Combinaciones de color (buenas y malas)]][[Pope Tech — Color contrast accessibility tools with examples]].

### 8.4. Qué convierte una combinación en buena

Una combinación es buena cuando cumple su función sin sacrificar legibilidad. Para texto, esto significa alcanzar el umbral correspondiente. Para componentes interactivos, el contraste debe ser suficiente en todos sus estados. Si transmite significado, debe haber un segundo canal. Además, debe seguir siendo distinguible en escala de grises y con simulación de daltonismo. Por último, la combinación debe integrarse en un sistema coherente de roles y tokens, no ser un caso aislado [[Verificación de contraste]][[Deficiencia de visión al color]][[Checklist de color para desarrolladores]].

## 9. Recomendaciones prácticas

### 9.1. Checklist para el desarrollador

Antes de dar por finalizado el trabajo con el color, se recomienda comprobar lo siguiente:

- **Definición**: cada color tiene una función y está definido como *token* con nombre por función.
- **Contraste**: texto normal ≥ 4,5:1, texto grande ≥ 3:1, componentes ≥ 3:1. Se mide el color final renderizado.
- **Estados**: se han verificado hover, foco, activo, deshabilitado y modo oscuro.
- **No solo color**: errores, enlaces, gráficos y campos obligatorios tienen un segundo canal.
- **Jerarquía**: existe una acción principal clara y el foco de teclado es visible.
- **Pruebas**: revisión en escala de grises, simulación de daltonismo y navegación con teclado.
- **Documentación**: se registran ratios, herramientas utilizadas y procedencia de las figuras [[Checklist de color para desarrolladores]].

### 9.2. Proceso mínimo antes de publicar

El proceso mínimo debe incluir un barrido con una herramienta automatizada, una revisión manual centrada en los puntos ciegos (imágenes, degradados, transparencias), la corrección directa en CSS o tokens, la verificación de los estados y una última comprobación tras los cambios. Si el proyecto está sujeto a requisitos normativos, conviene tener presente que la conformidad se declara por página completa y por nivel, y que el uso de WCAG 2.2 es el más recomendable en la actualidad [[Verificación de contraste]][[Niveles de conformidad WCAG]][[W3C — What's New in WCAG 2.2]].

### 9.3. Cierre: la marca se adapta al contraste

El color de marca es fundamental para la identidad, pero **la marca se adapta a los requisitos de legibilidad y contraste, no al contrario**. Si el color corporativo no alcanza el umbral para texto, debe reservarse para elementos gráficos o superficies donde el requisito sea menor, o bien ajustarse manteniendo su reconocimiento. De igual modo, las convenciones culturales pueden orientar, pero nunca deben imponerse por encima de la accesibilidad. Un diseño accesible no es un diseño menos atractivo, sino un diseño que funciona para más personas [[Color de marca]][[Convenciones culturales del color]][[Contraste WCAG]].

## Bibliografía y webgrafía

- Android Developers. *Color en Wear OS*. Google. Disponible en: [https://developer.android.com/design/ui/wear/guides/styles/color?hl=es](https://developer.android.com/design/ui/wear/guides/styles/color?hl=es)
- Bootcamp. *The 60-30-10 Color Rule for UI Design*. Medium. Disponible en: [https://bootcamp.uxdesign.cc/the-60-30-10-color-rule-for-ui-design-32695d04a7c2](https://bootcamp.uxdesign.cc/the-60-30-10-color-rule-for-ui-design-32695d04a7c2)
- CareerFoundry. *Introduction to Color Theory and Color Palettes*. Disponible en: [https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/](https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/)
- Google. *Material Design 3 — Color roles*. Disponible en: [https://m3.material.io/styles/color/roles](https://m3.material.io/styles/color/roles)
- InfoQ. *Colors and the UI*. Disponible en: [https://www.infoq.com/articles/Colors-UI/](https://www.infoq.com/articles/Colors-UI/)
- Pope Tech. *Color contrast accessibility tools with examples*. Disponible en: [https://blog.pope.tech/?p=7791](https://blog.pope.tech/?p=7791)
- SeedProd. *Teoría del color en diseño web*. Disponible en: [https://www.seedprod.com/es/web-design-color-theory/](https://www.seedprod.com/es/web-design-color-theory/)
- WebAIM. *Contrast Checker*. Disponible en: [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/)
- WebAIM. *Evaluating Contrast and Color for Accessibility*. Disponible en: [https://webaim.org/articles/contrast/](https://webaim.org/articles/contrast/)
- WebAIM. *WebAIM Million 2026*. Disponible en: [https://webaim.org/projects/million/](https://webaim.org/projects/million/)
- W3C. *Web Content Accessibility Guidelines (WCAG) 2.2*. Disponible en: [https://www.w3.org/TR/WCAG22/](https://www.w3.org/TR/WCAG22/)
- W3C/WAI. *Understanding Success Criterion 1.4.1: Use of Color*. Disponible en: [https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html)
- W3C/WAI. *Understanding Success Criterion 1.4.3: Contrast (Minimum)*. Disponible en: [https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- W3C/WAI. *What's New in WCAG 2.2*. Disponible en: [https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- Ministerio de la Presidencia, Relaciones con las Cortes e Igualdad. *Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público*. BOE-A-2018-12699. Disponible en: [https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699](https://www.boe.es/buscar/act.php?id=BOE-A-2018-12699)
