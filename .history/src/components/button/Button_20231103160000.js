import React from "react";

const Button = ({
  style = "",
  onClick = () => {},
  type = "button",
  ...rest
}) => {
  return <button
  type={type}
  onClick={onClick}
  
  ></button>;
};

export default Button;
