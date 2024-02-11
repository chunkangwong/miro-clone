"use client";

import { colorToCss } from "@/lib/utils";
import { useOthersConnectionIds, useOthersMapped } from "@/liveblocks.config";
import { shallow } from "@liveblocks/client";
import { memo } from "react";
import { Cursor } from "./cursor";
import { Path } from "./path";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((id) => (
        <Cursor key={id} connectionId={id} />
      ))}
    </>
  );
};

const Draft = () => {
  const others = useOthersMapped(
    (other) => ({
      pencilDraft: other.presence.pencilDraft,
      pencilColor: other.presence.pencilColor,
    }),
    shallow
  );

  return (
    <>
      {others.map(([key, other]) => {
        if (other.pencilDraft) {
          return (
            <Path
              key={key}
              x={0}
              y={0}
              points={other.pencilDraft}
              fill={other.pencilColor ? colorToCss(other.pencilColor) : "#000"}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export const CursorPresence = memo(() => {
  return (
    <>
      <Draft />
      <Cursors />
    </>
  );
});

CursorPresence.displayName = "CursorPresence";
