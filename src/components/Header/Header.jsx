import React from "react";

const Header = ({ className, title }) => {
  return (
    <div className={`${className} Header`}>
      <h2>{title}</h2>
    </div>
  );
};
export default Header;
