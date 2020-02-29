import React from "react";

const Button = ({
  text = "",
  className = "",
  type = "submit",
  disabled = false
}) => {
  return (
    <button type={type} className={`${className} Button`} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
