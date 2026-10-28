# 📝 Guion del vídeo · Color en Interfaces Web

Vídeo de ~5:47 min en español, estilo divulgativo tipo Sajid.
Fuente canónica del texto: `estatico/guion.py` (campo `voz` de cada segmento).

Los tiempos son **estimados con el render definitivo**: cada bloque añade
**0,45 s de aire antes de la voz** y **0,4 s de cola después**, y la locución se
reproduce un **8 % más rápida** (`playbackRate 1.08`, tono intacto).
Total: 346,6 s (10 bloques con voz + endcard silencioso de 3,8 s).

---

## 00:00 · S01 — Gancho con datos  (0:00 → 0:25 · voz 0:01–0:25)

> El 95,9 % de las páginas más visitadas de internet falla en lo mismo. No lo
> ves a simple vista, pero está ahí: el 83,9 % tiene problemas de contraste.
> Texto que casi no se distingue del fondo. Y no es una cuestión estética: es
> ignorar cómo funciona el color en pantalla. En este vídeo vas a descubrir
> por qué el color en una interfaz web no es decoración, sino un sistema, y
> cómo construirlo como lo hace un profesional.

**En pantalla:** fondo con "aurora" de color en movimiento · título "El color /
no es decoración." letra a letra · dos tarjetas de datos (95,9 % azul /
83,9 % rojo, contando de 0) · ola viajera de 5 puntos de color.

---

## 00:25 · S02 — Las tres funciones del color  (0:25 → 0:54 · voz 0:25–0:54)

> En una interfaz web, el color cumple tres funciones. Primero, **jerarquía**:
> te dice qué es más importante, qué es interactivo y qué está por encima de
> qué. Segundo, **estado y significado**: éxito, error, advertencia, selección
> o foco. Y tercero, **identidad**: el color de marca. Pero atención, y en
> este orden: **la marca se adapta a los umbrales de contraste, no al revés**.
> Y cuidado con la segunda función: el color nunca puede ser el único canal
> para comunicar estado. Si una persona no distingue el rojo del verde, tu
> interfaz se rompe.

**En pantalla:** tarjetas 1·2·3 (jerarquía / estado / identidad); la que se
nombra se eleva y el resto se atenúa · pie: "el color nunca es el único
canal — texto · icono · forma".

---

## 00:54 · S03 — Valor ≠ Rol  (0:54 → 1:31 · voz 0:55–1:31)

> Primera idea clave: **no es lo mismo un valor que un rol**. Un código
> hexadecimal es solo un número: es mudo. No te dice si puedes poner texto
> encima, ni cómo se comporta en modo oscuro. Un rol, en cambio, define la
> función del color y de su pareja de contraste. Así verificas ese par una
> sola vez, y al cambiar de tema no hay que repintar componente por
> componente. En Material Design tres, el sistema de diseño de Google, hay
> veintiséis roles organizados en seis grupos: primario, secundario,
> terciario, error, superficie y borde. Un botón relleno usa el rol
> **primario** para el fondo, y el rol **on primario** para su texto. Si
> creas tu propio componente, lo mapeas a esos roles, en lugar de inventar
> colores nuevos.

**En pantalla:** tarjeta VALOR `#0B57D0` y tarjeta ROL, que se elevan al ser
explicadas · flecha dibujándose · fichas de los 6 grupos · botón de ejemplo
"on-primary →".

---

## 01:31 · S04 — Crear la paleta  (1:31 → 2:05 · voz 1:32–2:05)

> Con ese mapa, crear una paleta es diseñar un **sistema, no coleccionar
> tonos bonitos**. El punto de partida suele ser el color de marca: a partir
> de él generas familias con distintas luminosidades, para cubrir todos los
> estados posibles. Y aquí un detalle muy pro: generar esas escalas en RGB o
> hexadecimal es poco intuitivo. HSL ayuda, pero no es perceptualmente
> uniforme: puedes bajar la luminosidad y que el resultado no parezca más
> oscuro. Modelos como **OKLCH** ofrecen escalas mucho más coherentes al ojo.
> Y sea cual sea el modelo que elijas, los valores siempre se verifican con
> herramientas de contraste.

**En pantalla:** escalera de 9 fichas de azul (de claro a oscuro) que crece
en cascada · tarjetas HSL (aviso) y OKLCH (recomendación) que se destacan
cuando se mencionan.

---

## 02:05 · S05 — Proporción 60·30·10 + tokens  (2:05 → 2:40 · voz 2:06–2:39)

> ¿Y cómo reparto los colores en pantalla? La proporción clásica es **60, 30
> y 10**. Un 60 % para el color neutro de fondo. Un 30 % para el secundario o
> de marca. Y solo un 10 % para el acento. ¿Por qué funciona? Porque crea
> equilibrio visual: la llamada de atención destaca precisamente porque es
> escasa. Pero no te engañes: no es un estándar ni un requisito de
> accesibilidad, es solo una guía. Y sobre todo: la paleta se implementa con
> **tokens o variables CSS nombrados por función**. Color de error, no rojo
> oscuro. Y cada decisión, documentada con sus ratio medidos.

**En pantalla:** barra apilada 60/30/10 con las cifras contando desde 0 ·
tokens escritos con efecto máquina de escribir (✓ función frente a ✗
descripción).

---

## 02:40 · S06 — El ratio de contraste  (2:40 → 3:14 · voz 2:40–3:14)

> Ahora, el concepto que decide si todo esto funciona: **el contraste**. El
> ratio de contraste compara la luminosidad del color más claro con la del
> más oscuro. La escala va de 1 a 1, el mismo color, imposible de
> distinguir, hasta **21 a 1: negro sobre blanco, el contraste máximo**. ¿Qué
> significa un 4,5 a 1? Que el color más claro es 4,5 veces más luminoso que
> el más oscuro. Y aquí la norma es inflexible: el resultado **nunca se
> redondea**. Si un par da 4,49 a 1, no cumple la exigencia de 4,5, aunque
> visualmente la diferencia parezca casi inexistente.

**En pantalla:** dos tarjetas de ejemplo (legible ✓ 21:1 / ilegible ✗
1,92:1) · ***pantalla negra a todo frame con "21:1" gigante contando***
cuando se menciona negro sobre blanco · ***foco de cámara sobre la tarjeta
ilegible*** · barra de escala gradiente con marcas · rojo: "4,49:1 no cumple
4,5:1".

---

## 03:14 · S07 — Umbrales WCAG 2.2  (3:14 → 3:49 · voz 3:15–3:49)

> ¿Y cuánto contraste hace falta? La guía **WCAG 2.2**, la referencia mundial
> de accesibilidad web, marca los umbrales del nivel **doble A**. Para texto
> normal: **4,5 a 1**. Para texto grande y para componentes interactivos,
> como botones, campos o bordes: basta **3 a 1**. El nivel **triple A**, el
> más estricto, pide **7 a 1** para texto normal. Dos apuntes importantes.
> Mide siempre sobre el color final que ve el usuario, con hover, foco,
> transparencias o degradados incluidos; no la variable del token sobre
> papel. Y un truco rápido: **si tienes que entrecerrar los ojos para leer,
> ya tienes el diagnóstico**.

**En pantalla:** 4 filas de umbrales que aparecen y se **resaltan una a una**
conforme se enumeran · pie con el consejo ("color final") y el truco de
entrecerrar los ojos.

---

## 03:49 · S08 — Significado y contexto cultural  (3:49 → 4:26 · voz 3:50–4:26)

> Los colores también encienden significados. Rojo, error. Naranja o
> amarillo, aviso. Verde, éxito. Azul, información. Pero ojo: son
> convenciones muy extendidas, y también muy occidentales. En China, por
> ejemplo, el rojo se asocia a la **buena suerte**. Asumir que significan lo
> mismo en todo el mundo es uno de los errores que más se repiten en
> productos internacionales. La defensa es doble: mantener la **coherencia
> total**, el mismo estado usa siempre los mismos colores, iconos y
> mensajes. Y, una vez más: **jamás comunicar solo con color**. La regla
> **1.4.1 de WCAG** lo exige: texto, icono o forma, además del color.

**En pantalla:** los 4 estados (✗ ERROR · ! AVISO · ✓ ÉXITO · i INFO) con
iconos centrados, resaltándose cíclicamente según se mencionan · tarjetas
"Occidente → ERROR" / "China → ¡suerte!" · regla 1.4.1.

---

## 04:26 · S09 — Errores frecuentes (WebAIM Million 2026)  (4:26 → 5:05 · voz 4:27–5:05)

> ¿Por qué estos fallos se repiten año tras año? Porque son fáciles de
> introducir, difíciles de ver a simple vista y raramente entran en las
> pruebas manuales. El informe **WebAIM Millón 2026** lo deja claro: el texto
> de bajo contraste aparece en el **83,9 %** de las portadas, con una media
> de **34 casos por página**. También se repiten: significados apoyados solo
> en el color, como el par rojo-verde que se rompe con el daltonismo.
> Enlaces que solo se distinguen por ser azules. Texto sobre imágenes o
> degradados con el contraste mal medido. Y estados como hover, foco o
> deshabilitado que nadie verificó. Y sobre todo: si tienes que forzar la
> vista para leer, ese contraste es insuficiente.

**En pantalla:** tarjeta del 83,9 % con **barra que se llena** y número que
"respira" · los 5 errores frecuentes con ✗ apareciendo al ritmo de la voz ·
caja roja final.

---

## 05:05 · S10 — Cierre con checklist  (5:05 → 5:43 · voz 5:06–5:42)

> Antes de publicar, una lista de comprobación rápida. Cada color, con una
> función definida como token. El contraste, medido sobre el color
> renderizado: 4,5 a 1 para texto normal, y 3 a 1 para texto grande y
> componentes. Estados y modo oscuro, probados de verdad. Errores, enlaces
> y campos obligatorios, con un segundo canal además del color. Y una
> revisión final en escala de grises, simulando daltonismo y navegando con
> teclado. La prueba final: si lees el mensaje sin fijarte en el color y se
> entiende, el sistema funciona. Porque **la marca se adapta a la
> accesibilidad, y no al revés**. Un diseño accesible no es menos atractivo:
> es más usable para todo el mundo.

**En pantalla:** checklist de 5 puntos con ✓ que se marcan · **confeti** al
declarar "la marca se adapta a la accesibilidad, no al revés".

---

## 05:43 · S11 — Endcard  (5:43 → 5:47 · sin voz)

*(sin locución)*

**En pantalla:** fundido blanco→oscuro · aurora de colores en movimiento ·
5 puntos con vaivén · "Color en Interfaces Web" · "Un sistema, no
decoración." · **Javier Guisande Moreira & Ángel Enrique Caballero Alonso**.

---

## ⚠️ Reglas del guion

- La voz **nunca lee los códigos hex** (se muestran en pantalla si aplica).
- Números en formato español: "4,5 a 1", "83,9 %".
- La locución va **un 8 % acelerada** para que el vídeo dure ~5:47; al
  regenerarla, la duración real se recoge en `durations.json` y el render se
  re-ajusta solo.
- Para editar el guion: cambia el texto en `estatico/guion.py`, regenera los
  mp3 (`python estatico/make_audio.py davefx`), copia `estatico/audio/*.mp3`
  a `remotion/public/audio/` y re-renderiza (`npm run render`).
- Véase también el [README](README.md) con el detalle técnico de la pipeline.
