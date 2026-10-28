import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame, interpolate } from "remotion";
import { BLOCKS, ENDCARD, progressPct, TOTAL_FRAMES, FPS } from "./timing";
import { SLIDES } from "./slides";
import { COL } from "./theme";

// Envoltorio de salida: al final de cada bloque la slide se atenúa con un
// ligero zoom-out, solapándose con la siguiente (crossfade)
const VisWrap: React.FC<{ outAt: number; frames: number; children: React.ReactNode }> = ({ outAt, frames, children }) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [outAt - 2, outAt + 13], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const outroS = interpolate(f, [outAt - 2, outAt + 13], [1, 0.96], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // cámara Ken Burns: acercamiento muy lento a lo largo del bloque
  const cam = 1 + 0.022 * Math.min(1, f / Math.max(outAt - 20, 1));
  const introScale = interpolate(f, [0, 10], [1.012, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: f < outAt - 2 ? undefined : o,
        transform: `scale(${(cam * outroS * introScale).toFixed(4)})`,
        transformOrigin: "50% 47%",
      }}
    >
      {children}
    </div>
  );
};

export const Main: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: COL.white }}>
      {BLOCKS.map((bl) => {
        const Slide = SLIDES[bl.slide];
        return (
          <React.Fragment key={bl.id}>
            {/* capa visual (se solapa 15 frames con el bloque siguiente) */}
            <Sequence from={bl.start} durationInFrames={bl.frames + 15}>
              <VisWrap outAt={bl.frames} frames={bl.frames}>
                <Slide block={bl} />
              </VisWrap>
            </Sequence>
            {/* capa de audio (timing intacto) */}
            <Sequence from={bl.start + bl.voiceOffsetFrames} durationInFrames={bl.frames - bl.voiceOffsetFrames - 2}>
              <Audio src={staticFile(`audio/${bl.id}.mp3`)} playbackRate={1.08} />
            </Sequence>
          </React.Fragment>
        );
      })}
      <Sequence from={ENDCARD.start} durationInFrames={ENDCARD.frames} name="endcard">
        {(() => {
          const S = SLIDES.s11;
          return <S block={ENDCARD} />;
        })()}
      </Sequence>
    </AbsoluteFill>
  );
};

const _ = progressPct; // mantiene el import vivo
const __ = TOTAL_FRAMES + FPS; // idem
