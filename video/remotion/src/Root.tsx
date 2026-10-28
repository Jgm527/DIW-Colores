import React from "react";
import { Composition } from "remotion";
import { Main } from "./Main";
import { FPS, VIDEO_W, VIDEO_H, TOTAL_FRAMES } from "./timing";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Main"
      component={Main}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={VIDEO_W}
      height={VIDEO_H}
    />
  );
};
