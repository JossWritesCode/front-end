import React from "react";

const SideDrawerButton = ({ className = "", onClickHandler }) => {
  return (
    <div className={`${className} SideDrawer-Button`} onClick={onClickHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SideDrawerButton;
