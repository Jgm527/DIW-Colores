import React from "react";
import { S1, S2, S3, S4, S5 } from "./slides1";
import { S6, S7, S8, S9, S10, S11 } from "./slides2";

export const SLIDES: Record<string, React.FC<{ block: any }>> = {
  s01: S1, s02: S2, s03: S3, s04: S4, s05: S5,
  s06: S6, s07: S7, s08: S8, s09: S9, s10: S10, s11: S11,
};
