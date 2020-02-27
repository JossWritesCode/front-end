import React from "react";

const Navbar = ({ className }) => {
  return (
    <div className={`${className} Navbar`}>
      <div className="Navbar-text">
        <div className="Navbar-text-company">sixr</div>
        <div>insight, culture, passion</div>
      </div>
    </div>
  );
};

export default Navbar;
