import React from "react";

const Button = ({
  style = "",
  onClick = () => {},
  type = "button",
  children,
  ...rest
}) => {
  return (
    <button type={type} onClick={onClick} className="text-white" {...rest}>
    <p>{children}</p>
    <p>Giao tận nơi hoặc </p>
    </button>
  );
};

export default Button;
