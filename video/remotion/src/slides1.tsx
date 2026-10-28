import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COL, bb, b, reg, semi, mono } from "./theme";
import { popUp, popRight, popScale, fade, growX, useCount, una, CheckSVG, CrossSVG, ArrowSVG, stagger, LetterPop, Blobs, Confetti, wave, typed } from "./anim";
import { SlideFrame, Card, chipStyle } from "./layout";
import type { Block } from "./timing";

// ============== S1 · Gancho ==============
export const S1: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const c1 = useCount(f, 46, 95.9);
  const c2 = useCount(f, 54, 83.9);
  return (
    <SlideFrame block={block} kicker="Color en Interfaces Web" headingSize={0} heading="">
      <Blobs frame={f} items={[
        { color: "rgba(11,87,208,0.55)", x: 980, y: -120, r: 620, sx: 50, sy: 36 },
        { color: "rgba(24,128,56,0.30)", x: 1500, y: 640, r: 520, sx: 44, sy: 40 },
        { color: "rgba(249,171,0,0.28)", x: 40, y: 620, r: 460, sx: 36, sy: 28 },
      ]} />
      {/* título */}
      <LetterPop text="El color" frame={f} delay={2}
        style={{ position: "absolute", left: 100, top: 178, ...bb(110), lineHeight: 1.05 }} />
      <LetterPop text="no es decoración." frame={f} delay={16} step={2}
        style={{ position: "absolute", left: 100, top: 296, ...bb(110), color: COL.blue, lineHeight: 1.05 }} />
      <div style={{ position: "absolute", left: 100, top: 520, ...popUp(f, 30, 24) }}>
        <div style={{ ...reg(40), color: COL.gray, lineHeight: 1.35 }}>
          En una interfaz web el color es un<br />sistema: jerarquía, estado y accesibilidad.
        </div>
      </div>
      {/* dots */}
      {/* dots — ola viajera */}
      {[COL.blue, COL.green, COL.yellow, COL.red, COL.ink].map((c, i) => (
        <div key={i} style={{ position: "absolute", left: 100 + i * 74, top: 700, width: 54, height: 54, transform: `translateY(${(Math.sin(f * 0.09 - i * 1.15) * 8).toFixed(2)}px)` }}>
          <div style={{ width: 54, height: 54, borderRadius: 27, background: c, ...popScale(f, 34 + i * 4) }} />
        </div>
      ))}
      {/* stat cards */}
      <div style={{ position: "absolute", left: 1100, top: 250, display: "flex", gap: 24 }}>
        <div style={{ width: 360, height: 400, borderRadius: 28, background: COL.white, border: `3px solid ${COL.blue}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", ...popRight(f, 26) }}>
          <div style={{ ...bb(74), color: COL.blue, whiteSpace: "nowrap" }}>{una(c1)}</div>
          <div style={{ ...b(27), marginTop: 18, textAlign: "center", lineHeight: 1.4 }}>de las webs más<br />visitadas fallan<br />WCAG</div>
        </div>
        <div style={{ width: 360, height: 400, borderRadius: 28, background: COL.white, border: `3px solid ${COL.red}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", ...popRight(f, 36) }}>
          <div style={{ ...bb(74), color: COL.red, whiteSpace: "nowrap" }}>{una(c2)}</div>
          <div style={{ ...b(27), marginTop: 18, textAlign: "center", lineHeight: 1.4 }}>tiene texto<br />con bajo<br />contraste</div>
        </div>
      </div>
      <div style={{ position: "absolute", left: 1100, top: 686, ...fade(f, 60) }}>
        <div style={{ ...reg(24), color: COL.gray }}>FUENTE: WEBAIM MILLION 2026 · PRIMER MILLÓN DE PORTADAS</div>
      </div>
    </SlideFrame>
  );
};

// ============== S2 · Las tres funciones ==============
export const S2: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const cards = [
    ["1", "JERARQUÍA", "¿Qué es más importante?", "¿Qué es interactivo?", COL.blue, COL.lblue],
    ["2", "ESTADO", "Éxito · Error · Aviso", "Foco · Selección", "#DA9C00", COL.lyellow],
    ["3", "IDENTIDAD", "El color de marca", "se adapta al contraste", COL.green, COL.lgreen],
  ] as const;
  const T = [40, 400, 660, block.frames];
  return (
    <SlideFrame block={block} kicker="Las tres funciones del color" heading="No es bonito. Es funcional.">
      {cards.map(([n, t, l1, l2, fg, bgc], i): any => {
        const sw = wave(f, T[i], T[i + 1], 14);        // 0 = atenuada · 1 = primera fila
        const pu = popUp(f, stagger(i, 12), 40);
        return (
          <div
            key={i}
            style={{
              position: "absolute", left: 100 + i * 590, top: 320, width: 550, height: 380,
              transformOrigin: "center",
              opacity: pu.opacity * (0.45 + 0.55 * sw),
              transform: `${pu.transform} scale(${1 + 0.045 * sw}) translateY(${-14 * sw}px)`,
            }}
          >
            <div style={{ width: "100%", height: "100%", borderRadius: 28, background: bgc, padding: "44px 50px", boxShadow: sw > 0.6 ? "0 18px 44px rgba(32,33,36,0.16)" : "none" }}>
              <div style={{ ...bb(104), color: fg }}>{n}</div>
              <div style={{ ...bb(52), marginTop: -4 }}>{t}</div>
              <div style={{ ...reg(30), color: COL.gray, marginTop: 14 }}>{l1}</div>
              <div style={{ ...reg(30), color: COL.gray, marginTop: 8 }}>{l2}</div>
            </div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 100, top: 770, ...popUp(f, 40) }}>
        <span style={{ ...bb(38) }}>El color nunca es el único canal: </span>
        <span style={{ ...bb(38), color: COL.red }}> texto · icono · forma</span>
      </div>
      <div style={{ position: "absolute", left: 100, top: 856, ...fade(f, 48) }}>
        <span style={{ ...reg(30), color: COL.gray }}>En este orden: la marca se adapta a los umbrales de contraste, </span>
        <span style={{ ...b(30), color: COL.ink }}>no al revés.</span>
      </div>
    </SlideFrame>
  );
};

// ============== S3 · Valores vs roles ==============
export const S3: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const groups = ["primary", "secondary", "tertiary", "error", "surface", "outline"];
  return (
    <SlideFrame block={block} kicker="Material Design 3" heading="Un valor es un número. Un rol es una función." headingSize={64}>
      {/* VALOR */}
      <div style={{ position: "absolute", left: 100, top: 320, width: 730, height: 470, ...popUp(f, 10) }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 28, background: COL.card, padding: "46px 56px", boxSizing: "border-box", transform: `scale(${(1 + 0.03 * wave(f, 60, 660, 16)).toFixed(3)})`, transformOrigin: "center", boxShadow: wave(f, 60, 660, 16) > 0.65 ? "0 18px 44px rgba(32,33,36,0.14)" : "none" }}>
          <div style={{ ...b(34), color: COL.gray }}>VALOR</div>
          <div style={{ ...mono(78), marginTop: 16 }}>#0B57D0</div>
          <div style={{ ...reg(30), color: COL.gray, marginTop: 34, lineHeight: 1.5 }}>
            · No sabe nada: ¿lleva texto encima?<br />
            · ¿Cómo se comporta en modo oscuro?<br />
            · Cada componente, repintado a mano
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: 868, top: 515, ...popScale(f, 26) }}>
        <ArrowSVG width={96} color={COL.blue} frame={f} delay={26} />
      </div>
      {/* ROL */}
      <div style={{ position: "absolute", left: 1000, top: 320, width: 830, height: 470, ...popUp(f, 22) }}>
        <div style={{ width: "100%", height: "100%", borderRadius: 28, background: COL.white, border: `3px solid ${COL.blue}`, padding: "46px 56px", boxSizing: "border-box", transform: `scale(${(1 + 0.03 * wave(f, 660, Math.max(block.frames + 20, 680), 16)).toFixed(3)})`, transformOrigin: "center", boxShadow: wave(f, 660, block.frames + 20, 16) > 0.65 ? "0 18px 44px rgba(11,87,208,0.16)" : "none" }}>
          <div style={{ ...b(34), color: COL.blue }}>ROL</div>
          <div style={{ ...reg(30), color: COL.gray, lineHeight: 1.5, marginTop: 16 }}>
            · Fija el propósito y su pareja de contraste:<br />
            &nbsp;&nbsp;se verifica una sola vez<br />
            · Cambia de tema sin repintar componentes<br />
            · Componente nuevo → roles existentes
          </div>
          {/* botón ejemplo */}
          <div style={{ position: "absolute", left: 0, bottom: 40, width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 24, ...fade(f, 40) }}>
            <span style={{ ...mono(28), ...popScale(f, 44, 0.9) }}>on-primary →</span>
            <div style={{ ...popScale(f, 40) }}>
              <div style={{ background: COL.blue, color: COL.white, borderRadius: 43, padding: "18px 60px", ...b(30) }}>Primary</div>
            </div>
          </div>
        </div>
      </div>
      {/* chips */}
      {groups.map((g, i) => (
        <div key={g} style={{ position: "absolute", left: 100 + i * 296, top: 850, ...popUp(f, stagger(i, 48)) }}>
          <div style={chipStyle(COL.lblue, COL.blue)}>{g}</div>
        </div>
      ))}
      <div style={{ position: "absolute", left: 100, top: 928, ...fade(f, 70) }}>
        <div style={{ ...reg(28), color: COL.gray }}>26 roles estándar organizados en 6 grupos</div>
      </div>
    </SlideFrame>
  );
};

// ============== S4 · La paleta es un sistema ==============
export const S4: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  // escalera HSL: de claro a oscuro con hue 217
  const tiles = Array.from({ length: 9 }, (_, i) => {
    const v = 0.97 - i * (0.85 / 9);
    const s = 0.96 - i * 0.066;
    const c = hslToHex(218 / 360, s, v);
    return c;
  });
  return (
    <SlideFrame block={block} kicker="Crear la paleta" heading="La paleta es un sistema, no una colección." headingSize={62}>
      {tiles.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute", left: 100 + i * 190, top: 300, width: 180, height: 250,
            background: c, outline: "2px solid #E6E8EB", ...growX(f, stagger(i, 12, 5), 22),
          }}
        />
      ))}
      <div style={{ position: "absolute", left: 100, top: 585, ...fade(f, 60) }}>
        <div style={{ ...reg(29), color: COL.gray }}>Familias con distintas luminosidades, desde el color de marca → cubren todos los estados</div>
      </div>
      {/* HSL */}
      {(() => {
        const swH = wave(f, 560, 745, 16);
        const swO = wave(f, 745, Math.max(block.frames + 20, 760), 16);
        const puH = popUp(f, 66);
        const puO = popUp(f, 74);
        return (
          <>
            <div style={{ position: "absolute", left: 100, top: 655, width: 840, height: 190, borderRadius: 24, background: COL.lred, padding: "30px 50px", transformOrigin: "center", ...puH, opacity: puH.opacity * (0.55 + 0.45 * swH), transform: `${puH.transform} scale(${(1 + 0.04 * swH).toFixed(3)})` }}>
              <div style={{ ...bb(40), color: COL.red }}>HSL</div>
              <div style={{ ...reg(29), color: COL.ink, lineHeight: 1.4, marginTop: 8 }}>
                Limitada: “bajar la L” no siempre se ve más oscuro<br />
                … y dos pasos de L ≠ misma diferencia visual
              </div>
            </div>
            {/* OKLCH */}
            <div style={{ position: "absolute", left: 980, top: 655, width: 840, height: 190, borderRadius: 24, background: COL.lgreen, padding: "30px 50px", transformOrigin: "center", ...puO, opacity: puO.opacity * (0.55 + 0.45 * swO), transform: `${puO.transform} scale(${(1 + 0.04 * swO).toFixed(3)})` }}>
              <div style={{ ...bb(40), color: COL.green }}>OKLCH / LCH</div>
              <div style={{ ...reg(29), color: COL.ink, lineHeight: 1.4, marginTop: 8 }}>
                Perceptualmente uniforme: escalas coherentes al ojo<br />
                En ambos casos: se verifica con herramientas de contraste
              </div>
            </div>
          </>
        );
      })()}
    </SlideFrame>
  );
};

function hslToHex(h: number, s: number, l: number) {
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    const v = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(255 * v).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// ============== S5 · 60·30·10 + tokens ==============
export const S5: React.FC<{ block: Block }> = ({ block }) => {
  const f = useCurrentFrame();
  const seg = [
    { lbl: "60%", frac: 0.6, bg: COL.card, fg: COL.ink },
    { lbl: "30%", frac: 0.3, bg: COL.blue, fg: COL.white },
    { lbl: "10%", frac: 0.1, bg: COL.yellow, fg: COL.ink },
  ];
  let cum = 0.6;
  return (
    <SlideFrame block={block} kicker="La proporción 60 · 30 · 10" heading="Equilibrio visual: el acento destaca porque es escaso." headingSize={60}>
      {/* barra apilada */}
      <div style={{ position: "absolute", left: 100, top: 330, width: 1720, height: 180 }}>
        {seg.map((sgm, i) => {
          const left = i === 0 ? 0 : i === 1 ? 60 : 90;
          const startX = (left / 100) * 1720;
          return (
            <div
              key={i}
              style={{
                position: "absolute", left: startX, top: 0,
                width: sgm.frac * 1720, height: 180, background: sgm.bg,
                outline: "4px solid #FFF", ...growX(f, stagger(i, 12, 9), 30),
              }}
            >
              <div style={{
                ...bb(56), color: sgm.fg, textAlign: "center", lineHeight: "180px",
                opacity: interpolate(f - stagger(i, 12, 9), [16, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
              }}>{Math.round(useCount(f, stagger(i, 12, 9) + 14, [60, 30, 10][i]))} %</div>
            </div>
          );
        })}
      </div>
      {[
        { x: 100, t: "Color base / neutro" },
        { x: 1132, t: "Secundario · marca" },
        { x: 1636, t: "Acento" },
      ].map((it, i) => (
        <div key={i} style={{ position: "absolute", left: it.x, top: 540, ...fade(f, 44 + i * 8) }}>
          <div style={{ ...b(30), color: COL.gray }}>{it.t}</div>
        </div>
      ))}
      {/* token card */}
      {(() => {
        const t1 = typed(f, 66, "--color-error: D93025", 0.55);
        const t2 = typed(f, 160, "--rojo-oscuro: D93025", 0.55);
        return (
          <div style={{ position: "absolute", left: 100, top: 640, width: 1720, height: 170, borderRadius: 24, background: "#EDF2F9", padding: "28px 50px", ...popUp(f, 56) }}>
            <div style={{ ...b(34) }}>token = función, no apariencia:</div>
            <div style={{ display: "flex", alignItems: "center", gap: 28, marginTop: 14 }}>
              <span style={{ ...mono(34), color: "#3A3C40" }}>{t1}<span style={{ opacity: f > 62 && f < 112 ? (Math.floor(f / 4) % 2) : 0 }}>▌</span></span>
              <span style={{ ...popScale(f, 108, 0.9) }}>{t1.length >= 21 ? <CheckSVG size={30} color={COL.green} frame={f} delay={108} /> : null}</span>
              <span style={{ ...mono(34), color: "#3A3C40", marginLeft: 120 }}>{t2}<span style={{ opacity: f > 156 && f < 206 ? (Math.floor(f / 4) % 2) : 0 }}>▌</span></span>
              <span style={{ ...popScale(f, 202, 0.9) }}>{t2.length >= 21 ? <CrossSVG size={28} color={COL.red} frame={f} delay={202} /> : null}</span>
            </div>
          </div>
        );
      })()}
      <div style={{ position: "absolute", left: 100, top: 862, ...fade(f, 90) }}>
        <div style={{ ...b(32), color: COL.gray }}>Guía práctica de equilibrio · NO es un estándar ni un requisito WCAG</div>
      </div>
    </SlideFrame>
  );
};
