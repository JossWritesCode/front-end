import React from "react";

const Modal = ({ className, children }) => {
  return <div className={`${className} Modal`}>{children}</div>;
};

export default Modal;
