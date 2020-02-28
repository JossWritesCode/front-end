import React from "react";

const Button = ({ text = "", className = "", type = "submit" }) => {
  return (
    <button type={type} className={`${className} Button`}>
      {text}
    </button>
  );
};

export default Button;
