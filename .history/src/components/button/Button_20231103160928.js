import React from "react";

const Button = ({
  style = "",
  onClick = () => {},
  type = "button",
  children,
  text = "",
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-bold text-white`
      {...rest}
    >
      <p>{children}</p>
      <p>{text}</p>
    </button>
  );
};

export default Button;
