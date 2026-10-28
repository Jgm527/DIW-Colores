import durations from "./durations.json";

export const FPS = 30;
export const VIDEO_W = 1920;
export const VIDEO_H = 1080;
export const RATE = 1.08;   // locución un 8 % más rápida, tono intacto
const LEAD = 0.45;          // aire antes de la voz en cada bloque
const TAIL = 0.4;           // respiro después
const ENDCARD_S = 3.8;

export type Block = {
  id: string;        // seg01…seg11
  slide: string;     // s01…s11
  hasVoice: boolean;
  voiceOffsetFrames: number; // dentro del bloque
  frames: number;
  start: number;     // frame global
  index: number;     // 0-based
};

const raw = durations as Record<string, number>;
const ORDER = Array.from({ length: 10 }, (_, i) => `seg${String(i + 1).padStart(2, "0")}`);

let cursor = 0;
export const BLOCKS: Block[] = ORDER.map((id, i) => {
  const frameS = LEAD + raw[id] / RATE + TAIL;
  const frames = Math.round(frameS * FPS);
  const b: Block = {
    id,
    slide: `s${String(i + 1).padStart(2, "0")}`,
    hasVoice: true,
    voiceOffsetFrames: Math.round(LEAD * FPS),
    frames,
    start: cursor,
    index: i,
  };
  cursor += frames;
  return b;
});

// endcard silencioso
export const ENDCARD: Block = {
  id: "seg11",
  slide: "s11",
  hasVoice: false,
  voiceOffsetFrames: 0,
  frames: Math.round(ENDCARD_S * FPS),
  start: cursor,
  index: 10,
};

export const TOTAL_FRAMES =
  BLOCKS.reduce((a, b) => a + b.frames, 0) + ENDCARD.frames;

// progreso: porcentaje acumulado al inicio de cada bloque
const nSegments = BLOCKS.length + 1;
export const progressPct = (idx: number) => ((idx + 1) / nSegments) * 100;
export const progressPctPrev = (idx: number) => (idx / nSegments) * 100;
