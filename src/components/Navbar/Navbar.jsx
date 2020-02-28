import React from "react";
import { SideDrawerButton } from "../";

const Navbar = ({ className = "", visibilityHandler }) => {
  return (
    <div className={`${className} Navbar`}>
      <div className="Navbar-text">
        <div className="Navbar-text-company">sixr</div>
        <div>insight.culture.passion</div>
      </div>

      <SideDrawerButton onClickHandler={visibilityHandler} />
    </div>
  );
};

export default Navbar;
