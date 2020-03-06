import React from "react";

const FilterIcon = () => {
  return (
    <svg height="25" width="25">
      <g>
        <line
          x1="0"
          x2="22"
          y1="5"
          y2="5"
          style={{ strokeWidth: 2, stroke: "black", strokeLinecap: "round" }}
        />
        <circle
          cx="14"
          cy="5"
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
          y1="13"
          y2="13"
          style={{ strokeWidth: 2, stroke: "black", strokeLinecap: "round" }}
        />
        <circle
          cx="6"
          cy="13"
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
          y1="21"
          y2="21"
          style={{ strokeWidth: 2, stroke: "black", strokeLinecap: "round" }}
        />
        <circle
          cx="14"
          cy="21"
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
