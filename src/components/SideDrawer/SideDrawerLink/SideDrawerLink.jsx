import React from "react";
import { Link } from "react-router-dom";

const SideDrawerLink = ({ text, className = "", to = "#", onClickHandler }) => {
  return (
    <Link to={to} className="link" onClick={onClickHandler}>
      <div className={`${className} SideDrawer-Menu-link`}>{text}</div>;
    </Link>
  );
};

export default SideDrawerLink;
