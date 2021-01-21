import { IconProps } from "interfaces";
import React from "react";

import iconList from "./list";

export default function Icon({ name, data, onClose }: IconProps) {
  const { path, viewBox = "0 0 24 24", color, e } = iconList[name];

  const handleOnIconClick = () => {
    e(encodeURIComponent(data.url), data.text, data.title);
    onClose();
  };

  return (
    <button
      onClick={handleOnIconClick}
      aria-label={name}
      className="ws-btn"
      style={{ background: color }}
    >
      <svg fill="white" viewBox={viewBox}>
        {path}
      </svg>
    </button>
  );
}
