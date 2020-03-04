import React from "react";

const WindowPane = () => {
  return (
    <svg height="25" width="25">
      <rect
        x="5"
        y="5"
        width="7"
        height="7"
        rx="1"
        ry="1"
        style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
      />
      <rect
        x="15"
        y="15"
        width="7"
        height="7"
        rx="1"
        ry="1"
        style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
      />
      <rect
        x="5"
        y="15"
        width="7"
        height="7"
        rx="1"
        ry="1"
        style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
      />
      <rect
        x="15"
        y="5"
        width="7"
        height="7"
        rx="1"
        ry="1"
        style={{ fill: "white", stroke: "black", strokeWidth: 2 }}
      />
    </svg>
  );
};

export default WindowPane;
