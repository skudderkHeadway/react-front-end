import React from "react";

const Button = ({ children, className, theme, ...rest }) => {
  return (
    // TODO: implement theme prop
    <button className={`p-2 ${className || ""}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
