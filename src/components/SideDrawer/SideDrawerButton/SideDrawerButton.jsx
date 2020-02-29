import React from "react";

const SideDrawerButton = ({ className = "", onClickHandler }) => {
  return (
    <div
      className={`${className} SideDrawer-Button`}
      onClick={e => onClickHandler(e, "sideDrawerMenu")}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SideDrawerButton;
