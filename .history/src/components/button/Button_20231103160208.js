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
    
      {children}
    </button>
  );
};

export default Button;
