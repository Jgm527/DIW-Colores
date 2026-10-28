// Tema visual — la propia paleta del proyecto como identidad
export const COL = {
  ink: "#202124",
  gray: "#5F6368",
  blue: "#0B57D0",
  lblue: "#E8F0FE",
  blue2: "#4C76E8",
  red: "#D93025",
  lred: "#FDEBE9",
  green: "#188038",
  lgreen: "#E6F5EC",
  yellow: "#F9AB00",
  lyellow: "#FEF7E1",
  card: "#F1F3F4",
  border: "#E2E4E6",
  white: "#FFFFFF",
};

export const F_BLACK = '900 30px "Segoe UI", "Segoe UI Black", system-ui, sans-serif';
export const F_BOLD  = '700 30px "Segoe UI", system-ui, sans-serif';
export const F_SEMI  = '600 30px "Segoe UI", system-ui, sans-serif';
export const F_REG   = '400 30px "Segoe UI", system-ui, sans-serif';
export const F_MONO  = '700 30px Consolas, "Cascadia Mono", monospace';

// shorthands para inline styles
export const b    = (s: number) => ({ fontWeight: 700, fontSize: s });
export const bb   = (s: number) => ({ fontWeight: 900, fontSize: s });
export const reg  = (s: number) => ({ fontWeight: 400, fontSize: s });
export const semi = (s: number) => ({ fontWeight: 600, fontSize: s });
export const mono = (s: number) => ({
  fontFamily: '"Consolas", "Cascadia Mono", monospace',
  fontWeight: 700, fontSize: s,
});
