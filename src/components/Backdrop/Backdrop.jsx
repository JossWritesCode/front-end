import React from "react";

const Backdrop = ({ className = "", onClickHandler, modalType }) => {
  return (
    <div
      className={`${className} Backdrop`}
      onClick={e => onClickHandler(e, modalType)}
    ></div>
  );
};

export default Backdrop;
