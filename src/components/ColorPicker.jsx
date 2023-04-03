import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import useComponentVisible from "../hooks/useComponentVisible";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  const { ref, isComponentVisible } = useComponentVisible(true);
  return (
    <>
      {isComponentVisible && (
        <div ref={ref} className="absolute left-full ml-3 ">
          <SketchPicker
            color={snap.color}
            disableAlpha
            onChange={(color) => (state.color = color.hex)}
          />
        </div>
      )}
    </>
  );
};

export default ColorPicker;
