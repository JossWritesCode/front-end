import React from "react";

const Button = ({
  text = "",
  className = "",
  type = "submit",
  disabled = false,
  clickHandler,
  id
}) => {
  return (
    <button
      type={type}
      className={`${className} Button`}
      disabled={disabled}
      onClick={clickHandler}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;
