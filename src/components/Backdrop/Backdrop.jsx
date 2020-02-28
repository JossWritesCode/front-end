import React from "react";

const Backdrop = ({ className = "", onClickHandler }) => {
  return (
    <div className={`${className} Backdrop`} onClick={onClickHandler}></div>
  );
};

export default Backdrop;
