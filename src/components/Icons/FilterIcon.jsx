import React from "react";

const FilterIcon = () => {
  return (
    <svg height="30" width="30">
      <g>
        <line
          x1="0"
          x2="22"
          y1="10"
          y2="10"
          style={{ strokeWidth: 2, stroke: "black", strokeLinecap: "round" }}
        />
        <circle
          cx="14"
          cy="10"
          r="3"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
      </g>
      <g>
        <line
          x1="0"
          x2="22"
          y1="18"
          y2="18"
          style={{ strokeWidth: 2, stroke: "black", strokeLinecap: "round" }}
        />
        <circle
          cx="6"
          cy="18"
          r="3"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
      </g>
      <g>
        <line
          x1="0"
          x2="22"
          y1="26"
          y2="26"
          style={{ strokeWidth: 2, stroke: "black", strokeLinecap: "round" }}
        />
        <circle
          cx="14"
          cy="26"
          r="3"
          stroke="black"
          strokeWidth="2"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default FilterIcon;
