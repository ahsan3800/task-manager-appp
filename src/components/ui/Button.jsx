import React from "react";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  ...rest
}) => {
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
