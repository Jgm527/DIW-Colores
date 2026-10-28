import React from "react";
import {
  interpolate,
  spring,
  useVideoConfig,
  Easing,
} from "remotion";

// Aparición con rebote desde abajo
export const popUp = (
  frame: number,
  delay = 0,
  dist = 34,
  damping = 13
) => {
  const { fps } = useVideoConfig();
  const s = spring({
    fps,
    frame: frame - delay,
    config: { damping, mass: 0.9 },
    durationInFrames: 45,
  });
  return {
    opacity: Math.min(1, s * 1.4),
    transform: `translateY(${(1 - s) * dist}px)`,
  };
};

// Aparición con rebote desde la derecha
export const popRight = (frame: number, delay = 0, distX = 60, damping = 14) => {
  const s = springCalc(frame, delay, damping);
  return {
    opacity: Math.min(1, s * 1.4),
    transform: `translateX(${(1 - s) * distX}px)`,
  };
};

// Flotación suave permanente (fase permite desfases entre elementos)
export const floatY = (frame: number, amp = 4, speed = 0.09, phase = 0) => ({
  transform: `translateY(${(Math.sin(frame * speed + phase) * amp).toFixed(2)}px)`,
});

// Máquina de escribir: devuelve el substring visible en ese frame
export const typed = (frame: number, t0: number, s: string, cps = 2.1) => {
  const n = Math.max(0, Math.min(s.length, Math.round((frame - t0) * cps)));
  return s.slice(0, n);
};

// Onda de énfasis: sube en s, baja en e (transiciones de r frames)
export const wave = (frame: number, s: number, e: number, r = 12) => {
  const a = Math.min(1, Math.max(0, (frame - s) / r));
  const b = Math.min(1, Math.max(0, (e - frame) / r));
  return Math.min(a, b);
};


// Título letra a letra
export const LetterPop: React.FC<{
  text: string; frame: number; delay?: number; step?: number;
  style?: React.CSSProperties; dy?: number;
}> = ({ text, frame, delay = 0, step = 2.5, style, dy = 26 }) => {
  const chars = Array.from(text);
  return (
    <div style={style}>
      {chars.map((ch, i) => {
        const d = delay + i * step;
        const s = springCalc(frame, d, 13);
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: Math.min(1, s * 1.6),
              transform: `translateY(${(1 - s) * dy}px)`,
            }}
          >
            {ch}
          </span>
        );
      })}
    </div>
  );
};

// Blobs de color difuminados (fondo vivo)
export const Blobs: React.FC<{
  frame: number;
  items: { color: string; x: number; y: number; r: number; sx?: number; sy?: number }[];
}> = ({ frame, items }) => (
  <>
    {items.map((blob, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          left: blob.x + Math.sin(frame * 0.013 + i * 2.1) * (blob.sx ?? 40),
          top: blob.y + Math.cos(frame * 0.011 + i * 1.7) * (blob.sy ?? 30),
          width: blob.r, height: blob.r, borderRadius: "50%",
          background: `radial-gradient(closest-side, ${blob.color}, transparent)`,
          filter: `blur(60px)`,
          opacity: 0.5,
        }}
      />
    ))}
  </>
);

// Ráfaga de confeti desde un punto
export const Confetti: React.FC<{
  frame: number; delay: number; x: number; y: number; count?: number; spreadR?: number;
}> = ({ frame, delay, x, y, count = 30, spreadR = 300 }) => {
  const palette = ["#0B57D0", "#188038", "#F9AB00", "#D93025", "#4C76E8"];
  const t = frame - delay;
  if (t < 0) return <></>;
  const ease = interpolate(t, [0, 40], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: "clamp",
  });
  const life = interpolate(t, [16, 72], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  if (life <= 0) return <></>;
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      {Array.from({ length: count }).map((_, i) => {
        const ang = (i / count) * Math.PI * 2 + 0.5;
        const dist = (spreadR / 2 + (i % 7) * 26) * ease;
        const cx = x + Math.cos(ang) * dist;
        const cy = y + Math.sin(ang) * dist * 0.7 - ease * 26 * ((i % 3) + 1);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: cx, top: cy, width: 11, height: 17, borderRadius: 3,
              background: palette[i % palette.length],
              transform: `rotate(${i * 33 + frame * (i % 2 ? 8 : -6)}deg)`,
              opacity: life,
            }}
          />
        );
      })}
    </div>
  );
};

// Escala tipo pop
export const popScale = (frame: number, delay = 0, from = 0.6) => {
  const s = springCalc(frame, delay, 12);
  return {
    opacity: Math.min(1, s * 2),
    transform: `scale(${from + (1 - from) * s})`,
  };
};

const springCalc = (frame: number, delay: number, damping: number) => {
  const { fps } = useVideoConfig();
  return spring({
    fps,
    frame: frame - delay,
    config: { damping, mass: 0.9 },
    durationInFrames: 45,
  });
};

// Simple fade
export const fade = (frame: number, delay = 0, dur = 15) => ({
  opacity: interpolate(frame - delay, [0, dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  }),
});

// Retraso suave secuencial
export const stagger = (i: number, base = 6, step = 7) => base + i * step;

// Crece desde la izquierda (barras, tiles)
export const growX = (frame: number, delay = 0, dur = 26, pct = 1) => {
  const s = interpolate(frame - delay, [0, dur], [0, pct], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  return {
    transform: `scaleX(${s})`,
    transformOrigin: "left center",
  };
};

// Contador con easing (para cifras como 95,9 %)
export const useCount = (
  frame: number,
  delay: number,
  to: number,
  dur = 34
) =>
  interpolate(frame - delay, [0, dur], [0, to], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

export const una = (v: number, dec = 1) =>
  v.toFixed(dec).replace(".", ",") + " %";

// ---- dibujo de marcas vectoriales mediante SVG ----------------------------
export const CheckSVG = ({
  size = 30,
  color,
  frame,
  delay = 0,
  strokeWidth = 5,
}: {
  size: number;
  color: string;
  frame: number;
  delay?: number;
  strokeWidth?: number;
}) => {
  const p = drawPct(frame, delay, 16);
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <path
        d="M4 18 L13 26 L28 7"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={44}
        strokeDashoffset={44 * (1 - p)}
      />
    </svg>
  );
};

export const CrossSVG = ({
  size = 30,
  color,
  frame,
  delay = 0,
  strokeWidth = 5,
}: {
  size: number;
  color: string;
  frame: number;
  delay?: number;
  strokeWidth?: number;
}) => {
  const p = drawPct(frame, delay, 16);
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <path
        d="M6 6 L26 26 M26 6 L6 26"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={58}
        strokeDashoffset={58 * (1 - p)}
      />
    </svg>
  );
};

export const WarnSVG = ({
  size = 34,
  frame,
  delay = 0,
}: {
  size: number;
  frame: number;
  delay?: number;
}) => {
  const p = drawPct(frame, delay, 14);
  return (
    <svg width={size} height={size} viewBox="0 0 36 32">
      <path
        d="M18 2 L35 30 L1 30 Z"
        stroke="#F9AB00"
        strokeWidth={4}
        fill="#F9AB00"
        fillOpacity={0.18 * p}
        strokeLinejoin="round"
        strokeDasharray={100}
        strokeDashoffset={100 * (1 - p)}
      />
      <line
        x1="18" y1="13" x2="18" y2="21" stroke="#202124" strokeWidth={3.4}
        opacity={p}
        strokeLinecap="round"
      />
      <circle cx="18" cy="26" r="1.9" fill="#202124" opacity={p} />
    </svg>
  );
};

const drawPct = (frame: number, delay: number, dur: number) =>
  interpolate(frame - delay, [0, dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.ease),
  });

// Flecha que se dibuja
export const ArrowSVG = ({
  width = 90,
  color,
  frame,
  delay = 0,
}: {
  width: number;
  color: string;
  frame: number;
  delay?: number;
}) => {
  const p = drawPct(frame, delay, 18);
  const h = width * 0.36;
  return (
    <svg width={width} height={h} viewBox={`0 0 100 36`}>
      <path
        d="M2 18 H80 M80 18 L58 6 M80 18 L58 30"
        stroke={color}
        strokeWidth={6}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={140}
        strokeDashoffset={140 * (1 - p)}
      />
    </svg>
  );
};
