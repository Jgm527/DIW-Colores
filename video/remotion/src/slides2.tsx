import React from "react";
import { useCurrentFrame, interpolate, AbsoluteFill } from "remotion";
import { COL, bb, b, reg, semi, mono } from "./theme";
import { popUp, popRight, popScale, fade, growX, useCount, una, CheckSVG, CrossSVG, WarnSVG, stagger, Blobs, floatY, Confetti, wave } from "./anim";
import { SlideFrame, Card, chipStyle } from "./layout";
import type { Block } from "./timing";

// ============== S6 · El contraste ==============
export const S6: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const rows = [
    ["1:1 imposible", 120], ["4,5:1 texto normal", 540], ["7:1 AAA", 960], ["21:1 máximo", 1380],
  ] as const;
  // drama: negro hero (21:1) y foco sobre la demo ilegible
  const oOn = Math.min(
    interpolate(f, [210, 226], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(f, [470, 490], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  );
  const c21 = useCount(f, 230, 21);
  const spo = Math.min(
    interpolate(f, [600, 618], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
    interpolate(f, [810, 830], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
  );
  return (
    <SlideFrame block={block} kicker="El contraste" heading="El ratio decide si tu texto se lee." headingSize={72}>
      {/* demo buena */}
      <div style={{ position: "absolute", left: 100, top: 300, width: 830, borderRadius: 28, border: `3px solid ${COL.border}`, padding: 38, ...popUp(f, 12) }}>
        <div style={{ borderRadius: 16, border: "2px solid #D2D6DA", padding: "20px 40px" }}>
          <div style={{ ...b(40), color: COL.ink }}>Inscripciones abiertas</div>
          <div style={{ ...reg(30), marginTop: 6 }}>Reserva tu plaza antes del viernes.</div>
        </div>
        <div style={{ ...mono(30), marginTop: 28 }}>negro sobre blanco · 21:1</div>
        <div style={{ display: "flex", gap: 14, marginTop: 14, alignItems: "center", ...popScale(f, 30) }}>
          <span style={{ ...b(30), color: COL.green }}>Se lee sin esfuerzo</span>
          <CheckSVG size={30} color={COL.green} frame={f} delay={30} />
        </div>
      </div>
      {/* demo mala (se eleva sobre el velo durante el foco) */}
      <div style={{ position: "absolute", left: 970, top: 300, width: 850, borderRadius: 28, border: `3px solid ${COL.border}`, padding: 38, zIndex: 40, ...popUp(f, 20) }}>
        <div style={{ transform: `scale(${1 + 0.09 * spo}) translateY(${-10 * spo}px)`, transformOrigin: "center" }}>
          <div style={{ borderRadius: 16, border: "2px solid #D2D6DA", padding: "20px 40px" }}>
            <div style={{ ...b(40), color: "#BBBBBB" }}>Inscripciones abiertas</div>
            <div style={{ ...reg(30), color: "#BBBBBB", marginTop: 6 }}>Reserva tu plaza antes del viernes.</div>
          </div>
          <div style={{ ...mono(30), marginTop: 28 }}>#BBBBBB sobre blanco · <span style={{ color: COL.red, fontWeight: 800 }}>1,92:1</span></div>
          <div style={{ display: "flex", gap: 14, marginTop: 14, alignItems: "center", ...popScale(f, 38) }}>
            <span style={{ ...b(30), color: COL.red }}>Apenas se distingue</span>
            <CrossSVG size={28} color={COL.red} frame={f} delay={38} />
          </div>
        </div>
      </div>
      {/* escala */}
      <div style={{ position: "absolute", left: 100, top: 740, width: 1720, height: 40, borderRadius: 8, overflow: "hidden", ...growX(f, 46, 30) }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,#EAEDEF,#9AA0A6 45%,#202124)" }} />
      </div>
      {rows.map(([t, x], i) => (
        <div key={i} style={{ position: "absolute", left: x as number, top: 800, ...fade(f, 58 + i * 7) }}>
          <div style={{ ...b(28), color: COL.gray }}>{t}</div>
        </div>
      ))}
      <div style={{ position: "absolute", left: 100, top: 880, ...popScale(f, 82, 0.8) }}>
        <div style={{ ...bb(36), color: COL.red }}>El resultado NUNCA se redondea: 4,49:1 no cumple 4,5:1.</div>
      </div>
      {/* velo de foco */}
      {spo > 0.01 && (
        <div style={{ position: "absolute", inset: 0, background: "rgba(16,19,22,0.82)", opacity: spo, zIndex: 30 }} />
      )}
      {/* drama negro: 21:1 */}
      {oOn > 0.01 && (
        <div style={{ position: "absolute", inset: 0, background: "#000", opacity: oOn, zIndex: 60, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", transform: `scale(${(1 + interpolate(f, [226, 470], [0, 0.05], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })).toFixed(3)})` }}>
            <div style={{ ...bb(190), color: COL.white, letterSpacing: 2 }}>{Math.round(c21)}:1</div>
            <div style={{ ...b(52), color: COL.white, marginTop: 26 }}>Inscripciones abiertas</div>
            <div style={{ ...reg(36), color: "#DEE1E4", marginTop: 12 }}>Reserva tu plaza antes del viernes.</div>
            <div style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", marginTop: 34 }}>
              <span style={{ ...b(34), color: "#5BB974" }}>negro sobre blanco: se lee sin esfuerzo</span>
              <CheckSVG size={34} color="#5BB974" frame={f} delay={290} />
            </div>
          </div>
        </div>
      )}
    </SlideFrame>
  );
};

// ============== S7 · Umbrales WCAG ==============
export const S7: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const rows = [
    ["Texto normal", "≥ 4,5 : 1", COL.blue, "criterio 1.4.3"],
    ["Texto grande (≥24 px / negrita ≥18,7 px)", "≥ 3 : 1", COL.blue, "1.4.3"],
    ["Componentes e iconos (botones, campos…)", "≥ 3 : 1", COL.blue, "1.4.11"],
    ["Texto normal — nivel AAA", "≥ 7 : 1", COL.green, "1.4.6"],
  ] as const;
  return (
    <SlideFrame block={block} kicker="WCAG 2.2 · Nivel AA" heading="¿Cuánto contraste hace falta?" headingSize={76}>
      {rows.map(([r, ratio, col, crit], i) => {
        const S = [50, 275, 450, 670];
        const E = [275, 450, 670, 905];
        const sw = wave(f, S[i], E[i], 14);
        const pr = popRight(f, stagger(i, 10, 8), 70);
        return (
          <div
            key={i}
            style={{
              position: "absolute", left: 100, top: 300 + i * 128, width: 1720, height: 108,
              borderRadius: 20, background: sw > 0.05 ? "#FFFFFF" : COL.card,
              border: `3px solid rgba(11,87,208,${(0.6 * sw).toFixed(2)})`,
              boxShadow: sw > 0.6 ? "0 16px 36px rgba(11,87,208,0.14)" : "none",
              opacity: pr.opacity * (0.62 + 0.38 * sw),
              transform: `${pr.transform} scale(${(1 + 0.028 * sw).toFixed(3)})`,
              transformOrigin: "center",
            }}
          >
            <div style={{ position: "absolute", left: 40, top: 32, ...b(34) }}>{r}</div>
            <div style={{ position: "absolute", left: 950, top: 28, width: 400, textAlign: "center", ...mono(44), color: col, opacity: interpolate(f - stir(i), [0, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) }}>{ratio}</div>
            <div style={{ position: "absolute", right: 40, top: 40, ...reg(26), color: COL.gray }}>{crit}</div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 100, top: 880, ...fade(f, 58) }}>
        <div style={{ ...b(32), color: COL.gray }}>Mide el color FINAL que ve el usuario: hover · foco · imágenes · degradados · transparencias</div>
      </div>
      <div style={{ position: "absolute", left: 100, top: 936, ...fade(f, 66) }}>
        <div style={{ ...reg(30), color: COL.red }}>Truco: si tienes que entrecerrar los ojos para leer, ya tienes el diagnóstico.</div>
      </div>
    </SlideFrame>
  );
};

const stir = (i: number) => stagger(i, 22, 8);

// ============== S8 · Significado ==============
export const S8: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const defs = [
    { kind: "x", t: "ERROR", c: COL.red },
    { kind: "!", t: "AVISO", c: "#DA9C00" },
    { kind: "v", t: "ÉXITO", c: COL.green },
    { kind: "i", t: "INFO", c: COL.blue },
  ] as const;
  return (
    <SlideFrame block={block} kicker="Significado" heading="El color comunica… o aparenta comunicar." headingSize={68}>
      {defs.map((dd, i) => {
        const S = [60, 320, 580, 840];
        const E = [320, 580, 840, Math.max(block.frames + 20, 1060)];
        const sw = wave(f, S[i], E[i], 16);
        return (
          <div key={i} style={{ position: "absolute", left: 100 + i * 440, top: 300, width: 380, height: 230, ...popScale(f, stagger(i, 10, 8)) }}>
            <div style={{ width: "100%", height: "100%", borderRadius: 24, background: COL.card, textAlign: "center", transform: `scale(${(1 + 0.05 * sw).toFixed(3)}) translateY(${(-8 * sw).toFixed(1)}px)`, transformOrigin: "center", boxShadow: sw > 0.65 ? "0 18px 40px rgba(32,33,36,0.15)" : "none" }}>
              <div style={{ width: 60, height: 60, borderRadius: 30, background: dd.c, margin: "30px auto 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {dd.kind === "x" && <CrossSVG size={40} color={COL.white} frame={f} delay={stagger(i, 18, 8)} strokeWidth={5} />}
                {dd.kind === "v" && <CheckSVG size={40} color={COL.white} frame={f} delay={stagger(i, 18, 8)} strokeWidth={5.5} />}
                {dd.kind === "!" && <span style={{ ...bb(38), color: COL.white, lineHeight: 1, transform: "translateY(3px)" }}>!</span>}
                {dd.kind === "i" && <span style={{ fontFamily: "Georgia, serif", fontWeight: 900, fontSize: 42, color: COL.white, lineHeight: 1, transform: "translateY(-2px)" }}>i</span>}
              </div>
              <div style={{ ...bb(42), marginTop: 18 }}>{dd.t}</div>
            </div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 100, top: 590, width: 1720, height: 224, borderRadius: 24, background: COL.lyellow, padding: "24px 50px", ...popUp(f, 46) }}>
        <div style={{ display: "flex", gap: 22, alignItems: "flex-start" }}>
          <div style={{ marginTop: 4 }}><WarnSVG size={38} frame={f} delay={50} /></div>
          <div>
            <div style={{ ...bb(36) }}>No son universales:</div>
            <div style={{ ...reg(30), color: COL.gray, marginTop: 6 }}>lo “estándar” es sesgo occidental (Komischke, InfoQ) · el mismo color, dos mensajes:</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 26, marginTop: 22, marginLeft: 62 }}>
          <span style={{ background: COL.red, color: COL.white, borderRadius: 999, padding: "10px 30px", ...b(27), ...popScale(f, 96, 0.85) }}>Occidente → ERROR</span>
          <span style={{ background: COL.red, color: COL.white, borderRadius: 999, padding: "10px 30px", ...b(27), ...popScale(f, 140, 0.85) }}>China → ¡suerte!</span>
        </div>
      </div>
      <div style={{ position: "absolute", left: 100, top: 852, ...popUp(f, 60) }}>
        <span style={{ ...bb(36) }}>Regla 1.4.1 de WCAG: </span>
        <span style={{ ...b(36), color: COL.blue }}>el color nunca es el único canal → texto · icono · forma</span>
      </div>
      <div style={{ position: "absolute", left: 100, top: 928, ...fade(f, 68) }}>
        <div style={{ ...reg(30), color: COL.gray }}>Y coherencia total: el mismo estado, siempre los mismos colores, iconos y mensajes.</div>
      </div>
    </SlideFrame>
  );
};

// ============== S9 · Errores (WebAIM) ==============
export const S9: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const c = useCount(f, 16, 83.9);
  const items = [
    ["Significado solo por color", "par rojo-verde → se rompe con el daltonismo"],
    ["Enlaces poco evidentes", "solo se distinguen por ser azules, sin subrayado"],
    ["Texto sobre imágenes / degradados", "contraste medido sobre un fondo que no es el real"],
    ["Estados sin verificar", "hover · foco · active · disabled"],
    ["Sistema roto", "roles mal emparejados, valores “hardcode” y exceso de acentos"],
  ] as const;
  return (
    <SlideFrame block={block} kicker="WebAIM Million 2026" kickerColor={COL.red} heading="Los errores que se repiten año tras año" headingSize={64}>
      <div style={{ position: "absolute", left: 100, top: 290, width: 520, height: 400, borderRadius: 28, background: COL.lred, padding: "34px 46px", ...popRight(f, 8) }}>
        <div style={{ transform: `scale(${(1 + 0.014 * Math.sin(f * 0.055)).toFixed(3)})`, transformOrigin: "left top" }}>
          <div style={{ ...bb(96), color: COL.red }}>{una(c)}</div>
        </div>
        <div style={{ ...reg(30), marginTop: 2 }}>de portadas con texto<br />de bajo contraste</div>
        {/* barra del dato (se llena hasta 83,9 %) */}
        <div style={{ width: 428, height: 24, borderRadius: 12, background: "rgba(217,48,37,0.16)", marginTop: 22, overflow: "hidden" }}>
          <div style={{ width: (428 * 0.839 * interpolate(f, [80, 240], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })).toFixed(1), height: "100%", borderRadius: 12, background: COL.red }} />
        </div>
        <div style={{ ...reg(30), marginTop: 18 }}>media de 34 casos<br />por página</div>
      </div>
      {items.map(([t, sub], i) => (
        <div key={i} style={{ position: "absolute", left: 700, top: 280 + i * 112, ...popRight(f, stagger(i, 18, 8), 50) }}>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
            <div style={{ marginTop: 6 }}><CrossSVG size={30} color={COL.red} frame={f} delay={stagger(i, 24, 8)} /></div>
            <div>
              <div style={{ ...bb(34) }}>{t}</div>
              <div style={{ ...reg(27), color: COL.gray, marginTop: 4 }}>{sub}</div>
            </div>
          </div>
        </div>
      ))}
      <div style={{ position: "absolute", left: 700, top: 880, width: 1120, borderRadius: 24, background: COL.lred, padding: "24px 40px", ...popUp(f, 78) }}>
        <div style={{ ...b(32), color: COL.red }}>Si tienes que forzar la vista para leerlo… ese contraste es insuficiente.</div>
      </div>
    </SlideFrame>
  );
};

// ============== S10 · Checklist ==============
export const S10: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const checks = [
    "Cada color con una función definida como token",
    "Contraste medido sobre el color renderizado: 4,5:1 texto · 3:1 componentes",
    "Estados y modo oscuro probados de verdad",
    "Errores, enlaces y campos obligatorios con un segundo canal además del color",
    "Revisar: escala de grises · daltonismo · navegación con teclado",
  ];
  return (
    <SlideFrame block={block} kicker="Checklist antes de publicar" kickerColor={COL.green} heading="Marca ⇄ accesibilidad" headingSize={80}>
      {checks.map((c, i) => (
        <div key={i} style={{ position: "absolute", left: 120, top: 280 + i * 96, ...popRight(f, stagger(i, 10, 9), 60) }}>
          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <div style={{ width: 52, height: 52, borderRadius: 26, background: COL.lgreen, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <CheckSVG size={28} color={COL.green} frame={f} delay={stagger(i, 16, 9)} strokeWidth={5} />
            </div>
            <div style={{ ...reg(33) }}>{c}</div>
          </div>
        </div>
      ))}
      <div style={{ position: "absolute", left: 120, top: 782, ...popUp(f, 64) }}>
        <div style={{ ...b(34) }}>La prueba final: lees el mensaje, sin fijarte en el color, y se entiende.</div>
      </div>
      <div style={{ position: "absolute", left: 120, top: 872, ...popScale(f, 74, 0.85) }}>
        <div style={{ ...bb(46), color: COL.blue }}>La marca se adapta a la accesibilidad, no al revés.</div>
        <Confetti frame={f} delay={80} x={900} y={880} count={34} spreadR={420} />
      </div>
    </SlideFrame>
  );
};

// ============== S11 · Endcard ==============
export const S11: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const dots = [COL.blue, COL.blue2, COL.green, COL.yellow, COL.red];
  return (
    <AbsoluteFill style={{ background: "#0F1114", fontFamily: '"Segoe UI", system-ui, sans-serif', overflow: "hidden" }}>
      <Blobs frame={f} items={[
        { color: "rgba(11,87,208,0.5)", x: 300, y: -80, r: 640, sx: 46, sy: 34 },
        { color: "rgba(217,48,37,0.30)", x: 1250, y: 500, r: 560, sx: 40, sy: 38 },
        { color: "rgba(24,128,56,0.30)", x: 900, y: 760, r: 460, sx: 34, sy: 26 },
      ]} />
      {/* fundido de salida: el blanco de las slides se disuelve hacia el fondo oscuro */}
      <div style={{ position: "absolute", inset: 0, background: COL.white, opacity: interpolate(f, [0, 14], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }), zIndex: 5 }} />
      {dots.map((c, i) => {
        const cx = 960 - (dots.length - 1) * 55 + i * 110;
        return (
          <div key={i} style={{ position: "absolute", left: cx - 28, top: 270, width: 56, height: 56, borderRadius: 28, background: c, zIndex: 10, ...popScale(f, stagger(i, 4, 6)), ...floatY(f, 7, 0.09, i * 1.2) }} />
        );
      })}
      <div style={{ position: "absolute", width: "100%", top: 440, textAlign: "center", zIndex: 10, ...popUp(f, 20) }}>
        <div style={{ ...bb(82), color: COL.white }}>Color en Interfaces Web</div>
      </div>
      <div style={{ position: "absolute", width: "100%", top: 585, textAlign: "center", zIndex: 10, ...fade(f, 32) }}>
        <div style={{ ...reg(40), color: "#A0A8B2" }}>Un sistema, no decoración.</div>
      </div>
      <div style={{ position: "absolute", width: "100%", top: 700, textAlign: "center", zIndex: 10, ...popUp(f, 42) }}>
        <div style={{ ...b(34), color: COL.white }}>Javier Guisande Moreira &amp; Ángel Enrique Caballero Alonso</div>
      </div>
    </AbsoluteFill>
  );
};
