# -*- coding: utf-8 -*-
# Guion segmentado: cada bloque = un slide + un audio. Estilo Sajid (castero/divulgativo).

SEGMENTOS = [
    # 01 · Gancho con datos
    dict(
        slide="s01",
        voz="El 95,9 % de las páginas más visitadas de internet falla en lo mismo. No lo ves a simple vista, pero está ahí: el 83,9 % tiene problemas de contraste. Texto que casi no se distingue del fondo. Y no es una cuestión estética: es ignorar cómo funciona el color en pantalla. En este vídeo vas a descubrir por qué el color en una interfaz web no es decoración, sino un sistema, y cómo construirlo como lo hace un profesional."
    ),
    # 02 · Las tres funciones del color
    dict(
        slide="s02",
        voz="En una interfaz web, el color cumple tres funciones. Primero, jerarquía: te dice qué es más importante, qué es interactivo y qué está por encima de qué. Segundo, estado y significado: éxito, error, advertencia, selección o foco. Y tercero, identidad: el color de marca. Pero atención, y en este orden: la marca se adapta a los umbrales de contraste, no al revés. Y cuidado con la segunda función: el color nunca puede ser el único canal para comunicar estado. Si una persona no distingue el rojo del verde, tu interfaz se rompe."
    ),
    # 03 · Valores vs roles
    dict(
        slide="s03",
        voz="Primera idea clave: no es lo mismo un valor que un rol. Un código hexadecimal es solo un número: es mudo. No te dice si puedes poner texto encima, ni cómo se comporta en modo oscuro. Un rol, en cambio, define la función del color y de su pareja de contraste. Así verificas ese par una sola vez, y al cambiar de tema no hay que repintar componente por componente. En Material Design tres, el sistema de diseño de Google, hay veintiséis roles organizados en seis grupos: primario, secundario, terciario, error, superficie y borde. Un botón relleno usa el rol primario para el fondo, y el rol on primario para su texto. Si creas tu propio componente, lo mapeas a esos roles, en lugar de inventar colores nuevos."
    ),
    # 04 · Crear la paleta
    dict(
        slide="s04",
        voz="Con ese mapa, crear una paleta es diseñar un sistema, no coleccionar tonos bonitos. El punto de partida suele ser el color de marca: a partir de él generas familias con distintas luminosidades, para cubrir todos los estados posibles. Y aquí un detalle muy pro: generar esas escalas en RGB o hexadecimal es poco intuitivo. HSL ayuda, pero no es perceptualmente uniforme: puedes bajar la luminosidad y que el resultado no parezca más oscuro. Modelos como OKLCH ofrecen escalas mucho más coherentes al ojo. Y sea cual sea el modelo que elijas, los valores siempre se verifican con herramientas de contraste."
    ),
    # 05 · 60-30-10 y tokens
    dict(
        slide="s05",
        voz="¿Y cómo reparto los colores en pantalla? La proporción clásica es 60, 30 y 10. Un 60 % para el color neutro de fondo. Un 30 % para el secundario o de marca. Y solo un 10 % para el acento. ¿Por qué funciona? Porque crea equilibrio visual: la llamada de atención destaca precisamente porque es escasa. Pero no te engañes: no es un estándar ni un requisito de accesibilidad, es solo una guía. Y sobre todo: la paleta se implementa con tokens o variables CSS nombrados por función. Color de error, no rojo oscuro. Y cada decisión, documentada con sus ratio medidos."
    ),
    # 06 · El ratio de contraste
    dict(
        slide="s06",
        voz="Ahora, el concepto que decide si todo esto funciona: el contraste. El ratio de contraste compara la luminosidad del color más claro con la del más oscuro. La escala va de 1 a 1, el mismo color, imposible de distinguir, hasta 21 a 1: negro sobre blanco, el contraste máximo. ¿Qué significa un 4,5 a 1? Que el color más claro es 4,5 veces más luminoso que el más oscuro. Y aquí la norma es inflexible: el resultado nunca se redondea. Si un par da 4,49 a 1, no cumple la exigencia de 4,5, aunque visualmente la diferencia parezca casi inexistente."
    ),
    # 07 · Umbrales WCAG 2.2
    dict(
        slide="s07",
        voz="¿Y cuánto contraste hace falta? La guía WCAG 2.2, la referencia mundial de accesibilidad web, marca los umbrales del nivel doble A. Para texto normal: 4,5 a 1. Para texto grande y para componentes interactivos, como botones, campos o bordes: basta 3 a 1. El nivel triple A, el más estricto, pide 7 a 1 para texto normal. Dos apuntes importantes. Mide siempre sobre el color final que ve el usuario, con hover, foco, transparencias o degradados incluidos; no la variable del token sobre papel. Y un truco rápido: si tienes que entrecerrar los ojos para leer, ya tienes el diagnóstico."
    ),
    # 08 · Significado y contexto cultural
    dict(
        slide="s08",
        voz="Los colores también encienden significados. Rojo, error. Naranja o amarillo, aviso. Verde, éxito. Azul, información. Pero ojo: son convenciones muy extendidas, y también muy occidentales. En China, por ejemplo, el rojo se asocia a la buena suerte. Asumir que significan lo mismo en todo el mundo es uno de los errores que más se repiten en productos internacionales. La defensa es doble: mantener la coherencia total, el mismo estado usa siempre los mismos colores, iconos y mensajes. Y, una vez más: jamás comunicar solo con color. La regla 1.4.1 de WCAG lo exige: texto, icono o forma, además del color."
    ),
    # 09 · Errores frecuentes (WebAIM)
    dict(
        slide="s09",
        voz="¿Por qué estos fallos se repiten año tras año? Porque son fáciles de introducir, difíciles de ver a simple vista y raramente entran en las pruebas manuales. El informe WebAIM Millón 2026 lo deja claro: el texto de bajo contraste aparece en el 83,9 % de las portadas, con una media de 34 casos por página. También se repiten: significados apoyados solo en el color, como el par rojo verde que se rompe con el daltonismo. Enlaces que solo se distinguen por ser azules. Texto sobre imágenes o degradados con el contraste mal medido. Y estados como hover, foco o deshabilitado que nadie verificó. Y sobre todo: si tienes que forzar la vista para leer, ese contraste es insuficiente."
    ),
    # 10 · Cierre con checklist
    dict(
        slide="s10",
        voz="Antes de publicar, una lista de comprobación rápida. Cada color, con una función definida como token. El contraste, medido sobre el color renderizado: 4,5 a 1 para texto normal, y 3 a 1 para texto grande y componentes. Estados y modo oscuro, probados de verdad. Errores, enlaces y campos obligatorios, con un segundo canal además del color. Y una revisión final en escala de grises, simulando daltonismo y navegando con teclado. La prueba final: si lees el mensaje sin fijarte en el color y se entiende, el sistema funciona. Porque la marca se adapta a la accesibilidad, y no al revés. Un diseño accesible no es menos atractivo: es más usable para todo el mundo."
    ),
    # 11 · Endcard (sin voz, 3,5 s)
    dict(slide="s11", voz=None)
]
