# 🎬 Vídeo: Color en Interfaces Web

> 📝 **El guion completo con timestamps estimados está en [guion.md](guion.md)**

Vídeo divulgativo de ~5:47 min (1080p30, en español) generado por código a partir
del guion del proyecto. **No es diapositivas estáticas**: todo el movimiento
(anims, énfasis sincronizados con la voz, drama del contraste, confeti…) está
programado con [Remotion](https://www.remotion.dev/) y se re-renderiza desde cero.

> Autores: Javier Guisande Moreira & Ángel Enrique Caballero Alonso
> Proyecto DIW · DAW 2026-27

---

## Estructura

```
video/
├── final/
│   └── Color_en_Interfaces_Web.mp4      ← Vídeo definitivo con voz (entregable)
├── remotion/                            ← ⭐ Proyecto principal (animado, Remotion)
│   ├── src/                             ← Slides, animaciones, timing, tema
│   ├── public/audio/                    ← Locución por segmentos (seg01…seg10.mp3)
│   ├── package.json                     ← npm run render / silent / studio
│   └── …
├── estatico/                            ← Pipeline v1 (fallback, PIL + ffmpeg)
│   ├── guion.py                         ← 🔑 GUION fuente de todo (10 segmentos)
│   ├── make_audio.py                    ← Genera locución con Piper TTS local
│   ├── make_slides.py / make_video.py   ← PNG estáticos + ffmpeg concat
│   ├── audio/                           ← MP3 de voz medidos (durations.json)
│   ├── piper/                           ← Modelo TTS local davefx (~63 MB)
│   └── video_final.mp4                  ← Salida del pipeline v1
└── README.md                            ← este archivo
```

## Qué se ha usado

| Herramienta | Versión | Para qué |
|---|---|---|
| **Node.js** | 22.x | runtime de Remotion |
| **Remotion** (`@remotion/cli`, `remotion`) | 4.0.408 | composición y render del vídeo animado |
| **React** | 18.3 | motor de render de Remotion |
| **Python** | 3.14 | generación de locución (TTS) y pipeline v1 |
| **piper-tts** (paquete python `piper`) | — | voz neuronal 100 % local |
| Voz **Piper `es_ES / davefx / medium`** | — | `estatico/piper/davefx.onnx` |
| **ffmpeg / ffprobe** | 8.x | mp3 de voz, medición de duraciones |
| Pillow | — | pipeline v1 (PNG estáticos, fallback) |
| Tipografías | Segoe UI (sistema) | titulares y cuerpo (los ●✓✕⚠ son SVG dibujados a mano en `anim.tsx`) |

Tema visual: paleta Material del propio proyecto (#0B57D0, #D93025, #188038, #F9AB00)
definida en `remotion/src/theme.ts`.

---

## ⏱️ Cómo funciona el timing (importante)

- Cada bloque = `Segmento de voz + 0,45 s de aire antes + 0,4 s después`
  (`remotion/src/timing.ts`: `LEAD`, `TAIL`, `RATE`).
- La locución se reproduce a **`playbackRate={1.08}`** (un 8 % más rápida, tono intacto)
  → todo cálculo de duración usa `duracion/1.08`.
- `durations.json` (segundos reales de cada mp3, medidos con ffprobe) es la fuente
  única de verdad; `timing.ts` construye los 10 bloques + endcard silencioso (3,8 s).
- Si cambias el guion → regenera audio → `durations.json` se reescribe solo →
  el render de Remotion se re temporiza solo (nada más que tocar).

---

## 🔄 Regenerar el vídeo completo

### 1. Cambiar el guion (si procede)
Edita los textos de `estatico/guion.py` (campo `voz` de cada segmento).

### 2. Regenerar la locución
```powershell
# requiere: pip install piper-tts  ·  ffmpeg en el PATH
python estatico\make_audio.py davefx
```
Escribe los `segXX.mp3` + `durations.json` en `estatico/audio/`.
⚠️ Copia luego los mp3 a `remotion/public/audio/` (o hazlo a mano una vez).

Quirk conocido: con las versiones nuevas de piper se usa
`voice.synthesize_wav(texto, wave_file)` (no `synthesize`).

### 3. Renderizar con Remotion (el vídeo bueno)
```powershell
cd video\remotion
npm install          # solo la primera vez
npm run studio       # preview interactivo (opcional)
npm run render       # exporta out/Color_en_Interfaces_Web.mp4  (calidad CRF 14)
npm run silent       # misma exportación sin pista de voz (--muted)
```
El render tarda ~8-10 min (preset x264 `slow`). Duración esperada: ~346,6 s ·
1080p30. Comprueba el resultado con:

```powershell
ffprobe out\Color_en_Interfaces_Web.mp4
```

Pipeline v1 (estático, por si no hay Node):
```powershell
python estatico\make_slides.py   # regenera slides/*.png
python estatico\make_video.py    # concat con ffmpeg → video_final.mp4
```

---

## 🗺️ Mapa rápido del código Remotion

| Archivo | Contenido |
|---|---|
| `src/guion` equivalente | guion en `estatico/guion.py` (fuente del texto) |
| `src/timing.ts` | construye BLOCKS (start/frames de cada bloque), reglas de timing |
| `src/theme.ts` | colores, helpers de tipografía (`bb`, `b`, `reg`, `mono`) |
| `src/anim.tsx` | helpers de animación: popUp, popRight, popScale, fade, growX, wave, typed, LetterPop, Blobs, Confetti, floatY, CheckSVG, CrossSVG, WarnSVG, ArrowSVG |
| `src/layout.tsx` | `SlideFrame` (kicker + heading + barra de progreso), chips |
| `src/slides1.tsx` | S1 gancho, S2 funciones, S3 Material 3, S4 paleta, S5 60·30·10 |
| `src/slides2.tsx` | S6 contraste (drama negro 21:1), S7 umbrales WCAG, S8 significado, S9 WebAIM, S10 checklist, S11 endcard |
| `src/Main.tsx` | composición: bloque visual + pista de audio por bloque, crossfade Ken Burns |

Reglas de estilo del contenido: nunca se leen los códigos hex en la voz
(se muestran en pantalla), números en formato español (4,5 · 83,9 %),
y la voz nunca menciona lo que no está a la vista.
