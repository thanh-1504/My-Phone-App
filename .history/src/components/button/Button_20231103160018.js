import React from "react";

const Button = ({
  style = "",
  onClick = () => {},
  type = "button",
  ...rest
}) => {
  return <button type={type} onClick={onClick} className="" {...rest}></button>;
};

export default Button;
