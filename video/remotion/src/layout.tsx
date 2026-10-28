import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { COL } from "./theme";
import { popUp, popRight, fade } from "./anim";
import type { Block } from "./timing";
import { progressPct, progressPctPrev, BLOCKS } from "./timing";

export const Kicker: React.FC<{ text: string; color?: string; block: Block }> = ({
  text,
  color = COL.blue,
  block,
}) => {
  const f = useCurrentFrame();
  return (
    <div style={{ position: "absolute", left: 100, top: 74, ...popRight(f, 0) }}>
      <div style={{ width: 46, height: 8, background: color, borderRadius: 4, marginBottom: 16, transformOrigin: "left" }} />
      <div style={{ color, ...{ fontWeight: 800, fontSize: 30 }, letterSpacing: 2 }}>
        {text.toUpperCase()}
      </div>
    </div>
  );
};

export const Heading: React.FC<{ text: string; size?: number; color?: string; y?: number }> = ({
  text,
  size = 74,
  color = COL.ink,
  y = 150,
}) => {
  const f = useCurrentFrame();
  return (
    <div style={{ position: "absolute", left: 100, top: y, maxWidth: 1720, ...popUp(f, 5, 30) }}>
      <div style={{ fontWeight: 900, fontSize: size, lineHeight: 1.12, color }}>{text}</div>
    </div>
  );
};

// ---- marco común de slide: fondo blanco + kicker + título + barra progreso
export const SlideFrame: React.FC<{
  block: Block;
  kicker: string;
  kickerColor?: string;
  heading: string;
  headingSize?: number;
  headingY?: number;
  children: React.ReactNode;
}> = ({ block, kicker, kickerColor, heading, headingSize = 74, headingY = 150, children }) => {
  const f = useCurrentFrame();
  const prev = block.index === 0 ? 0 : progressPctPrev(block.index);
  const cur = progressPct(block.index);
  const barPct = interpolate(f, [8, Math.min(60, block.frames - 8)], [prev, cur], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <AbsoluteFill style={{ background: COL.white, fontFamily: '"Segoe UI", system-ui, sans-serif', color: COL.ink }}>
      <Kicker text={kicker} color={kickerColor} block={block} />
      <Heading text={heading} size={headingSize} y={headingY} />
      {children}
      <div style={{ position: "absolute", left: 0, bottom: 0, width: "100%", height: 14, background: "#F0F1F2" }}>
        <div style={{ width: `${barPct}%`, height: "100%", background: COL.blue, borderRadius: 7 }} />
      </div>
    </AbsoluteFill>
  );
};

export const Card: React.FC<{
  style?: React.CSSProperties;
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
}> = ({ style, children, color = COL.card, borderColor, borderWidth = 0 }) => (
  <div
    style={{
      position: "absolute",
      background: color,
      borderRadius: 28,
      border: borderColor ? `${borderWidth}px solid ${borderColor}` : undefined,
      padding: 40,
      ...style,
    }}
  >
    {children}
  </div>
);

export const chipStyle = (bg: string, fg: string): React.CSSProperties => ({
  background: bg,
  color: fg,
  borderRadius: 16,
  padding: "12px 18px",
  fontWeight: 700,
  fontSize: 27,
  display: "inline-block",
});
